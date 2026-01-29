# ArtSensei Website

Landing page for ArtSensei — structured art critique and feedback, anytime.

## Current State

- **Status:** Early design iteration — hero section and above-the-fold layout in progress
- **Live preview:** `python3 -m http.server 8000` from project root
- **Hosting:** TBD (static site, no build step)

## Design Decisions

- **Fonts:** Minion Pro (serif, wordmark/headings), Styrene B (sans, body/UI)
- **Color palette:** Black `#000000` hero, off-white `#EBE7DB` content sections, olive green `#79A23B` CTA
- **Hero layout:** Currently left-aligned editorial style — may revert to center-aligned
- **Paper tear divider:** `OffWhitePaperEdgeSmooth.png` transitions from black hero to off-white content. Uses negative margin to pull up behind hero and hide excess black. Bottom of image must not be cropped (gradient blends to content background)
- **Logo:** Enso/brush-circle "a" mark exists in SVGs (black + white versions) but currently not used in hero — just the "ArtSensei" wordmark in Minion Pro light (300 weight)

## Open Questions

- Center-aligned vs. left-aligned hero layout
- Whether/where to use the logo mark (hero, nav, footer, favicon)
- Form placement and styling refinements
- Content below the fold (problem, how it works, waitlist sections)

## File Structure

```
index.html          — single-page landing
styles.css          — all styles, no preprocessor
script.js           — form handling
Images/
  Marcel.jpg        — hero/promo photo (hand holding phone with art critique)
  Logos/            — SVG logo marks (black + white versions)
  OffWhite*.png/jpg — paper tear edge transition images
  TornEdge*.png     — alternate torn edge assets
  WhitePaperEdge.png
fonts/              — local font files (Minion Pro, Styrene B)
```
