import React from 'react';
import { motion } from 'motion/react';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { usePointerCapabilities } from '../hooks/usePointerCapabilities';

export const HowWeWorkSection: React.FC = () => {
  const { prefersReducedMotion } = usePointerCapabilities();
  const { language } = usePreferences();
  const t = translations[language];

  return (
    <section
      id="about"
      className="py-16 md:py-22 bg-[var(--color-background)] border-b border-[var(--color-outline-variant)]"
    >
      <div className="container-hyde">
        <div className="pb-12 border-b border-[var(--color-outline-variant)] max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.04em] text-[var(--color-primary)]">
            {t.aboutSection.eyebrow}
          </p>
          <h2 className="section-heading-type mt-2 text-[var(--color-on-surface)]">
            {t.aboutSection.headline}
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed max-w-[58ch]">
            {t.aboutSection.description}
          </p>
        </div>

        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.aboutSection.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.32,
                delay: prefersReducedMotion ? 0 : index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="font-mono-tabular text-xs font-semibold text-[var(--color-primary)]">
                {step.number}.
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--color-on-surface)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
