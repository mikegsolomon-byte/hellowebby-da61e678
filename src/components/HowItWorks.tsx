import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, Laptop, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Tell us about your business",
    description: "In your own words, tell us what you do, who your customers are, the look you're after, and any links or examples you love — we'll take it from there."
  },
  {
    number: "2",
    icon: Laptop,
    title: "See your free preview",
    description: "We design a real preview of your website and email you the link within a few days. You haven't paid anything."
  },
  {
    number: "3",
    icon: Rocket,
    title: "Love it? Go live",
    description: "Pick your plan and we'll finish your site and get it live within a few days. Don't love the preview? Walk away — you were never charged."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative px-4 section-light overflow-hidden py-20">
      <div className="glow-orb bg-primary/20 w-[500px] h-[500px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Up and running in <span className="gradient-text">3 simple steps</span>
          </h2>
        </div>
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6 md:items-start md:pb-12">
          {steps.map((step, index) => {
            const isPayoff = index === steps.length - 1;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all hover:-translate-y-1 ${
                  index === 1 ? "md:translate-y-10" : ""
                } ${isPayoff ? "bg-foreground border-foreground elev-2" : "glass hover:border-primary/40"}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-4 right-4 text-[88px] font-extrabold leading-none ${
                    isPayoff ? "text-background/10" : "text-foreground/[0.06]"
                  }`}
                >
                  {step.number}
                </span>
                <CardContent className="relative p-8">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                      isPayoff ? "bg-primary text-foreground" : "bg-primary/20 text-foreground"
                    }`}
                  >
                    <step.icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isPayoff ? "text-background" : ""}`}>{step.title}</h3>
                  <p className={isPayoff ? "text-background/75" : "text-muted-foreground"}>{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
