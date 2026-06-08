# Project Brief — Elle Summary (freemium-doc-review-v2-hifi)

## Project Description
A hi-fi desktop prototype of Elle Summary — an AI-powered document review experience using LegalShield's AI assistant, Elle. Built to match Figma designs as closely as possible in colors, typography, spacing, and interactions.

## Concept
**Elle Summary — Variant 2: Full Review / Query-Based Action Gate**
Users get the full Elle document review for free with no gate. All issues are visible immediately. The email gate is triggered only when the user submits a question in the Elle chatbox — they must provide their email to receive Elle's answer. The user has 1 free query. After the answer is revealed, they are prompted to subscribe for more.

## Screens & Routes

| Screen | Route | Phase | Status |
|--------|-------|-------|--------|
| Homepage | `/` | Phase 2 | ✅ Complete — copied from V1, do not touch |
| Marketing Landing Page | `/get-a-free-document-review` | Phase 3 | ✅ Complete — copied from V1, do not touch |
| Upload Screen | `/upload` | Phase 4 | ✅ Complete — copied from V1, do not touch |
| Processing State | `/processing` | Phase 5 | ✅ Complete — copied from V1, do not touch |
| Full Review + Chatbox | `/full-review` | Phase 6 | ✅ Complete |
| Query Submitted | `/full-review` (state) | Phase 6 | ✅ Complete |
| Email Gate | `/full-review` (state) | Phase 7 | ✅ Complete |
| Elle Response | `/full-review` (state) | Phase 7 | ✅ Complete |
| Minimized Chatbox | `/full-review` (state) | Phase 8 | ✅ Complete |

Note: Screens 6–9 are all states within the same `/full-review` route, not separate pages. State is managed in React.

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

## Phase Plan
- **Phase 1** ✅ — Project setup, shared Nav + Footer, routing scaffold — copied from V1
- **Phase 2** ✅ — Homepage — complete and approved, copied from V1, do not modify
- **Phase 3** ✅ — Marketing Landing Page — complete and approved, copied from V1, do not modify
- **Phase 4** ✅ — Upload Screen — complete and approved, copied from V1, do not modify
- **Phase 5** ✅ — Processing State — complete and approved, copied from V1, do not modify
- **Phase 6** ✅ — Full Review + Chatbox (default + query submitted states)
- **Phase 7** ✅ — Email Gate + Elle Response states (centered overlay on blurred chatbox background)
- **Phase 8** ✅ — Minimized Chatbox state + end-to-end flow QA (widget height locked across expand/collapse)
- **Phase 9** 🚀 — GitHub push complete; Vercel deployment handled manually

## Key Constraint — Reuse the V1 Widget Shell
The Elle widget (two-column layout) was already built in Variant 1. For all new screens in this variant, reuse that widget shell as the base. Do not rebuild the two-column layout from scratch. The existing structure includes:
- Outer wrapper: two columns, 0px gap, flush edges
- Left column: `--color-surface-warm-default` background, inner white contract card (`flex: 1`), "Preview · page 1 of 12" label 24px below card, encryption note below that
- Right column: `--color-accent-subtle-bg` (light purple) background, inner white Elle content card
- Widget section: eyebrow "MEET ELLE — YOUR AI ASSISTANT" + H3 "Get your document reviewed" above columns

Changes for V2:
- Left column: document is NOT blurred — fully readable, scrollable if content exceeds column height
- Right column: ALL issues are visible, nothing blurred — user can scroll through all issues
- Right column: chatbox is overlaid and pinned to the bottom of the right column content area (not the viewport)
- Email gate does NOT appear on page load — it only appears after the user submits a question in the chatbox

## Phase 6 — What to Build

### Screen: Full Review + Chatbox (default state)
This is the first screen the user sees after processing. Reuse the V1 widget shell with these changes:

**Left column:**
- Same warm surface background, white inner contract card
- Contract text is fully readable (not blurred)
- Scrollbar appears if contract text exceeds column height
- "Preview · page 1 of 12" label 24px below card, encryption note below that

**Right column:**
- Same light purple background, white inner Elle content card
- Structure from top to bottom: POWERED BY ELLE header → Document Summary → Issues Found label + count badge (8) → all 8 issue cards fully visible and scrollable
- No blurred cards, no email gate on this state
- Chatbox overlaid and pinned to the bottom of the right column content area:
  - Chatbox header: "Chat with Elle" label + up chevron icon (clicking chevron minimizes the chatbox)
  - Default message from Elle: "Hi! I can help you review and understand your document. Ask me about specific clauses, rights, or anything you're unsure about!"
  - Text input: placeholder "Ask a question about your contract" + arrow submit button
  - Below input: "Free Access: You have **1 query** available." in small text
  - Below that: "Your documents are securely encrypted. This answer was generated by AI and is for informational purposes only. It does not constitute legal advice."
  - Chatbox has white background, top border, upward box shadow
  - User can still scroll through the issues section above when the chatbox is active

### Screen: Query Submitted (state change, same route)
Triggered when user types a question and hits submit:
- User's question appears in the chatbox as a sent message (right-aligned bubble)
- Input becomes disabled
- Free query count updates to: "Free Access: You have **0 queries** available."
- No Elle response yet — that comes after email is submitted (Phase 7)

