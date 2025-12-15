---
title: 'Get Better Results with Better Rules'
description: Learn how Agentforce Vibes Rules transform tribal knowledge into explicit guidance, helping Agentforce understand your team's coding standards, architecture preferences, and development practices for consistent, high-quality results.
pubDate: 'Dec 11 2025'
heroImage: '/agentforce-vibes/better-results-with-better-rules.png'
---

Every Salesforce org has its own personality --- a mix of Apex patterns, naming conventions, testing requirements, and security practices that long-time team members just understand. These unwritten rules shape how code is written, tested, and deployed, but they often live only in people's heads or as tribal knowledge.

Agentforce Vibes Rules  make that invisible knowledge explicit. They tell Agentforce  *how*  your team builds, so your prompts can stay focused on  *what*  to build. Think of Rules as the onboarding guide for a new team member... called Agentforce.

### What Rules Do

Rules allow developers to provide  system-level guidance and persistent context. You can think of them as a way to establish coding standards, guardrails, and preferences that Agentforce follows throughout development sessions.

We include several  out-of-the-box Rules  you can use and customize, or you can create your own to match your team's development practices.

Rules can be defined at two levels:

-   Global Rules  apply across all of your projects and act as persistent, universal instructions. These are ideal for defining default behaviors such as naming conventions, formatting preferences, or architectural guidelines that apply everywhere.
-   Project Rules  live inside the project you're working on. They're stored in the project directory and version-controlled alongside your code. This makes it easy to tailor Agentforce's behavior to the unique needs, patterns, and structures of each org or app. For example, one project might use Flow for automations, while another relies entirely on Apex.

### Defining Rules for Your Salesforce Team

If you were onboarding a new developer, what would you tell them in their first week?

-   Use Database Methods for DML Operation with exception handling
-   Use Return Early pattern
-   Use the Apex Trigger Actions Framework
-   Run database operations in user mode rather than in the default system mode

Those same principles belong in your  Agentforce Vibes Rules. They help Agentforce understand your coding standards, architecture preferences, and the patterns that keep your org maintainable.

### Be Specific

Specific prompts produce better results because they give the model less room for interpretation. The more clearly you describe intent and constraints, the more reliably Agentforce can align its output with your team's standards. Just like code, clarity in communication leads to predictability in behavior.

Vague rules create inconsistent results. For example:

> "Optimize SOQL queries where possible."

That's unclear. Should it optimize for query cost, governor limits, or CPU time?

A better rule is:

> "Optimize SOQL when execution time exceeds 200 ms or returned rows exceed 2,000."

Or instead of saying:

> "Use best practices for Apex triggers," say: "All triggers must delegate logic to a handler class, support bulk operations, and avoid direct DML or SOQL inside loops."

Clarity matters.

### Keep Rules Current

Your team's standards evolve. Maybe you're refactoring legacy Apex to use asynchronous operations, adopting custom metadata for configuration, or aligning your LWC components with the latest Lightning Design System updates. Your Rules should evolve too.

Treat them as living documentation. Review and update them regularly, just like you would deployment scripts or CI/CD pipelines --- or when you update your org's security review checklist before a new release.

### The Payoff

When Rules are clear and current,  Agentforce Vibes  behaves like a real member of your team --- one that understands your architecture, security requirements, and development style.

Rules define  *how*  your team builds. Prompts describe  *what*  to build. Together, they produce consistent, reliable, and high-quality results.