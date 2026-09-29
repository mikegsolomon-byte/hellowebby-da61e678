# Architecture decisions

- Agent integrations use the generated `@lovable.dev/mcp-js` server with Lovable Cloud OAuth, so every tool call has a verified user identity and respects row-level access rules.