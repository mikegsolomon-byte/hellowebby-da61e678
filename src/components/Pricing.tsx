import { useState } from "react";
import { Check } from "lucide-react";
import IntakeFormDialog from "./IntakeFormDialog";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting online",
    price: "€49",
    features: [
      "Up to 3 pages",
      "Contact form",
      "Basic SEO setup",
      "Mobile responsive design",
      "Hosting & SSL included",
      "1 content update per month"
    ]
  },
  {
    name: "Growth",
    description: "For businesses ready to grow their presence",
    price: "€89",
    popular: true,
    features: [
      "Up to 8 pages",
      "Everything in Starter",
      "Booking/appointment tools",
      "Blog functionality",
      "Live chat integration",
      "SEO optimization",
      "Social media integration",
      "4 content updates per month"
    ]
  },
  {
    name: "Pro",
    description: "Full-service for serious growth",
    price: "€149",
    features: [
      "Unlimited pages",
      "Everything in Growth",
      "E-commerce functionality",
      "Payment processing",
      "Advanced SEO & analytics",
      "Monthly marketing consultation",
      "Priority support",
      "Unlimited content updates"
    ]
  }
];

const Pricing = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName);
    setFormOpen(true);
  };

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="glow-orb bg-[#e84393]/30 w-[500px] h-[500px] top-20 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10 items-start">
          {plans.map((plan, index) => {
            const accent = plan.popular ? "#e84393" : index === 0 ? "#ff6b35" : "#6c5ce7";
            return (
              <div
                key={index}
                className={`relative p-8 rounded-[2rem] flex flex-col transition-all ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#e84393]/20 to-transparent border-2 border-[#e84393] md:scale-105 z-10 shadow-2xl shadow-[#e84393]/20"
                    : "glass hover:bg-white/[0.07]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#e84393] rounded-full text-[10px] font-bold tracking-widest uppercase text-white">
                    Most Popular
                  </div>
                )}
                <div className="text-lg font-bold mb-2">{plan.name}</div>
                <p className="text-sm text-muted-foreground mb-6 min-h-[2.5rem]">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                      <span className="text-foreground/85">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#e84393] to-[#6c5ce7] text-white hover:shadow-[0_10px_30px_rgba(232,67,147,0.4)]"
                      : "bg-white/10 hover:bg-white/20 text-foreground"
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="glass rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-1">One-time Setup</h3>
            <p className="text-sm text-muted-foreground">
              Covers design, build, and launch. All prices include VAT. No hidden fees.
            </p>
          </div>
          <div className="text-4xl font-extrabold gradient-text">€79</div>
        </div>
      </div>
      <IntakeFormDialog 
        open={formOpen} 
        onOpenChange={setFormOpen}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
