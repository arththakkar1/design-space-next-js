# DesignSpace — Premium Interior Design Landing Page

A production-grade interior design landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a luxury editorial aesthetic with warm ivory tones, refined typography, and polished micro-interactions.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Custom Cursors](#custom-cursors)
  - [Navigation](#navigation)
  - [Hero](#hero)
  - [Why Choose Us](#why-choose-us)
  - [Services](#services)
  - [Process](#process)
  - [Testimonials](#testimonials)
  - [CTA](#cta)
  - [Footer](#footer)
- [Design Tokens](#design-tokens)
- [Typography](#typography)
- [Animation Patterns](#animation-patterns)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)

---

## Overview

DesignSpace is a single-page marketing site for a premium interior design studio. The design direction is **luxury editorial** — characterized by generous negative space, serif display typography, warm gold accents, and intentional motion that enhances rather than distracts.

All animations are handled exclusively through Framer Motion. All styling is handled exclusively through Tailwind CSS utility classes with no inline `style` props.

---

## Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | Next.js 14 (App Router)                 |
| Language  | TypeScript                              |
| Styling   | Tailwind CSS                            |
| Animation | Framer Motion                           |
| Icons     | React Icons (Material Design)           |
| Images    | Next.js Image (optimized)               |
| Fonts     | Google Fonts (Cormorant Garamond, Jost) |

---

## Project Structure

```
app/
  page.tsx          # Main landing page — all sections composed here
  globals.css       # Tailwind directives, font imports, custom keyframes
tailwind.config.ts  # Extended theme: custom colors, font families
cursors.tsx         # Three interchangeable custom cursor components
```

---

## Components

### Custom Cursors

Three drop-in cursor components are available in `cursors.tsx`. Each hides the native cursor and replaces it with a custom experience. To use any cursor, replace `<CustomCursor />` in the page root and ensure `cursor-none` is applied to the `body`.

**CrosshairCursor**

A minimal crosshair that detects interactive elements (`a`, `button`) via `document.elementFromPoint` and rotates 45 degrees into an X mark on hover, with a subtle scale transition.

```tsx
import { CrosshairCursor } from "@/cursors";

<CrosshairCursor />;
```

**BlobCursor**

A velocity-aware morphing blob. Tracks mouse speed and direction to physically stretch and squish the cursor shape using `scaleX` / `scaleY` transforms. A precise dot sits at the exact pointer position while the blob lags behind with eased interpolation.

```tsx
import { BlobCursor } from "@/cursors";

<BlobCursor />;
```

**TextRevealCursor**

A context-aware ring cursor. On hover over links or buttons, the ring expands and reveals a short text label derived from the element's content (`VIEW`, `BOOK`, `GO`, `TAP`). Uses `document.elementFromPoint` for detection with no additional event listeners on individual elements.

```tsx
import { TextRevealCursor } from "@/cursors";

<TextRevealCursor />;
```

---

### Navigation

Fixed top navigation with scroll-aware styling. Transitions from transparent to a frosted-glass background (`backdrop-blur`) after 50px of scroll using a `window.scroll` listener and React state.

- Logo uses display serif font with gold accent on the second word
- Nav links transition to gold on hover
- CTA button inverts on hover (gold background, light text)

---

### Hero

Full-viewport split-screen layout. Left column contains staggered Framer Motion entrance animations triggered on mount. Right column contains a full-bleed image with two overlaid elements:

- A floating stat badge with a continuous `y` oscillation loop (`animate={{ y: [0, -8, 0] }}`)
- A scroll indicator line with a `scaleY` loop animation using `transformOrigin: "top"`

Hero statistics are rendered from a data array at the bottom of the left column, separated by a top border.

---

### Why Choose Us

Two-column layout. Left column contains a heading, body copy, and a positioned image with an overlapping gold stat square using negative Tailwind offset classes (`-bottom-6 -right-6`).

Right column renders four feature rows from the `whyItems` array. Each row has a bordered icon container that fills gold on `group-hover`, and the row itself uses `whileHover={{ x: 4 }}` for a subtle slide interaction.

---

### Services

Four services rendered as interactive table rows. On hover, each row:

- Animates background color via `motion.div` `animate` prop
- Slides the title right via `motion.h3` `animate={{ x }}`
- Transitions the index number color to gold
- Reveals a thumbnail image by animating `width`, `height`, and `opacity` from zero

The hover state is tracked with a single `useState<number | null>` index.

---

### Process

Dark-background section (`bg-[#1a1612]`) with a four-column step grid. Each step has:

- A small gold dot absolutely positioned on the top border (`-top-[7px]`)
- A large ghost number in low-opacity gold as a decorative background element
- Title in warm white, description in warm white at 45% opacity

---

### Testimonials

Two-column layout with animated quote cycling. Left column:

- `AnimatePresence` with `mode="wait"` handles quote and author enter/exit transitions
- Pagination is rendered as `motion.button` elements that animate their `width` and `backgroundColor`

Right column renders a stacked portrait collage. Each portrait's `opacity`, `scale`, `zIndex`, and `outline` animate based on the active index. Clicking any portrait updates the active state and syncs the quote.

---

### CTA

Centered call-to-action over a cream background. A large ghost wordmark is positioned absolutely behind the content using `text-[#c9a96e]/[0.07]` for near-invisible opacity.

The primary button uses `whileHover={{ backgroundColor: "#c9a96e", y: -3 }}` for a combined color and lift transition.

---

### Footer

Four-column dark footer (`bg-[#2d2520]`). Columns: brand description, explore links, contact details with icons, social links. All interactive links use Tailwind `hover:text-[#c9a96e]` transitions. Bottom bar contains copyright and policy links.

---

## Design Tokens

All color values are applied as Tailwind arbitrary values. The full palette:

| Token      | Hex       | Usage                                  |
| ---------- | --------- | -------------------------------------- |
| Warm White | `#faf8f4` | Primary background, light text on dark |
| Cream      | `#f7f2ea` | Alternate section backgrounds          |
| Ink        | `#1a1612` | Primary text, dark backgrounds         |
| Deep       | `#2d2520` | Footer background                      |
| Stone      | `#8a7f72` | Secondary text, muted UI               |
| Gold       | `#c9a96e` | Accent, highlights, interactive states |

Opacity modifiers are applied with the Tailwind slash syntax: `text-[#c9a96e]/45`, `border-[#8a7f72]/20`.

---

## Typography

Two typefaces loaded from Google Fonts via `globals.css` `@import`.

| Role    | Family             | Weights                   | Usage                                   |
| ------- | ------------------ | ------------------------- | --------------------------------------- |
| Display | Cormorant Garamond | 300, 400, 600 (+ italics) | All headings, large numerals, logo      |
| Body    | Jost               | 200, 300, 400, 500        | Navigation, body copy, labels, captions |

Apply via Tailwind utility classes:

```html
<h1 class="font-display font-light">Heading</h1>
<p class="font-body font-light">Body text</p>
```

Ensure both families are extended in `tailwind.config.ts`:

```ts
fontFamily: {
  display: ["Cormorant Garamond", "serif"],
  body: ["Jost", "sans-serif"],
},
```

---

## Animation Patterns

**Scroll-triggered fade-up**

Reusable `FadeSection` wrapper component using `whileInView` with `viewport={{ once: true }}`. Accepts a `delay` in milliseconds.

```tsx
<FadeSection delay={200}>
  <p>Fades up when scrolled into view</p>
</FadeSection>
```

**Staggered entrance (Hero)**

Hero elements use a `fadeUp` factory function returning `initial`, `animate`, and `transition` props spread onto each `motion.*` element with incrementing delay values.

```tsx
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

<motion.h1 {...fadeUp(0.5)}>...</motion.h1>;
```

**AnimatePresence transitions**

Used in the Testimonials section for quote and author swaps. Both elements share `mode="wait"` so the exiting element completes before the entering element begins.

```tsx
<AnimatePresence mode="wait">
  <motion.blockquote
    key={`quote-${active}`}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.5 }}
  />
</AnimatePresence>
```

**Looping motion**

Continuous animations use an array syntax in `animate` with `repeat: Infinity`.

```tsx
// Float
animate={{ y: [0, -8, 0] }}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

// Scroll line pulse
animate={{ scaleY: [0, 1, 0] }}
transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
```

---

## Getting Started

**Prerequisites**

- Node.js 18 or above
- npm, yarn, or pnpm

**Installation**

```bash
git clone https://github.com/your-org/designspace.git
cd designspace
npm install
```

**Development**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production Build**

```bash
npm run build
npm run start
```

---

Install dependencies individually if needed:

```bash
npm install framer-motion react-icons
```

---

## Notes

- The custom cursor components use direct DOM style mutations (`element.style.left`) inside `requestAnimationFrame` loops for performance. This intentionally bypasses React state to avoid re-render overhead on every animation frame.
- All `Image` components from `next/image` require the external hostname to be added to `next.config.js` under `images.remotePatterns` when using Unsplash or other external sources.
- The `cursor-none` class should be applied globally (on `html` or `body`) to hide the native cursor when any custom cursor component is active.
