import { useState } from "react";
import IntakeFormDialog, { FREE_PREVIEW_PLAN } from "./IntakeFormDialog";

const StickyMobileCTA = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary border-t-2 border-foreground px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_0_0_hsl(var(--foreground))]">
        <div className="text-sm font-bold">
          From <span className="text-base">€49</span>/mo
        </div>
        <button
          onClick={() => setFormOpen(true)}
          className="flex-1 max-w-[60%] bg-foreground text-primary font-bold py-3 rounded-xl text-sm"
        >
          Free preview →
        </button>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan={FREE_PREVIEW_PLAN} />
    </>
  );
};

export default StickyMobileCTA;
