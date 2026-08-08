import { Card, CardContent } from "@/components/ui/card";
import emcallScreenshot from "@/assets/emcall-screenshot.png.asset.json";

const works = [
  {
    label: "Medical equipment · Subscription",
    category: "Medical",
    outcome: "Subscription defibrillator service with plans, training and an online product catalogue.",
    url: "https://www.smartdefibs.com",
    image: "/recent-work/smart-defibs.png",
    thumb: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.smartdefibs.com?w=1200",
  },
  {
    label: "SaaS · Invoicing",
    category: "SaaS",
    outcome: "A voice-to-invoice app that turns a spoken job description into a professional invoice in seconds.",
    url: "https://invoicepal.net",
    image: "/recent-work/invoice-pal.png",
    thumb: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Finvoicepal.net?w=1200",
  },
  {
    label: "Public-safety app",
    category: "Public Safety",
    outcome: "A live map app that helps people find the nearest defibrillator and call for help in an emergency.",
    url: "https://emcall.ie",
    image: emcallScreenshot.url,
    thumb: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Femcall.ie?w=1200",
  },
];

const RecentWork = () => {
  return (
    <section id="recent-work" className="relative px-4 overflow-hidden py-[72px] md:py-[96px]">
      <div className="glow-orb bg-primary/20 w-[450px] h-[450px] top-1/3 right-0 animate-float-slow" />
      <div className="container relative mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-foreground bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest mb-6 shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
              <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
              Our Portfolio
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[0.9] tracking-tighter">
              Websites <span className="gradient-text">we build</span>
            </h2>
          </div>
          <div className="hidden md:flex">
            <div className="w-32 h-32 border-4 border-foreground rounded-full items-center justify-center bg-primary shadow-[6px_6px_0px_0px_hsl(var(--foreground))] -rotate-12 hover:rotate-0 transition-transform">
              <span className="font-bold text-primary-foreground text-center leading-none uppercase text-sm tracking-tight">
                Handcrafted<br/>Experiences
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
            >
              <Card className="relative bg-card/30 backdrop-blur-xl border-4 border-foreground rounded-2xl p-3 shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-all duration-300 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:shadow-[18px_18px_0px_0px_hsl(var(--primary))] h-full overflow-hidden">
                <div className="aspect-[4/3] bg-muted border-2 border-foreground overflow-hidden relative mb-6">
                  <img
                    src={work.image}
                    data-stage="local"
                    alt={`${work.label} — website we built`}
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      if (el.dataset.stage === "local") { el.dataset.stage = "thumb"; el.src = work.thumb; }
                      else if (el.dataset.stage === "thumb") { el.dataset.stage = "placeholder"; el.src = "/placeholder.svg"; }
                    }}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute top-3 right-3 bg-foreground text-primary font-bold text-xs uppercase px-3 py-1 border-2 border-foreground">
                    {work.category}
                  </div>
                </div>
                <CardContent className="px-4 pb-4 pt-0">
                  <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{work.label}</h3>
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed font-medium">{work.outcome}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full border-2 border-foreground bg-primary" />
                      <div className="w-8 h-8 rounded-full border-2 border-foreground bg-card" />
                    </div>
                    <span className="flex items-center gap-2 font-bold text-foreground uppercase text-sm group/btn">
                      Visit site
                      <span className="inline-block p-1 border-2 border-foreground group-hover:bg-primary transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </span>
                  </div>
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
