import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { usePointerCapabilities } from '../hooks/usePointerCapabilities';

export type PolicyType = 'privacy' | 'terms';

interface PolicyModalProps {
  activePolicy: PolicyType | null;
  onSelectPolicy: (policy: PolicyType) => void;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  activePolicy,
  onSelectPolicy,
  onClose,
}) => {
  const { prefersReducedMotion } = usePointerCapabilities();
  const { language } = usePreferences();
  const t = translations[language];

  useEffect(() => {
    if (!activePolicy) return;
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
  }, [activePolicy, onClose]);

  const items =
    activePolicy === 'terms'
      ? t.policiesSection.termsItems
      : t.policiesSection.privacyItems;

  return (
    <AnimatePresence>
      {activePolicy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
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
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[var(--radius-lg)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] text-[var(--color-on-surface)] shadow-2xl"
          >
            <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface)]/95 backdrop-blur-sm px-6 py-4">
              <div
                role="tablist"
                aria-label={t.policiesSection.heading}
                className="inline-flex items-center gap-0.5 rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-0.5"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activePolicy === 'privacy'}
                  onClick={() => onSelectPolicy('privacy')}
                  className={`relative min-h-[34px] rounded-[var(--radius-xs)] px-3 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activePolicy === 'privacy'
                      ? 'text-[var(--hyde-ink)]'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
                  }`}
                >
                  {activePolicy === 'privacy' && (
                    <motion.span
                      layoutId="policyModalTabIndicator"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0.01 }
                          : { type: 'spring', stiffness: 440, damping: 32 }
                      }
                      className="absolute inset-0 rounded-[var(--radius-xs)] bg-[var(--hyde-volt)] border border-[var(--hyde-ink)]/15"
                    />
                  )}
                  <span className="relative z-10">{t.policiesSection.privacyTab}</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activePolicy === 'terms'}
                  onClick={() => onSelectPolicy('terms')}
                  className={`relative min-h-[34px] rounded-[var(--radius-xs)] px-3 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activePolicy === 'terms'
                      ? 'text-[var(--hyde-ink)]'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
                  }`}
                >
                  {activePolicy === 'terms' && (
                    <motion.span
                      layoutId="policyModalTabIndicator"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0.01 }
                          : { type: 'spring', stiffness: 440, damping: 32 }
                      }
                      className="absolute inset-0 rounded-[var(--radius-xs)] bg-[var(--hyde-volt)] border border-[var(--hyde-ink)]/15"
                    />
                  )}
                  <span className="relative z-10">{t.policiesSection.termsTab}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.policiesSection.closeLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.04em] text-[var(--color-primary)]">
                  {t.policiesSection.eyebrow}
                </p>
                <h2
                  id="policy-modal-title"
                  className="mt-1.5 font-heading text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[var(--color-on-surface)]"
                >
                  {activePolicy === 'terms'
                    ? t.policiesSection.termsTab
                    : t.policiesSection.privacyTab}
                </h2>
              </div>

              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div
                    key={item.heading}
                    className="rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-5"
                  >
                    <span className="font-mono-tabular text-xs font-semibold text-[var(--color-primary)]">
                      0{idx + 1}.
                    </span>
                    <h3 className="mt-1.5 font-heading text-base font-semibold text-[var(--color-on-surface)]">
                      {item.heading}
                    </h3>
                    <p className="mt-1.5 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
