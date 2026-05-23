import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

type PlanKey = "starter" | "growth" | "pro";

const PLANS: Record<PlanKey, { name: string; price: number; priceId: string; blurb: string }> = {
  starter: { name: "Starter", price: 49, priceId: "starter_monthly", blurb: "Hosting, updates & support" },
  growth:  { name: "Growth",  price: 89, priceId: "growth_monthly",  blurb: "Everything in Starter + priority updates" },
  pro:     { name: "Pro",     price: 149, priceId: "pro_monthly",    blurb: "Everything in Growth + advanced features" },
};

const SETUP_FEE = 79;
const SETUP_PRICE_ID = "setup_fee_once";

export default function SecureCheckout() {
  const [params] = useSearchParams();
  const queryPlan = params.get("plan") as PlanKey | null;
  const initialPlan: PlanKey = queryPlan && queryPlan in PLANS ? queryPlan : "growth";

  const [plan, setPlan] = useState<PlanKey>(initialPlan);
  const [email, setEmail] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  const selected = PLANS[plan];
  const totalToday = useMemo(() => SETUP_FEE + selected.price, [selected.price]);

  const returnUrl = `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`;

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
    const prevTitle = document.title;
    document.title = "Secure Checkout | hellowebby";
    return () => {
      document.head.removeChild(meta);
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <PaymentTestModeBanner />
      <main className="min-h-screen bg-background py-16 px-4 relative overflow-hidden">
        <div className="glow-orb absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full pointer-events-none" />
        <div className="glow-orb absolute -bottom-32 -right-32 w-96 h-96 bg-accent/30 rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto relative">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              Let's <span className="gradient-text">get you live</span>
            </h1>
            <p className="text-muted-foreground">
              One-time setup, then your monthly plan — cancel anytime.
            </p>
          </header>

          {!showCheckout ? (
            <div className="glass rounded-2xl p-8 space-y-6">
              <div>
                <Label className="text-sm font-medium mb-3 block">Choose your plan</Label>
                <div className="grid gap-3">
                  {(Object.keys(PLANS) as PlanKey[]).map((key) => {
                    const p = PLANS[key];
                    const active = plan === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPlan(key)}
                        className={`text-left p-4 rounded-xl border transition ${
                          active ? "border-primary bg-primary/10 ring-glow" : "border-border/40 hover:border-border"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{p.name}</div>
                            <div className="text-sm text-muted-foreground">{p.blurb}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">€{p.price}</div>
                            <div className="text-xs text-muted-foreground">/ month</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="rounded-xl border border-border/40 bg-background/40 p-5 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">One-time setup</span>
                  <span>€{SETUP_FEE}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">First month ({selected.name})</span>
                  <span>€{selected.price}</span>
                </div>
                <div className="border-t border-border/40 pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total today</span>
                  <span className="gradient-text text-lg">€{totalToday}</span>
                </div>
                <p className="text-xs text-muted-foreground pt-1">
                  Then €{selected.price}/month, cancel anytime.
                </p>
              </div>

              <Button
                size="lg"
                className="w-full rounded-full ring-glow"
                disabled={!email}
                onClick={() => setShowCheckout(true)}
              >
                Continue to secure payment
              </Button>
            </div>
          ) : (
            <div className="glass rounded-2xl p-4">
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="text-sm text-muted-foreground hover:text-foreground mb-3 ml-2"
              >
                ← Change plan
              </button>
              <StripeEmbeddedCheckout
                planPriceId={selected.priceId}
                setupPriceId={SETUP_PRICE_ID}
                customerEmail={email}
                returnUrl={returnUrl}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}