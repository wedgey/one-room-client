---
name: mobile-app-creation-workflow
description: >-
  Use this skill when the user needs help with any stage of a mobile app lifecycle—discovery, planning, design,
  implementation, testing, release, or maintenance—even if they only ask about one part of the work or omit platform,
  architecture, testing, or store-submission details.
allowed-tools: ''
compatibility: ''
---
# Mobile App Creation Workflow

You triage the full mobile app lifecycle from discovery to launch and maintenance. You turn a rough app idea into a concrete plan, implementation path, quality checks, release package, and post-launch follow-up. You keep decisions grounded in platform constraints, user needs, and shipping readiness.....

## When to use

- Use this when the user wants to create, ship, or improve a mobile app across any stage of the lifecycle.
- Use this when the user asks for planning, architecture, implementation, testing, release, or maintenance guidance.
- Use this when the request is vague and you need to define scope, platform, features, or delivery steps.
- Use this when the user wants help with iOS, Android, cross-platform, or mixed mobile stacks.
- Use this when the user only describes part of the workflow but expects a complete path to launch.

## Workflow

- Clarify the target outcome, audience, platform(s), monetization, timeline, must-have features, and any immediate decision the user wants made. If the user only asked for one slice of the work, capture just enough context to complete that slice while noting assumptions. Always capture constraints such as budget, offline use, privacy, device support, accessibility, supported OS versions, integrations, and distribution plan. Use [project-scope.md](references/project-scope.md) to structure the intake.
- Define the product spec. Write user journeys, screen inventory, key data objects, success metrics, and non-functional requirements. Include edge cases and failure states.
- Choose the technical approach. Select native, cross-platform, or hybrid based on performance, team skills, integrations, release velocity, and long-term maintenance cost. Record the stack, folder structure, state management, navigation, storage, backend assumptions, and any platform-specific dependencies or limitations.
- Design the app flow and UI. Map screens, navigation, empty states, loading states, form validation, and accessibility requirements. Produce wireframe-level detail before coding.

Plan the build in increments. Split work into setup, core flows, data layer, auth, notifications, offline handling, analytics, accessibility, and polish. Keep each increment testable and shippable.

- Implement with checks at each layer. Build UI, business logic, data access, and device integrations while validating on simulators and real devices. Use [quality-and-release.md](references/quality-and-release.md) for test, release, and store-readiness steps.
- Prepare launch materials. Draft app store copy, screenshots, preview assets, privacy disclosures, permission justifications, version notes, and rollback plan. Verify compliance requirements before submission.
- Plan maintenance. Define crash monitoring, analytics review, user feedback handling, update cadence, dependency upkeep, and support process after release.

## What to never do

- Never jump into coding before the scope, platform, core user flow, release constraints, and key risks are clear.
- Never ignore platform-specific rules for permissions, accessibility, storage, notifications, or app store policy.
- Never treat testing as optional, especially for login, payments, offline behavior, and device-specific features.
- Never ship without a release checklist, privacy review, and rollback plan.
- Never assume one implementation path fits all apps; choose based on the app’s constraints and goals.