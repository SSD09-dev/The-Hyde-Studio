# THE HYDE STUDIO — Design System Guidelines

**Version:** 1.0  
**Status:** Website foundation  
**Brand direction:** Monochrome clarity + one high-energy accent  
**Design reference:** Google Material Design 3, including the M3 Expressive evolution

---

## 1. Design intent

### The feeling

**Bold, precise, curious, human, and quietly experimental.**

The supplied wordmark is geometric, heavy, and highly legible. The website should carry that confidence through typography, spacing, and strong light/dark compositions. It should not compete with the mark by adding multiple saturated colours, gradients, decorative glass effects, or constant animation.

### Experience principles

1. **Clarity before spectacle.** A visitor should understand what Hyde does before noticing the animation.
2. **Show the work.** Client projects and the process behind them are the strongest proof.
3. **One accent, used with intent.** Colour identifies an important action or state; it is not decoration for every section.
4. **Make complexity feel approachable.** Explain design, technology, and marketing in plain language.
5. **Design for the next step.** Every section should help a visitor understand, trust, or contact the studio.

## 2. Material 3 adaptation

Google identifies Material 3 as its current open-source design system, and describes M3 Expressive as an expansion of Material 3 with research-backed updates to theming, components, motion, and typography. Its foundations are useful here: semantic colour roles, a deliberate type scale, shape, adaptive layout, clear interaction states, and accessibility.

**How Hyde should apply it:**

- Use semantic roles such as `primary`, `on-primary`, `surface`, `on-surface`, `outline`, and `inverse-surface` rather than scattering raw hex values through components.
- Keep typography and shape consistent across the full experience.
- Use responsive, content-led layouts instead of shrinking desktop sections onto mobile.
- Provide visible hover, pressed, focus, and disabled states.
- Borrow the expressive principle of using colour, size, shape, and motion to direct attention — but keep the total visual language restrained.
- Do not copy Android app bars, floating action buttons, or mobile component patterns where they do not suit a desktop-first studio portfolio.

The website should feel like Hyde, not like a Material component showcase.

## 3. Logo system

Two supplied variants were provided:

- **Black wordmark:** use on white or light neutral surfaces.
- **White wordmark:** use on black or dark surfaces.

Transparent web-ready exports are in `assets/`. The originals remain untouched in `assets/originals/`.

### Rules

- Preserve the aspect ratio. Never stretch, skew, rotate, or redraw the wordmark.
- Do not add outlines, shadows, gradients, strokes, or effects to the logo.
- Do not place the black logo on a black surface or the white logo on a white surface.
- Keep clear space around the wordmark at least equal to the height of the small word “THE” in the supplied lockup.
- In the header, use a restrained width (typically 112–152 CSS px on desktop, adjusted after visual review). Do not use the full square artwork as a tiny favicon.
- Create a separate favicon/monogram only if the studio approves a distinct mark. Do not crop an arbitrary fragment of the wordmark and call it a logo.
- The original square artwork can be used as a launch graphic or social tile; use the transparent exports for regular website placement.

## 4. Colour system

### Brand palette

The brand remains black and white first. The only chromatic accent is **Hyde Volt**.

| Token | Hex | Role |
|---|---:|---|
| Ink | `#090909` | Main dark surface and primary text |
| White | `#FFFFFF` | Main light surface and inverse text |
| Hyde Volt | `#C7F36B` | Signature accent, high-emphasis CTA on dark or black text on Volt |
| Volt Deep | `#425C16` | Accessible accent tone for links/actions on white |
| Volt Soft | `#EAF6C8` | Quiet accent container on light surfaces |
| Neutral 50 | `#F7F8F4` | Light surface tint |
| Neutral 100 | `#ECEEE8` | Light container / divider grouping |
| Neutral 200 | `#D8DBD1` | Borders and separators |
| Neutral 500 | `#777C71` | Non-text icon and outline use; verify contrast per context |
| Neutral 700 | `#575B52` | Secondary text on white |
| Neutral 900 | `#20221E` | Strong neutral surface/text |
| Dark 800 | `#171817` | Dark surface container |
| Dark 700 | `#242622` | Raised dark surface |

The neutrals are tonal values of black and white, not additional brand hues. Keep UI accents within the Volt hue family.

### Semantic mapping — light theme

