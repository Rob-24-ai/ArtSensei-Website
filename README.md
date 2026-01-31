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


## Next Session TODO

1. **1-2-3 Steps section** — redesign visual treatment (see prompt below)
2. **Social proof** — add user quotes (Rob has some saved)
3. **Alt text + OG tags** — use the prompt further below
4. **Waitlist follow-up language** — smooth out "Try It Free" → waitlist expectation in email flow

## Prompt: Redesign the 1-2-3 Steps Section

Copy this prompt and give it to an LLM for design ideas:

> I need help redesigning the "how it works" 1-2-3 steps section on a landing page. The current version works but feels small and visually floating — it doesn't command enough presence on the page. I want proposals for a better visual treatment.
>
> ### Context: What the page is
>
> ArtSensei is an AI art critique tool for painters and drawers. The landing page is a single-page static site (HTML/CSS/JS, no framework). The design language is editorial and gallery-like — black hero, off-white content sections, serif headings (Minion Pro), sans-serif body (Styrene B). Think gallery catalog or Phaidon book, not SaaS startup.
>
> ### Context: Where the steps sit in the page flow
>
> The page reads top-to-bottom like this:
> 1. **Black hero** — "You make the art. We help you *see* it." (large Minion Pro, centered)
> 2. **Torn paper divider** — transitions from black to off-white
> 3. **"You know the need"** — problem statement (off-white `#EBE7DB` background)
> 4. **"Eyes trained for you"** — solution copy (same off-white background)
> 5. **ExampleShotsRow.jpg** — 4 iPhones showing the app in use, in a dark `#1a1a1a` "museum mat" band with `vw`-based padding
> 6. **>>> 1-2-3 STEPS (THIS SECTION) <<<** — back on off-white `#EBE7DB`
> 7. **"Yeah, it's free."** — pricing/CTA section (off-white)
> 8. **Art history filmstrip** — horizontal auto-scrolling strip of paintings/GIFs on black
> 9. **"Try it."** — email signup form (black background)
> 10. **Footer** (black)
>
> So the steps come right after a dramatic dark photo band and before the pricing section. They need to hold their own visually in that sequence.
>
> ### The current implementation
>
> **HTML structure:**
> ```html
> <section class="how-it-works-section">
>     <div class="container reveal">
>         <div class="how-it-works">
>             <div class="step">
>                 <span class="step-number">1</span>
>                 <h3>Show your work</h3>
>                 <p>Snap a photo, point your camera, or upload an image.</p>
>             </div>
>             <div class="step">
>                 <span class="step-number">2</span>
>                 <h3>Get thoughtful critique</h3>
>                 <p>Real feedback with image references from historic artists.</p>
>             </div>
>             <div class="step">
>                 <span class="step-number">3</span>
>                 <h3>Talk it through</h3>
>                 <p>Ask for more. Push back. It's a conversation, not a report.</p>
>             </div>
>         </div>
>         <p class="privacy-note"><em>Your images are private and never used for training.</em></p>
>     </div>
> </section>
> ```
>
> **Current CSS (desktop):**
> ```css
> .how-it-works-section {
>     padding: 56px 24px 80px; /* var(--spacing-section) = 80px */
>     background-color: #EBE7DB;
>     color: #1a1a1a;
> }
>
> .how-it-works {
>     display: grid;
>     grid-template-columns: repeat(3, 1fr);
>     gap: 48px;
>     margin-top: 3.5rem;
> }
>
> .step-number {
>     display: block;
>     font-family: 'Minion Pro', Georgia, serif;
>     font-size: 3.5rem;
>     font-weight: 500;
>     margin-bottom: 0.5rem;
>     line-height: 1.3;
>     /* Animated gradient text matching the hero accent */
>     background: linear-gradient(90deg, #E8B830, #D4882A, #C96B30, #79a23b, #D4A030, #E8B830);
>     background-size: 600% 100%;
>     -webkit-background-clip: text;
>     -webkit-text-fill-color: transparent;
>     background-clip: text;
>     animation: see-shift 3s ease-in-out infinite alternate;
> }
>
> .step h3 {
>     font-size: 1.1rem;
>     font-weight: 400;
>     color: #1a1a1a;
>     margin-bottom: 0.75rem;
> }
>
> .step p {
>     font-size: 0.95rem;
>     font-weight: 400;
>     color: #3a3a3a;
>     text-align: left;
> }
>
> .privacy-note {
>     text-align: center;
>     font-size: 1.13rem;
>     color: #4d4d4d;
>     margin-top: 2.5rem;
> }
> ```
>
> **Current CSS (mobile, ≤768px):**
> ```css
> .how-it-works {
>     grid-template-columns: 1fr;
>     gap: 16px;
> }
> .step { text-align: center; }
> .step p { text-align: center; font-size: 1rem; }
> .step h3 { font-size: 1.15rem; }
> .step-number { font-size: 2.75rem; margin-bottom: 0.15rem; }
> .how-it-works-section { padding-top: 36px; }
> ```
>
> ### The problem
>
> The three steps feel too small and ungrounded on desktop. The step numbers (3.5rem) are decent, but the h3 titles (1.1rem) and body text (0.95rem) are modest, and the whole grid floats in the middle of the off-white section without enough visual weight. It doesn't feel like its own moment on the page — it reads more like a detail than a section. The container max-width is 800px, which works for the text-heavy sections but may be constraining for a more visual layout.
>
> ### Design constraints
>
> - **Background:** Off-white `#EBE7DB` — same as the sections above and below
> - **Fonts available:** Minion Pro (serif, weights 400/500/italic), Styrene B (sans, weights 300/400/500/700)
> - **Color palette:** Black `#000`, off-white `#EBE7DB`, dark text `#1a1a1a` / `#3a3a3a`, ochre-to-amber gradient on step numbers, olive green `#79A23B` for CTA buttons
> - **Container:** Currently 800px max-width, but this section could break out wider if it helps
> - **No images or icons** — this should be solved with typography, spacing, and layout. The page already has a large photo band directly above.
> - **Keep the same copy** — the three step titles and descriptions are final. The privacy note stays.
> - **Must work on mobile** — currently stacks to single column at 768px
> - **Static site** — pure CSS, no build tools, no framework
> - **Tone:** Gallery-editorial, not corporate. Think whitespace, proportion, typographic hierarchy. Avoid anything that looks like a SaaS pricing grid or tech startup template.
>
> ### What I want from you
>
> Give me **2-3 distinct design approaches** for this section. For each approach:
> 1. Describe the visual concept in a sentence or two
> 2. Provide the complete CSS (desktop + mobile) — I'll drop it in and test
> 3. Note any HTML changes needed (keep them minimal)
> 4. Explain why this approach gives the section more visual weight
>
> Think about: typography scale, spacing/padding, whether the numbers should be larger or repositioned, whether the grid needs more breathing room, whether a subtle background shift or rule/divider could help frame the section, and how the section transitions from the dark photo band above into the pricing section below.

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

