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
                        Consent (Art 6(1)(a)), which you can withdraw anytime via the{" "}
                        <a href="/unsubscribe" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">unsubscribe page</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 align-top">Basic analytics</td>
                      <td className="p-3 align-top">To understand how the site is used and improve it</td>
                      <td className="p-3 align-top">
                        Consent or legitimate interest depending on the tool.{" "}
                        <span className="font-bold text-foreground">[TODO: confirm analytics tooling in use]</span>
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
                processing), and our hosting provider. Some of these processors may transfer data outside the EEA.
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
              <p className="font-bold">
                [TODO: cookie audit — if the site sets only strictly necessary cookies, state that; if
                analytics/marketing cookies are used, state that consent is collected via a cookie banner]
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