| Material-style role | Value | Use |
|---|---:|---|
| `primary` | `#425C16` | Links and strong actions on light surfaces |
| `on-primary` | `#FFFFFF` | Text/icons on primary |
| `primary-container` | `#EAF6C8` | Soft highlight or selected container |
| `on-primary-container` | `#20221E` | Text on primary container |
| `secondary` | `#575B52` | Quiet secondary UI |
| `on-secondary` | `#FFFFFF` | Text on secondary |
| `background` | `#FFFFFF` | Main page background |
| `surface` | `#FFFFFF` | Cards and navigation surfaces |
| `surface-container-low` | `#F7F8F4` | Alternating section background |
| `surface-container` | `#ECEEE8` | Grouped surface |
| `on-surface` | `#090909` | Main text |
| `on-surface-variant` | `#575B52` | Secondary text |
| `outline` | `#777C71` | Control outline; check against its actual surface |
| `outline-variant` | `#D8DBD1` | Low-emphasis divider |
| `inverse-surface` | `#20221E` | Dark inverse section |
| `inverse-on-surface` | `#FFFFFF` | Text on inverse surface |
| `inverse-primary` | `#C7F36B` | Accent inside dark inverse surfaces |

### Semantic mapping — dark theme

| Material-style role | Value | Use |
|---|---:|---|
| `primary` | `#C7F36B` | Primary action/accent on dark surfaces |
| `on-primary` | `#090909` | Text/icons on Volt |
| `primary-container` | `#344516` | Selected/tonal dark container |
| `on-primary-container` | `#EAF6C8` | Text on primary container |
| `secondary` | `#BFC2B7` | Secondary neutral emphasis |
| `on-secondary` | `#171817` | Text on secondary |
| `background` | `#090909` | Main dark background |
| `surface` | `#111210` | Cards and navigation |
| `surface-container-low` | `#171817` | Low raised section |
| `surface-container` | `#20221E` | Grouped surface |
| `surface-container-high` | `#292B26` | High raised surface |
| `on-surface` | `#FFFFFF` | Main text |
| `on-surface-variant` | `#BFC2B7` | Secondary text |
| `outline` | `#909588` | Control outline; check against its actual surface |
| `outline-variant` | `#44483F` | Low-emphasis divider |
| `inverse-surface` | `#F7F8F4` | Light inverse section |
| `inverse-on-surface` | `#090909` | Text on inverse surface |
| `inverse-primary` | `#425C16` | Accent inside light inverse surfaces |

### Colour usage ratio

As a starting visual balance, aim for approximately:

- **80–90%** black, white, and neutral surfaces
- **5–15%** project photography, screenshots, and other meaningful content imagery
- **2–5%** Hyde Volt accents

This is a visual guideline, not a measured requirement. A lime full-bleed section should be rare. Prefer a small accent bar, marker, active state, badge, underline, or primary CTA.

### Contrast rules

- `#C7F36B` with `#090909` has approximately **15.6:1** contrast.
- `#425C16` with `#FFFFFF` has approximately **7.6:1** contrast.
- Do **not** use white text on Hyde Volt; that pairing has insufficient contrast.
- Do **not** use Hyde Volt as small body text on white; that pairing has insufficient contrast.
- Use black text on Volt buttons. Use Volt Deep for text links on white backgrounds.
- Maintain at least 4.5:1 for normal text and 3:1 for large text and meaningful UI boundaries, following WCAG 2.2 AA guidance.
- Never use colour as the only signal. Pair selected/error/status states with labels, icons, or shape changes.

Contrast values are calculated from the specified sRGB hex values. Re-check every final foreground/background pairing after implementation, including hover and disabled states.

## 5. Typography

### Typeface recommendation

- **Display and headings:** Space Grotesk, weights 600–700.
- **Body, navigation, forms, and utility text:** Inter, weights 400–600.
- **Logo:** always use the supplied artwork; never recreate it with a typeface.

Both are available through Google Fonts. If the build needs to minimise font requests, use Inter alone and reserve Space Grotesk for display headings.

### Type roles

| Role | Desktop size | Mobile size | Weight | Line height |
|---|---:|---:|---:|---:|
| Hero display | 72–104 px | 48–64 px | 600–700 | 0.98–1.05 |
| H1 | 56–72 px | 40–52 px | 600–700 | 1.02–1.1 |
| H2 | 40–52 px | 32–40 px | 600–700 | 1.08–1.15 |
| H3 | 28–36 px | 24–30 px | 600 | 1.15–1.2 |
| H4 | 20–24 px | 20–22 px | 600 | 1.2 |
| Body large | 18–20 px | 17–18 px | 400–500 | 1.5–1.65 |
| Body | 16–18 px | 16 px | 400 | 1.5–1.65 |
| Small | 14 px | 14 px | 400–500 | 1.45–1.55 |
| Label / eyebrow | 12–13 px | 12–13 px | 600 | 1.3 |

