import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const NewsletterCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, "Please enter your name").max(100),
    email: z.string().trim().email("Enter a valid email").max(255),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      toast({
        title: "Check your details",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const { error: dbError } = await supabase
        .from("form_submissions")
        .insert({
          name: parsed.data.name,
          email: parsed.data.email,
          message: "Requested the free website checklist (lead magnet).",
          pricing_plan: "Lead Magnet — Website Checklist",
        });
      if (dbError) throw dbError;

      const submissionId = crypto.randomUUID();
      const templateData = { name: parsed.data.name, email: parsed.data.email };

      const [delivery, notify] = await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "checklist-delivery",
            recipientEmail: parsed.data.email,
            idempotencyKey: `checklist-deliver-${submissionId}`,
            templateData,
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "checklist-notification",
            idempotencyKey: `checklist-notify-${submissionId}`,
            templateData,
          },
        }),
      ]);
      if (delivery.error) console.error("Checklist delivery error:", delivery.error);
      if (notify.error) console.error("Checklist notify error:", notify.error);

      toast({
        title: "Checklist on the way! 🎉",
        description: `Thanks ${parsed.data.name.split(" ")[0]} — check ${parsed.data.email} shortly.`,
      });
      setName("");
      setEmail("");
    } catch (err: any) {
      console.error("Newsletter submit error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
              className="rounded-xl border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all whitespace-nowrap"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin mr-2" />Sending…</>
              ) : (
                "Send Me the Checklist"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;