'use client';

import { useLanguage } from "@/app/contexts/LanguageContext";

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
] as const;

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'en' | 'fr' | 'ru') => {
    setLanguage(newLanguage);
  };

  return (
    <nav className="flex space-x-2" role="navigation" aria-label="Language selection">
      {languages.map((lang) => (
        <button 
          key={lang.code}
          data-language={lang.code}
          className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md border ${
            language === lang.code 
              ? 'text-blue-600 bg-blue-50 border-blue-200 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent hover:border-gray-200'
          }`}
          onClick={() => handleLanguageChange(lang.code)}
          aria-pressed={language === lang.code}
          title={`Switch to ${lang.name}`}
        >
          <span className="block">{lang.nativeName}</span>
          <span className="text-xs opacity-70">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </nav>
  );
}
