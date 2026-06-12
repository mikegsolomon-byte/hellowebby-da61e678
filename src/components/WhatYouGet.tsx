import { Rocket, Calendar, Mail, TrendingUp, RefreshCw } from "lucide-react";

const benefits = [
  { Icon: Rocket, title: "Fast, Mobile-Friendly Website", description: "A fast, mobile-friendly website designed to convert.", color: "#ff6b35" },
  { Icon: Calendar, title: "Booking & Contact Forms", description: "Booking automation + contact forms built in.", color: "#f7931e" },
  { Icon: Mail, title: "Follow-up Sequences", description: "Email/text follow-up sequences to close leads.", color: "#e84393" },
  { Icon: TrendingUp, title: "SEO Setup", description: "SEO setup so customers can find you on Google.", color: "#6c5ce7" },
  { Icon: RefreshCw, title: "Unlimited Updates", description: "Unlimited changes and updates — no extra fees.", color: "#ff6b35" },
];

const WhatYouGet = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="glow-orb bg-[#ff6b35]/20 w-[400px] h-[400px] -bottom-20 -left-20 animate-float-slow" />
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What You <span className="gradient-text">Get</span></h2>
        <p className="text-muted-foreground">Every plan includes the essentials to win customers online.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {benefits.map((b, i) => (
          <div key={i} className="glass rounded-[2rem] p-8 hover:bg-white/[0.07] transition-all">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: `${b.color}22`, border: `1px solid ${b.color}55` }}
            >
              <b.Icon className="w-6 h-6" style={{ color: b.color }} />
            </div>
            <h3 className="text-xl font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGet;
