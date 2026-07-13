# Edugenzi Design System & Aesthetic Guidelines

This document outlines the desired look, feel, and visual identity of the Edugenzi product. It serves as a source of truth for future design and development tasks to ensure a consistent, premium user experience.

## 1. Core Concept
The overarching aesthetic is **Premium Tech, Elegant, and Calm**. The interface should feel highly modern, frictionless, and sophisticated, avoiding cluttered or overly playful "kiddie" designs despite being an educational platform for youth. It should inspire confidence, creativity, and trust.

## 2. Visual Style & Mechanics
- **Clean White Space:** Generous padding and margins. Let elements breathe.
- **Cinematic Lighting & Soft Shadows:** Avoid harsh borders. Use soft, diffused, and multi-layered shadows (e.g., `shadow-xl`, `shadow-2xl`) to create depth.
- **Glassmorphism:** Cards and containers should not be opaque. They should utilize frosted glass techniques (`backdrop-blur-xl`, semi-transparent white or tinted backgrounds, and subtle white borders) to let the background elements softly bleed through.

## 3. Motion & Interaction
- **Zero-Gravity "Anti-Gravity" Effect:** Elements (like cards and hero images) should have a subtle, continuous floating animation (`animate-float`) to make the page feel alive and weightless.
- **Smooth Ease-in-out:** All transitions (hovers, floating, opening modals) must use smooth `ease-in-out` timing functions.
- **High-End Motion Graphics:** The page should feel like an ultra-smooth 60fps cinematic loop.

## 4. Backgrounds
- **Abstract & Minimalist:** Avoid busy patterns or stock photos for backgrounds.
- **Organic Fluid Shapes:** Use soft, blurred, and morphing gradient blobs that slowly shift shape and position in the background, creating a seamless, calming loop.

## 5. Color Palette
The design relies on the core Edugenzi brand colors, but utilizes them in modern, blended ways rather than flat, solid blocks.

- **Cream (`--bg`):** `#fff7ea` - The primary canvas color.
- **Green (`--brand`):** `#679d41` - Used for primary accents and fluid background blobs.
- **Purple (`--brand-2`):** `#4f1964` - Used for deep contrast, secondary accents, and fluid background blobs.
- **Amber/Yellow (`--brand-3`):** `#ffb000` - Used for highlights, warnings, and fluid background blobs.
- **Ink (`--ink`):** `#101418` - Primary text color for high contrast and readability.
- **Muted (`--muted`):** `#4a5561` - Secondary text and subtle borders.

*Note: When applied to cards, these colors are used as very light translucent tints (e.g., 10% opacity) combined with heavy backdrop blurs.*

## 6. Iconography & Imagery
- **Icons:** Use clean, modern stroke icons (e.g., Lucide, inline SVGs) rather than filled or chunky shapes.
- **Imagery:** Media headers in cards should use high-quality, relevant photography or ultra-premium 3D renders that match the cinematic lighting of the site.
