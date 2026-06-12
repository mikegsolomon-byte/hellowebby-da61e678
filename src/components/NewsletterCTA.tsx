import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const NewsletterCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    toast({ title: "Checklist on the way!", description: `Thanks ${name} — check ${email} shortly.` });
    setName("");
    setEmail("");
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-r from-[#ff6b35] via-[#e84393] to-[#6c5ce7] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.3),transparent_40%)]" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Not ready yet?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Get a free website checklist — a simple guide to what every small business needs to win customers online.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-background text-foreground font-bold rounded-2xl hover:bg-white hover:text-background transition-all whitespace-nowrap"
            >
              Send Checklist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;