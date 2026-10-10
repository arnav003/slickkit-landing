"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Image as ImageIcon,
  Film,
  ShieldCheck,
  ArrowUpRight,
  Bell,
  Cpu,
  RotateCw,
  Scissors,
  Lock,
  Check,
} from "lucide-react";
import { NotifyModal } from "./NotifyModal";
import { Reveal } from "./Reveal";

export function ProductSuite() {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [activeNotifyTool, setActiveNotifyTool] = useState("SlickKit Image");

  // Interactive state for SlickKit PDF card preview
  const [pdfMode, setPdfMode] = useState<"merge" | "compress" | "rotate">("compress");
  const [rotatedPage, setRotatedPage] = useState<number>(2);

  // Interactive state for SlickKit Image card preview
  const [avifRatio, setAvifRatio] = useState<number>(88);

  // Interactive state for SlickKit Vault card preview
  const [exifStripped, setExifStripped] = useState<boolean>(true);

  const handleOpenNotify = (toolName: string) => {
    setActiveNotifyTool(toolName);
    setNotifyModalOpen(true);
  };

  const compressedKb = Math.round(4820 * (1 - avifRatio / 100));

  return (
    <section id="tools" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Vertical Stack (No Eyebrow per Eyebrow Restraint rule, No Split-Header) */}
        <Reveal className="mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white leading-[1.08] mb-4">
            The Product Suite
          </h2>
          <p className="max-w-[56ch] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Purpose-built utility applications engineered to execute one workflow with hardware speed, zero network latency, and complete privacy.
          </p>
        </Reveal>

        {/* Asymmetric 4-Cell Bento Grid (7/5 + 5/7 rhythm) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
          {/* CELL 1 (7 Cols): SlickKit PDF — Flagship Live Utility */}
          <Reveal className="lg:col-span-7" delayMs={40}>
            <div className="double-bezel-shell h-full">
              <div className="double-bezel-core h-full p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-gradient-to-br from-emerald-50/75 via-white to-white dark:from-emerald-950/25 dark:via-[#12151a] dark:to-[#12151a] transition-shadow duration-500 hover:shadow-bezel-hover">
                <div>
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-400/10 border border-emerald-600/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                        <FileText className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white">
                          SlickKit PDF
                        </h3>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          Document Utility Engine
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-600/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                      LIVE
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-[58ch] mb-6">
                    Merge, split, losslessly compress, and reorder sensitive PDF documents directly inside an isolated browser Web Worker without uploading a single byte.
                  </p>

                  {/* Interactive Mini PDF Workbench Preview */}
                  <div className="rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-900/[0.07] dark:border-white/[0.07] p-4 sm:p-5 mb-7 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-1.5">
                        {(["compress", "merge", "rotate"] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setPdfMode(mode)}
                            className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-all duration-300 ${
                              pdfMode === mode
                                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                      <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                        {pdfMode === "compress" && "24.6 MB -> 6.1 MB (-75%)"}
                        {pdfMode === "merge" && "4 Streams -> 1 Unified PDF"}
                        {pdfMode === "rotate" && "Click any page to rotate 90°"}
                      </span>
                    </div>

                    {/* Interactive Page Thumbnails */}
                    <div className="grid grid-cols-4 gap-3">
                      {[1, 2, 3, 4].map((page) => {
                        const isRotated = pdfMode === "rotate" && rotatedPage === page;
                        return (
                          <button
                            key={page}
                            type="button"
                            onClick={() => {
                              setPdfMode("rotate");
                              setRotatedPage((prev) => (prev === page ? 0 : page));
                            }}
                            className="group/page relative rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-3 flex flex-col items-center justify-center h-24 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-emerald-500/50"
                          >
                            <div
                              className={`w-10 h-12 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between p-1.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                                isRotated ? "rotate-90 border-emerald-500" : ""
                              }`}
                            >
                              <div className="h-1 w-5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                              <div className="space-y-1">
                                <div className="h-0.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
                                <div className="h-0.5 w-4/5 bg-emerald-500/50 rounded-full" />
                              </div>
                              <div className="text-[8px] font-mono text-slate-400 self-end">
                                P{page}
                              </div>
                            </div>
                            <span className="mt-1.5 text-[10px] font-mono text-slate-400 group-hover/page:text-emerald-600 dark:group-hover/page:text-emerald-400 flex items-center gap-0.5">
                              <RotateCw className="w-2.5 h-2.5" strokeWidth={1.5} />
                              <span>Page 0{page}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Specs + Island CTA */}
                <div className="pt-5 border-t border-slate-900/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Cpu
                      className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span>pdf-lib + Web Worker Core</span>
                  </div>

                  <Link
                    href="/pdf"
                    className="group inline-flex items-center justify-between sm:justify-center gap-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 pl-5 pr-1.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-[0.98]"
                  >
                    <span>Open PDF Toolkit</span>
                    <span className="w-8 h-8 rounded-full bg-white/15 dark:bg-slate-950/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
                      <ArrowUpRight
                        className="w-4 h-4 text-emerald-400 dark:text-emerald-600"
                        strokeWidth={1.75}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CELL 2 (5 Cols): SlickKit Image — Coming Soon with Studio Prism Photography */}
          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="double-bezel-shell h-full">
              <div className="double-bezel-core h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-shadow duration-500 hover:shadow-bezel-hover">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                        <ImageIcon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-950 dark:text-white">
                          SlickKit Image
                        </h3>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          WebGPU Optical Engine
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Coming Soon
                    </span>
                  </div>

                  {/* Generated Optical Prism Studio Photograph */}
                  <div className="relative h-36 w-full rounded-2xl overflow-hidden mb-5 border border-slate-900/[0.06] dark:border-white/[0.06]">
                    <Image
                      src="/images/bento-webgpu-optics.jpg"
                      alt="Optical glass prism refracting emerald light across an architectural grid representing WebGPU image compression"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
                    />
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    Batch AVIF/WebP conversion, perceptual shrink, and neural background cutout accelerated by your local GPU.
                  </p>

                  {/* Interactive Compression Ratio Preview */}
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 p-3.5 mb-6">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-slate-500 dark:text-slate-400">
                        AVIF Target Reduction: {avifRatio}%
                      </span>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                        4.8 MB -&gt; {compressedKb} KB
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={94}
                      value={avifRatio}
                      onChange={(e) => setAvifRatio(Number(e.target.value))}
                      aria-label="Adjust AVIF compression ratio"
                      className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg"
                    />
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-900/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                    WebGPU + Canvas In-RAM
                  </span>

                  <button
                    onClick={() => handleOpenNotify("SlickKit Image")}
                    type="button"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300/90 dark:border-slate-700 pl-4 pr-1.5 py-1.5 text-xs font-semibold hover:border-emerald-600/50 transition-all duration-300 active:scale-[0.98]"
                  >
                    <span>Notify Me</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CELL 3 (5 Cols): SlickKit Media — FFmpeg WASM Engine */}
          <Reveal className="lg:col-span-5" delayMs={160}>
            <div className="double-bezel-shell h-full">
              <div className="double-bezel-core h-full p-6 sm:p-8 flex flex-col justify-between transition-shadow duration-500 hover:shadow-bezel-hover">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                        <Film className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-950 dark:text-white">
                          SlickKit Media
                        </h3>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          Audio & Video Engine
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      Planned
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Instant frame-accurate video trimming, lossless audio extraction, and high-framerate GIF transcoding powered by multi-threaded FFmpeg WebAssembly.
                  </p>

                  {/* Tactile Timeline Scrubber Visual */}
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 p-4 mb-6">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-medium">
                        <Scissors className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />
                        <span>00:04.12 - 00:18.40</span>
                      </span>
                      <span>4K60 ProRes -&gt; MP4</span>
                    </div>

                    {/* Acoustic / Frame Bars */}
                    <div className="grid grid-cols-12 gap-1 items-end h-12 px-2 py-1.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800">
                      {[35, 65, 90, 55, 80, 100, 75, 60, 85, 95, 50, 40].map(
                        (heightPct, idx) => (
                          <div
                            key={idx}
                            style={{ height: `${heightPct}%` }}
                            className={`rounded-full transition-all duration-300 ${
                              idx >= 2 && idx <= 9
                                ? "bg-emerald-600/80 dark:bg-emerald-400/80"
                                : "bg-slate-200 dark:bg-slate-800"
                            }`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-900/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                    FFmpeg WASM Multi-Thread
                  </span>

                  <button
                    onClick={() => handleOpenNotify("SlickKit Media")}
                    type="button"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300/90 dark:border-slate-700 pl-4 pr-1.5 py-1.5 text-xs font-semibold hover:border-emerald-600/50 transition-all duration-300 active:scale-[0.98]"
                  >
                    <span>Notify Me</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CELL 4 (7 Cols): SlickKit Vault — Client-Side Cryptography & Metadata Sanitizer */}
          <Reveal className="lg:col-span-7" delayMs={200}>
            <div className="double-bezel-shell h-full">
              <div className="double-bezel-core h-full p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-shadow duration-500 hover:shadow-bezel-hover">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200">
                        <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white">
                          SlickKit Vault
                        </h3>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          Air-Gapped Cryptography & Sanitizer
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      Planned
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-[58ch] mb-6">
                    Lock confidential archives with authenticated AES-256-GCM browser cryptography and scrub hidden GPS, camera serials, and author metadata before sharing.
                  </p>

                  {/* Interactive Metadata Scrubber Toggle Plate */}
                  <div className="rounded-2xl bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-slate-200/70 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                        <Lock
                          className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                          strokeWidth={1.5}
                        />
                        <span>Interactive Metadata Sanitizer Preview</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setExifStripped((prev) => !prev)}
                        className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all duration-300 ${
                          exifStripped
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {exifStripped ? "Sanitizer: ACTIVE" : "Sanitizer: BYPASSED"}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                      {[
                        {
                          label: "GPS Coordinates",
                          raw: "37.7749° N, 122.4194° W",
                          clean: "0x00 STRIPPED",
                        },
                        {
                          label: "Device Serial",
                          raw: "A7R5-8849201-US",
                          clean: "0x00 STRIPPED",
                        },
                        {
                          label: "Author / Revision",
                          raw: "Legal_Counsel_v4",
                          clean: "AES-256 SEALED",
                        },
                      ].map((field) => (
                        <div
                          key={field.label}
                          className="rounded-xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 p-3"
                        >
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 mb-1">
                            {field.label}
                          </div>
                          <div
                            className={`font-semibold truncate flex items-center gap-1 ${
                              exifStripped
                                ? "text-emerald-700 dark:text-emerald-400"
                                : "text-amber-700 dark:text-amber-400"
                            }`}
                          >
                            {exifStripped && <Check className="w-3 h-3 shrink-0" strokeWidth={2} />}
                            <span>{exifStripped ? field.clean : field.raw}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-900/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Cpu
                      className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span>Web Crypto API + Air-Gapped Keygen</span>
                  </div>

                  <button
                    onClick={() => handleOpenNotify("SlickKit Vault")}
                    type="button"
                    className="group inline-flex items-center justify-between sm:justify-center gap-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300/90 dark:border-slate-700 pl-4 pr-1.5 py-1.5 text-xs font-semibold hover:border-emerald-600/50 transition-all duration-300 active:scale-[0.98]"
                  >
                    <span>Notify Me</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <NotifyModal
        isOpen={notifyModalOpen}
        toolName={activeNotifyTool}
        onClose={() => setNotifyModalOpen(false)}
      />
    </section>
  );
}
