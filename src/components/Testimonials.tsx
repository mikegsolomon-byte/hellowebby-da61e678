import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah",
    business: "Nail Technician, Dublin",
    quote: "Bookings went up within the first month. Customers can book themselves at 9pm — I just turn up.",
  },
  {
    name: "Liam",
    business: "Plumber, Cork",
    quote: "Phone calls easily doubled. The site shows up on Google for plumbers near me now — that was the game-changer.",
  },
  {
    name: "Aoife",
    business: "Café Owner, Galway",
    quote: "Looks beautiful and brings in real customers. Anything I want changed gets done the same day.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative px-4 overflow-hidden py-[36px]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Loved by Irish <span className="gradient-text">small businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">Real results from real owners.</p>
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