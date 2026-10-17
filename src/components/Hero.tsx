"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Upload,
  CheckCircle2,
  Zap,
  Briefcase,
  Landmark,
  Scale,
  UserCheck,
  Building2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useDictionary, useLocale } from "../i18n/LocaleProvider";
import type { SamplePreset } from "../i18n/dictionaries/dictionary-types";

export function Hero() {
  const dict = useDictionary();
  const locale = useLocale();
  const pdfHref = `/pdf/${locale}`;

  const [activePreset, setActivePreset] = useState<SamplePreset>(dict.hero.presets[0]);
  const [computeTime, setComputeTime] = useState<string>("0.2 sec");
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [customFileName, setCustomFileName] = useState<string | null>(null);
  const [customFileSize, setCustomFileSize] = useState<string | null>(null);

  useEffect(() => {
    setActivePreset(dict.hero.presets[0]);
  }, [dict]);

  const handleSelectPreset = useCallback((preset: SamplePreset) => {
    setIsChecking(true);
    setActivePreset(preset);
    setCustomFileName(null);
    setCustomFileSize(null);

    setTimeout(() => {
      setComputeTime(preset.speedLabel);
      setIsChecking(false);
    }, 180);
  }, []);

  const handleFileInspect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setIsChecking(true);
      setCustomFileName(file.name);
      const mb = (file.size / (1024 * 1024)).toFixed(1);
      setCustomFileSize(`${mb} MB · Your Local File`);

      const t0 = performance.now();
      try {
        await file.slice(0, 65536).arrayBuffer();
        const elapsedSec = Math.max(0.1, (performance.now() - t0) / 1000).toFixed(1);
        setComputeTime(`${elapsedSec} sec`);
      } catch {
        setComputeTime("0.1 sec");
      } finally {
        setIsChecking(false);
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
                <span>{dict.hero.eyebrow}</span>
              </div>

              {/* 2. Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] xl:text-[3.4rem] font-extrabold tracking-[-0.038em] text-slate-950 dark:text-white leading-[1.08] mb-6">
                {dict.hero.headlineBefore}
                <span className="block">
                  <span className="text-emerald-700 dark:text-emerald-400">
                    {dict.hero.headlineHighlight}
                  </span>
                  {dict.hero.headlineAfter}
                </span>
              </h1>

              {/* 3. Subtext */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-[50ch] mb-9 font-normal">
                {dict.hero.subtext}
              </p>

              {/* 4. CTAs */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href={pdfHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 pl-6 pr-2 py-2 text-sm font-semibold tracking-[-0.01em] shadow-[0_14px_30px_-8px_rgba(15,23,42,0.22)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-[0.98]"
                >
                  <span>{dict.hero.openPdfToolkit}</span>
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
                  <span>{dict.hero.exploreSuite}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Interactive Privacy Guarantee */}
          <div className="lg:col-span-6">
            <Reveal delayMs={120}>
              <div className="double-bezel-shell">
                <div className="double-bezel-core overflow-hidden">
                  {/* Top Visual */}
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-900/[0.06] dark:border-white/[0.06]">
                    <Image
                      src="/images/hero-tactile-compute.jpg"
                      alt="Translucent optical glass plates and precision brushed aluminum blocks representing clean, private on-device tools"
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

                  {/* Bottom Interactive Module */}
                  <div className="p-5 sm:p-6 bg-white dark:bg-[#12151a]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck
                          className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                          strokeWidth={1.5}
                        />
                        <span className="text-xs font-semibold tracking-[-0.01em] text-slate-900 dark:text-white">
                          {dict.hero.verifierTitle}
                        </span>
                      </div>

                      <label className="cursor-pointer inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-600/20 px-3 py-1 rounded-full transition-colors">
                        <Upload className="w-3 h-3" strokeWidth={1.5} />
                        <span>{dict.hero.testWithFile}</span>
                        <input
                          type="file"
                          onChange={handleFileInspect}
                          className="sr-only"
                          aria-label="Select a file from your computer to test private on-device processing"
                        />
                      </label>
                    </div>

                    {/* Presets */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {dict.hero.presets.map((preset) => {
                        const isSelected =
                          !customFileName && activePreset.id === preset.id;
                        return (
                          <button
                            key={preset.id}
                            type="button"
                            onClick={() => handleSelectPreset(preset)}
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

                    {/* Readout Plate */}
                    <div className="rounded-2xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-4">
                      <div className="grid grid-cols-3 gap-3 pb-3 mb-3 border-b border-slate-200/70 dark:border-slate-800">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {dict.hero.docLabel}
                          </div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white truncate mt-0.5">
                            {customFileName || activePreset.name}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {dict.hero.speedLabel}
                          </div>
                          <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5" strokeWidth={1.5} />
                            <span>
                              {isChecking
                                ? dict.hero.opening
                                : `${dict.hero.instantPrefix} (${computeTime})`}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {dict.hero.cloudUploadsLabel}
                          </div>
                          <div className="text-xs font-mono font-semibold text-slate-900 dark:text-white mt-0.5 flex items-center gap-1">
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                              strokeWidth={1.5}
                            />
                            <span>{dict.hero.zeroFilesUploaded}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className="inline-flex items-center gap-1.5 font-medium text-emerald-800 dark:text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                          <span>{dict.hero.localGuarantee}</span>
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {customFileSize || activePreset.category}
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

      {/* UNDER-HERO SECTION: Everyday & Confidential Use-Cases Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 lg:pt-14">
        <div className="border-t border-slate-900/[0.07] dark:border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {dict.hero.useCasesTitle}
          </span>

          <div
            className="flex flex-wrap items-center justify-center gap-7 sm:gap-9 opacity-80"
            aria-label="Designed for confidential workflows"
          >
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Landmark className="w-4 h-4 text-emerald-700 dark:text-emerald-400" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-tight">
                {dict.hero.useCases.finance}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Scale className="w-4 h-4 text-emerald-700 dark:text-emerald-400" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-tight">
                {dict.hero.useCases.legal}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Building2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-tight">
                {dict.hero.useCases.company}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <UserCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-tight">
                {dict.hero.useCases.personal}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Briefcase className="w-4 h-4 text-emerald-700 dark:text-emerald-400" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-tight">
                {dict.hero.useCases.office}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
