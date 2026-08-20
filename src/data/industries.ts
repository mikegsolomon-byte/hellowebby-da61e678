// SEO content for each business vertical shown in the "Built for Irish small
// businesses like yours" section. Each entry powers a page at /industries/:slug.
// Keep claims aligned with what hellowebby actually offers (subscription website
// from €49/month, hosting/domain/SSL, on-page SEO, contact & enquiry forms,
// unlimited content updates, Irish support). No e-commerce / online-shop claims.

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryBenefit {
  title: string;
  body: string;
}

export interface Industry {
  slug: string;
  name: string; // matches the WhoIsThisFor card label
  emoji: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  benefits: IndustryBenefit[];
  included: string[];
  localSeo: string;
  faqs: IndustryFAQ[];
}

export const industries: Industry[] = [
  {
    slug: "plumbers",
    name: "Plumbers",
    emoji: "🔧",
    metaTitle: "Websites for Plumbers in Ireland | hellowebby",
    metaDescription:
      "A professional website for your plumbing business from €49/month. We design, build, host and update it — so more local customers find you and get in touch. Live within a few days.",
    h1: "Websites for plumbers in Ireland",
    intro:
      "When a pipe bursts, people reach for their phone and search — and they call the plumber who looks trustworthy and turns up first in Google. hellowebby builds you a fast, professional plumbing website that shows your services, your areas covered and a clear way to get in touch, all on a simple monthly subscription with no big upfront bill.",
    benefits: [
      {
        title: "Get found for emergency callouts",
        body: "Most plumbing jobs start with a Google search like “emergency plumber near me”. We set your site up with proper on-page SEO so you show up for the towns and services you actually cover.",
      },
      {
        title: "Turn visitors into booked jobs",
        body: "A prominent phone number and a simple enquiry form mean a homeowner in a panic can reach you in seconds — the details land straight in your inbox.",
      },
      {
        title: "Look established and trustworthy",
        body: "A tidy, modern site with your services, reviews and areas covered reassures people you’re a real, local business worth calling.",
      },
    ],
    included: [
      "Click-to-call phone number on every page",
      "Enquiry form that sends jobs straight to your inbox",
      "Services and areas-covered pages set up for local SEO",
      "Fast, mobile-friendly design that works on any phone",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — email us to add a service or town",
    ],
    localSeo:
      "We optimise every page for the places you work — “plumber in Galway”, “boiler repair Roscommon”, and so on — with proper page titles, headings and meta descriptions, plus help getting your Google Business Profile pointing at your new site. That’s how local customers find you instead of the plumber two towns over.",
    faqs: [
      {
        q: "Do I need to write all the content myself?",
        a: "No. You answer a short 10-minute form about your services and areas, and we write the website copy for you. You can supply your own photos or we’ll use quality stock images.",
      },
      {
        q: "Can customers request a quote through the site?",
        a: "Yes — every plan includes a contact and enquiry form. Requests come straight to your email so you can call the customer back quickly.",
      },
      {
        q: "How quickly can my plumbing website go live?",
        a: "Most sites are live within a few days of you sending your details. Hosting, domain and SSL are all handled for you.",
      },
    ],
  },
  {
    slug: "salons-and-barbers",
    name: "Salons & Barbers",
    emoji: "✂️",
    metaTitle: "Websites for Salons & Barbers in Ireland | hellowebby",
    metaDescription:
      "A beautiful website for your salon or barbershop from €49/month, with online booking, your services and prices, and photos of your work. We build, host and update it. Live within a few days.",
    h1: "Websites for salons & barbers in Ireland",
    intro:
      "Your work is visual, and your website should be too. hellowebby builds salons and barbershops a stylish, mobile-first site that shows off your look, lists your services and prices, and lets clients book in — all on a simple monthly subscription with no upfront cost.",
    benefits: [
      {
        title: "Let clients book around the clock",
        body: "Add an online booking or appointment link so people can reserve a slot at 11pm on a Sunday — not just when the phone is answered.",
      },
      {
        title: "Show off your style",
        body: "A gallery of your cuts, colours and treatments does the selling for you and sets expectations before a client sits in the chair.",
      },
      {
        title: "Fill quiet days",
        body: "Publish offers and new services yourself just by emailing us — we make the change, usually within a day or two, at no extra cost.",
      },
    ],
    included: [
      "Online booking / appointment link set up",
      "Services and price list, easy to keep current",
      "Photo gallery to showcase your work",
      "Mobile-friendly design that looks great on every phone",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — new prices or offers anytime",
    ],
    localSeo:
      "We set your site up to be found for searches like “barber in Athlone” or “hair salon near me”, with local page titles and help connecting your Google Business Profile — so new clients in your area discover you first.",
    faqs: [
      {
        q: "Can you connect my existing booking system?",
        a: "Yes — if you already use a booking tool, we’ll link it prominently on your site. If you don’t have one, we can point clients to a simple enquiry or call-to-book option.",
      },
      {
        q: "Can I change my prices myself?",
        a: "Just email us the new prices and we’ll update them — unlimited content updates are included on every plan, usually live within 1–2 working days.",
      },
      {
        q: "Will it look good on a phone?",
        a: "Absolutely. Most salon and barber traffic is on mobile, so every site we build is fast and designed mobile-first.",
      },
    ],
  },
  {
    slug: "cafes-and-restaurants",
    name: "Cafés & Restaurants",
    emoji: "☕",
    metaTitle: "Websites for Cafés & Restaurants in Ireland | hellowebby",
    metaDescription:
      "A website for your café or restaurant from €49/month — menu, opening hours, location and bookings, all in one tidy place. We design, host and update it. Live within a few days.",
    h1: "Websites for cafés & restaurants in Ireland",
    intro:
      "Before someone visits, they check two things: your menu and your opening hours. hellowebby builds cafés and restaurants a clean, appetising website that puts those front and centre, with your location, photos and a way to book — all on a simple monthly subscription.",
    benefits: [
      {
        title: "Answer the questions people actually ask",
        body: "Menu, opening hours, location and phone number — clearly laid out so a hungry customer decides on you in seconds.",
      },
      {
        title: "Take bookings and enquiries",
        body: "Add a reservation link or enquiry form so tables and functions get booked without a single phone call being missed.",
      },
      {
        title: "Keep specials current effortlessly",
        body: "New seasonal menu or bank-holiday hours? Email us and we’ll update it — unlimited changes are included.",
      },
    ],
    included: [
      "Menu and opening-hours pages, easy to keep updated",
      "Location, map and directions",
      "Bookings / reservations link or enquiry form",
      "Photo-led, mobile-friendly design that makes food look good",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — swap the menu anytime",
    ],
    localSeo:
      "We optimise your site for searches like “café in Sligo” or “restaurant near me”, with local page titles and help connecting your Google Business Profile — so you show up when someone nearby is deciding where to eat.",
    faqs: [
      {
        q: "Can you put our full menu online?",
        a: "Yes — we’ll lay out your menu clearly and keep it easy to update. Send us changes anytime and we’ll refresh it for you.",
      },
      {
        q: "Can people book a table through the site?",
        a: "We can add a reservation link to your booking system, or a simple enquiry form for bookings and functions — whichever suits you.",
      },
      {
        q: "How fast can we go live?",
        a: "Most sites are live within a few days of you sending your menu, hours and photos.",
      },
    ],
  },
  {
    slug: "electricians",
    name: "Electricians",
    emoji: "⚡",
    metaTitle: "Websites for Electricians in Ireland | hellowebby",
    metaDescription:
      "A professional website for your electrical business from €49/month. Services, areas covered and a clear way to get in touch — we build, host and update it. Live within a few days.",
    h1: "Websites for electricians in Ireland",
    intro:
      "Whether it’s a rewire, a fault or an EV charger install, customers want an electrician who looks qualified and is easy to reach. hellowebby builds a clean, professional website that lists your services and certifications, covers your areas, and makes getting a quote effortless — on a simple monthly subscription.",
    benefits: [
      {
        title: "Win the ‘electrician near me’ search",
        body: "We set your pages up with proper local SEO so you appear for the services and towns you cover — not just your competitors.",
      },
      {
        title: "Make quoting easy",
        body: "A click-to-call number and a quick enquiry form mean customers can send you the job details in seconds.",
      },
      {
        title: "Signal that you’re qualified and safe",
        body: "Show your certifications, insurance and reviews so homeowners and businesses feel confident booking you.",
      },
    ],
    included: [
      "Click-to-call phone number on every page",
      "Enquiry / quote-request form to your inbox",
      "Services and areas-covered pages built for local SEO",
      "Space for certifications, insurance and reviews",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — add a service anytime",
    ],
    localSeo:
      "We optimise each page for the areas you serve — “electrician in Mullingar”, “EV charger installation Westmeath” — with local titles and Google Business Profile help, so nearby customers find you first.",
    faqs: [
      {
        q: "Can I show the areas I cover?",
        a: "Yes — we build an areas-covered section and optimise it for local search so you rank in the towns you actually work in.",
      },
      {
        q: "Do you write the content for me?",
        a: "Yes. You fill in a short form about your services and we write the copy. Add your logo and photos, or we’ll use quality stock.",
      },
      {
        q: "What does it cost?",
        a: "Plans start at €49/month with a once-off €79 setup fee. That covers design, build, hosting, SSL and ongoing updates.",
      },
    ],
  },
  {
    slug: "builders-and-tradespeople",
    name: "Builders & Tradespeople",
    emoji: "👷",
    metaTitle: "Websites for Builders & Tradespeople in Ireland | hellowebby",
    metaDescription:
      "A website for your building or trades business from €49/month — showcase your projects, list your services and win more enquiries. We build, host and update it. Live within a few days.",
    h1: "Websites for builders & tradespeople in Ireland",
    intro:
      "Your best salesperson is your last job. hellowebby builds builders and tradespeople a professional website that shows off your completed projects, lists what you do, and makes it easy for people to request a quote — all on a simple monthly subscription with no big upfront bill.",
    benefits: [
      {
        title: "Let your work do the talking",
        body: "A gallery of finished projects builds instant trust with homeowners and main contractors deciding who to call.",
      },
      {
        title: "Capture quote requests",
        body: "A clear enquiry form and phone number mean project leads land in your inbox while you’re on site.",
      },
      {
        title: "Look bigger than a phone number",
        body: "A proper website makes you look established and reliable — often the difference between winning a job and being ignored.",
      },
    ],
    included: [
      "Project gallery to showcase completed work",
      "Services pages built for local SEO",
      "Quote-request enquiry form to your inbox",
      "Click-to-call number on every page",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — add new projects anytime",
    ],
    localSeo:
      "We optimise your site for searches like “builder in Roscommon” or “extension builder near me”, with local page titles and Google Business Profile help — so you get found by people planning work in your area.",
    faqs: [
      {
        q: "Can I add photos of my projects later?",
        a: "Yes — just email us the photos and a line about each job, and we’ll add them. Unlimited content updates are included.",
      },
      {
        q: "I’m rarely at a desk — is this a hassle to manage?",
        a: "No. You never touch the website. Send us any change by email and we make it, usually within 1–2 working days.",
      },
      {
        q: "How soon can it be live?",
        a: "Most sites go live within a few days of you sending your details and a few photos.",
      },
    ],
  },
  {
    slug: "accountants-and-solicitors",
    name: "Accountants & Solicitors",
    emoji: "💼",
    metaTitle: "Websites for Accountants & Solicitors in Ireland | hellowebby",
    metaDescription:
      "A credible, professional website for your accountancy or law firm from €49/month. Services, expertise and easy enquiries — we build, host and update it. Live within a few days.",
    h1: "Websites for accountants & solicitors in Ireland",
    intro:
      "In professional services, your website is your first impression — and it needs to signal expertise and trust. hellowebby builds accountants and solicitors a clean, credible website that clearly explains your services, establishes your authority, and makes it easy for the right clients to get in touch, all on a simple monthly subscription.",
    benefits: [
      {
        title: "Project authority and trust",
        body: "A polished, well-written site reassures prospective clients that you’re the safe, professional choice for their finances or legal matter.",
      },
      {
        title: "Explain your services clearly",
        body: "Dedicated pages for each service — tax, audit, conveyancing, wills — help clients self-select and reach you ready to talk.",
      },
      {
        title: "Generate qualified enquiries",
        body: "A discreet, professional enquiry form brings serious prospects straight to your inbox.",
      },
    ],
    included: [
      "Service pages that establish your expertise",
      "Professional enquiry / consultation-request form",
      "About and team pages to build credibility",
      "On-page SEO so you rank for your specialisms",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — add services or news anytime",
    ],
    localSeo:
      "We optimise your pages for searches like “accountant in Longford” or “conveyancing solicitor near me”, with local titles and Google Business Profile help — so nearby clients find your firm rather than a national directory.",
    faqs: [
      {
        q: "Can the site reflect our firm’s tone?",
        a: "Yes — we write professional, measured copy from your form answers, and you review it before it goes live so it sounds right for your practice.",
      },
      {
        q: "Is client data handled securely?",
        a: "Your site includes an SSL certificate as standard, and enquiry details are sent securely to your inbox. We can add a privacy notice tailored to your firm.",
      },
      {
        q: "What’s the ongoing commitment?",
        a: "It’s a monthly subscription from €49/month you can cancel anytime after the first month — no long lock-in.",
      },
    ],
  },
  {
    slug: "therapists-and-clinics",
    name: "Therapists & Clinics",
    emoji: "💗",
    metaTitle: "Websites for Therapists & Clinics in Ireland | hellowebby",
    metaDescription:
      "A calm, professional website for your therapy practice or clinic from €49/month, with online booking and easy enquiries. We build, host and update it. Live within a few days.",
    h1: "Websites for therapists & clinics in Ireland",
    intro:
      "People choosing a therapist or clinic are looking for reassurance as much as information. hellowebby builds a calm, professional website that explains your treatments, introduces you, and lets clients book or enquire with confidence — all on a simple monthly subscription.",
    benefits: [
      {
        title: "Put clients at ease",
        body: "Warm, clear design and copy help nervous first-time clients feel comfortable reaching out.",
      },
      {
        title: "Let people book or enquire easily",
        body: "Add an online booking link or a discreet enquiry form so appointments get made without phone tag.",
      },
      {
        title: "Explain your treatments",
        body: "Dedicated pages for each service help clients understand what you offer and arrive ready to begin.",
      },
    ],
    included: [
      "Online booking link or discreet enquiry form",
      "Treatment / service pages, clearly explained",
      "About page to build a personal connection",
      "Calm, mobile-friendly design",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — add treatments or hours anytime",
    ],
    localSeo:
      "We optimise your site for searches like “physiotherapy in Carlow” or “counsellor near me”, with local titles and Google Business Profile help — so people seeking care in your area find you.",
    faqs: [
      {
        q: "Can clients book appointments online?",
        a: "Yes — we can add a link to your booking system, or a simple, private enquiry form if you’d prefer to arrange appointments personally.",
      },
      {
        q: "Can you keep sensitive contact details private?",
        a: "Your site uses an SSL certificate and enquiries are sent securely to your inbox. We keep forms minimal and can add a privacy notice.",
      },
      {
        q: "How long until it’s live?",
        a: "Most clinic sites are live within a few days of you sending your details.",
      },
    ],
  },
  {
    slug: "retail-and-boutiques",
    name: "Retail & Boutiques",
    emoji: "🛍️",
    metaTitle: "Websites for Retail Shops & Boutiques in Ireland | hellowebby",
    metaDescription:
      "A stylish website for your shop or boutique from €49/month — showcase your products, share your story and drive footfall. We build, host and update it. Live within a few days.",
    h1: "Websites for retail shops & boutiques in Ireland",
    intro:
      "A great shop deserves a great shopfront online. hellowebby builds retailers and boutiques a stylish website that showcases your products, tells your story and gives people every reason to visit — with your location, opening hours and a way to get in touch, all on a simple monthly subscription.",
    benefits: [
      {
        title: "Drive footfall to your shop",
        body: "Show your latest products, opening hours and location so browsers online become customers in store.",
      },
      {
        title: "Tell your brand story",
        body: "A boutique is about personality. We give you the space to share what makes your shop special.",
      },
      {
        title: "Make it easy to get in touch",
        body: "An enquiry form and clear contact details let customers ask about stock, sizes or reserving an item.",
      },
    ],
    included: [
      "Product showcase / lookbook pages",
      "Opening hours, location and directions",
      "Enquiry form for stock and reservation questions",
      "Stylish, mobile-friendly design",
      "Hosting, domain connection and SSL certificate handled",
      "Unlimited content updates — refresh products anytime",
    ],
    localSeo:
      "We optimise your site for searches like “boutique in Kilkenny” or “gift shop near me”, with local titles and Google Business Profile help — so nearby shoppers discover you and drop in.",
    faqs: [
      {
        q: "Is this an online shop?",
        a: "These sites are designed to showcase your products and drive people into your shop, with enquiries and reservations by form — not full online checkout. If your needs change, talk to us about what’s possible.",
      },
      {
        q: "Can I update my products myself?",
        a: "Just email us new products or photos and we’ll refresh the site — unlimited content updates are included, usually live within 1–2 working days.",
      },
      {
        q: "How quickly can it go live?",
        a: "Most shop sites are live within a few days of you sending your photos and details.",
      },
    ],
  },
];

export const getIndustry = (slug?: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
