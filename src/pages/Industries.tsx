import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { industries } from "@/data/industries";
import { industryAccent } from "@/config/accents";
import { industryIcon } from "@/config/industryIcons";

const Industries = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Small business websites by industry | hellowebby"
        description="See how hellowebby builds professional websites for Irish small businesses — plumbers, salons, cafés, electricians, builders, accountants, clinics, retailers and more. From €49/month."
        path="/industries"
      />
      <Navigation />

      <main>
        <section className="relative px-4 pt-32 pb-10 overflow-hidden">
          <div className="glow-orb bg-primary/25 w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 animate-pulse-glow" />
          <div className="container relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.1]">
              Websites for every kind of{" "}
              <span className="gradient-text">Irish small business</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Whatever you do, we build a professional website that gets you found and wins you work —
              designed, hosted and updated for you, from €49/month. Pick your industry to see how we help.
            </p>
          </div>
        </section>

        <section className="relative px-4 section-light overflow-hidden py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => {
                const accent = industryAccent(industry.slug);
                const Icon = industryIcon(industry.slug);
                return (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="group glass rounded-2xl p-6 border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-full bg-card border-2 flex items-center justify-center mb-4 elev-1 group-hover:scale-105 transition-transform"
                    style={{ borderColor: accent.ring }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent.icon }} strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{industry.name}</h2>
                  <p className="text-sm text-muted-foreground flex-1">{industry.metaDescription.split(".")[0]}.</p>
                  <span className="mt-4 text-sm font-semibold inline-flex items-center gap-1" style={{ color: accent.icon }}>
                    See more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
