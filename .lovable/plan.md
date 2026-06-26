## hellowebby full site update plan

Work through the brief in order. Keep existing brand colors, fonts, and Sunset Glow visual style — only content, structure, and metadata change.

### 1. SEO / metadata (`index.html`)
- Canonical → `https://www.hellowebby.com/`
- `og:url` + Twitter URLs → `https://www.hellowebby.com/`
- `<title>` → `hellowebby | Professional Websites for Irish Small Businesses from €49/month`
- Meta description → new copy from brief
- Replace existing LocalBusiness JSON-LD with the new schema from the brief (url, areaServed Ireland, priceRange, currenciesAccepted, availableLanguage)

### 2. Navigation (`src/components/Navigation.tsx`)
- Replace "Get Started" CTA with **"Get My Website Started"** → scrolls to pricing/contact, primary brand color

### 3. Hero (`src/components/Hero.tsx`) — full replacement
- Pill badge: `Irish-owned · Irish support · Built in days`
- H1: `Your business deserves a proper website`
- Subhead + supporting paragraph per brief
- Two CTAs: **Get My Website Started →** (primary) and **See pricing** (ghost, smooth-scrolls to `#pricing`)
- Trust line with four ✓ items
- Drop the old 3-icon trust grid below (replaced by new trust line)

### 4. New section — `WhoIsThisFor.tsx` (rewrite)
- Heading: `Built for Irish small businesses like yours`
- 8 tiles, 4-col desktop / 2-col mobile, Lucide icons:
  Plumbers (Wrench), Salons & Barbers (Scissors), Cafés & Restaurants (Coffee), Electricians (Zap), Builders & Tradespeople (HardHat), Accountants & Solicitors (Briefcase), Therapists & Clinics (HeartPulse), Retail & Boutiques (ShoppingBag)

### 5. How it works (`src/components/HowItWorks.tsx`) — rewrite
- Heading: `Up and running in 3 simple steps`
- 3 steps (ClipboardList → Laptop → Rocket) with copy from brief
- Subtle connector line/arrow between steps on desktop

### 6. Pricing (`src/components/Pricing.tsx`) — full replacement
- Heading + subheading + setup-fee note above cards
- Three cards (Starter €49, Growth €89 featured, Pro €149), each with `+ €79 once-off setup fee` line, tagline, full feature list from brief, CTA `Get started`
- Comparison callout box below cards with the agency-vs-hellowebby copy

### 7. Testimonials — restore section
- Re-add `Testimonials.tsx` to `Index.tsx` after Pricing
- Heading: `Trusted by Irish small businesses`
- Replace existing quotes with the 3 placeholder testimonials (Sarah/Brendan/Aoife), 5-star rows, `{/* PLACEHOLDER TESTIMONIAL — replace with real */}` comments

### 8. FAQ (`src/components/FAQ.tsx`) — full replacement
- Heading: `Questions? We've got answers.`
- 8 Q&A items from brief

### 9. Footer (`src/components/Footer.tsx`)
- Logo + tagline `Professional websites for Irish small businesses. Built in days, not months.`
- Nav links: Home, Pricing, How it works, FAQ, Contact
- Trust line: `🇮🇪 Irish-owned | GDPR compliant | Irish support`
- `© 2025 hellowebby. All rights reserved.`

### 10. Global
- Replace any remaining "Get Started" / generic CTA text with "Get My Website Started" or "Get started"
- Ensure `scroll-behavior: smooth` is on (already in `index.css` — verify)
- `Index.tsx` order: Hero → WhoIsThisFor → HowItWorks → Pricing → Testimonials → WhatYouGet → WhySubscription → FAQ → NewsletterCTA → Footer
- Mobile QA pass at 375px via Playwright screenshot after build

### Out of scope
- No Stripe price changes (amounts unchanged: €49/€89/€149 + €79 setup already match)
- No email, checkout, or backend changes
- No design system / color / font changes
