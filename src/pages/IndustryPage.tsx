import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import ClinicBriefGenerator from "@/components/ClinicBriefGenerator";
import { Button } from "@/components/ui/button";
import { getIndustry } from "@/data/industries";
import NotFound from "./NotFound";
import IntakeFormDialog, { START_PLAN, QUESTION_PLAN } from "@/components/IntakeFormDialog";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustry(slug);
  const [formOpen, setFormOpen] = useState(false);
  const [formPlan, setFormPlan] = useState<string>(START_PLAN);
  const openForm = (plan: string) => {
    setFormPlan(plan);
    setFormOpen(true);
  };

  if (!industry) return <NotFound />;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen">
      <PageMeta
        title={industry.metaTitle}
        description={industry.metaDescription}
        path={`/industries/${industry.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative px-4 pt-32 pb-12 overflow-hidden">
          <div className="glow-orb bg-primary/25 w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 animate-pulse-glow" />
          <div className="container relative mx-auto max-w-3xl text-center">
            <div className="text-5xl mb-4" aria-hidden="true">{industry.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.1]">
              {industry.h1.split(" in Ireland")[0]}{" "}
              <span className="gradient-text">in Ireland</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{industry.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="rounded-full ring-glow" onClick={() => openForm(START_PLAN)}>
                Get my website <ArrowRight className="w-4 h-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="/#pricing">See plans &amp; pricing</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative px-4 section-light overflow-hidden py-[36px]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              Why {industry.name.toLowerCase()} need a{" "}
              <span className="gradient-text">proper website</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {industry.benefits.map((b, i) => (
                <div key={i} className="glass rounded-2xl p-6 border-border/40">
                  <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="relative px-4 overflow-hidden py-[36px]">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
              What&apos;s included
            </h2>
            <div className="glass rounded-2xl p-6 md:p-8 border-border/40">
              <ul className="space-y-3">
                {industry.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground mt-8 leading-relaxed">{industry.localSeo}</p>
          </div>
        </section>

        {industry.slug === "therapists-and-clinics" && <ClinicBriefGenerator />}

        {/* FAQ */}
        <section className="relative px-4 section-light overflow-hidden py-[36px]">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {industry.faqs.map((f, i) => (
                <div key={i} className="glass rounded-2xl p-6 border-border/40">
                  <h3 className="font-bold mb-2">{f.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-4 overflow-hidden py-[48px]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready for a website that{" "}
              <span className="gradient-text">wins you work?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We design, build, host and update it for you — from €49/month, live within a few days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="rounded-full ring-glow" onClick={() => openForm(START_PLAN)}>
                Get my website <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" onClick={() => openForm(QUESTION_PLAN)}>
                Ask a question first
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              <Link to="/industries" className="underline underline-offset-4 hover:text-foreground transition-colors">
                See all industries
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan={formPlan} />
    </div>
  );
};

export default IndustryPage;
