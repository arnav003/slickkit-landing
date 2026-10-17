import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";
import {
  ShieldAlert,
  ShieldCheck,
  Check,
  X,
  ArrowUpRight,
  ArrowLeft,
  AlertTriangle,
  Server,
  Lock,
  DollarSign,
  FileText,
  Clock,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Is Smallpdf Safe? Privacy, Cloud Storage & Paywall Audit (2025/2026)",
  description:
    "An objective security and privacy evaluation of Smallpdf. Understand how Smallpdf handles your confidential files, server retention policies, paywalls, and corporate confidentiality risks.",
  keywords: [
    "is smallpdf safe",
    "is smallpdf safe for confidential files",
    "smallpdf privacy policy",
    "smallpdf server retention",
    "can smallpdf see my files",
    "smallpdf free alternative",
    "client-side pdf editor",
  ],
  alternates: {
    canonical: "https://www.slickkit.dev/is-smallpdf-safe",
  },
  openGraph: {
    title: "Is Smallpdf Safe? Privacy & Cloud Storage Audit",
    description:
      "Is Smallpdf safe for sensitive financial and corporate documents? A technical audit of their cloud storage, privacy model, and paywall restrictions.",
    url: "https://www.slickkit.dev/is-smallpdf-safe",
    siteName: "SlickKit",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Is Smallpdf Safe? Technical Breakdown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Smallpdf Safe for Confidential Documents?",
    description:
      "A technical look at Smallpdf's cloud file handling, retention windows, and privacy liabilities.",
    images: ["/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "Does Smallpdf store my files permanently?",
    a: "Smallpdf states that uploaded documents are automatically deleted from their cloud processing servers after 1 hour, unless saved into a registered user's Smallpdf Pro cloud workspace.",
  },
  {
    q: "Is Smallpdf safe for legal documents and business contracts?",
    a: "For general non-sensitive files, Smallpdf employs TLS encryption in transit and AES-256 at rest. However, because your file resides on third-party cloud infrastructure during the 1-hour retention window, uploading client-privileged or NDA-bound contracts creates third-party custody liabilities.",
  },
  {
    q: "Why does Smallpdf restrict free users to 1 or 2 tasks per day?",
    a: "Smallpdf operates on a traditional client-to-server architecture where every PDF conversion consumes expensive cloud server compute and bandwidth. Smallpdf uses aggressive task paywalls to force users into monthly or annual subscriptions ($108+/year).",
  },
  {
    q: "How does SlickKit differ from Smallpdf?",
    a: "SlickKit runs entirely inside your browser's RAM via WebAssembly. There are no cloud servers, no bandwidth costs, no paywalls, no task limits, and zero file retention. Your files never leave your device.",
  },
];

export default function IsSmallpdfSafePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Security Audits", item: "/vs" },
          { name: "Is Smallpdf Safe?", item: "/is-smallpdf-safe" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Reveal className="mb-6">
            <Link
              href="/vs"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all comparisons &amp; security audits</span>
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Security &amp; Paywall Evaluation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.1] mb-6">
              Is Smallpdf Safe?{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Data Privacy, File Retention &amp; Paywalls
              </span>{" "}
              Audited.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Smallpdf is a Swiss-founded document software company with ISO 27001 certification. While technically legitimate, its cloud-based processing model introduces critical compliance hurdles for enterprise, legal, and financial files.
            </p>
          </Reveal>

          {/* Executive Verdict Callout */}
          <Reveal className="mb-14">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] border-l-4 border-l-amber-500">
                <h2 className="text-xs font-mono uppercase tracking-[0.16em] text-amber-700 dark:text-amber-400 mb-2">
                  Executive Verdict
                </h2>
                <div className="text-xl font-bold text-slate-950 dark:text-white mb-3">
                  Legitimate security certifications, but fundamentally reliant on cloud file uploads.
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Smallpdf uses industry-standard TLS and ISO 27001 data centers. However, documents are uploaded to third-party cloud infrastructure where they remain for 1 hour. Furthermore, aggressive 2-task daily limits push users to create accounts and hand over corporate email credentials.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 3 Core Points of Friction */}
          <div className="space-y-6 mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              The 3 Vulnerabilities of Smallpdf’s Model
            </h2>

            {/* Point 1 */}
            <Reveal>
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-6 sm:p-8 bg-white dark:bg-[#12151A] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <Server className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      1. Cloud Storage Retention Window
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    Even though Smallpdf states files are deleted after 1 hour, that hour represents active exposure. During processing, your document lives unencrypted in server memory and temporary S3 buckets. If you handle client contracts under an NDA, this constitutes an unauthorized third-party custody transfer.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Point 2 */}
            <Reveal delayMs={30}>
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-6 sm:p-8 bg-white dark:bg-[#12151A] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <DollarSign className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      2. Daily Paywalls &amp; Forced Account Signups
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    Smallpdf limits free users to 1 or 2 tasks per day before triggering an aggressive paywall demanding credit cards or email registrations. This tracking creates a persistent profile linking your identity, IP address, and document operations.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Point 3 */}
            <Reveal delayMs={60}>
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-6 sm:p-8 bg-white dark:bg-[#12151A] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      3. Subprocessor Chains Under GDPR
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    Smallpdf relies on extensive subprocessor networks (AWS, Google Cloud, analytics vendors, payment gateways). Every added subprocessor increases your enterprise risk surface when processing personal or proprietary data.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* The On-Device Alternative: SlickKit */}
          <Reveal className="mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151a] dark:via-[#12151a] dark:to-emerald-950/20">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400 mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The Private On-Device Standard</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-4">
                  SlickKit: Unlimited Everyday Tools With Zero Cloud Uploads
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  SlickKit eliminates the entire cloud backend. By processing PDFs inside client-side WebAssembly, there are zero server costs to recoup. That means <strong>unlimited free tasks, no email signups, no subscriptions, and zero bytes leaving your computer</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">TASK LIMITS</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      100% Unlimited
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">NETWORK TRANSFERS</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      0 Bytes
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">SUBSCRIPTION</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      $0 / Forever
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Launch SlickKit PDF (No Limits)</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  </Link>

                  <Link
                    href="/vs/smallpdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span>View full architectural comparison</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white mb-6">
              Frequently Asked Questions About Smallpdf Safety
            </h2>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="double-bezel-shell">
                  <div className="double-bezel-core p-6 bg-white dark:bg-[#12151A]">
                    <h3 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
