import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import IntakeFormDialog from "./IntakeFormDialog";

const plans = [
  {
    name: "Starter Plan",
    description: "Get started with our affordable starter plan",
    price: "€79",
    features: [
      "Up to 5 pages",
      "Contact forms",
      "Basic SEO setup",
      "Mobile responsive",
      "Basic analytics"
    ]
  },
  {
    name: "Unlimited Plan",
    description: "Get started with premium features in our unlimited plan",
    price: "€129",
    popular: true,
    features: [
      "Up to 10 pages",
      "Everything in Starter",
      "Advanced contact forms",
      "Blog functionality",
      "Live chat support",
      "SEO optimization",
      "Social media integration"
    ]
  },
  {
    name: "Pro Plan",
    description: "Get started with our pro plan, perfect for guaranteed results",
    price: "€199",
    features: [
      "Unlimited pages",
      "Everything in Starter",
      "E-commerce functionality",
      "Payment processing",
      "Advanced SEO",
      "Monthly marketing consultation",
      "Priority support"
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
    <section id="pricing" className="py-20 px-4 section-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent pricing that scales with your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl' : 'border-0 shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button className="w-full" onClick={() => handleGetStarted(plan.name)}>
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

        <Card className="border-0 shadow-lg bg-muted/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">💵 One-time Setup Fee</h3>
            <p className="text-3xl font-bold text-primary mb-2">€149</p>
            <p className="text-muted-foreground mb-4">
              Applied to all plans to get your website built and launched
            </p>
            <p className="text-sm text-muted-foreground">
              💬 Cancel anytime, no contracts. Your website stays live until you say otherwise.
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
