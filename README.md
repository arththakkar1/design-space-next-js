# DesignSpace

Premium interior design landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

---

## Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Animation** — Motion
- **Fonts** — Cormorant Garamond (display), Jost (body)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Cursors

Three cursor options in `cursors.tsx`. Swap by replacing `<CustomCursor />` in the page root.

| Component         | Behavior                                             |
| ----------------- | ---------------------------------------------------- |
| `CrosshairCursor` | Crosshair that rotates 45deg on interactive elements |

---

## Color Palette

| Name       | Hex       |
| ---------- | --------- |
| Warm White | `#faf8f4` |
| Cream      | `#f7f2ea` |
| Ink        | `#1a1612` |
| Deep       | `#2d2520` |
| Stone      | `#8a7f72` |
| Gold       | `#c9a96e` |

---

## Notes

- Add Unsplash to `images.remotePatterns` in `next.config.js` for `next/image` to work with external URLs.
- Apply `cursor-none` to `body` when using any custom cursor component.
- Cursor components use direct DOM mutations inside `requestAnimationFrame` to avoid per-frame React re-renders.