Use `clamp()` for display sizes and `rem` for body text. Do not set body copy below 16 CSS px on the main website. Keep long-form text around 60–75 characters per line. Use sentence case for headings, labels, and buttons; avoid all-caps paragraphs.

### Typography behaviour

- Use tight tracking only on large display headlines.
- Keep body text at normal or slightly open letter spacing.
- Use bold weights for hierarchy, not random font-size changes.
- Avoid very long all-caps nav labels.
- Do not justify paragraphs.
- Allow text to wrap naturally; never clip important text to preserve a layout.

## 6. Layout and responsive grid

### Desktop grid

- Max content width: **1,280 px**.
- 12-column grid.
- Desktop side margin: 64–80 px, constrained by the max-width container.
- Column gap: 24 px.
- Section spacing: 112–144 px on wide screens.

### Tablet grid

- 8-column grid.
- Side margin: 32–40 px.
- Column gap: 20 px.
- Section spacing: 80–104 px.

### Mobile grid

- 4-column grid.
- Side margin: 20–24 px.
- Column gap: 12–16 px.
- Section spacing: 64–80 px.
- Stack card layouts. Keep important calls to action visible and easy to tap.

### Suggested responsive breakpoints

These are Hyde website implementation starting points, not a claim that every M3 component uses the same CSS breakpoints:

| Range | Layout behaviour |
|---|---|
| 0–599 px | Compact: single column, stacked navigation, large tap areas |
| 600–839 px | Medium: two-column opportunities, condensed navigation |
| 840–1199 px | Expanded: desktop navigation, 8–12 column compositions |
| 1200–1599 px | Large: full 12-column layout and generous whitespace |
| 1600 px and above | Extra-large: keep content bounded; do not stretch paragraphs across the screen |

Use content-driven breakpoints when a component needs to switch earlier or later.

## 7. Spacing system

Use a 4 px base unit. Prefer the defined scale rather than one-off values.

| Token | Value | Common use |
|---|---:|---|
| `space-1` | 4 px | Icon/text micro gap |
| `space-2` | 8 px | Tight internal gap |
| `space-3` | 12 px | Compact controls |
| `space-4` | 16 px | Standard control/card gap |
| `space-6` | 24 px | Card padding and grid gap |
| `space-8` | 32 px | Component group spacing |
| `space-12` | 48 px | Section subgroups |
| `space-16` | 64 px | Mobile section spacing |
| `space-24` | 96 px | Desktop section spacing |
| `space-32` | 128 px | Major editorial section spacing |

Whitespace is a core part of the visual identity. Do not fill every empty area with a card, icon, label, or floating decoration.

## 8. Shape and surfaces

The logo is bold and geometric. Pair it with controlled rounded shapes rather than excessive pill buttons and bubbly cards.

| Token | Radius | Use |
|---|---:|---|
| `radius-xs` | 4 px | Small tags and compact UI |
| `radius-sm` | 8 px | Inputs and small controls |
| `radius-md` | 12 px | Buttons and standard cards |
| `radius-lg` | 20 px | Large project panels |
| `radius-xl` | 28 px | Featured media containers |
| `radius-full` | 999 px | Status pills only |

- Use a thin neutral border before adding a shadow.
- Avoid glassmorphism, glossy gradients, and heavy neumorphic shadows.
- A card should group related information, not merely wrap every piece of content.
- Project thumbnails can have a larger radius than text-only utility panels.

## 9. Components

### Navigation

- Desktop: logo left, concise text navigation right, one clear contact action.
- Mobile: compact menu with a visible and keyboard-operable open/close control.
- Use a solid or subtly translucent surface only if contrast remains reliable over the content beneath it.
- Keep the header height stable; avoid scroll-jacking.

### Buttons

| Variant | Appearance | Use |
|---|---|---|
| Primary | Volt fill, Ink text | Main action on dark or light surface |
| Secondary | Transparent/white, Ink text, 1 px border | Lower-priority action |
| Inverse primary | Ink fill, white text | Main action on Volt or light accent container when needed |
| Text | No filled container; Volt Deep on light, Volt on dark | Inline navigation/action |

- Minimum visual height: 48 px.
- Use a clear label with a verb: “Start a project”, “View the work”, “Send an enquiry”.
- Add an arrow only when it communicates navigation.
- Do not make the whole site look like a stack of pill buttons.

### Project cards

Each card should show:

1. Project name and concise category.
2. One sentence describing the challenge or product.
3. Hyde’s role or contribution.
4. A strong, approved visual.
5. A clear “View case study” action when a full story exists.

