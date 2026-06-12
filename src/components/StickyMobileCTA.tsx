const StickyMobileCTA = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/85 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
      <div className="text-sm font-bold">
        From <span className="text-base gradient-text">€49</span>/mo
      </div>
      <button
        onClick={scrollToPricing}
        className="flex-1 max-w-[60%] btn-sunset font-bold py-3 rounded-xl text-sm"
      >
        Get My Website →
      </button>
    </div>
  );
};

export default StickyMobileCTA;