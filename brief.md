# Project Brief — Elle Summary (freemium-doc-review-v2-hifi)

## Project Description
A hi-fi prototype of Elle Summary — an AI-powered document review experience using LegalShield's AI assistant, Elle. Built to match Figma designs as closely as possible in colors, typography, spacing, and interactions. This repo contains both the **desktop** prototype and a **mobile** prototype for Variant 2.

## Concept
**Elle Summary — Variant 2: Full Review / Query-Based Action Gate**
Users get the full Elle document review for free with no gate. All issues are visible immediately. The email gate is triggered only when the user submits a question in the Elle chatbox — they must provide their email to receive Elle's answer. The user has 1 free query. After the answer is revealed, they are prompted to subscribe for more.

## Screens & Routes

### Desktop
| Screen | Route | Status |
|--------|-------|--------|
| Homepage | `/` | ✅ Complete (copied from V1) |
| Marketing Landing Page | `/get-a-free-document-review` | ✅ Complete (copied from V1) |
| Upload Screen | `/upload` | ✅ Complete (copied from V1) |
| Processing State | `/processing` | ✅ Complete (copied from V1; auto-advances to `/full-review` after 6s) |
| Full Review + Chatbox (all states) | `/full-review` | ✅ Complete |

### Mobile V2
| Screen | Route | Status |
|--------|-------|--------|
| Mobile Homepage | `/mobile-v2` | ✅ Reused from V1 mobile |
| Mobile Marketing Landing | `/mobile-v2/get-a-free-document-review` | ✅ Reused from V1 mobile |
| Mobile Upload | `/mobile-v2/upload` | ✅ Reused from V1 mobile |
| Mobile Processing | `/mobile-v2/processing` | ✅ Route-aware — advances to `/mobile-v2/full-review` |
| Mobile Full Review + Chatbox Drawer + FAB | `/mobile-v2/full-review` | ✅ Complete |

Note: Desktop chatbox states (default / email gate / Elle response / minimized) all live within `/full-review`. Mobile chatbox states all live within `/mobile-v2/full-review`. State is managed in React.

## Tech Stack
- React 18 + Vite 5
- React Router DOM v6
- Plain CSS Modules (no Tailwind, no styled-components)
- Design tokens via `design-tokens.css` (imported at root in `src/index.css`)

## Design System
**Stratos DS**
- Tokens: `design-tokens.css` (project root)
- Component specs: `stratos-components.md` (project root)
- Fonts: ABC Otto (`--font-primary`) + Instrument Rounded (`--font-secondary`) in `public/fonts/`
- ABC Otto: headings and display text only
- Instrument Rounded: buttons, labels, UI elements, stats figures, pricing figures
- Never hardcode colors, spacing, or typography — always use CSS variables

## Phase Plan — Desktop
- **Phase 1** ✅ — Project setup, shared Nav + Footer, routing scaffold — copied from V1
- **Phase 2** ✅ — Homepage — copied from V1
- **Phase 3** ✅ — Marketing Landing Page — copied from V1
- **Phase 4** ✅ — Upload Screen — copied from V1
- **Phase 5** ✅ — Processing State — copied from V1
- **Phase 6** ✅ — Full Review + Chatbox (default + query submitted states)
- **Phase 7** ✅ — Email Gate + Elle Response states (centered overlay on blurred chatbox background)
- **Phase 8** ✅ — Minimized Chatbox state + end-to-end flow QA
- **Phase 9** ✅ — GitHub push complete; Vercel handles deployment via Git integration

## Phase Plan — Mobile V2
- **Phases 1–4** ✅ — Mobile homepage, marketing landing, upload, processing reused from V1 mobile; parallel `/mobile-v2/*` routes added pointing to the same page components
- **Phase 5** ✅ — `/mobile-v2/full-review` built by copying `MobileFullReveal` and stripping Elle's bottom line, success banner, and warm-cream section. New `ChatboxDrawer` component built (default state): bottom drawer, slides up via `transform`, rounded top corners, upward shadow, no scrim, page content scrollable behind. Drawer open by default on arrival.
- **Phase 6** ✅ — Chatbox state machine wired (`'default' | 'email-gate' | 'elle-response'`). On query submit, user bubble renders and email gate appears immediately, blurring the conversation behind a centered white card. Invalid email shows inline red border + `ⓘ` error; valid email dismisses the gate and reveals Elle's response. "Subscribe to a plan" link scrolls to pricing via `useRef + scrollIntoView`.
- **Phase 7** ✅ — Minimized state via X button. New `ChatboxFAB` component: dark pill at viewport bottom, purple chat-icon circle, "Chat with Elle" label. Hidden when drawer is open. Tapping reopens drawer with conversation state intact (state lifted to the page so it survives close/reopen).
- **Phase 8** ✅ — End-to-end QA pass: processing → full-review handoff, modal open/close, accordion toggle, issue card expand/collapse, state machine, email validation, FAB visibility + reopen, subscribe scroll, ≥44×44 tap targets, no `:hover` states in mobile CSS, no desktop regressions.
- **Phase 9** ✅ — Pushed to GitHub; `vercel.json` added so SPA subroutes resolve on direct visit; shared mobile screens (`MobileNav`, `MobileMenuOverlay`, `MobileMktLandingPage`, `MobileUpload`) made route-aware so the V2 funnel doesn't leak into V1 paths.

