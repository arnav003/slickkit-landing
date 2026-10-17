import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import { BreadcrumbJsonLd } from "../../../components/BreadcrumbJsonLd";
import {
  Scale,
  ShieldCheck,
  Check,
  X,
  ArrowUpRight,
  ArrowLeft,
  Lock,
  FileCheck2,
  AlertTriangle,
  Briefcase,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SlickKit for Legal & Law Firms | Client Privilege & NDA-Safe PDF Suite",
  description:
    "Private, on-device PDF utilities designed for law firms, general counsel, and litigators. Protect attorney-client privilege, comply with ABA Model Rule 1.6, and merge legal filings with zero cloud uploads.",
  keywords: [
    "legal pdf tool",
    "attorney client privilege pdf",
    "confidential pdf merger for lawyers",
    "private contract editor",
    "aba model rule 1.6 compliance pdf",
    "law firm pdf tools zero upload",
    "hipaa and nda compliant pdf",
  ],
  alternates: {
    canonical: "https://www.slickkit.dev/for/legal",
  },
  openGraph: {
    title: "SlickKit for Legal & Law Firms: Zero-Upload PDF Suite",
    description:
      "Why litigators and in-house counsel avoid cloud PDF converters. Protect work product privilege and client confidentiality with on-device WebAssembly tooling.",
    url: "https://www.slickkit.dev/for/legal",
    siteName: "SlickKit",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SlickKit for Law Firms & Legal Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickKit for Legal & Law Firms",
    description:
      "Protect attorney-client privilege with 100% local, zero-upload PDF tools.",
    images: ["/og-image.png"],
  },
};

const LEGAL_GUARANTEES = [
  {
    title: "Preserves Attorney-Client Privilege",
    desc: "Under standard evidentiary doctrine, transmitting privileged client communications to unvetted third-party consumer web converters can be argued as an inadvertent waiver of confidentiality. SlickKit processes files in local RAM, ensuring no third party ever gains custody.",
    icon: Scale,
  },
  {
    title: "Strict Compliance with ABA Model Rule 1.6",
    desc: "The American Bar Association mandates that lawyers make reasonable efforts to prevent the inadvertent or unauthorized disclosure of client information. By eliminating internet transmission, SlickKit satisfies ethical duty of technological competence.",
    icon: ShieldCheck,
  },
  {
    title: "Zero NDA Breach Liability",
    desc: "Bilateral non-disclosure agreements strictly forbid sharing deal terms, intellectual property, or draft filings with unauthorized third parties. SlickKit keeps 100% of bytes on the lawyer's physical workstation.",
    icon: Lock,
  },
  {
    title: "Instant Evidentiary RAM Flush",
    desc: "Closing the browser tab completely destroys the temporary WebAssembly memory buffer. No residual files, server logs, or cloud bucket caches remain anywhere.",
    icon: FileCheck2,
  },
];

export default function LegalLandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/for/legal" },
          { name: "Legal & Law Firms", item: "/for/legal" },
        ]}
      />
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 mb-4">
              <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>For Litigators, Law Firms &amp; Corporate Counsel</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.08] mb-6">
              Protect attorney-client privilege.{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Never upload court filings to cloud converters.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When preparing court exhibits, client affidavits, merger agreements, or discovery documents, uploading files to consumer PDF websites breaches confidentiality obligations. SlickKit gives legal professionals instant, client-side tools that run 100% locally.
            </p>
          </Reveal>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {LEGAL_GUARANTEES.map((item, idx) => {
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

          {/* Comparison Matrix Callout */}
          <Reveal className="mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-white dark:bg-[#12151A]">
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">
                  Legal Risk Breakdown: Cloud Converters vs. SlickKit
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-mono uppercase text-slate-400">
                        <th className="pb-3 font-semibold">Legal Requirement</th>
                        <th className="pb-3 font-semibold">Consumer Cloud Converters</th>
                        <th className="pb-3 font-semibold text-emerald-600 dark:text-emerald-400">
                          SlickKit Legal Suite
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                      <tr>
                        <td className="py-3.5 font-medium text-slate-900 dark:text-slate-100">
                          Data Custody
                        </td>
                        <td className="py-3.5 text-rose-600 dark:text-rose-400">
                          Transferred to third-party cloud
                        </td>
                        <td className="py-3.5 font-semibold text-emerald-600 dark:text-emerald-400">
                          Retained 100% on attorney computer
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 font-medium text-slate-900 dark:text-slate-100">
                          Subpoena &amp; Warrant Exposure
                        </td>
                        <td className="py-3.5 text-rose-600 dark:text-rose-400">
                          Stored on servers subject to cloud warrants
                        </td>
                        <td className="py-3.5 font-semibold text-emerald-600 dark:text-emerald-400">
                          Zero cloud footprint (impossible to subpoena)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 font-medium text-slate-900 dark:text-slate-100">
                          Inadvertent Privilege Waiver Risk
                        </td>
                        <td className="py-3.5 text-rose-600 dark:text-rose-400">
                          Severe risk under evidentiary rules
                        </td>
                        <td className="py-3.5 font-semibold text-emerald-600 dark:text-emerald-400">
                          Zero risk (no third-party disclosure)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 font-medium text-slate-900 dark:text-slate-100">
                          Software Installation &amp; IT Privileges
                        </td>
                        <td className="py-3.5 text-slate-600 dark:text-slate-400">
                          Varies (web-based cloud upload)
                        </td>
                        <td className="py-3.5 font-semibold text-emerald-600 dark:text-emerald-400">
                          Zero install (works instantly in any browser)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Action CTA */}
          <Reveal>
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151a] dark:via-[#12151a] dark:to-emerald-950/20 text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  Start Working With Zero Cloud Risk Today
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Join law firms and corporate legal teams who refuse to gamble with client privilege. No subscriptions, no software downloads, and no cloud uploads.
                </p>
                <div className="pt-2">
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Open SlickKit PDF (Privileged &amp; Private)</span>
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
