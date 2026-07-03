# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project

This repository contains the Edugenzi website.

The primary goals are:

- modern
- maintainable
- scalable
- readable
- production-ready

Always prioritize code quality over writing code quickly.

---

# Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint

---

# General Rules

Always understand the existing implementation before writing code.

Never rewrite code unless necessary.

Always preserve the current architecture.

Reuse existing code whenever possible.

Avoid creating duplicate utilities.

Never introduce unnecessary complexity.

Keep solutions simple.

---

# Components

Prefer Server Components.

Only use Client Components when required.

Keep components small and reusable.

One responsibility per component.

Extract repeated UI into reusable components.

---

# Styling

Use Tailwind CSS only.

Do not create inline styles.

Reuse existing spacing.

Reuse existing typography.

Reuse existing colors.

Keep responsive behavior consistent.

---

# TypeScript

Never use any.

Prefer explicit interfaces.

Prefer reusable types.

Use strict typing.

Avoid unnecessary type assertions.

---

# Data Fetching

Prefer server-side fetching.

Use the native fetch API.

Use Next.js caching whenever appropriate.

Avoid unnecessary client-side requests.

---

# File Organization

Follow the existing folder structure.

Place files near related features.

Avoid creating unnecessary folders.

---

# Dependencies

Do not install new packages unless absolutely necessary.

Before adding a dependency:

- explain why it is needed
- explain why existing libraries cannot solve the problem

---

# Performance

Prefer server rendering.

Avoid unnecessary re-renders.

Optimize images.

Keep bundle size small.

Avoid duplicate logic.

---

# Accessibility

Use semantic HTML.

Use proper labels.

Support keyboard navigation.

Use alt text for images.

---

# Before Writing Code

Always explain:

- implementation plan
- files that will change
- why those files need changes

Wait for approval before modifying code.

---

# Before Finishing

Verify:

- TypeScript has no errors
- ESLint passes
- Responsive layout works
- Existing features remain functional
- No duplicated code exists

Only then consider the implementation complete.
