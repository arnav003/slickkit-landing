import React from "react";
import { WifiOff, Zap, Shield, EyeOff, Check, Cpu } from "lucide-react";

export function Manifesto() {
  const principles = [
    {
      icon: WifiOff,
      title: "Air-Gapped Security",
      badge: "0 BYTES TRANSMITTED",
      tagline: "Turn off your Wi-Fi. Everything still works.",
      description:
        "Every file calculation executes strictly inside isolated client Web Workers. Your confidential contracts, financial statements, and personal photos never leave your device. They physically cannot leak to a third-party server.",
      points: [
        "Pure WebAssembly & JavaScript execution in RAM",
        "Air-gapped verification: disconnect your internet connection and test it",
        "No backend endpoints receiving document byte streams",
      ],
    },
    {
      icon: Zap,
      title: "Zero Network Latency",
      badge: "MEMORY-BUS VELOCITY",
      tagline: "Instant compute at hardware speeds.",
      description:
        "Traditional web tools force you to upload a 500MB file, wait for cloud queue processing, and download it back. SlickKit processes files directly from your disk cache into local memory with zero network delay.",
      points: [
        "No waiting on upload queues or bandwidth throttling",
        "Multi-core concurrency via Web Workers & WebGPU",
        "Immediate preview generation and instantaneous downloads",
      ],
    },
    {
      icon: Cpu,
      title: "The End of $20/mo Subscriptions",
      badge: "PAY ONCE, OWN FOREVER",
      tagline: "Rejecting predatory SaaS recurring bills.",
      description:
        "Utilities don't need cloud server farms to operate. Because client-side compute uses your device's processors, we incur minimal backend infrastructure overhead. We reject predatory recurring subscriptions in favor of lifetime utility licenses.",
      points: [
        "Transparent pricing with zero hidden renewal traps",
        "Tools you own forever without risk of abrupt lockouts",
        "Free standalone offline modes for core essential utilities",
      ],
    },
  ];

  return (
    <section id="manifesto" className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#0c0c0e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-[#a1a1aa] mb-4">
            <Shield className="w-3.5 h-3.5 text-[#4ade80]" />
            <span>STUDIO MANIFESTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#fafafa] mb-4">
            Why We Build Local-First
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-[#a1a1aa] leading-relaxed">
            The modern web turned simple daily utilities into slow, subscription-milking cloud traps.
            We are building an indie studio dedicated to restoring high-performance, private, client-side software.
          </p>
        </div>

        {/* 3 Clean Principle Feature Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-[#27272a] bg-white dark:bg-[#121215] p-7 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-emerald-600 dark:text-[#4ade80]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-[#fafafa] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-700 dark:text-[#4ade80] mb-4">
                    {p.tagline}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-[#a1a1aa] leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 space-y-2.5">
                  {p.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                      <Check className="w-4 h-4 text-[#4ade80] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Zero Telemetry Banner */}
        <div className="rounded-2xl border border-[#164d32] bg-[#ecf8f1]/80 dark:bg-[#0a2619]/40 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#4ade80]/20 flex items-center justify-center text-[#22c55e] dark:text-[#4ade80] shrink-0 mt-1">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-[#fafafa]">
                  Zero Surveillance & Zero Telemetry
                </h4>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[#4ade80]/20 text-emerald-800 dark:text-[#4ade80] font-semibold">
                  AUDITABLE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#a1a1aa] leading-relaxed max-w-2xl">
                No tracking cookies. No session recording pixels. No marketing beacons. Your browser console network tab stays completely silent during document operations.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#164d32] bg-white/50 dark:bg-black/40 text-emerald-900 dark:text-[#4ade80]">
              [ PRIVACY GUARANTEE: 100% ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
