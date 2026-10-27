import { defineTool } from "@lovable.dev/mcp-js";

const plans = [
  {
    name: "Starter",
    monthlyPriceEur: 49,
    annualPriceEur: 490,
    bestFor: "Small businesses that need a professional website quickly",
    features: [
      "5-page professionally designed website",
      "Mobile-responsive design",
      "Hosting, SSL certificate and domain included",
      "On-page SEO setup",
      "Contact and lead capture form",
      "Unlimited content updates",
      "Google Analytics connection",
    ],
  },
  {
    name: "Growth",
    monthlyPriceEur: 89,
    annualPriceEur: 890,
    bestFor: "Irish SMEs that need bookings and stronger local search support",
    features: [
      "Up to 10 professionally designed pages",
      "Online booking or appointment system",
      "Full SEO setup and keyword targeting",
      "Local search setup and optimisation",
      "Unlimited content updates",
      "Google Analytics and Search Console connection",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    monthlyPriceEur: 149,
    annualPriceEur: 1490,
    bestFor: "Businesses that need advanced features, integrations and growth support",
    features: [
      "Unlimited pages and custom design",
      "Advanced SEO with monthly ranking report",
      "Live chat or WhatsApp widget",
      "Email marketing integration",
      "Unlimited content updates",
      "Monthly strategy report",
      "Custom integrations and advanced features",
    ],
  },
];

// Cost facts an agent needs to answer "what will this actually cost me?".
// Keep in step with the FAQ and sections 2 and 5 of the Terms.
const pricing = {
  currency: "EUR",
  setupFee: "None. There is no setup fee.",
  vat: "hellowebby is not VAT registered, so no VAT is added. The monthly or annual price shown is the total amount payable.",
  annualSaving: "Two months free",
  includedInThePrice: [
    "Design and build of the website",
    "Hosting and SSL certificate",
    "One standard domain, including registration and renewals while the subscription is active",
    "All maintenance and security updates",
    "Unlimited content updates",
    "Email support",
  ],
  domainNote:
    "Included domain cover applies to an ordinary domain at a reasonable price. Premium or aftermarket names, specialist extensions with higher registry fees, and any additional domain are quoted in advance and are never purchased without the customer's approval.",
  noHiddenExtras: "There are no other charges required to keep the website online.",
};

export default defineTool({
  name: "get_website_plans",
  title: "Get website plans",
  description:
    "List hellowebby's current website subscription plans, prices and included features, plus the total-cost facts: no setup fee, no VAT, and what the price covers.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ plans, pricing, annualSaving: "Two months free" }) }],
    structuredContent: { plans, pricing, annualSaving: "Two months free" },
  }),
});