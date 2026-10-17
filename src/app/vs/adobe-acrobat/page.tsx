import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import {
  FileText,
  Check,
  X,
  ArrowUpRight,
  ArrowLeft,
  Laptop,
  Zap,
  DollarSign,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SlickKit vs. Adobe Acrobat | Instant In-Browser Tools vs. $240/Yr Desktop Bloat",
  description:
    "Compare SlickKit with Adobe Acrobat Pro. Understand when you actually need heavyweight Acrobat software and when lightweight, free, in-browser SlickKit is 10x faster and frictionless.",
  alternates: {
    canonical: "https://www.slickkit.dev/vs/adobe-acrobat",
  },
  openGraph: {
    title: "SlickKit vs. Adobe Acrobat: Free Browser Tooling vs. $240/yr Bloat",
    description:
      "Why keep paying $240/yr for Adobe Acrobat just to merge and compress everyday files? See the modern local-first alternative.",
    url: "https://www.slickkit.dev/vs/adobe-acrobat",
  },
};

export default function VersusAdobeAcrobatPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Reveal className="mb-6">
            <Link
              href="/vs"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all comparisons</span>
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>Everyday Utility vs. Legacy Suite</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.1] mb-6">
              SlickKit vs. Adobe Acrobat:{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Lightweight Instant Web Utilities
              </span>{" "}
              vs. Heavy Desktop Subscriptions.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Adobe Acrobat Pro is the legacy industry titan. But for 95% of daily document tasks — merging invoices, shrinking file sizes for email, rotating scanned receipts, and reordering pages — Acrobat is expensive, slow to launch, and encumbered with multi-gigabyte background processes.
            </p>
          </Reveal>

          {/* Side-by-Side Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Acrobat Box */}
            <Reveal delayMs={40}>
              <div className="double-bezel-shell h-full">
                <div className="double-bezel-core p-6 sm:p-7 bg-white dark:bg-[#12151A] border-t-4 border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                      <Laptop className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                        Adobe Acrobat Pro
                      </h2>
                      <span className="text-xs font-mono text-slate-400">
                        Heavy Commercial Desktop
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Expensive Subscription:</strong> Charges \$19.99–\$29.99/mo (\$240–\$360/year) per user.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Multi-Gigabyte Bloat:</strong> Requires massive local installs, helper daemons, and background updaters.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Complex Menus:</strong> Hundreds of prepress, form-authoring, and print production settings for simple tasks.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Specialized Strengths:</strong> Best for commercial CMYK prepress, certified cryptographic signatures, and Acrobat Forms.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* SlickKit Box */}
            <Reveal delayMs={80}>
              <div className="double-bezel-shell h-full">
                <div className="double-bezel-core p-6 sm:p-7 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151A] dark:via-[#12151A] dark:to-emerald-950/25 border-t-4 border-emerald-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                      <Zap className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                        SlickKit PDF
                      </h2>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        Instant Modern Web Utility
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>100% Free Forever:</strong> Zero subscriptions, zero license keys, and zero seat billing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>0 MB Installation:</strong> Opens instantly in Chrome, Safari, Edge, or Firefox in under a second.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Focused &amp; Fast:</strong> Drag, drop, merge, or compress with a minimal 3-click workflow.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Runs on Any Machine:</strong> Works seamlessly on Windows, macOS, Linux, Chromebooks, and tablets.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* When to use which */}
          <Reveal className="mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-5">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  When Should You Still Use Adobe Acrobat?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  We believe in technical honesty. Adobe Acrobat remains the gold standard for high-end graphic design agencies that need CMYK prepress color separations, specialized PDF/X-1a archival compliance, and hardware-token cryptographic certificate signatures.
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  However, for the remaining 95% of everyday office, freelance, student, and business workflows — combining 3 statements into one file, reducing a 25MB presentation down to 4MB for email, or extracting pages 4 to 8 — paying Adobe \$240/year is completely unnecessary. SlickKit completes those jobs in seconds for free with zero cloud uploads.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Action Card */}
          <Reveal className="text-center">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-white dark:bg-[#12151A] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1">
                    Lightweight Everyday PDF Suite
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    No license keys or installers. Instant local in-browser compute.
                  </p>
                </div>
                <Link
                  href="/pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-6 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
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
