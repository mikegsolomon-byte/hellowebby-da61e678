import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface LineItem {
  description: string;
  amountTotal: number | null;
  quantity: number | null;
  recurring: { interval: string; intervalCount: number } | null;
}

interface Body {
  sessionId: string;
  customerEmail?: string | null;
  currency?: string | null;
  amountTotal?: number | null;
  lineItems?: LineItem[];
}

function fmt(amount: number | null | undefined, currency: string | null | undefined) {
  if (amount == null) return "—";
  const code = (currency ?? "eur").toUpperCase();
  try {
    return new Intl.NumberFormat("en-IE", { style: "currency", currency: code }).format(amount / 100);
  } catch {
    return `${(amount / 100).toFixed(2)} ${code}`;
  }
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
    if (!body?.sessionId) {
      return new Response(JSON.stringify({ error: "Missing sessionId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rows = (body.lineItems ?? [])
      .map(
        (li) => `
          <tr>
            <td style="padding:8px 0;border-bottom:1px solid #eee;">
              ${li.description}${li.recurring ? ` <span style="color:#888;font-size:12px;">(every ${li.recurring.intervalCount > 1 ? li.recurring.intervalCount + " " : ""}${li.recurring.interval}${li.recurring.intervalCount > 1 ? "s" : ""})</span>` : ""}
            </td>
            <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;white-space:nowrap;">
              ${fmt(li.amountTotal, body.currency)}
            </td>
          </tr>`,
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;">
        <h1 style="font-size:22px;margin:0 0 8px;">🎉 New payment received</h1>
        <p style="margin:0 0 16px;color:#444;">A customer just completed checkout on hellowebby.</p>

        <h2 style="font-size:16px;margin:24px 0 8px;">Customer</h2>
        <p style="margin:0;">${body.customerEmail ?? "(no email captured)"}</p>

        <h2 style="font-size:16px;margin:24px 0 8px;">Order</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows || `<tr><td style="padding:8px 0;color:#888;">(no line items)</td></tr>`}
          <tr>
            <td style="padding:12px 0;font-weight:bold;">Total paid</td>
            <td style="padding:12px 0;font-weight:bold;text-align:right;">${fmt(body.amountTotal ?? null, body.currency)}</td>
          </tr>
        </table>

        <p style="margin:24px 0 0;color:#666;font-size:12px;">
          Stripe session: <code>${body.sessionId}</code><br/>
          ${new Date().toLocaleString("en-IE")}
        </p>
      </div>`;

    const result = await resend.emails.send({
      from: "hellowebby <onboarding@resend.dev>",
      to: ["hello@hellowebby.com"],
      ...(body.customerEmail ? { reply_to: body.customerEmail } : {}),
      subject: `New payment — ${fmt(body.amountTotal ?? null, body.currency)}${body.customerEmail ? ` from ${body.customerEmail}` : ""}`,
      html,
    });

    return new Response(JSON.stringify({ ok: true, result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-payment-confirmation error", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});