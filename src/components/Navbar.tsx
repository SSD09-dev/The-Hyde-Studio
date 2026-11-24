import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import {
  SUPPORTED_LANGUAGES,
  usePreferences,
} from '../context/PreferencesContext';
import { translations } from '../i18n/translations';
import { HydeWordmark } from './HydeWordmark';
import { MagneticWrapper } from './MotionPrimitives';
import { usePointerCapabilities } from '../hooks/usePointerCapabilities';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const { prefersReducedMotion } = usePointerCapabilities();
  const { theme, toggleTheme, language, setLanguage } = usePreferences();
  const t = translations[language];

  const currentLangOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  const localizedNavLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.community, href: '#community' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setLangMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMobileNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/92 dark:bg-[#090909]/92 backdrop-blur-md border-b border-[var(--color-outline-variant)]'
          : 'bg-[var(--color-background)] border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center h-16 sm:h-20 gap-2 sm:gap-4">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center justify-self-start shrink-0">
          <a
            href="#top"
            aria-label="The Hyde Studios Home"
            className="inline-flex items-center shrink-0 py-1.5 rounded-[var(--radius-sm)]"
          >
            <HydeWordmark
              variant={theme === 'dark' ? 'light' : 'dark'}
              className="h-5 sm:h-6 md:h-7 w-auto"
            />
          </a>
        </div>

        {/* Zone 2: Truly Centered Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center justify-center gap-7 xl:gap-9"
        >
          {localizedNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative inline-flex items-center h-11 py-1 text-sm font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors whitespace-nowrap shrink-0"
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[var(--color-on-surface)] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Uniform-Height Right Controls (Borderless Language & Theme + Primary CTA) */}
        <div className="flex items-center justify-end justify-self-end gap-1.5 sm:gap-3 shrink-0">
          {/* Borderless Language Dropdown */}
          <div ref={langDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              aria-label={`${t.a11y.languageLabel}: ${currentLangOption.nativeName}`}
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[var(--radius-sm)] bg-transparent px-2 sm:px-2.5 text-xs font-medium text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Globe className="h-4 w-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
              <span lang={language} className="max-w-[74px] sm:max-w-none truncate">
                {currentLangOption.nativeName}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-[var(--color-on-surface-variant)] transition-transform duration-150 shrink-0 ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.ul
                  role="listbox"
                  aria-label={t.a11y.languageLabel}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.14 }}
                  className="absolute right-0 mt-2 w-44 rounded-[var(--radius-md)] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-1.5 shadow-[var(--shadow-menu)] z-50"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => {
                    const selected = lang.code === language;
                    return (
                      <li key={lang.code} role="option" aria-selected={selected}>
                        <button
                          type="button"
                          lang={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangMenuOpen(false);
                          }}
                          className={`flex min-h-[40px] w-full items-center justify-between rounded-[var(--radius-xs)] px-3 text-left text-xs font-medium transition-colors cursor-pointer ${
                            selected
                              ? 'bg-[var(--hyde-volt)] text-[var(--hyde-ink)] font-semibold'
                              : 'text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)]'
                          }`}
                        >
                          <span>{lang.nativeName}</span>
                          {selected && <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Borderless Icon-Only Theme Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? t.a11y.themeToggleToLight : t.a11y.themeToggleToDark
            }
            title={theme === 'dark' ? t.a11y.themeToggleToLight : t.a11y.themeToggleToDark}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-transparent text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] transition-colors shrink-0 cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-[18px] w-[18px] text-[var(--hyde-volt)]" aria-hidden="true" />
            ) : (
              <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center">
            <MagneticWrapper>
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-[var(--radius-md)] bg-[var(--hyde-volt)] px-4 text-xs xl:text-sm font-semibold text-[var(--hyde-ink)] border border-[var(--hyde-ink)]/15 hover:bg-[#bceb5a] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.nav.startProject}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </MagneticWrapper>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-transparent text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] transition-colors shrink-0 cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Minimal Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-[var(--color-outline-variant)] bg-[var(--color-background)] px-4 sm:px-6 pb-6 pt-3 shadow-[var(--shadow-menu)]"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {localizedNavLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleMobileNavClick(link.href)}
                  className="flex min-h-[46px] w-full items-center justify-between rounded-[var(--radius-sm)] px-3 text-left text-base font-medium text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)] cursor-pointer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-on-surface-variant)]" aria-hidden="true" />
                </button>
              ))}
            </nav>

            <div className="mt-4 border-t border-[var(--color-outline-variant)] pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onStartProject();
                }}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--hyde-volt)] px-5 text-sm font-semibold text-[var(--hyde-ink)] border border-[var(--hyde-ink)]/15 cursor-pointer"
              >
                <span>{t.nav.startProject}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
