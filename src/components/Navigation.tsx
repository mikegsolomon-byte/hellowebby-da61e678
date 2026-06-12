const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff6b35] to-[#e84393]" />
            <span className="font-extrabold text-xl tracking-tight">HelloWebby</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              ["Features", "features"],
              ["How It Works", "how-it-works"],
              ["Pricing", "pricing"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("pricing")}
            className="px-5 py-2 bg-white text-background text-sm font-bold rounded-full hover:bg-[#f7931e] hover:text-white transition-all active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
