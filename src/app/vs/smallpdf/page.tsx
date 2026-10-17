import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import {
  CreditCard,
  Check,
  X,
  ArrowUpRight,
  ArrowLeft,
  Infinity as InfinityIcon,
  UserX,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SlickKit vs. Smallpdf | Free In-Browser Utility vs. Daily Paywalls",
  description:
    "Compare SlickKit with Smallpdf. Learn how SlickKit eliminates daily task limits, registration gates, and monthly subscription paywalls with instant on-device processing.",
  alternates: {
    canonical: "https://www.slickkit.dev/vs/smallpdf",
  },
  openGraph: {
    title: "SlickKit vs. Smallpdf: Unlimited Local Tools vs. Paywalls",
    description:
      "Tired of Smallpdf's 2-task daily limits and subscription popups? Discover SlickKit's 100% free, private browser utilities.",
    url: "https://www.slickkit.dev/vs/smallpdf",
  },
};

import { BreadcrumbJsonLd } from "../../../components/BreadcrumbJsonLd";

export default function VersusSmallpdfPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Comparisons", item: "/vs" },
          { name: "SlickKit vs. Smallpdf", item: "/vs/smallpdf" },
        ]}
      />
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
              <span>Pricing &amp; Friction Comparison</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.1] mb-6">
              SlickKit vs. Smallpdf:{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Unlimited Everyday Tools
              </span>{" "}
              without Subscription Traps.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Smallpdf began as a simple utility, but over the years has transformed into an aggressive subscription funnel. Free users are capped at 1–2 documents per day before being blocked by mandatory checkout pages and email signups. SlickKit takes a radically different approach: zero subscriptions, zero account signups, and unlimited local processing.
            </p>
          </Reveal>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Smallpdf Box */}
            <Reveal delayMs={40}>
              <div className="double-bezel-shell h-full">
                <div className="double-bezel-core p-6 sm:p-7 bg-white dark:bg-[#12151A] border-t-4 border-rose-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                      <CreditCard className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                        Smallpdf Freemium
                      </h2>
                      <span className="text-xs font-mono text-slate-400">
                        The Subscription Funnel
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Strict Daily Limits:</strong> Typically blocks users after 1 or 2 file operations per day.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Recurring Subscription:</strong> Pro plans charge $108–$144/year for basic PDF utilities.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Mandatory Tracking &amp; Cookies:</strong> Uses tracking scripts to monitor device usage and enforce paywalls.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Cloud Upload Overhead:</strong> Files are sent to remote servers, incurring upload wait times.
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
                      <InfinityIcon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                        SlickKit Studio
                      </h2>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        Unlimited On-Device Freedom
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Unlimited Everyday Tasks:</strong> Process 1 file or 100 files in a row — there are zero artificial limits.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Zero Subscriptions Forever:</strong> No monthly invoices, no renewal reminders, and no credit cards needed.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Zero Account Sign-ups:</strong> Never asks for your work email, name, or password.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>True Privacy:</strong> 100% client-side memory execution with zero cloud storage.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Frictionless Philosophy */}
          <Reveal className="mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-5">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Why Should Merging a PDF Cost \$12 Every Month?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Most people need PDF tools once or twice a week: combining an expense report, rotating a scanned lease, or compressing a tax declaration for an email attachment. Paying \$144/year for basic file operations is an outdated SaaS extraction tactic.
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Because SlickKit executes on your device&apos;s own silicon rather than relying on million-dollar GPU/CPU server farms, we don&apos;t have astronomical cloud hosting bills to pass onto you. The compute power already belongs to you.
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
                    Process PDFs Without Limits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    No accounts. No monthly subscriptions. Instant local results.
                  </p>
                </div>
                <Link
                  href="/pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-6 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
                >
                  <span>Use SlickKit PDF Free</span>
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
