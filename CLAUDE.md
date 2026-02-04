# Marcel Learning System

## Project Overview
A taxonomy browser and knowledge base for teaching art techniques through analyzed artwork examples. Marcel is an AI art tutor that uses this knowledge base to give feedback on artists' work.

## Quick Start - Launch Taxonomy Browser
```bash
cd /Users/robcolvin/ArtSensei/Marcel-Learning-System-master
python3 -m http.server 8080
# Then open in Firefox: http://localhost:8080/ui/
```
Must serve from project ROOT (not /ui/) so image paths resolve correctly.

## Project Structure
```
Marcel-Learning-System-master/
├── knowledge-base/           # All content lives here
│   ├── materials/            # Tools, mediums, supports, additives
│   ├── mediums/              # Drawing, painting (with artist examples)
│   │   ├── drawing/mark/     # Mark features & functions
│   │   ├── drawing/tone/     # Tone features & functions
│   │   └── painting/application/  # Artist-analyzed examples
│   ├── techniques/           # Conceptual technique definitions
│   │   └── painting/application/  # 9 categories, 39 technique files
│   └── universal-concepts/   # Composition, color, shape
├── ui/                       # Browser interface
│   ├── data/taxonomy-data.json  # THE MAIN DATA FILE - all entries
│   ├── app.js               # Browser logic
│   └── index.html           # Entry point
├── image-maker/             # GIF/MP4 creation tools
│   ├── input/               # Source images go here
│   ├── output/              # Working outputs (can be cleaned)
│   ├── create_gif.py        # Main GIF creator
│   └── create_mp4.py        # MP4 creator (uses ffmpeg)
└── docs/                    # Documentation
```

## Current Work: Painting Applications
Filling out `painting/application/` with artist examples. Categories:
- directionality (cross-contour, calligraphic-linear, multidirectional)
- edge-quality (hard-sharp, soft-diffused, lost-found)
- gesture-speed (aggressive-fast, deliberate-controlled, hesitant-tentative)
- layering-state (wet-in-wet, wet-on-dry, pentimenti)
- load-flow (dry-brush, loaded-juicy, starved-drag)
- opacity-techniques (direct-painting, opaque-blocking)
- tool-specific (13 brush/knife techniques)
- touch-consistency (uniform, varied)
- transparency-techniques (glazing, scumbling, staining, washes)

**Next up:** Calligraphic/Linear needs artist examples

## Entry Creation Workflow

### 1. Select Artwork
- Must be PUBLIC DOMAIN (Met, NGA, Art Institute Chicago, Wikimedia Commons)
- Should clearly demonstrate the technique
- Prefer well-known artists when possible

### 2. Write Markdown Entry
Two formats exist:

**Artist-Analyzed Example** (in mediums/painting/application/):
```markdown
# Technique Name

**Keywords**: keyword1, keyword2, keyword3...

## Analysis
[How the technique appears in this specific artwork - 2-3 paragraphs]

### How it works
[Visual/perceptual mechanism - why this creates the effect it does]

### Application
[When/why an artist would use this technique]

### Form
[Step-by-step execution instructions]

### Common Pitfalls
**Pitfall name**: Description of what goes wrong and why

---

## Example: Artist Name — Artwork Title (Date)

**Artist**: Full Name (pronunciation), Nationality, Dates
**Title**: Artwork Title
**Date**: Year
**Medium**: Oil on canvas / etc
**Dimensions**: H × W
**Location**: Museum, City
**License**: Public Domain
**URL**: Link to artwork

---

**Entry Type**: Technique
**Last Updated**: YYYY-MM-DD
```

**Conceptual Technique** (in techniques/painting/application/):
```markdown
# Technique Name

## Description
[What this technique is - 2-3 sentences]

## How It Works
[Visual/perceptual explanation]

## Application
[When to use it]

## Execution
[How to do it]

## Common Pitfalls
### Pitfall name:
Description

## Method Properties for Marcel's Analysis
When identifying [technique] in user work, note:
- **Property**: What to look for and feedback implications
```

