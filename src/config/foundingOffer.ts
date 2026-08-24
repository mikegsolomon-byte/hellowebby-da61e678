// Single source of truth for the founding-customer offer.
//
// TO END THE OFFER: set FOUNDING_OFFER to false. Pricing, checkout, How It
// Works, the FAQ and the Terms billing clause all read from here, so flipping
// this one flag reverts the whole site to the standard once-off setup fee.
//
// FRAMING: this is an INTRODUCTORY founding rate, not a discount. Never present
// it as a reduction from the standard fee — no "was €79", no strikethrough.

export const FOUNDING_OFFER = true;

/** Number of founding spots offered at the introductory rate. */
export const FOUNDING_SPOTS = 15;

/** The standard once-off setup fee that applies once the offer ends. */
export const STANDARD_SETUP_FEE = 79;

/** What a new customer actually pays up front today. */
export const SETUP_FEE = FOUNDING_OFFER ? 0 : STANDARD_SETUP_FEE;

/** Monthly price of the Growth plan, used for the first-year comparison. */
const GROWTH_MONTHLY = 89;

/** First-year cost on the Growth plan, including whatever setup fee applies. */
export const GROWTH_FIRST_YEAR = SETUP_FEE + GROWTH_MONTHLY * 12;

/** Breakdown shown beside the first-year figure. */
export const GROWTH_FIRST_YEAR_BREAKDOWN = FOUNDING_OFFER
  ? `€${GROWTH_MONTHLY} × 12`
  : `€${STANDARD_SETUP_FEE} setup + €${GROWTH_MONTHLY} × 12`;

export const setupCopy = {
  /** Badge above the plan cards. */
  pricingBadge: FOUNDING_OFFER
    ? `Founding offer: €0 setup fee for our first ${FOUNDING_SPOTS} customers. After that, the standard €${STANDARD_SETUP_FEE} setup applies.`
    : `€${STANDARD_SETUP_FEE} once-off setup — covers your design consultation and full build. Agencies charge €2,000+ for this.`,

  /** Small line under the price on each pricing card. */
  pricingCard: FOUNDING_OFFER
    ? "€0 setup — founding offer"
    : `+ €${STANDARD_SETUP_FEE} once-off setup fee`,

  /** Subtitle under the checkout page heading. */
  checkoutSubtitle: FOUNDING_OFFER
    ? "€0 setup for founding customers, then your monthly plan — cancel anytime."
    : "One-time setup, then your monthly plan — cancel anytime.",

  /** Label for the setup row in the checkout order summary. */
  checkoutSummaryLabel: FOUNDING_OFFER ? "One-time setup (founding offer)" : "One-time setup",

  /** Step 3 of How It Works. */
  howItWorksStep3: FOUNDING_OFFER
    ? "Pick your plan and go live — €0 setup as a founding customer. Your finished site is live within a few days. Don't love it? Walk away — you were never charged."
    : `Pay the €${STANDARD_SETUP_FEE} setup and pick your plan. Your finished site is live within a few days. Don't love it? Walk away — you were never charged.`,
};
