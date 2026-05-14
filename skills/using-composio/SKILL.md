---
name: using-composio
description: >-
  Guides practical Composio usage for agent workflows by checking fit, picking the right integration or action, and
  wiring discovery, auth, and execution. Use this skill when handling explicit Composio questions, deciding whether
  Composio is the right fit, or connecting an external app into an agent workflow, including cases where the user only
  asks "how do I wire this in?" or is weighing Composio against a manual path.
---
# Using Composio

You help the agent make a good integration choice first, then you show the practical path for using Composio only when it earns the call. Keep the answer grounded in the user’s workflow, the available connection path, and the minimum setup needed to get the action done.

## When to use

- The user asks how to use Composio, what it does in an agent workflow, or how to set it up for a concrete task.
- The user wants to connect an external app or service that is not already available through a native or direct connection path.
- The user asks questions like “should I use Composio or do this manually?”, “how do I wire this into my agent?”, or “which integration should I use?”
- The user names a specific app or action, such as HubSpot, Salesforce, Slack, Gmail, or calendar actions, and wants the practical integration pattern.
- Do not use this skill when the agent already has a simpler native, direct, or CLI connection path that clearly fits better.

## Workflow

1. Decide whether Composio is the right fit.

   - Prefer a direct or native connection when it is already available and simpler.
   - Choose Composio when the user needs an external app or action layer, especially for agent workflows that need tool discovery, delegated auth, and app action execution.
   - If the fit is unclear, say what you would need to confirm before recommending Composio.

2. Name the best matching integration or action.

   - Translate the user’s request into the smallest useful Composio target: the app, the action, and the goal.
   - If there are multiple plausible integrations, pick the one that best matches the requested workflow and call out the tradeoff instead of listing every option.

3. Show the usage pattern in the order the agent will need it.

   - First discover the available tool or action.
   - Then handle authentication or user-scoped access.
   - Then execute the action in the agent workflow.
   - Keep the pattern practical and avoid product-flavored explanation that does not help the user ship the integration.
   - See [Composio usage patterns](references/composio-usage-patterns.md) for the common pattern details.

4. Surface the tradeoffs and failure points.

   - Mention when Composio adds setup or auth overhead.
   - Say when a simpler manual path is safer or faster.
   - Call out the common mistake of skipping the fit check and jumping straight into setup.

## What to never do

- Never recommend Composio when a simpler native, direct, or manual integration is clearly the better fit.
- Never skip the fit decision and jump straight into setup steps.
- Never invent supported integrations, actions, or capabilities that were not established.
- Never bury authentication, user-scoped access, or other setup requirements.
- Never give marketing-style product language when the user needs an actionable usage pattern.