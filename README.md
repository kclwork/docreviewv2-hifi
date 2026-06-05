# Elle Summary — Hi-Fi Prototype (Variant 1: Partial Reveal)

LegalShield's AI-powered document review experience. Desktop prototype built to match Figma designs pixel-accurately.

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

> Deployment instructions will be added in Phase 8.

## File Structure

```
freemium-doc-review-v1-hifi/
├── design-tokens.css          # Stratos DS tokens (colors, type, spacing) — do not recreate
├── stratos-components.md      # Component specs — read before building any UI
├── brief.md                   # Project brief — update between sessions
├── README.md
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── fonts/                 # ABC Otto + Instrument Rounded variable fonts
│   └── images/
│       ├── homepage/          # hero/, awards/, aol/, logo-cloud/, how-it-works/, info/
│       ├── marketing-landing-page/
│       └── logo.svg           # LegalShield wordmark + shield mark
├── references/                # Figma reference images (hi-fi + annotations per screen)
└── src/
    ├── main.jsx
    ├── index.css              # Imports design-tokens.css + global resets
    ├── App.jsx                # Router + route definitions
    ├── components/
    │   ├── Nav.jsx / Nav.module.css
    │   ├── Footer.jsx / Footer.module.css
    │   ├── Accordion.jsx / Accordion.module.css
    │   ├── HeroMarquee.jsx / HeroMarquee.module.css
    │   └── HowWeHelpCarousel.jsx / HowWeHelpCarousel.module.css
    └── pages/
        ├── Homepage.jsx / Homepage.module.css         ✅ Phase 2 complete
        ├── MarketingLandingPage.jsx/module.css        ✅ Phase 3 complete
        ├── UploadScreen.jsx / UploadScreen.module.css ✅ Phase 4 complete
        ├── ProcessingState.jsx/module.css             ✅ Phase 5 complete
        ├── PartialResults.jsx / PartialResults.module.css ✅ Phase 6 complete
        ├── FullReveal.jsx / FullReveal.module.css     ✅ Phase 7 complete
        └── PlaceholderPage.module.css
```

## Updating brief.md

At the end of each session, update `brief.md` to reflect:
- Which phases are complete
- What was built in each phase
- Any deviations from the original plan
- Current file structure changes
- What is left to do
