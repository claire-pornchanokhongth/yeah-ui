# YEAH Design System

**YEAH — Young Entrepreneur Assembly Hub.** A student-run hub for young founders: weekly events, pitch nights, mentor matching and a co-working floor. The audience is Thai university students and recent graduates, so the system is **bilingual by default** (Thai + English) and every screen must read in both.

The brand is loud on purpose: neon pink, yellow, black and white, set in geometric type on hard-edged blocks. It looks like a poster taped to a wall, not a SaaS dashboard.

---

## Sources

| Source | What it gave us |
|---|---|
| `uploads/CI YEAH.pdf` — "CI YEAH", 1 page, Canva, authored by Phantakarn Mangkornngam (25 Aug 2026) | The whole brand: logo lockup, the four-colour palette with hex values, and the four typeface names (TH/ENG headline + sub-head) |
| Google Drive folder linked from the PDF: `https://drive.google.com/drive/folders/1b-bzY4PCrCW_t5T8j0kiVpSPGfqZny_g` | **Not accessible to us.** Labelled "drive logo" — presumably vector logo files and possibly the licensed font binaries. Worth pulling in. |

There was **no codebase, no Figma file, no website, no deck and no product screenshots.** Everything below the CI layer — components, states, motion, layout — is an interpretation derived from the mark's own geometry, and is flagged as such where it matters.

### Extracted assets

- `assets/logo-lockup.png` — mark + "Young Entrepreneur Assembly Hub" tagline, black type, transparent ground (825×298, extracted from the PDF)
- `assets/logo-lockup-knockout.png` — same lockup with the tagline knocked out to white, for black grounds
- `assets/logo-mark.png` — the YEAH glyph alone (825×220)
- `assets/palette-reference.png` — the palette board from the CI sheet
- `assets/fonts/*.woff2` — self-hosted Latin + Thai subsets of Poppins, Noto Sans Thai, Kanit, Chakra Petch

**The logo is bitmap only.** It was lifted from a Canva PDF at 825px wide, so it is fine to about 400px on screen and unusable in print. Please supply the SVG or AI original — see *Open asks*.

---

## Content fundamentals

**Voice.** Plain, warm, a little blunt. YEAH is a room full of students, so the copy sounds like a person who is already inside it inviting you in. It never sells, never hypes, and never uses startup vocabulary as decoration ("synergy", "ecosystem", "unlock", "empower" are all out).

**Person.** "We" for YEAH, "you" for the reader. Never "our users", never "the community" in the third person. *"We reply within a week, and there is no interview."*

**Sentence shape.** Short declaratives. Concrete nouns. A period where a marketing writer would put an exclamation mark. Headlines are allowed one turn — *"Come with an idea. Leave with a team."* — and body copy gets none.

**Specifics beat adjectives.** Always the number, the room, the time. *"320 members, 48 events run, and a Pitch Night every month."* Never *"a thriving community of ambitious founders"*.

**Casing.**
- Headlines: sentence case. Never Title Case, never ALL CAPS except in the display-alt face on posters and event titles.
- Eyebrows, badges, micro-labels, form labels: UPPERCASE with 0.12em tracking. Latin only — **never uppercase Thai** (Thai has no case; letterspacing Thai breaks the diacritic stack).
- Buttons: sentence case. *"Become a member"*, not *"Become A Member"* or *"BECOME A MEMBER"*.
- The brand name is always **YEAH**, all caps, no periods. The expansion is *Young Entrepreneur Assembly Hub*, title case.

**Bilingual copy.** Thai and English carry equal weight; neither is a translation footnote. When both appear in one block, Thai sits first for a Thai-primary audience. Do not mix the two inside a single sentence. Thai body copy takes `--leading-loose` (1.7) rather than 1.5, because of the diacritic stack.

**Emoji: no.** The palette and the mark already carry all the energy the brand needs; emoji make it read as a student club chat. Icons do this job instead (see *Iconography*).

**Numbers and dates.** Latin numerals everywhere, including in Thai copy. Dates as `Thu 12 Sep` in English, `12 ก.ย.` in Thai. Times on a 24-hour clock — `18:00 – 21:00`. Currency as `฿4.2M`.

**Error and empty states.** Say what happened and what to do, in that order, without apology. *"Enter a valid email address."* Not *"Oops! Something went wrong 😅"*.

