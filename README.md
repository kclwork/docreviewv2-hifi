# Elle Summary — Hi-Fi Prototype (Variant 2: Full Review / Query-Based Action Gate)

LegalShield's AI-powered document review experience. Hi-fi prototype built to match Figma designs pixel-accurately. This repo contains both the **desktop** prototype and a **mobile** prototype.

In Variant 2, the user gets the full Elle review for free with no gate. All issues are visible immediately. The email gate is triggered only when the user submits a question in the Elle chatbox — they must provide their email to receive Elle's answer. The user has 1 free query. After the answer is revealed, they are prompted to subscribe for more.

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

> Repo: https://github.com/kclwork/docreviewv2-hifi
> Live: https://docreviewv2-hifi.vercel.app

## Routes

### Desktop
| Route | Page |
|-------|------|
| `/` | Homepage |
| `/get-a-free-document-review` | Marketing landing page |
| `/upload` | Upload screen |
| `/processing` | Processing state (auto-advances to `/full-review` after 6s) |
| `/full-review` | Full Review + Chatbox (default → email gate → Elle response → minimized) |

### Mobile V2
| Route | Page |
|-------|------|
| `/mobile-v2` | Mobile homepage |
| `/mobile-v2/get-a-free-document-review` | Mobile marketing landing |
| `/mobile-v2/upload` | Mobile upload |
| `/mobile-v2/processing` | Mobile processing (auto-advances to `/mobile-v2/full-review` after 6s) |
| `/mobile-v2/full-review` | Mobile Full Review + Chatbox Drawer (default → email gate → Elle response → minimized via FAB) |

## File Structure

```
freemium-doc-review-v2-hifi/
├── design-tokens.css          # Stratos DS tokens (colors, type, spacing) — do not recreate
├── stratos-components.md      # Component specs — read before building any UI
├── brief.md                   # Project brief — update between sessions
├── README.md
├── vercel.json                # SPA rewrite so subroutes resolve on direct visit
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── fonts/                 # ABC Otto + Instrument Rounded variable fonts
│   └── images/
└── src/
    ├── main.jsx
    ├── index.css              # Imports design-tokens.css + global resets
    ├── App.jsx                # Router (desktop + /mobile-v2/* routes)
    ├── components/
    │   ├── Nav.jsx / Nav.module.css                  # Desktop
    │   ├── Footer.jsx / Footer.module.css            # Desktop
    │   ├── Accordion.jsx / Accordion.module.css      # Desktop
    │   ├── HeroMarquee.jsx / .module.css             # Desktop
    │   ├── HowWeHelpCarousel.jsx / .module.css       # Desktop
    │   └── mobile/
    │       ├── MobileNav.jsx / .module.css
    │       ├── MobileMenuOverlay.jsx / .module.css
    │       ├── MobileFooter.jsx / .module.css
    │       ├── MobileContractModal.jsx / .module.css
    │       ├── MobileFunnelSections.jsx / .module.css
    │       ├── ChatboxDrawer.jsx / .module.css       ✅ V2 mobile (bottom drawer + state machine)
    │       └── ChatboxFAB.jsx / .module.css          ✅ V2 mobile (minimized pill)
    └── pages/
        ├── Homepage.jsx / .module.css                ✅ Desktop (copied from V1)
        ├── MarketingLandingPage.jsx / .module.css    ✅ Desktop (copied from V1)
        ├── UploadScreen.jsx / .module.css            ✅ Desktop (copied from V1)
        ├── ProcessingState.jsx / .module.css         ✅ Desktop (copied from V1)
        ├── FullReview.jsx / .module.css              ✅ Desktop V2 (Phases 6–8)
        └── mobile/
            ├── MobileHomepage.jsx / .module.css
            ├── MobileMktLandingPage.jsx / .module.css
            ├── MobileUpload.jsx / .module.css
            ├── MobileProcessing.jsx / .module.css    # Route-aware destination
            ├── MobilePartialResults.module.css
            ├── MobileFullReveal.jsx / .module.css    # V1 mobile; basis for the V2 page
            └── MobileV2FullReview.jsx / .module.css  ✅ V2 mobile full-review page
```

## Chatbox State Machine

Same `default → email gate → Elle response → minimized` flow on both desktop (`/full-review`) and mobile (`/mobile-v2/full-review`):

```
default ──▶ user submits query ──▶ email gate ──▶ (invalid: stay) ──▶ Elle response
                                                                          │
                                                                          └─ "Subscribe to a plan" → scrolls to pricing
```

Desktop minimizes via the chevron in the chatbox header. Mobile minimizes via the X in the drawer header; the FAB reopens the drawer with conversation state intact (state is lifted to the page, so it survives close/reopen).

## Deployment

Vercel auto-deploys on push to `main` via the Git integration. `vercel.json` rewrites every path to `/index.html` so React Router can resolve subroutes on direct visit (without it, hitting `/mobile-v2` directly returns 404).

## Updating brief.md

At the end of each session, update `brief.md` to reflect:
- Which phases are complete
- What was built in each phase
- Any deviations from the original plan
- Current file structure changes
- What is left to do
