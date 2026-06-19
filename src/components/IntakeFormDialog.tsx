import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface IntakeFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string;
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more (10+ chars)").max(1000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const initial: FormData = { name: "", email: "", phone: "", company: "", message: "" };

const IntakeFormDialog = ({ open, onOpenChange, selectedPlan = "Basic Plan" }: IntakeFormDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const validateField = (name: keyof FormData, value: string) => {
    const fieldSchema = (schema.shape as any)[name];
    const res = fieldSchema.safeParse(value);
    setErrors((prev) => ({ ...prev, [name]: res.success ? undefined : res.error.issues[0].message }));
  };

  const update = (name: keyof FormData, value: string) => {
    setFormData((p) => ({ ...p, [name]: value }));
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched((p) => ({ ...p, [name]: true }));
    validateField(name, formData[name] ?? "");
  };

  const reset = () => {
    setFormData(initial);
    setErrors({});
    setTouched({});
    setSuccess(false);
  };

  const handleOpenChange = (o: boolean) => {
    if (!o) setTimeout(reset, 200);
    onOpenChange(o);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormData;
        if (!fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      setTouched({ name: true, email: true, phone: true, company: true, message: true });
      return;
    }
    setLoading(true);
    try {
      const payload = parsed.data;
      const { data: inserted, error: dbError } = await supabase.from("form_submissions").insert({
        name: payload.name,
        email: payload.email,
        phone: payload.phone || null,
        company: payload.company || null,
        message: payload.message,
        pricing_plan: selectedPlan,
      }).select("id").maybeSingle();
      if (dbError) throw dbError;

      const submissionId = inserted?.id ?? crypto.randomUUID();
      const templateData = { ...payload, pricing_plan: selectedPlan };

      // Internal notification to the HelloWebby inbox
      const { error: notifyError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          idempotencyKey: `contact-notify-${submissionId}`,
          templateData,
        },
      });
      if (notifyError) console.error("Notification email error:", notifyError);

      // Auto-reply confirmation to the person who filled the form
      const { error: confirmError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: payload.email,
          idempotencyKey: `contact-confirm-${submissionId}`,
          templateData,
        },
      });
      if (confirmError) console.error("Confirmation email error:", confirmError);

      setSuccess(true);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (name: keyof FormData) =>
    cn(
      "bg-background/40 border-border/40 backdrop-blur-sm focus-visible:ring-primary/60 transition-colors",
      errors[name] && touched[name] && "border-destructive/70 focus-visible:ring-destructive/50",
    );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[520px] glass border-border/40 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        {success ? (
          <div className="relative py-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center ring-glow">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl text-center">You're in 🎉</DialogTitle>
              <DialogDescription className="text-center">
                Thanks {formData.name.split(" ")[0]}! We've received your details for the{" "}
                <span className="text-foreground font-medium">{selectedPlan}</span> and will be in touch within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => handleOpenChange(false)} className="rounded-full px-8 mt-2">
              Done
            </Button>
          </div>
        ) : (
          <div className="relative">
            <DialogHeader className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/80">
                <Sparkles className="w-3.5 h-3.5" /> {selectedPlan}
              </div>
              <DialogTitle className="text-2xl">Let's get you started</DialogTitle>
              <DialogDescription>
                Tell us a bit about your project — we'll reply within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="Jane Doe"
                    className={fieldClass("name")}
                    aria-invalid={!!(errors.name && touched.name)}
                  />
                  {errors.name && touched.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="jane@company.com"
                    className={fieldClass("email")}
                    aria-invalid={!!(errors.email && touched.email)}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-muted-foreground">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    placeholder="+353 …"
                    className={fieldClass("phone")}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-muted-foreground">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => update("company", e.target.value)}
                    onBlur={() => handleBlur("company")}
                    placeholder="Acme Ltd"
                    className={fieldClass("company")}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Tell us about your project *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => update("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="What are you looking to build?"
                  rows={4}
                  className={fieldClass("message")}
                  aria-invalid={!!(errors.message && touched.message)}
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full ring-glow font-semibold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Send my details"
                )}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center">
                No spam. Your details are only used to reply to your enquiry.
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default IntakeFormDialog;
