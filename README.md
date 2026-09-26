# YEAH — Landing Page &amp; Member Portal

Static HTML prototypes for the YEAH Future Talent site and member portal. No build step — open any file directly in a browser, or open the two frame viewers to see mobile and desktop side by side.

| File | Content |
|---|---|
| [`YEAH Landing.html`](https://claire-pornchanokhongth.github.io/yeah-ui/index.html) | **LANDING PAGE** — current version. Hero · 5 Pillars · Activities carousel · Tiers · Journey · Join CTA · Footer. TH/EN toggle in navbar |
| [`YEAH Portal Frames.html`](https://claire-pornchanokhongth.github.io/yeah-ui/YEAH%20Portal%20Frames.html) | **MEMBER LOGIN & PORTAL** (Frame Viewer) — tabs to jump between Login / Registration / Member hub, mobile + desktop side by side |
| [`YEAH Portal Data Contract.md`](YEAH%20Portal%20Data%20Contract.md) | UI ↔ backend data contract for the portal — every field name, validation rule and endpoint the IT team needs |
| [`data/th-institutions.js`](data/th-institutions.js) | Thai school and university lists behind the registration pickers, shared by both portal files, ranked by QS 2027 position, then student numbers, with Thai and English names. Generated from Ministry of Education, OBEC, OVEC and MHESI open data — see its header for sources |
| [`YEAH Design System/`](¡YEAH%20Design%20System/) | Design system source (tokens, components, guidelines) the landing page and portal are built from |

## Older versions

`YEAH Landing.html` and `YEAH Landing v2.html` are earlier drafts, kept for reference. `YEAH Landing v3.html` is current — use that one.

`YEAH Portal Mobile Rocket.html` is the mobile portal with the earlier rocket-launch sign-in transition instead of the key unlock. It is an archive: it predates the email sign-up, the three-way study/work choice and the school pickers, so it no longer matches `YEAH Portal Mobile.html` beyond the transition. One commented line in `YEAH Portal Frames.html` swaps the mobile frame between the two.

## Notes

- Grey blocks are photo placeholders; lorem ipsum / placeholder copy is not final.
- TH is the default language; every screen has a TH/EN toggle in the header. In the portal it flips language on one tap (desktop: flag + TH/EN pill, mobile: flag only).
- The portal reuses the landing page's palette, type and chrome.
