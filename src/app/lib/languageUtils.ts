import { Language } from '@/app/contexts/LanguageContext';

/**
 * Get localized text from multilingual content
 * Falls back to English if the requested language is not available
 */
export function getLocalizedText(
  multilingualContent: { en?: string; fr?: string; ru?: string } | null | undefined,
  language: Language
): string {
  if (!multilingualContent) return '';
  
  // Try to get content in the requested language
  const localizedText = multilingualContent[language];
  if (localizedText) return localizedText;
  
  // Fallback to English
  if (multilingualContent.en) return multilingualContent.en;
  
  // If no English, try other languages in order of preference
  if (multilingualContent.fr) return multilingualContent.fr;
  if (multilingualContent.ru) return multilingualContent.ru;
  
  return '';
}

/**
 * Get localized block content from multilingual content
 * Falls back to English if the requested language is not available
 */
export function getLocalizedBlockContent(
  multilingualContent: { en?: unknown; fr?: unknown; ru?: unknown } | null | undefined,
  language: Language
): unknown {
  if (!multilingualContent) return null;
  
  // Try to get content in the requested language
  const localizedContent = multilingualContent[language];
  if (localizedContent) return localizedContent;
  
  // Fallback to English
  if (multilingualContent.en) return multilingualContent.en;
  
  // If no English, try other languages in order of preference
  if (multilingualContent.fr) return multilingualContent.fr;
  if (multilingualContent.ru) return multilingualContent.ru;
  
  return null;
}

/**
 * Check if a language is supported
 */
export function isSupportedLanguage(language: string): language is Language {
  return ['en', 'fr', 'ru'].includes(language);
}

/**
 * Get language display name
 */
export function getLanguageDisplayName(language: Language): string {
  const names = {
    en: 'English',
    fr: 'Français',
    ru: 'Русский',
  };
  return names[language];
}

/**
 * Get language code from display name
 */
export function getLanguageCode(displayName: string): Language | null {
  const codes: Record<string, Language> = {
    'English': 'en',
    'Français': 'fr',
    'Русский': 'ru',
  };
  return codes[displayName] || null;
}
