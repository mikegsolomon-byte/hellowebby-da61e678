import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the monthly subscription?",
    answer: "Hosting, SSL, unlimited updates and changes, ongoing maintenance, security updates, SEO upkeep, and support. You'll never pay extra for changes."
  },
  {
    question: "How long does it take to get my website live?",
    answer: "Most websites are live within 5 working days once we have your content and brand details. We move fast so you can start generating leads."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes. No long-term contracts. Cancel any time with 30 days' notice — your site stays live until the end of your billing period."
  },
  {
    question: "Do I own my website?",
    answer: "You own all your content and data. We host and maintain the site during your subscription, and you can export your content whenever you like."
  },
  {
    question: "Will you update my website for me?",
    answer: "Yes — every plan includes managed updates. Send us the change, we make it. No CMS wrangling, no extra invoices."
  },
  {
    question: "Is this suitable for a business with no tech experience?",
    answer: "Absolutely. We handle everything — design, copy guidance, hosting, SEO, updates. You focus on your business; we look after the website."
  },
  {
    question: "What makes your websites \"smart\"?",
    answer: "Our smart websites include integrated booking systems, automated follow-ups, lead capture optimization, and AI-powered tools that work together to help you get more customers without extra effort."
  },
  {
    question: "Do you provide the content for my website?",
    answer: "We'll work with you to optimize and structure your content, but you'll need to provide the initial text, images, and information about your business. We can also recommend professional copywriters if needed."
  },
  {
    question: "What's the difference between Starter and Pro plans?",
    answer: "The Starter plan is perfect for small businesses needing a simple web presence. The Pro plan includes advanced features like e-commerce, payment processing, and priority support - ideal for businesses looking to sell online or scale quickly."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="relative px-4 overflow-hidden py-[36px]">
      <div className="glow-orb bg-primary/15 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="container relative mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Everything you need to know about our smart website service
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
