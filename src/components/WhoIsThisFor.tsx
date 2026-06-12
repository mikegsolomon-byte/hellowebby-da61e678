import { Scissors, Wrench, Coffee, Zap, Dumbbell, Baby, Calculator, Camera } from "lucide-react";

const businesses = [
  { icon: Scissors, label: "Salons" },
  { icon: Wrench, label: "Plumbers" },
  { icon: Coffee, label: "Cafés" },
  { icon: Zap, label: "Electricians" },
  { icon: Dumbbell, label: "Personal Trainers" },
  { icon: Baby, label: "Childminders" },
  { icon: Calculator, label: "Accountants" },
  { icon: Camera, label: "Photographers" },
];

const WhoIsThisFor = () => {
  return (
    <section className="relative px-4 section-light overflow-hidden py-[36px]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Built for businesses <span className="gradient-text">like yours</span>
          </h2>
          <p className="text-lg text-muted-foreground">Whatever you do, we've built a site for it.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {businesses.map((b, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary border-2 border-foreground flex items-center justify-center mb-3 shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                <b.icon className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <p className="font-bold">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;