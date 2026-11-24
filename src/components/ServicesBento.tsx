import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { SpotlightBentoCard } from './MotionPrimitives';

export const ServicesBento: React.FC = () => {
  const { language, theme } = usePreferences();
  const t = translations[language];

  return (
    <section
      id="services"
      className="py-16 md:py-22 bg-[var(--color-surface-container-low)] border-b border-[var(--color-outline-variant)]"
    >
      <div className="container-hyde">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 md:mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.04em] text-[var(--color-primary)]">
              {t.servicesSection.eyebrow}
            </p>
            <h2 className="section-heading-type mt-2 text-[var(--color-on-surface)]">
              {t.servicesSection.heading}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[var(--color-on-surface-variant)] max-w-[48ch]">
              {t.servicesSection.subheading}
            </p>
          </div>
        </div>

        {/* Responsive Bento Grid: 1-col mobile, 2-col tablet, asymmetric Bento desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {siteConfig.services.map((service) => {
            const isWide = service.featuredSpan === 'wide';
            const localized = t.servicesSection.items[service.id];

            return (
              <SpotlightBentoCard
                key={service.id}
                darkSurface={theme === 'dark'}
                className={`${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                } rounded-[var(--radius-lg)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-5 sm:p-6 md:p-8`}
              >
                <div className="flex h-full flex-col justify-between gap-6">
                  <div>
                    <span className="font-mono-tabular text-xs font-semibold text-[var(--color-primary)]">
                      {service.index}. {localized.shortLabel}
                    </span>

                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-semibold tracking-[-0.02em] text-[var(--color-on-surface)]">
                      {localized.title}
                    </h3>

                    <p className="mt-2.5 text-sm md:text-[15px] text-[var(--color-on-surface-variant)] leading-relaxed max-w-[52ch]">
                      {localized.description}
                    </p>
                  </div>

                  <ul className="space-y-2 border-t border-[var(--color-outline-variant)] pt-4">
                    {localized.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--color-on-surface)] flex items-center gap-2.5"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightBentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
