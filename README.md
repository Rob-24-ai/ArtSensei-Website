# ArtSensei Website

Landing page for ArtSensei — structured art critique and feedback, anytime.

## Current State

- **Status:** Hero redesign in progress on `main` branch
- **Live preview:** `python3 -m http.server 8000` from project root
- **Hosting:** TBD (static site, no build step)

## Design Decisions

- **Fonts:** Minion Pro (serif, headings), Styrene B (sans, body/UI)
- **Color palette:** Black `#000000` hero, off-white `#EBE7DB` content sections, ochre `#D4A84B` accent on hero "see" text, olive green `#79A23B` CTA buttons
- **Hero layout:** Center-aligned editorial statement — "You make the art. We help you *see* it." in large Minion Pro with italic ochre accent
- **Paper tear divider:** `OffWhitePaperEdgeSmooth.png` transitions from black hero to off-white content. Uses negative margin to pull up behind hero and hide excess black
- **Logo:** Enso/brush-circle "a" mark — used as favicon and in footer. Scroll-linked counter-clockwise rotation in hero. Note: current SVGs are raster-traced with baked-in grey backgrounds, need clean single-color vector versions
- **Title:** "ArtSensei - You make the art. I help you see it."

## TODO: Desktop / Photoshop Tasks

### 1. Logo SVGs
Current SVGs (`ArtSensei LOGO Vector Black.svg` / `White.svg`) are raster-traced with thousands of color classes and baked-in opaque backgrounds. Need clean versions:
- Single-color paths on transparent background
- One black version, one white version
- Simple enough to render cleanly at small sizes (favicon, footer, hero spinner)

### 2. Paper Tear Image
The paper tear PNG (`OffWhitePaperEdgeSmooth.png`) has ~350-400px of blank off-white space below the torn edge. This creates too much dead space before the first content section:
- Crop bottom so there's only ~40-60px of off-white below the torn edge
- Keep the gradient from paper texture to flat `#EBE7DB` but compress it into that shorter span
- Watch for diagonal striations in the paper texture (top-right to bottom-left) — minimize their visibility

### 3. Marcel Phone Image
`Marcel.jpg` — hand holding phone photographing a charcoal drawing. Currently has a pure white background. Needs background changed to off-white `#EBE7DB`:
- Select/mask the wall background and fill with `#EBE7DB`
- The drawing on the wall behind the phone should also shift to off-white
- Keep the phone screen pure white — don't touch it
- Clean edges around the hand and phone

### 4. Art History Images (TBD)
Curated art historical images that could be placed editorially on the page. Thinking about how to integrate without getting too busy. Purpose: show the kind of work ArtSensei can discuss, make the page visually richer, reinforce art-world credibility.

### 5. In-Situ Scenario Shots (TBD)
AI-generated images of ArtSensei being used in different scenarios (drawing, painting — not photography yet). Consider which if any belong on the landing page — keep it focused, don't overcrowd.

## Open Questions

- Accent color: ochre `#D4A84B` is current pick, explored greens, ambers, peach, terracotta — revisit if needed
- Form placement and styling (removed from hero during redesign, still exists at bottom of page)
- Copy refinements for below-the-fold sections
- Section spacing and rhythm below the fold

## File Structure

```
index.html          — single-page landing
styles.css          — all styles, no preprocessor
script.js           — scroll-linked logo spin + form handling
Images/
  Marcel.jpg        — hero/promo photo (hand holding phone with art critique)
  Logos/            — SVG logo marks (black + white versions)
  OffWhite*.png/jpg — paper tear edge transition images
  TornEdge*.png     — alternate torn edge assets
  WhitePaperEdge.png
fonts/              — local font files (Minion Pro, Styrene B)
```

