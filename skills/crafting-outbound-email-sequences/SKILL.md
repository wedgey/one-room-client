---
name: crafting-outbound-email-sequences
description: >-
  Generates personalized outbound email sequences for specific leads. Use this skill when you need a CRM-informed cold
  email sequence for one prospect or contact, including cases where the user mentions a lead, prospect, or demo-booking
  outreach request and wants compliant, non-spammy copy.
---
# Crafting outbound email sequences

You gather enough lead context to make the outreach feel specific, then turn that context into a short sequence that earns attention without sounding like mass spam. Keep the copy tied to the lead’s role, pain points, and prior touchpoints, and keep the ask focused on booking a demo.

## When to use

- The user wants a cold outbound sequence for one named lead or prospect.
- The user wants CRM-informed personalization for a sales email sequence.
- The user asks for copy aimed at booking a demo call for CoPilotAI.com.
- The user only describes the outreach goal or the target contact, even if they do not say “outbound sequence” explicitly.
- Do not use this skill for newsletters, support replies, post-meeting follow-ups, or broad marketing campaigns.

## Principles

1. Start with CRM context, because specificity comes from facts the user can trust. Pull the lead’s name, company, role/title, pain points, prior touchpoints, sender tone, and any email constraints before drafting.
2. Ask for missing details instead of filling gaps from memory. A personalized sequence built on invented context is worse than a shorter sequence with a clear request for the missing inputs.
3. Default to a 3–5 email sequence. That gives room for an opener, a value frame, a follow-up, and a demo ask without turning the output into a bloated campaign.
4. Make the positioning angle narrow. Tie the message to the lead’s situation and to a concrete benefit of CoPilotAI.com, not to generic product praise.
5. Keep compliance and deliverability in view. If a line sounds misleading, overly aggressive, or spam-like, revise it or flag it before returning the draft.

## Worked examples

**Example 1: Strong trigger**

User asks: “I need a 4-email cold outreach sequence for Sarah Chen, VP of Revenue at Northstar Logistics. Pull her recent CRM notes and make it feel personal; we want to book a demo for CoPilotAI.com.”

What you do:

- Gather CRM context on Sarah’s role, likely pain points, prior touchpoints, and sender tone.
- If the CRM is missing important details, ask the user before drafting.
- Write 4 emails with a clear opener, a tailored value proposition, and a direct but polite demo ask.

**Example 2: Near miss**

User asks: “Write a newsletter about our new feature for all customers.”

What you do:

- Do not use this skill.
- Route to a marketing or newsletter skill, because this is broadcast content, not a sequence for one specific lead.

## What to never do

- Do not invent lead facts, company details, or prior interactions that the CRM or user did not provide.
- Do not return generic, pushy, misleading, or manipulative sales copy.
- Do not ignore email compliance or deliverability concerns when a line could create risk.
- Do not turn a lead sequence request into a newsletter, support reply, or post-meeting follow-up.
- Do not ship a single email when the user asked for an outbound sequence and a short sequence would better serve the goal.