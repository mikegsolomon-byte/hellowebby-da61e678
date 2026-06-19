
## Goal
Send contact form notifications from your own branded domain (e.g. `notify@hellowebby.com`) to `hello@hellowebby.com` reliably, replacing the current Resend `onboarding@resend.dev` sender.

## Steps

1. **Configure email domain**
   - Open the email setup dialog so you can add `hellowebby.com` (Lovable will delegate a subdomain like `notify.hellowebby.com` via NS records).
   - You'll add 2 NS records at your domain registrar. DNS can take up to 72 hours but usually verifies in minutes.

2. **Provision shared email infrastructure**
   - Creates the send queue, cron worker, suppression list, and unsubscribe handling. One-time setup.

3. **Scaffold app email sending**
   - Creates the `send-transactional-email` edge function plus an unsubscribe page + handler.
   - Add a branded `contact-notification` React Email template (matches the Sunset Glow look: dark accents, gradient CTA, Syne/Plus Jakarta fonts) for the internal notification to `hello@hellowebby.com`.
   - Optional: a `contact-confirmation` template that auto-replies to the person who submitted the form.

4. **Rewire the contact form**
   - Replace the current `send-notification` (Resend) function call with `supabase.functions.invoke('send-transactional-email', ...)` using `templateName: 'contact-notification'` and an idempotency key per submission.
   - Remove or retire the old Resend-based `send-notification` function and `RESEND_API_KEY` dependency.

5. **Verify**
   - Submit a test lead from the live form, confirm delivery to `hello@hellowebby.com`, check send log for `sent` status.

## What you'll need to do
- Complete the email setup dialog (enter `hellowebby.com`, then paste the 2 NS records into your registrar).
- Confirm whether you also want an auto-reply to the submitter, or only the internal notification.

## Technical notes
- Sender: `notify@notify.hellowebby.com` (delegated subdomain, required by Lovable Emails). Display name can be "Hello Webby".
- Recipient: hardcoded `hello@hellowebby.com` in the trigger payload.
- The old `send-notification` function and Resend key can stay until the new flow is verified, then be removed.
