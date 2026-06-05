# Stratos DS — Component Specs

---

## BUTTONS

All buttons use border-radius: 9999px (full pill shape).
Font family: Instrument Rounded. Font weight: 500.

### Primary (filled purple)
- Default: `--color-action-primary-default` bg, white label
- Hover: `--color-action-primary-hover` bg
- Active: `--color-action-primary-active` bg
- Disabled: `--color-action-disabled` bg, gray label

### Secondary (outlined dark)
- Default: white bg, `--color-neutral-gray-900` border + label
- Hover: `--color-action-secondary-hover` bg, white label
- Active: `--color-action-secondary-active` bg, white label
- Disabled: light gray border + label

### Tertiary (text/ghost)
- Default: no bg, no border, dark label
- Hover: underline on label
- Disabled: `--color-text-disabled` label

### Variants (all types)
- Icon left + label
- Label + trailing arrow icon
- Chip (same states, smaller padding)
- Back nav: chevron left + label
- Forward nav: label + chevron right, underline on hover
- Plus icon only
- Underlined label only

### Sizing
| Size   | Font | Line-Height | Padding V | Padding H |
|--------|------|-------------|-----------|-----------|
| Large  | 16px | 24px        | 16px      | 24px      |
| Medium | 14px | 21px        | 13.5px    | 24px      |
| Chip   | 14px | 29.4px      | 14px      | 16px      |

---

## INPUTS

Border radius: ~8px (rounded rectangle, not pill).

### Text Input
- Default: white bg, `--color-textfield-border-default` border, muted placeholder
- Focus: `--color-textfield-border-focus` (near-black) border, thicker weight
- Disabled: `--color-textfield-disabled-bg` bg, lighter placeholder
- Error: `--color-textfield-border-error` (red) border + red error message below with ⓘ icon

### Input with trailing action (arrow)
Same 4 states, arrow icon right-aligned inside field.

### Select / Dropdown (chevron)
Same 4 states, chevron icon right-aligned inside field.

### Error message pattern
- Color: `--color-status-error`
- Size: Paragraph XS (12px)
- ⓘ icon left of message text
- Appears directly below input

### Radio Buttons
- Default: empty circle, dark label
- Focused: thick black ring
- Selected: filled black center dot
- Disabled: gray circle + label

### Checkboxes
- Default: empty rounded square, dark label
- Focused: thick black border
- Checked: filled black square, white checkmark
- Disabled: gray square + label

---

## EYEBROW LABEL

Standard component — no overrides for this project.
- Font family: Instrument Rounded
- Font size: 16px
- Line height: 24px
- Font weight: 500 (medium)
- All caps

---

## ACCORDION

### FAQ style
- Collapsed: question text + "+" icon right, divider below
- Expanded: question text + "−" icon right, body text below, divider below
- Question: Paragraph LG semibold
- Body: Paragraph Body regular
- Divider: `--color-border-default`

### Link group style (nav/footer)
- Collapsed: eyebrow label + chevron down
- Expanded: label + chevron up, links listed below
- Links: Paragraph SM regular

### Download row
- PDF icon left + label + circle-arrow icon right
- Full-width bordered row
- Desktop: 2-column grid; Mobile: single column

---

## PAGINATION

### Blog (with labels)
- "< Prev" and "Next >" buttons: outlined rounded square (~12px radius)
- Page numbers: same style
- Active page: `--color-primary-purple` border + number color
- Ellipsis for skipped pages

### Gallery (icon only)
- "<" and ">" chevrons only, no labels
- Same rounded square style, more compact

---

## CARDS

Border radius: ~12–16px. Internal padding: `--layout-spacing-md` (24px).

### Blog/Article card (image top)
- Gray image placeholder (16:9 or square)
- Eyebrow tag, H5/H6 heading, Paragraph SM body (2–3 lines)
- Author avatar + name + date at bottom
- White bg, no border

### Article card (image right)
- Text left, image right
- Same content hierarchy, compact

### Pricing card
- Name + short description, large price display
- Primary CTA button full width
- White variant: bordered; Purple variant: `--color-primary-purple` bg, white text

### Testimonial/Review card
- Star rating (`--color-secondary-yellow`)
- Quote body text
- Author name + reviewer count
- White bg, no border

### General rules
- Never hardcode card colors — use token variables
- Placeholder images use gray bg until real assets provided
- Light mode only

---

## ISSUE CARD (project-specific — Elle Summary only)

Used inside the Elle widget to display flagged document issues. Not part of the core Stratos library.

### Layout
- White background
- Light border: `--color-border-default`
- Border radius: ~8px
- Padding: 12px 16px
- Two rows: top row has headline left-aligned and tag pill right-aligned; bottom row has subcopy

### Tag pill
- Border radius: 9999px (full pill)
- Font family: Instrument Rounded
- Font size: 10px
- Line height: 16px
- Font weight: 500 (medium)
- Text: all caps
- No border

#### Tag variants
| Label                  | Background color              | Text color                    |
|------------------------|-------------------------------|-------------------------------|
| NEEDS ATTORNEY REVIEW  | `--color-secondary-yellow`    | `--color-neutral-black`       |
| WORTH CLARIFYING       | `--color-primary-light-purple`| `--color-primary-purple`      |

### Headline
- Font family: Instrument Rounded
- Font size: 12px
- Line height: 18px
- Font weight: 600 (semibold)
- Color: `--color-text-primary`

### Subcopy
- Font family: Instrument Rounded
- Font size: 12px
- Line height: 18px
- Font weight: 400 (regular)
- Color: `--color-text-primary`

### Blurred state (partial results screen)
- Apply `filter: blur(4px)` to cards that are behind the email gate
- Do not remove or reorder blurred cards — they remain in the DOM, just visually obscured
