# Elle Summary — Hi-Fi Prototype (Variant 2: Full Review / Query-Based Action Gate)

LegalShield's AI-powered document review experience. Desktop prototype built to match Figma designs pixel-accurately.

In Variant 2, the user gets the full Elle review for free with no gate. All issues are visible immediately. The email gate is triggered only when the user submits a question in the Elle chatbox — they must provide their email to receive Elle's answer. The user has 1 free query. After the answer is revealed, they are prompted to subscribe for more.

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

> Repo: https://github.com/kclwork/docreviewv2-hifi

## Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/get-a-free-document-review` | Marketing landing page |
| `/upload` | Upload screen |
| `/processing` | Processing state (auto-advances to `/full-review` after 6s) |
| `/full-review` | Full Review + Chatbox (default → query submitted → email gate → Elle response → minimized) |

## File Structure

```
freemium-doc-review-v2-hifi/
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
│       ├── homepage/
│       ├── marketing-landing-page/
│       └── logo.svg
├── references/
│   ├── variant-1/             # V1 references (for context only)
│   └── variant-2/             # V2 flow chart + screen annotations
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
        ├── Homepage.jsx / Homepage.module.css         ✅ Phase 2 (copied from V1)
        ├── MarketingLandingPage.jsx / .module.css     ✅ Phase 3 (copied from V1)
        ├── UploadScreen.jsx / UploadScreen.module.css ✅ Phase 4 (copied from V1)
        ├── ProcessingState.jsx / .module.css          ✅ Phase 5 (copied from V1; auto-advances to /full-review)
        └── FullReview.jsx / FullReview.module.css     ✅ Phases 6–8 (NEW in V2)
```

## Chatbox State Machine (on `/full-review`)

```
default ──▶ query submitted ──▶ email gate ──▶ (invalid: stay) ──▶ Elle response
                                                                       │
                                                                       └─ "Subscribe to a plan" → scroll to pricing
```

Minimize/expand chevron in the chatbox header is independent of the state above — clicking it collapses or restores the chatbox to its current state. Widget height is locked at 844px across both expanded and minimized chatbox states.

## Updating brief.md

At the end of each session, update `brief.md` to reflect:
- Which phases are complete
- What was built in each phase
- Any deviations from the original plan
- Current file structure changes
- What is left to do
