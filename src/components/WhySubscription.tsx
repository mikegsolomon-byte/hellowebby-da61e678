import { DollarSign, Zap, Shield, TrendingUp } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Low Monthly Cost", description: "Affordable monthly payments help you manage cash flow.", color: "#ff6b35" },
  { icon: Zap, title: "Immediate Returns", description: "Start generating leads fast without a 'big launch day'.", color: "#f7931e" },
  { icon: Shield, title: "Risk-Free", description: "Cancel anytime — no long-term contracts or hidden fees.", color: "#e84393" },
  { icon: TrendingUp, title: "Continuous Value", description: "We keep your site updated and performing every month.", color: "#6c5ce7" },
];

const WhySubscription = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="glow-orb bg-[#e84393]/20 w-[400px] h-[400px] top-10 right-0 animate-pulse-glow" />
      <div className="mb-16 max-w-3xl relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why <span className="gradient-text">Subscription?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          Small businesses shouldn't have to pay thousands upfront. We deliver continuous value each month, so you can focus on what you do best.
        </p>
        <p className="text-lg text-muted-foreground">
          Get a modern website and ongoing improvements without big upfront payments. See results within days — not months.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {reasons.map((r, i) => (
          <div key={i} className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${r.color}22`, border: `1px solid ${r.color}55` }}
            >
              <r.icon className="w-6 h-6" style={{ color: r.color }} />
            </div>
            <h3 className="text-lg font-bold mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySubscription;
