import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import { BreadcrumbJsonLd } from "../../../components/BreadcrumbJsonLd";
import {
  DollarSign,
  ShieldCheck,
  Check,
  X,
  ArrowUpRight,
  ArrowLeft,
  Lock,
  FileSpreadsheet,
  AlertTriangle,
  Building2,
  Receipt,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SlickKit for Finance & Accounting | Tax, Payroll & Audit PDF Security",
  description:
    "Zero-cloud PDF tools for CPAs, tax professionals, and corporate finance. Process sensitive bank statements, W-2s, and audit reports with zero cloud uploads and full GLBA compliance.",
  keywords: [
    "cpa pdf tool",
    "private bank statement merger",
    "confidential tax document compressor",
    "accounting pdf editor zero upload",
    "glba compliant pdf tools",
    "irs publication 4557 pdf tools",
    "secure financial document merger",
  ],
  alternates: {
    canonical: "https://www.slickkit.dev/for/finance",
  },
  openGraph: {
    title: "SlickKit for Finance & Accounting: Zero-Cloud Document Security",
    description:
      "Never upload client bank statements or tax returns to cloud converters. Edit financial files directly in local RAM.",
    url: "https://www.slickkit.dev/for/finance",
    siteName: "SlickKit",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SlickKit for CPAs, Tax Preparers & Finance Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickKit for Finance & Accounting",
    description:
      "Client-side PDF utilities for tax professionals, CPAs, and accounting practices.",
    images: ["/og-image.png"],
  },
};

const FINANCE_PILLARS = [
  {
    title: "IRS Publication 4557 & Safeguards Rule",
    desc: "Tax preparers are legally required under the Gramm-Leach-Bliley Act (GLBA) and FTC Safeguards Rule to secure taxpayer data. Transmitting tax returns with Social Security Numbers to consumer cloud websites creates severe regulatory liability.",
    icon: Receipt,
  },
  {
    title: "Confidential Bank & Brokerage Statements",
    desc: "Merging monthly client bank statements or brokerage reports should never route through unvetted cloud processing servers. SlickKit operates inside local browser RAM with zero internet activity.",
    icon: Building2,
  },
  {
    title: "No Account Creation or Client Identification",
    desc: "Cloud converters demand email registrations and track user upload histories. SlickKit has no user accounts, no login forms, and no database tracking client financial activity.",
    icon: Lock,
  },
  {
    title: "Unlimited File Processing During Tax Season",
    desc: "Never get blocked by daily task paywalls when closing month-end audits or filing tax deadlines. SlickKit provides unlimited merges, splits, and compressions with zero subscriptions.",
    icon: FileSpreadsheet,
  },
];

export default function FinanceLandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/for/finance" },
          { name: "Finance & Accounting", item: "/for/finance" },
        ]}
      />
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 mb-4">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>For CPAs, Tax Preparers &amp; Financial Teams</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.08] mb-6">
              Protect taxpayer data.{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Never upload client financials to cloud servers.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Tax returns, profit and loss statements, payroll registers, and bank statements contain the most sensitive identity and financial information in existence. SlickKit guarantees that client financial files never leave your computer.
            </p>
          </Reveal>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {FINANCE_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delayMs={idx * 40}>
                  <div className="double-bezel-shell h-full">
                    <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] h-full flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <span className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </span>
                        <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                          {item.title}
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Action CTA */}
          <Reveal>
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151a] dark:via-[#12151a] dark:to-emerald-950/20 text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  Audit-Ready Document Editing in 0 Seconds
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Process unlimited bank statements, receipts, and audits without risking regulatory penalties or subscriptions.
                </p>
                <div className="pt-2">
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Launch SlickKit PDF (Financial Grade)</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
