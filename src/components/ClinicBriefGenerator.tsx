import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, Stethoscope, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import IntakeFormDialog, { FREE_PREVIEW_PLAN } from "./IntakeFormDialog";

const CLINIC_TYPES = [
  "Physiotherapy",
  "Dental practice",
  "GP / medical practice",
  "Psychology & therapy",
  "Aesthetics & skin clinic",
  "Chiropractic & osteopathy",
  "Podiatry",
  "Veterinary clinic",
];

const BOOKING_SYSTEMS = [
  "Cliniko",
  "Phone & email only",
  "Fresha",
  "Calendly",
  "Something else",
];

const PRIORITIES = [
  "Fewer no-shows",
  "Online booking 24/7",
  "New patient enquiries",
  "Show our services & prices",
  "Look more professional",
  "Easier to update myself",
];

const FUNCTIONS_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-clinic-brief`;

type Block =
  | { kind: "heading"; text: string }
  | { kind: "bullet"; text: string }
  | { kind: "para"; text: string };

function parseBrief(markdown: string): Block[] {
  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map<Block>((line) => {
      if (line.startsWith("## ")) return { kind: "heading", text: line.slice(3).trim() };
      if (line.startsWith("#")) return { kind: "heading", text: line.replace(/^#+\s*/, "") };
      if (line.startsWith("- ") || line.startsWith("* "))
        return { kind: "bullet", text: line.slice(2).trim() };
      return { kind: "para", text: line };
    });
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

const ClinicBriefGenerator = () => {
  const { toast } = useToast();
  const [clinicName, setClinicName] = useState("");
  const [clinicType, setClinicType] = useState(CLINIC_TYPES[0]);
  const [location, setLocation] = useState("");
  const [bookingSystem, setBookingSystem] = useState(BOOKING_SYSTEMS[0]);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [brief, setBrief] = useState("");
  const [loading, setLoading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const togglePriority = (item: string) =>
    setPriorities((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item],
    );

  const generate = async () => {
    setLoading(true);
    setBrief("");
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch(FUNCTIONS_URL, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          clinicName: clinicName || null,
          clinicType,
          location: location || null,
          bookingSystem,
          priorities,
          details: details || null,
        }),
      });

      if (!response.ok || !response.body) {
        let message = "We could not put your brief together just now. Please try again.";
        try {
          const data = await response.json();
          if (typeof data?.error === "string") message = data.error;
        } catch {
          /* keep default message */
        }
        toast({ title: "Something went wrong", description: message, variant: "destructive" });
        return;
      }

      requestAnimationFrame(() =>
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }),
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let text = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const event = JSON.parse(payload);
            if (event.type === "response.output_text.delta" && typeof event.delta === "string") {
              text += event.delta;
              setBrief(text);
            } else if (event.type === "error") {
              throw new Error(event.message ?? "stream error");
            }
          } catch {
            /* ignore partial or non-JSON frames */
          }
        }
      }

      if (!text.trim()) {
        toast({
          title: "No brief came back",
          description: "Please try again in a moment.",
          variant: "destructive",
        });
      }
    } catch (error) {
      if ((error as Error)?.name !== "AbortError") {
        toast({
          title: "Something went wrong",
          description: "We could not put your brief together just now. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      abortRef.current = null;
      setLoading(false);
    }
  };

  const blocks = brief ? parseBrief(brief) : [];

  return (
    <section id="clinic-brief" className="relative px-4 section-light overflow-hidden py-[36px]">
      <div className="glow-orb bg-primary/20 w-[520px] h-[520px] top-10 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="container relative mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border-2 border-foreground bg-primary text-xs md:text-sm font-bold">
            <Stethoscope className="w-4 h-4" strokeWidth={2.5} />
            For clinics &amp; practices
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get your <span className="gradient-text">clinic website plan</span> in a minute
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your practice and how you take bookings. We'll put together a plan for
            your pages, your booking flow and how patients will find you — free, no sign-up.
          </p>
        </div>

        <Card className="glass border-2 border-foreground shadow-[6px_6px_0_0_hsl(var(--primary))]">
          <CardContent className="p-6 md:p-10 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="clinic-name" className="font-bold">
                  Clinic name <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input
                  id="clinic-name"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  placeholder="Riverside Physio"
                  maxLength={120}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinic-location" className="font-bold">
                  Town or city <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input
                  id="clinic-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Galway"
                  maxLength={120}
                  className="rounded-xl"
                />
              </div>
            </div>

            <fieldset className="space-y-3">
              <legend className="font-bold mb-3">What kind of practice is it?</legend>
              <div className="flex flex-wrap gap-2">
                {CLINIC_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    aria-pressed={clinicType === type}
                    onClick={() => setClinicType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                      clinicType === type
                        ? "bg-foreground text-primary border-foreground"
                        : "border-foreground/20 text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-bold mb-3">How do patients book today?</legend>
              <div className="flex flex-wrap gap-2">
                {BOOKING_SYSTEMS.map((system) => (
                  <button
                    key={system}
                    type="button"
                    aria-pressed={bookingSystem === system}
                    onClick={() => setBookingSystem(system)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                      bookingSystem === system
                        ? "bg-foreground text-primary border-foreground"
                        : "border-foreground/20 text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {system}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-bold mb-3">
                What matters most?{" "}
                <span className="text-muted-foreground font-normal text-sm">(pick any)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {PRIORITIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={priorities.includes(item)}
                    onClick={() => togglePriority(item)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                      priorities.includes(item)
                        ? "bg-primary text-foreground border-foreground"
                        : "border-foreground/20 text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="clinic-details" className="font-bold">
                Anything else we should know?{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Textarea
                id="clinic-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Three physios, we do sports injury and post-op rehab, patients keep ringing during clinic hours to book..."
                maxLength={2000}
                rows={4}
                className="rounded-xl resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={generate}
                disabled={loading}
                className="rounded-2xl text-base px-8 bg-foreground text-primary hover:bg-foreground/90 border-2 border-foreground shadow-[6px_6px_0_0_hsl(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_hsl(var(--primary))] transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Putting your plan together...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" strokeWidth={2.5} />
                    Create my clinic plan
                  </>
                )}
              </Button>
              {brief && !loading && (
                <Button size="lg" variant="outline" className="rounded-2xl" onClick={generate}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try again
                </Button>
              )}
            </div>

            <div ref={resultRef} aria-live="polite">
              {loading && !brief && (
                <div className="space-y-3 pt-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-4 rounded-full bg-foreground/10 animate-pulse"
                      style={{ width: `${90 - i * 12}%` }}
                    />
                  ))}
                </div>
              )}

              {brief && (
                <div className="mt-2 rounded-2xl border-2 border-foreground bg-background/70 p-6 md:p-8">
                  <div className="space-y-3">
                    {blocks.map((block, i) => {
                      if (block.kind === "heading")
                        return (
                          <h3
                            key={i}
                            className="text-xl md:text-2xl font-extrabold pt-4 first:pt-0"
                          >
                            {block.text}
                          </h3>
                        );
                      if (block.kind === "bullet")
                        return (
                          <div key={i} className="flex gap-3">
                            <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-primary border border-foreground" />
                            <p className="text-muted-foreground leading-relaxed">
                              {renderInline(block.text)}
                            </p>
                          </div>
                        );
                      return (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {renderInline(block.text)}
                        </p>
                      );
                    })}
                  </div>

                  {!loading && (
                    <div className="mt-8 pt-6 border-t-2 border-foreground/15 text-center">
                      <p className="font-bold mb-4">
                        Like the look of this? We'll build you a free preview.
                      </p>
                      <Button
                        size="lg"
                        onClick={() => setFormOpen(true)}
                        className="rounded-2xl text-base px-8 bg-primary text-foreground hover:bg-primary/90 border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_hsl(var(--foreground))] transition-all"
                      >
                        Get my free preview
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          This plan is a starting point, not a quote. Nothing is saved and there's nothing to pay.
        </p>
      </div>

      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan={FREE_PREVIEW_PLAN} />
    </section>
  );
};

export default ClinicBriefGenerator;
