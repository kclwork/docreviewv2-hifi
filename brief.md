# Project Brief — Elle Summary (freemium-doc-review-v1-hifi)

## Project Description
A hi-fi desktop prototype of Elle Summary — an AI-powered document review experience using LegalShield's AI assistant, Elle. Built to match Figma designs as closely as possible in colors, typography, spacing, and interactions.

## Concept
**Elle Summary — Variant 1: Partial Reveal / Curiosity Model**
Users see a teaser of document issues but must provide their email to unlock the full summary.

## Screens & Routes

| Screen | Route | Phase |
|--------|-------|-------|
| Homepage | `/` | Phase 2 |
| Marketing Landing Page | `/get-a-free-document-review` | Phase 3 |
| Upload Screen | `/upload` | Phase 4 |
| Processing State | `/processing` | Phase 5 |
| Partial Results + Email Gate | `/partial-results` | Phase 6 |
| Full Reveal | `/full-reveal` | Phase 7 |

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
- **Phase 1** ✅ — Project setup, shared Nav + Footer, routing scaffold
- **Phase 2** ✅ — Homepage — all sections complete and approved
- **Phase 3** ✅ — Marketing Landing Page — complete and approved
- **Phase 4** ✅ — Upload Screen — complete and approved
- **Phase 5** ✅ — Processing State — complete and approved
- **Phase 6** ✅ — Partial Results + Email Gate — complete and approved
- **Phase 7** ✅ — Full Reveal — complete and approved
- **Phase 8** — GitHub + Vercel Deployment (**DEFERRED** — do not start until explicitly instructed) ← **NEXT**

## Phase 2 — What Was Built
All homepage sections in order:
- Hero: two-column vertical marquee (col 1 scrolls up, col 2 scrolls down), headline, body, purple CTA button
- Stats bar: 4.5M / 22 yrs / $1/day — centered, Instrument Rounded font, separated from hero with border
- "One simple legal solution. Zero hourly rates." — two-column with family-of-4.png image left, FAQ accordion right (first row interactive)
- Awards banner: dark green (`--color-secondary-green`), ABC Otto heading, 4 Forbes badge images at 120px height
- Logo cloud: "FEATURED IN" eyebrow (centered), 5 media logos (centered, grayscale)
- "How we help" carousel: ABC Otto heading, prev/next buttons inline on the right, 4-card view with slide interaction
- "How it works": 3 alternating steps with images
- Testimonial: italic ABC Otto quote, `--color-secondary-cream` background
- Pricing: 3 equal-height cards, Instrument Rounded price figures, purple and secondary CTAs
- FAQ: centered heading + centered Help Center button, first row interactive
- CTA: "Ready to get legal help?" warm background (`--color-neutral-warm-200`), purple button
- Footer: reused from Phase 1

## Phase 2 — Corrections Made During Review
- Stats section: given clear visual separation (border) from hero; content centered; font switched from ABC Otto to Instrument Rounded
- Forbes banner: padded taller (64px), badge images enlarged to 120px, text switched to ABC Otto H5
- Logo cloud: added "FEATURED IN" eyebrow label; logos enlarged to 40px; centered
- "How we help": heading switched from eyebrow/Instrument Rounded to ABC Otto H3; prev/next buttons moved inline with heading on the right
- Pricing cards: price figures switched from ABC Otto to Instrument Rounded; cards set to equal height with `align-items: stretch`
- FAQ: heading and Help Center button changed from left-aligned to center-aligned
- CTA banner: background changed from `--color-neutral-black` (dark) to `--color-neutral-warm-200` (light warm)

## Key Constraints
- Target viewport: 1440px desktop, fixed width, centered — content does not stretch
- Layout margins: 66px left and right on all screens
- All copy pulled directly from hi-fi mockup reference images
- All images pre-supplied in `public/images/` — no placeholder images where real assets exist
- Nav: only "Get a free document review [AI]" is clickable (routes to marketing landing page); hover underlines text; "AI" is a small purple badge inline with the nav link
- Footer: links do not need to work
- File upload accepts PDF and .doc only, opens real file browser
- Processing uses simulated delay — no real API call
- Partial results: 3 visible, 5 blurred; email gate inline (not modal)
- Full reveal: issues section scrollable; bottom CTA fixed to widget bottom
- No GitHub/Vercel until Phase 8

## Phase 3 — What Was Built
- Hero: center-aligned, warm bg (`#F5F4EE`), H2 headline, subtext below (32px gap)
- Elle Document Review Widget: two-column; left has eyebrow "MEET ELLE · YOUR AI ASSISTANT", H3 heading, body copy, 3 purple checkmark trust signals; right has gray card (`#F4F4F5`) with white dashed upload zone, purple circle upload icon, "Upload document" CTA, drag text, accepted formats, legal disclaimer
- FAQ: centered heading + Help Center button, first row interactive only
- Benefits of Elle: two-column with laptop image left, accordion right (first row interactive)
- Pricing: 3-card layout matching homepage (Personal & Family / Small Business / Enterprise)
- Footer: reused from Phase 1
- Selecting a file on this page navigates to `/upload`

