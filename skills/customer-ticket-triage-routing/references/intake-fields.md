# Intake fields checklist

Capture these fields for every incoming ticket. Mark unknown if not provided; ask concise follow-ups to fill the highest-impact gaps.

Required for every ticket
- Reporter name and contact
- Customer/org name and account/ID (if available)
- Plan/tier (e.g., Free, Pro, Enterprise) if known
- Channel and timestamp (email/chat/form; reporter timezone if available)
- Issue title (concise, action-oriented)
- Product and feature/component (e.g., API > Webhooks)
- Environment/context (OS, browser, app version, region, network)
- Steps to reproduce (numbered), expected vs actual behavior
- Error messages/codes, logs, screenshots, or screen recordings
- Impact scope (# users/accounts affected), data loss/corruption, revenue risk
- Start time, last known good time, and any recent changes/deploys
- Workarounds tried and their results
- Deadlines/SLAs and business criticality (renewal, launch, VIP)
- Related ticket/incident IDs or duplicates

If information is missing, ask these first
1) What changed right before this started? (deploys, config, data)
2) When did it start, and how widespread is it? (one user, some, all)
3) What’s the exact error or failure symptom, with a timestamp?

Formatting
- Use short bullets. Quote exact errors. Redact secrets/PII.
- Separate facts (observed) from assumptions (clearly labeled).