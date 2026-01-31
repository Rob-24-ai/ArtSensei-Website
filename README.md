# ArtSensei Website

Landing page for ArtSensei — structured art critique and feedback, anytime.

## Current State

- **Status:** Hero redesign in progress on `main` branch
- **Live preview:** `python3 -m http.server 8000` from project root
- **Hosting:** Namecheap Stellar shared hosting (cPanel), expires May 7, 2026
- **Domain:** `artsensei.ai` (registered and hosted at Namecheap)
- **Namecheap username:** `robcolvin`
- **cPanel access:** Namecheap dashboard → Hosting List → `artsensei.ai` → GO TO CPANEL
- **Server:** `server164.web-hosting.com` (Shared IP: `68.65.122.44`)
- **Home directory:** `/home/robcolvin`
- **Public root:** `public_html/`
- **Deployment:** Static site, no build step. Deploy via cPanel Git Version Control or File Manager. Git repo: `https://github.com/Rob-24-ai/ArtSensei-Website.git`

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

## Website Review Checklist (Jan 31, 2026)

Design review of the live site at artsensei.ai.

### CTA & Conversion
- [ ] Add a CTA button ("Let's Go" or similar) higher on the page — visible without scrolling
- [ ] Consider a sticky header/nav with persistent CTA so it's always accessible
- [ ] Review email signup form placement — currently buried at the bottom

### Visual Hierarchy & Typography
- [x] Bumped h2 headers to `clamp(2.8rem, 6vw, 5rem)` — scannable at a glance
- [x] Body text weight bumped from 300 to 400, color darkened from `#555` to `#3a3a3a`
- [x] "You know the problem" → "You know the need" (cleaner call-and-response with "Eyes trained for you")
- [ ] Verify consistent sizing/weight across all section headers

### Spacing & Rhythm
- [x] Tightened vertical spacing between sections — connected flow
- [x] Removed bottom canvas tear divider — torn paper used only once at hero transition
- [x] Added museum-proportioned dark mat (`#1a1a1a`) for ExampleShotsRow phone image
- [x] Mat uses `vw`-based padding with slight bottom weighting (museum standard)
- [x] Tuned gap between "Eyes trained" copy → mat → 1-2-3 steps for connected sequence

### Page Structure (Restructured)
- [x] Moved ExampleShotsRow.jpg directly after "Eyes trained for you" copy
- [x] 1-2-3 steps now sit below the phone image (tell → show → explain flow)
- [x] Swapped `CutCanvasRagged.jpg` for clean `ExampleShotsRow.jpg`

### Mobile (In Progress)
- [x] Reduced section spacing from 80px to 48px
- [x] Left-aligned body text and headers for problem/solution sections
- [x] Left-aligned "Yeah, it's free" section with bumped header size
- [x] Tighter step gaps (16px), smaller step numbers
- [x] Tighter mat padding on mobile (20px)
- [ ] Continue refining mobile typography and spacing
- [ ] Test full mobile flow end-to-end

### Color System
- [ ] Lock in a purposeful accent color palette (currently ochre `#D4A84B` and olive `#79A23B`)
- [ ] Make sure chart/accent colors carry through consistently if adding more visual elements

### Performance
- [ ] Optimize image file sizes (paper textures, filmstrip, screenshots) — compress or convert to WebP
- [ ] Implement lazy loading on below-the-fold images
- [ ] Check for flash of unstyled content from body opacity transition

### Accessibility
- [ ] Add descriptive `alt` text to all images (artist filmstrip, screenshots, paper tear)
- [x] Improved color contrast on body text (`#3a3a3a` on `#EBE7DB`)
- [ ] Verify full WCAG AA compliance
- [ ] Test keyboard navigation and screen reader flow

### Footer & Misc
- [ ] Consider moving ElevenLabs grant mention to a separate About/Partners page to keep footer focused
- [ ] Evaluate whether `rob@artsensei.ai` contact should become a contact form as user base grows

## Open Questions

- Accent color: ochre `#D4A84B` is current pick, explored greens, ambers, peach, terracotta — revisit if needed
- Form placement and styling (removed from hero during redesign, still exists at bottom of page)
- Mobile: should "Yeah, it's free" body text stay serif or switch to Styrene on mobile?
- Mobile: finalize left-align vs centered approach for all sections

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

