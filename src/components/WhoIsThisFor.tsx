import { Scissors, Wrench, Coffee, Zap, HardHat, Briefcase, HeartPulse, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { industryAccent } from "@/config/accents";

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
  const reveal = useReveal();
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
        <div ref={reveal.ref} className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${reveal.className}`}>
          {businesses.map((b, i) => {
            const accent = industryAccent(b.slug);
            return (
            <Link
              key={i}
              to={`/industries/${b.slug}`}
              className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:border-primary/40 transition-all"
            >
              <div
                className="w-14 h-14 rounded-full bg-card border-2 flex items-center justify-center mb-3 elev-1 group-hover:scale-105 transition-transform"
                style={{ borderColor: accent.ring }}
              >
                <b.icon className="w-7 h-7" style={{ color: accent.icon }} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <p className="font-bold">{b.label}</p>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;