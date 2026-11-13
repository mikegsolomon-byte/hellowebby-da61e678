import { PenLine, RefreshCw, Search, ShieldCheck, Mail, LifeBuoy } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const benefits = [
  { Icon: PenLine, title: "Designed & built for you", description: "Answer a 10-minute form — we build a fast, mobile-friendly site" },
  { Icon: RefreshCw, title: "Unlimited updates included", description: "Email us any change — we make it, no extra fees" },
  { Icon: Search, title: "Set up to be found on Google", description: "Proper SEO on every page" },
  { Icon: ShieldCheck, title: "Hosting, domain & SSL handled", description: "No tech admin, ever" },
  { Icon: Mail, title: "Leads straight to your inbox", description: "Contact and enquiry forms included" },
  { Icon: LifeBuoy, title: "Real support from Ireland", description: "Email us — a human replies" },
];

const WhatYouGet = () => {
  const reveal = useReveal();
  return (
    <section id="features" className="relative px-4 overflow-hidden py-20">
      <div className="glow-orb bg-accent/20 w-[400px] h-[400px] -bottom-20 -left-20 animate-float-slow" />
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          What You Get
        </h2>
        <div ref={reveal.ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${reveal.className}`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="glass rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                <benefit.Icon className="w-6 h-6 text-foreground" strokeWidth={2} aria-hidden="true" />
              </div>
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
