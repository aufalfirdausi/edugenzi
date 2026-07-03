# PROJECT_CONTEXT.md — Edugenzi

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5 (strict mode) |
| UI Library | React 19.2.4 |
| Styling | Tailwind CSS v4 (with `@tailwindcss/postcss`) |
| Fonts | `next/font/google` — Fraunces (display), Poppins (body) |
| Linting | ESLint 9 + `eslint-config-next` (core-web-vitals + TypeScript) |
| Package Mgr | npm (with `overrides` pinning PostCSS to ^8.5.10) |

All components are **React Server Components** by default (no `'use client'` directives anywhere). The app has **zero JavaScript runtime dependencies** beyond `react` and `react-dom`.

## 2. Folder Structure

```
src/
  app/                    # Next.js App Router pages & layouts
    globals.css           # Tailwind v4 import + CSS custom properties
    layout.tsx            # Root layout (fonts, header, footer, skip link)
    page.tsx              # Landing page (composes 12 sections)
    not-found.tsx         # 404 page
    robots.ts             # Dynamic robots.txt
    sitemap.ts            # Dynamic sitemap.xml (reads programs content)
    programs/
      page.tsx            # /programs listing page
      [slug]/
        page.tsx          # /programs/:slug detail page (SSG via generateStaticParams)
  components/
    ui/                   # Primitives (Button, Card, Container, SectionHeading)
    site/                 # Site chrome (Header, Footer, SkipLink)
    sections/             # Landing page sections (12 components)
  content/                # Data files (programs, projects, testimonials, FAQs)
  lib/                    # Utilities (cn, links)
public/                   # Static assets (favicon, SVG icons, hero image)
```

Totals: 3 UI primitives, 3 site chrome components, 12 section components, 4 content data files, 2 lib files, 5 page files.

## 3. Routing

All routes use the **Next.js App Router** with file-based routing:

| Route | File | Type |
|---|---|---|
| `/` | `src/app/page.tsx` | Static landing page |
| `/programs` | `src/app/programs/page.tsx` | Program listing |
| `/programs/[slug]` | `src/app/programs/[slug]/page.tsx` | Dynamic (SSG: `generateStaticParams` reads programs content) |
| 404 | `src/app/not-found.tsx` | Custom not-found page |

Navigation uses hash-anchors (e.g., `/#program`, `/#faq`) for the single-page landing sections. The `SiteHeader` nav links to `/` hash targets, not separate pages.

SEO metadata is defined in `layout.tsx` with a template `"%s | Edugenzi"`. Dynamic metadata for program detail pages is generated in `generateMetadata`.

## 4. Components

### Page-level (`src/app/`)

- **`layout.tsx`**: Root layout. Sets HTML lang to `id`, applies Poppins + Fraunces font variables, renders `<SkipLink>`, `<SiteHeader>`, `<main>`, `<SiteFooter>`. Metadata includes OpenGraph with `id_ID` locale.
- **`page.tsx`**: Landing page — composes 12 section components in order with `pb-16` wrapper.
- **`not-found.tsx`**: 404 page with `Container`, heading in Fraunces font, body text, and two CTAs (primary ButtonLink + secondary Link to /programs).
- **`robots.ts`**: Allows all crawlers, points sitemap to `https://edugenzi.com/sitemap.xml`.
- **`sitemap.ts`**: Generates URLs for `/`, `/programs`, and each program detail page from `content/programs.ts`.

### Section Components (`src/components/sections/`)

All sections follow the same pattern: exported function, no props, no client hooks. They are composed together in `page.tsx`.

1. **Hero** — Logo badge (STEAM tagline), heading "Edugenzi Belajar Asyik, Cerdas Berkembang", paragraph, WhatsApp CTA button, feature list (4 items). Includes decorative background gradients on card and radial blur circle.

2. **TrustBar** — 4-column `Card` with summary points: age range, project-based, online/offline, trial class. Uses border-based grid dividers.