Separate client work from self-initiated concepts. Do not label a concept as a shipped client product.

### Capability cards

Use concise capability headings and explain the problem Hyde helps solve. Avoid long lists of software tools as the main content.

### Forms

- Label every field visibly.
- Use text labels in addition to placeholders.
- Provide clear success, error, and loading states.
- Preserve entered values after validation errors.
- Use an accessible, descriptive submit label.
- Add a short privacy note and only collect information that the team needs to respond.

### Badges and chips

Use only for meaningful metadata such as “Client project”, “Live”, or a project category. Do not use decorative badges on every heading. A “Live” label must refer to a product that is actually publicly accessible.

## 10. Motion and interaction

Use motion to explain a change, maintain continuity, or give feedback — not to prove that the site is futuristic.

| Motion | Starting duration | Use |
|---|---:|---|
| Hover/press feedback | 120–180 ms | Buttons, links, cards |
| Small layout transition | 180–260 ms | Menu, accordion, tabs |
| Section entrance | 300–450 ms | Only when it helps establish hierarchy |
| Hero/logo moment | Under 1.2 s | Optional, skippable, never blocks access to content |

- Use a calm ease-out curve for entrances and a fast ease-in for exits.
- Prefer small shifts (2–8 px), opacity, and scale changes under 1.02.
- Do not animate every section as the visitor scrolls.
- Avoid a custom cursor that replaces the system cursor.
- Avoid autoplay audio and large background video.
- The page must remain fully usable if animation fails or is disabled.
- Respect `prefers-reduced-motion: reduce`.

## 11. Imagery and art direction

- Prioritise real project interfaces, product photography, workshop/process photos, and team-created visuals.
- Use one image treatment consistently for project cards.
- Show the real product, not only a device mockup around a tiny unreadable screenshot.
- Use captions to explain the image where context matters.
- Avoid random AI-generated abstract backgrounds, generic office stock photos, and visual assets that imply work the team did not do.
- Compress images and use responsive sources (`srcset`/`sizes` or framework equivalents).

## 12. Accessibility and quality bar

Target **WCAG 2.2 Level AA** for the website.

- Normal text contrast: at least 4.5:1.
- Large text contrast: at least 3:1.
- Non-text UI indicators and focus boundaries: at least 3:1 against adjacent colours where required.
- All functionality must work using a keyboard.
- Focus must be clearly visible and not hidden behind sticky UI.
- Use semantic landmarks, a logical heading order, descriptive link text, form labels, and alt text for meaningful images.
- Decorative images should use empty alt text (`alt=""`).
- Support zoom/reflow and text resizing without loss of content.
- Do not rely on colour alone to communicate status.
- Respect reduced-motion preferences.
- Check mobile target sizes and spacing; aim for at least 44–48 px controls.

## 13. Content voice

**Voice:** direct, thoughtful, curious, confident, collaborative.

Write like a small team that knows its craft and is comfortable explaining it.

**Prefer:**
- “We help turn early ideas into working digital products.”
- “Here’s what we made, why we made it, and what changed.”
- “Work with us” / “Start a conversation”.

**Avoid:**
- “We are a leading world-class agency.”
- “Revolutionary, disruptive, next-gen solutions” without evidence.
- Unverifiable claims such as “trusted by the world’s biggest brands”.
- Dense jargon that makes a prospective client work to understand the offer.

## 14. Do / don’t summary

| Do | Don’t |
|---|---|
| Use black, white, and one Volt accent | Add multiple bright accent colours |
| Use strong typography and whitespace | Fill the page with floating cards |
| Show real, approved work | Invent clients, testimonials, or impact numbers |
| Use semantic tokens and responsive layouts | Hardcode unrelated values in every component |
| Use motion to clarify feedback | Make every element float, glow, or scroll-animate |
| Keep the logo untouched | Rebuild or distort the wordmark |
| Test contrast and keyboard flow | Assume a beautiful mockup is automatically accessible |

## 15. Reference links

These sources informed the system adaptation. The implementation values in this guide are Hyde-specific decisions, not values copied from Google.

- [Material Design 3 — Android Developers: theming and design systems](https://developer.android.com/develop/ui/compose/designsystems/material3)
- [Material Design 3 — accessible and personalised theming codelab](https://developer.android.com/codelabs/m3-design-theming)
- [Google Design — research behind Material 3 Expressive](https://design.google/library/expressive-material-design-google-research)
- [Material Design 3 — official design guidance](https://m3.material.io/)
- [W3C — Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