---

## Visual foundations

**The idea.** The YEAH mark is built from monoline bars and true half-circles in pink and yellow, overlapping in flat opaque colour with no blending. The whole system follows that logic: **flat fills, hard cuts, no gradients, no transparency in brand colour.** Depth comes from a solid offset, never from a blur.

**Colour.** Four brand colours only: `#FE0074` neon pink, `#FED732` yellow, `#FFFFFF`, `#010101`. Tints and shades exist (`--yeah-pink-700`, `--yeah-yellow-100`, …) but are **state colours only** — they never appear in the mark or in a large field. Neutrals are pure greys derived from `#010101`; there is no blue-grey anywhere and **no blue in the system at all** (info toasts are black, not blue).
Approved pairings: pink on white, white on pink, black on yellow, yellow on black, black on white. **Pink on yellow and yellow on white both fail contrast — never use them.** A page runs one dominant ground (usually white) with at most two colour bands; three coloured bands in a row is too much.

**Type.** `--font-display` for headlines (tight `-0.02em` tracking, 1.05 leading), `--font-body` (Poppins) for sub-heads and running text, `--font-thai` (Noto Sans Thai) for Thai, `--font-display-alt` for poster titles, event numbers and stat figures — the squarer, techier face. Scale is a 1.25 major third off 16px. Measure is capped near 60 characters. Display type is set flush left; centred display type is used only inside a coloured capsule.

**Spacing and layout.** 4px base step. Cards pad at 24px, stacks gap 12px, sections gap 48–96px. `--container-max: 1200px` for pages, `--container-narrow: 720px` for forms and long-form reading. Sections are separated by a **2px black rule that runs the full bleed**, not by whitespace alone — the rule is the brand's structural device. The header is sticky at 76px with that same 2px bottom rule; sidebars are sticky, nothing else is fixed.

**Backgrounds.** Flat colour fields, full bleed, edge to edge — white, yellow, pink or black. **No gradients** (the only gradient token in the system is the image scrim), no patterns, no textures, no illustration. Imagery, when it exists, is full-bleed photography of real events and people: warm, bright, unfiltered, no duotone, no grain. There is no illustration library and none should be invented.

**Borders.** `--border-width: 2px` solid black is the default rule on cards, inputs, badges, buttons and section dividers. 3px (`--border-width-thick`) for the active tab marker. 1px hairlines in `--neutral-200` only for rows *inside* an already-bordered container.

**Shadows.** Hard offset blocks only: `2px 2px 0`, `4px 4px 0`, `8px 8px 0`, in black or occasionally pink/yellow. **No soft ambient shadows, no blur radius, no spread.** The one exception is `--shadow-overlay`, used solely on floating layers (dialogs over a scrim) where a block offset would read as a rendering bug.

**Corner radii.** Blocks are square (`--radius-card: 0`); interactive things are fully round (`--radius-button: 999px`, icon buttons and avatars are circles). Inputs are the one mid case at 6px, so they read as editable. **There is no 8px/12px "rounded card" in this system** — a rounded rectangle immediately stops looking like YEAH.

**Cards.** White, yellow, pink, black or sunken grey; square corners; 2px black rule; `--shadow-block`. Interactive cards lift 2px on hover and grow the shadow to 8px. Tones alternate across a grid to build the poster rhythm. Cards nested inside a bordered container drop their own shadow (`shadow="none"`).

**Hover.** Filled controls **lift** — `translate(-2px, -2px)` with the shadow growing from 4px to 8px. Never an opacity change, never a colour lightening. Text links go from `--yeah-pink` to `--yeah-pink-700`. Ghost controls tint their background to `--yeah-yellow-100`.

**Press.** The opposite: `translate(2px, 2px)` and the shadow drops to `none`, so the element looks pushed flat into the page. No scale-down.

**Focus.** A 3px `--yeah-yellow` ring — never the browser blue, never a pink ring on a pink control.

**Disabled.** 45% opacity, everything else unchanged. No grey-out.

**Motion.** 80 / 140 / 220 / 400ms on `cubic-bezier(.2,.8,.2,1)`. Hover and press are 140ms. **No bounce, no spring, no overshoot** — the brand is hard-edged, so the motion is too. Fades are used for tooltips and toasts; transforms for lifts. The single "grow" in the system is the radio dot scaling in. No scroll-triggered animation, no parallax.

