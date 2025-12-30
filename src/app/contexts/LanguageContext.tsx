'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Initialize language from localStorage, browser preference, or default
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Get language from localStorage first
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && ['en', 'fr', 'ru'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
        return;
      }

      // If no saved language, try to detect from browser
      const browserLanguage = navigator.language.split('-')[0] as Language;
      if (['en', 'fr', 'ru'].includes(browserLanguage)) {
        setLanguage(browserLanguage);
        // Save the detected language
        localStorage.setItem('preferred-language', browserLanguage);
        return;
      }

      // Fallback to English
      setLanguage('en');
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
