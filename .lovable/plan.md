## Visual Refresh Plan for hellowebby

### Goal
Transform the current generic, white-background landing page into a bold, premium dark-mode experience that feels like a serious web design agency.

### 3 Design Directions

Choose one of these aesthetics for the full site:

1. **Deep Aurora Tech** — Deep charcoal background with large, soft indigo/purple aurora glows, Plus Jakarta Sans font, frosted glass navigation, and a pulsing "new feature" badge.
2. **Dark Kinetic Aura** — Near-black background with kinetic ambient glows, Bricolage Grotesque display font paired with Inter body text, oversized tight-tracking headlines, and subtle social proof bar.
3. **Modern Dark Tech** — Very dark navy/black background with abstract blurred gradient orbs, Plus Jakarta Sans font, gradient icon badges, and a trusted-by logo strip.

**Recommended: Dark Kinetic Aura** — it delivers the highest impact with distinctive typography and a professional, editorial feel.

### What Will Change

- **Global theme**: Switch from light mode to a cohesive dark palette (near-black background, high-contrast text, vibrant indigo/violet accents).
- **Typography**: Introduce a strong display font (Bricolage Grotesque) for headlines to break away from generic system fonts.
- **Hero**: Add animated ambient gradient glows behind the headline, a subtle noise texture overlay, and a frosted-glass navigation bar.
- **Cards / Sections**: Replace flat white cards with subtle glassmorphism or dark elevated surfaces with refined borders.
- **Buttons**: Upgrade to rounded, shadow-casting primary buttons with hover lift effects; secondary buttons get glass borders.
- **Pricing**: Dark-themed cards with a highlighted "Most Popular" glow instead of a flat badge.
- **Animations**: Add gentle floating/pulsing orbs in the hero, smooth scroll behavior preserved.

### Files to Modify
- `src/index.css` — new dark color tokens, gradient utilities, font imports
- `tailwind.config.ts` — extend theme with new fonts and colors if needed
- `src/components/Hero.tsx` — layout, background effects, typography
- `src/components/Navigation.tsx` — glass effect, dark styling
- `src/components/Pricing.tsx` — dark cards, glowing highlight
- `src/components/SmartWebsiteFeatures.tsx` — dark cards, icon gradients
- `src/components/WhatYouGet.tsx` — dark section styling
- `index.html` — Google Fonts preconnect for Bricolage Grotesque + Inter

### Next Step
Reply with your chosen direction (1, 2, or 3) or approve the recommended Dark Kinetic Aura and I will implement the full refresh.