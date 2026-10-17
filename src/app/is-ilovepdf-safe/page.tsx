import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { BreadcrumbJsonLd } from "../../components/BreadcrumbJsonLd";
import { HowToJsonLd } from "../../components/HowToJsonLd";
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
  Eye,
  FileText,
  Clock,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Is iLovePDF Safe? Security & Privacy Analysis for Confidential Documents",
  description:
    "An objective technical analysis of iLovePDF safety for confidential documents, bank statements, and legal contracts. Learn how cloud server retention, data transfers, and GDPR liabilities compare to local processing.",
  keywords: [
    "is ilovepdf safe",
    "is ilovepdf safe for bank statements",
    "can ilovepdf see my files",
    "ilovepdf privacy risks",
    "ilovepdf gdpr compliance",
    "safe alternative to ilovepdf",
    "private pdf editor",
  ],
  alternates: {
    canonical: "https://www.slickkit.dev/is-ilovepdf-safe",
  },
  openGraph: {
    title: "Is iLovePDF Safe? Privacy Risks & Server Retention Analysis",
    description:
      "Is it safe to upload bank statements, tax returns, and client agreements to iLovePDF? Here is what happens to your files on their servers.",
    url: "https://www.slickkit.dev/is-ilovepdf-safe",
    siteName: "SlickKit",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Is iLovePDF Safe? Technical Privacy Breakdown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is iLovePDF Safe for Confidential Documents?",
    description:
      "Discover the hidden privacy risks of uploading confidential documents to cloud PDF converters and how on-device tools solve it.",
    images: ["/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "Can iLovePDF employees see or read my files?",
    a: "Under iLovePDF's privacy policy, processing is automated. However, because files are transmitted across the internet and stored unencrypted on remote cloud servers for up to 2 hours, they are technically accessible to system administrators, subject to cloud provider subpoenas, and vulnerable to cloud misconfiguration.",
  },
  {
    q: "Is iLovePDF safe for bank statements and tax filings?",
    a: "Security professionals strongly advise against uploading bank statements, W-2s, or tax returns to cloud PDF converters. Transmitting financial records exposes account numbers, social security numbers, and salary data across third-party networks and temporary server storage.",
  },
  {
    q: "How long does iLovePDF keep uploaded files?",
    a: "According to iLovePDF's terms, uploaded files are stored in temporary cloud storage (such as Amazon S3) for approximately 1 to 2 hours before automated deletion scripts execute.",
  },
  {
    q: "Does uploading to iLovePDF violate GDPR Article 28?",
    a: "Yes, if you are handling personal data of EU citizens without an executed Data Processing Agreement (DPA) and standard contractual clauses with iLovePDF, uploading client records constitutes an unauthorized third-party transfer under GDPR.",
  },
];

export default function IsILovePdfSafePage() {
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
          { name: "Is iLovePDF Safe?", item: "/is-ilovepdf-safe" },
        ]}
      />
      <HowToJsonLd
        name="How to Verify if a PDF Converter Uploads Your Files to a Cloud Server"
        description="Verify whether any web-based PDF tool transmits your documents over the internet using browser DevTools."
        totalTime="PT1M"
        toolName="Browser Network DevTools"
        steps={[
          {
            name: "Open Network Inspector",
            text: "Press F12 in Chrome or Firefox and select the Network tab.",
            url: "/is-ilovepdf-safe",
          },
          {
            name: "Filter Fetch/XHR",
            text: "Click 'Fetch/XHR' and check 'Preserve log' to record all outgoing payloads.",
            url: "/is-ilovepdf-safe",
          },
          {
            name: "Perform PDF Operation",
            text: "Upload and convert a document. Observe whether multi-megabyte POST requests upload your file data.",
            url: "/is-ilovepdf-safe",
          },
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
              <span>Security &amp; Privacy Investigation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.1] mb-6">
              Is iLovePDF Safe?{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                A Security &amp; Privacy Analysis
              </span>{" "}
              for Confidential Documents.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              iLovePDF is one of the most visited utility sites on the web. But if you are handling confidential client contracts, payroll spreadsheets, medical records, or personal tax filings, here is what actually happens to your data when you click upload.
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
                  Safe for public flyers. High risk for contracts, tax returns, and client records.
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  iLovePDF is a legitimate European business with automated deletion scripts. However, its architecture requires <strong>transmitting your complete unencrypted file to cloud servers</strong> where it resides for 1 to 2 hours. This violates strict corporate NDAs, attorney-client privilege, and GDPR Article 28 data processor rules.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 4 Critical Risk Vectors */}
          <div className="space-y-6 mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              The 4 Hidden Risks of Cloud PDF Uploaders
            </h2>

            {/* Risk 1 */}
            <Reveal>
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-6 sm:p-8 bg-white dark:bg-[#12151A] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <Server className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      1. The 1–2 Hour Server Retention Window
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    When you merge or compress on iLovePDF, your document does not disappear instantly. It is queued in temporary storage buckets on Amazon S3 or European cloud providers for 60 to 120 minutes. During that retention window, your file exists at rest on servers you do not own and cannot audit.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Risk 2 */}
            <Reveal delayMs={30}>
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-6 sm:p-8 bg-white dark:bg-[#12151A] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      2. NDA &amp; Attorney-Client Privilege Breaches
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    Most corporate Non-Disclosure Agreements (NDAs) explicitly prohibit sending proprietary data to third parties without prior authorization. Transmitting client files or draft litigation briefs to consumer web converters is an unauthorized transfer that can void legal privilege.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Risk 3 */}
            <Reveal delayMs={60}>
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-6 sm:p-8 bg-white dark:bg-[#12151A] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      3. Regulatory Penalties (GDPR Article 28 &amp; HIPAA)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    Under GDPR Article 28, you cannot transfer EU personal data to a data processor without an executed Data Processing Agreement (DPA). In the United States, transmitting Protected Health Information (PHI) without a signed Business Associate Agreement (BAA) triggers immediate HIPAA violations.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Risk 4 */}
            <Reveal delayMs={90}>
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-6 sm:p-8 bg-white dark:bg-[#12151A] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                      <Eye className="w-4 h-4" />
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      4. Advertising &amp; Third-Party Tracker Beacons
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-12">
                    Free cloud converter platforms monetize high server costs by injecting ad networks (Google AdSense, programmatic exchanges) and behavioral trackers. These third-party script tags load on the same web page where you upload documents.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* The Mathematical Solution: SlickKit */}
          <Reveal className="mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-gradient-to-br from-white via-white to-emerald-50/70 dark:from-[#12151a] dark:via-[#12151a] dark:to-emerald-950/20">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400 mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The Architectural Alternative</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-4">
                  How SlickKit Solves the Problem: Zero Server Uploads
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  SlickKit was built on a simple premise: <strong>don't trust servers with your files—eliminate the server completely</strong>. By compiling PDF manipulation libraries to WebAssembly, every operation executes directly inside your browser's local RAM.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">NETWORK ACTIVITY</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      0 Bytes Uploaded
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-1">FILE RETENTION</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      0 Seconds (RAM Only)
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Try SlickKit PDF Free (Zero Uploads)</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  </Link>

                  <Link
                    href="/compliance/local-processing-security"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span>Learn how to verify in DevTools</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white mb-6">
              Frequently Asked Questions About iLovePDF Safety
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
