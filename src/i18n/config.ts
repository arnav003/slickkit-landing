export const SUPPORTED_LOCALES = [
  "en",
  "es",
  "de",
  "fr",
  "pt",
  "it",
  "ro",
  "ru",
  "hu",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleMeta {
  code: Locale;
  label: string;
  nativeName: string;
  flag: string;
  htmlLang: string;
  hrefLang: string;
}

export const localeLabels: Record<Locale, LocaleMeta> = {
  en: { code: "en", label: "English", nativeName: "English", flag: "🇬🇧", htmlLang: "en", hrefLang: "en" },
  es: { code: "es", label: "Spanish", nativeName: "Español", flag: "🇪🇸", htmlLang: "es", hrefLang: "es" },
  fr: { code: "fr", label: "French", nativeName: "Français", flag: "🇫🇷", htmlLang: "fr", hrefLang: "fr" },
  de: { code: "de", label: "German", nativeName: "Deutsch", flag: "🇩🇪", htmlLang: "de", hrefLang: "de" },
  pt: { code: "pt", label: "Portuguese", nativeName: "Português", flag: "🇵🇹", htmlLang: "pt", hrefLang: "pt" },
  it: { code: "it", label: "Italian", nativeName: "Italiano", flag: "🇮🇹", htmlLang: "it", hrefLang: "it" },
  ro: { code: "ro", label: "Romanian", nativeName: "Română", flag: "🇷🇴", htmlLang: "ro", hrefLang: "ro" },
  ru: { code: "ru", label: "Russian", nativeName: "Русский", flag: "🇷🇺", htmlLang: "ru", hrefLang: "ru" },
  hu: { code: "hu", label: "Hungarian", nativeName: "Magyar", flag: "🇭🇺", htmlLang: "hu", hrefLang: "hu" },
};

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}
