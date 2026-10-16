# Architecture decisions

- Agent integrations use the generated `@lovable.dev/mcp-js` server with Lovable Cloud OAuth, so every tool call has a verified user identity and respects row-level access rules.
- Checkout uses a shared, versioned consent validator on the client and payment function and stores server-timestamped acceptance on Stripe sessions and subscriptions plus an admin-only `terms_acceptances` audit table, so purchases retain the terms version agreed to; bump the version whenever the terms change.