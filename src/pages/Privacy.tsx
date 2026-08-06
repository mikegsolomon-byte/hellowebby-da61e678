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
          <p className="text-sm text-muted-foreground mb-10">Last updated: 6 August 2026</p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">Who we are</h2>
              <p className="text-muted-foreground">
                hellowebby builds and hosts websites for small businesses. If you have any question about this
                policy or your data, email us at{" "}
                <a href="mailto:hello@hellowebby.com" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">hello@hellowebby.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">What we collect</h2>
              <p className="text-muted-foreground">
                When you use our enquiry or contact form we collect your name, email address, and the business
                details you choose to give us (business name, what you do, what you want your website to achieve).
                If you subscribe to our checklist we collect your email address. We do not collect any special
                category data, and we do not buy or sell personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Where it's stored</h2>
              <p className="text-muted-foreground">
                Form submissions are stored securely in our backend database (hosted on Supabase infrastructure)
                with access restricted to our team. We use this information only to reply to you, build and support
                your website, and send you service emails you've asked for.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Payments</h2>
              <p className="text-muted-foreground">
                Payments are processed by Stripe. Your card details are entered directly with Stripe and are never
                seen or stored by us. We keep only a record of your subscription, plan, and payment status.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Emails</h2>
              <p className="text-muted-foreground">
                We send transactional emails (enquiry confirmations, receipts, checklist delivery). Marketing emails
                always include an unsubscribe link, and you can opt out at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Your rights</h2>
              <p className="text-muted-foreground">
                Under GDPR you can ask us for a copy of the data we hold about you, ask us to correct it, or ask us
                to delete it. Email{" "}
                <a href="mailto:hello@hellowebby.com" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">hello@hellowebby.com</a>{" "}
                and we'll action your request within 30 days. You also have the right to complain to the Irish Data
                Protection Commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">How long we keep it</h2>
              <p className="text-muted-foreground">
                Enquiries are kept for up to 24 months. Customer records are kept for as long as you're a customer,
                plus the period we're required to keep financial records for tax purposes.
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