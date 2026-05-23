# Hidden Checkout Link with Stripe

A private, unlisted page at **`/secure-checkout`** that you share with prospects. They pick a plan, click pay, and Stripe charges €79 setup + first month today, then the monthly fee automatically every month after.

## What gets built

### 1. Stripe setup (Lovable's built-in payments)
Enable Lovable's seamless Stripe integration (no Stripe account or API key needed — test environment is provisioned immediately).

Products & prices created in Stripe (all EUR):
- **Setup Fee** — €79 one-time
- **Starter** — €49 / month recurring
- **Growth** — €89 / month recurring
- **Pro** — €149 / month recurring

Stripe handles "setup + first month on bill 1, then monthly thereafter" natively by attaching the one-time price alongside the recurring price on a single Checkout Session.

### 2. Hidden page: `/secure-checkout`
- Not linked from nav, footer, or sitemap
- `<meta name="robots" content="noindex,nofollow">` so it never gets indexed
- Plan selector (Starter / Growth / Pro radio cards), Growth pre-selected
- Live summary box:
  - One-time setup: €79
  - First month ({plan}): €XX
  - **Total today: €XX**
  - Then €XX/month, cancel anytime
- Email field (pre-fills Stripe Checkout)
- "Continue to secure payment" button → opens Stripe Checkout in a new tab
- Supports `?plan=pro` query param for pre-selected share links

### 3. Edge function: `create-checkout`
Creates a Stripe Checkout Session in `subscription` mode with two line items: the chosen monthly price + the €79 setup price. Returns the Checkout URL.

### 4. Result pages
- `/checkout/success` — confirmation with next steps
- `/checkout/cancelled` — link back to `/secure-checkout`

## Billing behavior
- **Today:** €79 setup + first month, single charge
- **30 days later:** monthly fee only, automatic
- **Every month after:** monthly fee, automatic
- Cancellation via Stripe customer portal (can add a "Manage billing" link later)

## Files
- `src/pages/SecureCheckout.tsx`
- `src/pages/CheckoutSuccess.tsx`
- `src/pages/CheckoutCancelled.tsx`
- `supabase/functions/create-checkout/index.ts`
- Route entries in `src/App.tsx` (above the catch-all)

## Test first, then go live
Lovable's Stripe starts in test mode — you can run a full purchase with card `4242 4242 4242 4242` end-to-end. When happy, flip to live mode.
