"use client";

import React, { useState } from "react";
import {
  CloudOff,
  Cpu,
  HardDrive,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface WorkloadOption {
  id: string;
  label: string;
  sizeMb: number;
  cloudTimeSec: string;
  localTimeSec: string;
  cloudTrafficMb: string;
  speedupFactor: string;
}

const WORKLOADS: WorkloadOption[] = [
  {
    id: "25mb",
    label: "25 MB Legal Contract",
    sizeMb: 25,
    cloudTimeSec: "8.4 s",
    localTimeSec: "0.09 s",
    cloudTrafficMb: "50 MB",
    speedupFactor: "93x faster",
  },
  {
    id: "150mb",
    label: "150 MB Board Deck",
    sizeMb: 150,
    cloudTimeSec: "34.2 s",
    localTimeSec: "0.24 s",
    cloudTrafficMb: "300 MB",
    speedupFactor: "142x faster",
  },
  {
    id: "500mb",
    label: "500 MB Studio Archive",
    sizeMb: 500,
    cloudTimeSec: "118.0 s",
    localTimeSec: "0.68 s",
    cloudTrafficMb: "1,000 MB",
    speedupFactor: "173x faster",
  },
];

export function ArchitectureBenchmark() {
  const [selectedWorkload, setSelectedWorkload] = useState<WorkloadOption>(
    WORKLOADS[1]
  );

  return (
    <section
      id="architecture"
      className="py-28 lg:py-36 border-y border-slate-900/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-[#0E1116]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14">
          {/* Eyebrow #2 (Final allowed eyebrow on page per <= ceil(6/3) rule) */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 mb-5">
            <Cpu className="w-3 h-3 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
            <span>Architectural Benchmark</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.08] mb-4">
            Why upload 150 MB to rotate a page?
          </h2>
          <p className="max-w-[58ch] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Conventional web utilities ship your private files across the internet just to run a basic script. SlickKit brings the compiled binary directly to your browser memory.
          </p>
        </Reveal>

        {/* Interactive Workload Selector */}
        <Reveal delayMs={80} className="mb-8">
          <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-3 py-1.5">
              Select Payload:
            </span>
            {WORKLOADS.map((w) => {
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

        {/* Architectural Pipeline Comparison Matrix (Double-Bezel Hardware Enclosure) */}
        <Reveal delayMs={140}>
          <div className="double-bezel-shell">
            <div className="double-bezel-core overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-900/[0.06] dark:divide-white/[0.06]">
                {/* Left 5 Cols: Legacy Cloud Utility Pipeline */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-slate-50/60 dark:bg-slate-900/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Legacy Cloud Utilities
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                        <AlertCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span>Remote S3 Bucket</span>
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-slate-500 dark:text-slate-400">
                        {selectedWorkload.cloudTimeSec}
                      </span>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        round-trip wait
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-8">
                      Bandwidth consumed: {selectedWorkload.cloudTrafficMb} (Upload + Download)
                    </p>

                    {/* 4 Pipeline Nodes */}
                    <div className="space-y-3">
                      {[
                        {
                          title: "Multipart HTTP Upload",
                          meta: `${selectedWorkload.sizeMb} MB transmitted over public WAN`,
                        },
                        {
                          title: "Shared Worker Queue",
                          meta: "Throttled behind free-tier cloud containers",
                        },
                        {
                          title: "Third-Party Disk Retention",
                          meta: "Document cached on remote server storage",
                        },
                        {
                          title: "Paywall & Download Gate",
                          meta: "Recurring $20/mo subscription prompt",
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

                {/* Right 7 Cols: SlickKit In-Browser RAM Architecture */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white via-white to-emerald-50/50 dark:from-[#12151a] dark:via-[#12151a] dark:to-emerald-950/20 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400">
                        SlickKit Local-RAM Engine
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-600/25 px-3 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={1.75} />
                        <span>{selectedWorkload.speedupFactor}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-4 mb-2">
                      <span className="text-4xl sm:text-6xl font-mono font-extrabold tracking-tight text-slate-950 dark:text-white">
                        {selectedWorkload.localTimeSec}
                      </span>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        0 Bytes Transmitted Over Network
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-8">
                      Executed at unified memory-bus bandwidth inside isolated Web Worker threads
                    </p>

                    {/* 3 Direct Silicon Pipeline Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                      {[
                        {
                          icon: HardDrive,
                          title: "Zero-Copy Pointer",
                          latency: "0.01 s",
                          desc: "File mapped directly from local disk into browser ArrayBuffer.",
                        },
                        {
                          icon: Cpu,
                          title: "WASM Execution",
                          latency: selectedWorkload.localTimeSec,
                          desc: "Compiled native instructions run across local CPU/GPU cores.",
                        },
                        {
                          icon: ShieldCheck,
                          title: "Instant Memory Release",
                          latency: "0.00 s",
                          desc: "Output saved to disk; memory buffer zeroed on tab close.",
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
                                <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                                  {step.latency}
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

                  {/* Bottom Air-Gap Verification Note */}
                  <div className="rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-600/20 p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CloudOff
                        className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        Don&apos;t take our word for it: turn off your Wi-Fi before dropping a file into SlickKit PDF.
                      </span>
                    </div>
                    <span className="hidden sm:inline-block text-[11px] font-mono font-semibold text-emerald-800 dark:text-emerald-300 shrink-0">
                      AIR-GAP VERIFIED
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