## Phase 3 — Corrections Made During Review
- Hero: headline and subcopy order swapped (headline first, subtext below)
- Widget section: background changed from warm to white (clearly separated from hero)
- Spacing between headline and subcopy set to 32px
- Upload card: outer card background changed to `#F4F4F5` (surface/muted gray); inner dashed zone remains white; accepted formats and disclaimer moved outside the dashed zone onto the gray card background; drop shadow removed

## Phase 4 — What Was Built
- Same page layout as Marketing Landing Page (hero, left widget column, FAQ, Benefits, Pricing, Footer)
- Upload widget right column shows the uploaded file confirmed state: dark circle checkmark icon, filename ("Service_Contract_2026.doc") in semibold, muted file size, "Change file" underlined link — all stacked and center-aligned inside the dashed zone
- "Review my document" black button below the dashed zone, centered and auto-width (not full-width)
- Accepted formats and legal disclaimer hidden in this state
- "Change file" opens real file picker; "Review my document" navigates to `/processing`

## Phase 5 — What Was Built
- Same page layout as Marketing Landing Page
- Processing widget: spinning CSS loader, rotating value props (5 phrases cycling every 1.2s), hint text "Usually ~20 seconds · Don't close this window"
- Auto-advances to `/partial-results` after 6 seconds

## Phase 6 — What Was Built
- Same page structure (hero, FAQ, Benefits, Pricing, Footer)
- Widget section rebuilt with custom layout: eyebrow + H3 heading above two columns, tighter gap (24px)
- Left column: warm surface background (`--color-surface-warm-default`), realistic contract text (Wedding Photography Services Agreement with 6 numbered sections), "Preview · page 1 of 12" label, encryption note below column
- Right column: light purple background (`--color-accent-subtle-bg`), "POWERED BY ELLE" header with shield icon, Document Summary section, Issues Found label with count badge (8), 3 visible issue cards, 4th card blurred with fade gradient, inline email gate (headline, subtext, email+arrow input, fine print)
- Email input uses inline arrow submit button (not full-width button); fine print below: "By signing up, you agree to receive emails from LegalShield. View our Privacy Policy."
- Email gate is not sticky — flows naturally at bottom of scrollable panel
- Valid email navigates to `/full-reveal` after 800ms; invalid shows inline error

## Phase 6 — Corrections Made During Review
- Added missing eyebrow "MEET ELLE — YOUR AI ASSISTANT" and H3 "Get your document reviewed" above two-column layout
- Column gap tightened from 80px to 24px
- Left column background changed from white to `--color-surface-warm-default`
- Replaced gray placeholder lines with realistic dummy contract (Wedding Photography Services Agreement)
- Added "Preview · page 1 of 12" and encryption note below left column
- Right column background changed from white to `--color-accent-subtle-bg` (light purple)
- Right panel structure rebuilt: POWERED BY ELLE → Document Summary → Issues Found count → 3 visible cards → 1 blurred card with fade → email gate
- Email input changed from full-width button to inline input+arrow pattern
- Added fine print below email gate
- Email gate confirmed non-sticky (inline scroll)

## Phase 7 — What Was Built
- Same page structure as partial-results (hero, Elle widget section, FAQ, Benefits, Pricing, Footer)
- Widget section rebuilt with same two-column layout: eyebrow + H3 heading above columns, gap: 0 between columns
- Left column: same warm surface background, white inner contract card (max-height 600px, scrollable), "Preview · page 1 of 12" label 24px below card, encryption note below that
- Right column: light purple background, white inner Elle card with POWERED BY ELLE header, Document Summary, Issues Found label + count badge (8), all 8 issue cards fully visible and unblurred, scrollable issues area (max-height 500px)
- "Elle's bottom line" CTA pinned to bottom of right column: label in ABC Otto H6 regular, subcopy in Instrument Rounded paragraph SM regular, black "Subscribe to speak to a lawyer" button (centered) with 16px margin-top — clicking scrolls to pricing section via `useRef` + `scrollIntoView`
- Email gate removed entirely on this screen — replaced by the CTA

## Phase 7 — Corrections Made During Review
- "Elle's bottom line" label changed from Instrument Rounded semibold to ABC Otto H6 (24px, 28.8px line-height, regular weight)
- Subcopy changed from ABC Otto to Instrument Rounded paragraph SM (14px / 21px, regular)
- Black button changed from left-aligned to center-aligned
- 16px margin-top added between subcopy and button
- Phase 6 widget also updated this session: blurred cards expanded from 1 to 5, two-column layout restructured with proper nested containers (outer columns flush, inner white cards for content), email gate repositioned to be pinned to bottom of right column with upward box shadow, column corners rounded (12px), bottom padding added to widget section (64px matching top), email gate headline changed to ABC Otto H6

## Current Status
**Phase 7 complete and approved.** Phase 8 (GitHub + Vercel Deployment) is next — do not start until explicitly instructed.
