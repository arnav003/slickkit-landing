import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import {
  ShieldAlert,
  ShieldCheck,
  Check,
  X,
  ArrowUpRight,
  ArrowLeft,
  Server,
  Cpu,
  Wifi,
  Clock,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SlickKit vs. iLovePDF | In-Browser Local Processing vs. Cloud Uploads",
  description:
    "An in-depth technical comparison between SlickKit and iLovePDF. Discover why client-side WebAssembly processing prevents data leakage, eliminates latency, and protects confidential contracts.",
  alternates: {
    canonical: "https://www.slickkit.dev/vs/ilovepdf",
  },
  openGraph: {
    title: "SlickKit vs. iLovePDF: In-Browser vs. Cloud Uploads",
    description:
      "Why uploading confidential documents to iLovePDF poses security risks, and how SlickKit processes PDFs entirely in local RAM.",
    url: "https://www.slickkit.dev/vs/ilovepdf",
  },
};

export default function VersusILovePdfPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Navigation */}
          <Reveal className="mb-6">
            <Link
              href="/vs"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all comparisons</span>
            </Link>
          </Reveal>

          {/* Page Hero */}
          <Reveal className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>Architecture Deep Dive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.1] mb-6">
              SlickKit vs. iLovePDF:{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Local In-Memory Compute
              </span>{" "}
              vs. Cloud Server Uploads.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              iLovePDF is one of the most popular PDF tools on the internet. However, its core architectural model relies on transmitting your private files to third-party servers. For anyone working with non-disclosure agreements, financial records, medical histories, or proprietary intellectual property, that data flow introduces unavoidable security and legal liabilities.
            </p>
          </Reveal>

          {/* Direct Architecture Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* iLovePDF Box */}
            <Reveal delayMs={40}>
              <div className="double-bezel-shell h-full">
                <div className="double-bezel-core p-6 sm:p-7 bg-white dark:bg-[#12151A] border-t-4 border-amber-500/80">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <Server className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                        iLovePDF Architecture
                      </h2>
                      <span className="text-xs font-mono text-slate-400">
                        Remote Cloud Infrastructure
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>File Transits the Web:</strong> Full document bytes are uploaded across the public internet to remote cloud clusters.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Server-Side Storage Retention:</strong> Documents reside on third-party servers for 1 to 2 hours before scheduled deletion.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Upload Bandwidth Latency:</strong> Uploading large 50MB+ scans is bottlenecked by your local internet upload speed.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Corporate Policy Violations:</strong> Most legal, financial, and healthcare institutions forbid using cloud PDF uploaders.
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
                      <Cpu className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                        SlickKit Architecture
                      </h2>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        100% In-Browser Memory (RAM)
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Zero Cloud Uploads:</strong> Processing executes in WebAssembly &amp; Web Workers inside your device sandbox.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Zero Remote Retention:</strong> No servers, no temporary buckets, and zero persistent file caches on third-party hardware.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Instant Local Processing:</strong> File I/O runs at PCIe memory speed (gigabytes per second) without waiting for uploads.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Strict NDA &amp; GDPR Compliance:</strong> No Data Processing Agreement (DPA) required because no third-party data processing takes place.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Deep Narrative Section */}
          <Reveal className="space-y-8 mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  The Hidden Risk of Server-Side Document Queues
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  When you press &quot;Compress&quot; or &quot;Merge&quot; on cloud converters like iLovePDF, your document leaves your machine over an HTTPS connection and lands in a cloud processing queue (usually hosted on AWS, Cloudflare, or European data centers).
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  While reputable services state that files are automatically deleted after an hour or two, that window still leaves documents vulnerable to misconfigured cloud buckets, server-level vulnerabilities, insider access, and sub-processor interception. If a document contains trade secrets, unreleased financial statements, or personal health records, uploading it violates most employment contracts and corporate security policies.
                </p>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-600/20 text-emerald-900 dark:text-emerald-300 text-sm">
                  <strong>The SlickKit Guarantee:</strong> In SlickKit, documents are mapped directly into an `ArrayBuffer` in your browser&apos;s isolated RAM. The moment you close the tab or refresh the page, the browser garbage collector wipes the memory. It is physically impossible for a data breach to occur on our infrastructure because our infrastructure never touches your data.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bottom Action Card */}
          <Reveal className="text-center">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-white dark:bg-[#12151A] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1">
                    Try SlickKit PDF Privately
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Test it on your own computer with airplane mode turned on.
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
