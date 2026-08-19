import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Laptop, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Tell us about your business",
    description: "Two minutes, in your own words. What you do and who your customers are."
  },
  {
    number: "2",
    icon: Laptop,
    title: "See your free preview",
    description: "We design a real preview of your website and send you the link within 2 working days. You haven't paid anything."
  },
  {
    number: "3",
    icon: Rocket,
    title: "Love it? Go live",
    description: "Pay the €79 setup and pick your plan. Your finished site is live in about a week. Don't love it? Walk away — you were never charged."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative px-4 section-light overflow-hidden py-[36px]">
      <div className="glow-orb bg-primary/20 w-[500px] h-[500px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Up and running in <span className="gradient-text">3 simple steps</span>
          </h2>
        </div>
        <div className="relative grid md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-foreground/15" aria-hidden="true" />
          {steps.map((step, index) => (
            <Card key={index} className="relative glass border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all">
              <CardContent className="p-8">
                <div className="relative w-16 h-16 rounded-2xl bg-primary text-foreground border-2 border-foreground flex items-center justify-center mb-4 mx-auto shadow-[4px_4px_0_0_hsl(var(--foreground))]">
                  <step.icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
                <div className="text-sm font-bold text-center text-muted-foreground mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
