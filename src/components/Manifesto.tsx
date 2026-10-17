"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, BadgeCheck, EyeOff, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { useDictionary } from "../i18n/LocaleProvider";

const ICONS = [ShieldCheck, BadgeCheck, Zap];

export function Manifesto() {
  const dict = useDictionary();

  return (
    <section id="manifesto" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.08] mb-4">
                {dict.manifesto.titleBefore}
                <span className="whitespace-nowrap text-emerald-700 dark:text-emerald-400">
                  {dict.manifesto.titleHighlight}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {dict.manifesto.thesisP1}
              </p>

              {/* Studio Hardware Visual */}
              <div className="double-bezel-shell mb-6">
                <div className="double-bezel-core overflow-hidden">
                  <div className="relative h-56 sm:h-64 w-full">
                    <Image
                      src="/images/manifesto-local-silicon.jpg"
                      alt="Precision brushed aluminum module resting on clean stone in natural daylight"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-900/[0.06] dark:border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <EyeOff className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {dict.manifesto.thesisP2}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {dict.manifesto.principles.map((p, idx) => {
              const Icon = ICONS[idx] ?? ShieldCheck;
              return (
                <Reveal key={p.title} delayMs={idx * 80}>
                  <div className="double-bezel-shell">
                    <div className="double-bezel-core p-6 sm:p-8 lg:p-9 bg-white dark:bg-[#12151a] transition-shadow duration-500 hover:shadow-bezel-hover">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.18em] font-semibold text-emerald-700 dark:text-emerald-400">
                          {p.badge}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                          <Icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white leading-[1.15] mb-2">
                        {p.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-4">
                        {p.tagline}
                      </p>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {p.description}
                      </p>

                      <ul className="space-y-2.5 pt-4 border-t border-slate-900/[0.06] dark:border-white/[0.06]">
                        {p.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300"
                          >
                            <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" strokeWidth={2.5} />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
