"use client";

import React, { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES } from "./config";
import type { LandingDictionary } from "./dictionaries/dictionary-types";
import { getDictionary, getDefaultDictionary } from "./get-dictionary";

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);
const DictionaryContext = createContext<LandingDictionary>(getDefaultDictionary());

export function LocaleProvider({
  locale: initialLocale = DEFAULT_LOCALE,
  dictionary: initialDictionary,
  children,
}: {
  locale?: Locale;
  dictionary?: LandingDictionary;
  children: ReactNode;
}) {
  const pathname = usePathname();

  const locale = useMemo(() => {
    if (!pathname) return initialLocale;

    const segments = pathname.split("/");
    const firstSegment = segments[1] as Locale;

    if (firstSegment && (SUPPORTED_LOCALES as readonly string[]).includes(firstSegment)) {
      return firstSegment;
    }

    return initialLocale;
  }, [pathname, initialLocale]);

  const dictionary = useMemo(() => {
    if (initialDictionary && locale === initialLocale) {
      return initialDictionary;
    }
    return getDictionary(locale);
  }, [locale, initialLocale, initialDictionary]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <LocaleContext.Provider value={locale}>
      <DictionaryContext.Provider value={dictionary}>
        {children}
      </DictionaryContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useDictionary(): LandingDictionary {
  return useContext(DictionaryContext);
}
