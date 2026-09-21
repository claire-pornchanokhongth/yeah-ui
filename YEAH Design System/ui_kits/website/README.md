# UI kit — YEAH website

Five clickable screens for the YEAH public site: **Home → Events → Event detail → Members → Join**.
Open `index.html`; the header nav and every card, button and dialog are wired.

| File | Surface |
|---|---|
| `SiteChrome.jsx` | Sticky header (mark + nav + CTA) and black footer |
| `HomeScreen.jsx` | Hero, yellow stats strip, event grid, black "how it works" band, pink CTA |
| `EventsScreen.jsx` | Filter sidebar (tags, search, host CTA) + date-block event rows |
| `EventDetailScreen.jsx` | Black hero, sticky detail card, run-of-show table, registration Dialog + success Toast |
| `MembersScreen.jsx` | Directory with search/filters and initial-avatar member cards |
| `JoinScreen.jsx` | Three-step membership application with progress bar |
| `data.js` | Fake events, members and stats on `window.YEAH_DATA` |

## Provenance — read this before treating the layouts as canon

The supplied source (`uploads/CI YEAH.pdf`) is a one-page corporate-identity sheet: **logo, four colours, four font names.**
There was **no product, no website, no Figma file and no codebase**. These screens are therefore an *interpretation* built strictly from the CI's colours, type and the geometry of the mark — not a recreation of an existing YEAH product.

Every visual decision that goes beyond the CI (square cards, 2px black rules, hard block shadows, pill buttons, the pink/yellow/black alternation) is documented in the root `readme.md` under **Visual foundations**. If YEAH already has a live site, replace these screens with recreations of it.

All copy is placeholder written in the brand's voice; all names, numbers and dates are invented.