**Transparency and blur.** Almost never. Brand colours are always 100% opaque. Transparency appears in exactly two places: the modal scrim (`rgba(1,1,1,.7)` + 8px blur) and `--scrim-bottom`, the protection gradient under type on imagery. Elsewhere, when type must sit over an image, use an opaque **capsule** (a yellow or black block behind the words) rather than a gradient — the capsule is more on-brand.

---

## Iconography

**There is no icon set in the source.** The CI sheet contains the logo and nothing else — no icon font, no sprite, no SVG set, no PNG glyphs.

**Substitution (flagged):** the system uses **Lucide** (`lucide-static@0.460.0`, loaded from jsDelivr) through the `Icon` component. Lucide was chosen because its 2px monoline stroke, square caps and geometric construction are the closest available match to the bars-and-半circles logic of the YEAH mark. Icon SVGs are fetched from the CDN and inlined, so their strokes inherit `currentColor` and they survive screenshot, PDF and PPTX re-renders (a CSS `mask-image` approach does not).

Rules:
- One family only. Never mix Lucide with Material, Font Awesome, or a hand-drawn SVG.
- Sizes: 14–16px inside `sm` controls and metadata rows, 20px default, 24px in headers, 28–32px only as a feature glyph inside a coloured block.
- Icons take `currentColor` by default; a pink icon on white is the accent case.
- **No emoji, ever** — not in UI, not in copy, not in headings.
- **No Unicode characters used as icons** (no ✓ ★ → in text). The one allowed non-alphabetic character in copy is the middle dot `·` as a metadata separator: *"Thu 12 Sep · 18:00 · Room 402"*.
- Never draw a new icon by hand. If Lucide lacks the glyph, pick a different metaphor.

If YEAH has a real icon set, replacing Lucide is a one-line change in `components/core/Icon.jsx`.

---

## Substitutions and open asks

| CI specifies | Shipped | Why |
|---|---|---|
| **Poppins** (ENG sub-head) | Poppins ✅ real | Google Fonts, self-hosted |
| **Noto Sans Thai** (TH) | Noto Sans Thai ✅ real | Google Fonts, self-hosted |
| **Ibrand-Regular** (headline) | **Kanit** ⚠️ substitute | Only a ~1KB glyph subset was embedded in the PDF — not distributable or complete. Kanit is a geometric Thai+Latin display face of similar weight and width. |
| **CroptechRegular** (ENG display alt) | **Chakra Petch** ⚠️ substitute | Same problem. Chakra Petch is the closest squarish techy Thai+Latin face on Google Fonts. |
| Icon set | **Lucide** ⚠️ substitute | None supplied. |
| Logo | bitmap PNG ⚠️ | Extracted from the PDF at 825px. Vector needed. |

**Intentional additions** (not in the CI, added because consumers need them):
- `Icon` — a wrapper for the substituted Lucide set, so swapping icon families later is one file.
- `Logo` — serves the supplied bitmap with the correct variant per background, so nobody re-crops or recolours the mark by hand.
- `Textarea` — the CI implies application forms; Input alone would have forced consumers to hand-roll one.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills front-matter, for use as a downloadable Claude Code skill.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `effects.css`, `motion.css`

**`assets/`** — `logo-lockup.png`, `logo-lockup-knockout.png`, `logo-mark.png`, `palette-reference.png`, `fonts/*.woff2`

**`components/`**
| Group | Components |
|---|---|
| `core/` | Button, IconButton, Icon, Badge, Tag, Card, Logo |
| `forms/` | Input, Textarea, Select, Checkbox, Radio, Switch |
| `navigation/` | Tabs |
| `feedback/` | Dialog, Toast, Tooltip |

Each component ships `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what & when, usage, variants). Each directory has a `*.card.html` specimen.

**`ui_kits/website/`** — five clickable screens for the YEAH public site. See `ui_kits/website/README.md`, and read its **Provenance** note: no product source existed, so these are an interpretation, not a recreation.

**`guidelines/`** — 23 specimen cards feeding the Design System tab, grouped **Colors** (8), **Type** (6), **Spacing** (2), **Brand** (7).

**Not built:** no slide template was supplied, so there are no sample slides. No mobile app or docs surface exists, so there is one UI kit only.
