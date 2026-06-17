import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Body {
  sessionId: string;
  environment: StripeEnv;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { sessionId, environment } = (await req.json()) as Body;
    if (!sessionId || !environment) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!/^cs_(live|test)_[a-zA-Z0-9]+$/.test(sessionId)) {
      return new Response(JSON.stringify({ error: "Invalid sessionId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripe = createStripeClient(environment);
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "line_items.data.price.product"],
    });

    const lineItems = (session.line_items?.data ?? []).map((li) => {
      const price = li.price;
      const product = price && typeof price.product !== "string" ? price.product : null;
      return {
        description: li.description ?? product?.name ?? "Item",
        amountSubtotal: li.amount_subtotal,
        amountTotal: li.amount_total,
        quantity: li.quantity,
        recurring: price?.recurring
          ? { interval: price.recurring.interval, intervalCount: price.recurring.interval_count }
          : null,
      };
    });

    return new Response(
      JSON.stringify({
        status: session.status,
        paymentStatus: session.payment_status,
        customerEmail: session.customer_details?.email ?? session.customer_email ?? null,
        currency: session.currency,
        amountTotal: session.amount_total,
        mode: session.mode,
        lineItems,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("get-checkout-session error", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});