"use client";

import React, { useState, useEffect } from "react";
import {
  CloudOff,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  FolderOpen,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useDictionary } from "../i18n/LocaleProvider";
import type { WorkloadOption } from "../i18n/dictionaries/dictionary-types";

export function ArchitectureBenchmark() {
  const dict = useDictionary();
  const [selectedWorkload, setSelectedWorkload] = useState<WorkloadOption>(
    dict.benchmark.workloads[1] ?? dict.benchmark.workloads[0]
  );

  useEffect(() => {
    setSelectedWorkload(dict.benchmark.workloads[1] ?? dict.benchmark.workloads[0]);
  }, [dict]);

  return (
    <section
      id="architecture"
      className="py-28 lg:py-36 border-y border-slate-900/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-[#0E1116]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 mb-5">
            <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
            <span>{dict.header.nav.howItWorks}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.08] mb-4">
            {dict.benchmark.sectionTitle}
          </h2>
          <p className="max-w-[60ch] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {dict.benchmark.sectionSubtext}
          </p>
        </Reveal>

        {/* Interactive Scenario Selector */}
        <Reveal delayMs={80} className="mb-8">
          <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 px-3 py-1.5">
              {dict.hero.docLabel}:
            </span>
            {dict.benchmark.workloads.map((w) => {
              const active = selectedWorkload.id === w.id;
              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setSelectedWorkload(w)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    active
                      ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm border border-slate-200/80 dark:border-slate-700"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {w.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Comparison Matrix */}
        <Reveal delayMs={140}>
          <div className="double-bezel-shell">
            <div className="double-bezel-core overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-900/[0.06] dark:divide-white/[0.06]">
                {/* Left 5 Cols: Cloud */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-slate-50/60 dark:bg-slate-900/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {dict.benchmark.cloudHeading}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                        <AlertCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span>{selectedWorkload.cloudRiskNote}</span>
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-slate-500 dark:text-slate-400">
                        {selectedWorkload.cloudTimeSec}
                      </span>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        {dict.benchmark.cloudSubheading}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-8">
                      {selectedWorkload.cloudRiskNote}
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          title: "Uploads Your Private Files",
                          meta: "Your confidential document is sent to an outside server",
                        },
                        {
                          title: "Not Allowed for Company Work",
                          meta: "Unsafe for banking, finance, legal, or HR records",
                        },
                        {
                          title: "Slow Upload & Download Bars",
                          meta: "Forces you to wait while files transfer back and forth",
                        },
                        {
                          title: "Surprise Paywalls",
                          meta: "Traps you into a recurring subscription after you edit",
                        },
                      ].map((node) => (
                        <div
                          key={node.title}
                          className="rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80 p-3.5 flex items-center justify-between gap-3"
                        >
                          <div>
                            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                              {node.title}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">
                              {node.meta}
                            </div>
                          </div>
                          <Clock
                            className="w-4 h-4 text-slate-400 shrink-0"
                            strokeWidth={1.5}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 7 Cols: SlickKit */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white via-white to-emerald-50/50 dark:from-[#12151a] dark:via-[#12151a] dark:to-emerald-950/20 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400">
                        {dict.benchmark.localHeading}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-600/25 px-3 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={1.75} />
                        <span>{selectedWorkload.benefitBadge}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-4 mb-2">
                      <span className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                        {selectedWorkload.localTimeSec}
                      </span>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        {dict.hero.localGuarantee}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-8">
                      {dict.benchmark.privacyVerdictDesc}
                    </p>

                    {/* 3 Simple Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                      {[
                        {
                          icon: FolderOpen,
                          title: "Pick Your File",
                          badge: "0 Uploads",
                          desc: "Open any file from your computer immediately in browser RAM.",
                        },
                        {
                          icon: Sparkles,
                          title: "Edit Privately",
                          badge: "100% Local",
                          desc: "Combine, shrink, or organize pages with your own hardware.",
                        },
                        {
                          icon: ShieldCheck,
                          title: "Save & Done",
                          badge: "Safe",
                          desc: "Save straight back to disk. Nothing is stored online.",
                        },
                      ].map((step) => {
                        const Icon = step.icon;
                        return (
                          <div
                            key={step.title}
                            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 shadow-sm flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                                  {step.badge}
                                </span>
                              </div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                                {step.title}
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Note */}
                  <div className="rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-600/20 p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CloudOff
                        className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        {dict.benchmark.privacyVerdictDesc}
                      </span>
                    </div>
                    <span className="hidden sm:inline-block text-[11px] font-mono font-semibold text-emerald-800 dark:text-emerald-300 shrink-0">
                      100% OFFLINE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
