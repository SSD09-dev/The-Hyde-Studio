import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { HydeWordmark } from './HydeWordmark';
import { PolicyType } from './PolicyModal';
import {
  DiscordIcon,
  InstagramIcon,
  LinkedInIcon,
  SlackIcon,
  TwitterIcon,
} from './SocialIcons';

interface FooterProps {
  onOpenPolicy: (policy: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const { language } = usePreferences();
  const t = translations[language];

  const localizedNavLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.community, href: '#community' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const socialItems = [
    {
      label: 'LinkedIn',
      href: siteConfig.SOCIAL_LINKS.linkedin,
      icon: <LinkedInIcon className="h-4 w-4" />,
    },
    {
      label: 'Instagram',
      href: siteConfig.SOCIAL_LINKS.instagram,
      icon: <InstagramIcon className="h-4 w-4" />,
    },
    {
      label: 'Discord',
      href: siteConfig.SOCIAL_LINKS.discord,
      icon: <DiscordIcon className="h-4 w-4" />,
    },
    {
      label: 'Slack',
      href: siteConfig.SOCIAL_LINKS.slack,
      icon: <SlackIcon className="h-4 w-4" />,
    },
    {
      label: 'Twitter',
      href: siteConfig.SOCIAL_LINKS.twitter,
      icon: <TwitterIcon className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="bg-[var(--hyde-ink)] text-white border-t border-[var(--color-inverse-outline)]">
      <div className="container-hyde py-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[var(--color-inverse-outline)]">
          <div className="space-y-3">
            <a href="#top" aria-label="Back to top" className="inline-block">
              <HydeWordmark variant="light" className="h-7 w-auto" />
            </a>
            <p className="text-sm text-[var(--color-inverse-on-surface-variant)]">
              {t.footer.tagline}
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
          >
            {localizedNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--color-inverse-on-surface-variant)] hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icon-Only Social Links */}
          <div className="flex flex-wrap items-center gap-2">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`The Hyde Studios on ${item.label}`}
                title={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-inverse-outline)] text-white hover:border-[var(--hyde-volt)] hover:text-[var(--hyde-volt)] transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--color-inverse-on-surface-variant)]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p>
              © {siteConfig.brandName}. {t.footer.copyrightSuffix}
            </p>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="min-h-[36px] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              {t.policiesSection.privacyTab}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="min-h-[36px] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              {t.policiesSection.termsTab}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <a
              href={`mailto:${siteConfig.CONTACT_EMAIL}`}
              className="hover:text-white transition-colors break-all"
            >
              {siteConfig.CONTACT_EMAIL}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${siteConfig.CONTACT_PHONE.replace(/\s+/g, '')}`}
              className="font-mono-tabular hover:text-white transition-colors whitespace-nowrap"
            >
              {siteConfig.CONTACT_PHONE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
