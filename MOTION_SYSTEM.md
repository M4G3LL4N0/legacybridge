# Premium Motion System — legacybridge

Installed: 2026-05-20

TrillionX portfolio motion kit — tasteful reveals, hover feedback, and ambient depth.

## Philosophy

Motion supports: **reveal**, **focus**, **feedback**, **continuity**, **depth**, **emotion**, **trust**.

Avoid gimmicks, infinite loops on content, and motion that blocks reading.

## Tokens

| Token | Value |
|-------|--------|
| fast | 180ms |
| normal | 300ms |
| slow | 600ms |
| cinematic | 900ms |
| ease-out | cubic-bezier(0.16, 1, 0.3, 1) |

## Components

- `components/motion/MotionBoot.tsx` — page ready + IntersectionObserver for `[data-reveal]` / `[data-stagger]`
- `components/motion/RevealOnScroll.tsx` — wrapper helpers
- `lib/motion-tokens.ts` — shared constants

## CSS

Imported via `app/globals.css` → `@import` or appended block `/* premium-motion */`.

Utilities: `.motion-hover-lift`, `.motion-card`, `.motion-btn`, `.motion-ambient`.

## Usage

```tsx
import { RevealOnScroll, StaggerOnScroll } from "@/components/motion/RevealOnScroll";

<RevealOnScroll as="section" className="...">...</RevealOnScroll>
<StaggerOnScroll className="grid ...">{cards}</StaggerOnScroll>
```

Or HTML attributes: `data-reveal`, `data-stagger` on sections/grids.

## Accessibility

- `prefers-reduced-motion`: reveals instant, ambient off
- Focus rings preserved on interactive elements
- No essential info only in animation

## Performance

- Transform + opacity only for reveals
- IntersectionObserver fires once per element
- Ambient layer is fixed, low opacity, pointer-events none

## Adding more effects

1. Extend `motion.css` with one keyframe/utility
2. Prefer `data-reveal` over one-off JS
3. Keep client components small (`MotionBoot` only)
