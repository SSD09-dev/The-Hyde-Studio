export type ServiceId =
  | 'product-dev'
  | 'ui-ux'
  | 'graphic-design'
  | 'digital-marketing';

export type PortfolioCategory =
  | 'All'
  | 'Product Dev'
  | 'UI/UX'
  | 'Graphic Design'
  | 'Digital Marketing';

export interface ServiceOffering {
  id: ServiceId;
  index: string;
  title: string;
  shortLabel: string;
  categoryFilter: Exclude<PortfolioCategory, 'All'>;
  headline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  featuredSpan: 'wide' | 'standard';
}

export interface ClientProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: Exclude<PortfolioCategory, 'All'>;
  projectType: 'Client Project' | 'Active Retainer' | 'Studio Build';
  role: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ClientLogoItem {
  id: string;
  name: string;
  kind: 'image' | 'placeholder-svg';
  src?: string;
  brandKey?: 'amazon' | 'tesla' | 'ola' | 'razorpay' | 'stripe';
  /** Visual normalization mode for consistent monochrome appearance in light & dark themes */
  toneMode?: 'light-text-svg' | 'transparent-color' | 'opaque-badge' | 'opaque-white-bg';
  isPlaceholder?: boolean;
}

export const siteConfig = {
  brandName: 'The Hyde Studios',
  shortName: 'Hyde',
  tagline: 'Create fearlessly, build for the future.',
  operatingSince: '2025',

  // Official Business Contact Details
  CONTACT_EMAIL: 'info@thehydestudios.com',
  CONTACT_PHONE: '+91 9618022720',
  WHATSAPP_NUMBER: '', // Optional WhatsApp number without "+" when active

  SOCIAL_LINKS: {
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    twitter: 'https://x.com',
    discord: 'https://discord.com',
    slack: 'https://slack.com',
  },

  navLinks: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Community', href: '#community' },
  ],

  hero: {
    headline: 'Create fearlessly, build for the future.',
    subheadline: 'The Hyde is an independent creative tech studio.',
    primaryCta: 'Start a Project',
    secondaryCta: 'Explore Work',
  },

  /**
   * Centralized Client Logo Marquee Registry
   * Swap temporary placeholder entries out as additional client logos are added.
   */
  CLIENT_LOGOS: [
    {
      id: 'jasper-auto-parts',
      name: 'Jasper Auto Parts',
      kind: 'image',
      src: '/assets/aistudio/Jasper_Auto_Parts_d3bd6406.svg',
      toneMode: 'light-text-svg',
    },
    {
      id: 'cognizioni-ai',
      name: 'Cognizioni.Ai',
      kind: 'image',
      src: '/assets/aistudio/image-removebg-preview__5__3a05817d.svg',
      toneMode: 'transparent-color',
    },
    {
      id: 'vr-garage',
      name: 'VR Garage',
      kind: 'image',
      src: '/assets/aistudio/image-removebg-preview__29__3ecc29b2.png',
      toneMode: 'transparent-color',
    },
    {
      id: 'hloxpat',
      name: 'HloXpat',
      kind: 'image',
      src: '/assets/aistudio/image_aa377631.png',
      toneMode: 'transparent-color',
    },
    {
      id: 'glownest-spa',
      name: 'Glownest Spa',
      kind: 'image',
      src: '/assets/aistudio/image_2a7a52a8.png',
      toneMode: 'opaque-white-bg',
    },
    // Temporary placeholder brand logos — replace with future client logos anytime
    {
      id: 'amazon',
      name: 'Amazon',
      kind: 'placeholder-svg',
      brandKey: 'amazon',
      isPlaceholder: true,
    },
    {
      id: 'tesla',
      name: 'Tesla',
      kind: 'placeholder-svg',
      brandKey: 'tesla',
      isPlaceholder: true,
    },
    {
      id: 'ola',
      name: 'Ola',
      kind: 'placeholder-svg',
      brandKey: 'ola',
      isPlaceholder: true,
    },
    {
      id: 'razorpay',
      name: 'Razorpay',
      kind: 'placeholder-svg',
      brandKey: 'razorpay',
      isPlaceholder: true,
    },
    {
      id: 'stripe',
      name: 'Stripe',
      kind: 'placeholder-svg',
      brandKey: 'stripe',
      isPlaceholder: true,
    },
  ] as ClientLogoItem[],

  services: [
    {
      id: 'product-dev',
      index: '01',
      title: 'Full Product Development',
      shortLabel: 'Product Dev',
      categoryFilter: 'Product Dev',
      headline: 'End-to-end web and digital product engineering built for real scale.',
      description:
        'From early technical architecture to production deployment, we turn raw product concepts into fast, resilient, maintainable web applications and internal platforms.',
      deliverables: [
        'Full-stack web applications & APIs',
        'Performance-tuned React & TypeScript builds',
        'Scalable component & CMS architecture',
        'Launch readiness, QA & post-release iteration',
      ],
      idealFor: 'Founders & teams shipping new products or rebuilding legacy workflows',
      featuredSpan: 'wide',
    },
    {
      id: 'ui-ux',
      index: '02',
      title: 'UI/UX Design Experiences',
      shortLabel: 'UI/UX',
      categoryFilter: 'UI/UX',
      headline: 'Intuitive interfaces and interactive prototypes engineered to convert.',
      description:
        'We simplify complex user journeys into calm, self-explanatory flows—combining user research, wireframing, and tactile interface systems that feel effortless across every screen.',
      deliverables: [
        'User flows & information architecture',
        'High-fidelity UI & responsive design systems',
        'Interactive clickable prototypes',
        'Usability audits & conversion optimization',
      ],
      idealFor: 'Products needing sharper onboarding, retention, and clarity',
      featuredSpan: 'standard',
    },
    {
      id: 'graphic-design',
      index: '03',
      title: 'Graphic Design & Brand Visuals',
      shortLabel: 'Graphic Design',
      categoryFilter: 'Graphic Design',
      headline: 'Distinctive visual identities and brand kits that own their category.',
      description:
        'We craft memorable visual systems—logo lockups, typography rules, social creatives, pitch decks, and marketing collateral built to stay cohesive everywhere your audience meets you.',
      deliverables: [
        'Brand identity systems & guidelines',
        'Pitch decks, packaging & print collateral',
        'High-impact social & launch creatives',
        'Custom iconography & editorial layouts',
      ],
      idealFor: 'Businesses launching fresh or outgrowing a patchwork look',
      featuredSpan: 'standard',
    },
    {
      id: 'digital-marketing',
      index: '04',
      title: 'Digital Marketing',
      shortLabel: 'Digital Marketing',
      categoryFilter: 'Digital Marketing',
      headline: 'Strategic growth campaigns that turn attention into qualified customers.',
      description:
        'Great products still need distribution. We pair sharp brand positioning with performance-driven content, campaign execution, and conversion tracking to bring the right buyers to your door.',
      deliverables: [
        'Go-to-market positioning & campaign strategy',
        'Performance ad creatives & landing funnels',
        'Content calendars & organic channel growth',
        'Audience analytics & conversion reporting',
      ],
      idealFor: 'Brands ready to expand market reach and build steady demand',
      featuredSpan: 'wide',
    },
  ] as ServiceOffering[],

  portfolioCategories: [
    'All',
    'Product Dev',
    'UI/UX',
    'Graphic Design',
    'Digital Marketing',
  ] as PortfolioCategory[],

  projects: [
    {
      id: 'kinetik-ops',
      title: 'Kinetik Operations & Treasury Portal',
      client: 'Kinetik Ledger',
      industry: 'FinTech SaaS',
      category: 'Product Dev',
      projectType: 'Client Project',
      role: 'Full Product Engineering & Frontend Architecture',
      summary:
        'Rebuilt a fragmented multi-sheet treasury workflow into a unified web portal with real-time reconciliation views.',
      challenge:
        'Finance teams were reconciling multi-currency approvals across disconnected spreadsheets, causing delayed payouts and manual audit friction.',
      approach:
        'We architected a clean TypeScript + React workspace with keyboard-first navigation, strict role boundaries, and fast tabular filtering across thousands of line items.',
      outcome:
        'Deployed into daily production operations for the client team, replacing three manual reporting spreadsheets with one auditable interface.',
      deliverables: [
        'Web Application',
        'Component Library',
        'API Integration',
        'Responsive Workspace',
      ],
      image: '/src/assets/images/project_kinetik_product_1795502781803.jpg',
      imageAlt:
        'Laptop on stone plinth showing Kinetik Operations dark-mode financial dashboard interface',
    },
    {
      id: 'verve-booking',
      title: 'Verve Studio & Mobility Booking Flow',
      client: 'Verve Urban Hub',
      industry: 'Consumer Wellness & Mobility',
      category: 'UI/UX',
      projectType: 'Client Project',
      role: 'UX Research, Information Architecture & Mobile UI',
      summary:
        'Redesigned a clunky six-step mobile reservation flow into a clear two-tap booking experience.',
      challenge:
        'First-time members abandoned session bookings mid-checkout due to dense schedule tables and hidden cancellation terms on small screens.',
      approach:
        'Mapped real booking drop-off points, simplified calendar slot selection into a thumb-friendly strip, and surfaced upfront pricing and reschedule controls.',
      outcome:
        'Delivered a complete interactive Figma prototype and production handoff specs currently powering the client’s mobile release.',
      deliverables: [
        'UX Audit',
        'Mobile Wireframes',
        'Interactive Prototype',
        'Design Tokens',
      ],
      image: '/src/assets/images/project_verve_ux_1795502783416.jpg',
      imageAlt:
        'Two smartphones on matte concrete displaying Verve mobile booking and schedule screens',
    },
    {
      id: 'orbit-identity',
      title: 'Orbit Studio Visual Identity & Packaging',
      client: 'Orbit Design Goods',
      industry: 'Architecture & Industrial Goods',
      category: 'Graphic Design',
      projectType: 'Client Project',
      role: 'Brand Identity, Print Collateral & Packaging System',
      summary:
        'Crafted a tactile monochrome brand system, stationery suite, and unboxing experience for an industrial design label.',
      challenge:
        'The client needed a physical and digital identity that felt architectural and timeless without relying on expensive multi-ink print runs.',
      approach:
        'Built a disciplined two-tone black and off-white identity anchored by blind-embossed emblems, sharp geometric typography, and crisp alabaster tonal contrast.',
      outcome:
        'Rolled out across client packaging, studio stationery, and launch collateral for their flagship product line.',
      deliverables: [
        'Brand Guidelines',
        'Packaging System',
        'Print Stationery',
        'Social Launch Kit',
      ],
      image: '/src/assets/images/project_forma_brand_1795502783163.jpg',
      imageAlt:
        'Flat-lay of Orbit Studio matte black packaging box, embossed stationery cards, and monochrome brand collateral',
    },
    {
      id: 'meridian-campaign',
      title: 'Meridian Multi-Channel Launch Engine',
      client: 'Meridian Growth Co.',
      industry: 'B2B Services & Editorial',
      category: 'Digital Marketing',
      projectType: 'Active Retainer',
      role: 'Campaign Strategy, Creative Direction & Growth Analytics',
      summary:
        'Built a cohesive launch campaign combining bold typographic social creatives with conversion-focused landing funnels.',
      challenge:
        'Meridian had strong word-of-mouth referrals but zero repeatable digital pipeline to attract inbound B2B prospects.',
      approach:
        'Unified their campaign messaging, produced a modular library of high-contrast visual ads, and aligned landing pages with clear enquiry qualification.',
      outcome:
        'Established a consistent weekly content and acquisition cadence with active ongoing optimization.',
      deliverables: [
        'Positioning Playbook',
        'Campaign Creatives',
        'Landing Page Copy',
        'Performance Tracking',
      ],
      image: '/src/assets/images/project_meridian_growth_1795502784124.jpg',
      imageAlt:
        'Framed typographic growth campaign poster beside a tablet displaying digital marketing analytics',
    },
  ] as ClientProject[],

  processSteps: [
    {
      number: '01',
      title: 'Understand',
      description:
        'We align on the business problem, audience reality, and technical constraints before touching a single screen.',
    },
    {
      number: '02',
      title: 'Shape',
      description:
        'We define the product direction, scope, visual tone, and architecture so everyone sees the full picture early.',
    },
    {
      number: '03',
      title: 'Make',
      description:
        'Designers, engineers, and marketers build side-by-side—reviewing work in the open and refining every interaction.',
    },
    {
      number: '04',
      title: 'Improve',
      description:
        'We ship to real users, observe what lands, and iterate deliberately so the product keeps earning its keep.',
    },
  ] as ProcessStep[],

  studioStory: {
    eyebrow: 'About The Hyde Studios',
    headline: 'Small team. Shared ownership.',
    description:
      'Operating since 2025, our agile five-person team partners directly with founders and businesses across engineering, UI/UX design, brand visuals, and digital marketing—shipping thoughtful work with zero handoff friction.',
  },

  community: {
    badge: 'Coming Soon · Community Initiative',
    eyebrow: 'Beyond Client Work',
    headline: 'Solving tech career confusion—together.',
    description:
      'As we keep shipping products for clients, we are opening our doors to the broader tech community soon. We are building a hopeful, judgment-free space for students, tech enthusiasts, fellow freelancers, and working professionals who feel stuck or overwhelmed about their next move in tech.',
    pillars: [
      {
        title: '1-on-1 Career Clarity',
        detail:
          'Honest conversations about roles, portfolios, freelancing, and breaking out of tutorial loops—straight from builders working in the field.',
      },
      {
        title: 'Practical Roadmaps',
        detail:
          'Real-world guidance on how design, code, and growth actually work together on client teams—not recycled textbook theory.',
      },
      {
        title: 'Open Builder Community',
        detail:
          'Portfolio reviews, live breakdowns, and candid Q&As designed to help emerging talent find direction with confidence.',
      },
    ],
    audiences: [
      'Students',
      'Tech Enthusiasts',
      'Fellow Freelancers',
      'Working Professionals',
    ],
  },
};
