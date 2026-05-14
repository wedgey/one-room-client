# Composio usage patterns

This reference captures the everyday pattern for using Composio in an agent workflow.

## The core model

Composio sits between the agent and external apps. The practical flow is:

1. Discover what app, tool, or action is available.
2. Check whether the user has access and whether the request needs user-scoped auth.
3. Connect the account if needed.
4. Run the chosen action in the agent workflow.

Use Composio when the task needs a third-party app connection that is not already available through a simpler native or direct path.

## What to look for in the request

Choose Composio when the user is asking for:

- An external app connection such as a CRM, email provider, calendar, messaging app, or project tool.
- An agent workflow that needs to look up, create, update, or trigger something in that external app.
- A connection path where the user has to authorize access before the action can run.
- A workflow where the agent is expected to select the right integration or action rather than hard-code a one-off manual step.

Do not force Composio when a direct API, native connector, or existing CLI path already solves the request cleanly.

## Discovery

Before you choose an action, identify the app and the user’s intent.

Ask:

- Which app is involved?
- What object or record is the user trying to find or change?
- Is the workflow read-only, or does it need write access too?
- Does the agent need one action, or a chain of actions?

The point of discovery is to avoid wiring the wrong integration just because the app name is familiar.

## Authentication and access

Composio workflows usually depend on user-scoped authorization.

Common access patterns:

- A hosted connect flow when the user needs to grant access interactively.
- OAuth when the app supports delegated sign-in.
- API keys or similar credentials when that is the app’s supported path.

Treat auth as part of the workflow, not a footnote. If the request needs user-specific data, the agent should make it clear that the account must be connected before execution.

## Execution

Once the app is connected, the agent can run the action against the chosen integration.

Keep execution simple:

- Pick the narrowest action that satisfies the request.
- Confirm the target object, account, or workspace if it matters.
- Do not expand a single request into a larger automation unless the user asked for it.

## Good usage pattern

Example request: “Connect to my HubSpot and find my most contacted lead.”

Good response pattern:

1. Confirm that HubSpot is the right external app.
2. Pick the relevant HubSpot action for searching or listing contacts.
3. Note that the account must be connected.
4. Explain that the agent will query the connected account, then return the lead with the highest contact count.

## Poor usage pattern

Example request: “Send an email through the gws CLI connection.”

That is not a good Composio fit if the CLI connection is already native and direct. A Composio setup would add unnecessary auth and routing overhead.

## Tradeoffs to mention

- Composio helps when the agent needs a clean app-connection layer.
- It adds setup and auth overhead compared with a direct connection.
- It is not the best answer when the agent already has the needed native integration.
- It works best when the user expects the agent to discover and use an external app action rather than hand-roll every call.\n