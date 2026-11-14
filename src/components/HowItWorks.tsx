import { useReveal } from "@/hooks/useReveal";
import { ClipboardList, Laptop, Rocket } from "lucide-react";
import { accentAt } from "@/config/accents";

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

/** Schematic of what the customer sees at each step. Decorative. */
const StepVisual = ({ index }: { index: number }) => {
  const frames = [
    "linear-gradient(140deg, #FFE9A8 0%, #FFD98A 46%, #F2B95E 100%)",
    "linear-gradient(140deg, #D6EDF1 0%, #AFD9E0 48%, #7FBDC8 100%)",
    "linear-gradient(140deg, #E3E7F5 0%, #BCC5E6 48%, #8E9BCC 100%)",
  ];

  return (
    <div
      className="w-full max-w-[400px] h-[180px] rounded-2xl p-5 flex items-center justify-center elev-2"
      style={{ background: frames[index] }}
      aria-hidden="true"
    >
      {index === 0 && (
        <div className="w-full bg-card rounded-xl p-4 shadow-sm">
          <p className="text-[11px] font-semibold text-muted-foreground mb-2.5">Tell us about your business</p>
          <div className="h-2 rounded-full bg-muted mb-1.5" />
          <div className="h-2 rounded-full bg-muted mb-1.5 w-[82%]" />
          <div className="h-2 rounded-full bg-muted mb-3 w-[56%]" />
          <span className="inline-block bg-primary text-foreground text-[10px] font-semibold rounded-full px-3 py-1">Takes 10 minutes</span>
        </div>
      )}
      {index === 1 && (
        <div className="w-full bg-card rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
            <span className="w-[7px] h-[7px] rounded-full bg-muted" />
            <span className="w-[7px] h-[7px] rounded-full bg-muted" />
            <span className="w-[7px] h-[7px] rounded-full bg-muted" />
            <span className="ml-1.5 text-[9px] text-muted-foreground">yourbusiness.ie — preview</span>
          </div>
          <div className="px-3.5 py-3">
            <div className="h-2.5 w-[62%] rounded bg-muted mb-2" />
            <div className="flex gap-1.5">
              <div className="flex-1 h-10 rounded bg-muted/70" />
              <div className="flex-1 h-10 rounded bg-muted/70" />
              <div className="flex-1 h-10 rounded bg-muted/70" />
            </div>
          </div>
        </div>
      )}
      {index === 2 && (
        <div className="w-full bg-card rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full" style={{ background: "#4B6E3F" }} />
            <span className="text-[11px] font-semibold">yourbusiness.ie is live</span>
          </div>
          <div className="h-2 rounded-full bg-muted mb-1.5" />
          <div className="h-2 rounded-full bg-muted mb-3 w-[70%]" />
          <span className="inline-block bg-foreground text-background text-[10px] font-semibold rounded-full px-3 py-1">Hosting, domain &amp; SSL handled</span>
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const reveal = useReveal();

  return (
    <section id="how-it-works" className="relative px-4 section-light overflow-hidden py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Up and running in <span className="gradient-text">3 simple steps</span>
          </h2>
        </div>

        <div ref={reveal.ref} className={`relative ${reveal.className}`}>
          {/* The thread the steps hang from. */}
          <div
            className="absolute left-6 md:left-1/2 top-6 bottom-6 w-px md:-translate-x-1/2 bg-border"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const accent = accentAt(index);
            const flip = index % 2 === 1;

            return (
              <div
                key={index}
                className="relative pl-16 md:pl-0 pb-14 md:pb-0 md:grid md:grid-cols-[1fr_96px_1fr] md:items-center md:min-h-[268px]"
              >
                {/* visual */}
                <div className={`hidden md:flex ${flip ? "md:order-3 md:justify-start" : "md:order-1 md:justify-end"}`}>
                  <StepVisual index={index} />
                </div>

                {/* node on the thread */}
                <div className="absolute left-6 top-0 -translate-x-1/2 md:static md:translate-x-0 md:order-2 md:flex md:justify-center">
                  <div
                    className="w-12 h-12 rounded-full bg-card border-2 flex items-center justify-center"
                    style={{
                      borderColor: accent.ring,
                      boxShadow: "0 0 0 7px hsl(var(--section-bg-light)), 0 2px 8px -2px hsl(var(--foreground) / 0.14)",
                    }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: accent.icon }} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>

                {/* words */}
                <div className={flip ? "md:order-1 md:text-right" : "md:order-3"}>
                  <span
                    className="inline-block text-[11px] font-semibold tracking-[0.04em] rounded-full px-3 py-1 mb-3"
                    style={{ background: accent.tint, color: accent.icon }}
                  >
                    STEP {step.number}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className={`text-muted-foreground leading-relaxed max-w-[430px] ${flip ? "md:ml-auto" : ""}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
