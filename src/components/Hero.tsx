import { useState } from "react";
import { Button } from "@/components/ui/button";
import IntakeFormDialog from "./IntakeFormDialog";

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-36 pb-28 px-4 overflow-hidden">
      {/* Sunny glows */}
      <div className="glow-orb animate-float-slow bg-primary/60 w-[520px] h-[520px] -top-32 -left-32" />
      <div className="glow-orb animate-pulse-glow bg-primary/40 w-[600px] h-[600px] -bottom-40 -right-32" />

      <div className="container relative mx-auto max-w-5xl text-center z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8">
          Smart Websites that help your business grow{" "}
          <span className="gradient-text block mt-2">one fixed price</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
          Risk free Websites that look great and are designed to bring you customers
          — all done for you under one monthly subscription you can cancel anytime. Easy!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-2xl text-base px-8 border-2 border-foreground shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all" onClick={() => setFormOpen(true)}>
            Get Started
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
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default Hero;
