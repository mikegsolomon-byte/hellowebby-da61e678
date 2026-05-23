import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <section id="pricing" className="relative px-4 section-light overflow-hidden py-[36px]">
      <div className="glow-orb bg-primary/25 w-[600px] h-[600px] top-10 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="container relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative glass transition-all hover:-translate-y-1 ${plan.popular ? 'border-primary/60 ring-glow scale-[1.02]' : 'border-border/40 hover:border-primary/40'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-primary px-4 py-1 rounded-full text-sm font-bold border-2 border-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-extrabold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button className={`w-full rounded-xl ${plan.popular ? 'ring-glow' : ''}`} variant={plan.popular ? 'default' : 'outline'} onClick={() => handleGetStarted(plan.name)}>
                  Get Started
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass border-border/40">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">One-time Setup</h3>
            <p className="text-4xl font-extrabold gradient-text mb-2">€79</p>
            <p className="text-muted-foreground mb-4">
              Covers design, build, and launch of your website
            </p>
            <p className="text-sm text-muted-foreground">
              No contracts. Your site stays live until you cancel. Switch plans anytime.
            </p>
          </CardContent>
        </Card>
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
