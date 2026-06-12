import { useState } from "react";
import IntakeFormDialog from "./IntakeFormDialog";
import { CheckCircle2, Star, ShieldCheck, Phone } from "lucide-react";

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Sunset glow mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-[#6c5ce7]/25 via-[#e84393]/15 to-transparent blur-3xl opacity-70 pointer-events-none" />
      <div className="glow-orb animate-float-slow bg-[#ff6b35]/40 w-[420px] h-[420px] -top-20 -left-20" />
      <div className="glow-orb animate-pulse-glow bg-[#6c5ce7]/40 w-[500px] h-[500px] -bottom-32 -right-32" />

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-[#f7931e]">
          Built and managed for you
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[0.95]">
          Your small business deserves a website that{" "}
          <span className="gradient-text">actually wins</span> customers
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          One flat monthly fee. No contracts. Built and managed for you — live in 5 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("pricing")}
            className="w-full sm:w-auto px-8 py-4 btn-sunset rounded-2xl font-bold text-lg"
          >
            Get Your Website Today →
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            See How It Works
          </button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Cancel anytime. All prices include VAT.</p>

        {/* Trust bar */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl glass px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
          {[
            { Icon: CheckCircle2, label: "Live in 5 days", color: "text-[#ff6b35]" },
            { Icon: Star, label: "5-star rated by Irish SMBs", color: "text-[#f7931e]" },
            { Icon: ShieldCheck, label: "No long-term contracts", color: "text-[#e84393]" },
            { Icon: Phone, label: "Local Irish support", color: "text-[#6c5ce7]" },
          ].map(({ Icon, label, color }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-foreground/80">
              <Icon className={`w-4 h-4 ${color}`} /> {label}
            </div>
          ))}
        </div>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </header>
  );
};

export default Hero;
