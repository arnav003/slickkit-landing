import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import {
  Terminal,
  ShieldCheck,
  Check,
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  Layers,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Security Architecture & Audit Guide | SlickKit",
  description:
    "A practical guide for CISOs, security engineers, and developers to verify SlickKit's zero-cloud data architecture using Chrome DevTools, WebAssembly isolation, and Web Workers.",
  alternates: {
    canonical: "https://www.slickkit.dev/compliance/local-processing-security",
  },
  openGraph: {
    title: "Technical Security Architecture & Network Tab Audit Guide",
    description:
      "Step-by-step instructions to audit SlickKit with your browser's DevTools Network Tab and verify zero document transmission.",
    url: "https://www.slickkit.dev/compliance/local-processing-security",
  },
};

const AUDIT_STEPS = [
  {
    step: "01",
    title: "Open Browser Developer Tools",
    instructions:
      "Open Google Chrome, Mozilla Firefox, Microsoft Edge, or Apple Safari. Press F12 (or Cmd + Option + I on macOS) to open the DevTools inspector window.",
  },
  {
    step: "02",
    title: "Navigate to the Network Tab",
    instructions:
      "Switch to the 'Network' tab. Filter the view by 'Fetch/XHR' or 'All'. Click the clear button (circle with slash) to empty initial page assets.",
  },
  {
    step: "03",
    title: "Drop a Confidential Document Into SlickKit",
    instructions:
      "Select a large, confidential 20MB+ PDF file and perform a Merge, Compress, or Rotate operation inside SlickKit PDF.",
  },
  {
    step: "04",
    title: "Inspect Network Activity",
    instructions:
      "Observe the Network log during the entire execution. You will see 0 B transferred. No HTTP POST, no WebSocket frames, no telemetry ping, and no background upload.",
  },
  {
    step: "05",
    title: "Test Full Air-Gap / Airplane Mode",
    instructions:
      "Disconnect your computer from Wi-Fi or unplug your ethernet cable. Re-run any PDF operation: the application continues to execute seamlessly without an internet connection.",
  },
];

import { BreadcrumbJsonLd } from "../../../components/BreadcrumbJsonLd";
import { HowToJsonLd } from "../../../components/HowToJsonLd";

export default function LocalProcessingSecurityPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Compliance Hub", item: "/compliance" },
          { name: "Local Processing Verification", item: "/compliance/local-processing-security" },
        ]}
      />
      <HowToJsonLd
        name="How to Verify Zero Cloud Uploads for Any PDF Tool in Browser DevTools"
        description="A step-by-step technical guide to inspecting network activity using Chrome or Firefox DevTools to verify that files are never uploaded to a cloud server."
        totalTime="PT2M"
        toolName="Browser Developer Tools (Network Inspector)"
        steps={AUDIT_STEPS.map((s) => ({
          name: s.title,
          text: s.instructions,
          url: "/compliance/local-processing-security",
        }))}
      />
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
              <span>Security Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.1] mb-6">
              Technical Security Architecture &amp;{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Network Tab Audit Guide.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We don&apos;t ask you to blindly take our word for our privacy guarantees. Security should always be verifiable. Here is a technical breakdown of how our local WebAssembly and Web Worker architecture functions, along with step-by-step instructions to audit SlickKit with your own browser tools.
            </p>
          </Reveal>

          {/* Step-by-Step Audit Guide */}
          <Reveal className="mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-6">
                <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
                  <Terminal className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    The 5-Step DevTools Verification Audit
                  </h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Follow these steps to confirm that your documents never leave your physical device:
                </p>

                <div className="space-y-4 pt-2">
                  {AUDIT_STEPS.map((s) => (
                    <div
                      key={s.step}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-950 dark:text-white mb-1">
                          {s.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {s.instructions}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Under the Hood Architecture */}
          <Reveal className="space-y-8 mb-16">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 bg-white dark:bg-[#12151A] space-y-5">
                <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
                  <Cpu className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Under the Hood: Web Workers &amp; Sandboxed Memory
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  When you select a document in SlickKit, the browser reads the file as an <code>ArrayBuffer</code> using the standard W3C File API.
                </p>
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 font-mono text-xs text-slate-800 dark:text-slate-200 overflow-x-auto">
                  <code>
                    User File -&gt; Browser File API -&gt; Transferable ArrayBuffer -&gt; Web Worker (pdf-lib) -&gt; Local In-RAM Processing -&gt; Blob URL Download
                  </code>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  The document parsing, page rotation, image downscaling, and PDF assembly are performed inside isolated Web Worker threads using compiled WebAssembly and native JavaScript libraries (<code>pdf-lib</code> and <code>PDF.js</code>). The browser enforces an isolated process sandbox: no external scripts can read the memory space, and the data is purged the moment the tab is closed.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bottom Action Card */}
          <Reveal className="text-center">
            <div className="double-bezel-shell">
              <div className="double-bezel-core p-8 sm:p-10 bg-white dark:bg-[#12151A] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1">
                    Ready to Test with Your DevTools?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Open SlickKit PDF, press F12, and see local-first privacy in action.
                  </p>
                </div>
                <Link
                  href="/pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-6 py-3 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shrink-0"
                >
                  <span>Launch &amp; Audit Now</span>
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
