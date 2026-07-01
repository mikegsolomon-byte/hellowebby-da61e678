import { useState } from "react";
import { Button } from "@/components/ui/button";
import IntakeFormDialog from "./IntakeFormDialog";
import { Check } from "lucide-react";

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden">
      <div className="glow-orb animate-float-slow bg-primary/60 w-[520px] h-[520px] -top-32 -left-32" />
      <div className="glow-orb animate-pulse-glow bg-primary/40 w-[600px] h-[600px] -bottom-40 -right-32" />

      <div className="container relative mx-auto max-w-5xl text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border-2 border-foreground bg-background/70 backdrop-blur text-xs md:text-sm font-semibold">
          Irish support · Built in days
        </div>
        <h1 className="text-[48px] md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          Your business deserves a{" "}
          <span className="gradient-text">proper website</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-5">
          No €3,000 upfront cost. No waiting weeks. Just a professional website built for you — from €49/month.
        </p>
        <p className="text-base text-foreground/70 max-w-2xl mx-auto mb-8">
          Most web agencies charge €2,000 to €5,000 before they lift a finger. With hellowebby, you pay €49/month — and we build your entire website in days. Hosting, SEO, and support included. Cancel anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="rounded-2xl text-base px-8 bg-foreground text-primary hover:bg-foreground/90 border-2 border-foreground shadow-[6px_6px_0_0_hsl(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--primary))] transition-all"
            onClick={() => scrollToSection("pricing")}
          >
            Get My Website Started →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl text-base px-8 bg-background border-2 border-foreground text-foreground hover:bg-muted shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
            onClick={() => setFormOpen(true)}
          >
            Ask a question first
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/80">
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> No upfront cost</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Built in days</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Cancel anytime</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Not ready to buy?{" "}
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Get in touch and we'll help you choose
          </button>
        </p>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan="General enquiry" />
    </section>
  );
};

export default Hero;
