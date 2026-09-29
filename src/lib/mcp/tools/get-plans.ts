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
      "Hosting, SSL certificate and domain connection",
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

export default defineTool({
  name: "get_website_plans",
  title: "Get website plans",
  description: "List hellowebby's current website subscription plans, prices and included features.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ plans, annualSaving: "Two months free" }) }],
    structuredContent: { plans, annualSaving: "Two months free" },
  }),
});