## Phase 7 — What to Build

### Screen: Email Gate (state change, same route)
Triggered immediately after user submits a query:
- Email gate overlay appears inside the chatbox content area (overlays the chatbox, not the full page)
- Headline: "Elle's got your answer."
- Subtext: "Enter your email and Elle will walk you through what this means for you."
- Email input with inline arrow submit button
- Fine print: "By signing up, you agree to receive emails from LegalShield. View our Privacy Policy"
- Accept only valid emails — show inline error for invalid input
- Chatbox header ("Chat with Elle" + chevron) still visible above the overlay

### Screen: Elle Response (state change, same route)
Triggered after valid email is submitted:
- Email gate disappears
- Elle's answer appears in the chatbox as a response message
- Dummy response copy: "I've reviewed your wedding contract and found..." followed by a short plain-language explanation
- Below Elle's response: "Free Access: You have **0 queries** available. Subscribe to a plan to get unlimited queries."
- "Subscribe to a plan" is a text link that scrolls the user to the pricing section on the page
- Input remains disabled — user cannot submit another question

## Phase 8 — What to Build

### Screen: Minimized Chatbox (state change, same route)
Triggered when user clicks the up chevron in the chatbox header:
- Chatbox collapses to just the header bar ("Chat with Elle" label + down chevron)
- Issues section in the right column is fully visible and scrollable
- Clicking the down chevron re-expands the chatbox to its previous state

## Key Constraints
- Target viewport: 1440px desktop, fixed width, centered — content does not stretch
- Layout margins: 66px left and right on all screens
- All copy pulled directly from hi-fi mockup reference images in `references/variant-2/`
- All images pre-supplied in `public/images/` — no placeholder images where real assets exist
- Nav: only "Get a free document review [AI]" is clickable (routes to marketing landing page)
- Footer: links do not need to work
- Processing auto-advances to `/full-review` after 6 seconds (update from V1's `/partial-results`)
- Chatbox is pinned to the bottom of the right column content area — NOT the viewport
- Email gate appears inside the chatbox only — NOT a full-page modal
- Do not rebuild the two-column widget from scratch — reuse and extend the existing V1 shell
- No GitHub/Vercel until Phase 9
- Do not guess on design decisions — ask first
- Do not proceed past a phase without approval

## References
All V2 reference files are in `references/variant-2/`:
- `Variant-2-Flow-Chart.png` — read this first to understand the full flow
- `05-full-reveal-chatbox.png` + `05-full-reveal-chatbox-annotation.png` — Full Review + Chatbox default state
- `06-query-submitted.png` + `06-query-submitted-annotation.png` — Query Submitted state
- `07-email-gate.png` + `07-email-gate-annotation.png` — Email Gate state
- `08-elle-response.png` + `08-elle-response-annotation.png` — Elle Response state
- `09-minimized-chatbox.png` — Minimized Chatbox state

V1 reference files are in `references/variant-1/` — for reference only, do not use as build targets.

## Current Status
**All build phases complete (1–8). Phase 9: pushed to GitHub at https://github.com/kclwork/docreviewv2-hifi; Vercel deployment is handled manually.**

## Implementation notes (V2 specifics)

### Chatbox
- Fixed `height: 335px` when expanded; auto when minimized — keeps a constant footprint across default / query submitted / email gate / Elle response.
- States managed in React local state (`step`, `submittedQuery`, `minimized`, `email`, `emailError`).
- Auto-scroll-to-bottom on new bubbles via `useRef` on messages container + `useEffect`.

### Email gate overlay
- Rendered as an absolute-positioned overlay inside the chatbox content area (below the header).
- Underlying chatbox content gets `filter: blur(4px)` + `pointer-events: none`; overlay container uses flex centering for true horizontal + vertical alignment.
- Inline email validation against `^[^\s@]+@[^\s@]+\.[^\s@]+$` — invalid input gets red border + ⓘ error message that clears on edit.

### Right column height stabilization
- Minimized `.elleBody` `max-height` is 705px (vs. 420px default) — chatbox shrinks by 285px, issues area grows by 285px, so the widget's total height stays at 844px across both states.

### Routing
- V1 routes (`/partial-results`, `/full-reveal`) and pages removed.
- `/processing` auto-advances to `/full-review` after 6s.
- "Subscribe to a plan" link in Elle response state scrolls to pricing section via `useRef` + `scrollIntoView({ behavior: 'smooth' })`.

## File structure
```
src/
├── App.jsx                       # Routes (Phase 6 cleanup applied)
├── components/
│   ├── Nav.jsx / Nav.module.css
│   ├── Footer.jsx / Footer.module.css
│   ├── Accordion.jsx / Accordion.module.css
│   ├── HeroMarquee.jsx / .module.css
│   └── HowWeHelpCarousel.jsx / .module.css
└── pages/
    ├── Homepage.jsx / .module.css
    ├── MarketingLandingPage.jsx / .module.css
    ├── UploadScreen.jsx / .module.css
    ├── ProcessingState.jsx / .module.css
    └── FullReview.jsx / .module.css    # NEW in V2 (Phases 6–8)
```