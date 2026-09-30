import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'vi' | 'en';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const Context = createContext<LanguageContextValue | null>(null);
const storageKey = 'phieu-viet-language-v1';

function loadLanguage(): Language {
  if (typeof window === 'undefined') return 'vi';
  return localStorage.getItem(storageKey) === 'en' ? 'en' : 'vi';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    setLanguage(loadLanguage());
  }, []);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    localStorage.setItem(storageKey, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  function toggleLanguage() {
    changeLanguage(language === 'vi' ? 'en' : 'vi');
  }

  return <Context.Provider value={{ language, setLanguage: changeLanguage, toggleLanguage }}>{children}</Context.Provider>;
}

export function useLanguage() {
  const value = useContext(Context);
  if (!value) throw new Error('LanguageProvider missing');
  return value;
}
