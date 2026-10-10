import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, BadgeCheck, EyeOff, Check } from "lucide-react";
import { Reveal } from "./Reveal";

export function Manifesto() {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Safe for Confidential & Financial Work",
      badge: "NEVER LEAVES YOUR DEVICE",
      tagline: "Built for files you aren't allowed to upload anywhere.",
      description:
        "Whether you are preparing quarterly financial statements, reviewing a confidential company contract, organizing HR records, or combining personal tax forms, your documents stay strictly on your own computer. They can never leak to a third-party server.",
      points: [
        "Trusted for banking, finance, legal, corporate, and personal documents",
        "Your files are never uploaded to any cloud server at any point",
        "Turn off your Wi-Fi and keep working with complete peace of mind",
      ],
    },
    {
      icon: BadgeCheck,
      title: "One-Time Lifetime Pass. Zero Subscriptions.",
      badge: "PAY ONCE, OWN FOREVER",
      tagline: "Stop paying $20 every month just to edit a PDF.",
      description:
        "You should not have to rent basic everyday file tools. Because your own computer handles the work, we don't have massive cloud server bills to pass on to you. Use our core daily tools for free, or get a simple one-time lifetime pass.",
      points: [
        "No monthly recurring bills or sneaky auto-renewal traps",
        "Pay once for a lifetime pass and own your tools forever",
        "Core everyday features work right away without even creating an account",
      ],
    },
    {
      icon: Zap,
      title: "Instant Speed With No Upload Waiting",
      badge: "NO FILE SIZE QUEUES",
      tagline: "Open a 300-page report as fast as a 1-page note.",
      description:
        "Stop staring at slow upload bars or hitting frustrating file-size limits when you are on a deadline. Because nothing travels back and forth over the internet, even huge documents and high-resolution scans open and save in a split second.",
      points: [
        "Works effortlessly even on slow hotel, airport, or café Wi-Fi",
        "Handle large multi-page financial decks and scans without lag",
        "Calm, clutter-free workspace with zero ads or pop-ups",
      ],
    },
  ];

  return (
    <section id="manifesto" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Layout (5 Cols Sticky Thesis + Hardware Visual / 7 Cols Vertical Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Thesis + Studio Photography */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.08] mb-4">
                Built for your{" "}
                <span className="whitespace-nowrap text-emerald-700 dark:text-emerald-400">
                  peace of mind.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Everyday file utilities shouldn&apos;t require a $20/month subscription or force you to hand over confidential documents. SlickKit builds calm, honest tools that keep your work private.
              </p>

              {/* Studio Hardware Still-Life in Double-Bezel Enclosure */}
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

              {/* Zero Snooping Guarantee Plate */}
              <div className="double-bezel-shell">
                <div className="double-bezel-core p-5 sm:p-6 bg-gradient-to-br from-emerald-50/80 via-white to-white dark:from-emerald-950/25 dark:via-[#12151a] dark:to-[#12151a]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 dark:bg-emerald-400/10 border border-emerald-600/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                      <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-slate-950 dark:text-white">
                          Zero Tracking, Zero Snooping
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-600/20">
                          100% PRIVATE
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        We never see, read, or store your files. We don&apos;t run ad trackers or sell your data. What happens on your screen stays strictly on your computer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Staggered Double-Bezel Consumer & Business Promises */}
          <div className="lg:col-span-7 space-y-6">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delayMs={idx * 90}>
                  <div className="double-bezel-shell">
                    <div className="double-bezel-core p-6 sm:p-8 lg:p-9 transition-shadow duration-500 hover:shadow-bezel-hover">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <span className="text-[11px] font-mono font-medium tracking-wider px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-4">
                        {p.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {p.description}
                      </p>

                      <div className="pt-5 border-t border-slate-900/[0.06] dark:border-white/[0.06] grid grid-cols-1 gap-2.5">
                        {p.points.map((pt) => (
                          <div
                            key={pt}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                          >
                            <Check
                              className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                              strokeWidth={1.75}
                            />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
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
