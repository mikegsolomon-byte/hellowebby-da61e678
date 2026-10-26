import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Privacy Policy | hellowebby"
        description="How hellowebby collects, stores and protects your personal data."
        path="/privacy"
      />
      <Navigation />
      <main className="relative px-4 pt-32 pb-16 overflow-hidden">
        <div className="container relative mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: 7 August 2026</p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Data controller</h2>
              <p className="text-muted-foreground">
                hellowebby, Ireland, is the data controller for the personal data described in this policy. You can
                contact us at any time at{" "}
                <a href="mailto:hello@hellowebby.com" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">hello@hellowebby.com</a>.
              </p>
              
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. What we collect and why</h2>
              <div className="overflow-x-auto rounded-2xl border-2 border-foreground">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary text-foreground">
                    <tr>
                      <th className="p-3 font-bold border-b-2 border-foreground">Data</th>
                      <th className="p-3 font-bold border-b-2 border-foreground">Purpose</th>
                      <th className="p-3 font-bold border-b-2 border-foreground">Legal basis</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/60">
                      <td className="p-3 align-top">Contact &amp; enquiry form data — name, email, phone, company, message</td>
                      <td className="p-3 align-top">To respond to your enquiry and take pre-contractual steps</td>
                      <td className="p-3 align-top">Pre-contractual steps at your request (Art 6(1)(b) GDPR) and our legitimate interest in responding (Art 6(1)(f))</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="p-3 align-top">Checkout data — email; payment is handled entirely by Stripe and we never see or store your card details</td>
                      <td className="p-3 align-top">To set up and manage your subscription</td>
                      <td className="p-3 align-top">Performance of a contract (Art 6(1)(b))</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="p-3 align-top">Lead-magnet / newsletter signup — name, email</td>
                      <td className="p-3 align-top">To send you the resource and occasional updates</td>
                      <td className="p-3 align-top">
                        Consent (Art 6(1)(a)), which you can withdraw anytime using the unsubscribe link in any
                        email we send
                      </td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="p-3 align-top">Usage analytics, provided by our hosting platform (Lovable)</td>
                      <td className="p-3 align-top">To understand how the site is used, in aggregate, and improve it</td>
                      <td className="p-3 align-top">
                        Our legitimate interest in maintaining and improving the site (Art 6(1)(f)). This is first-party analytics only — no advertising or cross-site tracking.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 align-top">Google Analytics — pages visited, device and browser type, approximate location, collected via cookies</td>
                      <td className="p-3 align-top">To measure visits and improve the site</td>
                      <td className="p-3 align-top">
                        Consent (Art 6(1)(a)), given through our cookie banner. Only collected if you click "Accept", and you can withdraw consent anytime.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Who we share data with (processors)</h2>
              <p className="text-muted-foreground">
                We share personal data with Supabase (database and email infrastructure), Stripe (payment
                processing), Google (analytics, only if you accept analytics cookies), and our hosting provider. Some of these processors may transfer data outside the EEA.
                Where they do, those transfers are covered by the EU Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. How long we keep it (retention)</h2>
              <p className="text-muted-foreground">
                Enquiry data is kept for a maximum of 24 months. Customer account and billing data is kept for the
                duration of the contract plus statutory retention periods (6 years for financial records under Irish
                law). Newsletter data is kept until you unsubscribe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Your rights</h2>
              <ul className="text-muted-foreground list-disc pl-6 space-y-1">
                <li>Access to the personal data we hold about you</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent at any time</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                You can exercise any of these rights by emailing{" "}
                <a href="mailto:hello@hellowebby.com" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">hello@hellowebby.com</a>.
                You also have the right to lodge a complaint with the Data Protection Commission (dataprotection.ie).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Automated decision-making</h2>
              <p className="text-muted-foreground">
                We do not carry out automated decision-making or profiling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Children</h2>
              <p className="text-muted-foreground">
                Our service is not aimed at children and we do not knowingly collect data from them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Cookies</h2>
              <p className="text-muted-foreground">
                We keep cookies to a minimum and use only the following:
              </p>
              <ul className="text-muted-foreground list-disc pl-6 space-y-1 mt-3">
                <li>
                  Strictly necessary / functional — set by our hosting platform (Lovable) to serve the site and keep your session working. These are required for the site to function, so no consent is needed.
                </li>
                <li>
                  Payment — when you go to checkout, Stripe sets fraud-prevention cookies to keep your payment secure. These are strictly necessary for taking payment safely.
                </li>
                <li>
                  Analytics — our hosting platform collects privacy-friendly, first-party usage analytics to help us improve the site.
                </li>
                <li>
                  Google Analytics (optional) — only if you click "Accept" in our cookie banner, Google Analytics sets cookies (such as _ga) to measure how visitors use the site. Google may process this data outside the EEA under the EU Standard Contractual Clauses. If you reject, Google Analytics is never loaded.
                </li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We do not use advertising cookies. You can change your choice anytime using "Cookie preferences" in the footer. If you have questions about our analytics, email us at{" "}
                <a href="mailto:hello@hellowebby.com" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">hello@hellowebby.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;