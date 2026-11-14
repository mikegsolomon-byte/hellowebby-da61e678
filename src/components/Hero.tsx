import { useState } from "react";
import IntakeFormDialog, { QUESTION_PLAN, START_PLAN } from "./IntakeFormDialog";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formPlan, setFormPlan] = useState(START_PLAN);

  const openForm = (plan: string) => {
    setFormPlan(plan);
    setFormOpen(true);
  };

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
          High-performing websites built to grow your business.{" "}
          <span className="gradient-text">From €49/month.</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Stop settling for a static brochure that just sits there. We design, host, and actively maintain fast, conversion-focused websites for Irish small businesses — with unlimited updates included and no upfront agency fees. Cancel anytime after your first 30 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            type="button"
            className="btn-ink text-base h-[52px]"
            onClick={() => openForm(START_PLAN)}
          >
            Get my website
            <span className="btn-ink-chip w-9 h-9" aria-hidden="true">
              <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.6} />
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-[52px] rounded-full px-7 text-base font-semibold bg-card border border-border text-foreground hover:bg-muted elev-1 hover:-translate-y-0.5 transition-all"
            onClick={() => openForm(QUESTION_PLAN)}
          >
            Ask a question first
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/80">
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> See it before you pay</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> Unlimited updates</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4" /> No exit fees · you keep your domain</span>
        </div>
        <p className="mt-5 text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>
            Prefer email?{" "}
            <a
              href="mailto:hello@hellowebby.com"
              className="font-semibold underline underline-offset-4 hover:text-foreground transition-colors"
            >
              hello@hellowebby.com
            </a>
          </span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <button
            type="button"
            onClick={() => scrollToSection("faq")}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Read common questions
          </button>
          <span aria-hidden="true" className="opacity-40">·</span>
          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            See pricing
          </button>
        </p>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan={formPlan} />
    </section>
  );
};

export default Hero;