3. **ValueProps** — 5 benefit cards (Instructor, Project Method, Curriculum, Creativity, Facilities) in a 2-column grid. Each card has a decorative gradient overlay and an icon placeholder.
4. **StatsBand** — Green `Card` with 4 stat tiles: age range, program count, meeting count, session duration. Gradient overlay decorations.
5. **ProgramsShowcase** — 4 program cards (from `content/programs.ts`), cycled through 4 card colors. Shows highlights, links to `/programs/:slug`. Has `scroll-mt-24` for nav anchor `#program`.
6. **ProjectsShowcase** — 4 project cards (from `content/projects.ts`) in amber color. Shows tags as pills.
7. **LearningJourney** — 4-step journey, color-cycled cards with step number in a decorative badge.
8. **InstructorCredibility** — 3 instructor profile cards, color-cycled, with role badges.
9. **ParentTestimonials** — 3 testimonial cards (from `content/testimonials.ts`), color-cycled, with quote and attribution.
10. **ConsultationCTA** — Amber CTA band with WhatsApp button + phone number display.
11. **FaqSection** — 8 FAQ items using native `<details>/<summary>` elements (no JS accordion). Color-cycled cards.
12. **FinalCtaBand** — Purple CTA band at bottom of page.

### Site Chrome (`src/components/site/`)

- **SiteHeader**: Sticky header with backdrop blur, logo (Edugenzi branding with green/yellow), nav links (Program, Journey, Proyek, Testimoni, FAQ), WhatsApp CTA button.
- **SiteFooter**: Footer with 3-column grid — brand description + CTA, program links, contact info (address, WhatsApp, Instagram).
- **SkipLink**: Accessibility skip-to-content link, hidden until focused.

## 5. Shared UI (Primitives)

All in `src/components/ui/`. These are the only reusable building blocks:

- **`Button.tsx`** — Two exports:
  - `Button`: `<button>` element with `variant` (primary/secondary/ghost) and `size` (sm/md/lg). Uses class-mapping pattern (objects `variants`, `sizes`) concatenated via `cn()`.
  - `ButtonLink`: Renders `<a>` (if `external`) or Next.js `<Link>`. Accepts same variant/size props.
  
- **`Card.tsx`** — Generic container with `color` prop selecting from 4 preset color schemes: `cream`, `purple`, `green`, `amber`. Each color overrides CSS custom properties (`--ink`, `--muted`, `--border`) inline. Rounded corners with `var(--radius)`, ring border, shadow.

- **`Container.tsx`** — Max-width wrapper (`max-w-6xl`), responsive horizontal padding. Accepts `as` prop to render as any element.

- **`SectionHeading.tsx`** — Composes eyebrow badge (purple chip with dot), title (Fraunces font), and description. Supports `align` (left/center) and `eyebrow` optionality.

## 6. Utilities

**`src/lib/cn.ts`**: Minimal class-name joiner — filters falsy values and joins with space. **Not** `clsx` or `tailwind-merge`; no conflict resolution.

**`src/lib/links.ts`**: Centralized external links object — WhatsApp consultation URL (with pre-filled message), WhatsApp number display, Instagram URL. Exported as `const` so all CTAs reference the same source of truth.

## 7. Custom Hooks

**None.** The entire application uses zero custom hooks. There is no client-side interactivity beyond native HTML elements (`<details>` for FAQ).

## 8. Types

Types are co-located with their data files:

- `src/content/programs.ts` — Exports `Program` type (slug union, title, tagline, description, highlights, outcomes, whoFor, projectIdeas) and `programs` array + `programBySlug` lookup.
- `src/content/projects.ts` — Exports `ProjectItem` type (title, program, description, tags).
- `src/content/testimonials.ts` — Exports `Testimonial` type (name, relation, quote).
- `src/content/faqs.ts` — Exports `FaqItem` type (q, a).

No shared types directory; types are minimal and local to their domain.

## 9. Services

**None.** This is a purely static marketing site — no API calls, no external service integrations, no data fetching from external sources. All content is compiled at build time from TypeScript data files.

## 10. Data Flow

```
content/*.ts (data)  →  sections/*.tsx (render)  →  app/page.tsx (compose)
                     →  app/programs/[slug]/page.tsx (generateStaticParams + render)
```

Data is **imported at build time**. No runtime data fetching. The content layer is the only source of truth:
- `ProgramsShowcase` and `/programs/[slug]` both read from `content/programs.ts`
- `ProjectsShowcase` reads from `content/projects.ts`
- `ParentTestimonials` reads from `content/testimonials.ts`
- `FaqSection` reads from `content/faqs.ts`

