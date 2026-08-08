import { Scissors, Wrench, Coffee, Zap, HardHat, Briefcase, HeartPulse, ShoppingBag } from "lucide-react";
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
    <section className="relative px-4 section-light overflow-hidden py-[36px]">
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
          {businesses.map((b, i) => (
            <Link
              key={i}
              to={`/industries/${b.slug}`}
              className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:border-primary/40 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary border-2 border-foreground flex items-center justify-center mb-3 shadow-[3px_3px_0_0_hsl(var(--foreground))] group-hover:scale-105 transition-transform">
                <b.icon className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <p className="font-bold">{b.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;