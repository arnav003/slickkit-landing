import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Reveal } from "../../../components/Reveal";
import { BreadcrumbJsonLd } from "../../../components/BreadcrumbJsonLd";
import {
  HeartPulse,
  ShieldCheck,
  Check,
  X,
  ArrowUpRight,
  ArrowLeft,
  Lock,
  Activity,
  FileText,
  Hospital,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SlickKit for Healthcare | HIPAA-Friendly Medical Record PDF Utilities",
  description:
    "Zero-upload PDF tools for healthcare providers, clinics, and medical billing. Process patient charts, lab results, and health records in local RAM with zero PHI network transmission.",
  keywords: [
    "hipaa compliant pdf editor",
    "private patient record merger",
    "healthcare pdf tools zero upload",
    "medical document compressor",
    "zero phi transmission pdf",
    "hipaa friendly pdf splitter",
    "clinic confidential document tools",
  ],
  alternates: {
    canonical: "https://www.slickkit.dev/for/healthcare",
  },
  openGraph: {
    title: "SlickKit for Healthcare: HIPAA-Friendly On-Device PDF Suite",
    description:
      "Never transmit Protected Health Information (PHI) to unvetted cloud converters. Process medical charts locally in browser RAM.",
    url: "https://www.slickkit.dev/for/healthcare",
    siteName: "SlickKit",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SlickKit for Healthcare & Medical Records",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickKit for Healthcare & Medical Practices",
    description:
      "Process patient medical records with zero PHI transmission and zero cloud uploads.",
    images: ["/og-image.png"],
  },
};

const HEALTHCARE_PILLARS = [
  {
    title: "Zero PHI Network Transmission",
    desc: "Under the HIPAA Security Rule (45 CFR § 164.312), covered entities must maintain technical safeguards to protect electronic Protected Health Information (ePHI). SlickKit processes documents in local browser memory without transmitting a single byte across the internet.",
    icon: Activity,
  },
  {
    title: "No BAA Required (Zero Third-Party Custody)",
    desc: "Cloud PDF services require a signed Business Associate Agreement (BAA) because their servers ingest and store your files. Because SlickKit never receives or stores your files, no third-party custody exists and no BAA is required.",
    icon: Hospital,
  },
  {
    title: "Merge Patient Charts & Lab Scans Instantly",
    desc: "Combine multipage clinical notes, pathology reports, insurance claims, and imaging PDFs into unified patient records at the speed of local silicon.",
    icon: FileText,
  },
  {
    title: "Zero Server Retention or Cache Leaks",
    desc: "Cloud converters store documents on temporary Amazon S3 buckets for up to 2 hours. SlickKit uses volatile browser RAM that vanishes the moment the tab is closed.",
    icon: Lock,
  },
];

export default function HealthcareLandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/for/healthcare" },
          { name: "Healthcare & Clinical", item: "/for/healthcare" },
        ]}
      />
      <Header />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 mb-4">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>For Clinics, Hospitals &amp; Medical Administrators</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.08] mb-6">
              Protect patient privacy.{" "}
              <span className="text-emerald-700 dark:text-emerald-400">
                Never upload health records to cloud websites.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Medical charts, lab panels, and insurance claims contain Protected Health Information (PHI). Uploading these records to free consumer PDF converters violates federal HIPAA safeguards. SlickKit processes medical files locally inside your browser with zero network transfer.
            </p>
          </Reveal>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {HEALTHCARE_PILLARS.map((item, idx) => {
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
                  Zero PHI Risk. 100% Client-Side Speed.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Equip your healthcare staff with fast, private document tools that work safely on hospital workstations without software installations.
                </p>
                <div className="pt-2">
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Launch SlickKit PDF (HIPAA-Friendly)</span>
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
