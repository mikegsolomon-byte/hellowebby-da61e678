import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { Check, Lock, Mail, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import PageMeta from "@/components/PageMeta";

type PlanKey = "starter" | "growth" | "pro";
type Billing = "monthly" | "annual";

// TODO: annual recurring prices must be created in Stripe / Lovable payments config before this goes live — these IDs are placeholders.
const PLANS: Record<
  PlanKey,
  {
    name: string;
    blurb: string;
    monthly: { price: number; priceId: string };
    annual: { price: number; priceId: string; equivalent: string };
  }
> = {
  starter: {
    name: "Starter",
    blurb: "Hosting, updates & support",
    monthly: { price: 49, priceId: "starter_monthly" },
    annual: { price: 490, priceId: "starter_annual", equivalent: "€40.83/mo" },
  },
  growth: {
    name: "Growth",
    blurb: "Everything in Starter + priority updates",
    monthly: { price: 89, priceId: "growth_monthly" },
    annual: { price: 890, priceId: "growth_annual", equivalent: "€74.17/mo" },
  },
  pro: {
    name: "Pro",
    blurb: "Everything in Growth + advanced features",
    monthly: { price: 149, priceId: "pro_monthly" },
    annual: { price: 1490, priceId: "pro_annual", equivalent: "€124.17/mo" },
  },
};

const SETUP_FEE = 79;
const SETUP_PRICE_ID = "setup_fee_once";

export default function SecureCheckout() {
  const [params] = useSearchParams();
  const queryPlan = params.get("plan") as PlanKey | null;
  const initialPlan: PlanKey = queryPlan && queryPlan in PLANS ? queryPlan : "growth";
  const queryBilling = params.get("billing");
  const initialBilling: Billing = queryBilling === "annual" ? "annual" : "monthly";

  const [plan, setPlan] = useState<PlanKey>(initialPlan);
  const [billing, setBilling] = useState<Billing>(initialBilling);
  const [email, setEmail] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const emailError = emailTouched && !emailValid ? "Enter a valid email so we can send your receipt & account details." : "";

  const selected = PLANS[plan];
  const period = billing === "annual" ? selected.annual : selected.monthly;
  const totalToday = useMemo(() => SETUP_FEE + period.price, [period.price]);

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
      <PageMeta
        title="Secure checkout | hellowebby"
        description="Choose your hellowebby plan and pay securely to get your small business website started."
        path="/secure-checkout"
        noindex
      />
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
            <ol className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <li className={`flex items-center gap-1.5 ${!showCheckout ? "text-foreground font-semibold" : ""}`}>
                <span className={`w-5 h-5 rounded-full grid place-items-center text-[10px] ${!showCheckout ? "bg-primary text-primary-foreground" : "bg-muted"}`}>1</span>
                Your details
              </li>
              <span className="w-6 h-px bg-border" />
              <li className={`flex items-center gap-1.5 ${showCheckout ? "text-foreground font-semibold" : ""}`}>
                <span className={`w-5 h-5 rounded-full grid place-items-center text-[10px] ${showCheckout ? "bg-primary text-primary-foreground" : "bg-muted"}`}>2</span>
                Payment
              </li>
              <span className="w-6 h-px bg-border" />
              <li className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full grid place-items-center text-[10px] bg-muted">3</span>
                You're live
              </li>
            </ol>
          </header>

          {!showCheckout ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmailTouched(true);
                if (emailValid) setShowCheckout(true);
              }}
              className="glass rounded-2xl p-6 md:p-8 space-y-8"
            >
              <section>
                <div className="flex items-baseline justify-between mb-3">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary/15 text-primary grid place-items-center text-[11px] font-bold">1</span>
                    Choose your plan
                  </Label>
                  <span className="text-xs text-muted-foreground">Change anytime</span>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-1 p-1 rounded-full border-2 border-foreground/15 bg-background/60 backdrop-blur">
                    {(["monthly", "annual"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={billing === option}
                        onClick={() => setBilling(option)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                          billing === option
                            ? "bg-foreground text-primary border-2 border-foreground"
                            : "text-muted-foreground hover:text-foreground border-2 border-transparent"
                        }`}
                      >
                        {option === "monthly" ? "Monthly" : "Annual"}
                        {option === "annual" && <span className="ml-2 font-semibold">2 months free</span>}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3">
                  {(Object.keys(PLANS) as PlanKey[]).map((key) => {
                    const p = PLANS[key];
                    const active = plan === key;
                    const pPeriod = billing === "annual" ? p.annual : p.monthly;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPlan(key)}
                        aria-pressed={active}
                        className={`relative text-left p-4 rounded-xl border transition ${
                          active ? "border-primary bg-primary/10 ring-glow" : "border-border/40 hover:border-border"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-5 h-5 rounded-full border-2 grid place-items-center shrink-0 ${
                                active ? "border-primary bg-primary" : "border-border"
                              }`}
                            >
                              {active && <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />}
                            </span>
                            <div>
                              <div className="font-semibold">{p.name}</div>
                              <div className="text-sm text-muted-foreground">{p.blurb}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">€{pPeriod.price}</div>
                            <div className="text-xs text-muted-foreground">{billing === "annual" ? "/ year" : "/ month"}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section>
                <Label htmlFor="email" className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/15 text-primary grid place-items-center text-[11px] font-bold">2</span>
                  Your email
                  <span className="text-destructive" aria-hidden>*</span>
                </Label>
                <p className="text-xs text-muted-foreground mb-2 ml-7">
                  We'll send your receipt, login and project kick-off here.
                </p>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  <Input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    placeholder="you@company.com"
                    required
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    className={`pl-9 h-12 ${emailError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                </div>
                {emailError && (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">{emailError}</p>
                )}
              </section>

              <section className="rounded-xl border border-border/40 bg-background/40 p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Order summary
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">One-time setup</span>
                  <span>€{SETUP_FEE}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {billing === "annual" ? "First year" : "First month"} ({selected.name})
                  </span>
                  <span>€{period.price}</span>
                </div>
                {billing === "annual" && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Annual saving</span>
                    <span className="font-semibold">2 months free</span>
                  </div>
                )}
                <div className="border-t border-border/40 pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total today</span>
                  <span className="gradient-text text-lg">€{totalToday}</span>
                </div>
                <p className="text-xs text-muted-foreground pt-1">
                  {billing === "annual"
                    ? `Then €${period.price}/year.`
                    : `Then €${period.price}/month, cancel anytime.`}
                </p>
              </section>

              <div className="space-y-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full ring-glow h-12 text-base"
                >
                  <Lock className="w-4 h-4" />
                  Continue to secure payment
                </Button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> SSL encrypted</span>
                  <span className="flex items-center gap-1"><CreditCard className="w-3.5 h-3.5" /> Powered by Stripe</span>
                </div>
              </div>
            </form>
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
                planPriceId={period.priceId}
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