### 3. Update taxonomy-data.json
Add entry to the appropriate method's `examples` array:
```json
{
  "id": "artist-artwork-slug",
  "name": "Artist Name",
  "title": "Artwork Title (Technique Demonstrated)",
  "description": "One sentence describing what the example shows.",
  "keywords": ["keyword1", "keyword2"],
  "artwork": {
    "artist": "Full Name (pronunciation), Nationality, Dates",
    "title": "Artwork Title",
    "date": "Year",
    "medium": "Medium",
    "dimensions": "Dimensions",
    "location": "Museum, City",
    "credit": "Credit line or Public Domain"
  },
  "references": [
    {
      "type": "documentation",
      "filename": "artist-technique.md",
      "path": "knowledge-base/mediums/painting/application/category/artist-technique.md"
    },
    {
      "type": "jpg",
      "filename": "artist-technique.jpg",
      "path": "knowledge-base/mediums/painting/application/category/artist-technique.jpg"
    }
  ]
}
```

### 4. Create Image
```bash
cd image-maker
# Put source image in input/ folder
# Convert to optimized JPG:
python3 -c "
from PIL import Image
import os
img = Image.open('input/source.webp').convert('RGB')
for q in [95, 90, 85, 80]:
    img.save('input/0.jpg', 'JPEG', quality=q)
    if os.path.getsize('input/0.jpg') < 2*1024*1024:
        break
"
# Copy to knowledge-base location
cp input/0.jpg ../knowledge-base/mediums/painting/application/category/artist-technique.jpg
```

For animated GIFs (multiple frames):
- Put numbered images in input/ (0.jpg, 1.jpg, etc.)
- Run: `python3 create_gif.py`
- Adjust custom_durations in script as needed

## File Requirements
- **All images under 2MB**
- **Naming:** `{artist}-{technique-or-artwork-slug}.{ext}`
- **Formats:** JPG for stills, GIF for animations, MP4 for video
- **Resolution:** Script auto-optimizes, starts at 1200px width

## Critical Rules
- **NEVER delete JPG/GIF files** from knowledge-base without checking taxonomy-data.json
- Always use `cp`, not `mv` when working with assets
- Preserve source files in `image-maker/input/`
- Use public domain artworks only
- Technique titles describe the TECHNIQUE, not the medium
- Keep entries focused on physical actions and visual effects
- Avoid subject-matter references ("good for landscapes")

## Taxonomy Structure
```
Top Level Groups → Parents → Categories → Subcategories → Methods → Examples
                                                              ↓
                                                         entries[] (conceptual)
                                                         examples[] (artist-analyzed)
```

## Common Tasks
```bash
# Launch browser
cd /Users/robcolvin/ArtSensei/Marcel-Learning-System-master && python3 -m http.server 8080

# Find methods needing examples
grep -B5 '"examples": \[\]' ui/data/taxonomy-data.json | grep '"name"'

# Count entries by category
grep -c '"id":' ui/data/taxonomy-data.json

# Find orphaned images (in knowledge-base but not in JSON)
# Compare: find knowledge-base -name "*.gif" vs grep 'gif' taxonomy-data.json

# Validate JSON syntax
python3 -c "import json; json.load(open('ui/data/taxonomy-data.json'))"
```

## Public Domain Sources
- **Met Museum**: metmuseum.org/art/collection (filter by Public Domain)
- **National Gallery of Art**: nga.gov/collection
- **Art Institute Chicago**: artic.edu/collection
- **Wikimedia Commons**: commons.wikimedia.org
- **Rijksmuseum**: rijksmuseum.nl

## Git Workflow
Simple - just save and push:
```bash
git add -A
git commit -m "Description of changes"
git push
```
No complex branching. Fresh repo as of Jan 2026.

## Marcel Prompt Work App
https://art-sensei-testing.vercel.app/

## Notes
- Browser must be served via HTTP (not file://) for JSON to load
- Firefox preferred over Safari
- eval-app/ has a separate React app (needs `npm install` if used)
- SPACE-ENTRIES-PROMPT.md tracks completion status for space/composition entries
