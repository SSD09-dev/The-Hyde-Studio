# THE HYDE STUDIO — Website & Brand Kit

> **Make room for what’s next.**
>
> An independent, multidisciplinary creative and product studio operating since 2025.

This folder is the working handoff for The Hyde Studio’s public-facing website. It brings the supplied monochrome logo direction together with one focused accent colour, a Material 3-informed design system, an accessible token set, and a content plan for a studio that is already delivering client work and intends to grow beyond project services.

## 1. Brand direction

**Brand name:** The Hyde Studio  
**Short name:** Hyde  
**Operating since:** 2025  
**Team shape:** A five-person multidisciplinary team spanning product/UX design, digital marketing, development, and graphic design.

### Positioning

Hyde is a small team that brings product thinking, design, development, visual communication, and digital growth together. The website should show that Hyde does more than make attractive screens: it understands the problem, makes a plan, builds the experience, and helps it reach people.

**Suggested one-line description**

> We turn ideas into useful digital experiences — from first conversation to launch.

**Suggested supporting description**

> The Hyde Studio is an independent team working across product design, websites and digital products, visual identity, and digital growth. We work closely with clients to shape clear ideas into things people can use.

Treat these as starting copy. Adjust them to match the exact services Hyde is currently able to deliver and the kind of projects it wants next.

## 2. Files in this kit

| File | Purpose |
|---|---|
| `DESIGN_SYSTEM.md` | Brand rules, Material 3 adaptation, colour, type, layout, shape, motion, accessibility, and component guidance |
| `WEBSITE_BLUEPRINT.md` | Homepage architecture, suggested copy, work presentation, contact flow, and future roadmap |
| `tokens.css` | CSS custom properties and starter base styles for implementation |
| `material3-theme.json` | Light and dark semantic colour-role map inspired by Material 3 theming |
| `assets/hyde-wordmark-black.png` | Transparent black wordmark for light surfaces |
| `assets/hyde-wordmark-white.png` | Transparent white wordmark for dark surfaces |
| `assets/originals/` | The two original uploaded logo artworks, kept unchanged |

## 3. Recommended website outcome

Build a fast, responsive, single-homepage studio site first. Add individual case-study pages when there is enough approved material to tell each story properly. Do not make the first version a large agency website with empty pages, stock testimonials, or invented client metrics.

The homepage should answer five questions quickly:

1. What is Hyde?
2. What can Hyde help with?
3. Has Hyde done credible work before?
4. Who will work on the project, and how do they work?
5. How can a potential client start a conversation?

Recommended navigation: **Work · Capabilities · Studio · Contact**. Add **Notes** only when there are real articles, field notes, or learning resources to publish.

## 4. Implementation principles

- Use the supplied original logos as the source of truth. Use the transparent wordmark exports for the website header and footer.
- Keep black and white as the dominant brand identity. Use Hyde Volt as a deliberate accent, not as a page background everywhere.
- Use `DESIGN_SYSTEM.md` as the design source of truth and `tokens.css` as the implementation starting point.
- Use semantic HTML, keyboard-accessible navigation, descriptive links, properly labelled form fields, and real text rather than text baked into images.
- Do not use client logos, testimonials, screenshots, metrics, or project claims without permission and evidence.
- Keep motion optional and purposeful. Respect `prefers-reduced-motion`.
- Optimise project imagery, provide alt text, and avoid loading large videos before they are needed.

## 5. Suggested project structure

A framework-neutral starting point:

```text
hyde-studio/
├── public/
│   ├── brand/
│   │   ├── hyde-wordmark-black.png
│   │   └── hyde-wordmark-white.png
│   └── work/
├── src/
│   ├── components/
│   ├── sections/
│   ├── content/
│   └── styles/
│       └── tokens.css
├── DESIGN_SYSTEM.md
├── WEBSITE_BLUEPRINT.md
└── README.md
```

The exact folders can change to suit the selected framework. Keep project content separate from layout components so work cards and case studies can be updated without rewriting the page structure.

## 6. Suggested build sequence

1. Finalise the public positioning, service list, and contact destination.
2. Collect 3–5 approved projects, including role, scope, assets, and real outcomes.
3. Build the responsive homepage using the token file.
4. Add case-study detail pages for the strongest work.
5. Test keyboard navigation, contrast, focus states, mobile layouts, form delivery, SEO metadata, and performance.
6. Publish only after every visible client claim and image has been approved.

## 7. Before launch — content still needed

- Confirm the official contact email and preferred enquiry channel.
- Confirm the services Hyde wants to sell now (not just services it may offer later).
- Select client projects that can be shown publicly and obtain permission for logos, screens, and testimonials.
- For each project, collect the problem, audience, Hyde’s role, deliverables, constraints, and verifiable outcome.
- Confirm whether team members want their names and portraits shown. Role descriptions are enough for the first release.
- Add privacy wording and a real recipient/integration for the enquiry form.
- Confirm legal/business details required in the footer for the business’s jurisdiction.

## 8. Important distinction

This is a **Material 3-informed brand and web design system**, not an official Google or Material Design product. Material 3 provides useful foundations for colour roles, typography, shape, interaction, and accessibility. The site is a studio marketing experience, so use those foundations while keeping its layout editorial, distinctive, and appropriate to its content.
