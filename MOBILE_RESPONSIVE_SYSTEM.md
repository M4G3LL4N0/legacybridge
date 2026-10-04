# Mobile Responsive System — legacybridge

Installed: 2026-05-20

## Goals
- no horizontal overflow at mobile breakpoints
- premium mobile hierarchy and spacing
- reliable nav, hero, cards, forms, tables, and footer behavior

## Shared safeguards
- global media max-width rules for image/video/svg/canvas/iframe
- mobile-safe overflow guards and word wrapping
- 44px minimum interactive tap targets
- table and code horizontal scrolling safety

## Shared components synchronized
- `components/visual/DistinctVentureHero.tsx`
- `components/visual/DomainCommandGraphic.tsx`
- `components/visual/HeroGraphicPanel.tsx`

## Breakpoints targeted
- 320, 360, 375, 390, 414, 430
- 480, 640, 768, 1024
- desktop 1280+

## Accessibility
- preserves focusable controls
- improves touch targets and readable type
- avoids content hidden behind motion/effects
