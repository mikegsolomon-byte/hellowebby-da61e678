import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah",
    business: "Nail Technician, Dublin",
    quote: "Bookings went up within the first month. Customers can book themselves at 9pm — I just turn up.",
    accent: "#ff6b35",
  },
  {
    name: "Liam",
    business: "Plumber, Cork",
    quote: "Phone calls easily doubled. The site shows up on Google for plumbers near me now — that was the game-changer.",
    accent: "#e84393",
  },
  {
    name: "Aoife",
    business: "Café Owner, Galway",
    quote: "Looks beautiful and brings in real customers. Anything I want changed gets done the same day.",
    accent: "#6c5ce7",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Loved by Irish <span className="gradient-text">small businesses</span>
        </h2>
        <p className="text-muted-foreground">Real results from real owners.</p>
      </div>
      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0 pb-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative glass rounded-[2rem] p-8 min-w-[85%] md:min-w-0 snap-center overflow-hidden group hover:bg-white/[0.07] transition-all"
          >
            <div
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
              style={{ background: t.accent }}
            />
            <div className="relative">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#f7931e] text-[#f7931e]" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${t.accent}, #6c5ce7)` }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.business}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;