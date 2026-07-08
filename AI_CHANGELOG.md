# AI Changelog

This document tracks all changes made by the AI to the Edugenzi project.

## [2026-07-08]

### Added
- **Icons for "Mengapa Edugenzi" Section:** Replaced the generic black circle in `src/components/sections/ValueProps.tsx` with appropriate inline SVG icons for each value proposition (Users, Folder, Book Open, Sparkles, and Monitor). This was done to make the UI more modern and descriptive without adding heavy external icon libraries.
- **Redesigned "Pilihan Program" Cards:** Updated `src/components/sections/ProgramsShowcase.tsx` to use a modern card layout. Added a dedicated media header section at the top of each card (currently using placeholder images) and reorganized the body to display the title, description, pill-shaped tags for highlights, and a footer link.

### Resolved Questions
- **Favicon Location:** Advised that the logo favicon should be placed in the `src/app` directory (as `favicon.ico`, `icon.png`, or `icon.svg`), which is the standard convention for Next.js App Router projects.
