import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { ClientProject } from '../config/siteConfig';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { ResponsiveImage } from './MotionPrimitives';
import { usePointerCapabilities } from '../hooks/usePointerCapabilities';

interface CaseStudyModalProps {
  project: ClientProject | null;
  onClose: () => void;
  onStartSimilarProject: (project: ClientProject) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  const { prefersReducedMotion } = usePointerCapabilities();
  const { language } = usePreferences();
  const t = translations[language];

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const localized = project ? t.portfolioSection.projects[project.id] : null;

  return (
    <AnimatePresence>
      {project && localized && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-[2px]"
          />

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[var(--radius-lg)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] text-[var(--color-on-surface)] shadow-2xl"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface)]/95 backdrop-blur-sm px-6 py-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--color-on-surface-variant)]">
                <span className="font-semibold text-[var(--color-primary)]">
                  {localized.projectType}
                </span>
                <span aria-hidden="true">·</span>
                <span>{project.client}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.portfolioSection.modal.closeLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div>
                <h2
                  id="case-study-modal-title"
                  className="font-heading text-2xl md:text-4xl font-bold tracking-[-0.03em] text-[var(--color-on-surface)]"
                >
                  {localized.title}
                </h2>
                <p className="mt-3 text-base md:text-lg text-[var(--color-on-surface-variant)] max-w-[62ch]">
                  {localized.summary}
                </p>
              </div>

              <div className="aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-outline-variant)]">
                <ResponsiveImage
                  src={project.image}
                  alt={project.imageAlt}
                  title={localized.title}
                  className="h-full w-full"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-[var(--color-outline-variant)] py-5">
                <div>
                  <p className="text-xs font-semibold text-[var(--color-on-surface-variant)]">
                    {t.portfolioSection.modal.clientIndustry}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-on-surface)]">
                    {project.client} · {localized.industry}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-on-surface-variant)]">
                    {t.portfolioSection.modal.hydeRole}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-on-surface)]">
                    {localized.role}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-on-surface-variant)]">
                    {t.portfolioSection.modal.deliverables}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-on-surface)]">
                    {localized.deliverables.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-heading text-base font-semibold text-[var(--color-on-surface)]">
                    {t.portfolioSection.modal.challengeHeading}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    {localized.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[var(--color-on-surface)]">
                    {t.portfolioSection.modal.approachHeading}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    {localized.approach}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[var(--color-on-surface)]">
                    {t.portfolioSection.modal.outcomeHeading}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    {localized.outcome}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end border-t border-[var(--color-outline-variant)] pt-6">
                <button
                  type="button"
                  onClick={() => onStartSimilarProject(project)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 text-sm font-semibold text-[var(--color-on-primary)] border border-[var(--color-outline-variant)] hover:bg-[var(--color-primary-hover)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{t.portfolioSection.modal.startSimilarCta}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
