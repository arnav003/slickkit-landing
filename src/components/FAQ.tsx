"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck, Zap, Lock, HardDrive, HelpCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { useDictionary } from "../i18n/LocaleProvider";

const ICONS = [ShieldCheck, HardDrive, Lock, Zap, HelpCircle];

export function FAQ() {
  const dict = useDictionary();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-900/[0.08] dark:border-white/10 shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            <span>{dict.header.nav.faq}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.1] mb-4">
            {dict.faq.sectionTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {dict.faq.sectionSubtext}
          </p>
        </Reveal>

        <div className="space-y-3.5">
          {dict.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const Icon = ICONS[idx % ICONS.length] ?? HelpCircle;

            return (
              <Reveal key={item.question} delayMs={idx * 30}>
                <div className="double-bezel-shell">
                  <div
                    className={`double-bezel-core transition-colors duration-300 ${
                      isOpen
                        ? "bg-white dark:bg-[#12151A]"
                        : "bg-white/70 dark:bg-[#12151A]/60 hover:bg-white dark:hover:bg-[#12151A]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-2xl"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
                        </span>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                            {item.category}
                          </span>
                          <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                            {item.question}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
