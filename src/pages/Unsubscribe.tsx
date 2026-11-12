import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";

// Older marketing emails linked here. The route was removed at one point, which
// sent those clicks to the 404 page — and our privacy policy tells people they
// can withdraw consent from any email, so this page needs to exist.
const Unsubscribe = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Unsubscribe | hellowebby"
        description="How to stop receiving marketing emails from hellowebby."
        path="/unsubscribe"
        noindex
      />
      <Navigation />
      <main className="relative px-4 pt-32 pb-16 overflow-hidden">
        <div className="container relative mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Unsubscribe
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry to see you go — we'll take you off our list.
          </p>

          <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
            <p className="text-base leading-relaxed">
              Email{" "}
              <a
                href="mailto:hello@hellowebby.com?subject=Unsubscribe"
                className="font-semibold underline underline-offset-4 hover:text-primary transition-colors"
              >
                hello@hellowebby.com
              </a>{" "}
              with the word <strong>unsubscribe</strong>, from the address you'd like removed, and we'll take care
              of it within 5 working days.
            </p>
            <p className="text-sm text-muted-foreground">
              This only stops marketing emails. If you're a customer we'll still send you service messages about
              your website, such as receipts and account notices.
            </p>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            For anything else about your data, see our{" "}
            <a href="/privacy" className="font-semibold underline underline-offset-4 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
