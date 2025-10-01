import { Zap, Calendar, Mail, TrendingUp, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: "🚀",
    title: "Fast, Mobile-Friendly Website",
    description: "A fast, mobile-friendly website designed to convert"
  },
  {
    icon: "📅",
    title: "Booking & Contact Forms",
    description: "Booking automation + contact forms"
  },
  {
    icon: "✉️",
    title: "Follow-up Sequences",
    description: "Email/text follow-up sequences to close leads"
  },
  {
    icon: "📈",
    title: "SEO Setup",
    description: "SEO setup so customers can find you on Google"
  },
  {
    icon: "🔁",
    title: "Unlimited Updates",
    description: "Unlimited changes and updates — no extra fees"
  }
];

const WhatYouGet = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What You Get
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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
