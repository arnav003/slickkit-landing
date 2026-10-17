"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown, Check } from "lucide-react";
import { Locale, SUPPORTED_LOCALES, localeLabels } from "../i18n/config";
import { useLocale } from "../i18n/LocaleProvider";

export interface SupportedLanguage {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  landingPath: string;
  pdfPath: string;
}

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = SUPPORTED_LOCALES.map((code) => {
  const meta = localeLabels[code];
  return {
    code,
    name: meta.label,
    nativeName: meta.nativeName,
    flag: meta.flag,
    landingPath: code === "en" ? "/" : `/${code}`,
    pdfPath: `/pdf/${code}`,
  };
});

export function LanguagePicker({ currentLang }: { currentLang?: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contextLocale = useLocale();
  const activeCode = currentLang ?? contextLocale ?? "en";

  const activeLang =
    SUPPORTED_LANGUAGES.find((lang) => lang.code === activeCode) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
      >
        <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
        <span className="text-[12px]">{activeLang.flag}</span>
        <span className="hidden sm:inline text-[11px] font-mono uppercase">{activeLang.code}</span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white/95 dark:bg-[#12151A]/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-island-nav p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-slate-400 border-b border-slate-100 dark:border-slate-800 mb-1">
            Regional Editions (9)
          </div>
          <div className="max-h-64 overflow-y-auto space-y-0.5">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isCurrent = lang.code === activeLang.code;
              return (
                <Link
                  key={lang.code}
                  href={lang.landingPath}
                  hrefLang={lang.code}
                  rel="alternate"
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors duration-150 ${
                    isCurrent
                      ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                    <span className="text-[10px] font-mono text-slate-400">({lang.name})</span>
                  </span>
                  {isCurrent && <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function FooterLanguageStrip() {
  const contextLocale = useLocale();

  return (
    <div className="pt-6 pb-4 border-t border-slate-900/[0.06] dark:border-white/[0.06]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>GLOBAL EDITIONS (9 LANGUAGES):</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isCurrent = lang.code === contextLocale;
            return (
              <Link
                key={lang.code}
                href={lang.landingPath}
                hrefLang={lang.code}
                rel="alternate"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors ${
                  isCurrent
                    ? "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span>{lang.flag}</span>
                <span className="font-medium">{lang.nativeName}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