## Deviations from the original plan
1. **No visible "query sent" state.** The original mobile spec listed `default → query sent → email gate → Elle answers → minimized` as five distinct states. The implementation matches desktop V2: query submit transitions directly into `email-gate`, with the user's question bubble rendering beneath the (blurred) gate overlay. Reference screen 06 is documentation of the moment rather than a held state.
2. **Email submit button restyled.** Per a design review against reference 07, the email submit was changed from a filled purple button to a plain dark arrow inline with the input. Drawer also shrinks to 380px in `email-gate` state and the footer (chat input / free-access counter / fine print) is hidden so the gate card sits comfortably.
3. **FAB subtext removed.** Original spec called for a subtext that switched between "Ask a question about your contract" and "View Elle's response". After review the subtext was removed entirely — the FAB shows only "Chat with Elle".
4. **Shared mobile screens are route-aware.** The original brief said "do not modify screens 1–4 or any shared mobile components" but also required the `/mobile-v2/*` funnel to flow end-to-end. The narrowest fix was the same pattern already authorized for `MobileProcessing`: derive the path prefix from `location.pathname` so each screen navigates to the matching V1 or V2 route. No styling or behavior changes — only navigation targets.
5. **`/mobile-v1/*` routes not registered.** This repo's `App.jsx` only registers `/mobile-v2/*` routes. The V1 mobile flow lives in a separate repo. The route-aware fallback to `/mobile-v1` in the shared screens still works correctly when V1 routes are registered elsewhere.
6. **`vercel.json` added.** Without an SPA rewrite, Vercel returned 404 on direct visits to subroutes. The rewrite sends every path to `/index.html` so React Router can resolve.

## Key Constraints
- Desktop target: 1440px, fixed width, centered, 66px L/R margins
- Mobile target: 375px design width, fluid above, 28px L/R margins always
- Mobile minimum tap target: 44×44px on all interactive elements
- No CSS hover states in any mobile CSS — touch interface only
- All copy pulled from the reference images in `references/`
- All images pre-supplied in `public/images/`
- Mobile drawer is fixed bottom, overlays the page (no scrim), upward box-shadow `0 -4px 12px rgba(0,0,0,0.08)`
- Chatbox conversation state is preserved across drawer close/reopen
- Mobile FAB is hidden when drawer is open

## Current File Structure
```
src/
├── App.jsx                       # Routes: desktop + /mobile-v2/*
├── index.css
├── main.jsx
├── components/
│   ├── Nav.jsx / Nav.module.css                      # Desktop
│   ├── Footer.jsx / Footer.module.css                # Desktop
│   ├── Accordion.jsx / Accordion.module.css          # Desktop
│   ├── HeroMarquee.jsx / .module.css                 # Desktop
│   ├── HowWeHelpCarousel.jsx / .module.css           # Desktop
│   └── mobile/
│       ├── MobileNav.jsx / .module.css               # Route-aware logo
│       ├── MobileMenuOverlay.jsx / .module.css       # Route-aware CTA
│       ├── MobileFooter.jsx / .module.css
│       ├── MobileContractModal.jsx / .module.css
│       ├── MobileFunnelSections.jsx / .module.css    # Hero, FAQ, Benefits, Pricing
│       ├── ChatboxDrawer.jsx / .module.css           # NEW — bottom drawer + state machine
│       └── ChatboxFAB.jsx / .module.css              # NEW — minimized pill
└── pages/
    ├── Homepage.jsx / .module.css                    # Desktop
    ├── MarketingLandingPage.jsx / .module.css        # Desktop
    ├── UploadScreen.jsx / .module.css                # Desktop
    ├── ProcessingState.jsx / .module.css             # Desktop
    ├── FullReview.jsx / .module.css                  # Desktop V2 page (Phases 6–8)
    └── mobile/
        ├── MobileHomepage.jsx / .module.css
        ├── MobileMktLandingPage.jsx / .module.css    # Route-aware navigate
        ├── MobileUpload.jsx / .module.css            # Route-aware navigate
        ├── MobileProcessing.jsx / .module.css        # Route-aware destination
        ├── MobilePartialResults.module.css           # Shared widget shell styles
        ├── MobileFullReveal.jsx / .module.css        # V1 mobile page (used as the basis for V2)
        └── MobileV2FullReview.jsx / .module.css      # NEW — V2 mobile full-review page
```

## What's Left to Do
Both desktop and mobile V2 builds are complete. Vercel deployment via Git integration handles redeploys on push.

Possible follow-ups if revisited:
- Wire up `/mobile-v1/*` routes if the V1 flow needs to be exercisable from this repo (currently lives in a separate repo).
- Decide whether to introduce a held "query sent" beat before the email gate appears on mobile, if user research shows the immediate gate transition feels abrupt.
- Audit `.DS_Store` files currently tracked by git; the working tree shows modifications that are intentionally not staged.

## References
- Desktop V2: `references/variant-2/`
- Mobile V2: `references/mobile-v2/` (flow chart + screens 05–09 plus annotations)
- V1 references (for context): `references/variant-1/`

## GitHub & Deployment
- Repo: https://github.com/kclwork/docreviewv2-hifi
- Live: https://docreviewv2-hifi.vercel.app
- Vercel auto-deploys on push to `main` via Git integration
