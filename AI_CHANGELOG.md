# AI Changelog

This document tracks all changes made by the AI to the Edugenzi project.

## [2026-07-08]

### Added
- **Icons for "Mengapa Edugenzi" Section:** Replaced the generic black circle in `src/components/sections/ValueProps.tsx` with appropriate inline SVG icons for each value proposition (Users, Folder, Book Open, Sparkles, and Monitor). This was done to make the UI more modern and descriptive without adding heavy external icon libraries.
- **Redesigned "Pilihan Program" Cards:** Updated `src/components/sections/ProgramsShowcase.tsx` to use a modern card layout. Added a dedicated media header section at the top of each card (currently using placeholder images) and reorganized the body to display the title, description, pill-shaped tags for highlights, and a footer link.

## [2026-07-11]

### Changed
- **Premium Glassmorphism & Abstract Theme:** Radically redesigned the UI to feature an antigravity glassmorphism aesthetic while retaining the brand's primary color palette.
  - Added `@keyframes float` and `morph` animations to `globals.css`.
  - Created `OrganicBackground.tsx`, a fixed backdrop component featuring slow-moving, blurred, fluid shapes using the brand's green, purple, and amber colors.
  - Updated `Card.tsx` to implement **Option A**: All cards are now uniform, premium frosted white glass (`bg-white/60 backdrop-blur-2xl`) to guarantee readability. The brand colors are applied to the cards purely as subtle hover states (glowing borders) and text accents (tags, links) to preserve the brand identity without muddying the background gradient.
  - Updated `Hero.tsx` to include the zero-gravity float animation and softer glass-like styling for the hero image container.

### Resolved Questions
- **Favicon Location:** Advised that the logo favicon should be placed in the `src/app` directory (as `favicon.ico`, `icon.png`, or `icon.svg`), which is the standard convention for Next.js App Router projects.
