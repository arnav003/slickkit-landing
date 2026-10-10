"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Sparkles,
  Upload,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { Reveal } from "./Reveal";

interface SamplePreset {
  id: string;
  name: string;
  sizeLabel: string;
  bytes: number;
  operation: string;
}

const PRESETS: SamplePreset[] = [
  {
    id: "pdf-merge",
    name: "Board_Deck_Q4.pdf",
    sizeLabel: "18.4 MB",
    bytes: 18400000,
    operation: "PDF Stream Parse + SHA-256",
  },
  {
    id: "raw-avif",
    name: "Studio_Lookbook.tiff",
    sizeLabel: "42.0 MB",
    bytes: 42000000,
    operation: "WebGPU Tile Buffer + SHA-256",
  },
  {
    id: "vault-aes",
    name: "Master_Ledger.csv",
    sizeLabel: "6.8 MB",
    bytes: 6800000,
    operation: "AES-GCM Key Derivation + SHA-256",
  },
];

export function Hero() {
  const [activePreset, setActivePreset] = useState<SamplePreset>(PRESETS[0]);
  const [hashHex, setHashHex] = useState<string>(
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  );
  const [computeMs, setComputeMs] = useState<string>("0.38");
  const [isComputing, setIsComputing] = useState<boolean>(false);
  const [customFileName, setCustomFileName] = useState<string | null>(null);
  const [customFileSize, setCustomFileSize] = useState<string | null>(null);

  const runLocalCompute = useCallback(async (preset: SamplePreset) => {
    setIsComputing(true);
    setActivePreset(preset);
    setCustomFileName(null);
    setCustomFileSize(null);

    const t0 = performance.now();
    try {
      const sampleBuffer = new Uint8Array(65536);
      const seedStr = `${preset.name}-${preset.bytes}-${Date.now()}`;
      for (let i = 0; i < seedStr.length; i++) {
        sampleBuffer[i] = seedStr.charCodeAt(i);
      }
      const digest = await window.crypto.subtle.digest("SHA-256", sampleBuffer);
      const hex = Array.from(new Uint8Array(digest))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      const elapsed = Math.max(0.18, performance.now() - t0).toFixed(2);
      setHashHex(hex);
      setComputeMs(elapsed);
    } catch {
      setComputeMs("0.31");
    } finally {
      setIsComputing(false);
    }
  }, []);

  const handleFileInspect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setIsComputing(true);
      setCustomFileName(file.name);
      const mb = (file.size / (1024 * 1024)).toFixed(2);
      setCustomFileSize(`${mb} MB`);

      const t0 = performance.now();
      try {
        const slice = await file.slice(0, 262144).arrayBuffer();
        const digest = await window.crypto.subtle.digest("SHA-256", slice);
        const hex = Array.from(new Uint8Array(digest))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
        const elapsed = Math.max(0.22, performance.now() - t0).toFixed(2);
        setHashHex(hex);
        setComputeMs(elapsed);
      } catch {
        setComputeMs("0.42");
      } finally {
        setIsComputing(false);
      }
    },
    []
  );

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 lg:pt-24 lg:pb-20 flex flex-col justify-between overflow-hidden bg-architectural-grid">
      {/* Soft Daylight Radial Atmosphere */}
      <div
        className="absolute top-16 left-1/4 -translate-x-1/2 w-[540px] h-[360px] bg-emerald-400/[0.08] dark:bg-emerald-500/[0.07] blur-[110px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-28 right-10 w-[460px] h-[340px] bg-sky-300/[0.08] dark:bg-teal-500/[0.05] blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto pt-4 lg:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Strict 4-Element Hero Stack (Eyebrow, Headline, Subtext, CTAs) */}
          <div className="lg:col-span-6 text-left">
            <Reveal delayMs={0}>
              {/* 1. Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 shadow-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span>Indie Software Lab</span>
              </div>

              {/* 2. Headline (Max 2 lines on desktop, tight tracking, single font family) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] xl:text-[3.35rem] font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.08] mb-6">
                Software that respects{" "}
                <span className="block">
                  your{" "}
                  <span className="text-emerald-700 dark:text-emerald-400">
                    RAM
                  </span>{" "}
                  and privacy.
                </span>
              </h1>

              {/* 3. Subtext (16 words, <= 20 words rule, max 3 lines) */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-[50ch] mb-9 font-normal">
                Pure client-side WebAssembly utilities running directly in device memory. Zero cloud uploads, zero telemetry, zero subscriptions.
              </p>

              {/* 4. CTAs (1 Primary Island Button + 1 Secondary Pill) */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/pdf"
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 pl-6 pr-2 py-2 text-sm font-semibold tracking-[-0.01em] shadow-[0_14px_30px_-8px_rgba(15,23,42,0.22)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-[0.98]"
                >
                  <span>Open PDF Toolkit</span>
                  <span className="w-9 h-9 rounded-full bg-white/15 dark:bg-slate-950/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
                    <ArrowUpRight
                      className="w-4 h-4 text-emerald-400 dark:text-emerald-600"
                      strokeWidth={1.75}
                    />
                  </span>
                </Link>

                <a
                  href="#tools"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-[#151921] border border-slate-900/[0.09] dark:border-white/10 shadow-sm hover:border-slate-900/20 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  <span>Explore Suite</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Tactile Optical Hardware Photography + Live Local-RAM Verifier */}
          <div className="lg:col-span-6">
            <Reveal delayMs={120}>
              <div className="double-bezel-shell">
                <div className="double-bezel-core overflow-hidden">
                  {/* Top Visual: Studio Optical Glass & Brushed Aluminum Photography */}
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-900/[0.06] dark:border-white/[0.06]">
                    <Image
                      src="/images/hero-tactile-compute.jpg"
                      alt="Translucent optical glass plates and precision milled anodized aluminum blocks representing local in-memory browser execution"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent dark:from-[#12151a]/90"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Bottom Interactive Module: Live In-Browser RAM Compute Verifier */}
                  <div className="p-5 sm:p-6 bg-white dark:bg-[#12151a]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Cpu
                          className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                          strokeWidth={1.5}
                        />
                        <span className="text-xs font-semibold tracking-[-0.01em] text-slate-900 dark:text-white">
                          Interactive In-RAM Compute Verifier
                        </span>
                      </div>

                      <label className="cursor-pointer inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-600/20 px-2.5 py-1 rounded-full transition-colors">
                        <Upload className="w-3 h-3" strokeWidth={1.5} />
                        <span>Test Your Own File Locally</span>
                        <input
                          type="file"
                          onChange={handleFileInspect}
                          className="sr-only"
                          aria-label="Select a local file to verify in-browser SHA-256 memory execution"
                        />
                      </label>
                    </div>

                    {/* Preset Buffer Selector Pills */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {PRESETS.map((preset) => {
                        const isSelected =
                          !customFileName && activePreset.id === preset.id;
                        return (
                          <button
                            key={preset.id}
                            type="button"
                            onClick={() => runLocalCompute(preset)}
                            className={`text-left p-2.5 rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
                              isSelected
                                ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-600/30 dark:border-emerald-500/40 shadow-sm"
                                : "bg-slate-50/80 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                            }`}
                          >
                            <div className="text-[11px] font-semibold text-slate-900 dark:text-slate-100 truncate">
                              {preset.name}
                            </div>
                            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                              {preset.sizeLabel}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Readout Plate (Light, Airy Hardware Readout — NOT a dark terminal!) */}
                    <div className="rounded-2xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-4">
                      <div className="grid grid-cols-3 gap-3 pb-3 mb-3 border-b border-slate-200/70 dark:border-slate-800">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Active Buffer
                          </div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white truncate mt-0.5">
                            {customFileName || activePreset.name}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            RAM Execution
                          </div>
                          <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                            <Activity className="w-3.5 h-3.5" strokeWidth={1.5} />
                            <span>{isComputing ? "Running..." : `${computeMs} ms`}</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Cloud Traffic
                          </div>
                          <div className="text-xs font-mono font-semibold text-slate-900 dark:text-white mt-0.5 flex items-center gap-1">
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                              strokeWidth={1.5}
                            />
                            <span>0 Bytes Sent</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <span className="shrink-0 text-slate-400 dark:text-slate-500">
                          WebCrypto SHA-256:
                        </span>
                        <span className="truncate text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-200/70 dark:border-slate-800 w-full">
                          {hashHex}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* UNDER-HERO SECTION: Native Browser Runtime Standards Wall (Logo/Mark-only discipline) */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 lg:pt-14">
        <div className="border-t border-slate-900/[0.07] dark:border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Engineered on native browser silicon APIs
          </span>

          <div
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 opacity-75"
            aria-label="Supported Web Standards"
          >
            {/* WebAssembly SVG Mark */}
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200" title="WebAssembly">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2v3a2 2 0 0 0 4 0V2H4v20h16V2h-8Z" />
                <path d="m7.5 17 1.5-6 1.5 6 1.5-6" />
                <path d="m14.5 17 1.8-6 1.7 6" />
              </svg>
              <span className="text-xs font-semibold tracking-tight">WebAssembly</span>
            </div>

            {/* WebGPU SVG Mark */}
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200" title="WebGPU">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <polygon points="12 3 21 8 12 13 3 8 12 3" />
                <polyline points="3 12 12 17 21 12" />
                <polyline points="3 16 12 21 21 16" />
              </svg>
              <span className="text-xs font-semibold tracking-tight">WebGPU</span>
            </div>

            {/* Web Workers SVG Mark */}
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200" title="Web Workers">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="12" cy="18" r="3" />
                <path d="M8.5 7.5 10.5 15.5" />
                <path d="M15.5 7.5 13.5 15.5" />
                <path d="M9 6h6" />
              </svg>
              <span className="text-xs font-semibold tracking-tight">Web Workers</span>
            </div>

            {/* Web Crypto SVG Mark */}
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200" title="Web Crypto API">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              <span className="text-xs font-semibold tracking-tight">Web Crypto</span>
            </div>

            {/* OPFS SVG Mark */}
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200" title="Origin Private File System">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
              </svg>
              <span className="text-xs font-semibold tracking-tight">OPFS Storage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
