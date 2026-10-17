import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import {
  FileCheck2,
  ShieldCheck,
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GDPR, NDAs & Document Confidentiality Guide | SlickKit Compliance",
  description:
    "Why uploading client contracts, employee records, or bank statements to cloud PDF converters triggers GDPR Article 28 data processor violations and breaches non-disclosure agreements.",
  alternates: {
    canonical: "https://www.slickkit.dev/compliance/gdpr-confidentiality",
  },
  openGraph: {
    title: "GDPR, NDAs & Document Confidentiality Guide",
    description:
      "A legal and security analysis of cloud PDF converters versus SlickKit's zero-upload in-memory processing.",
    url: "https://www.slickkit.dev/compliance/gdpr-confidentiality",
  },
};

export default function GdprConfidentialityPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Reveal className="mb-6">
            <Link
              href="/compliance"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Compliance Hub</span>
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>Regulatory Whitepaper</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.1] mb-6">
              GDPR, Corporate NDAs &amp; The Legal Risk of{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Cloud PDF Uploaders.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every day, millions of well-intentioned employees upload sensitive client agreements, employee wage reports, tax filings, and legal discovery documents to free online PDF converters. Here is why that practice creates immediate legal liability under GDPR Article 28 and corporate confidentiality warranties.
            </p>
          </Reveal>

          {/* The Legal Problem */}
          <Reveal className="space-y-6 mb-12">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-5">
                <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    1. The GDPR Article 28 Trap: Unauthorized Sub-Processors
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Under the General Data Protection Regulation (GDPR), if a European company or any company handling EU resident data transfers Personally Identifiable Information (PII) to an external service provider, that provider legally acts as a <strong>Data Processor</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  GDPR Article 28 strictly mandates that a legally binding <strong>Data Processing Agreement (DPA)</strong> must be executed before transferring any personal data. Free online PDF converter tools do not provide signed DPAs to free users. Transmitting an invoice with a client&apos;s name and home address to a free converter constitutes an unlawful transfer of personal data under GDPR, punishable by substantial regulatory fines.
                </p>
              </div>
            </div>
          </Reveal>

          {/* The NDA Problem */}
          <Reveal className="space-y-6 mb-12">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-5">
                <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
                  <Lock className="w-5 h-5 shrink-0" />
                  <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    2. Breach of Non-Disclosure Agreements (NDAs)
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Almost every standard enterprise NDA contains a covenant stating that confidential information may only be disclosed to employees with a &quot;strict need-to-know&quot; and must be protected using &quot;reasonable security measures.&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Uploading an unreleased acquisition contract, a financial statement, or proprietary source code to a public website where it is processed on shared multi-tenant cloud servers completely violates the chain of custody. If a data leak occurs on that cloud provider&apos;s infrastructure, your company is held directly liable for breach of contract.
                </p>
              </div>
            </div>
          </Reveal>

          {/* The Mathematical Solution */}
          <Reveal className="space-y-6 mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151A] dark:via-[#12151A] dark:to-emerald-950/25 space-y-5">
                <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    3. How SlickKit Solves Compliance Mathematically
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  SlickKit avoids the entire regulatory nightmare through one core design decision: <strong>no data ever leaves your computer</strong>.
                </p>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>No Data Processor Relationship:</strong> Because SlickKit does not receive, ingest, or host your documents, SlickKit is never a Data Processor under GDPR. No DPA is required.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Preserved Chain of Custody:</strong> Your documents remain inside your organization&apos;s physical endpoints and security perimeter at all times.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Air-Gapped Friendly:</strong> SlickKit works 100% offline. Sensitive documents can be manipulated without even being connected to an internet gateway.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Bottom Action Card */}
          <Reveal className="text-center">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-white dark:bg-[#12151A] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1">
                    Safe Document Processing for Your Team
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Compliant with NDAs, GDPR, and enterprise endpoint security.
                  </p>
                </div>
                <Link
                  href="/pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-6 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
                >
                  <span>Open SlickKit PDF</span>
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
