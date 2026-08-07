import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Terms of Service | hellowebby"
        description="The terms that apply to hellowebby website subscriptions, setup fees and cancellations."
        path="/terms"
      />
      <Navigation />
      <main className="relative px-4 pt-32 pb-16 overflow-hidden">
        <div className="container relative mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: 7 August 2026</p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Parties, definitions and services</h2>
              <p className="text-muted-foreground">
                These terms are an agreement between hellowebby ("we", "us") and you, the customer ("you"). "Service"
                means the website subscription described here. hellowebby designs, builds, hosts and updates a
                website for your business under a monthly subscription (Starter, Growth, or Pro) plus a once-off €79
                setup fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Billing</h2>
              <p className="text-muted-foreground">
                Your subscription is a recurring monthly charge taken via Stripe from your signup date. The €79 setup
                fee is charged once, at signup. All prices are in EUR.
              </p>
              <p className="mt-3 font-bold">
                [TODO: VAT status — state whether prices include/exclude VAT and the VAT registration number if
                applicable]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. 14-day money-back guarantee &amp; right of withdrawal</h2>
              <p className="text-muted-foreground">
                We offer a 14-day money-back guarantee on the €79 setup fee. In addition, as a consumer you have a
                statutory 14-day right of withdrawal from distance contracts. By asking us to begin building your
                website within the 14-day withdrawal period, you expressly consent to work starting during that
                period and you acknowledge that once the service has been fully performed you lose the right of
                withdrawal (per the Consumer Rights Directive / S.I. No. 484/2013).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Cancellation</h2>
              <p className="text-muted-foreground">
                You can cancel anytime after your first month with 30 days' notice, and there are no cancellation
                fees. On cancellation the website is taken offline, and we provide a full export of your content on
                request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Ownership</h2>
              <p className="text-muted-foreground">
                You own all content you provide and the content we create for you (text and images). hellowebby
                retains ownership of the underlying platform, templates and code. You keep your domain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Fair use of unlimited updates</h2>
              <p className="text-muted-foreground">
                Unlimited updates cover content changes to your existing website — text, images, opening hours,
                prices, and adding items to existing pages. They do not cover full redesigns, new custom features, or
                additional/new websites. We aim to complete updates within 1–2 working days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Your obligations</h2>
              <p className="text-muted-foreground">
                You agree to provide accurate content, to confirm you hold the rights to any materials you supply,
                and to use the website lawfully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Service levels</h2>
              <p className="text-muted-foreground">
                We provide reasonable-efforts uptime through our hosting providers. We do not guarantee any specific
                Google ranking from SEO work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">9. Liability</h2>
              <p className="text-muted-foreground">
                Our total liability is limited to the fees you paid in the preceding 12 months. Nothing in these
                terms excludes liability that cannot be excluded under Irish law, and your statutory consumer rights
                are unaffected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">10. Changes to these terms</h2>
              <p className="text-muted-foreground">
                We may update these terms on 30 days' notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">11. Governing law</h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of Ireland, and the Irish courts have jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">12. Complaints</h2>
              <p className="text-muted-foreground">
                Please contact us first at{" "}
                <a href="mailto:hello@hellowebby.com" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">hello@hellowebby.com</a>{" "}
                and we'll do our best to resolve things. Consumers may also contact the Competition and Consumer
                Protection Commission (ccpc.ie).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;