import { createClient } from "npm:@supabase/supabase-js@2";
import { type StripeEnv, createStripeClient, verifyWebhook } from "../_shared/stripe.ts";
import { sendTemplateEmail } from "../_shared/transactional-email-templates/send-email.ts";
import { logEmailSend } from "../_shared/email-send-log.ts";

const PAYMENT_ALERT_RECIPIENT = "hello@hellowebby.com";

function formatMoney(amount: number | null | undefined, currency: string | null | undefined) {
  if (amount == null) return "—";
  const code = (currency ?? "eur").toUpperCase();
  try {
    return new Intl.NumberFormat("en-IE", { style: "currency", currency: code }).format(amount / 100);
  } catch {
    return `${(amount / 100).toFixed(2)} ${code}`;
  }
}

// Sends the internal "new payment" alert. Only called from verified Stripe
// events; details are re-read from Stripe, never taken from the browser.
async function notifyPayment(sessionId: string, env: StripeEnv) {
  try {
    const stripe = createStripeClient(env);
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "line_items.data.price.product"],
    });
    const lineItems = (session.line_items?.data ?? []).map((li: any) => {
      const price = li.price;
      const product = price && typeof price.product !== "string" ? price.product : null;
      const rec = price?.recurring;
      return {
        description: li.description ?? product?.name ?? "Item",
        amountTotal: formatMoney(li.amount_total, session.currency),
        recurringLabel: rec
          ? `every ${rec.interval_count > 1 ? `${rec.interval_count} ` : ""}${rec.interval}${rec.interval_count > 1 ? "s" : ""}`
          : null,
      };
    });
    const customerEmail = session.customer_details?.email ?? session.customer_email ?? null;

    const result = await sendTemplateEmail("payment-notification", PAYMENT_ALERT_RECIPIENT, {
      templateData: {
        customerEmail,
        total: formatMoney(session.amount_total, session.currency),
        lineItems,
        sessionId: session.id,
        environment: env,
      },
      // Stripe retries webhooks; one alert per checkout session.
      idempotencyKey: `payment-notification-${session.id}`,
      replyTo: customerEmail ?? undefined,
    });
    await logEmailSend({
      templateName: "payment-notification",
      recipientEmail: PAYMENT_ALERT_RECIPIENT,
      status: result.sent ? "sent" : "suppressed",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Payment notification failed", { sessionId, message });
    await logEmailSend({
      templateName: "payment-notification",
      recipientEmail: PAYMENT_ALERT_RECIPIENT,
      status: "failed",
      errorMessage: message,
    });
  }
}

let _supabase: ReturnType<typeof createClient> | null = null;
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
  }
  return _supabase;
}

function priceKey(item: any) {
  return item?.price?.lookup_key
    || item?.price?.metadata?.lovable_external_id
    || item?.price?.id
    || "unknown";
}

async function upsertSubscription(subscription: any, env: StripeEnv) {
  const item = subscription.items?.data?.[0];
  const periodStart = item?.current_period_start ?? subscription.current_period_start;
  const periodEnd = item?.current_period_end ?? subscription.current_period_end;

  await getSupabase().from("subscriptions").upsert(
    {
      stripe_subscription_id: subscription.id,
      stripe_customer_id: subscription.customer,
      customer_email: subscription.metadata?.customerEmail ?? null,
      product_id: item?.price?.product ?? "unknown",
      price_id: priceKey(item),
      status: subscription.status,
      current_period_start: periodStart ? new Date(periodStart * 1000).toISOString() : null,
      current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      cancel_at_period_end: subscription.cancel_at_period_end || false,
      environment: env,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "stripe_subscription_id" },
  );
}

async function handleWebhook(req: Request, env: StripeEnv) {
  const event = await verifyWebhook(req, env);

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
      await upsertSubscription(event.data.object, env);
      break;
    case "customer.subscription.deleted":
      await getSupabase()
        .from("subscriptions")
        .update({ status: "canceled", updated_at: new Date().toISOString() })
        .eq("stripe_subscription_id", event.data.object.id)
        .eq("environment", env);
      break;
    case "checkout.session.completed": {
      // Delayed methods (SEPA etc.) report "unpaid" until they settle; wait for
      // async_payment_succeeded in that case.
      const session = event.data.object;
      if (session.payment_status !== "unpaid") {
        await notifyPayment(session.id, env);
      }
      break;
    }
    case "checkout.session.async_payment_succeeded":
      await notifyPayment(event.data.object.id, env);
      break;
    case "invoice.paid":
      console.log("Payment event:", event.type);
      break;
    default:
      console.log("Unhandled event:", event.type);
  }
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const rawEnv = new URL(req.url).searchParams.get("env");
  if (rawEnv !== "sandbox" && rawEnv !== "live") {
    console.error("Invalid env query parameter:", rawEnv);
    return new Response(JSON.stringify({ received: true, ignored: "invalid env" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await handleWebhook(req, rawEnv);
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Webhook error:", e);
    return new Response("Webhook error", { status: 400 });
  }
});
