import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MessageSquare, Phone } from 'lucide-react';
import { ServiceId, siteConfig } from '../config/siteConfig';
import { usePreferences } from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { MagneticWrapper } from './MotionPrimitives';
import { InstagramIcon, LinkedInIcon } from './SocialIcons';

interface ContactHubProps {
  preselectedService: ServiceId | '';
  prefilledBriefNote: string;
  onOpenPrivacyPolicy?: () => void;
}

interface FormState {
  name: string;
  contactHandle: string;
  service: ServiceId | '';
  brief: string;
}

export const ContactHub: React.FC<ContactHubProps> = ({
  preselectedService,
  prefilledBriefNote,
  onOpenPrivacyPolicy,
}) => {
  const { language } = usePreferences();
  const t = translations[language];

  const [form, setForm] = useState<FormState>({
    name: '',
    contactHandle: '',
    service: preselectedService,
    brief: prefilledBriefNote,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    if (preselectedService || prefilledBriefNote) {
      setForm((prev) => ({
        ...prev,
        service: preselectedService || prev.service,
        brief: prefilledBriefNote || prev.brief,
      }));
      setSubmittedData(null);
    }
  }, [preselectedService, prefilledBriefNote]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = t.contactSection.form.nameError;
    }
    if (form.contactHandle.trim().length < 3) {
      nextErrors.contactHandle = t.contactSection.form.handleError;
    }
    if (!form.service) {
      nextErrors.service = t.contactSection.form.serviceError;
    }
    if (form.brief.trim().length < 12) {
      nextErrors.brief = t.contactSection.form.briefError;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedData({ ...form });
  };

  const activeServiceKey = submittedData?.service || form.service;
  const selectedServiceTitle = activeServiceKey
    ? t.servicesSection.items[activeServiceKey].title
    : 'Project Inquiry';

  const buildMailtoHref = (data: FormState) => {
    const subject = encodeURIComponent(
      `[Project Inquiry] ${selectedServiceTitle} — ${data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail / Handle: ${data.contactHandle}\nService: ${selectedServiceTitle}\n\nProject Brief:\n${data.brief}`
    );
    return `mailto:${siteConfig.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-22 bg-[var(--color-background)]"
    >
      <div className="container-hyde">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Minimal Direct Contact Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.04em] text-[var(--color-primary)]">
                {t.contactSection.eyebrow}
              </p>
              <h2 className="section-heading-type mt-2 text-[var(--color-on-surface)]">
                {t.contactSection.headline}
              </h2>
              <p className="mt-4 text-base text-[var(--color-on-surface-variant)] leading-relaxed max-w-[42ch]">
                {t.contactSection.description}
              </p>
            </div>

            <div className="space-y-3 border-t border-[var(--color-outline-variant)] pt-6 text-sm">
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="h-4 w-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.CONTACT_EMAIL}`}
                  className="font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] underline underline-offset-4 break-all"
                >
                  {siteConfig.CONTACT_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.CONTACT_PHONE.replace(/\s+/g, '')}`}
                  className="font-mono-tabular font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)]"
                >
                  {siteConfig.CONTACT_PHONE}
                </a>
              </div>

              {siteConfig.WHATSAPP_NUMBER && (
                <div className="flex items-center gap-3">
                  <MessageSquare
                    className="h-4 w-4 text-[var(--color-primary)] shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`https://wa.me/${siteConfig.WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-on-surface)] hover:text-[var(--color-primary)] underline underline-offset-4"
                  >
                    {t.contactSection.whatsappCta}
                  </a>
                </div>
              )}

              <div className="flex items-center gap-2.5 pt-3">
                <a
                  href={siteConfig.SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="The Hyde Studios on LinkedIn"
                  title="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] hover:border-[var(--color-on-surface)] transition-colors"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>

                <a
                  href={siteConfig.SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="The Hyde Studios on Instagram"
                  title="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] hover:border-[var(--color-on-surface)] transition-colors"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Client Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-6 md:p-8">
              {submittedData ? (
                <div role="status" className="py-4 space-y-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--hyde-volt)] text-[var(--hyde-ink)]">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-on-surface)]">
                      {t.contactSection.form.successTitlePrefix} {submittedData.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] max-w-[50ch]">
                      {t.contactSection.form.successBodyPrefix}{' '}
                      <span className="font-semibold text-[var(--color-on-surface)]">
                        {selectedServiceTitle}
                      </span>{' '}
                      {t.contactSection.form.successBodySuffix}
                    </p>
                  </div>

                  <div className="rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-4 text-sm space-y-1.5">
                    <p>
                      <span className="font-semibold text-[var(--color-on-surface)]">
                        {t.contactSection.form.replyToLabel}{' '}
                      </span>
                      <span className="text-[var(--color-on-surface-variant)]">
                        {submittedData.contactHandle}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--color-on-surface)]">
                        {t.contactSection.form.briefSummaryLabel}{' '}
                      </span>
                      <span className="text-[var(--color-on-surface-variant)]">
                        {submittedData.brief}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoHref(submittedData)}
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-[var(--radius-md)] bg-[var(--hyde-volt)] px-5 text-sm font-semibold text-[var(--hyde-ink)] border border-[var(--hyde-ink)]/15 hover:bg-[#bceb5a] transition-colors"
                    >
                      <span>{t.contactSection.form.openEmailCta}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setForm({
                          name: '',
                          contactHandle: '',
                          service: '',
                          brief: '',
                        });
                      }}
                      className="inline-flex min-h-[46px] items-center rounded-[var(--radius-md)] border border-[var(--color-outline)] px-5 text-sm font-semibold text-[var(--color-on-surface)] hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
                    >
                      {t.contactSection.form.sendAnotherCta}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5"
                      >
                        {t.contactSection.form.nameLabel}
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder={t.contactSection.form.namePlaceholder}
                        required
                        aria-invalid={Boolean(errors.name)}
                        className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] focus:border-[var(--color-primary)] focus:outline-none"
                      />
                      {errors.name && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-[var(--color-error)]"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-handle"
                        className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5"
                      >
                        {t.contactSection.form.handleLabel}
                      </label>
                      <input
                        id="inquiry-handle"
                        type="text"
                        value={form.contactHandle}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, contactHandle: e.target.value }));
                          if (errors.contactHandle) {
                            setErrors((prev) => ({ ...prev, contactHandle: undefined }));
                          }
                        }}
                        placeholder={t.contactSection.form.handlePlaceholder}
                        required
                        aria-invalid={Boolean(errors.contactHandle)}
                        className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] focus:border-[var(--color-primary)] focus:outline-none"
                      />
                      {errors.contactHandle && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-[var(--color-error)]"
                        >
                          {errors.contactHandle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-service"
                      className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5"
                    >
                      {t.contactSection.form.serviceLabel}
                    </label>
                    <select
                      id="inquiry-service"
                      value={form.service}
                      onChange={(e) => {
                        setForm((prev) => ({
                          ...prev,
                          service: e.target.value as ServiceId | '',
                        }));
                        if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                      }}
                      required
                      aria-invalid={Boolean(errors.service)}
                      className="h-12 w-full rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3.5 text-sm text-[var(--color-on-surface)] focus:border-[var(--color-primary)] focus:outline-none"
                    >
                      <option value="">{t.contactSection.form.servicePlaceholder}</option>
                      {siteConfig.services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {t.servicesSection.items[service.id].title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-[var(--color-error)]"
                      >
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-brief"
                      className="block text-sm font-semibold text-[var(--color-on-surface)] mb-1.5"
                    >
                      {t.contactSection.form.briefLabel}
                    </label>
                    <textarea
                      id="inquiry-brief"
                      rows={4}
                      value={form.brief}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, brief: e.target.value }));
                        if (errors.brief) setErrors((prev) => ({ ...prev, brief: undefined }));
                      }}
                      placeholder={t.contactSection.form.briefPlaceholder}
                      required
                      aria-invalid={Boolean(errors.brief)}
                      className="w-full rounded-[var(--radius-sm)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-3.5 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] focus:border-[var(--color-primary)] focus:outline-none resize-y"
                    />
                    {errors.brief && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-[var(--color-error)]"
                      >
                        {errors.brief}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <button
                      type="button"
                      onClick={onOpenPrivacyPolicy}
                      className="text-left text-xs text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] underline underline-offset-4 cursor-pointer"
                    >
                      {t.contactSection.form.privacyNote}
                    </button>
                    <MagneticWrapper className="w-full sm:w-auto">
                      <button
                        type="submit"
                        className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--hyde-volt)] px-6 text-sm font-semibold text-[var(--hyde-ink)] border border-[var(--hyde-ink)]/15 hover:bg-[#bceb5a] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{t.contactSection.form.submitCta}</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </MagneticWrapper>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
