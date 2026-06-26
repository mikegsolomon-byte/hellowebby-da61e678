import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// PLACEHOLDER TESTIMONIALS — replace with real customer quotes when available
const testimonials = [
  {
    name: "Sarah M.",
    business: "Beauty Salon, Co. Dublin",
    quote: "We had our new website live within a week. The whole process was dead easy and we started getting enquiries through it straight away.",
  },
  {
    name: "Brendan K.",
    business: "Electrician, Co. Cork",
    quote: "I'd been putting off getting a proper website for years because of the cost. This was exactly what I needed — professional result without the big upfront bill.",
  },
  {
    name: "Aoife R.",
    business: "Accountant, Co. Galway",
    quote: "The team sorted everything — design, SEO, the lot. I just answered a few questions and they handled it. Couldn't recommend it more.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative px-4 overflow-hidden py-[36px]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Trusted by Irish <span className="gradient-text">small businesses</span>
          </h2>
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((t, i) => (
            <Card key={i} className="glass border-border/40 min-w-[85%] md:min-w-0 snap-center">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-foreground" strokeWidth={2} />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;