import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import IntakeFormDialog from "./IntakeFormDialog";

const plans = [
  {
    name: "Starter",
    description: "Perfect for getting online fast",
    price: "€49",
    features: [
      "5-page professionally designed website",
      "Mobile-responsive design",
      "Hosting, SSL certificate & domain connection",
      "On-page SEO setup",
      "Contact & lead capture form",
      "Google Analytics connected",
      "Cancel anytime after month 1",
    ],
  },
  {
    name: "Growth",
    description: "The most popular choice for Irish SMEs",
    price: "€89",
    popular: true,
    features: [
      "Up to 10 pages, professionally designed",
      "Online booking / appointment system",
      "Full SEO setup + keyword targeting",
      "Google Business Profile setup & optimisation",
      "Monthly content updates (just email us)",
      "Google Analytics + Search Console connected",
      "Priority support",
      "Cancel anytime after month 1",
    ],
  },
  {
    name: "Pro",
    description: "For businesses ready to grow faster",
    price: "€149",
    features: [
      "Unlimited pages, custom design",
      "eCommerce / online shop (sell products or services)",
      "Advanced SEO with monthly ranking report",
      "Live chat or WhatsApp widget",
      "Email marketing integration",
      "Monthly strategy call (30 mins)",
      "Dedicated account manager",
      "Cancel anytime after month 1",
    ],
  },
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
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Simple, <span className="gradient-text">honest pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            One monthly fee. No hidden costs. No contracts after month one.
          </p>
          <p className="inline-block text-sm font-medium px-4 py-2 rounded-full border-2 border-foreground/15 bg-background/60 backdrop-blur">
            All plans include a once-off €79 setup fee — this covers your initial design consultation and website build.
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
                <p className="text-xs text-muted-foreground mb-4">+ €79 once-off setup fee</p>
                <Button className={`w-full rounded-xl ${plan.popular ? 'ring-glow' : ''}`} variant={plan.popular ? 'default' : 'outline'} onClick={() => handleGetStarted(plan.name)}>
                  Get started
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
            <p className="text-base md:text-lg leading-relaxed">
              💡 <strong>A typical Irish web agency charges €2,000–€5,000 upfront</strong> — plus €100–€200/month for hosting and maintenance. With hellowebby, your first year on the Growth plan costs <strong>€1,147 total</strong> (€79 setup + €89 × 12). That's it.
            </p>
            <div className="mt-6 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-sm text-muted-foreground">Not sure which plan is right?</span>
              <button
                type="button"
                onClick={() => {
                  setSelectedPlan("General enquiry");
                  setFormOpen(true);
                }}
                className="text-sm font-semibold underline underline-offset-4 hover:text-primary transition-colors"
              >
                Ask a question first
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
      <IntakeFormDialog 
        open={formOpen} 
        onOpenChange={setFormOpen}
        selectedPlan={selectedPlan || "General enquiry"}
      />
    </section>
  );
};

export default Pricing;
