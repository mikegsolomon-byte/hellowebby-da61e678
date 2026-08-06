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
          <p className="text-sm text-muted-foreground mb-10">Last updated: 6 August 2026</p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">The service</h2>
              <p className="text-muted-foreground">
                hellowebby designs, builds, hosts and maintains a website for your business on a monthly
                subscription. Plans are €49, €89 or €149 per month depending on the tier you choose, plus a
                once-off €79 setup fee charged with your first payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Billing</h2>
              <p className="text-muted-foreground">
                Your first payment covers the €79 setup fee and your first month. After that, your plan renews
                automatically each month at the plan price until you cancel. All payments are processed by Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">14-day money-back guarantee</h2>
              <p className="text-muted-foreground">
                If you're not happy within 14 days of signing up, we'll refund your €79 setup fee in full. Just
                email us and we'll sort it — no argument.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Cancellation</h2>
              <p className="text-muted-foreground">
                You can cancel anytime after your first month with 30 days' notice. There are no cancellation fees
                and no long-term contract. When your subscription ends, hosting stops and your website goes offline.
                We'll provide a full export of your content so you can take it elsewhere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Hosting, domain and SSL</h2>
              <p className="text-muted-foreground">
                While you're subscribed we provide hosting, an SSL certificate and domain connection as part of your
                plan. If you already own a domain, you keep ownership of it. Any domain we register on your behalf
                can be transferred to you on request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Your content</h2>
              <p className="text-muted-foreground">
                You own your text, images and business information, and you confirm you have the right to use
                anything you send us. The website platform and hosting infrastructure remain ours and are provided
                to you as part of the subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Acceptable use</h2>
              <p className="text-muted-foreground">
                We won't build or host content that is illegal, misleading, or infringes someone else's rights. We
                may suspend a site that breaches this, and we'll always tell you why first where we can.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <p className="text-muted-foreground">
                Questions about these terms? Email{" "}
                <a href="mailto:hello@hellowebby.com" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">hello@hellowebby.com</a>.
                These terms are governed by the laws of Ireland.
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