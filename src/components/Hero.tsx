import { useState } from "react";
import { Button } from "@/components/ui/button";
import IntakeFormDialog from "./IntakeFormDialog";
import { CheckCircle2, ShieldCheck, Phone } from "lucide-react";

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
        <h1 className="text-[48px] md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          Your small business deserves a website that{" "}
          <span className="gradient-text">actually wins customers</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto mb-8">
          One flat monthly fee. No contracts. Built and managed for you — live in days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="rounded-2xl text-base px-8 bg-foreground text-primary hover:bg-foreground/90 border-2 border-foreground shadow-[6px_6px_0_0_hsl(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--primary))] transition-all"
            onClick={() => scrollToSection("pricing")}
          >
            Get Your Website Today →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl text-base px-8 bg-background border-2 border-foreground text-foreground hover:bg-muted shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
            onClick={() => scrollToSection("how-it-works")}
          >
            See How it Works
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Cancel anytime. All prices include VAT.</p>

        {/* Trust bar */}
        <div className="mt-12 rounded-2xl border-2 border-foreground/10 bg-background/60 backdrop-blur px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
          <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-foreground" /> Live in 5 days</div>
          <div className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-foreground" /> No long-term contracts</div>
          <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-foreground" /> Local Irish support</div>
        </div>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default Hero;
