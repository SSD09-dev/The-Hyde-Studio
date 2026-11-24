# The Hyde Studios — Official Agency, Creative studio & Community Website

> **Create fearlessly. Build for the future.**  
> Official web presence for **The Hyde Studios**—a modern digital product, design, and growth studio operating since 2025, alongside our upcoming community initiative dedicated to eliminating tech career confusion.

---

## About The Hyde Studios

Founded in **2025**, **The Hyde Studios** is an agile, client-focused freelance studio delivering real-world digital products and brand experiences. We work directly with founders, startups, and businesses without traditional agency bloat—turning ambitious ideas into production-ready solutions.

### Core Client Services
1. **Full Product Development:** End-to-end web and digital product engineering built for speed, scalability, and real-world performance.
2. **UI/UX Design Experiences:** User-centered interfaces, wireframes, design systems, and interactive prototypes crafted to engage users and drive conversions.
3. **Graphic Design & Brand Visuals:** Distinctive visual identities, brand kits, marketing collateral, and social creatives that command market presence.
4. **Digital Marketing:** Strategic growth campaigns, brand positioning, and performance-focused content built to attract and retain customers.

### Future Direction: Solving Tech Career Confusion (Coming Soon)
Beyond building products for clients, The Hyde Studios is expanding into a judgment-free community and mentorship space for:
- **Students** navigating their first steps in tech
- **Tech Enthusiasts** exploring career paths and skill stacks
- **Fellow Freelancers** leveling up client execution and positioning
- **Working Professionals** seeking clarity, pivots, and 1-on-1 conversations with active builders

---

## Key Website Features

- **High-Conversion Page Architecture:** Structured specifically for client trust and conversion (`Hero` → `Transparent Client Logo Marquee` → `Selected Delivered Work` → `Services Bento Grid` → `About` → `Community Coming Soon` → `Contact Hub` → `Footer + Legal Modals`).
- **Dual Theme Support:** Seamless Dark Mode and Light Mode toggle with theme-adaptive client logos and brand tokens.
- **Multi-Language Support:** Built-in language switcher right in the navbar.
- **Device-Adaptive Micro-Interactions:** Smooth, hardware-accelerated Framer Motion animations tailored for desktop pointers (`hover` states, subtle magnetic/spotlight cues) and touch screens (`whileTap` feedback, clean mobile navigation).
- **360px–1920px Strict Responsiveness:** Fluid typography (`clamp()`) and adaptive CSS Grid/Bento layouts tested from compact 360px mobile screens up to 1920px desktop displays.
- **Centralized Configuration (`src/config/siteConfig.ts`):** Update official contact details, social links, client logos, and case studies in one file without touching UI components.

---

## Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS + CSS Custom Properties (`--color-primary`, theme variables)
- **Motion & Interactions:** Framer Motion / Motion
- **Icons:** Lucide React

---

## Quick Configuration Guide (`src/config/siteConfig.ts`)

All editable business details live inside `src/config/siteConfig.ts` so you can update the live site effortlessly:

1. **Official Contact Details:** Replace the placeholder `CONTACT_EMAIL`, `CONTACT_PHONE`, and `WHATSAPP_NUMBER` once your official business channels are active.
2. **Client Logos Marquee:** Swap out temporary placeholder brands in `CLIENT_LOGOS` with new client logos as your roster grows.
3. **Delivered Products (Portfolio):** Add new client case studies with category tags (`Product Dev`, `UI/UX`, `Graphic Design`, `Digital Marketing`), project outcomes, and preview visuals.
4. **Community Waitlist:** Connect the `"Notify Me"` waitlist input to your preferred email/CRM webhook when ready to launch the community cohort.

---

## Official Social Presence

- **LinkedIn:** [The Hyde Studios](https://linkedin.com)
- **Instagram:** [@the_hyde_studios](https://instagram.com)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

---

© 2025–2026 **The Hyde Studios**. All rights reserved.
, 
