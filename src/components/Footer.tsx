"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Wifi, WifiOff } from "lucide-react";
import { Reveal } from "./Reveal";
import { FooterLanguageStrip } from "./LanguagePicker";
import { useDictionary, useLocale } from "../i18n/LocaleProvider";

export function Footer() {
  const [isOnline, setIsOnline] = useState(true);
  const dict = useDictionary();
  const locale = useLocale();
  const pdfHref = `/pdf/${locale}`;

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <footer className="pt-8 pb-16 border-t border-slate-900/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Closing Double-Bezel Launch Banner */}
        <Reveal className="mb-20 -mt-16">
          <div className="double-bezel-shell">
            <div className="double-bezel-core p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151a] dark:via-[#12151a] dark:to-emerald-950/25 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.1] mb-3">
                  {dict.footer.launchBannerTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {dict.footer.launchBannerSubtext}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                <Link
                  href={pdfHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 pl-6 pr-2 py-2 text-sm font-semibold shadow-[0_14px_30px_-8px_rgba(15,23,42,0.2)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-[0.98]"
                >
                  <span>{dict.footer.openPdfToolkit}</span>
                  <span className="w-9 h-9 rounded-full bg-white/15 dark:bg-slate-950/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
                    <ArrowUpRight
                      className="w-4 h-4 text-emerald-400 dark:text-emerald-600"
                      strokeWidth={1.75}
                    />
                  </span>
                </Link>

                <a
                  href="#tools"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 active:scale-[0.98]"
                >
                  <span>{dict.footer.exploreSuite}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900/[0.06] dark:border-white/[0.06]">
          {/* Brand Column (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span
                className="w-7 h-7 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-3.5 h-3.5 text-white dark:text-slate-900"
                >
                  <path
                    d="M4 6.5L10 3L16 6.5V13.5L10 17L4 13.5V6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="10" cy="10" r="2.2" className="fill-emerald-400 dark:fill-emerald-600" />
                </svg>
              </span>
              <span className="font-bold text-base tracking-[-0.03em] text-slate-950 dark:text-white">
                SlickKit Studio
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {dict.footer.brandDescription}
            </p>
          </div>

          {/* Product Suite Column (2 Cols) */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-4">
              {dict.footer.colProducts}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={pdfHref}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                >
                  <span>SlickKit PDF</span>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300">
                    LIVE
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  SlickKit Image
                </a>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  SlickKit Media
                </a>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  SlickKit Vault
                </a>
              </li>
            </ul>
          </div>

          {/* Comparisons Column (3 Cols) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-4">
              {dict.footer.colComparisons}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/vs"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-medium"
                >
                  All Architectural Comparisons
                </Link>
              </li>
              <li>
                <Link
                  href="/vs/ilovepdf"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  SlickKit vs. iLovePDF
                </Link>
              </li>
              <li>
                <Link
                  href="/vs/smallpdf"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  SlickKit vs. Smallpdf
                </Link>
              </li>
              <li>
                <Link
                  href="/vs/adobe-acrobat"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  SlickKit vs. Adobe Acrobat
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance Column (3 Cols) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-4">
              {dict.footer.colCompliance}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/compliance"
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-medium"
                >
                  Compliance Center Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance/gdpr-confidentiality"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  GDPR &amp; NDA Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance/local-processing-security"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  Network Tab Audit Guide
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  {dict.header.nav.faq}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Multi-Language SEO Strip (9 Languages) */}
        <FooterLanguageStrip />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {dict.footer.copyright}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 font-mono text-[11px]">
            {isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
                <span className="text-slate-700 dark:text-slate-300">
                  {dict.footer.onlineMode}
                </span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  {dict.footer.offlineMode}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
