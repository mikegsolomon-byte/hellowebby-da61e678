import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Loader2, AlertCircle, Mail, Calendar, FileText, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import PageMeta from "@/components/PageMeta";

interface LineItem {
  description: string;
  amountTotal: number | null;
  quantity: number | null;
  recurring: { interval: string; intervalCount: number } | null;
}

interface SessionData {
  status: string | null;
  paymentStatus: string | null;
  customerEmail: string | null;
  currency: string | null;
  amountTotal: number | null;
  mode: string | null;
  lineItems: LineItem[];
}

function formatMoney(amount: number | null, currency: string | null) {
  if (amount == null) return "—";
  const code = (currency ?? "eur").toUpperCase();
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: code }).format(amount / 100);
}

export default function CheckoutReturn() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [data, setData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
    const prev = document.title;
    document.title = "Order confirmed | hellowebby";
    return () => {
      document.head.removeChild(meta);
      document.title = prev;
    };
  }, []);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      setError("No session reference found.");
      return;
    }
    (async () => {
      try {
        const { data: res, error: err } = await supabase.functions.invoke("get-checkout-session", {
          body: { sessionId, environment: getStripeEnvironment() },
        });
        if (err || !res) throw new Error(err?.message || "Failed to load order");
        if (res.error) throw new Error(res.error);
        setData(res as SessionData);

        const paidNow =
          res.paymentStatus === "paid" || res.paymentStatus === "no_payment_required";
        const notifyKey = `notified:${sessionId}`;
        if (paidNow && !sessionStorage.getItem(notifyKey)) {
          sessionStorage.setItem(notifyKey, "1");
          supabase.functions
            .invoke("send-payment-confirmation", {
              body: {
                sessionId,
                customerEmail: res.customerEmail,
                currency: res.currency,
                amountTotal: res.amountTotal,
                lineItems: res.lineItems,
              },
            })
            .catch((e) => console.error("notify failed", e));
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
  }, [sessionId]);

  const paid = data?.paymentStatus === "paid" || data?.paymentStatus === "no_payment_required";

  return (
    <>
    <PageMeta
      title="Order confirmation | hellowebby"
      description="Your hellowebby order status and what happens next with your new small business website."
      path="/checkout/return"
      noindex
    />
    <main className="min-h-screen bg-background py-16 px-4 relative overflow-hidden">
      <div className="glow-orb absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full pointer-events-none" />
      <div className="glow-orb absolute -bottom-32 -right-32 w-96 h-96 bg-accent/30 rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative space-y-6">
        {/* Status header */}
        <div className="glass rounded-2xl p-8 text-center">
          {loading ? (
            <>
              <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
              <h1 className="text-2xl font-bold mb-2">Confirming your payment…</h1>
              <p className="text-muted-foreground">Hang tight, this only takes a moment.</p>
            </>
          ) : error ? (
            <>
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-destructive" />
              <h1 className="text-2xl font-bold mb-2">We couldn't load your order</h1>
              <p className="text-muted-foreground mb-2">{error}</p>
              {sessionId && (
                <p className="text-xs text-muted-foreground/70 break-all">Reference: {sessionId}</p>
              )}
            </>
          ) : paid ? (
            <>
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
                You're <span className="gradient-text">all set</span>
              </h1>
              <p className="text-muted-foreground">
                Payment received{data?.customerEmail ? ` — a receipt is on its way to ${data.customerEmail}` : ""}.
              </p>
            </>
          ) : (
            <>
              <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
              <h1 className="text-2xl font-bold mb-2">Payment pending</h1>
              <p className="text-muted-foreground">
                Status: <span className="font-medium">{data?.paymentStatus ?? "processing"}</span>. We'll email you once it clears.
              </p>
            </>
          )}
        </div>

        {/* Order summary */}
        {data && data.lineItems.length > 0 && (
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> Order summary
            </h2>
            <div className="divide-y divide-border/40">
              {data.lineItems.map((li, i) => (
                <div key={i} className="flex items-start justify-between py-3 gap-4">
                  <div>
                    <div className="font-medium">{li.description}</div>
                    {li.recurring && (
                      <div className="text-xs text-muted-foreground">
                        Recurring every {li.recurring.intervalCount > 1 ? `${li.recurring.intervalCount} ` : ""}
                        {li.recurring.interval}
                        {li.recurring.intervalCount > 1 ? "s" : ""}
                      </div>
                    )}
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <div className="font-semibold">{formatMoney(li.amountTotal, data.currency)}</div>
                    {li.quantity && li.quantity > 1 && (
                      <div className="text-xs text-muted-foreground">Qty {li.quantity}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border/40 mt-2 pt-3 flex justify-between font-semibold">
              <span>Total paid today</span>
              <span className="gradient-text text-lg">{formatMoney(data.amountTotal, data.currency)}</span>
            </div>
          </div>
        )}

        {/* What happens next */}
        {paid && (
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> What happens next
            </h2>
            <ol className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Check your inbox",
                  body: "We've sent a payment receipt and a short intake form to capture your business details, brand, and any content you already have.",
                },
                {
                  icon: Calendar,
                  title: "Kick-off within 1 business day",
                  body: "Your dedicated builder will reach out to confirm scope, agree timelines, and book a quick onboarding call if needed.",
                },
                {
                  icon: Sparkles,
                  title: "Live in about a week",
                  body: "We design, build, and launch your website — then handle hosting, updates, and ongoing support on your monthly plan.",
                },
              ].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.body}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition font-medium"
          >
            Back to home
          </Link>
          <a
            href="mailto:hello@hellowebby.com"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-border/60 hover:bg-muted/30 transition font-medium"
          >
            Contact support
          </a>
        </div>

        {sessionId && (
          <p className="text-xs text-muted-foreground/70 text-center break-all">
            Reference: {sessionId}
          </p>
        )}
      </div>
    </main>
    </>
  );
}