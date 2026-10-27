import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { TERMS_VERSION } from "../../supabase/functions/_shared/checkout-consent";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Terms and Conditions | hellowebby"
        description="The terms that apply to hellowebby website subscriptions, billing and cancellations."
        path="/terms"
      />
      <Navigation />
      <main className="relative px-4 pt-32 pb-16 overflow-hidden">
        <div className="container relative mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: 27 October 2026 · Version {TERMS_VERSION}</p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Parties, agreement and services</h2>
              <p className="text-muted-foreground mt-3">{"These Terms and Conditions are an agreement between hellowebby (\"we\", \"us\") and you, the customer (\"you\"). We design, build, host and update business websites under the Starter, Growth and Pro subscriptions. The plan description and any scope expressly agreed in writing form part of your agreement. By purchasing, you confirm that you have read, understood and accepted these terms and, if acting for a business, that you are authorised to do so."}</p>
              <p className="text-muted-foreground mt-3">{"Our services are primarily for business customers. A consumer is an individual acting wholly or mainly outside their trade, business, craft or profession. Consumer-only cancellation rights do not normally apply to business purchases. Nothing here removes rights that apply to you under mandatory law."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">2. Billing and renewal</h2>
              <p className="text-muted-foreground mt-3">{"Prices are in EUR. Your chosen monthly or annual subscription is paid in advance through Stripe, with the first payment due at purchase. It renews automatically at the amount and interval shown at checkout until cancelled in accordance with section 4. Annual billing is one payment for a year, not monthly instalments. We will not charge for additional work without your prior agreement."}</p>
              <p className="text-muted-foreground mt-3">{"hellowebby is not currently VAT registered, so no VAT is charged — the prices shown are the total amount payable. There is no separate setup fee, and standard domain registration and renewal are included in your subscription, so the plan price is the total cost of keeping your website online."}</p>
              <p className="text-muted-foreground mt-3">{"You must keep your payment details current. If a payment fails, we will contact you and give a reasonable opportunity to resolve it before suspending the service. Any change to your subscription price will be notified at least 30 days before it takes effect at a future renewal; you can cancel before that renewal."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">3. Consumer cancellation and statutory remedies</h2>
              <p className="text-muted-foreground mt-3">{"If you purchase as a consumer online, you generally have a statutory 14-day cancellation period from the date the contract is concluded. To exercise it, email hello@hellowebby.com with a clear statement that you wish to cancel and enough information to identify your order. You do not have to give a reason. We will make any refund required by law within the applicable statutory deadline, generally 14 days from receiving your cancellation, using the original payment method unless otherwise agreed."}</p>
              <p className="text-muted-foreground mt-3">{"Agreement to these terms alone is not a request to start work during the cancellation period or a waiver of your cancellation rights. If you want us to start during that period, we will obtain your separate express request and any acknowledgements required by law. If you then cancel, a proportionate charge for services actually provided may apply only where permitted by law and where the required information and consent have been provided. A continuing hosting subscription is not fully performed merely because a website has been built or launched."}</p>
              <p className="text-muted-foreground mt-3">{"Your rights relating to services or digital services that do not conform to the contract, including correction, price reduction, termination or refunds where applicable, remain unaffected. We do not offer a separate unconditional 14-day money-back guarantee under these terms."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">4. Cancellation and service closure</h2>
              <p className="text-muted-foreground mt-3">{"For monthly plans, you may cancel after the first month by emailing hello@hellowebby.com with 30 days’ notice. There are no cancellation fees. We will confirm your final payment and service end date in writing. For annual plans, you can give notice to stop the next annual renewal; please do so at least 30 days before renewal. The service remains available for the paid annual period unless we agree otherwise or you have a legal right to end it sooner."}</p>
              <p className="text-muted-foreground mt-3">{"Cancellation does not normally refund a paid billing period, except where required by law or agreed in writing. These subscription notice rules do not restrict statutory consumer cancellation or remedies. At service closure the hosted website is taken offline. On request, we provide a full export of your content within 30 days; this is a content export, not a transfer of our hosting platform or underlying code. Your domain is not affected by service closure and remains yours, as set out in section 5."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">5. Content, intellectual property and domains</h2>
              <p className="text-muted-foreground mt-3">{"You own content you supply and original text and images we create specifically for you. Third-party materials, stock images, fonts, software and integrations remain subject to their owners’ licences; we cannot transfer rights we do not hold. hellowebby retains ownership of its underlying platform, templates, reusable tools and code. You may use these as part of the active subscription, but they are not sold or transferred to you."}</p>
              <p className="text-muted-foreground mt-3">{"You keep your domain. You authorise us to use your supplied materials only as needed to provide the service. You must ensure you have permission to use supplied content, branding and images and to share any personal data."}</p>
              <p className="text-muted-foreground mt-3">{"Domains: your subscription includes one standard domain name. If you already own a domain, we connect it at no additional cost and it remains registered to you. If you need a new one, we register it on your behalf and its standard registration fee and subsequent renewals are included for as long as your subscription is active."}</p>
              <p className="text-muted-foreground mt-3">{"Included cover applies to ordinary domain registrations at normal registry prices. Some names cost materially more — for example premium, reserved or aftermarket names already held by a third party, and certain specialist extensions with higher registry or renewal fees. Where the name you want falls outside the included cover, or you want more than one domain, we will tell you the cost in advance and you can choose to pay the difference, select a different name, or register the domain yourself and have us connect it at no charge. We will not purchase a domain or incur any cost on your behalf without your prior approval, and we are not obliged to supply a domain we cannot obtain at a reasonable cost."}</p>
              <p className="text-muted-foreground mt-3">{"If your subscription ends, the domain remains yours, responsibility for future renewals passes to you, and we will not charge a fee to release or transfer it."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">6. Scope, approvals and unlimited content updates</h2>
              <p className="text-muted-foreground mt-3">{"Unlimited content updates are included on every plan: changes to text, images, opening hours, prices and items on existing pages. They do not include full redesigns, new custom functionality or additional websites. Any work outside the agreed plan will be scoped and priced for your approval before it starts. We do not impose a fixed numerical limit on included content updates."}</p>
              <p className="text-muted-foreground mt-3">{"We aim to complete routine updates within 1–2 working days. Build and update times are estimates, not guaranteed deadlines unless expressly agreed in writing, and depend on the complexity of the request, your feedback and receipt of necessary content and access. We will communicate material delays. You should review previews and approve content before launch; approval does not remove our responsibility for our own errors or your statutory rights."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">7. Your responsibilities and acceptable use</h2>
              <p className="text-muted-foreground mt-3">{"You must provide accurate instructions, contact information, content and authorised access, and tell us promptly about changes or errors. You are responsible for the accuracy of business claims, prices, professional or medical information, legal notices and permissions for the materials you provide. We do not provide legal, medical or regulatory advice. Our work does not replace your review or any specialist advice your business requires."}</p>
              <p className="text-muted-foreground mt-3">{"You must not use the service for unlawful, fraudulent, infringing or harmful activity. We may remove unlawful content or suspend access where reasonably necessary to prevent harm or comply with law. Except where urgent action is necessary, we will explain the issue and give you a reasonable opportunity to remedy it. We may terminate for a serious or repeated breach that is not remedied after reasonable notice; applicable legal rights remain unaffected."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">8. Service quality, third parties and outcomes</h2>
              <p className="text-muted-foreground mt-3">{"We will provide the service with reasonable care and skill and in accordance with the agreed description. Hosting, domain services, payment processing and third-party booking or other integrations depend on external providers. We do not promise uninterrupted or error-free availability, but will take reasonable steps to address problems within our control and keep you informed about significant disruption."}</p>
              <p className="text-muted-foreground mt-3">{"We do not guarantee search-engine rankings, traffic, leads, revenue or compatibility with every third-party system. Third-party changes may require changes to an integration, and any additional work outside your plan will require your approval. These statements do not excuse a failure to provide the contracted service or remove statutory remedies."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">9. Liability and business losses</h2>
              <p className="text-muted-foreground mt-3">{"Nothing in these terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any liability or remedy that cannot lawfully be excluded or limited. Your statutory consumer rights are unaffected."}</p>
              <p className="text-muted-foreground mt-3">{"For business customers only, and to the extent permitted by law, our aggregate liability arising from the agreement, whether in contract, negligence or otherwise, is limited to the subscription fees you paid to us in the 12 months before the event giving rise to the claim. For business customers only, we are not liable for indirect or consequential losses, or loss of profit, revenue, business opportunity, anticipated savings or goodwill."}</p>
              <p className="text-muted-foreground mt-3">{"For consumers, we remain responsible for foreseeable loss caused by our breach or failure to use reasonable care and skill, subject to applicable law; the business liability cap and business-loss exclusions above do not apply. You should take reasonable steps to avoid or minimise loss, including keeping copies of important materials and promptly reporting problems."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">10. Claims arising from customer materials</h2>
              <p className="text-muted-foreground mt-3">{"For business customers only, you agree to reimburse reasonable losses, damages and legal costs arising from a third-party claim that materials you supplied infringe their rights or that your unlawful instructions caused a breach of law, to the extent attributable to you. This does not cover our own breach, negligence or changes made without your authorisation. We will notify you promptly, allow reasonable involvement in the defence and will not agree a settlement requiring payment from you without your consent, not to be unreasonably withheld."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">11. Personal data and confidentiality</h2>
              <p className="text-muted-foreground mt-3">{"Our Privacy Policy explains how we handle information about customers and enquiries. Both parties will take reasonable steps to protect confidential information and credentials shared for the service and will use them only for the agreed purpose, except where disclosure is required by law."}</p>
              <p className="text-muted-foreground mt-3">{"If we process personal data on your behalf through website forms or integrations, we will agree appropriate data-processing terms before doing so. You remain responsible for lawful collection, relevant privacy information and any required consents. Do not send patient records or other sensitive personal data unless suitable arrangements and safeguards have been agreed. These terms do not replace a data-processing agreement."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">12. Events outside our control and changes</h2>
              <p className="text-muted-foreground mt-3">{"If an event beyond our reasonable control prevents performance, we will notify you, take reasonable steps to reduce its impact and resume the affected service as soon as reasonably possible. This does not remove legal remedies, including where prolonged disruption gives you a right to terminate or receive a refund."}</p>
              <p className="text-muted-foreground mt-3">{"We may make reasonable changes to these terms to reflect changes in law, security requirements or the service. We will explain material changes and give at least 30 days’ notice before they take effect. Changes will not apply retrospectively to an existing dispute. If a material change adversely affects you, you may end the affected service before it takes effect without a cancellation penalty; any refund required by law will be provided."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">13. Governing law and interpretation</h2>
              <p className="text-muted-foreground mt-3">{"These terms are governed by Irish law. For business customers, Irish courts have jurisdiction. Consumers retain any mandatory protections and rights to bring proceedings in the courts available to them under applicable law. If a provision is unenforceable, the remaining terms continue to apply to the extent permitted by law. A delay in enforcing a right is not a waiver of it."}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">14. Contact and complaints</h2>
              <p className="text-muted-foreground mt-3">{"For cancellation, billing, service issues or complaints, email hello@hellowebby.com with your name, order details and a description of the issue. We will acknowledge your complaint and work with you towards a resolution. This does not require you to waive legal rights or delay seeking a remedy. Consumers can also obtain guidance from the Competition and Consumer Protection Commission at ccpc.ie."}</p>
            </section>
            <p className="text-sm text-muted-foreground">Read our <a href="/privacy" className="font-semibold underline underline-offset-4 hover:text-primary">Privacy Policy</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;