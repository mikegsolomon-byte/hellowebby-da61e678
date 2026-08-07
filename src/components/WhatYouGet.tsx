const benefits = [
  { icon: "🎨", title: "Designed & built for you", description: "Answer a 10-minute form — we build a fast, mobile-friendly site" },
  { icon: "🔁", title: "Unlimited updates included", description: "Email us any change — we make it, no extra fees" },
  { icon: "🔍", title: "Set up to be found on Google", description: "Proper SEO on every page" },
  { icon: "🔒", title: "Hosting, domain & SSL handled", description: "No tech admin, ever" },
  { icon: "✉️", title: "Leads straight to your inbox", description: "Contact and enquiry forms included" },
  { icon: "🛟", title: "Real support from Ireland", description: "Email us — a human replies" },
];

const WhatYouGet = () => {
  return (
    <section id="features" className="relative px-4 overflow-hidden py-[36px]">
      <div className="glow-orb bg-accent/20 w-[400px] h-[400px] -bottom-20 -left-20 animate-float-slow" />
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          What You Get
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