All state is zero — every section is a pure render function of its imported data.

## 11. Styling System

**Tailwind CSS v4** with `@import "tailwindcss"` (v4's new CSS-first configuration). No `tailwind.config.js`.

**CSS Custom Properties** in `:root`:
- Brand colors: `--brand` (green #679d41), `--brand-2` (purple #4f1964), `--brand-3` (amber #ffb000)
- Neutrals: `--bg`, `--surface`, `--surface-2`, `--ink`, `--muted`, `--border`
- Effects: `--shadow-sm`, `--shadow-md`, `--ring`, `--radius` (18px)

**`@theme inline`** block maps `--color-background` and `--color-foreground` to CSS variables for Tailwind v4 theme compatibility.

Inline styles with `rgba()` and CSS variables are used extensively for decorative gradients, rings, and backgrounds. Components often use `style` props to override CSS variables (e.g., `Card` changes `--ink`/`--muted` per color variant).

Responsive breakpoints used: `sm` (640px), `md` (768px), `lg` (1024px). Grid layouts shift from single-column to 12-column grid at `lg`.

## 12. Animation Patterns

**No CSS or JS animations.** The only transitions are:
- `transition-all duration-200` on `Card` (for hover/state changes)
- `transition focus-visible:[box-shadow:var(--ring)]` on `Button`/`ButtonLink`
- `transition` on FAQ `+` icon rotation via `group-open:rotate-45`
- `hover:underline` and `hover:brightness-95` for interactive elements
- `hover:bg-[rgba(16,20,24,0.06)]` for ghost buttons

The `prefers-reduced-motion: reduce` media query disables smooth scrolling. No `framer-motion`, `gsap`, or CSS `@keyframes` are used.

## 13. API Routes

**None.** The app has no `/api/*` routes. It is a fully static site.

## 14. State Management

**None.** No React state, no context providers, no external state libraries. The app is entirely server-rendered static content. The only "interactive" element is the native `<details>` disclosure widget for FAQs.

## 15. Environment Variables

**None defined.** The `.gitignore` excludes `.env*` files. The app does not reference `process.env` anywhere. All configuration (links, content) is hardcoded in TypeScript source files.

## 16. Coding Conventions

Based on existing code:

- **Exports**: Named exports only (no default exports except pages and Next.js special files like `metadata`).
- **Typing**: Inline types/interfaces above component functions; no separate types directory. Props defined as `type` (not interface).
- **Import order**: Next.js types → React → local components (`@/`) → content → lib utils.
- **CSS**: Tailwind utility classes preferred; CSS variables for brand tokens; inline `style` for dynamic overrides.
- **React**: Server Components only; no `'use client'`; no hooks; no context.
- **Naming**: PascalCase for components, camelCase for functions/variables, `const` for data.
- **Accessibility**: Skip link, `aria-hidden` on decorative elements, semantic HTML (`<main>`, `<nav>`, `<section>`), `sr-only` patterns, `role` attributes, focus-visible styles.
- **Arrays**: `as const` assertions on static data arrays.
- **External links**: `target="_blank"` + `rel="noopener noreferrer"`.

## 17. Existing Reusable Patterns

1. **Card color cycling**: Multiple sections cycle through `["cream", "purple", "green", "amber"]` with `idx % colors.length`. This is manually repeated in `ProgramsShowcase`, `LearningJourney`, `InstructorCredibility`, `ParentTestimonials`, `FaqSection`.

2. **CTA layout pattern**: Every CTA section follows the same structure — heading/title on the left, WhatsApp `ButtonLink` + phone number on the right, inside a colored `Card` with radial gradient overlay. Repeated in `ConsultationCTA`, `FinalCtaBand`, and the bottom CTA in `[slug]/page.tsx`.

3. **Decorative gradient overlays**: Every `Card` with a color variant includes a `pointer-events-none` absolutely-positioned `div` with `radial-gradient()` backgrounds.

4. **Bullet list pattern**: Lists with small circular bullets are manually constructed as `<li>` with a `<span className="size-1.5 rounded-full bg-[var(--ink)]" aria-hidden />`.

5. **Section structure**: Every section follows: `<section className="mt-16 sm:mt-20" …>` → `<Container>` → content grid.

6. **Badge/chip pattern**: Section headings use a purple chip (`rounded-full bg-[rgba(109,40,217,0.12)]`); Hero uses a gray chip.

## 18. Design Principles

1. **Zero-runtime JavaScript**: The site works fully without JS (except `<details>` which is native HTML).
2. **Single conversion funnel**: All CTAs point to one WhatsApp number. No multi-step forms or email captures.
3. **SSG-first**: All pages are statically generated at build time. No server runtime needed.
4. **Color as semantic tokens**: Brand colors are CSS variables, and card variants override these variables inline to create theme variants without Tailwind complexity.
5. **Content as code**: Marketing copy lives in TypeScript files, not a CMS or markdown. This enables type safety and build-time validation.
6. **Mobile-first responsive**: All layouts start single-column and expand at `sm`/`md`/`lg` breakpoints.
7. **Progressive disclosure**: Landing page scrolls through value props → programs → testimonials → FAQ → CTA, guiding visitors toward conversion.

## 19. Potential Extension Points

1. **Content CMS migration**: Replace `src/content/*.ts` with a headless CMS (Sanity, Strapi) or markdown files for non-developer editing.
2. **Student project gallery**: The `ProjectsShowcase` and `[slug]/page.tsx` "project ideas" sections are explicitly documented as placeholders waiting for real student work (images/screenshots).
3. **Instructor profiles**: `InstructorCredibility` section notes it should be replaced with real instructor photos and bios.
4. **Testimonial system**: Placeholder testimonials need real data; could connect to a review platform (Google Reviews, etc.).
5. **Blog/news section**: No blog exists yet; would fit naturally under `/blog/*` route pattern.
6. **Payment/enrollment flow**: Currently all traffic funnels to WhatsApp; a self-serve enrollment flow could be added.
7. **Multi-language support**: Currently `id_ID` only; `next-intl` or similar could add English.
8. **Client interactivity**: FAQ accordion, testimonial carousel, or animated counters would need `'use client'` components.
9. **Analytics**: No analytics integration exists yet (GA4, Plausible, etc.) — would go in `layout.tsx`.
10. **API routes**: Admin endpoints for enrollment management or content updates.

## 20. Rules Future Contributors Must Follow

1. **Keep JavaScript bundle minimal** — all new components should be Server Components unless client interactivity is absolutely required. The site currently ships zero client JS. Preserve this.
2. **Content lives in `src/content/`** — do not hardcode marketing copy in components. If you need content, add a file to `src/content/` and import it.
3. **External links go in `src/lib/links.ts`** — never hardcode WhatsApp numbers, URLs, or social links in components. Centralize them.
4. **Use the 4-card color system** — when displaying collections (programs, steps, instructors, FAQs), cycle through `["cream", "purple", "green", "amber"]` with `idx % 4`. Eventually this should be extracted into a shared utility.
5. **CSS variables over Tailwind arbitrary values** — brand colors should be referenced as `var(--brand)`, not Tailwind arbitrary `bg-[#679d41]`. New colors should be added to the `:root` block in `globals.css`.
6. **No runtime dependencies without review** — the app has zero npm deps beyond React + Next.js. Adding a library (framer-motion, swiper, axios, etc.) must be justified and approved.
7. **`generateStaticParams` for dynamic routes** — any new `[param]` route must export `generateStaticParams` to enable SSG. Do not use server-side rendering or ISR unless required.
8. **Accessibility is not optional** — every decorative element must have `aria-hidden`. Interactive elements must have visible focus styles. Use semantic HTML. Add skip links for new layouts.
9. **Follow the `className` pattern for utility classes** — use `cn()` for conditional classes. Do not introduce CSS modules or styled-components unless the pattern is established across the codebase.
10. **Do not add `'use client'` for convenience** — only add it when you need browser APIs (event handlers, effects, state). If you can do it with CSS or native HTML (`<details>`, form validation), do that instead.
11. **Version alignment** — pin all dependency versions to match the existing range. The `overrides` block in `package.json` exists for a reason (PostCSS compatibility with Tailwind v4).
12. **Prefer `@/*` path alias** — always use `@/components/...` not relative imports like `../../components/...`.
