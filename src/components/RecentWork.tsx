import { Card, CardContent } from "@/components/ui/card";

const works = [
  {
    label: "Café & restaurant",
    outcome: "Menu, opening hours and online bookings in one tidy site.",
  },
  {
    label: "Trades & services",
    outcome: "Quote-request form that sends jobs straight to their inbox.",
  },
  {
    label: "Retail shop",
    outcome: "A clean showcase of their products with enquiries landing by email.",
  },
];

const RecentWork = () => {
  return (
    <section id="recent-work" className="relative px-4 overflow-hidden py-[36px]">
      <div className="glow-orb bg-primary/20 w-[450px] h-[450px] top-1/3 right-0 animate-float-slow" />
      <div className="container relative mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Websites <span className="gradient-text">we build</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Examples of the kind of sites we put together for small businesses.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              className="relative glass border-border/40 overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt={`${work.label} website example`}
                  loading="lazy"
                  className="w-full h-44 object-cover border-b-2 border-foreground bg-muted"
                />
                <span className="absolute top-3 left-3 bg-primary text-foreground text-xs font-bold px-3 py-1 rounded-full border-2 border-foreground">
                  Demo build
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{work.label}</h3>
                <p className="text-muted-foreground">{work.outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;