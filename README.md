# Motion UI Kit

A TypeScript-first, Vite-powered UI kit built around three pillars: **UX**, **Menu** and **Effects**. It ships with reusable component factories, landing-section factories, menu presets and animation helpers.

- **Path:** `/Users/JOB/#DEV/01-projets/_applications/motion-ui-kit/`
- **Stack:** Vite + TypeScript + vanilla JS
- **Repo:** `bizc0m/motion-ui-kit`

## Quick start

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Structure

```
src/
  components/    # 38 component factories
  sections/      # 30 section factories
  menu/          # preset menu components
  effects/       # animation/transition utilities
  pillars/       # grouped exports by pillar
  main.ts        # comprehensive demo page
  style.css      # tokens + component + demo styles
```

## Components (38)

### Actions
1. `Button`
2. `IconButton`
3. `SplitButton`
4. `ButtonGroup`
5. `FloatingActionButton`

### Forms
6. `Input`
7. `Textarea`
8. `Select`
9. `Checkbox`
10. `Radio`
11. `Toggle`
12. `Slider`
13. `Range`
14. `FileUpload`
15. `SearchInput`
16. `PinInput`

### Data display
17. `Card`
18. `MediaCard`
19. `ProductCard`
20. `TestimonialCard`
21. `Avatar`
22. `Badge`
23. `Tag`

### Overlays
24. `Tooltip`
25. `Popover`
26. `Modal`
27. `Drawer`
28. `Toast`
29. `Alert`

### Feedback
30. `ProgressBar`
31. `Spinner`
32. `Skeleton`

### Navigation
33. `Accordion`
34. `Tabs`
35. `Breadcrumb`
36. `Pagination`
37. `Stepper`
38. `Dropdown`

## Sections (30)

### Heroes
- `HeroCenter`
- `HeroSplit`
- `HeroFullBleed`

### Features
- `FeaturesGrid`
- `FeaturesCards`
- `FeaturesSplit`

### Pricing
- `PricingTable`
- `PricingToggle`

### Social proof
- `TestimonialsSlider`
- `TestimonialsGrid`
- `LogoCloud`
- `StatsStrip`
- `StatsGrid`

### CTAs
- `CTAStandard`
- `CTABanner`

### Content
- `FAQAccordion`
- `FAQColumns`
- `TeamGrid`
- `TeamCarousel`
- `GalleryGrid`
- `GalleryMasonry`
- `BlogList`
- `BlogFeatured`

### Engagement
- `NewsletterInline`
- `NewsletterCard`
- `ContactSplit`
- `SearchSection`
- `ComparisonTable`
- `StepsHorizontal`

### Layout
- `FooterStandard`

## Menu presets

- `TopNav`
- `Sidebar`
- `BottomNav`
- `CommandPalette`
- `MegaMenu`
- `ContextMenu`

## Effects (15)

- `fadeIn` / `fadeOut`
- `slideIn` / `slideOut`
- `scaleIn` / `scaleOut`
- `stagger`
- `spring`
- `parallax`
- `scrollReveal`
- `blurReveal`
- `morph`
- `shake`
- `pulse`
- `ripple`

## Usage

```ts
import { createCard } from './src/components';
import { createHeroCenter } from './src/sections';
import { slideIn } from './src/effects';

const card = createCard({ title: 'Hello', body: 'Motion UI Kit' });
document.body.appendChild(card);
slideIn(card, { duration: 300 });
```

## Pillars

| Pillar | File | Exports |
|--------|------|---------|
| UX | `src/pillars/ux.ts` | components + sections |
| Menu | `src/pillars/menu.ts` | menu presets |
| Effects | `src/pillars/effects.ts` | animation helpers |
