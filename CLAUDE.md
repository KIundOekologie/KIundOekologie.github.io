# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static multi-page website for "Digitaler Garten" – a literary-ecological audio walk through the Cyber Valley. The site explores themes of AI, nature, and ecocriticism through an academic yet accessible lens.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS

**Design Theme:** "Organic Earth & Vintage Science" – inspired by vintage natural history encyclopedias and field journals.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Static export for GitHub Pages (outputs to /out)
npm run export
```

## Architecture

### Static Site Configuration
The project is configured for static export (`output: 'export'` in `next.config.mjs`) to deploy on GitHub Pages. This means:
- No Image Optimization (images must be unoptimized or served as-is)
- No dynamic routes or server-side features
- All pages must be statically renderable

For project repositories (not `username.github.io`), uncomment `basePath` and `assetPrefix` in `next.config.mjs`.

### Page Structure
- **`app/layout.tsx`** – Root layout with global fonts (Playfair Display, Inter), noise texture overlay, and Navigation
- **`app/page.tsx`** – Home page with hero section, tour overview, and station links
- **`app/station-{1-6}/page.tsx`** – Six thematic stations for the audio walk
- **`app/feedback/page.tsx`** – Feedback form page
- **`components/Navigation.tsx`** – Sticky navigation with mobile hamburger menu
- **`components/NatureCultureSlider.tsx`** – Interactive analog slider component

### Design Tokens (Tailwind)
- `bg-base`: #F4F1EA (warm parchment)
- `text-main`: #2A2A28 (dark anthracite)
- `accent-terra`: #B85D43 (terracotta)
- `accent-flora`: #6A7B59 (moss green)
- `border-color`: #D1CEC5 (gray-beige)

### Custom CSS Classes (`app/globals.css`)
- `.btn-vintage` – Primary call-to-action button style
- `.section-container` – Consistent max-width container with padding
- `.divider` – Horizontal separator with my-8 sm:my-12 spacing
- `.content-text` – Body text with justified alignment
- `.fact-box` – Bordered callout box for facts/quotes
- `.margin-note` – Left-bordered margin notes
- `.drop-cap` – Decorative first-letter styling
- `.grainy-image` – Film grain effect overlay for images

## Project Conventions

### Content Language
All visible content is in **German**. Use German text for UI elements, headings, and body copy.

### Typography
- **Headings:** `font-heading` (Playfair Display, serif)
- **Body:** `font-body` (Inter, sans-serif)
- **Letter spacing:** Use `tracking-wide-plus` (0.15em) for vintage feel on appropriate elements

### Component Patterns
- Use `"use client"` directive for interactive components (Navigation, Slider)
- Keep layout.tsx server components where possible
- Use Link from `next/link` for internal navigation
- Maintain responsive design: mobile-first approach with `sm:` and `lg:` breakpoints

### Adding New Stations
To add a new station (e.g., station-7):
1. Create `app/station-7/page.tsx`
2. Add link to Navigation.tsx (desktop and mobile menus)
3. Link from home page in the station grid if applicable

### Import Path Alias
Use `@/` prefix for imports from the project root:
```tsx
import { Navigation } from "@/components/Navigation";
```
