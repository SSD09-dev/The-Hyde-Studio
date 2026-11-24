import { LanguageCode } from '../context/PreferencesContext';
import { PortfolioCategory, ServiceId } from '../config/siteConfig';

export interface TranslatedService {
  title: string;
  shortLabel: string;
  description: string;
  deliverables: string[];
}

export interface TranslatedProject {
  title: string;
  industry: string;
  projectType: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  deliverables: string[];
}

export interface PolicyItem {
  heading: string;
  body: string;
}

export interface TranslationBundle {
  a11y: {
    skipToContent: string;
    themeToggleToDark: string;
    themeToggleToLight: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  nav: {
    work: string;
    services: string;
    about: string;
    community: string;
    policies: string;
    contact: string;
    startProject: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  clientsSection: {
    eyebrow: string;
  };
  servicesSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Record<ServiceId, TranslatedService>;
  };
  portfolioSection: {
    eyebrow: string;
    heading: string;
    filterAriaLabel: string;
    categories: Record<PortfolioCategory, string>;
    viewCaseStudy: string;
    swipeHint: string;
    modal: {
      closeLabel: string;
      clientIndustry: string;
      hydeRole: string;
      deliverables: string;
      challengeHeading: string;
      approachHeading: string;
      outcomeHeading: string;
      startSimilarCta: string;
    };
    projects: Record<string, TranslatedProject>;
  };
  aboutSection: {
    eyebrow: string;
    headline: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  communitySection: {
    badge: string;
    headline: string;
    description: string;
    audiences: string[];
    emailLabel: string;
    emailPlaceholder: string;
    emailError: string;
    submitCta: string;
    successTitle: string;
    successBodyPrefix: string;
    resetWaitlist: string;
    followLabel: string;
    pillars: {
      title: string;
      detail: string;
    }[];
  };
  policiesSection: {
    eyebrow: string;
    heading: string;
    privacyTab: string;
    termsTab: string;
    closeLabel: string;
    privacyItems: PolicyItem[];
    termsItems: PolicyItem[];
  };
  contactSection: {
    eyebrow: string;
    headline: string;
    description: string;
    whatsappCta: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      nameError: string;
      handleLabel: string;
      handlePlaceholder: string;
      handleError: string;
      serviceLabel: string;
      servicePlaceholder: string;
      serviceError: string;
      briefLabel: string;
      briefPlaceholder: string;
      briefError: string;
      privacyNote: string;
      submitCta: string;
      successTitlePrefix: string;
      successBodyPrefix: string;
      successBodySuffix: string;
      replyToLabel: string;
      briefSummaryLabel: string;
      openEmailCta: string;
      sendAnotherCta: string;
    };
  };
  footer: {
    tagline: string;
    copyrightSuffix: string;
  };
}

export const translations: Record<LanguageCode, TranslationBundle> = {
  en: {
    a11y: {
      skipToContent: 'Skip to main content',
      themeToggleToDark: 'Switch to dark theme',
      themeToggleToLight: 'Switch to light theme',
      languageLabel: 'Select language',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    nav: {
      work: 'Work',
      services: 'Services',
      about: 'About',
      community: 'Community',
      policies: 'Policies',
      contact: 'Contact',
      startProject: 'Start a Project',
    },
    hero: {
      headline: 'Create fearlessly, build for the future.',
      subheadline: 'The Hyde is an independent creative tech studio.',
      primaryCta: 'Start a Project',
      secondaryCta: 'Explore Work',
    },
    clientsSection: {
      eyebrow: 'Trusted By',
    },
    servicesSection: {
      eyebrow: 'Services',
      heading: 'Four focused disciplines.',
      subheading:
        'Design, engineering, brand identity, and digital growth aligned within one small team.',
      items: {
        'product-dev': {
          title: 'Full Product Development',
          shortLabel: 'Product Dev',
          description:
            'End-to-end web and digital product engineering built for speed, reliability, and real-world scale.',
          deliverables: [
            'Full-stack web applications & APIs',
            'React & TypeScript production builds',
            'Launch QA & ongoing iteration',
          ],
        },
        'ui-ux': {
          title: 'UI/UX Design Experiences',
          shortLabel: 'UI/UX',
          description:
            'Intuitive interfaces, user flows, and interactive prototypes crafted for clarity and conversion.',
          deliverables: [
            'Information architecture & user flows',
            'Responsive UI & design systems',
            'Interactive clickable prototypes',
          ],
        },
        'graphic-design': {
          title: 'Graphic Design & Brand Visuals',
          shortLabel: 'Graphic Design',
          description:
            'Distinctive visual identities, brand kits, pitch decks, and social creatives built to stay cohesive.',
          deliverables: [
            'Brand identity & visual guidelines',
            'Packaging, pitch decks & print',
            'Social & launch campaign assets',
          ],
        },
        'digital-marketing': {
          title: 'Digital Marketing',
          shortLabel: 'Digital Marketing',
          description:
            'Strategic positioning, performance creatives, and growth campaigns that attract real customers.',
          deliverables: [
            'Go-to-market campaign strategy',
            'Performance ads & landing funnels',
            'Content direction & conversion tracking',
          ],
        },
      },
    },
    portfolioSection: {
      eyebrow: 'Selected Work',
      heading: 'Real client deliveries.',
      filterAriaLabel: 'Filter projects by service category',
      categories: {
        All: 'All',
        'Product Dev': 'Product Dev',
        'UI/UX': 'UI/UX',
        'Graphic Design': 'Graphic Design',
        'Digital Marketing': 'Digital Marketing',
      },
      viewCaseStudy: 'View Case Study',
      swipeHint: 'Swipe to browse',
      modal: {
        closeLabel: 'Close case study',
        clientIndustry: 'Client & Industry',
        hydeRole: 'Role',
        deliverables: 'Deliverables',
        challengeHeading: 'Challenge',
        approachHeading: 'Approach',
        outcomeHeading: 'Outcome',
        startSimilarCta: 'Start a Similar Project',
      },
      projects: {
        'kinetik-ops': {
          title: 'Kinetik Operations & Treasury Portal',
          industry: 'FinTech SaaS',
          projectType: 'Client Project',
          role: 'Full Product Engineering',
          summary:
            'Unified multi-currency treasury approvals into a single real-time web portal.',
          challenge:
            'Finance teams were reconciling approvals across disconnected spreadsheets, slowing payouts and audits.',
          approach:
            'Built a keyboard-first React and TypeScript workspace with strict role permissions and instant filtering.',
          outcome:
            'Live in daily operations, replacing three manual spreadsheets with one auditable interface.',
          deliverables: ['Web App', 'Component Library', 'API Integration'],
        },
        'verve-booking': {
          title: 'Verve Studio & Mobility Booking Flow',
          industry: 'Wellness & Mobility',
          projectType: 'Client Project',
          role: 'UX Research & Mobile UI',
          summary:
            'Redesigned a six-step mobile reservation flow into a clear two-tap experience.',
          challenge:
            'New members abandoned bookings mid-checkout due to dense schedules and hidden terms on small screens.',
          approach:
            'Streamlined slot selection into a thumb-friendly strip with transparent upfront pricing.',
          outcome:
            'Delivered interactive prototypes and production specs powering the client’s mobile release.',
          deliverables: ['UX Audit', 'Interactive Prototype', 'Design Tokens'],
        },
        'orbit-identity': {
          title: 'Orbit Studio Visual Identity & Packaging',
          industry: 'Architecture & Goods',
          projectType: 'Client Project',
          role: 'Brand Identity & Packaging',
          summary:
            'Monochrome brand system, stationery suite, and tactile packaging for an industrial design label.',
          challenge:
            'Needed an architectural physical and digital identity without costly multi-ink printing.',
          approach:
            'Created a disciplined black-and-white identity using blind-embossed emblems and a single Volt cue.',
          outcome:
            'Rolled out across client packaging, studio stationery, and launch collateral.',
          deliverables: ['Brand Guidelines', 'Packaging System', 'Print Collateral'],
        },
        'meridian-campaign': {
          title: 'Meridian Multi-Channel Launch Engine',
          industry: 'B2B Services',
          projectType: 'Active Retainer',
          role: 'Growth Strategy & Creative Direction',
          summary:
            'Cohesive digital launch campaign pairing bold typographic ads with focused landing funnels.',
          challenge:
            'Strong word-of-mouth referrals, but no repeatable digital pipeline for inbound B2B leads.',
          approach:
            'Unified messaging across high-contrast social creatives and conversion-ready landing pages.',
          outcome:
            'Established an active weekly acquisition cadence under ongoing optimization.',
          deliverables: ['Positioning Playbook', 'Ad Creatives', 'Landing Funnels'],
        },
      },
    },
    aboutSection: {
      eyebrow: 'About The Hyde Studios',
      headline: 'Small team. Shared ownership.',
      description:
        'Operating since 2025, our agile five-person team partners directly with founders and businesses across engineering, UI/UX design, brand visuals, and digital marketing—shipping thoughtful work with zero handoff friction.',
      steps: [
        {
          number: '01',
          title: 'Understand',
          description: 'Align on the problem, user reality, and constraints before designing.',
        },
        {
          number: '02',
          title: 'Shape',
          description: 'Define scope, visual tone, and technical direction clearly up front.',
        },
        {
          number: '03',
          title: 'Make',
          description: 'Design, build, and review side-by-side with zero handoff friction.',
        },
        {
          number: '04',
          title: 'Improve',
          description: 'Ship to real users, measure feedback, and iterate deliberately.',
        },
      ],
    },
    communitySection: {
      badge: 'Coming Soon',
      headline: 'Beyond Client Work: Solving Tech Career Confusion.',
      description:
        'We are opening a judgment-free community space for students, tech enthusiasts, fellow freelancers, and working professionals seeking 1-on-1 clarity and practical roadmaps from active builders.',
      audiences: ['Students', 'Tech Enthusiasts', 'Fellow Freelancers', 'Working Professionals'],
      emailLabel: 'Early-notify email',
      emailPlaceholder: 'you@example.com',
      emailError: 'Please enter a valid email address.',
      submitCta: 'Notify Me',
      successTitle: 'You are on the early-notify list',
      successBodyPrefix: 'We saved',
      resetWaitlist: 'Use another email',
      followLabel: 'Follow updates:',
      pillars: [
        {
          title: '1-on-1 Clarity',
          detail: 'Candid career conversations about roles, portfolios, and real industry expectations.',
        },
        {
          title: 'Practical Roadmaps',
          detail: 'How design, code, and growth work together on real teams—not textbook theory.',
        },
        {
          title: 'Open Community',
          detail: 'Portfolio feedback, live Q&As, and peer support as we launch.',
        },
      ],
    },
    policiesSection: {
      eyebrow: 'Legal & Policies',
      heading: 'Privacy Policy & Terms.',
      privacyTab: 'Privacy Policy',
      termsTab: 'Terms of Service',
      closeLabel: 'Close policy dialog',
      privacyItems: [
        {
          heading: 'Information We Collect',
          body: 'We only collect details you intentionally submit through our project inquiry form (name, email or social handle, and project brief) or our community waitlist (email address).',
        },
        {
          heading: 'How We Use Your Data',
          body: 'Submitted details are used strictly to respond to your project inquiry or notify you when our Tech Career & Community initiative opens. We never sell, rent, or trade your data.',
        },
        {
          heading: 'Local Preferences & Removal',
          body: 'Theme and language preferences are stored locally in your browser. To delete any submitted inquiry or waitlist record, contact us directly via email.',
        },
      ],
      termsItems: [
        {
          heading: 'Project Scope & Proposals',
          body: 'All client engagements begin with an agreed written scope, timeline, and deliverables schedule prior to production.',
        },
        {
          heading: 'Intellectual Property',
          body: 'Upon full project completion and settlement, final approved client deliverables transfer to the client unless specific open-source or third-party licenses apply.',
        },
        {
          heading: 'Portfolio Rights',
          body: 'Confidential client work remains private. Public case studies are shared only with client approval and accurate attribution.',
        },
      ],
    },
    contactSection: {
      eyebrow: 'Contact',
      headline: 'Start a conversation.',
      description:
        'Share what you are building and how our team can help. Or reach out directly on LinkedIn or Instagram.',
      whatsappCta: 'Chat on WhatsApp',
      form: {
        nameLabel: 'Name *',
        namePlaceholder: 'Your name',
        nameError: 'Please enter your name.',
        handleLabel: 'Email or Social Handle *',
        handlePlaceholder: 'you@company.com or @handle',
        handleError: 'Please provide an email or social handle.',
        serviceLabel: 'Service Needed *',
        servicePlaceholder: 'Select a service...',
        serviceError: 'Please select a service.',
        briefLabel: 'Project Brief *',
        briefPlaceholder: 'Tell us briefly about your project, goals, and timeline.',
        briefError: 'Please share a brief note about your project.',
        privacyNote: 'Protected under our Privacy Policy.',
        submitCta: 'Send Inquiry',
        successTitlePrefix: 'Inquiry ready for',
        successBodyPrefix: 'Your brief for',
        successBodySuffix: 'is ready to send via email or social DM.',
        replyToLabel: 'Reply to:',
        briefSummaryLabel: 'Brief:',
        openEmailCta: 'Send via Email App',
        sendAnotherCta: 'New Inquiry',
      },
    },
    footer: {
      tagline: 'Create fearlessly, build for the future.',
      copyrightSuffix: 'All rights reserved.',
    },
  },

  hi: {
    a11y: {
      skipToContent: 'मुख्य सामग्री पर जाएँ',
      themeToggleToDark: 'डार्क थीम चुनें',
      themeToggleToLight: 'लाइट थीम चुनें',
      languageLabel: 'भाषा चुनें',
      openMenu: 'मेनू खोलें',
      closeMenu: 'मेनू बंद करें',
    },
    nav: {
      work: 'प्रोजेक्ट्स',
      services: 'सेवाएँ',
      about: 'हमारे बारे में',
      community: 'कम्युनिटी',
      policies: 'नीतियाँ',
      contact: 'संपर्क',
      startProject: 'प्रोजेक्ट शुरू करें',
    },
    hero: {
      headline: 'निडर होकर रचें, भविष्य के लिए निर्माण करें।',
      subheadline: 'द हाइड एक स्वतंत्र क्रिएटिव टेक स्टूडियो है।',
      primaryCta: 'प्रोजेक्ट शुरू करें',
      secondaryCta: 'काम देखें',
    },
    clientsSection: {
      eyebrow: 'विश्वसनीय क्लाइंट्स',
    },
    servicesSection: {
      eyebrow: 'सेवाएँ',
      heading: 'चार मुख्य विशेषज्ञताएँ।',
      subheading:
        'डिज़ाइन, इंजीनियरिंग, ब्रांड पहचान और डिजिटल मार्केटिंग—एक ही टीम में।',
      items: {
        'product-dev': {
          title: 'फुल प्रोडक्ट डेवलपमेंट',
          shortLabel: 'प्रोडक्ट डेव',
          description:
            'तेज़, सुरक्षित और स्केलेबल वेब एप्लिकेशन और डिजिटल प्रोडक्ट्स का संपूर्ण निर्माण।',
          deliverables: [
            'फुल-स्टैक वेब ऐप्स और APIs',
            'React और TypeScript प्रोडक्शन कोड',
            'लॉन्च QA और निरंतर सुधार',
          ],
        },
        'ui-ux': {
          title: 'UI/UX डिज़ाइन अनुभव',
          shortLabel: 'UI/UX',
          description:
            'सरल और सहज इंटरफ़ेस, यूज़र फ्लो और इंटरैक्टिव प्रोटोटाइप्स जो कन्वर्ज़न बढ़ाएँ।',
          deliverables: [
            'यूज़र फ्लो और इंफॉर्मेशन आर्किटेक्चर',
            'रिस्पॉन्सिव UI और डिज़ाइन सिस्टम',
            'क्लिकेबल प्रोटोटाइप्स',
          ],
        },
        'graphic-design': {
          title: 'ग्राफ़िक डिज़ाइन और ब्रांड विज़ुअल्स',
          shortLabel: 'ब्रांड डिज़ाइन',
          description:
            'यादगार ब्रांड पहचान, पिच डेक, पैकेजिंग और सोशल क्रिएटिव्स।',
          deliverables: [
            'ब्रांड आइडेंटिटी और गाइडलाइंस',
            'पैकेजिंग, पिच डेक और प्रिंट',
            'सोशल और लॉन्च क्रिएटिव्स',
          ],
        },
        'digital-marketing': {
          title: 'डिजिटल मार्केटिंग',
          shortLabel: 'डिजिटल ग्रोथ',
          description:
            'रणनीतिक पोज़िशनिंग और परफॉर्मेंस कैंपेन जो सही ग्राहकों को जोड़ें।',
          deliverables: [
            'गो-टू-मार्केट कैंपेन रणनीति',
            'परफॉर्मेंस विज्ञापन और लैंडिंग पेज',
            'कंटेंट और कन्वर्ज़न एनालिटिक्स',
          ],
        },
      },
    },
    portfolioSection: {
      eyebrow: 'चुनिंदा कार्य',
      heading: 'वास्तविक क्लाइंट डिलीवरी।',
      filterAriaLabel: 'श्रेणी के अनुसार प्रोजेक्ट्स फ़िल्टर करें',
      categories: {
        All: 'सभी',
        'Product Dev': 'प्रोडक्ट डेव',
        'UI/UX': 'UI/UX',
        'Graphic Design': 'ब्रांड डिज़ाइन',
        'Digital Marketing': 'डिजिटल ग्रोथ',
      },
      viewCaseStudy: 'केस स्टडी देखें',
      swipeHint: 'स्वाइप करें',
      modal: {
        closeLabel: 'बंद करें',
        clientIndustry: 'क्लाइंट और उद्योग',
        hydeRole: 'भूमिका',
        deliverables: 'डिलीवरेबल्स',
        challengeHeading: 'चुनौती',
        approachHeading: 'दृष्टिकोण',
        outcomeHeading: 'परिणाम',
        startSimilarCta: 'ऐसा प्रोजेक्ट शुरू करें',
      },
      projects: {
        'kinetik-ops': {
          title: 'Kinetik ऑपरेशन्स और ट्रेज़री पोर्टल',
          industry: 'फिनटेक SaaS',
          projectType: 'क्लाइंट प्रोजेक्ट',
          role: 'फुल प्रोडक्ट इंजीनियरिंग',
          summary:
            'मल्टी-करेंसी स्वीकृतियों को एक रियल-टाइम वेब पोर्टल में एकीकृत किया।',
          challenge:
            'अलग-अलग स्प्रेडशीट्स में मिलान के कारण भुगतान और ऑडिट में देरी हो रही थी।',
          approach:
            'सख्त रोल अनुमतियों और तेज़ फ़िल्टरिंग के साथ React + TypeScript वर्कस्पेस बनाया।',
          outcome:
            'दैनिक ऑपरेशन्स में लाइव—तीन मैन्युअल शीट्स की जगह एक स्पष्ट डैशबोर्ड।',
          deliverables: ['वेब ऐप', 'कॉम्पोनेंट लाइब्रेरी', 'API इंटीग्रेशन'],
        },
        'verve-booking': {
          title: 'Verve स्टूडियो और मोबिलिटी बुकिंग',
          industry: 'वेलनेस और मोबिलिटी',
          projectType: 'क्लाइंट प्रोजेक्ट',
          role: 'UX रिसर्च और मोबाइल UI',
          summary:
            'छह चरणों की मोबाइल बुकिंग को सरल टू-टैप अनुभव में बदला।',
          challenge:
            'छोटी स्क्रीन पर जटिल शेड्यूल और छिपी शर्तों के कारण यूज़र्स बुकिंग छोड़ रहे थे।',
          approach:
            'अंगूठे के अनुकूल स्लॉट चयन और स्पष्ट कीमत जानकारी के साथ फ्लो को सरल किया।',
          outcome:
            'क्लाइंट के मोबाइल रिलीज़ के लिए इंटरैक्टिव प्रोटोटाइप और डिज़ाइन सिस्टम सौंपा।',
          deliverables: ['UX ऑडिट', 'इंटरैक्टिव प्रोटोटाइप', 'डिज़ाइन टोकन्स'],
        },
        'orbit-identity': {
          title: 'Orbit स्टूडियो आइडेंटिटी और पैकेजिंग',
          industry: 'आर्किटेक्चर और गुड्स',
          projectType: 'क्लाइंट प्रोजेक्ट',
          role: 'ब्रांड आइडेंटिटी और पैकेजिंग',
          summary:
            'इंडस्ट्रियल डिज़ाइन लेबल के लिए मोनोक्रोम ब्रांड सिस्टम और पैकेजिंग।',
          challenge:
            'महंगी मल्टी-इंक प्रिंटिंग के बिना प्रीमियम और टिकाऊ पहचान की ज़रूरत थी।',
          approach:
            'एम्बॉस्ड चिह्न और वोल्ट एक्सेंट के साथ ब्लैक-एंड-व्हाइट पहचान बनाई।',
          outcome:
            'प्रोडक्ट लाइन की पैकेजिंग और स्टेशनरी में सफलतापूर्वक लागू।',
          deliverables: ['ब्रांड गाइडलाइंस', 'पैकेजिंग सिस्टम', 'प्रिंट सामग्री'],
        },
        'meridian-campaign': {
          title: 'Meridian मल्टी-चैनल लॉन्च इंजन',
          industry: 'B2B सेवाएँ',
          projectType: 'सक्रिय रिटेनर',
          role: 'ग्रोथ रणनीति और क्रिएटिव डायरेक्शन',
          summary:
            'बोल्ड टाइपोग्राफी विज्ञापनों और कन्वर्ज़न लैंडिंग पेज के साथ लॉन्च कैंपेन।',
          challenge:
            'रेफरल के बावजूद नए B2B लीड्स के लिए कोई नियमित डिजिटल पाइपलाइन नहीं थी।',
          approach:
            'हाई-कॉन्ट्रास्ट सोशल क्रिएटिव्स और स्पष्ट लैंडिंग फनल तैयार किए।',
          outcome:
            'निरंतर सुधार के साथ साप्ताहिक लीड-जनरेशन प्रणाली स्थापित हुई।',
          deliverables: ['पोज़िशनिंग प्लेबुक', 'विज्ञापन क्रिएटिव्स', 'लैंडिंग फनल'],
        },
      },
    },
    aboutSection: {
      eyebrow: 'द हाइड स्टूडियोज़ के बारे में',
      headline: 'छोटी टीम। साझा स्वामित्व।',
      description:
        '2025 से सक्रिय हमारी पाँच-सदस्यीय एजाइल टीम इंजीनियरिंग, UI/UX, विज़ुअल डिज़ाइन और डिजिटल मार्केटिंग में क्लाइंट्स के साथ सीधे मिलकर काम करती है।',
      steps: [
        {
          number: '01',
          title: 'समझना',
          description: 'डिज़ाइन से पहले समस्या, यूज़र और तकनीकी सीमाओं को स्पष्ट करना।',
        },
        {
          number: '02',
          title: 'आकार देना',
          description: 'शुरुआत में ही दायरा, विज़ुअल टोन और तकनीकी दिशा तय करना।',
        },
        {
          number: '03',
          title: 'निर्माण',
          description: 'बिना किसी रुकावट के डिज़ाइन, कोड और रिव्यू साथ-साथ करना।',
        },
        {
          number: '04',
          title: 'सुधार',
          description: 'असली यूज़र्स तक पहुँचाकर फीडबैक के आधार पर लगातार निखारना।',
        },
      ],
    },
    communitySection: {
      badge: 'जल्द आ रहा है',
      headline: 'क्लाइंट कार्य से आगे: टेक करियर की उलझन को सुलझाना।',
      description:
        'छात्रों, टेक उत्साही लोगों, फ्रीलांसरों और कामकाजी पेशेवरों के लिए एक सहज कम्युनिटी मंच—जहाँ सक्रिय बिल्डर्स से 1-ऑन-1 स्पष्टता और व्यावहारिक रोडमैप मिलेंगे।',
      audiences: ['छात्र', 'टेक उत्साही', 'फ्रीलांसर', 'पेशेवर'],
      emailLabel: 'ईमेल पता',
      emailPlaceholder: 'you@example.com',
      emailError: 'कृपया सही ईमेल पता दर्ज करें।',
      submitCta: 'सूचित करें',
      successTitle: 'आप अर्ली वेटलिस्ट में जुड़ चुके हैं',
      successBodyPrefix: 'सहेजा गया ईमेल:',
      resetWaitlist: 'दूसरा ईमेल उपयोग करें',
      followLabel: 'अपडेट के लिए जुड़ें:',
      pillars: [
        {
          title: '1-ऑन-1 स्पष्टता',
          detail: 'रोल्स, पोर्टफोलियो और वास्तविक इंडस्ट्री अपेक्षाओं पर सीधी बातचीत।',
        },
        {
          title: 'व्यावहारिक रोडमैप',
          detail: 'किताबी ज्ञान नहीं—टीमों में डिज़ाइन, कोड और ग्रोथ का वास्तविक तालमेल।',
        },
        {
          title: 'ओपन कम्युनिटी',
          detail: 'पोर्टफोलियो फीडबैक, लाइव प्रश्नोत्तर और साथियों का सहयोग।',
        },
      ],
    },
    policiesSection: {
      eyebrow: 'नीतियाँ',
      heading: 'गोपनीयता नीति और शर्तें।',
      privacyTab: 'गोपनीयता नीति',
      termsTab: 'सेवा की शर्तें',
      closeLabel: 'बंद करें',
      privacyItems: [
        {
          heading: 'हम कौन-सी जानकारी लेते हैं',
          body: 'हम केवल वही विवरण लेते हैं जो आप प्रोजेक्ट पूछताछ फ़ॉर्म (नाम, ईमेल/हैंडल और विवरण) या कम्युनिटी वेटलिस्ट (ईमेल) के ज़रिए स्वयं देते हैं।',
        },
        {
          heading: 'डेटा का उपयोग',
          body: 'आपका डेटा केवल आपके प्रोजेक्ट पर उत्तर देने या कम्युनिटी लॉन्च की सूचना देने के लिए उपयोग होता है। हम इसे कभी बेचते या साझा नहीं करते।',
        },
        {
          heading: 'ब्राउज़र प्राथमिकताएँ और हटाना',
          body: 'थीम और भाषा की पसंद आपके ब्राउज़र में सहेजी जाती है। अपना विवरण हटवाने के लिए हमें ईमेल करें।',
        },
      ],
      termsItems: [
        {
          heading: 'प्रोजेक्ट दायरा और प्रस्ताव',
          body: 'हर क्लाइंट प्रोजेक्ट काम शुरू होने से पहले लिखित दायरे, समय-सीमा और डिलीवरेबल्स पर सहमति से शुरू होता है।',
        },
        {
          heading: 'बौद्धिक संपदा',
          body: 'पूर्ण भुगतान और समापन के बाद स्वीकृत क्लाइंट कार्य के अधिकार क्लाइंट को हस्तांतरित होते हैं (थर्ड-पार्टी लाइसेंस को छोड़कर)।',
        },
        {
          heading: 'गोपनीयता और पोर्टफोलियो',
          body: 'गोपनीय कार्य निजी रहता है। सार्वजनिक केस स्टडी केवल क्लाइंट की अनुमति से साझा की जाती है।',
        },
      ],
    },
    contactSection: {
      eyebrow: 'संपर्क',
      headline: 'बातचीत शुरू करें।',
      description:
        'बताएँ कि आप क्या बना रहे हैं और हमारी टीम कैसे मदद कर सकती है—या LinkedIn और Instagram पर सीधे जुड़ें।',
      whatsappCta: 'WhatsApp पर चैट करें',
      form: {
        nameLabel: 'नाम *',
        namePlaceholder: 'आपका नाम',
        nameError: 'कृपया अपना नाम दर्ज करें।',
        handleLabel: 'ईमेल या सोशल हैंडल *',
        handlePlaceholder: 'you@company.com या @handle',
        handleError: 'कृपया ईमेल या सोशल हैंडल दर्ज करें।',
        serviceLabel: 'आवश्यक सेवा *',
        servicePlaceholder: 'सेवा चुनें...',
        serviceError: 'कृपया एक सेवा चुनें।',
        briefLabel: 'प्रोजेक्ट विवरण *',
        briefPlaceholder: 'अपने प्रोजेक्ट, लक्ष्य और समय-सीमा के बारे में संक्षेप में लिखें।',
        briefError: 'कृपया प्रोजेक्ट के बारे में थोड़ा लिखें।',
        privacyNote: 'हमारी गोपनीयता नीति के तहत सुरक्षित।',
        submitCta: 'पूछताछ भेजें',
        successTitlePrefix: 'पूछताछ तैयार है:',
        successBodyPrefix: 'आपका विवरण',
        successBodySuffix: 'के लिए ईमेल या सोशल DM द्वारा भेजने के लिए तैयार है।',
        replyToLabel: 'जवाब भेजें:',
        briefSummaryLabel: 'विवरण:',
        openEmailCta: 'ईमेल ऐप से भेजें',
        sendAnotherCta: 'नई पूछताछ',
      },
    },
    footer: {
      tagline: 'निडर होकर रचें, भविष्य के लिए निर्माण करें।',
      copyrightSuffix: 'सर्वाधिकार सुरक्षित।',
    },
  },

  te: {
    a11y: {
      skipToContent: 'ప్రధాన కంటెంట్‌కు వెళ్లండి',
      themeToggleToDark: 'డార్క్ థీమ్‌కు మారండి',
      themeToggleToLight: 'లైట్ థీమ్‌కు మారండి',
      languageLabel: 'భాషను ఎంచుకోండి',
      openMenu: 'మెను తెరవండి',
      closeMenu: 'మెను మూసివేయండి',
    },
    nav: {
      work: 'పనులు',
      services: 'సేవలు',
      about: 'మా గురించి',
      community: 'కమ్యూనిటీ',
      policies: 'విధానాలు',
      contact: 'సంప్రదించండి',
      startProject: 'ప్రాజెక్ట్ ప్రారంభించండి',
    },
    hero: {
      headline: 'భయం లేకుండా సృష్టించండి, భవిష్యత్తు కోసం నిర్మించండి.',
      subheadline: 'ది హైడ్ ఒక స్వతంత్ర క్రియేటివ్ టెక్ స్టూడియో.',
      primaryCta: 'ప్రాజెక్ట్ ప్రారంభించండి',
      secondaryCta: 'పనులు చూడండి',
    },
    clientsSection: {
      eyebrow: 'విశ్వసనీయ క్లయింట్లు',
    },
    servicesSection: {
      eyebrow: 'సేవలు',
      heading: 'నాలుగు ప్రధాన విభాగాలు.',
      subheading:
        'డిజైన్, ఇంజనీరింగ్, బ్రాండ్ గుర్తింపు మరియు డిజిటల్ వృద్ధి—ఒకే బృందంలో.',
      items: {
        'product-dev': {
          title: 'పూర్తి స్థాయి ప్రోడక్ట్ డెవలప్‌మెంట్',
          shortLabel: 'ప్రోడక్ట్ డెవ్',
          description:
            'వేగం, విశ్వసనీయత మరియు వృద్ధికి అనుగుణంగా ఎండ్-టు-ఎండ్ వెబ్ & డిజిటల్ ప్రోడక్ట్ ఇంజనీరింగ్.',
          deliverables: [
            'ఫుల్-స్టాక్ వెబ్ అప్లికేషన్లు & APIs',
            'React & TypeScript ప్రొడక్షన్ బిల్డ్స్',
            'లాంచ్ QA & నిరంతర మెరుగుదల',
          ],
        },
        'ui-ux': {
          title: 'UI/UX డిజైన్ అనుభవాలు',
          shortLabel: 'UI/UX',
          description:
            'స్పష్టత మరియు ఫలితాల కోసం సహజమైన ఇంటర్‌ఫేస్‌లు, యూజర్ ఫ్లోలు మరియు ప్రోటోటైప్‌లు.',
          deliverables: [
            'ఇన్ఫర్మేషన్ ఆర్కిటెక్చర్ & యూజర్ ఫ్లోలు',
            'రెస్పాన్సివ్ UI & డిజైన్ సిస్టమ్స్',
            'ఇంటరాక్టివ్ క్లికబుల్ ప్రోటోటైప్‌లు',
          ],
        },
        'graphic-design': {
          title: 'గ్రాఫిక్ డిజైన్ & బ్రాండ్ విజువల్స్',
          shortLabel: 'బ్రాండ్ డిజైన్',
          description:
            'ప్రత్యేకమైన విజువల్ ఐడెంటిటీ, బ్రాండ్ కిట్లు, పిచ్ డెక్‌లు మరియు సోషల్ క్రియేటివ్స్.',
          deliverables: [
            'బ్రాండ్ ఐడెంటిటీ & గైడ్‌లైన్స్',
            'ప్యాకేజింగ్, పిచ్ డెక్‌లు & ప్రింట్',
            'సోషల్ & లాంచ్ క్యాంపెయిన్ అసెట్లు',
          ],
        },
        'digital-marketing': {
          title: 'డిజిటల్ మార్కెటింగ్',
          shortLabel: 'డిజిటల్ గ్రోత్',
          description:
            'నిజమైన కస్టమర్లను ఆకర్షించే వ్యూహాత్మక పొజిషనింగ్ మరియు వృద్ధి ప్రచారాలు.',
          deliverables: [
            'గో-టు-మార్కెట్ క్యాంపెయిన్ వ్యూహం',
            'పెర్ఫార్మెన్స్ యాడ్స్ & ల్యాండింగ్ పేజీలు',
            'కంటెంట్ డైరెక్షన్ & కన్వర్షన్ ట్రాకింగ్',
          ],
        },
      },
    },
    portfolioSection: {
      eyebrow: 'ఎంపిక చేసిన పనులు',
      heading: 'నిజమైన క్లయింట్ ప్రాజెక్టులు.',
      filterAriaLabel: 'సేవ ఆధారంగా ప్రాజెక్టులను ఫిల్టర్ చేయండి',
      categories: {
        All: 'అన్నీ',
        'Product Dev': 'ప్రోడక్ట్ డెవ్',
        'UI/UX': 'UI/UX',
        'Graphic Design': 'బ్రాండ్ డిజైన్',
        'Digital Marketing': 'డిజిటల్ గ్రోత్',
      },
      viewCaseStudy: 'కేస్ స్టడీ చూడండి',
      swipeHint: 'స్వైప్ చేయండి',
      modal: {
        closeLabel: 'మూసివేయండి',
        clientIndustry: 'క్లయింట్ & రంగం',
        hydeRole: 'పాత్ర',
        deliverables: 'అందించినవి',
        challengeHeading: 'సవాలు',
        approachHeading: 'మా విధానం',
        outcomeHeading: 'ఫలితం',
        startSimilarCta: 'ఇలాంటి ప్రాజెక్ట్ ప్రారంభించండి',
      },
      projects: {
        'kinetik-ops': {
          title: 'Kinetik ఆపరేషన్స్ & ట్రెజరీ పోర్టల్',
          industry: 'ఫిన్‌టెక్ SaaS',
          projectType: 'క్లయింట్ ప్రాజెక్ట్',
          role: 'పూర్తి ప్రోడక్ట్ ఇంజనీరింగ్',
          summary:
            'మల్టీ-కరెన్సీ ట్రెజరీ ఆమోదాలను ఒకే రియల్-టైమ్ వెబ్ పోర్టల్‌గా మార్చాము.',
          challenge:
            'వేర్వేరు స్ప్రెడ్‌షీట్లలో సరిపోల్చడం వల్ల చెల్లింపులు మరియు ఆడిట్‌లు ఆలస్యమయ్యాయి.',
          approach:
            'కచ్చితమైన రోల్ అనుమతులు మరియు వేగవంతమైన ఫిల్టరింగ్‌తో React + TypeScript పోర్టల్ నిర్మించాము.',
          outcome:
            'రోజువారీ కార్యకలాపాల్లో లైవ్ అయి మూడు మాన్యువల్ షీట్లను భర్తీ చేసింది.',
          deliverables: ['వెబ్ యాప్', 'కాంపోనెంట్ లైబ్రరీ', 'API ఇంటిగ్రేషన్'],
        },
        'verve-booking': {
          title: 'Verve స్టూడియో & మొబిలిటీ బుకింగ్',
          industry: 'వెల్‌నెస్ & మొబిలిటీ',
          projectType: 'క్లయింట్ ప్రాజెక్ట్',
          role: 'UX రీసెర్చ్ & మొబైల్ UI',
          summary:
            'ఆరు దశల మొబైల్ బుకింగ్ ప్రక్రియను సులభమైన రెండు-ట్యాప్ అనుభవంగా మార్చాము.',
          challenge:
            'చిన్న స్క్రీన్లపై సంక్లిష్టమైన షెడ్యూల్ వల్ల కొత్త సభ్యులు బుకింగ్ మధ్యలో ఆపేవారు.',
          approach:
            'సులభమైన టైమ్ స్లాట్ ఎంపిక మరియు స్పష్టమైన ధర వివరాలతో ఫ్లోను సరళం చేశాము.',
          outcome:
            'క్లయింట్ మొబైల్ విడుదలకు ఉపయోగపడే ఇంటరాక్టివ్ ప్రోటోటైప్‌ను అందించాము.',
          deliverables: ['UX ఆడిట్', 'ఇంటరాక్టివ్ ప్రోటోటైప్', 'డిజైన్ టోకెన్స్'],
        },
        'orbit-identity': {
          title: 'Orbit స్టూడియో ఐడెంటిటీ & ప్యాకేజింగ్',
          industry: 'ఆర్కిటెక్చర్ & ఉత్పత్తులు',
          projectType: 'క్లయింట్ ప్రాజెక్ట్',
          role: 'బ్రాండ్ ఐడెంటిటీ & ప్యాకేజింగ్',
          summary:
            'ఇండస్ట్రియల్ డిజైన్ బ్రాండ్ కోసం మోనోక్రోమ్ బ్రాండ్ సిస్టమ్ మరియు ప్యాకేజింగ్.',
          challenge:
            'ఖరీదైన మల్టీ-ఇంక్ ప్రింటింగ్ లేకుండా ఆధునిక, శాశ్వత గుర్తింపు అవసరమైంది.',
          approach:
            'బ్లైండ్-ఎంబోస్డ్ చిహ్నం మరియు వోల్ట్ యాక్సెంట్‌తో బ్లాక్-అండ్-వైట్ గుర్తింపును రూపొందించాము.',
          outcome:
            'ఉత్పత్తి శ్రేణి ప్యాకేజింగ్ మరియు స్టేషనరీలో అమలు చేశాము.',
          deliverables: ['బ్రాండ్ గైడ్‌లైన్స్', 'ప్యాకేజింగ్ సిస్టమ్', 'ప్రింట్ డిజైన్'],
        },
        'meridian-campaign': {
          title: 'Meridian మల్టీ-ఛానల్ లాంచ్ ఇంజిన్',
          industry: 'B2B సేవలు',
          projectType: 'యాక్టివ్ రిటైనర్',
          role: 'గ్రోత్ వ్యూహం & క్రియేటివ్ డైరెక్షన్',
          summary:
            'బోల్డ్ టైపోగ్రఫీ యాడ్స్‌ను కన్వర్షన్ ల్యాండింగ్ ఫన్నెల్స్‌తో కలిపిన లాంచ్ క్యాంపెయిన్.',
          challenge:
            'బలమైన రిఫరల్స్ ఉన్నా కొత్త B2B లీడ్స్ కోసం స్థిరమైన డిజిటల్ విధానం లేదు.',
          approach:
            'హై-కాంట్రాస్ట్ సోషల్ క్రియేటివ్స్ మరియు స్పష్టమైన ల్యాండింగ్ పేజీలతో సందేశాన్ని ఏకీకృతం చేశాము.',
          outcome:
            'నిరంతర మెరుగుదలతో వారపు లీడ్ వ్యవస్థను ఏర్పాటు చేశాము.',
          deliverables: ['పొజిషనింగ్ ప్లేబుక్', 'యాడ్ క్రియేటివ్స్', 'ల్యాండింగ్ ఫన్నెల్స్'],
        },
      },
    },
    aboutSection: {
      eyebrow: 'ది హైడ్ స్టూడియోస్ గురించి',
      headline: 'చిన్న బృందం. సమష్టి బాధ్యత.',
      description:
        '2025 నుండి చురుకుగా పనిచేస్తున్న మా ఐదుగురి బృందం ఇంజనీరింగ్, UI/UX, బ్రాండ్ డిజైన్ మరియు డిజిటల్ మార్కెటింగ్‌లలో క్లయింట్లతో నేరుగా భాగస్వామ్యమవుతుంది.',
      steps: [
        {
          number: '01',
          title: 'అర్థం చేసుకోండి',
          description: 'డిజైన్ ముందు సమస్య, వినియోగదారు అవసరాలు మరియు పరిమితులను స్పష్టం చేస్తాము.',
        },
        {
          number: '02',
          title: 'రూపొందించండి',
          description: 'పరిధి, విజువల్ శైలి మరియు సాంకేతిక దిశను ప్రారంభంలోనే నిర్ణయిస్తాము.',
        },
        {
          number: '03',
          title: 'నిర్మించండి',
          description: 'అడ్డంకులు లేకుండా డిజైన్, కోడ్ మరియు సమీక్షలను కలిసి పూర్తి చేస్తాము.',
        },
        {
          number: '04',
          title: 'మెరుగుపరచండి',
          description: 'నిజమైన వినియోగదారులకు అందించి, ఫీడ్‌బ్యాక్‌తో నిరంతరం మెరుగుపరుస్తాము.',
        },
      ],
    },
    communitySection: {
      badge: 'త్వరలో వస్తోంది',
      headline: 'క్లయింట్ పనికి మించి: టెక్ కెరీర్ గందరగోళానికి పరిష్కారం.',
      description:
        'విద్యార్థులు, టెక్ ఆసక్తులు, ఫ్రీలాన్సర్లు మరియు ఉద్యోగుల కోసం నిజమైన బిల్డర్ల నుండి 1-ఆన్-1 స్పష్టత మరియు ప్రాక్టికల్ రోడ్‌మ్యాప్‌లను అందించే ఓపెన్ కమ్యూనిటీ వేదిక.',
      audiences: ['విద్యార్థులు', 'టెక్ ఆసక్తులు', 'ఫ్రీలాన్సర్లు', 'ఉద్యోగులు'],
      emailLabel: 'ఈమెయిల్ చిరునామా',
      emailPlaceholder: 'you@example.com',
      emailError: 'దయచేసి సరైన ఈమెయిల్ నమోదు చేయండి.',
      submitCta: 'వెయిట్‌లిస్ట్‌లో చేరండి',
      successTitle: 'మీరు ముందస్తు వెయిట్‌లిస్ట్‌లో చేరారు',
      successBodyPrefix: 'సేవ్ చేసిన ఈమెయిల్:',
      resetWaitlist: 'మరొక ఈమెయిల్ ఉపయోగించండి',
      followLabel: 'అప్‌డేట్స్ కోసం అనుసరించండి:',
      pillars: [
        {
          title: '1-ఆన్-1 స్పష్టత',
          detail: 'పాత్రలు, పోర్ట్‌ఫోలియో మరియు పరిశ్రమ అంచనాలపై నిజాయితీగా చర్చలు.',
        },
        {
          title: 'ప్రాక్టికల్ రోడ్‌మ్యాప్‌లు',
          detail: 'పుస్తకాల సిద్ధాంతం కాకుండా నిజమైన బృందాల్లో డిజైన్, కోడ్ మరియు గ్రోత్ పనితీరు.',
        },
        {
          title: 'ఓపెన్ కమ్యూనిటీ',
          detail: 'పోర్ట్‌ఫోలియో సమీక్షలు, లైవ్ ప్రశ్నోత్తరాలు మరియు పరస్పర సహాయం.',
        },
      ],
    },
    policiesSection: {
      eyebrow: 'విధానాలు',
      heading: 'గోప్యతా విధానం & నిబంధనలు.',
      privacyTab: 'గోప్యతా విధానం',
      termsTab: 'సేవా నిబంధనలు',
      closeLabel: 'మూసివేయండి',
      privacyItems: [
        {
          heading: 'మేము సేకరించే సమాచారం',
          body: 'మీరు ప్రాజెక్ట్ ఫారమ్ (పేరు, ఈమెయిల్/హ్యాండిల్, వివరాలు) లేదా కమ్యూనిటీ వెయిట్‌లిస్ట్ (ఈమెయిల్) ద్వారా స్వచ్ఛందంగా ఇచ్చిన వివరాలను మాత్రమే తీసుకుంటాము.',
        },
        {
          heading: 'డేటా వినియోగం',
          body: 'మీ వివరాలను మీ విచారణకు సమాధానం ఇవ్వడానికి లేదా కమ్యూనిటీ ప్రారంభ సమాచారం పంపడానికి మాత్రమే ఉపయోగిస్తాము. మేము ఎవరితోనూ డేటాను విక్రయించము.',
        },
        {
          heading: 'బ్రౌజర్ ప్రాధాన్యతలు & తొలగింపు',
          body: 'థీమ్ మరియు భాష ఎంపికలు మీ బ్రౌజర్‌లో మాత్రమే సేవ్ అవుతాయి. మీ వివరాలను తొలగించడానికి మాకు ఈమెయిల్ చేయండి.',
        },
      ],
      termsItems: [
        {
          heading: 'ప్రాజెక్ట్ పరిధి & ఒప్పందం',
          body: 'అన్ని క్లయింట్ ప్రాజెక్టులు పని ప్రారంభించే ముందు లిఖితపూర్వక పరిధి, కాలపరిమితి మరియు డెలివరబుల్స్ ఆధారంగా మొదలవుతాయి.',
        },
        {
          heading: 'మేధో సంపత్తి (IP)',
          body: 'పూర్తి చెల్లింపు మరియు ప్రాజెక్ట్ పూర్తి అయిన తర్వాత ఆమోదించబడిన ఫైనల్ ఫైల్స్ క్లయింట్‌కు చెందుతాయి (థర్డ్-పార్టీ లైసెన్సులు మినహా).',
        },
        {
          heading: 'గోప్యత & పోర్ట్‌ఫోలియో',
          body: 'రహస్య క్లయింట్ పనులు ప్రైవేట్‌గా ఉంటాయి. బహిరంగ కేస్ స్టడీలు క్లయింట్ అనుమతితో మాత్రమే ప్రచురిస్తాము.',
        },
      ],
    },
    contactSection: {
      eyebrow: 'సంప్రదించండి',
      headline: 'సంభాషణ ప్రారంభించండి.',
      description:
        'మీరు నిర్మిస్తున్న దాని గురించి మరియు మా బృందం ఎలా సహాయపడగలదో పంచుకోండి—లేదా LinkedIn / Instagram లో మెసేజ్ చేయండి.',
      whatsappCta: 'WhatsApp లో చాట్ చేయండి',
      form: {
        nameLabel: 'పేరు *',
        namePlaceholder: 'మీ పేరు',
        nameError: 'దయచేసి మీ పేరును నమోదు చేయండి.',
        handleLabel: 'ఈమెయిల్ లేదా సోషల్ హ్యాండిల్ *',
        handlePlaceholder: 'you@company.com లేదా @handle',
        handleError: 'దయచేసి ఈమెయిల్ లేదా సోషల్ హ్యాండిల్ ఇవ్వండి.',
        serviceLabel: 'కావాల్సిన సేవ *',
        servicePlaceholder: 'సేవను ఎంచుకోండి...',
        serviceError: 'దయచేసి ఒక సేవను ఎంచుకోండి.',
        briefLabel: 'ప్రాజెక్ట్ వివరాలు *',
        briefPlaceholder: 'మీ ప్రాజెక్ట్, లక్ష్యాలు మరియు కాలపరిమితి గురించి క్లుప్తంగా చెప్పండి.',
        briefError: 'దయచేసి ప్రాజెక్ట్ గురించి కొంత సమాచారం ఇవ్వండి.',
        privacyNote: 'మా గోప్యతా విధానం ప్రకారం సురక్షితం.',
        submitCta: 'వివరాలు పంపండి',
        successTitlePrefix: 'వివరాలు సిద్ధంగా ఉన్నాయి:',
        successBodyPrefix: 'మీ అభ్యర్థన',
        successBodySuffix: 'కోసం ఈమెయిల్ లేదా సోషల్ DM ద్వారా పంపడానికి సిద్ధంగా ఉంది.',
        replyToLabel: 'సంప్రదింపు:',
        briefSummaryLabel: 'సారాంశం:',
        openEmailCta: 'ఈమెయిల్ యాప్‌తో పంపండి',
        sendAnotherCta: 'కొత్త విచారణ',
      },
    },
    footer: {
      tagline: 'భయం లేకుండా సృష్టించండి, భవిಷ్యత్తు కోసం నిర్మించండి.',
      copyrightSuffix: 'సర్వ హక్కులు ప్రత్యేకించబడినవి.',
    },
  },

  ta: {
    a11y: {
      skipToContent: 'முதன்மை உள்ளடக்கத்திற்குச் செல்லவும்',
      themeToggleToDark: 'இருள் தீமுக்கு மாறவும்',
      themeToggleToLight: 'ஒளி தீமுக்கு மாறவும்',
      languageLabel: 'மொழியைத் தேர்ந்தெடுக்கவும்',
      openMenu: 'மெனுவைத் திறக்கவும்',
      closeMenu: 'மெனுவை மூடவும்',
    },
    nav: {
      work: 'படைப்புகள்',
      services: 'சேவைகள்',
      about: 'எங்களைப் பற்றி',
      community: 'சமூகம்',
      policies: 'கொள்கைகள்',
      contact: 'தொடர்பு',
      startProject: 'திட்டத்தைத் தொடங்கு',
    },
    hero: {
      headline: 'அச்சமின்றி உருவாக்குங்கள், எதிர்காலத்திற்காகக் கட்டுங்கள்.',
      subheadline: 'தி ஹைட் ஒரு சுயாதீன படைப்பு மற்றும் தொழில்நுட்ப ஸ்டுடியோ.',
      primaryCta: 'திட்டத்தைத் தொடங்கு',
      secondaryCta: 'படைப்புகளைப் பார்',
    },
    clientsSection: {
      eyebrow: 'நம்பிக்கைக்குரிய வாடிக்கையாளர்கள்',
    },
    servicesSection: {
      eyebrow: 'சேவைகள்',
      heading: 'நான்கு முக்கியத் துறைகள்.',
      subheading:
        'வடிவமைப்பு, பொறியியல், பிராண்ட் அடையாளம் மற்றும் டிஜிட்டல் வளர்ச்சி—ஒரே குழுவில்.',
      items: {
        'product-dev': {
          title: 'முழு தயாரிப்பு மேம்பாடு',
          shortLabel: 'தயாரிப்பு மேம்பாடு',
          description:
            'வேகம், நம்பகத்தன்மை மற்றும் வளர்ச்சிக்கு ஏற்ற முழுமையான வலை மற்றும் டிஜிட்டல் தயாரிப்புப் பொறியியல்.',
          deliverables: [
            'முழு-அடுக்கு வலை செயலிகள் & APIகள்',
            'React & TypeScript கட்டமைப்புகள்',
            'வெளியீட்டுச் சோதனை & தொடர் மேம்பாடு',
          ],
        },
        'ui-ux': {
          title: 'UI/UX வடிவமைப்பு அனுபவங்கள்',
          shortLabel: 'UI/UX',
          description:
            'தெளிவு மற்றும் பயனர் மாற்றத்திற்காக வடிவமைக்கப்பட்ட எளிய இடைமுகங்கள் மற்றும் முன்மாதிரிகள்.',
          deliverables: [
            'தகவல் கட்டமைப்பு & பயனர் ஓட்டங்கள்',
            'நெகிழ்வு UI & வடிவமைப்பு அமைப்புகள்',
            'இயங்கும் கிளிக் முன்மாதிரிகள்',
          ],
        },
        'graphic-design': {
          title: 'கிராஃபிக் வடிவமைப்பு & பிராண்ட் காட்சிகள்',
          shortLabel: 'பிராண்ட் வடிவமைப்பு',
          description:
            'தனித்துவமான காட்சி அடையாளம், பிராண்ட் தொகுப்புகள், பிட்ச் டெக்குகள் மற்றும் சமூகப் படைப்புகள்.',
          deliverables: [
            'பிராண்ட் அடையாளம் & வழிகாட்டிகள்',
            'பேக்கேஜிங், பிட்ச் டெக் & அச்சு',
            'சமூக & வெளியீட்டுப் படைப்புகள்',
          ],
        },
        'digital-marketing': {
          title: 'டிஜிட்டல் மார்க்கெட்டிங்',
          shortLabel: 'டிஜிட்டல் வளர்ச்சி',
          description:
            'உண்மையான வாடிக்கையாளர்களை ஈர்க்கும் மூலோபாய நிலைப்பாடு மற்றும் வளர்ச்சித் திட்டங்கள்.',
          deliverables: [
            'சந்தை அணுகுமுறை உத்தி',
            'செயல்திறன் விளம்பரங்கள் & இறங்கு பக்கங்கள்',
            'உள்ளடக்கம் & மாற்றக் கண்காணிப்பு',
          ],
        },
      },
    },
    portfolioSection: {
      eyebrow: 'தேர்ந்தெடுக்கப்பட்ட பணிகள்',
      heading: 'உண்மையான வாடிக்கையாளர் பணிகள்.',
      filterAriaLabel: 'சேவை வாரியாகத் திட்டங்களை வடிகட்டவும்',
      categories: {
        All: 'அனைத்தும்',
        'Product Dev': 'தயாரிப்பு மேம்பாடு',
        'UI/UX': 'UI/UX',
        'Graphic Design': 'பிராண்ட் வடிவமைப்பு',
        'Digital Marketing': 'டிஜிட்டல் வளர்ச்சி',
      },
      viewCaseStudy: 'விவரம் காண்க',
      swipeHint: 'நகர்த்திப் பார்க்கவும்',
      modal: {
        closeLabel: 'மூடு',
        clientIndustry: 'வாடிக்கையாளர் & துறை',
        hydeRole: 'பங்கு',
        deliverables: 'வழங்கப்பட்டவை',
        challengeHeading: 'சவால்',
        approachHeading: 'அணுகுமுறை',
        outcomeHeading: 'விளைவு',
        startSimilarCta: 'இதேபோன்ற திட்டத்தைத் தொடங்கு',
      },
      projects: {
        'kinetik-ops': {
          title: 'Kinetik செயல்பாடுகள் & கருவூல தளம்',
          industry: 'ஃபின்டெக் SaaS',
          projectType: 'வாடிக்கையாளர் திட்டம்',
          role: 'முழு தயாரிப்பு பொறியியல்',
          summary:
            'பல நாணய நிதி ஒப்புதல்களை ஒரே நேரலை வலை தளத்தில் ஒருங்கிணைத்தோம்.',
          challenge:
            'பல்வேறு தாள்களில் சரிபார்த்ததால் பணம் செலுத்துவதில் தாமதம் ஏற்பட்டது.',
          approach:
            'கடுமையான அணுகல் கட்டுப்பாடுகளுடன் கூடிய React + TypeScript தளத்தை உருவாக்கினோம்.',
          outcome:
            'தினசரி செயல்பாட்டில் நேரலையாகி மூன்று கையேடு தாள்களை மாற்றியது.',
          deliverables: ['வலை செயலி', 'கூறு நூலகம்', 'API இணைப்பு'],
        },
        'verve-booking': {
          title: 'Verve ஸ்டுடியோ & மொபைல் முன்பதிவு',
          industry: 'நலன் & இயக்கம்',
          projectType: 'வாடிக்கையாளர் திட்டம்',
          role: 'UX ஆய்வு & மொபைல் UI',
          summary:
            'ஆறு-படி மொபைல் முன்பதிவை எளிய இரண்டு-தட்டு அனுபவமாக மாற்றினோம்.',
          challenge:
            'சிறிய திரைகளில் குழப்பமான அட்டவணையால் பயனர்கள் முன்பதிவை நிறுத்தினர்.',
          approach:
            'எளிய நேரத் தேர்வு மற்றும் வெளிப்படையான விலையுடன் ஓட்டத்தை எளிதாக்கினோம்.',
          outcome:
            'மொபைல் வெளியீட்டிற்கான முழுமையான இயங்கும் முன்மாதிரியை வழங்கினோம்.',
          deliverables: ['UX ஆய்வு', 'இயங்கும் முன்மாதிரி', 'வடிவமைப்பு அமைப்பு'],
        },
        'orbit-identity': {
          title: 'Orbit ஸ்டுடியோ அடையாளம் & பேக்கேஜிங்',
          industry: 'கட்டிடக்கலை & பொருட்கள்',
          projectType: 'வாடிக்கையாளர் திட்டம்',
          role: 'பிராண்ட் அடையாளம் & பேக்கேஜிங்',
          summary:
            'தொழில்துறை வடிவமைப்பு பிராண்டிற்கான கருப்பு-வெள்ளை அமைப்பு மற்றும் பேக்கேஜிங்.',
          challenge:
            'அதிக வண்ண அச்சுச் செலவின்றி கட்டிடக்கலைத் தோற்றம் தேவைப்பட்டது.',
          approach:
            'புடைப்புச் சின்னம் மற்றும் வோல்ட் நிறக் குறிப்புடன் இரு-நிற அடையாளம் அமைத்தோம்.',
          outcome:
            'தயாரிப்பு வரிசையின் பேக்கேஜிங் மற்றும் எழுதுபொருட்களில் பயன்பட்டது.',
          deliverables: ['பிராண்ட் வழிகாட்டி', 'பேக்கேஜிங் அமைப்பு', 'அச்சுப் பொருட்கள்'],
        },
        'meridian-campaign': {
          title: 'Meridian பல-சேனல் வெளியீட்டு இயந்திரம்',
          industry: 'B2B சேவைகள்',
          projectType: 'தொடர் ஒப்பந்தம்',
          role: 'வளர்ச்சி உத்தி & படைப்பு இயக்கம்',
          summary:
            'எழுத்துரு விளம்பரங்களையும் மாற்றம் தரும் இறங்கு பக்கங்களையும் இணைத்த பிரச்சாரம்.',
          challenge:
            'பரிந்துரைகள் இருந்தாலும் புதிய B2B வாடிக்கையாளர்களைப் பெறத் தொடர் வழிமுறை இல்லை.',
          approach:
            'உயர்-மாறுபாடு கொண்ட விளம்பரங்கள் மற்றும் தெளிவான பக்கங்களை உருவாக்கினோம்.',
          outcome:
            'தொடர் மேம்பாட்டுடன் வாராந்திர வாடிக்கையாளர் வரத்து உறுதி செய்யப்பட்டது.',
          deliverables: ['நிலைப்பாட்டு வழிகாட்டி', 'விளம்பரங்கள்', 'இறங்கு பக்கங்கள்'],
        },
      },
    },
    aboutSection: {
      eyebrow: 'தி ஹைட் ஸ்டுடியோஸ் பற்றி',
      headline: 'சிறிய குழு. கூட்டுப் பொறுப்பு.',
      description:
        '2025 முதல் இயங்கும் எங்கள் ஐந்து பேர் கொண்ட குழு பொறியியல், UI/UX, பிராண்ட் வடிவமைப்பு மற்றும் டிஜிட்டல் மார்க்கெட்டிங்கில் வாடிக்கையாளர்களுடன் நேரடியாக இணைந்து செயல்படுகிறது.',
      steps: [
        {
          number: '01',
          title: 'புரிதல்',
          description: 'வடிவமைப்பிற்கு முன் சிக்கல், பயனர் தேவை மற்றும் எல்லைகளைத் தெளிவுபடுத்துகிறோம்.',
        },
        {
          number: '02',
          title: 'வடிவமைத்தல்',
          description: 'திட்ட எல்லை, காட்சித் தொனி மற்றும் தொழில்நுட்பத் திசையைத் தொடக்கத்திலேயே வரையறுக்கிறோம்.',
        },
        {
          number: '03',
          title: 'உருவாக்கல்',
          description: 'தடையின்றி வடிவமைப்பு, குறியீடு மற்றும் மதிப்பாய்வுகளை இணைந்து செய்கிறோம்.',
        },
        {
          number: '04',
          title: 'மேம்படுத்தல்',
          description: 'பயனர்களிடம் சேர்த்து, கருத்துகளின் அடிப்படையில் தொடர்ந்து செம்மைப்படுத்துகிறோம்.',
        },
      ],
    },
    communitySection: {
      badge: 'விரைவில் வருகிறது',
      headline: 'வாடிக்கையாளர் பணிக்கு அப்பால்: தொழில்நுட்பத் தொழில் குழப்பத்தைத் தீர்ப்பது.',
      description:
        'மாணவர்கள், தொழில்நுட்ப ஆர்வலர்கள், ஃப்ரீலான்சர்கள் மற்றும் பணியாளர்களுக்குத் துறையில் உள்ளவர்களிடமிருந்து 1-க்கு-1 தெளிவு மற்றும் நடைமுறை வழிகாட்டல் தரும் திறந்த தளம்.',
      audiences: ['மாணவர்கள்', 'ஆர்வலர்கள்', 'ஃப்ரீலான்சர்கள்', 'பணியாளர்கள்'],
      emailLabel: 'மின்னஞ்சல் முகவரி',
      emailPlaceholder: 'you@example.com',
      emailError: 'சரியான மின்னஞ்சலை உள்ளிடவும்.',
      submitCta: 'பட்டியலில் இணையுங்கள்',
      successTitle: 'நீங்கள் முன்கூட்டிய பட்டியலில் இணைந்துவிட்டீர்கள்',
      successBodyPrefix: 'சேமிக்கப்பட்ட மின்னஞ்சல்:',
      resetWaitlist: 'வேறொரு மின்னஞ்சல் பயன்படுத்தவும்',
      followLabel: 'புதுப்பிப்புகளுக்குப் பின்தொடரவும்:',
      pillars: [
        {
          title: '1-க்கு-1 தெளிவு',
          detail: 'பணிகள், போர்ட்ஃபோலியோ மற்றும் துறை எதிர்பார்ப்புகள் குறித்த நேர்மையான உரையாடல்.',
        },
        {
          title: 'நடைமுறை வழிகாட்டிகள்',
          detail: 'பாடப்புத்தகக் கோட்பாடு அல்ல—உண்மையான குழுக்களில் வடிவமைப்பு, குறியீடு, வளர்ச்சி இணைவது எப்படி.',
        },
        {
          title: 'திறந்த சமூகம்',
          detail: 'போர்ட்ஃபோலியோ கருத்துகள், நேரடி கேள்வி-பதில் மற்றும் சக நண்பர்களின் ஆதரவு.',
        },
      ],
    },
    policiesSection: {
      eyebrow: 'கொள்கைகள்',
      heading: 'தனியுரிமைக் கொள்கை & விதிமுறைகள்.',
      privacyTab: 'தனியுரிமைக் கொள்கை',
      termsTab: 'சேவை விதிமுறைகள்',
      closeLabel: 'மூடு',
      privacyItems: [
        {
          heading: 'நாங்கள் சேகரிக்கும் தகவல்கள்',
          body: 'திட்ட விசாரணைப் படிவம் (பெயர், மின்னஞ்சல்/கணக்கு, சுருக்கம்) அல்லது சமூகப் பட்டியல் (மின்னஞ்சல்) மூலம் நீங்கள் தாமாக வழங்கும் விவரங்களை மட்டுமே சேகரிக்கிறோம்.',
        },
        {
          heading: 'தரவுப் பயன்பாடு',
          body: 'உங்கள் விவரங்கள் உங்கள் விசாரணைக்குப் பதிலளிக்கவோ சமூகத் தொடக்கத்தை அறிவிக்கவோ மட்டுமே பயன்படும். நாங்கள் தரவை விற்பதில்லை.',
        },
        {
          heading: 'விருப்பங்கள் & தரவு நீக்கம்',
          body: 'தீம் மற்றும் மொழி விருப்பங்கள் உங்கள் உலாவியில் மட்டுமே சேமிக்கப்படும். உங்கள் தரவை நீக்க மின்னஞ்சல் மூலம் தொடர்பு கொள்ளவும்.',
        },
      ],
      termsItems: [
        {
          heading: 'திட்ட எல்லை & ஒப்பந்தம்',
          body: 'அனைத்துத் திட்டங்களும் பணி தொடங்கும் முன் எழுத்துப்பூர்வ எல்லை, கால அளவு மற்றும் விநியோகத் திட்டத்துடன் தொடங்குகின்றன.',
        },
        {
          heading: 'அறிவுசார் சொத்துரிமை',
          body: 'முழுப் பணம் செலுத்தித் திட்டம் முடிந்ததும் அங்கீகரிக்கப்பட்ட இறுதிப் படைப்புகள் வாடிக்கையாளருக்குச் சொந்தமாகும் (மூன்றாம் தரப்பு உரிமங்கள் தவிர).',
        },
        {
          heading: 'ரகசியத்தன்மை & போர்ட்ஃபோலியோ',
          body: 'ரகசியப் பணிகள் தனிப்பட்டதாகவே இருக்கும். பொதுவான படைப்புகள் வாடிக்கையாளர் அனுமதியுடன் மட்டுமே பகிரப்படும்.',
        },
      ],
    },
    contactSection: {
      eyebrow: 'தொடர்பு',
      headline: 'உரையாடலைத் தொடங்குங்கள்.',
      description:
        'நீங்கள் உருவாக்குவது என்ன, எங்கள் குழு எவ்வாறு உதவலாம் என்பதைப் பகிருங்கள்—அல்லது LinkedIn / Instagram-இல் நேரடியாகத் தொடர்பு கொள்ளுங்கள்.',
      whatsappCta: 'WhatsApp-இல் உரையாடுங்கள்',
      form: {
        nameLabel: 'பெயர் *',
        namePlaceholder: 'உங்கள் பெயர்',
        nameError: 'உங்கள் பெயரை உள்ளிடவும்.',
        handleLabel: 'மின்னஞ்சல் அல்லது சமூகக் கணக்கு *',
        handlePlaceholder: 'you@company.com அல்லது @handle',
        handleError: 'மின்னஞ்சல் அல்லது சமூகக் கணக்கை உள்ளிடவும்.',
        serviceLabel: 'தேவையான சேவை *',
        servicePlaceholder: 'சேவையைத் தேர்ந்தெடுக்கவும்...',
        serviceError: 'ஒரு சேவையைத் தேர்ந்தெடுக்கவும்.',
        briefLabel: 'திட்டச் சுருக்கம் *',
        briefPlaceholder: 'உங்கள் திட்டம், இலக்குகள் மற்றும் கால அளவைக் சுருக்கமாகப் பகிருங்கள்.',
        briefError: 'திட்டம் குறித்த சிறிய குறிப்பை எழுதவும்.',
        privacyNote: 'எங்கள் தனியுரிமைக் கொள்கையின் கீழ் பாதுகாக்கப்பட்டது.',
        submitCta: 'விசாரணையை அனுப்பு',
        successTitlePrefix: 'விசாரணை தயார்:',
        successBodyPrefix: 'உங்கள் தகவல்',
        successBodySuffix: 'க்காக மின்னஞ்சல் அல்லது சமூகச் செய்தி மூலம் அனுப்பத் தயாராக உள்ளது.',
        replyToLabel: 'பதில் முகவரி:',
        briefSummaryLabel: 'சுருக்கம்:',
        openEmailCta: 'மின்னஞ்சல் வழியாக அனுப்பு',
        sendAnotherCta: 'புதிய விசாரணை',
      },
    },
    footer: {
      tagline: 'அச்சமின்றி உருவாக்குங்கள், எதிர்காலத்திற்காகக் கட்டுங்கள்.',
      copyrightSuffix: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },

  kn: {
    a11y: {
      skipToContent: 'ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ತೆರಳಿ',
      themeToggleToDark: 'ಡಾರ್ಕ್ ಥೀಮ್‌ಗೆ ಬದಲಾಯಿಸಿ',
      themeToggleToLight: 'ಲೈಟ್ ಥೀಮ್‌ಗೆ ಬದಲಾಯಿಸಿ',
      languageLabel: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',
      openMenu: 'ಮೆನು ತೆರೆಯಿರಿ',
      closeMenu: 'ಮೆನು ಮುಚ್ಚಿರಿ',
    },
    nav: {
      work: 'ಕೆಲಸಗಳು',
      services: 'ಸೇವೆಗಳು',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      community: 'ಸಮುದಾಯ',
      policies: 'ನೀತಿಗಳು',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      startProject: 'ಯೋಜನೆ ಆರಂಭಿಸಿ',
    },
    hero: {
      headline: 'ಭಯವಿಲ್ಲದೆ ಸೃಷ್ಟಿಸಿ, ಭವಿಷ್ಯಕ್ಕಾಗಿ ನಿರ್ಮಿಸಿ.',
      subheadline: 'ದಿ ಹೈಡ್ ಒಂದು ಸ್ವತಂತ್ರ ಕ್ರಿಯೇಟಿವ್ ಟೆಕ್ ಸ್ಟುಡಿಯೋ.',
      primaryCta: 'ಯೋಜನೆ ಆರಂಭಿಸಿ',
      secondaryCta: 'ಕೆಲಸ ನೋಡಿ',
    },
    clientsSection: {
      eyebrow: 'ನಂಬಿಕಸ್ಥ ಗ್ರಾಹಕರು',
    },
    servicesSection: {
      eyebrow: 'ಸೇವೆಗಳು',
      heading: 'ನಾಲ್ಕು ಮುಖ್ಯ ವಿಭಾಗಗಳು.',
      subheading:
        'ವಿನ್ಯಾಸ, ಎಂಜಿನಿಯರಿಂಗ್, ಬ್ರ್ಯಾಂಡ್ ಗುರುತು ಮತ್ತು ಡಿಜಿಟಲ್ ಬೆಳವಣಿಗೆ—ಒಂದೇ ತಂಡದಲ್ಲಿ.',
      items: {
        'product-dev': {
          title: 'ಪೂರ್ಣ ಪ್ರೊಡಕ್ಟ್ ಡೆವಲಪ್‌ಮೆಂಟ್',
          shortLabel: 'ಪ್ರೊಡಕ್ಟ್ ಡೆವ್',
          description:
            'ವೇಗ, ನಂಬಿಕೆ ಮತ್ತು ಬೆಳವಣಿಗೆಗೆ ತಕ್ಕಂತೆ ಎಂಡ್-ಟು-ಎಂಡ್ ವೆಬ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಉತ್ಪನ್ನ ಎಂಜಿನಿಯರಿಂಗ್.',
          deliverables: [
            'ಫುಲ್-ಸ್ಟ್ಯಾಕ್ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು ಮತ್ತು APIಗಳು',
            'React ಮತ್ತು TypeScript ಪ್ರೊಡಕ್ಷನ್ ನಿರ್ಮಾಣ',
            'ಲಾಂಚ್ QA ಮತ್ತು ನಿರಂತರ ಸುಧಾರಣೆ',
          ],
        },
        'ui-ux': {
          title: 'UI/UX ವಿನ್ಯಾಸ ಅನುಭವಗಳು',
          shortLabel: 'UI/UX',
          description:
            'ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಫಲಿತಾಂಶಕ್ಕಾಗಿ ರೂಪಿಸಿದ ಸುಲಭ ಇಂಟರ್‌ಫೇಸ್‌ಗಳು ಮತ್ತು ಪ್ರೊಟೊಟೈಪ್‌ಗಳು.',
          deliverables: [
            'ಮಾಹಿತಿ ವಿನ್ಯಾಸ ಮತ್ತು ಬಳಕೆದಾರ ಹರಿವು',
            'ರೆಸ್ಪಾನ್ಸಿವ್ UI ಮತ್ತು ಡಿಸೈನ್ ಸಿಸ್ಟಮ್ಸ್',
            'ಇಂಟರಾಕ್ಟಿವ್ ಕ್ಲಿಕಬಲ್ ಪ್ರೊಟೊಟೈಪ್‌ಗಳು',
          ],
        },
        'graphic-design': {
          title: 'ಗ್ರಾಫಿಕ್ ವಿನ್ಯಾಸ ಮತ್ತು ಬ್ರ್ಯಾಂಡ್ ದೃಶ್ಯಗಳು',
          shortLabel: 'ಬ್ರ್ಯಾಂಡ್ ವಿನ್ಯಾಸ',
          description:
            'ವಿಶಿಷ್ಟ ದೃಶ್ಯ ಗುರುತು, ಬ್ರ್ಯಾಂಡ್ ಕಿಟ್‌ಗಳು, ಪಿಚ್ ಡೆಕ್‌ಗಳು ಮತ್ತು ಸೋಶಿಯಲ್ ಕ್ರಿಯೇಟಿವ್ಸ್.',
          deliverables: [
            'ಬ್ರ್ಯಾಂಡ್ ಗುರುತು ಮತ್ತು ಮಾರ್ಗಸೂಚಿ',
            'ಪ್ಯಾಕೇಜಿಂಗ್, ಪಿಚ್ ಡೆಕ್ ಮತ್ತು ಪ್ರಿಂಟ್',
            'ಸೋಶಿಯಲ್ ಮತ್ತು ಲಾಂಚ್ ಅಭಿಯಾನದ ವಿನ್ಯಾಸ',
          ],
        },
        'digital-marketing': {
          title: 'ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್',
          shortLabel: 'ಡಿಜಿಟಲ್ ಗ್ರೋತ್',
          description:
            'ನೈಜ ಗ್ರಾಹಕರನ್ನು ಆಕರ್ಷಿಸುವ ತಂತ್ರಗಾರಿಕೆ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಅಭಿಯಾನಗಳು.',
          deliverables: [
            'ಗೋ-ಟು-ಮಾರ್ಕೆಟ್ ಅಭಿಯಾನ ತಂತ್ರ',
            'ಪರಿಣಾಮಕಾರಿ ಜಾಹೀರಾತು ಮತ್ತು ಲ್ಯಾಂಡಿಂಗ್ ಪುಟಗಳು',
            'ಕಂಟೆಂಟ್ ಮತ್ತು ಕನ್ವರ್ಶನ್ ಟ್ರ್ಯಾಕಿಂಗ್',
          ],
        },
      },
    },
    portfolioSection: {
      eyebrow: 'ಆಯ್ದ ಕೆಲಸಗಳು',
      heading: 'ನೈಜ ಕ್ಲೈಂಟ್ ಯೋಜನೆಗಳು.',
      filterAriaLabel: 'ಸೇವೆಯ ಪ್ರಕಾರ ಯೋಜನೆಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ',
      categories: {
        All: 'ಎಲ್ಲಾ',
        'Product Dev': 'ಪ್ರೊಡಕ್ಟ್ ಡೆವ್',
        'UI/UX': 'UI/UX',
        'Graphic Design': 'ಬ್ರ್ಯಾಂಡ್ ವಿನ್ಯಾಸ',
        'Digital Marketing': 'ಡಿಜಿಟಲ್ ಗ್ರೋತ್',
      },
      viewCaseStudy: 'ಕೇಸ್ ಸ್ಟಡಿ ನೋಡಿ',
      swipeHint: 'ಸ್ವೈಪ್ ಮಾಡಿ',
      modal: {
        closeLabel: 'ಮುಚ್ಚಿ',
        clientIndustry: 'ಕ್ಲೈಂಟ್ ಮತ್ತು ಕ್ಷೇತ್ರ',
        hydeRole: 'ಪಾತ್ರ',
        deliverables: 'ಒದಗಿಸಿದವು',
        challengeHeading: 'ಸವಾಲು',
        approachHeading: 'ನಮ್ಮ ವಿಧಾನ',
        outcomeHeading: 'ಫಲಿತಾಂಶ',
        startSimilarCta: 'ಇದೇ ರೀತಿಯ ಯೋಜನೆ ಆರಂಭಿಸಿ',
      },
      projects: {
        'kinetik-ops': {
          title: 'Kinetik ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ಟ್ರೆಜರಿ ಪೋರ್ಟಲ್',
          industry: 'ಫಿನ್‌ಟೆಕ್ SaaS',
          projectType: 'ಕ್ಲೈಂಟ್ ಯೋಜನೆ',
          role: 'ಪೂರ್ಣ ಪ್ರೊಡಕ್ಟ್ ಎಂಜಿನಿಯರಿಂಗ್',
          summary:
            'ಬಹು-ಕರೆನ್ಸಿ ಟ್ರೆಜರಿ ಅನುಮೋದನೆಗಳನ್ನು ಒಂದೇ ರಿಯಲ್-ಟೈಮ್ ವೆಬ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಏಕೀಕರಿಸಿದ್ದೇವೆ.',
          challenge:
            'ಪ್ರತ್ಯೇಕ ಸ್ಪ್ರೆಡ್‌ಶೀಟ್‌ಗಳಲ್ಲಿ ಪರಿಶೀಲಿಸುವುದರಿಂದ ಪಾವತಿ ಮತ್ತು ಆಡಿಟ್ ವಿಳಂಬವಾಗುತ್ತಿತ್ತು.',
          approach:
            'ಕಟ್ಟುನಿಟ್ಟಿನ ಅನುಮತಿಗಳು ಮತ್ತು ವೇಗದ ಫಿಲ್ಟರಿಂಗ್‌ನೊಂದಿಗೆ React + TypeScript ಪೋರ್ಟಲ್ ನಿರ್ಮಿಸಿದೆವು.',
          outcome:
            'ದೈನಂದಿನ ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿ ಲೈವ್ ಆಗಿದ್ದು ಮೂರು ಹಳೆಯ ಶೀಟ್‌ಗಳನ್ನು ಬದಲಿಸಿದೆ.',
          deliverables: ['ವೆಬ್ ಆ್ಯಪ್', 'ಕಾಂಪೊನೆಂಟ್ ಲೈಬ್ರರಿ', 'API ಏಕೀಕರಣ'],
        },
        'verve-booking': {
          title: 'Verve ಸ್ಟುಡಿಯೋ ಮತ್ತು ಮೊಬಿಲಿಟಿ ಬುಕಿಂಗ್',
          industry: 'ವೆಲ್‌ನೆಸ್ ಮತ್ತು ಮೊಬಿಲಿಟಿ',
          projectType: 'ಕ್ಲೈಂಟ್ ಯೋಜನೆ',
          role: 'UX ಸಂಶೋಧನೆ ಮತ್ತು ಮೊಬೈಲ್ UI',
          summary:
            'ಆರು ಹಂತಗಳ ಮೊಬೈಲ್ ಬುಕಿಂಗ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸುಲಭವಾದ ಎರಡು-ಟ್ಯಾಪ್ ಅನುಭವವಾಗಿಸಿದೆವು.',
          challenge:
            'ಚಿಕ್ಕ ಪರದೆಗಳಲ್ಲಿ ಗೊಂದಲಮಯ ವೇಳಾಪಟ್ಟಿಯಿಂದ ಬಳಕೆದಾರರು ಬುಕಿಂಗ್ ಬಿಡುತ್ತಿದ್ದರು.',
          approach:
            'ಸುಲಭ ಸಮಯ ಆಯ್ಕೆ ಮತ್ತು ಪಾರದರ್ಶಕ ದರಗಳೊಂದಿಗೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸರಳಗೊಳಿಸಿದೆವು.',
          outcome:
            'ಕ್ಲೈಂಟ್ ಮೊಬೈಲ್ ಬಿಡುಗಡೆಗಾಗಿ ಇಂಟರಾಕ್ಟಿವ್ ಪ್ರೊಟೊಟೈಪ್ ಹಸ್ತಾಂತರಿಸಿದೆವು.',
          deliverables: ['UX ಆಡಿಟ್', 'ಇಂಟರಾಕ್ಟಿವ್ ಪ್ರೊಟೊಟೈಪ್', 'ಡಿಸೈನ್ ಟೋಕನ್ಸ್'],
        },
        'orbit-identity': {
          title: 'Orbit ಸ್ಟುಡಿಯೋ ಗುರುತು ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್',
          industry: 'ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಉತ್ಪನ್ನಗಳು',
          projectType: 'ಕ್ಲೈಂಟ್ ಯೋಜನೆ',
          role: 'ಬ್ರ್ಯಾಂಡ್ ಗುರುತು ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್',
          summary:
            'ಕೈಗಾರಿಕಾ ವಿನ್ಯಾಸ ಬ್ರ್ಯಾಂಡ್‌ಗಾಗಿ ಕಪ್ಪು-ಬಿಳುಪು ವ್ಯವಸ್ಥೆ ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್.',
          challenge:
            'ದುಬಾರಿ ಮಲ್ಟಿ-ಇಂಕ್ ಪ್ರಿಂಟಿಂಗ್ ಇಲ್ಲದೆ ವಾಸ್ತುಶಿಲ್ಪೀಯ ಗುರುತು ಬೇಕಾಗಿತ್ತು.',
          approach:
            'ಎಂಬಾಸ್ಡ್ ಚಿಹ್ನೆ ಮತ್ತು ವೋಲ್ಟ್ ಗುರುತಿನೊಂದಿಗೆ ದ್ವಿ-ಬಣ್ಣದ ವಿನ್ಯಾಸ ರೂಪಿಸಿದೆವು.',
          outcome:
            'ಉತ್ಪನ್ನ ಸಾಲಿನ ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಸ್ಟೇಷನರಿಯಲ್ಲಿ ಅಳವಡಿಸಲಾಗಿದೆ.',
          deliverables: ['ಬ್ರ್ಯಾಂಡ್ ಮಾರ್ಗಸೂಚಿ', 'ಪ್ಯಾಕೇಜಿಂಗ್ ವ್ಯವಸ್ಥೆ', 'ಪ್ರಿಂಟ್ ವಿನ್ಯಾಸ'],
        },
        'meridian-campaign': {
          title: 'Meridian ಮಲ್ಟಿ-ಚಾನೆಲ್ ಲಾಂಚ್ ಎಂಜಿನ್',
          industry: 'B2B ಸೇವೆಗಳು',
          projectType: 'ಸಕ್ರಿಯ ರಿಟೈನರ್',
          role: 'ಬೆಳವಣಿಗೆ ತಂತ್ರ ಮತ್ತು ಕ್ರಿಯೇಟಿವ್ ನಿರ್ದೇಶನ',
          summary:
            'ಆಕರ್ಷಕ ಜಾಹೀರಾತುಗಳು ಮತ್ತು ಕನ್ವರ್ಶನ್ ಲ್ಯಾಂಡಿಂಗ್ ಪುಟಗಳೊಂದಿಗೆ ಲಾಂಚ್ ಅಭಿಯಾನ.',
          challenge:
            'ಉತ್ತಮ ಶಿಫಾರಸುಗಳಿದ್ದರೂ ಹೊಸ B2B ಲೀಡ್‌ಗಳಿಗಾಗಿ ನಿರಂತರ ಡಿಜಿಟಲ್ ಮಾರ್ಗವಿರಲಿಲ್ಲ.',
          approach:
            'ಹೈ-ಕಾಂಟ್ರಾಸ್ಟ್ ಜಾಹೀರಾತುಗಳು ಮತ್ತು ಸ್ಪಷ್ಟ ಲ್ಯಾಂಡಿಂಗ್ ಪುಟಗಳಿಂದ ಸಂದೇಶ ಏಕೀಕರಿಸಿದೆವು.',
          outcome:
            'ನಿರಂತರ ಸುಧಾರಣೆಯೊಂದಿಗೆ ವಾರದ ಲೀಡ್ ವ್ಯವಸ್ಥೆ ಸ್ಥಾಪನೆಯಾಗಿದೆ.',
          deliverables: ['ಸ್ಥಾನೀಕರಣ ಪ್ಲೇಬುಕ್', 'ಜಾಹೀರಾತುಗಳು', 'ಲ್ಯಾಂಡಿಂಗ್ ಪುಟಗಳು'],
        },
      },
    },
    aboutSection: {
      eyebrow: 'ದಿ ಹೈಡ್ ಸ್ಟುಡಿಯೋಸ್ ಬಗ್ಗೆ',
      headline: 'ಚಿಕ್ಕ ತಂಡ. ಸಮಾನ ಜವಾಬ್ದಾರಿ.',
      description:
        '2025 ರಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ನಮ್ಮ ಐದು ಜನರ ಚುರುಕು ತಂಡ ಎಂಜಿನಿಯರಿಂಗ್, UI/UX, ಬ್ರ್ಯಾಂಡ್ ವಿನ್ಯಾಸ ಮತ್ತು ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್‌ನಲ್ಲಿ ಕ್ಲೈಂಟ್‌ಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಕೈಜೋಡಿಸುತ್ತದೆ.',
      steps: [
        {
          number: '01',
          title: 'ಅರ್ಥೈಸಿಕೊಳ್ಳಿ',
          description: 'ವಿನ್ಯಾಸಕ್ಕೆ ಮುನ್ನ ಸಮಸ್ಯೆ, ಬಳಕೆದಾರರ ಅಗತ್ಯ ಮತ್ತು ಮಿತಿಗಳನ್ನು ಸ್ಪಷ್ಟಪಡಿಸುತ್ತೇವೆ.',
        },
        {
          number: '02',
          title: 'ರೂಪಿಸಿ',
          description: 'ವ್ಯಾಪ್ತಿ, ದೃಶ್ಯ ಶೈಲಿ ಮತ್ತು ತಾಂತ್ರಿಕ ದಿಕ್ಕನ್ನು ಆರಂಭದಲ್ಲೇ ನಿರ್ಧರಿಸುತ್ತೇವೆ.',
        },
        {
          number: '03',
          title: 'ನಿರ್ಮಿಸಿ',
          description: 'ವಿನ್ಯಾಸ, ಕೋಡ್ ಮತ್ತು ವಿಮರ್ಶೆಗಳನ್ನು ಯಾವುದೇ ಅಂತರವಿಲ್ಲದೆ ಒಟ್ಟಾಗಿ ಮಾಡುತ್ತೇವೆ.',
        },
        {
          number: '04',
          title: 'ಸುಧಾರಿಸಿ',
          description: 'ನೈಜ ಬಳಕೆದಾರರಿಗೆ ತಲುಪಿಸಿ, ಪ್ರತಿಕ್ರಿಯೆಯೊಂದಿಗೆ ನಿರಂತರವಾಗಿ ಉತ್ತಮಪಡಿಸುತ್ತೇವೆ.',
        },
      ],
    },
    communitySection: {
      badge: 'ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ',
      headline: 'ಕ್ಲೈಂಟ್ ಕೆಲಸದಾಚೆ: ಟೆಕ್ ವೃತ್ತಿ ಗೊಂದಲಕ್ಕೆ ಪರಿಹಾರ.',
      description:
        'ವಿದ್ಯಾರ್ಥಿಗಳು, ಟೆಕ್ ಆಸಕ್ತರು, ಫ್ರೀಲ್ಯಾನ್ಸರ್‌ಗಳು ಮತ್ತು ಉದ್ಯೋಗಿಗಳಿಗೆ ಸಕ್ರಿಯ ನಿರ್ಮಾಪಕರಿಂದ 1-ಆನ್-1 ಸ್ಪಷ್ಟತೆ ಹಾಗೂ ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗಸೂಚಿ ನೀಡುವ ಮುಕ್ತ ಸಮುದಾಯ ವೇದಿಕೆ.',
      audiences: ['ವಿದ್ಯಾರ್ಥಿಗಳು', 'ಆಸಕ್ತರು', 'ಫ್ರೀಲ್ಯಾನ್ಸರ್‌ಗಳು', 'ಉದ್ಯೋಗಿಗಳು'],
      emailLabel: 'ಇಮೇಲ್ ವಿಳಾಸ',
      emailPlaceholder: 'you@example.com',
      emailError: 'ದಯವಿಟ್ಟು ಸರಿಯಾದ ಇಮೇಲ್ ನಮೂದಿಸಿ.',
      submitCta: 'ಪಟ್ಟಿಗೆ ಸೇರಿ',
      successTitle: 'ನೀವು ಆರಂಭಿಕ ಪಟ್ಟಿಗೆ ಸೇರಿದ್ದೀರಿ',
      successBodyPrefix: 'ಉಳಿಸಿದ ಇಮೇಲ್:',
      resetWaitlist: 'ಬೇರೆ ಇಮೇಲ್ ಬಳಸಿ',
      followLabel: 'ಅಪ್‌ಡೇಟ್‌ಗಳಿಗಾಗಿ:',
      pillars: [
        {
          title: '1-ಆನ್-1 ಸ್ಪಷ್ಟತೆ',
          detail: 'ಪಾತ್ರಗಳು, ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಮತ್ತು ನೈಜ ಉದ್ಯಮದ ನಿರೀಕ್ಷೆಗಳ ಕುರಿತು ನೇರ ಮಾತುಕತೆ.',
        },
        {
          title: 'ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗಸೂಚಿ',
          detail: 'ಪಠ್ಯಪುಸ್ತಕ ಸಿದ್ಧಾಂತವಲ್ಲ—ನೈಜ ತಂಡಗಳಲ್ಲಿ ವಿನ್ಯಾಸ, ಕೋಡ್ ಮತ್ತು ಗ್ರೋತ್ ಕೆಲಸ ಮಾಡುವ ರೀತಿ.',
        },
        {
          title: 'ಮುಕ್ತ ಸಮುದಾಯ',
          detail: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ವಿಮರ್ಶೆ, ಲೈವ್ ಪ್ರಶ್ನೋತ್ತರ ಮತ್ತು ಪರಸ್ಪರ ಬೆಂಬಲ.',
        },
      ],
    },
    policiesSection: {
      eyebrow: 'ನೀತಿಗಳು',
      heading: 'ಗೌಪ್ಯತಾ ನೀತಿ ಮತ್ತು ನಿಯಮಗಳು.',
      privacyTab: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      termsTab: 'ಸೇವಾ ನಿಯಮಗಳು',
      closeLabel: 'ಮುಚ್ಚಿ',
      privacyItems: [
        {
          heading: 'ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ',
          body: 'ಪ್ರಾಜೆಕ್ಟ್ ವಿಚಾರಣೆ ಫಾರ್ಮ್ (ಹೆಸರು, ಇಮೇಲ್/ಹ್ಯಾಂಡಲ್, ವಿವರ) ಅಥವಾ ಸಮುದಾಯ ಪಟ್ಟಿ (ಇಮೇಲ್) ಮೂಲಕ ನೀವು ಸ್ವಯಂಪ್ರೇರಿತವಾಗಿ ನೀಡುವ ವಿವರಗಳನ್ನು ಮಾತ್ರ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.',
        },
        {
          heading: 'ಡೇಟಾ ಬಳಕೆ',
          body: 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಿಮ್ಮ ವಿಚಾರಣೆಗೆ ಉತ್ತರಿಸಲು ಅಥವಾ ಸಮುದಾಯದ ಆರಂಭದ ಮಾಹಿತಿ ನೀಡಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ. ನಾವು ಡೇಟಾವನ್ನು ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ.',
        },
        {
          heading: 'ಬ್ರೌಸರ್ ಆದ್ಯತೆಗಳು ಮತ್ತು ಅಳಿಸುವಿಕೆ',
          body: 'ಥೀಮ್ ಮತ್ತು ಭಾಷೆಯ ಆಯ್ಕೆಗಳು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತ್ರ ಉಳಿಯುತ್ತವೆ. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಅಳಿಸಲು ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ.',
        },
      ],
      termsItems: [
        {
          heading: 'ಯೋಜನೆಯ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಪ್ರಸ್ತಾವನೆ',
          body: 'ಎಲ್ಲಾ ಕ್ಲೈಂಟ್ ಯೋಜನೆಗಳು ಕೆಲಸ ಆರಂಭಿಸುವ ಮೊದಲು ಲಿಖಿತ ವ್ಯಾಪ್ತಿ, ಕಾಲಮಿತಿ ಮತ್ತು ವಿತರಣಾ ಪಟ್ಟಿಯೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ.',
        },
        {
          heading: 'ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಹಕ್ಕು (IP)',
          body: 'ಸಂಪೂರ್ಣ ಪಾವತಿ ಮತ್ತು ಯೋಜನೆ ಮುಗಿದ ನಂತರ ಅನುಮೋದಿತ ಅಂತಿಮ ಫೈಲ್‌ಗಳು ಕ್ಲೈಂಟ್‌ಗೆ ಸೇರುತ್ತವೆ (ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಪರವಾನಗಿಗಳನ್ನು ಹೊರತುಪಡಿಸಿ).',
        },
        {
          heading: 'ಗೌಪ್ಯತೆ ಮತ್ತು ಪೋರ್ಟ್‌ಫೋಲಿಯೋ',
          body: 'ಗೌಪ್ಯ ಕ್ಲೈಂಟ್ ಕೆಲಸಗಳು ಖಾಸಗಿಯಾಗಿರುತ್ತವೆ. ಸಾರ್ವಜನಿಕ ಕೇಸ್ ಸ್ಟಡಿಗಳನ್ನು ಕ್ಲೈಂಟ್ ಅನುಮತಿಯೊಂದಿಗೆ ಮಾತ್ರ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.',
        },
      ],
    },
    contactSection: {
      eyebrow: 'ಸಂಪರ್ಕಿಸಿ',
      headline: 'ಸಂವಾದ ಆರಂಭಿಸಿ.',
      description:
        'ನೀವು ಏನು ನಿರ್ಮಿಸುತ್ತಿದ್ದೀರಿ ಮತ್ತು ನಮ್ಮ ತಂಡ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು ಎಂಬುದನ್ನು ತಿಳಿಸಿ—ಅಥವಾ LinkedIn / Instagram ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ.',
      whatsappCta: 'WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ',
      form: {
        nameLabel: 'ಹೆಸರು *',
        namePlaceholder: 'ನಿಮ್ಮ ಹೆಸರು',
        nameError: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.',
        handleLabel: 'ಇಮೇಲ್ ಅಥವಾ ಸೋಶಿಯಲ್ ಹ್ಯಾಂಡಲ್ *',
        handlePlaceholder: 'you@company.com ಅಥವಾ @handle',
        handleError: 'ದಯವಿಟ್ಟು ಇಮೇಲ್ ಅಥವಾ ಸೋಶಿಯಲ್ ಹ್ಯಾಂಡಲ್ ನೀಡಿ.',
        serviceLabel: 'ಬೇಕಾದ ಸೇವೆ *',
        servicePlaceholder: 'ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ...',
        serviceError: 'ದಯವಿಟ್ಟು ಒಂದು ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
        briefLabel: 'ಯೋಜನೆಯ ವಿವರ *',
        briefPlaceholder: 'ನಿಮ್ಮ ಯೋಜನೆ, ಗುರಿಗಳು ಮತ್ತು ಕಾಲಮಿತಿಯ ಬಗ್ಗೆ ಸಂಕ್ಷಿಪ್ತವಾಗಿ ತಿಳಿಸಿ.',
        briefError: 'ದಯವಿಟ್ಟು ಯೋಜನೆಯ ಬಗ್ಗೆ ಸ್ವಲ್ಪ ಬರೆಯಿರಿ.',
        privacyNote: 'ನಮ್ಮ ಗೌಪ್ಯತಾ ನೀತಿಯಡಿ ಸುರಕ್ಷಿತವಾಗಿದೆ.',
        submitCta: 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ',
        successTitlePrefix: 'ವಿಚಾರಣೆ ಸಿದ್ಧವಾಗಿದೆ:',
        successBodyPrefix: 'ನಿಮ್ಮ ವಿವರ',
        successBodySuffix: 'ಗಾಗಿ ಇಮೇಲ್ ಅಥವಾ ಸೋಶಿಯಲ್ DM ಮೂಲಕ ಕಳುಹಿಸಲು ಸಿದ್ಧವಾಗಿದೆ.',
        replyToLabel: 'ಸಂಪರ್ಕ:',
        briefSummaryLabel: 'ಸಾರಾಂಶ:',
        openEmailCta: 'ಇಮೇಲ್ ಆ್ಯಪ್ ಮೂಲಕ ಕಳುಹಿಸಿ',
        sendAnotherCta: 'ಹೊಸ ವಿಚಾರಣೆ',
      },
    },
    footer: {
      tagline: 'ಭಯವಿಲ್ಲದೆ ಸೃಷ್ಟಿಸಿ, ಭವಿಷ್ಯಕ್ಕಾಗಿ ನಿರ್ಮಿಸಿ.',
      copyrightSuffix: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    },
  },

  ml: {
    a11y: {
      skipToContent: 'പ്രധാന ഉള്ളടക്കത്തിലേക്ക് പോകുക',
      themeToggleToDark: 'ഡാർക്ക് തീമിലേക്ക് മാറുക',
      themeToggleToLight: 'ലൈറ്റ് തീമിലേക്ക് മാറുക',
      languageLabel: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
      openMenu: 'മെനു തുറക്കുക',
      closeMenu: 'മെനു അടയ്ക്കുക',
    },
    nav: {
      work: 'വർക്കുകൾ',
      services: 'സേവനങ്ങൾ',
      about: 'ഞങ്ങളെക്കുറിച്ച്',
      community: 'കമ്മ്യൂണിറ്റി',
      policies: 'നയങ്ങൾ',
      contact: 'ബന്ധപ്പെടുക',
      startProject: 'പ്രോജക്റ്റ് തുടങ്ങുക',
    },
    hero: {
      headline: 'ഭയമില്ലാതെ സൃഷ്ടിക്കൂ, ഭാവിക്കായി നിർമ്മിക്കൂ.',
      subheadline: 'ദി ഹൈഡ് ഒരു സ്വതന്ത്ര ക്രിയേറ്റീവ് ടെക് സ്റ്റുഡിയോ ആണ്.',
      primaryCta: 'പ്രോജക്റ്റ് തുടങ്ങുക',
      secondaryCta: 'വർക്കുകൾ കാണുക',
    },
    clientsSection: {
      eyebrow: 'വിശ്വസ്ത ക്ലയന്റുകൾ',
    },
    servicesSection: {
      eyebrow: 'സേവനങ്ങൾ',
      heading: 'നാല് പ്രധാന മേഖലകൾ.',
      subheading:
        'ഡിസൈൻ, എഞ്ചിനീയറിംഗ്, ബ്രാൻഡ് ഐഡന്റിറ്റി, ഡിജിറ്റൽ വളർച്ച—ഒരൊറ്റ ടീമിൽ.',
      items: {
        'product-dev': {
          title: 'സമ്പൂർണ്ണ പ്രൊഡക്റ്റ് ഡെവലപ്‌മെന്റ്',
          shortLabel: 'പ്രൊഡക്റ്റ് ഡെവ്',
          description:
            'വേഗതയും വിശ്വാസ്യതയും വളർച്ചയും ഉറപ്പാക്കുന്ന എൻഡ്-ടു-എൻഡ് വെബ് & ഡിജിറ്റൽ പ്രൊഡക്റ്റ് എഞ്ചിനീയറിംഗ്.',
          deliverables: [
            'ഫുൾ-സ്റ്റാക്ക് വെബ് ആപ്ലിക്കേഷനുകൾ & APIs',
            'React & TypeScript പ്രൊഡക്ഷൻ ബിൽഡുകൾ',
            'ലോഞ്ച് QA & തുടർ മെച്ചപ്പെടുത്തൽ',
          ],
        },
        'ui-ux': {
          title: 'UI/UX ഡിസൈൻ അനുഭവങ്ങൾ',
          shortLabel: 'UI/UX',
          description:
            'വ്യക്തതയ്ക്കും മികച്ച ഫലങ്ങൾക്കുമായി രൂപകൽപ്പന ചെയ്ത ലളിതമായ ഇന്റർഫേസുകളും പ്രോട്ടോടൈപ്പുകളും.',
          deliverables: [
            'ഇൻഫർമേഷൻ ആർക്കിടെക്ചർ & യൂസർ ഫ്ലോകൾ',
            'റെസ്‌പോൺസീവ് UI & ഡിസൈൻ സിസ്റ്റങ്ങൾ',
            'ഇന്ററാക്ടീവ് ക്ലിക്കബിൾ പ്രോട്ടോടൈപ്പുകൾ',
          ],
        },
        'graphic-design': {
          title: 'ഗ്രാഫിക് ഡിസൈൻ & ബ്രാൻഡ് വിഷ്വലുകൾ',
          shortLabel: 'ബ്രാൻഡ് ഡിസൈൻ',
          description:
            'വേറിട്ടുനിൽക്കുന്ന വിഷ്വൽ ഐഡന്റിറ്റി, ബ്രാൻഡ് കിറ്റുകൾ, പിച്ച് ഡെക്കുകൾ, സോഷ്യൽ ക്രിയേറ്റീവുകൾ.',
          deliverables: [
            'ബ്രാൻഡ് ഐഡന്റിറ്റി & ഗൈഡ്‌ലൈനുകൾ',
            'പാക്കേജിംഗ്, പിച്ച് ഡെക്ക് & പ്രിന്റ്',
            'സോഷ്യൽ & ലോഞ്ച് ക്യാമ്പെയ്ൻ ഡിസൈൻ',
          ],
        },
        'digital-marketing': {
          title: 'ഡിജിറ്റൽ മാർക്കറ്റിംഗ്',
          shortLabel: 'ഡിജിറ്റൽ വളർച്ച',
          description:
            'യഥാർത്ഥ ഉപഭോക്താക്കളെ ആകർഷിക്കുന്ന തന്ത്രപരമായ പൊസിഷനിംഗും വളർച്ചാ ക്യാമ്പെയ്‌നുകളും.',
          deliverables: [
            'ഗോ-ടു-മാർക്കറ്റ് ക്യാമ്പെയ്ൻ തന്ത്രം',
            'പെർഫോമൻസ് പരസ്യങ്ങളും ലാൻഡിംഗ് പേജുകളും',
            'കണ്ടന്റ് & കൺവേർഷൻ ട്രാക്കിംഗ്',
          ],
        },
      },
    },
    portfolioSection: {
      eyebrow: 'തിരഞ്ഞെടുത്ത വർക്കുകൾ',
      heading: 'യഥാർത്ഥ ക്ലയന്റ് പ്രോജക്ടുകൾ.',
      filterAriaLabel: 'സേവനം അനുസരിച്ച് പ്രോജക്ടുകൾ ഫിൽട്ടർ ചെയ്യുക',
      categories: {
        All: 'എല്ലാം',
        'Product Dev': 'പ്രൊഡക്റ്റ് ഡെവ്',
        'UI/UX': 'UI/UX',
        'Graphic Design': 'ബ്രാൻഡ് ഡിസൈൻ',
        'Digital Marketing': 'ഡിജിറ്റൽ വളർച്ച',
      },
      viewCaseStudy: 'കേസ് സ്റ്റഡി കാണുക',
      swipeHint: 'സ്വൈപ്പ് ചെയ്യുക',
      modal: {
        closeLabel: 'അടയ്ക്കുക',
        clientIndustry: 'ക്ലയന്റും മേഖലയും',
        hydeRole: 'പങ്ക്',
        deliverables: 'നൽകിയവ',
        challengeHeading: 'വെല്ലുവിളി',
        approachHeading: 'സമീപനം',
        outcomeHeading: 'ഫലം',
        startSimilarCta: 'സമാന പ്രോജക്റ്റ് തുടങ്ങുക',
      },
      projects: {
        'kinetik-ops': {
          title: 'Kinetik ഓപ്പറേഷൻസ് & ട്രഷറി പോർട്ടൽ',
          industry: 'ഫിൻടെക് SaaS',
          projectType: 'ക്ലയന്റ് പ്രോജക്റ്റ്',
          role: 'സമ്പൂർണ്ണ പ്രൊഡക്റ്റ് എഞ്ചിനീയറിംഗ്',
          summary:
            'മൾട്ടി-കറൻസി ട്രഷറി അനുമതികൾ ഒരൊറ്റ റിയൽ-ടൈം വെബ് പോർട്ടലിൽ ഏകീകരിച്ചു.',
          challenge:
            'പല സ്പ്രെഡ്ഷീറ്റുകളിൽ പരിശോധിച്ചിരുന്നത് പേയ്‌മെന്റും ഓഡിറ്റും വൈകിപ്പിച്ചു.',
          approach:
            'കൃത്യമായ അനുമതികളും വേഗതയേറിയ ഫിൽട്ടറിംഗുമുള്ള React + TypeScript പോർട്ടൽ നിർമ്മിച്ചു.',
          outcome:
            'ദൈനംദിന പ്രവർത്തനത്തിൽ ലൈവ് ആവുകയും മൂന്ന് മാന്വൽ ഷീറ്റുകൾക്ക് പകരമാവുകയും ചെയ്തു.',
          deliverables: ['വെബ് ആപ്പ്', 'കമ്പോണന്റ് ലൈബ്രറി', 'API ഇന്റഗ്രേഷൻ'],
        },
        'verve-booking': {
          title: 'Verve സ്റ്റുഡിയോ & മൊബിലിറ്റി ബുക്കിംഗ്',
          industry: 'വെൽനസ് & മൊബിലിറ്റി',
          projectType: 'ക്ലയന്റ് പ്രോജക്റ്റ്',
          role: 'UX റിസർച്ച് & മൊബൈൽ UI',
          summary:
            'ആറ്-ഘട്ട മൊബൈൽ ബുക്കിംഗ് പ്രക്രിയ ലളിതമായ രണ്ട്-ടാപ്പ് അനുഭവമാക്കി മാറ്റി.',
          challenge:
            'ചെറിയ സ്ക്രീനുകളിലെ സങ്കീർണ്ണമായ ടേബിളുകൾ കാരണം ഉപയോക്താക്കൾ ബുക്കിംഗ് ഉപേക്ഷിച്ചിരുന്നു.',
          approach:
            'എളുപ്പമുള്ള സമയം തിരഞ്ഞെടുക്കലും വ്യക്തമായ നിരക്കുകളും നൽകി ഫ്ലോ ലളിതമാക്കി.',
          outcome:
            'ക്ലയന്റിന്റെ മൊബൈൽ ലോഞ്ചിനായി ഇന്ററാക്ടീവ് പ്രോട്ടോടൈപ്പ് കൈമാറി.',
          deliverables: ['UX ഓഡിറ്റ്', 'ഇന്ററാക്ടീവ് പ്രോട്ടോടൈപ്പ്', 'ഡിസൈൻ ടോക്കണുകൾ'],
        },
        'orbit-identity': {
          title: 'Orbit സ്റ്റുഡിയോ ഐഡന്റിറ്റി & പാക്കേജിംഗ്',
          industry: 'ആർക്കിടെക്ചർ & ഉൽപ്പന്നങ്ങൾ',
          projectType: 'ക്ലയന്റ് പ്രോജക്റ്റ്',
          role: 'ബ്രാൻഡ് ഐഡന്റിറ്റി & പാക്കേജിംഗ്',
          summary:
            'ഇൻഡസ്ട്രിയൽ ഡിസൈൻ ബ്രാൻഡിനായി മോണോക്രോം സിസ്റ്റവും പാക്കേജിംഗും ഒരുക്കി.',
          challenge:
            'ചെലവേറിയ മൾട്ടി-ഇങ്ക് പ്രിന്റിംഗ് ഇല്ലാതെ ആർക്കിടെക്ചറൽ ഐഡന്റിറ്റി ആവശ്യമായിരുന്നു.',
          approach:
            'എംബോസ്ഡ് ചിഹ്നവും വോൾട്ട് ആക്‌സന്റും ചേർത്ത് ബ്ലാക്ക്-ആൻഡ്-വൈറ്റ് ഡിസൈൻ ഒരുക്കി.',
          outcome:
            'ഉൽപ്പന്ന നിരയുടെ പാക്കേജിംഗിലും സ്റ്റേഷനറിയിലും നടപ്പാക്കി.',
          deliverables: ['ബ്രാൻഡ് ഗൈഡ്‌ലൈനുകൾ', 'പാക്കേജിംഗ് സിസ്റ്റം', 'പ്രിന്റ് ഡിസൈൻ'],
        },
        'meridian-campaign': {
          title: 'Meridian മൾട്ടി-ചാനൽ ലോഞ്ച് എഞ്ചിൻ',
          industry: 'B2B സേവനങ്ങൾ',
          projectType: 'സജീവ റീറ്റൈനർ',
          role: 'വളർച്ചാ തന്ത്രം & ക്രിയേറ്റീവ് ഡയറക്ഷൻ',
          summary:
            'ടൈപ്പോഗ്രഫി പരസ്യങ്ങളും കൺവേർഷൻ ലാൻഡിംഗ് പേജുകളും ചേർന്ന ലോഞ്ച് ക്യാമ്പെയ്ൻ.',
          challenge:
            'മികച്ച റെഫറലുകൾ ഉണ്ടായിരുന്നിട്ടും പുതിയ B2B ലീഡുകൾക്കായി സ്ഥിരമായ ഡിജിറ്റൽ സംവിധാനം ഇല്ലായിരുന്നു.',
          approach:
            'ഹൈ-കോൺട്രാസ്റ്റ് പരസ്യങ്ങളും വ്യക്തമായ ലാൻഡിംഗ് പേജുകളും വഴി സന്ദേശം ഏകീകരിച്ചു.',
          outcome:
            'തുടർച്ചയായ മെച്ചപ്പെടുത്തലോടെ പ്രതിവാര ലീഡ് സംവിധാനം സജ്ജമായി.',
          deliverables: ['പൊസിഷനിംഗ് പ്ലേബുക്ക്', 'പരസ്യങ്ങൾ', 'ലാൻഡിംഗ് പേജുകൾ'],
        },
      },
    },
    aboutSection: {
      eyebrow: 'ദി ഹൈഡ് സ്റ്റുഡിയോസിനെക്കുറിച്ച്',
      headline: 'ചെറിയ ടീം. സംയുക്ത ഉത്തരവാദിത്തം.',
      description:
        '2025 മുതൽ പ്രവർത്തിക്കുന്ന ഞങ്ങളുടെ അഞ്ച് പേരടങ്ങുന്ന ടീം എഞ്ചിനീയറിംഗ്, UI/UX, ബ്രാൻഡ് ഡിസൈൻ, ഡിജിറ്റൽ മാർക്കറ്റിംഗ് എന്നിവയിൽ ക്ലയന്റുകളുമായി നേരിട്ട് പങ്കാളികളാകുന്നു.',
      steps: [
        {
          number: '01',
          title: 'മനസ്സിലാക്കുക',
          description: 'ഡിസൈനിന് മുമ്പ് പ്രശ്നവും ഉപയോക്തൃ യാഥാർത്ഥ്യവും പരിധികളും വ്യക്തമാക്കുന്നു.',
        },
        {
          number: '02',
          title: 'രൂപപ്പെടുത്തുക',
          description: 'പരിധി, വിഷ്വൽ ശൈലി, സാങ്കേതിക ദിശ എന്നിവ തുടക്കത്തിൽ തന്നെ നിശ്ചയിക്കുന്നു.',
        },
        {
          number: '03',
          title: 'നിർമ്മിക്കുക',
          description: 'തടസ്സങ്ങളില്ലാതെ ഡിസൈൻ, കോഡ്, അവലോകനം എന്നിവ ഒരുമിച്ച് ചെയ്യുന്നു.',
        },
        {
          number: '04',
          title: 'മെച്ചപ്പെടുത്തുക',
          description: 'യഥാർത്ഥ ഉപയോക്താക്കളിലേക്ക് എത്തിച്ച് ഫീഡ്ബാക്കിലൂടെ തുടർച്ചയായി നവീകരിക്കുന്നു.',
        },
      ],
    },
    communitySection: {
      badge: 'ഉടൻ വരുന്നു',
      headline: 'ക്ലയന്റ് ജോലികൾക്കപ്പുറം: ടെക് കരിയർ ആശയക്കുഴപ്പം പരിഹരിക്കുന്നു.',
      description:
        'വിദ്യാർത്ഥികൾ, ടെക് തൽപ്പരർ, ഫ്രീലാൻസർമാർ, ഉദ്യോഗസ്ഥർ എന്നിവർക്ക് സജീവ ബിൽഡർമാരിൽ നിന്ന് 1-ഓൺ-1 വ്യക്തതയും പ്രായോഗിക റോഡ്‌മാപ്പുകളും നൽകുന്ന തുറന്ന കമ്മ്യൂണിറ്റി വേദി.',
      audiences: ['വിദ്യാർത്ഥികൾ', 'തൽപ്പരർ', 'ഫ്രീലാൻസർമാർ', 'ഉദ്യോഗസ്ഥർ'],
      emailLabel: 'ഇമെയിൽ വിലാസം',
      emailPlaceholder: 'you@example.com',
      emailError: 'സാധുവായ ഒരു ഇമെയിൽ നൽകുക.',
      submitCta: 'പട്ടികയിൽ ചേരുക',
      successTitle: 'നിങ്ങൾ മുൻകൂർ പട്ടികയിൽ ചേർന്നു',
      successBodyPrefix: 'സേവ് ചെയ്ത ഇമെയിൽ:',
      resetWaitlist: 'മറ്റൊരു ഇമെയിൽ ഉപയോഗിക്കുക',
      followLabel: 'അപ്‌ഡേറ്റുകൾക്കായി:',
      pillars: [
        {
          title: '1-ഓൺ-1 വ്യക്തത',
          detail: 'റോളുകൾ, പോർട്ട്‌ഫോളിയോ, യഥാർത്ഥ വ്യവസായ പ്രതീക്ഷകൾ എന്നിവയെക്കുറിച്ച് തുറന്ന സംഭാഷണം.',
        },
        {
          title: 'പ്രായോഗിക റോഡ്‌മാപ്പ്',
          detail: 'പുസ്തക സിദ്ധാന്തമല്ല—യഥാർത്ഥ ടീമുകളിൽ ഡിസൈൻ, കോഡ്, വളർച്ച എന്നിവ പ്രവർത്തിക്കുന്ന രീതി.',
        },
        {
          title: 'തുറന്ന കമ്മ്യൂണിറ്റി',
          detail: 'പോർട്ട്‌ഫോളിയോ ഫീഡ്ബാക്ക്, ലൈവ് ചോദ്യോത്തരങ്ങൾ, പരസ്പര സഹായം.',
        },
      ],
    },
    policiesSection: {
      eyebrow: 'നയങ്ങൾ',
      heading: 'സ്വകാര്യതാ നയവും നിബന്ധനകളും.',
      privacyTab: 'സ്വകാര്യതാ നയം',
      termsTab: 'സേവന നിബന്ധനകൾ',
      closeLabel: 'അടയ്ക്കുക',
      privacyItems: [
        {
          heading: 'ഞങ്ങൾ ശേഖരിക്കുന്ന വിവരങ്ങൾ',
          body: 'പ്രോജക്റ്റ് അന്വേഷണ ഫോം (പേര്, ഇമെയിൽ/ഹാൻഡിൽ, വിവരണം) അല്ലെങ്കിൽ കമ്മ്യൂണിറ്റി വെയിറ്റ്‌ലിസ്റ്റ് (ഇമെയിൽ) വഴി നിങ്ങൾ സ്വമേധയാ നൽകുന്ന വിവരങ്ങൾ മാത്രമാണ് ശേഖരിക്കുന്നത്.',
        },
        {
          heading: 'ഡാറ്റയുടെ ഉപയോഗം',
          body: 'നിങ്ങളുടെ പ്രോജക്റ്റ് അന്വേഷണത്തിന് മറുപടി നൽകാനോ കമ്മ്യൂണിറ്റി ലോഞ്ച് അറിയിക്കാനോ മാത്രമാണ് ഇവ ഉപയോഗിക്കുന്നത്. ഞങ്ങൾ ഡാറ്റ വിൽക്കുകയോ കൈമാറുകയോ ഇല്ല.',
        },
        {
          heading: 'ബ്രൗസർ മുൻഗണനകളും നീക്കംചെയ്യലും',
          body: 'തീം, ഭാഷ തിരഞ്ഞെടുപ്പുകൾ നിങ്ങളുടെ ബ്രൗസറിൽ മാത്രമാണ് സൂക്ഷിക്കുന്നത്. നൽകിയ വിവരങ്ങൾ നീക്കംചെയ്യാൻ ഇമെയിൽ വഴി ബന്ധപ്പെടുക.',
        },
      ],
      termsItems: [
        {
          heading: 'പ്രോജക്റ്റ് പരിധിയും കരാറും',
          body: 'എല്ലാ ക്ലയന്റ് പ്രോജക്ടുകളും ജോലി തുടങ്ങുന്നതിന് മുമ്പ് രേഖാമൂലം അംഗീകരിച്ച പരിധി, സമയപരിധി, ഡെലിവറബിളുകൾ എന്നിവയുടെ അടിസ്ഥാനത്തിലാണ് ആരംഭിക്കുന്നത്.',
        },
        {
          heading: 'ബൗദ്ധിക സ്വത്തവകാശം (IP)',
          body: 'പൂർണ്ണ പേയ്‌മെന്റും പ്രോജക്റ്റും പൂർത്തിയാകുമ്പോൾ അംഗീകരിച്ച അന്തിമ ഫയലുകളുടെ അവകാശം ക്ലയന്റിന് ലഭിക്കും (തേർഡ്-പാർട്ടി ലൈസൻസുകൾ ഒഴികെ).',
        },
        {
          heading: 'രഹസ്യസ്വഭാവവും പോർട്ട്‌ഫോളിയോയും',
          body: 'രഹസ്യ ക്ലയന്റ് വർക്കുകൾ സ്വകാര്യമായി തുടരും. ക്ലയന്റ് അനുമതിയോടെ മാത്രമേ പൊതു കേസ് സ്റ്റഡികൾ പങ്കിടൂ.',
        },
      ],
    },
    contactSection: {
      eyebrow: 'ബന്ധപ്പെടുക',
      headline: 'സംഭാഷണം തുടങ്ങാം.',
      description:
        'നിങ്ങൾ നിർമ്മിക്കുന്ന കാര്യവും ഞങ്ങളുടെ ടീമിന് എങ്ങനെ സഹായിക്കാനാകുമെന്നും പങ്കുവയ്ക്കൂ—അല്ലെങ്കിൽ LinkedIn / Instagram വഴി സന്ദേശമയയ്ക്കൂ.',
      whatsappCta: 'WhatsApp-ൽ ചാറ്റ് ചെയ്യുക',
      form: {
        nameLabel: 'പേര് *',
        namePlaceholder: 'നിങ്ങളുടെ പേര്',
        nameError: 'നിങ്ങളുടെ പേര് നൽകുക.',
        handleLabel: 'ഇമെയിൽ അല്ലെങ്കിൽ സോഷ്യൽ ഹാൻഡിൽ *',
        handlePlaceholder: 'you@company.com അല്ലെങ്കിൽ @handle',
        handleError: 'ഇമെയിൽ അല്ലെങ്കിൽ സോഷ്യൽ ഹാൻഡിൽ നൽകുക.',
        serviceLabel: 'ആവശ്യമായ സേവനം *',
        servicePlaceholder: 'സേവനം തിരഞ്ഞെടുക്കുക...',
        serviceError: 'ഒരു സേവനം തിരഞ്ഞെടുക്കുക.',
        briefLabel: 'പ്രോജക്റ്റ് വിവരണം *',
        briefPlaceholder: 'നിങ്ങളുടെ പ്രോജക്റ്റ്, ലക്ഷ്യങ്ങൾ, സമയപരിധി എന്നിവ ചുരുക്കി എഴുതുക.',
        briefError: 'പ്രോജക്റ്റിനെക്കുറിച്ച് ചെറിയൊരു കുറിപ്പ് നൽകുക.',
        privacyNote: 'ഞങ്ങളുടെ സ്വകാര്യതാ നയത്തിന് കീഴിൽ സുരക്ഷിതം.',
        submitCta: 'അന്വേഷണം അയയ്ക്കുക',
        successTitlePrefix: 'വിവരങ്ങൾ തയ്യാറാണ്:',
        successBodyPrefix: 'നിങ്ങളുടെ വിവരണം',
        successBodySuffix: 'ആയി ഇമെയിൽ അല്ലെങ്കിൽ സോഷ്യൽ സന്ദേശം വഴി അയയ്ക്കാൻ തയ്യാറാണ്.',
        replyToLabel: 'മറുപടി വിലാസം:',
        briefSummaryLabel: 'സംഗ്രഹം:',
        openEmailCta: 'ഇമെയിൽ ആപ്പ് വഴി അയയ്ക്കുക',
        sendAnotherCta: 'പുതിയ അന്വേഷണം',
      },
    },
    footer: {
      tagline: 'ഭയമില്ലാതെ സൃഷ്ടിക്കൂ, ഭാവിക്കായി നിർമ്മിക്കൂ.',
      copyrightSuffix: 'എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
    },
  },
};
