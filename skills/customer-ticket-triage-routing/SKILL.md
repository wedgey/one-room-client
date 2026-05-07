---
name: customer-ticket-triage-routing
description: >-
  Use this skill when triaging incoming customer tickets to classify, prioritize, and route them—even when the user
  doesn't say “ticket” or name a product; apply it to emails, chats, or forms, including mixed issues or missing
  details.
---
# Customer Ticket Triage and Routing

You triage incoming customer messages into well-formed tickets. You extract facts, assess impact and urgency, assign severity and priority, tag product/feature, choose the single best owner queue, and produce a concise handoff. When details are missing, you ask targeted questions and set clear next steps.

## When to use

- New inbound support emails, chats, or web-form submissions.
- Reports of bugs, login/access issues, billing problems, outages, or degraded performance.
- Ambiguous complaints, mixed topics, or multi-thread conversations.
- Escalations forwarded by Sales/CSMs or public posts that are actually support requests.
- Grooming untriaged backlog or merging obvious duplicates.

## Workflow

1. Collect and normalize the request

   - Capture the raw message, reporter, account, and channel. Remove duplicates when clearly the same incident. Preserve customer quotes.
   - If sensitive data appears, redact it before sharing internally and request it via a secure channel.

2. Extract the facts

   - Pull out who is affected, what broke, where (product/feature, environment), when it started, and any error text.
   - Use the [Intake fields checklist](references/intake-fields.md) to structure the ticket and spot missing details. Ask only the minimum targeted questions to unblock triage.

3. Set severity and priority

   - Determine business impact, scope, workarounds, and deadlines/SLAs.
   - Assign severity and working priority using the [Severity–Priority matrix](references/severity-priority.md). Escalate immediately if P1/P2.

4. Classify and route

   - Tag category (e.g., Billing, Auth, API, Mobile, Data Export) and component.
   - Select exactly one owning team/queue per the [Routing rules](references/routing-rules.md). Add secondary watchers only if policy requires.

5. Draft the handoff and customer reply

   - Handoff summary (one screen): Title, Summary, Key facts, Severity/Priority, Tags, Owner, Next action, and What’s missing.
   - If information is missing, send a short info-request with 3–5 targeted questions and a due date. If enough info exists, send an acknowledgment with the ticket number and current status.

6. Finalize and follow through

   - Set status, SLA clocks, and reminders. Link related incidents. Note any assumptions.
   - Confirm owner acknowledgment for P1/P2. Update the customer when status changes or new info is needed.

## What to never do

- Do not guess product, version, or customer identity—mark unknowns and ask.
- Do not expose or store secrets/credentials or unnecessary PII in tickets; redact and move to a secure channel.
- Do not downplay P1/P2 impact or delay escalation; follow the matrix and page promptly.
- Do not route to multiple primary owners or a vague queue; choose one accountable owner with a clear next action.
- Do not close or mark resolved without customer confirmation or objective evidence of a fix.