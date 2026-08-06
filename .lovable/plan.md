# Update "go live" timeframe to one week

## Goal
Change the stated website launch timeframe from "3–5 working days" to "one week" wherever it appears, so the messaging matches the selected FAQ accordion item and the How It Works step.

## Changes
1. **FAQ answer** in `src/components/FAQ.tsx` (line ~19)
   - Old: "Most websites are live within 3–5 working days of receiving your content..."
   - New: "Most websites are live within one week of receiving your content..."

2. **How It Works step 2** in `src/components/HowItWorks.tsx` (line ~15)
   - Old: "Our team designs and builds your website in 3–5 working days..."
   - New: "Our team designs and builds your website in one week..."

## Verification
- Run a project search to confirm no other "3–5 working days" / "3-5 working days" references remain.
- Run the build/typecheck to ensure no regressions.
