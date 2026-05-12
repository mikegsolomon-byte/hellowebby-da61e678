import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Shield, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Low Monthly Cost",
    description: "Affordable monthly payments help you manage cash flow—ideal for growing small businesses."
  },
  {
    icon: Zap,
    title: "Immediate Returns",
    description: "Start generating leads fast without waiting for a \"big launch day.\""
  },
  {
    icon: Shield,
    title: "Risk-Free",
    description: "Cancel anytime—no long-term contracts or hidden fees."
  },
  {
    icon: TrendingUp,
    title: "Continuous Value",
    description: "We keep your website updated and performing, so you're always putting your best foot forward."
  }
];

const WhySubscription = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="glow-orb bg-accent/20 w-[400px] h-[400px] top-10 right-0 animate-pulse-glow" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Why <span className="gradient-text">Subscription?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Small businesses shouldn't have to pay thousands upfront. We deliver continuous value each month, so you can focus on what you do best.
          </p>
          <p className="text-lg text-muted-foreground">
            By subscribing, you'll get a modern website and ongoing improvements without big upfront payments. Start seeing value and generating leads within days—not months. Control your costs, stay agile, and upgrade as your business grows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="glass border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySubscription;
