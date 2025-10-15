'use client';

import { useLanguage } from "@/app/contexts/LanguageContext";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'en' | 'fr' | 'ru') => {
    setLanguage(newLanguage);
  };

  return (
    <nav className="flex space-x-4">
      <button 
        data-language="en" 
        className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
          language === 'en' 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button 
        data-language="fr" 
        className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
          language === 'fr' 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
        onClick={() => handleLanguageChange('fr')}
      >
        French
      </button>
      <button 
        data-language="ru" 
        className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
          language === 'ru' 
            ? 'text-blue-600 bg-blue-50' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
        onClick={() => handleLanguageChange('ru')}
      >
        Russian
      </button>
    </nav>
  );
}
