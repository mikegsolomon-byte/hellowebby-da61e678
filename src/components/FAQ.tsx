import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes your websites \"smart\"?",
    answer: "Our smart websites include integrated booking systems, automated follow-ups, lead capture optimization, and AI-powered tools that work together to help you get more customers without extra effort."
  },
  {
    question: "How long does it take to get my website live?",
    answer: "Most websites are live within 5-7 business days after we receive all your content and requirements. We work quickly to get you online and generating leads as soon as possible."
  },
  {
    question: "What's included in the monthly subscription?",
    answer: "Your monthly subscription includes hosting, unlimited updates and changes, ongoing maintenance, security updates, performance monitoring, and customer support. You'll never pay extra for changes or updates."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! There are no long-term contracts. You can cancel your subscription at any time with 30 days notice. Your website will remain live until the end of your billing period."
  },
  {
    question: "Do you provide the content for my website?",
    answer: "We'll work with you to optimize and structure your content, but you'll need to provide the initial text, images, and information about your business. We can also recommend professional copywriters if needed."
  },
  {
    question: "What's the difference between Starter and Pro plans?",
    answer: "The Starter plan is perfect for small businesses needing a simple web presence. The Pro plan includes advanced features like e-commerce, payment processing, and priority support - ideal for businesses looking to sell online or scale quickly."
  },
  {
    question: "Do I own my website and content?",
    answer: "You own all your content and data. While we maintain the website on our platform during your subscription, you can export your content at any time."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support with response within 24-48 hours. Pro plan customers get priority support with faster response times and access to our team for monthly strategy consultations."
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
