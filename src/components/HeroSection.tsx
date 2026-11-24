import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { MagneticWrapper } from './MotionPrimitives';
import { usePointerCapabilities } from '../hooks/usePointerCapabilities';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork,
}) => {
  const { prefersReducedMotion } = usePointerCapabilities();
  const { language } = usePreferences();
  const t = translations[language];

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.38,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="top"
      className="relative bg-[var(--color-background)] pt-20 pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18"
    >
      <div className="container-hyde">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="hero-display-type text-[var(--color-on-surface)]"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            custom={0.08}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mt-5 text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            custom={0.14}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3.5 sm:gap-5"
          >
            <MagneticWrapper className="w-full sm:w-auto">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--hyde-volt)] px-6 py-2.5 text-sm md:text-base font-semibold text-[var(--hyde-ink)] border border-[var(--hyde-ink)]/15 hover:bg-[#bceb5a] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </MagneticWrapper>

            <button
              type="button"
              onClick={onExploreWork}
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center px-3 text-sm md:text-base font-semibold text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{t.hero.secondaryCta}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
