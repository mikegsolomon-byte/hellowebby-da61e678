const steps = [
  {
    number: "1",
    title: "Submit Your Request",
    description: "Describe your website needs through our simple request portal. No technical knowledge required.",
    color: "#ff6b35",
  },
  {
    number: "2",
    title: "We Build It",
    description: "Our expert team designs and implements your custom site with precision and care.",
    color: "#e84393",
  },
  {
    number: "3",
    title: "Get Results",
    description: "Reach more customers quickly and change/update as you need.",
    color: "#6c5ce7",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-24 relative">
      <div className="glow-orb bg-[#6c5ce7]/25 w-[500px] h-[500px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="text-center mb-20 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground">Simple, efficient, designed to scale with you.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 relative">
        <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#ff6b35] via-[#e84393] to-[#6c5ce7] opacity-40" />
        {steps.map((step) => (
          <div key={step.number} className="text-center relative">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6 text-white"
              style={{
                background: `linear-gradient(135deg, ${step.color}, #6c5ce7)`,
                boxShadow: `0 10px 40px ${step.color}55`,
              }}
            >
              {step.number}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
