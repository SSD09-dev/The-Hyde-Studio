import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { MagneticWrapper } from './MotionPrimitives';
import { InstagramIcon, LinkedInIcon } from './SocialIcons';
import { usePointerCapabilities } from '../hooks/usePointerCapabilities';

export const CommunitySpotlight: React.FC = () => {
  const { language } = usePreferences();
  const { prefersReducedMotion } = usePointerCapabilities();
  const t = translations[language];

  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      return window.localStorage.getItem('hyde_community_waitlist_email');
    } catch {
      return null;
    }
  });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = waitlistEmail.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValidEmail) {
      setErrorMessage(t.communitySection.emailError);
      return;
    }

    setErrorMessage('');
    setSubmittedEmail(trimmed);
    setWaitlistEmail('');
    try {
      window.localStorage.setItem('hyde_community_waitlist_email', trimmed);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="community"
      className="py-16 md:py-22 bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] border-b border-[var(--color-inverse-outline)]"
    >
      <div className="container-hyde">
        {/* Top Block: Header & Audience */}
        <div className="max-w-3xl pb-10 md:pb-12">
          <motion.span
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    boxShadow: [
                      '0 0 0 0 rgba(254, 253, 249, 0.2)',
                      '0 0 0 6px rgba(254, 253, 249, 0)',
                      '0 0 0 0 rgba(254, 253, 249, 0)',
                    ],
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.01 }
                : {
                    duration: 0.35,
                    boxShadow: { repeat: Infinity, duration: 2.8, ease: 'easeOut' },
                  }
            }
            className="inline-block rounded-[var(--radius-full)] bg-[#FEFDF9]/10 border border-[#FEFDF9]/25 px-3.5 py-1 text-xs font-semibold text-[#FEFDF9]"
          >
            {t.communitySection.badge}
          </motion.span>

          <h2 className="section-heading-type mt-4 text-[#FEFDF9]">
            {t.communitySection.headline}
          </h2>

          <p className="mt-4 text-base md:text-lg text-[var(--color-inverse-on-surface-variant)] max-w-[60ch] leading-relaxed">
            {t.communitySection.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-medium text-[var(--color-inverse-primary)]">
            {t.communitySection.audiences.map((audience, idx) => (
              <React.Fragment key={audience}>
                <span>{audience}</span>
                {idx < t.communitySection.audiences.length - 1 && (
                  <span aria-hidden="true" className="text-[var(--color-inverse-on-surface-variant)]/50">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Middle Block: 3-Column Value Grid */}
        <div className="border-t border-[var(--color-inverse-outline)] py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.communitySection.pillars.map((pillar, index) => (
            <div key={pillar.title}>
              <span className="font-mono-tabular text-xs font-semibold text-[var(--color-inverse-primary)]">
                0{index + 1}.
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-[#FEFDF9]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--color-inverse-on-surface-variant)] leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Block: Early-Notify Email & Socials Action Bar */}
        <div className="border-t border-[var(--color-inverse-outline)] pt-8 md:pt-10">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-inverse-outline)] bg-[var(--color-inverse-surface-elevated)] p-5 sm:p-6 md:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="w-full lg:max-w-xl">
              {submittedEmail ? (
                <div
                  role="status"
                  className="rounded-[var(--radius-md)] border border-[#FEFDF9]/25 bg-[#FEFDF9]/10 p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-[var(--color-inverse-primary)] mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="font-heading text-base font-semibold text-[#FEFDF9]">
                        {t.communitySection.successTitle}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-inverse-on-surface-variant)] break-words">
                        {t.communitySection.successBodyPrefix}{' '}
                        <span className="text-[#FEFDF9] font-medium break-all">{submittedEmail}</span>
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmittedEmail(null);
                          try {
                            window.localStorage.removeItem('hyde_community_waitlist_email');
                          } catch {
                            // ignore
                          }
                        }}
                        className="mt-2.5 min-h-[36px] text-xs font-semibold text-[var(--color-inverse-primary)] underline underline-offset-4 cursor-pointer"
                      >
                        {t.communitySection.resetWaitlist}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} noValidate className="space-y-2.5">
                  <label
                    htmlFor="community-waitlist-email"
                    className="block text-xs font-semibold text-[#FEFDF9]/90"
                  >
                    {t.communitySection.emailLabel}
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="community-waitlist-email"
                      type="email"
                      value={waitlistEmail}
                      onChange={(e) => {
                        setWaitlistEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder={t.communitySection.emailPlaceholder}
                      required
                      aria-invalid={Boolean(errorMessage)}
                      className="h-12 w-full sm:flex-1 rounded-[var(--radius-md)] border border-[var(--color-inverse-outline)] bg-[#010101] px-3.5 text-sm text-[#FEFDF9] placeholder:text-[#9E9E9A] focus:border-[var(--color-inverse-primary)] focus:outline-none"
                    />
                    <MagneticWrapper className="w-full sm:w-auto">
                      <button
                        type="submit"
                        className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-1.5 rounded-[var(--radius-md)] bg-[var(--color-inverse-primary)] px-6 text-sm font-semibold text-[var(--color-inverse-on-primary)] hover:bg-[var(--color-inverse-primary-hover)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{t.communitySection.submitCta}</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </MagneticWrapper>
                  </div>
                  {errorMessage && (
                    <p role="alert" className="text-xs text-[#ffb4ab]">
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0 lg:pb-0.5">
              <span className="text-xs font-medium text-[var(--color-inverse-on-surface-variant)]">
                {t.communitySection.followLabel}
              </span>
              <a
                href={siteConfig.SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Hyde Studios on LinkedIn"
                title="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-inverse-outline)] text-[#FEFDF9] hover:border-[var(--color-inverse-primary)] hover:bg-[#FEFDF9]/10 transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Hyde Studios on Instagram"
                title="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-inverse-outline)] text-[#FEFDF9] hover:border-[var(--color-inverse-primary)] hover:bg-[#FEFDF9]/10 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
