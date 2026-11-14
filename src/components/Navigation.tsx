import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoMark from "@/assets/hellowebby-mark.png";
import IntakeFormDialog from "./IntakeFormDialog";

const Navigation = () => {
  const [formOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname !== "/") {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoMark} alt="HelloWebby" className="h-10 w-auto" />
            <span className="font-extrabold text-xl tracking-tight">HelloWebby</span>
          </Link>

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

          <button
            type="button"
            className="btn-ink text-sm h-10 pl-5"
            onClick={() => scrollToSection("pricing")}
          >
            Get my website
            <span className="btn-ink-chip w-7 h-7" aria-hidden="true">
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.6} />
            </span>
          </button>
        </div>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan="General enquiry" />
    </nav>
  );
};

export default Navigation;
