import { Card, CardContent } from "@/components/ui/card";

const works = [
  {
    label: "Medical equipment · Subscription",
    outcome: "Subscription defibrillator service with plans, training and an online product catalogue.",
    url: "https://www.smartdefibs.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.smartdefibs.com?w=1200",
  },
  {
    label: "SaaS · Invoicing",
    outcome: "A voice-to-invoice app that turns a spoken job description into a professional invoice in seconds.",
    url: "https://invoicepal.net",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Finvoicepal.net?w=1200",
  },
  {
    label: "Public-safety app",
    outcome: "A live map app that helps people find the nearest defibrillator and call for help in an emergency.",
    url: "https://emcall.ie",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Femcall.ie?w=1200",
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
          A few of the sites we've designed and built for Irish businesses.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
            >
              <Card className="relative glass border-border/40 overflow-hidden hover:border-primary/40 group-hover:-translate-y-1 transition-all h-full">
                <div className="relative">
                  <img
                    src={work.image}
                    alt={`${work.label} — website we built`}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                    className="w-full h-44 object-cover border-b-2 border-foreground bg-muted"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.label}</h3>
                  <p className="text-muted-foreground">{work.outcome}</p>
                  <p className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1">
                    Visit site <span aria-hidden="true">↗</span>
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;