import React from 'react';
import { ClientLogoItem, siteConfig } from '../config/siteConfig';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';

const PlaceholderBrandSvg: React.FC<{
  brandKey: NonNullable<ClientLogoItem['brandKey']>;
  name: string;
}> = ({ brandKey, name }) => {
  switch (brandKey) {
    case 'amazon':
      return (
        <svg
          viewBox="0 0 160 44"
          className="h-full w-full object-contain"
          role="img"
          aria-label={name}
        >
          <text
            x="80"
            y="24"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            fontSize="21"
            letterSpacing="-0.6"
          >
            amazon
          </text>
          <path
            d="M46 31c18 8 44 8 64-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          <path
            d="M105 27l7 2.5-3.2 6.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'tesla':
      return (
        <svg
          viewBox="0 0 160 44"
          className="h-full w-full object-contain"
          role="img"
          aria-label={name}
        >
          <text
            x="80"
            y="28"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Space Grotesk, system-ui, sans-serif"
            fontWeight="700"
            fontSize="18"
            letterSpacing="6"
          >
            TESLA
          </text>
        </svg>
      );
    case 'ola':
      return (
        <svg
          viewBox="0 0 160 44"
          className="h-full w-full object-contain"
          role="img"
          aria-label={name}
        >
          <circle
            cx="54"
            cy="22"
            r="9.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <circle cx="54" cy="22" r="3" fill="currentColor" />
          <text
            x="72"
            y="28.5"
            fill="currentColor"
            fontFamily="Space Grotesk, system-ui, sans-serif"
            fontWeight="700"
            fontSize="21"
            letterSpacing="1.2"
          >
            OLA
          </text>
        </svg>
      );
    case 'razorpay':
      return (
        <svg
          viewBox="0 0 160 44"
          className="h-full w-full object-contain"
          role="img"
          aria-label={name}
        >
          <polygon points="24,31 32,12 37,12 29,31" fill="currentColor" />
          <polygon points="31,24 38,17 41,17 34,24" fill="currentColor" />
          <text
            x="45"
            y="27"
            fill="currentColor"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="700"
            fontStyle="italic"
            fontSize="18"
            letterSpacing="-0.4"
          >
            Razorpay
          </text>
        </svg>
      );
    case 'stripe':
      return (
        <svg
          viewBox="0 0 160 44"
          className="h-full w-full object-contain"
          role="img"
          aria-label={name}
        >
          <text
            x="80"
            y="29"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Inter, system-ui, sans-serif"
            fontWeight="800"
            fontSize="22"
            letterSpacing="-0.8"
          >
            stripe
          </text>
        </svg>
      );
  }
};

const getLogoImageClasses = (item: ClientLogoItem) => {
  const base =
    'h-full w-full object-contain select-none opacity-85 group-hover/logo:opacity-100 transition-opacity duration-200';

  if (item.id === 'cognizioni-ai') {
    // Cutout off-white SVG: blend away background cleanly in both themes & boost letter weight
    return `${base} grayscale brightness-105 contrast-[2.2] mix-blend-multiply dark:invert dark:brightness-110 dark:contrast-[2.2] dark:mix-blend-lighten`;
  }

  switch (item.toneMode) {
    case 'light-text-svg':
      // Jasper Auto Parts: white lettering SVG -> crisp black in light mode, bright white in dark mode
      return `${base} grayscale invert brightness-95 contrast-[2.0] mix-blend-multiply dark:invert-0 dark:brightness-150 dark:contrast-[1.8] dark:mix-blend-lighten`;
    case 'opaque-white-bg':
      // Glownest Spa: solid white background PNG -> drops background completely & boosts ink weight
      return `${base} grayscale brightness-105 contrast-[2.6] mix-blend-multiply dark:invert dark:brightness-110 dark:contrast-[2.6] dark:mix-blend-lighten`;
    case 'opaque-badge':
      // VR Garage: crisp monochrome crest across both light & dark surfaces
      return `${base} grayscale contrast-125 brightness-105 dark:brightness-125`;
    case 'transparent-color':
    default:
      // HloXpat: transparent PNG -> pure black in light mode, pure crisp white in dark mode
      return `${base} brightness-0 contrast-200 dark:invert scale-[1.22]`;
  }
};

const LogoSlot: React.FC<{ item: ClientLogoItem }> = ({ item }) => {
  return (
    <div
      className="group/logo h-10 sm:h-12 w-32 sm:w-40 flex items-center justify-center shrink-0"
      title={item.name}
    >
      {item.kind === 'image' && item.src ? (
        <img
          src={item.src}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className={getLogoImageClasses(item)}
        />
      ) : item.brandKey ? (
        <div className="h-full w-full flex items-center justify-center text-[var(--color-on-surface)] opacity-85 group-hover/logo:opacity-100 transition-opacity duration-200">
          <PlaceholderBrandSvg brandKey={item.brandKey} name={item.name} />
        </div>
      ) : null}
    </div>
  );
};

export const ClientsTrustStrip: React.FC = () => {
  const { language } = usePreferences();
  const t = translations[language];
  const logos = siteConfig.CLIENT_LOGOS;

  return (
    <section
      aria-label={t.clientsSection.eyebrow}
      className="py-8 sm:py-10 bg-transparent border-none overflow-hidden w-full"
    >
      <div className="container-hyde">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          {/* Primary Brand Accent Side Header */}
          <div className="shrink-0 sm:pr-4">
            <p className="text-xs font-semibold tracking-[0.04em] uppercase text-[var(--color-primary)] whitespace-nowrap">
              {t.clientsSection.eyebrow}
            </p>
          </div>

          {/* Seamless Right-to-Left Infinite Marquee */}
          <div className="hyde-marquee-viewport flex-1 min-w-0">
            <div className="hyde-marquee-track">
              <div className="flex items-center gap-12 sm:gap-16 shrink-0 pr-12 sm:pr-16">
                {logos.map((logo) => (
                  <LogoSlot key={logo.id} item={logo} />
                ))}
              </div>
              <div
                aria-hidden="true"
                className="flex items-center gap-12 sm:gap-16 shrink-0 pr-12 sm:pr-16 motion-reduce:hidden"
              >
                {logos.map((logo) => (
                  <LogoSlot key={`${logo.id}-dup`} item={logo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
