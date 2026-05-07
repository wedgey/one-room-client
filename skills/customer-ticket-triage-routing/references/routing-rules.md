# Routing rules and tags

Goal: one accountable owner per ticket, tagged for discoverability. Add watchers only when policy requires.

Tagging taxonomy
- product: core, api, billing, auth, mobile-ios, mobile-android, data-export, analytics, integrations, infra
- category: bug, incident, access, billing, question, feature-request, compliance, security
- component: service or module name (e.g., webhooks, sso, checkout, reporting)
- severity: p1–p4
- customer-tier: free, pro, enterprise, vip

Owner mapping (examples; adapt to your org)
- Billing/Payments → Finance Support
- Login/SSO/Auth → Identity Team
- API 5xx/latency/errors → Backend/Infra On-call
- Webhooks/Integrations → Integrations Team
- Mobile crashes → Mobile (iOS/Android) Team
- Data export/reporting → Data Platform
- Compliance/Privacy → Legal/Trust
- Security concern/breach → Security On-call

Routing rules
- Choose exactly one primary owner/queue. If cross-team, select the team that will take the first action and add the other as watcher.
- P1/P2 incidents: route to the on-call or Incident Commander per schedule; start incident process if criteria met.
- If unclear owner: pick the most likely team based on component; add a clear question in the handoff to confirm ownership.
- Duplicates: link to the parent incident/ticket and set status to “Merged into <ID>”.

Handoff package (include)
- Title; Summary; Key facts; Severity/Priority; Tags; What’s missing; Customer impact; Next action requested; Links (logs, screenshots, related IDs).

Post-routing
- Set status to “Queued: <Team>”.
- Confirm receipt for P1/P2 within the SLA window. If no acknowledgment, page the fallback owner.
- Update customer with owner/team and next expected update time.