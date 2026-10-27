import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import IntakeFormDialog, { QUESTION_PLAN } from "./IntakeFormDialog";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface FaqGroup {
  title: string;
  items: FaqItem[];
}

// Grouped so people can find the answer they came for. The cost, branding,
// ownership and GDPR entries come from questions real enquirers have asked.
const groups: FaqGroup[] = [
  {
    title: "Before you commit",
    items: [
      {
        question: "Do I really see my website before paying?",
        answer:
          "Yes. Tell us about your business and we'll build a real preview and email you the link — no card details, no charge. If you want it, pick your monthly plan and we'll finish and launch it. If you don't, you owe nothing.",
      },
      {
        question: "Can I see examples of websites you've built?",
        answer: (
          <>
            Yes — you can{" "}
            <a href="#recent-work" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">
              see our recent work
            </a>{" "}
            further up this page, including Smart Defibs (medical equipment) and Emcall (a public-safety app for
            finding the nearest defibrillator). We've also written up how we approach sites for{" "}
            <Link to="/industries/therapists-and-clinics" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">
              therapists and clinics
            </Link>
            . If you'd like to see something closer to your own practice, just ask and we'll send relevant examples.
          </>
        ),
      },
      {
        question: "How long does it take to build my website?",
        answer: "Most websites are live within a few days of receiving your content.",
      },
      {
        question: "Do you work with businesses outside Dublin?",
        answer:
          "Yes, we work with businesses right across Ireland. Everything is handled remotely so your location doesn't matter.",
      },
    ],
  },
  {
    title: "Cost and contract",
    items: [
      {
        question: "What will it cost me in total?",
        answer:
          "The price you see is the price you pay. Plans are €49, €89 or €149 a month, or €490, €890 or €1,490 a year if you pay annually. There is no setup fee and there are no hidden extras. hellowebby is not VAT registered, so no VAT is added on top — the monthly or annual figure is the total amount payable. If you need a new domain name, we register it and cover the standard cost as part of your plan.",
      },
      {
        question: "Is there a contract or minimum term?",
        answer:
          "No long-term contract. After your first month you are committing one month at a time, and you are free to stay or go.",
      },
      {
        question: "What happens if I cancel?",
        answer:
          "Monthly plans can be cancelled after your first month with 30 days' notice; annual plans just need notice at least 30 days before renewal. There are no cancellation fees, and no charge for taking your domain with you. You keep your domain name and all the content you gave us, plus the text and images we created for you, and on request we'll send a full export of your content within 30 days. When the subscription ends, hosting stops and the site goes offline, because our platform, templates and code stay with us.",
      },
    ],
  },
  {
    title: "What's included",
    items: [
      {
        question: "What's included in my monthly plan?",
        answer:
          "Everything needed to keep your site live and current: the design and build, hosting, an SSL certificate, connecting your domain, all maintenance and security updates, unlimited content changes, and email support from a real person in Ireland. On-page SEO is set up on every plan. Growth adds online booking and keyword targeting, and Pro adds advanced SEO reporting and custom integrations. There's nothing else you need to buy to keep the site running.",
      },
      {
        question: "Can I use my existing domain — and who registers it?",
        answer:
          "Either way it's covered. If you already own a domain we'll connect it at no extra cost. If you need a new one, we'll register it for you and standard registration and renewals are included in your plan while you're subscribed. The domain is yours: if you ever leave you keep it, there's no charge to transfer it away, and renewals are then down to you.",
      },
      {
        question: "Do you handle SEO?",
        answer:
          "Yes. Every plan includes on-page SEO setup — proper page titles, meta descriptions, structured data, and Google indexing. The Growth and Pro plans include more advanced SEO work, including local keyword targeting and search-performance tracking.",
      },
      {
        question: "What if I want to change something on my website?",
        answer:
          "Just email us what you need changed and we'll sort it — unlimited content updates are included on every plan at no extra cost. Most changes are live within 1–2 working days.",
      },
    ],
  },
  {
    title: "Design, branding and content",
    items: [
      {
        question: "Can you use my own logo, artwork and brand colours?",
        answer:
          "Yes. Send us your logo, colours, fonts and any artwork you already have and we'll build the site around them, so it looks like the rest of your brand. If your branding is still a work in progress, we'll suggest a palette and typography that suit your business, and you can change anything you don't like.",
      },
      {
        question: "How much input do I have into the design?",
        answer:
          "As much as you want. You tell us what you like at the start, we build a real preview, and then you tell us what to change. Nothing goes live until you're happy with it — and once it is live you can still email us any change you want, because unlimited updates are included.",
      },
      {
        question: "Who writes the text and takes the photos?",
        answer:
          "We write your website copy from your form answers, and you review it before anything goes live. You can supply your own photos, or we'll use high-quality stock images that fit your business.",
      },
    ],
  },
  {
    title: "Ownership, privacy and data",
    items: [
      {
        question: "Who owns the website, domain and content?",
        answer:
          "You own your content and your domain. Your text, images, logo and business information are always yours, and so is the copy and imagery we create for you. Your domain stays in your name. What stays with us is the platform, templates and underlying code the site runs on — that's what your subscription pays for, much like Shopify or Wix. If you leave, we'll send a full export of your content within 30 days so you can rebuild elsewhere, but the site itself goes offline.",
      },
      {
        question: "Can you help with privacy and GDPR?",
        answer: (
          <>
            Up to a point, and we'll be straight with you about where that point is. Every site comes with an SSL
            certificate, a{" "}
            <Link to="/privacy" className="underline underline-offset-4 font-semibold hover:text-primary transition-colors">
              privacy policy
            </Link>{" "}
            page we tailor to your business, and contact forms that collect only what is needed to reply to an
            enquiry. What we don't do is give legal advice. If you're a therapist, clinic or other healthcare
            professional, your client records and any special-category health data need arrangements of their own —
            they should never sit in a website contact form — so we'd recommend getting advice specific to your
            practice.
          </>
        ),
      },
    ],
  },
];

const FAQ = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="faq" className="relative px-4 overflow-hidden py-[36px]">
      <div className="glow-orb bg-primary/15 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="container relative mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Questions? <span className="gradient-text">We've got answers.</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Straight answers on cost, what's included, ownership and cancelling — no jargon, no surprises.
        </p>

        <div className="space-y-10">
          {groups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-2">
                {group.title}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {group.items.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${groupIndex}-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 glass border-2 border-foreground rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl font-extrabold mb-2">Still have a question?</h3>
          <p className="text-muted-foreground mb-5">
            Ask us anything before you decide — no obligation, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" className="rounded-full" onClick={() => setFormOpen(true)}>
              Ask a question
            </Button>
            <a
              href="mailto:hello@hellowebby.com"
              className="text-sm font-semibold underline underline-offset-4 hover:text-primary transition-colors"
            >
              or email hello@hellowebby.com
            </a>
          </div>
        </div>
      </div>
      <IntakeFormDialog open={formOpen} onOpenChange={setFormOpen} selectedPlan={QUESTION_PLAN} />
    </section>
  );
};

export default FAQ;
