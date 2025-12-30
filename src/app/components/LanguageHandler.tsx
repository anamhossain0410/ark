'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function LanguageHandler() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the HTML lang attribute based on current language
    document.documentElement.lang = language;
    
    // Set text direction based on language
    // Russian and English are LTR, but this is extensible for RTL languages
    const isRTL = false; // Could be extended for Arabic, Hebrew, etc.
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language]);

  return null; // This component doesn't render anything
}
