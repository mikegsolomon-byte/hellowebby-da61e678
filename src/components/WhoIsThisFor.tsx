import { Scissors, Wrench, Coffee, Zap, HardHat, Briefcase, HeartPulse, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const businesses = [
  { icon: Wrench, label: "Plumbers", slug: "plumbers" },
  { icon: Scissors, label: "Salons & Barbers", slug: "salons-and-barbers" },
  { icon: Coffee, label: "Cafés & Restaurants", slug: "cafes-and-restaurants" },
  { icon: Zap, label: "Electricians", slug: "electricians" },
  { icon: HardHat, label: "Builders & Tradespeople", slug: "builders-and-tradespeople" },
  { icon: Briefcase, label: "Accountants & Solicitors", slug: "accountants-and-solicitors" },
  { icon: HeartPulse, label: "Therapists & Clinics", slug: "therapists-and-clinics" },
  { icon: ShoppingBag, label: "Retail & Boutiques", slug: "retail-and-boutiques" },
];

const WhoIsThisFor = () => {
  return (
    <section className="relative px-4 section-light overflow-hidden py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Built for Irish small businesses <span className="gradient-text">like yours</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tap your industry to see how we help — and what your website could do for you.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {businesses.map((b, i) => {
            const filled = (i + Math.floor(i / 4)) % 2 === 0;
            return (
              <Link
                key={i}
                to={`/industries/${b.slug}`}
                className={`group rounded-2xl p-6 flex flex-col items-start text-left transition-all hover:-translate-y-1 ${
                  filled ? "bg-primary border border-primary elev-1 hover:elev-2" : "glass hover:border-primary/40"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                    filled ? "bg-background" : "bg-primary/20"
                  }`}
                >
                  <b.icon className="w-6 h-6 text-foreground" strokeWidth={2.2} />
                </div>
                <p className="font-bold leading-snug">{b.label}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  See how
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;