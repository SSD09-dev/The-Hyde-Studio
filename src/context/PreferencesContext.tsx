import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type LanguageCode = 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'ml';

export interface LanguageOption {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
  shortTag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', nativeName: 'English', englishName: 'English', shortTag: 'EN' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', shortTag: 'हि' },
  { code: 'te', nativeName: 'తెలుగు', englishName: 'Telugu', shortTag: 'తె' },
  { code: 'ta', nativeName: 'தமிழ்', englishName: 'Tamil', shortTag: 'த' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', englishName: 'Kannada', shortTag: 'ಕ' },
  { code: 'ml', nativeName: 'മലയാളം', englishName: 'Malayalam', shortTag: 'മ' },
];

interface PreferencesContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  announcement: string;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'dark';
    try {
      const saved = window.localStorage.getItem('hyde_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark';
    } catch {
      return 'dark';
    }
  });

  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      const saved = window.localStorage.getItem('hyde_language') as LanguageCode | null;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    try {
      window.localStorage.setItem('hyde_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem('hyde_language', language);
    } catch {
      // ignore
    }
  }, [language]);

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    setAnnouncement(`Switched to ${nextTheme} theme.`);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const setLanguage = (nextLang: LanguageCode) => {
    setLanguageState(nextLang);
    const meta = SUPPORTED_LANGUAGES.find((l) => l.code === nextLang);
    if (meta) {
      setAnnouncement(`Language changed to ${meta.englishName} (${meta.nativeName}).`);
    }
  };

  return (
    <PreferencesContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        language,
        setLanguage,
        announcement,
      }}
    >
      {children}
      {/* Screen-reader live region for accessible theme & language switches */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </PreferencesContext.Provider>
  );
};

export function usePreferences(): PreferencesContextValue {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error('usePreferences must be used within PreferencesProvider');
  }
  return ctx;
}
