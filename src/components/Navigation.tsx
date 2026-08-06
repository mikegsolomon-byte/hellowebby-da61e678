import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/hellowebby-mark.png";
import IntakeFormDialog from "./IntakeFormDialog";

const Navigation = () => {
  const [formOpen, setFormOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-xl z-50 border-b-2 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logoMark} alt="HelloWebby" className="h-10 w-auto" />
            <span className="font-extrabold text-xl tracking-tight">HelloWebby</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => setFormOpen(true)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <Button className="rounded-full px-5 border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all" onClick={() => scrollToSection("pricing")}>Get My Website Started</Button>
        </div>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan="General enquiry" />
    </nav>
  );
};

export default Navigation;
