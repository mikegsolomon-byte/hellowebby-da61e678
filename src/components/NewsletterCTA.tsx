import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    toast({
      title: "Checklist on the way!",
      description: `Thanks ${name} — check ${email} shortly.`,
    });
    setName("");
    setEmail("");
  };

  return (
    <section className="relative px-4 overflow-hidden py-[36px]">
      <div className="container mx-auto max-w-3xl">
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Not ready yet? Get a free website checklist for your business.
          </h2>
          <p className="text-muted-foreground mb-6">
            A simple guide to what every small business website needs to win customers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-2 border-foreground rounded-xl"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-foreground rounded-xl"
            />
            <Button
              type="submit"
              className="rounded-xl border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all whitespace-nowrap"
            >
              Send Me the Checklist
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;