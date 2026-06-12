import { Scissors, Wrench, Coffee, Zap, Dumbbell, Baby, Calculator, Camera } from "lucide-react";

const accents = ["#ff6b35", "#f7931e", "#e84393", "#6c5ce7"];

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
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Built for businesses <span className="gradient-text">like yours</span>
        </h2>
        <p className="text-muted-foreground">Whatever you do, we've built a site for it.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {businesses.map((b, i) => {
          const color = accents[i % accents.length];
          return (
            <div
              key={i}
              className="group aspect-square glass rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.07] hover:scale-[1.03] transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors"
                style={{ background: `${color}25`, border: `1px solid ${color}55` }}
              >
                <b.icon className="w-6 h-6" style={{ color }} />
              </div>
              <p className="font-bold text-sm">{b.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhoIsThisFor;