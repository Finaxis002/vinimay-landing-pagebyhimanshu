# AGENTS.md

Instructions for AI coding agents working on this repository.

Read these instructions before making changes. Inspect existing code and follow established project patterns. Ask questions rather than guessing when requirements are unclear.

## 1. Project Overview

- **Project:** Marketing and landing website for an accounting and billing SaaS application.
- **Audience:** Small business owners, freelancers, and accountants.
- **Primary goals:** Performance, SEO, accessibility, trust, and conversions (signups and demo bookings).
- **Out of scope:** Product dashboard, invoicing, billing logic, and internal application functionality.

## 2. Tech Stack

- Next.js App Router
- TypeScript (strict mode)
- React
- Tailwind CSS
- shadcn/ui and Radix UI
- npm
- ESLint and Prettier
- Vitest and React Testing Library
- Playwright for E2E testing
- Vercel (unless configured otherwise)

Check the installed package versions and official documentation before using version-specific APIs.

Do not change framework versions or introduce dependencies without approval.

## 3. Commands

```bash
npm install
npm dev
npm build
npm start
npm lint
npm typecheck
npm test
npm test:e2e
npm format
```

Before completing a task, run the relevant checks.

For significant changes, verify:

```bash
npm typecheck
npm lint
npm test
npm build
```

Report any checks that could not be completed.

## 4. Architecture

Expected project structure:

```text
src/
  app/
    (marketing)/
    (legal)/
    api/
    sitemap.ts
    robots.ts
  components/
    ui/
    sections/
  lib/
  content/
  styles/
public/
```

Rules:

- Keep components small and reusable.
- Use the `@/` import alias.
- Keep marketing copy, FAQs, and pricing data in `src/content/`.
- Keep reusable utilities and constants in `src/lib/`.
- Avoid unnecessary API routes and duplicated logic.
- Do not introduce a new architectural pattern without a clear reason.

## 5. Next.js & React Rules

- Use Server Components by default.
- Add `"use client"` only when interactivity, state, effects, or browser APIs require it.
- Keep client components as small as possible.
- Never expose server secrets or sensitive modules to client components.
- Prefer static rendering for marketing pages.
- Follow the installed Next.js version's API conventions.
- Use `next/link` for internal navigation.
- Use `next/image` for images.
- Use Server Actions or Route Handlers for form submissions.
- Validate all server-side inputs with Zod.
- Handle loading, errors, and not-found states appropriately.

## 6. Performance

Performance is a high priority.

Targets:

- Lighthouse Performance: 95+
- LCP: under 2.5 seconds
- INP: under 200ms
- CLS: under 0.1

Guidelines:

- Minimize client-side JavaScript.
- Avoid unnecessary dependencies and large libraries.
- Lazy-load below-the-fold and interactive components when beneficial.
- Optimize images using WebP/AVIF where appropriate.
- Use `next/font` for fonts.
- Prevent layout shifts by reserving image and component dimensions.
- Avoid unnecessary `useEffect`, `useMemo`, and `useCallback`.
- Respect `prefers-reduced-motion`.
- Use CSS transforms and opacity for animations.
- Load third-party scripts without blocking initial rendering.
- Measure bundle impact before adding heavy dependencies.

Do not sacrifice maintainability for minor performance improvements.

## 7. Security & Privacy

Security is a high priority because this is a finance-related brand.

### Secrets

- Never commit API keys, passwords, tokens, or `.env` files.
- Only expose public environment variables using `NEXT_PUBLIC_`.
- Validate required environment variables.
- Never log secrets, authentication tokens, or personal data.

### Application Security

- Treat all external input as untrusted.
- Validate server-side inputs with Zod.
- Prevent XSS, open redirects, and injection vulnerabilities.
- Avoid `dangerouslySetInnerHTML` unless content is sanitized and the use is justified.
- Configure appropriate HTTP security headers.
- Disable `X-Powered-By`.
- Rate-limit public form endpoints.
- Use CAPTCHA or equivalent bot protection where appropriate.
- Never expose stack traces or internal errors to users.

### Privacy

- Collect only necessary user information.
- Use cookie consent for non-essential tracking where legally required.
- Prefer privacy-friendly analytics.
- Use fake data in development and testing.
- Never commit real customer financial information or PII.
- Keep privacy policies and terms updated when data collection changes.

Never invent security certifications, compliance claims, or privacy guarantees.

## 8. SEO

- Add unique page titles and meta descriptions.
- Configure canonical URLs and Open Graph metadata.
- Use semantic HTML.
- Maintain one primary H1 per page.
- Use descriptive URLs and internal links.
- Add meaningful image alt text.
- Maintain accurate `sitemap.ts` and `robots.ts`.
- Add relevant JSON-LD structured data where appropriate.
- Avoid duplicate metadata and keyword stuffing.

## 9. Accessibility

Follow WCAG 2.2 AA principles.

- Ensure keyboard accessibility.
- Provide visible focus indicators.
- Use semantic HTML elements.
- Associate form inputs with labels.
- Display clear validation and error messages.
- Maintain sufficient color contrast.
- Provide accessible names for interactive elements.
- Support reduced-motion preferences.
- Ensure menus and dialogs support keyboard interaction.

## 10. Code Quality

### TypeScript

- Maintain strict TypeScript.
- Avoid `any`; prefer `unknown` with proper narrowing.
- Avoid `@ts-ignore`.
- Explicitly type component props and function parameters.
- Keep types reusable and consistent.

### React

- Use function components and hooks.
- Use stable keys for dynamic lists.
- Avoid unnecessary state and prop drilling.
- Keep components focused and reusable.
- Avoid side effects during rendering.

### Styling

- Use Tailwind CSS consistently.
- Prefer shared design tokens and CSS variables.
- Follow mobile-first responsive design.
- Avoid duplicated styling patterns.
- Use existing utility helpers such as `cn()` where available.

### General

- Use descriptive names.
- Prefer small, readable functions.
- Avoid dead code and unnecessary comments.
- Never leave debugging statements in production code.
- Comments should explain why something is necessary, not simply describe the code.

## 11. UI/UX & Conversion

- Maintain a professional, trustworthy SaaS design.
- Keep layouts clean, consistent, and responsive.
- Use clear primary CTAs such as "Start Free Trial" and "Book a Demo".
- Keep CTA labels and destinations consistent.
- Keep forms short and easy to complete.
- Provide clear loading, validation, success, and error states.
- Display testimonials, statistics, customer logos, and certifications only when verified.
- Ensure pricing and product information matches approved business information.

Test responsive layouts at:

- 320px
- 768px
- 1280px and above

## 12. Testing

- Test utilities, validators, and important business-independent UI logic.
- Use Playwright for critical user journeys.
- Mock external services in tests.
- Do not depend on real emails, production APIs, or live customer data.
- Fix regressions introduced by your changes.

## 13. Git Workflow

- Use descriptive branch names: `feat/`, `fix/`, `chore/`, `docs/`.
- Follow Conventional Commits.
- Keep changes small and focused.
- Never force-push to `main`.
- Never bypass CI or Git hooks.
- Include screenshots for significant UI changes when preparing PRs.

## 14. Agent Behavior

### Always

- Inspect relevant existing code before modifying it.
- Follow existing project conventions.
- Make the smallest change that solves the problem.
- Reuse existing components and utilities.
- Verify changes with relevant checks.
- Explain important implementation decisions.
- Report limitations and failed checks honestly.

### Never

- Refactor unrelated files.
- Install dependencies without a clear need and approval.
- Change framework versions without approval.
- Delete unfamiliar files or tests.
- Hardcode secrets or personal information.
- Fabricate pricing, testimonials, statistics, or certifications.
- Disable security protections or TypeScript/ESLint checks to hide errors.
- Use deprecated Next.js APIs.

When requirements are ambiguous, ask before making assumptions.