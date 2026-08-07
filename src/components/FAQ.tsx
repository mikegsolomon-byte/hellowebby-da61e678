import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I own my website?",
    answer: "You own all of your content — your text, images, and business information are always yours. The website platform and hosting infrastructure are managed by us as part of your subscription, similar to how Shopify or Wix work. If you ever decide to move on, we'll give you a full export of your content.",
  },
  {
    question: "What happens if I cancel?",
    answer: "You can cancel anytime after your first month with 30 days' notice. We'll give you plenty of time to make alternative arrangements. There are no cancellation fees.",
  },
  {
    question: "How long does it take to build my website?",
    answer: "Most websites are live within about a week of receiving your content.",
  },
  {
    question: "Is the €79 setup fee charged every year?",
    answer: "No — it's a once-off fee charged when you first sign up. Your monthly subscription covers everything after that.",
  },
  {
    question: "Do you work with businesses outside Dublin?",
    answer: "Yes, we work with businesses right across Ireland. Everything is handled remotely so your location doesn't matter.",
  },
  {
    question: "What if I want to change something on my website?",
    answer: "Just email us what you need changed and we'll sort it — unlimited content updates are included on every plan at no extra cost. Most changes are live within 1–2 working days.",
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contract. You're committing to one month at a time after the first month. The €79 setup fee covers the cost of building your site, and after that you're free to stay or go.",
  },
  {
    question: "Do you handle SEO?",
    answer: "Yes. Every plan includes on-page SEO setup — proper page titles, meta descriptions, structured data, and Google indexing. The Growth and Pro plans include more advanced SEO work including keyword targeting and Google Business Profile optimisation.",
  },
  {
    question: "Can I see examples of your websites?",
    answer: (
      <>
        Yes — you can{" "}
        <a href="#recent-work" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">
          see our recent work
        </a>{" "}
        further up this page. Each example shows the kind of site we build for that type of business.
      </>
    ),
  },
  {
    question: "Who writes the text and takes the photos?",
    answer: "We write your website copy from your form answers. You can supply your own photos, or we'll use high-quality stock images that fit your business.",
  },
  {
    question: "Can I use my existing domain?",
    answer: "Yes — if you already own a domain, we'll connect it for you at no extra cost. If not, we'll sort one out for you.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative px-4 overflow-hidden py-[36px]">
      <div className="glow-orb bg-primary/15 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="container relative mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Questions? <span className="gradient-text">We've got answers.</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Everything you need to know before getting started.
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
