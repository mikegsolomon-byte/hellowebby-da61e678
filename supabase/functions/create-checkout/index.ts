import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Body {
  planPriceId: string;
  setupPriceId?: string;
  customerEmail?: string;
  returnUrl: string;
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
    const body = (await req.json()) as Body;
    const { planPriceId, setupPriceId, customerEmail, returnUrl, environment } = body;

    if (!planPriceId || !returnUrl || !environment) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const idPattern = /^[a-zA-Z0-9_-]+$/;
    if (!idPattern.test(planPriceId) || (setupPriceId && !idPattern.test(setupPriceId))) {
      return new Response(JSON.stringify({ error: "Invalid priceId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripe = createStripeClient(environment);

    const lookupKeys = setupPriceId ? [planPriceId, setupPriceId] : [planPriceId];
    const prices = await stripe.prices.list({ lookup_keys: lookupKeys });
    const planPrice = prices.data.find((p) => p.lookup_key === planPriceId);
    if (!planPrice) throw new Error("Plan price not found");
    const setupPrice = setupPriceId
      ? prices.data.find((p) => p.lookup_key === setupPriceId)
      : undefined;
    if (setupPriceId && !setupPrice) throw new Error("Setup price not found");

    // Resolve / create customer (by email) so future portal/lookups work.
    let customerId: string | undefined;
    if (customerEmail) {
      const existing = await stripe.customers.list({ email: customerEmail, limit: 1 });
      customerId = existing.data[0]?.id ??
        (await stripe.customers.create({ email: customerEmail })).id;
    }

    // Recurring plan goes in line_items (billed every period).
    // Setup fee goes in subscription_data.add_invoice_items so it is
    // added to ONLY the first invoice — never on renewals.
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: planPrice.id, quantity: 1 }],
      mode: "subscription",
      ui_mode: "embedded_page",
      return_url: returnUrl,
      ...(customerId && { customer: customerId }),
      ...(setupPrice && {
        subscription_data: {
          add_invoice_items: [{ price: setupPrice.id, quantity: 1 }],
        },
      }),
    });

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-checkout error", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});