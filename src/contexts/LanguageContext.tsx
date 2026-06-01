import React, { createContext, useContext, useState } from 'react';

type Language = 'jp' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (jp: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('jp');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'jp' ? 'en' : 'jp'));
  };

  const t = (jp: string, en: string) => (language === 'jp' ? jp : en);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
