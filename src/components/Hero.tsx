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
      {/* Ambient glows */}
      <div className="glow-orb animate-float-slow bg-primary/40 w-[500px] h-[500px] -top-32 -left-32" />
      <div className="glow-orb animate-pulse-glow bg-accent/30 w-[600px] h-[600px] -bottom-40 -right-32" />

      <div className="container relative mx-auto max-w-5xl text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-primary mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Now accepting Q4 projects
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8">
          Smart Websites that help your business grow{" "}
          <span className="gradient-text block mt-2">one fixed price</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Risk free Websites that look great and are designed to bring you customers
          — all done for you under one monthly subscription you can cancel anytime. Easy!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="ring-glow rounded-2xl text-base px-8 hover:-translate-y-0.5 transition-transform" onClick={() => setFormOpen(true)}>
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl text-base px-8 glass border-border/60 hover:bg-secondary/60"
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
