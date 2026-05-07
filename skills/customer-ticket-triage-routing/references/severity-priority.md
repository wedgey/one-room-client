# Severity–Priority matrix

Severity describes customer impact. Priority orders the work in queues. Start with severity, then adjust priority for context (e.g., VIP, deadlines).

Severity levels

- P1 Critical: Service down, security incident, or data loss. No workaround. Many customers or a key enterprise blocked. Examples: All logins failing; API 5xx across regions; leaked credentials.
- P2 High: Major feature broken or severe degradation. Workaround exists but painful. Multiple users/tenants affected. Examples: Payments failing for some customers; webhooks delayed hours; SSO failing for several tenants.
- P3 Normal: Functional bug or moderate degradation. Limited scope or easy workaround. Single tenant or subset. Examples: One customer’s export job stuck; UI control broken in specific browser.
- P4 Low: Cosmetic issue, how-to, or general question. No business impact. Examples: Spacing glitch; request for documentation.

Priority guidance

- Start with Priority = Severity. Raise priority for: VIP/renewal risk, regulatory deadlines, blocking launches, recent regressions.
- Lower priority for: obsolete versions, clear low impact, customer paused.

Suggested SLA targets (adjust to policy)

- P1: First response ≤ 15 min; internal page immediately; customer updates ≤ 60 min.
- P2: First response ≤ 1 hour; updates ≤ 4 hours.
- P3: First response ≤ 1 business day; updates ≤ 3 business days.
- P4: First response ≤ 2 business days; updates as material changes occur.

Escalation triggers

- Any hint of security/privacy → engage Security on-call.
- Data loss/corruption → engage Incident Manager and start an incident.
- Multiple similar reports in short time → create/associate with an incident, consider status page.