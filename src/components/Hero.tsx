import React from "react";
import Link from "next/link";
import { Zap, ShieldCheck, WifiOff, ArrowRight, Ban, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4ade80]/10 dark:bg-[#4ade80]/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Lab Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium mb-8 shadow-sm transition-transform hover:scale-[1.02]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
          </span>
          <span className="tracking-wide">
            ⚡ INDIE SOFTWARE LAB • 100% IN-BROWSER COMPUTE
          </span>
        </div>

        {/* High-Impact Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-[#fafafa] leading-[1.1] mb-6">
          Software that respects your{" "}
          <span className="text-zinc-900 dark:text-[#fafafa] underline decoration-[#4ade80] decoration-4 underline-offset-8">
            RAM
          </span>{" "}
          and your{" "}
          <span className="text-emerald-600 dark:text-[#4ade80]">privacy</span>.
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-600 dark:text-[#a1a1aa] leading-relaxed mb-10 font-normal">
          No tracking, no cloud file uploads, no $20/month recurring subscriptions. Pure client-side
          WebAssembly tools built to run locally on your device.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#052415] font-semibold rounded-full px-7 py-3 text-sm sm:text-base shadow-sm transition-all hover:shadow-[0_0_20px_rgba(74,222,128,0.35)] active:scale-[0.98]"
          >
            <span>Open PDF Toolkit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#tools"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800 font-medium rounded-full px-6 py-3 text-sm sm:text-base transition-colors"
          >
            <span>Explore All 4 Tools</span>
          </a>
        </div>

        {/* Quick Trust Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono text-zinc-600 dark:text-[#a1a1aa]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-[#121215]/80 backdrop-blur-sm">
            <WifiOff className="w-4 h-4 text-emerald-500 dark:text-[#4ade80]" />
            <span>🔒 100% Offline Capable</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-[#121215]/80 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-emerald-500 dark:text-[#4ade80]" />
            <span>⚡ Zero Server Latency</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-[#121215]/80 backdrop-blur-sm">
            <Ban className="w-4 h-4 text-emerald-500 dark:text-[#4ade80]" />
            <span>🚫 No Subscriptions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
