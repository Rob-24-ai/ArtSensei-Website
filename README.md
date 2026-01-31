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

## Next Session TODO

1. **1-2-3 Steps section** — brainstorm better visual treatment (steps feel small/floating on desktop)
2. **Social proof** — add user quotes (Rob has some saved)
3. **Alt text + OG tags** — use the prompt below
4. **Waitlist follow-up language** — smooth out "Try It Free" → waitlist expectation in email flow

## Prompt: Alt Text + OG Meta Tags

Copy this and hand it to another LLM to generate the alt text and meta tags:

> I have a landing page for ArtSensei (artsensei.ai), an AI art critique tool built by artists from SAIC, Yale, NYU, NYAA, RISD, and MICA. I need two things:
>
> **1. Alt text for these images:**
> - `off-white-paper-tear-thin.jpg` — a torn paper edge divider between sections, off-white paper texture against a black background
> - `ExampleShotsRow.jpg` — a photo of 4 iPhones held in hands, each showing the ArtSensei app analyzing different artworks (figure drawings and art history references from Hokusai and Cassatt)
> - `01-corot.jpg` — a Corot landscape painting showing natural framing with trees
> - `02-rubens.gif` — animated analysis of a Rubens painting
> - `03-kollwitz-proletariat.gif` — animated analysis of Käthe Kollwitz's "Proletariat: Out of Work" woodcut, black and white
> - `04-vermeer-glazing.gif` — animated GIF alternating between Vermeer's "The Milkmaid" full painting and a detail of the glazing technique on the woman's dress
> - `05-klimt.gif` — animated analysis of a Klimt painting
> - `06-af-klint.jpg` — Hilma af Klint's "The Swan" abstract painting
> - `07-gonzales.jpg` — Eva Gonzalès painting "Nanny and Child"
> - `08-moronobu.gif` — animated analysis of a Moronobu Japanese woodblock print
> - `09-michelangelo.gif` — animated analysis of a Michelangelo drawing
> - `10-rembrandt.gif` — animated analysis of a Rembrandt work
> - `11-durer.gif` — animated analysis of an Albrecht Dürer work
> - `12-kollwitz.gif` — animated analysis of a Käthe Kollwitz work
> - `13-degas.gif` — animated analysis of a Degas work
> - `14-mondrian.jpg` — a Piet Mondrian painting
> - `15-goya.gif` — animated analysis of a Goya work
>
> Write concise, descriptive alt text for each (1-2 sentences). Focus on what the image shows, not what it means. For the animated GIFs, mention that they alternate between views.
>
> **2. Open Graph and Twitter meta tags for the page:**
> - Title: "ArtSensei — You make the art. We help you see it."
> - Description: "Get substantive, art-historically grounded feedback on your paintings and drawings. Like having a knowledgeable studio visitor available anytime."
> - URL: https://artsensei.ai
> - I need a recommended OG image size and what to use (I have the logo SVG and phone screenshots). Give me the full HTML meta tags to paste into the `<head>`.
>
> Format the alt text as a simple list I can copy-paste, and the meta tags as a code block.

## Related Repos

- **Marcel Learning System (taxonomy browser + knowledge base):** https://github.com/Rob-24-ai/Marcel-Learning-System.git
  - Local path: `/Users/robcolvin/ArtSensei/Marcel-Learning-System-master`
  - Taxonomy data: `ui/data/taxonomy-data.json`
  - Artist-analyzed examples with animated GIFs live in `knowledge-base/mediums/painting/application/`

## Image Resize Scripts

### Resize filmstrip GIFs for the website

Used to take full-size animated GIFs from the Marcel knowledge base (typically 1200px wide, ~2MB) and resize them to 350px height for the filmstrip. Run from any directory:

```python
python3 -c "
from PIL import Image
import os

# Set these per image
input_path = '/path/to/source.gif'
output_path = '/Users/robcolvin/artsensei/Website-Maintenance/Images/filmstrip/XX-name.gif'
target_h = 350

img = Image.open(input_path)
frames = []
durations = []
try:
    while True:
        frame = img.copy().convert('RGBA')
        w, h = frame.size
        new_h = target_h
        new_w = int(w * (new_h / h))
        frame = frame.resize((new_w, new_h), Image.LANCZOS)
        frames.append(frame)
        durations.append(img.info.get('duration', 100))
        img.seek(img.tell() + 1)
except EOFError:
    pass

frames[0].save(output_path, save_all=True, append_images=frames[1:],
               duration=durations, loop=0, optimize=True, disposal=2)
print(f'{len(frames)} frames, {os.path.getsize(output_path) / 1024:.0f}KB')
"
```

For static JPGs:

```python
python3 -c "
from PIL import Image
import os

input_path = '/path/to/source.jpg'
output_path = '/Users/robcolvin/artsensei/Website-Maintenance/Images/filmstrip/XX-name.jpg'
target_h = 350

img = Image.open(input_path)
w, h = img.size
new_w = int(w * (target_h / h))
img = img.resize((new_w, target_h), Image.LANCZOS)
img.save(output_path, 'JPEG', quality=85)
print(f'{new_w}x{target_h}, {os.path.getsize(output_path) / 1024:.0f}KB')
"
```

### Notes
- Target 350px height = 2x retina for the 175px display size on desktop
- For B&W images (Kollwitz woodcuts etc), you can add `.quantize(colors=64, method=2)` before saving to reduce file size further
- The Marcel image-maker (`Marcel-Learning-System-master/image-maker/`) has its own `create_gif.py` for creating the source GIFs from numbered frames — see the Marcel repo's CLAUDE.md for that workflow

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

