import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import {
  ShieldCheck,
  Check,
  X,
  ArrowUpRight,
  Zap,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SlickKit vs. Cloud-Based PDF Tools | Privacy & Architecture Breakdown",
  description:
    "Compare SlickKit with traditional cloud PDF services like iLovePDF, Smallpdf, and Adobe Acrobat. Learn how 100% in-browser processing protects your confidential files.",
  alternates: {
    canonical: "https://www.slickkit.dev/vs",
  },
  openGraph: {
    title: "SlickKit vs. Cloud PDF Tools | Privacy & Architecture Breakdown",
    description:
      "Why professionals switch from cloud-upload PDF converters to SlickKit's zero-upload, on-device architecture.",
    url: "https://www.slickkit.dev/vs",
  },
};

const COMPARISONS = [
  {
    slug: "ilovepdf",
    title: "SlickKit vs. iLovePDF",
    subtitle: "Cloud Server Uploads vs. 100% In-Browser RAM Processing",
    highlight: "Zero Cloud File Transfers",
    description:
      "iLovePDF uploads your confidential documents to external cloud servers where they are queued and stored for 1–2 hours. SlickKit processes everything locally on your computer with zero network transmission.",
    badge: "Cloud vs. Local",
    href: "/vs/ilovepdf",
  },
  {
    slug: "smallpdf",
    title: "SlickKit vs. Smallpdf",
    subtitle: "Unlimited Free Local Utilities vs. Daily Task Paywalls",
    highlight: "Zero Subscription Traps",
    description:
      "Smallpdf restricts free users to 1–2 tasks per day before demanding a recurring paid subscription and email signup. SlickKit has no task limits, no account requirements, and zero subscriptions.",
    badge: "Paywalls vs. Free",
    href: "/vs/smallpdf",
  },
  {
    slug: "adobe-acrobat",
    title: "SlickKit vs. Adobe Acrobat",
    subtitle: "Instant In-Browser Tooling vs. $240/Year Desktop Bloat",
    highlight: "Lightweight & Instant",
    description:
      "Adobe Acrobat costs $240+ per year, requires gigabytes of desktop installation, and forces cloud sync. SlickKit opens instantly in your browser without downloads or monthly bills.",
    badge: "Desktop vs. Browser",
    href: "/vs/adobe-acrobat",
  },
];

const MATRIX_ROWS = [
  {
    feature: "Zero Cloud Uploads (100% In-Browser)",
    slickkit: true,
    ilovepdf: false,
    smallpdf: false,
    acrobat: "Partial (Cloud Sync Default)",
  },
  {
    feature: "Works Completely Offline",
    slickkit: true,
    ilovepdf: false,
    smallpdf: false,
    acrobat: true,
  },
  {
    feature: "Free with No Subscriptions",
    slickkit: true,
    ilovepdf: "Freemium (Heavy Ads)",
    smallpdf: "Freemium (2 tasks/day)",
    acrobat: "$240+/year",
  },
  {
    feature: "No Account / Email Registration",
    slickkit: true,
    ilovepdf: "Optional",
    smallpdf: "Required for limits",
    acrobat: "Required (Adobe ID)",
  },
  {
    feature: "Safe for Confidential NDAs & Bank Statements",
    slickkit: true,
    ilovepdf: false,
    smallpdf: false,
    acrobat: true,
  },
  {
    feature: "Verifiable via Browser Network Tab",
    slickkit: true,
    ilovepdf: false,
    smallpdf: false,
    acrobat: false,
  },
];

import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";

export default function VersusHubPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Comparisons", item: "/vs" },
        ]}
      />
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>Architectural Comparisons</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.08] mb-6">
              Why professionals switch from{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                cloud PDF converters
              </span>{" "}
              to SlickKit.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Most online PDF services operate on legacy cloud-upload architectures that pose severe privacy liabilities for contracts, medical documents, and financial audits. Here is how SlickKit’s client-side local architecture compares.
            </p>
          </Reveal>

          {/* 3 Deep Dive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {COMPARISONS.map((item, idx) => (
              <Reveal key={item.slug} delayMs={idx * 60}>
                <div className="double-bezel-shell h-full">
                  <div className="double-bezel-core p-6 sm:p-7 flex flex-col justify-between h-full bg-white dark:bg-[#12151A]">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-600/20">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.highlight}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white mb-2">
                        {item.title}
                      </h2>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 dark:border-slate-800 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors group"
                    >
                      <span>Read Full Architectural Breakdown</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Master Comparison Matrix */}
          <Reveal className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-2">
                Feature &amp; Privacy Comparison Matrix
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Direct side-by-side technical evaluation across leading document tools.
              </p>
            </div>

            <div className="double-bezel-shell overflow-hidden">
              <div className="double-bezel-core p-0 overflow-x-auto bg-white dark:bg-[#12151A]">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 text-slate-900 dark:text-white font-mono text-xs">
                      <th className="p-4 sm:p-5 font-semibold">Capability</th>
                      <th className="p-4 sm:p-5 font-semibold text-emerald-700 dark:text-emerald-400">
                        SlickKit PDF
                      </th>
                      <th className="p-4 sm:p-5 font-semibold text-slate-600 dark:text-slate-400">
                        iLovePDF
                      </th>
                      <th className="p-4 sm:p-5 font-semibold text-slate-600 dark:text-slate-400">
                        Smallpdf
                      </th>
                      <th className="p-4 sm:p-5 font-semibold text-slate-600 dark:text-slate-400">
                        Adobe Acrobat
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {MATRIX_ROWS.map((row) => (
                      <tr key={row.feature} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="p-4 sm:p-5 font-medium text-slate-900 dark:text-slate-200">
                          {row.feature}
                        </td>
                        <td className="p-4 sm:p-5 font-semibold text-emerald-700 dark:text-emerald-400">
                          {row.slickkit === true ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-emerald-500/15 px-2.5 py-1 rounded-full">
                              <Check className="w-3.5 h-3.5" /> YES (100% Local)
                            </span>
                          ) : (
                            row.slickkit
                          )}
                        </td>
                        <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                          {row.ilovepdf === false ? (
                            <span className="inline-flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                              <X className="w-3.5 h-3.5" /> No (Uploads to Cloud)
                            </span>
                          ) : (
                            row.ilovepdf
                          )}
                        </td>
                        <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                          {row.smallpdf === false ? (
                            <span className="inline-flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                              <X className="w-3.5 h-3.5" /> No (Uploads to Cloud)
                            </span>
                          ) : (
                            row.smallpdf
                          )}
                        </td>
                        <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                          {row.acrobat === true ? (
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                              <Check className="w-3.5 h-3.5" /> Yes
                            </span>
                          ) : (
                            <span className="text-xs">{row.acrobat}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Action CTA */}
          <Reveal className="text-center">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-12 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151A] dark:via-[#12151A] dark:to-emerald-950/25 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-2">
                    Experience Zero-Upload Document Utility
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    No installations, no accounts, and no file transmissions.
                  </p>
                </div>
                <Link
                  href="/pdf"
                  className="inline-flex items-center gap-2.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-6 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
                >
                  <span>Launch SlickKit PDF</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
