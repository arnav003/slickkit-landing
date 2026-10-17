import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Security Hub | SlickKit Zero-Data Architecture",
  description:
    "Explore how SlickKit's zero-cloud-upload architecture mathematically guarantees compliance with GDPR, NDAs, HIPAA guidelines, and corporate document custody rules.",
  alternates: {
    canonical: "https://www.slickkit.dev/compliance",
  },
  openGraph: {
    title: "SlickKit Security & Regulatory Compliance Hub",
    description:
      "Why IT security officers, lawyers, and healthcare professionals trust SlickKit for client-side document processing.",
    url: "https://www.slickkit.dev/compliance",
  },
};

const COMPLIANCE_DOCS = [
  {
    slug: "gdpr-confidentiality",
    title: "GDPR, NDAs & Document Confidentiality",
    badge: "Regulatory Compliance",
    description:
      "A comprehensive legal and security review of why uploading confidential client contracts or employee records to third-party PDF converters violates GDPR Article 28 and common confidentiality warranties — and how on-device processing solves it.",
    icon: FileCheck2,
    href: "/compliance/gdpr-confidentiality",
  },
  {
    slug: "local-processing-security",
    title: "Technical Security Architecture & Audit Guide",
    badge: "Technical Verification",
    description:
      "A hands-on technical walkthrough for CISOs, security engineers, and privacy researchers. Learn how WebAssembly and Web Workers isolate memory, and how to verify zero network transmission using browser DevTools.",
    icon: Terminal,
    href: "/compliance/local-processing-security",
  },
];

export default function ComplianceHubPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>Trust &amp; Compliance Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.08] mb-6">
              Security by Architecture,{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Not by Policy Promise.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Most SaaS companies ask you to trust their written privacy policies while transmitting your confidential files to their servers. SlickKit provides mathematical security: your documents never leave your computer.
            </p>
          </Reveal>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {COMPLIANCE_DOCS.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <Reveal key={doc.slug} delayMs={idx * 60}>
                  <div className="double-bezel-shell h-full">
                    <div className="double-bezel-core p-7 flex flex-col justify-between h-full bg-white dark:bg-[#12151A]">
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                            <Icon className="w-5 h-5" strokeWidth={1.75} />
                          </div>
                          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {doc.badge}
                          </span>
                        </div>

                        <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white mb-3">
                          {doc.title}
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                          {doc.description}
                        </p>
                      </div>

                      <Link
                        href={doc.href}
                        className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 dark:border-slate-800 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors group"
                      >
                        <span>Read Compliance Whitepaper</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Quick Summary Strip */}
          <Reveal className="mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Compliance at a Glance
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>GDPR &amp; CCPA</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Zero third-party data processing means no DPA requirements, no cross-border data transfer violations, and no breach notification obligations.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confidential NDAs</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Documents stay in the user&apos;s sole physical custody. Uploading to public or multi-tenant clouds is completely eliminated.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>HIPAA / Financial PII</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Protected Health Information (PHI) and banking credentials never leave local device volatile memory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bottom CTA */}
          <Reveal className="text-center">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-white dark:bg-[#12151A] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1">
                    Audit Our Architecture Live
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Open your browser console and verify zero server requests.
                  </p>
                </div>
                <Link
                  href="/pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-6 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
                >
                  <span>Launch Tool &amp; Verify</span>
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
