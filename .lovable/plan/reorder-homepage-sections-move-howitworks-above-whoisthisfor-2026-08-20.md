# Reorder homepage sections: move HowItWorks above WhoIsThisFor

## Goal
Move the "Up and running in 3 simple steps" (HowItWorks) section up the homepage so it appears immediately above the "Built for Irish small businesses like yours" (WhoIsThisFor) section.

## Change
Update `src/pages/Index.tsx` to render the sections in this order:

1. Navigation
2. Hero
3. HowItWorks
4. WhoIsThisFor
5. WhatYouGet
6. Pricing
7. RecentWork
8. FAQ
9. NewsletterCTA
10. Footer
11. StickyMobileCTA

This is a single reordering change — no content, styling, or imports are modified.
