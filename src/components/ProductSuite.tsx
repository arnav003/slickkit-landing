"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Image as ImageIcon,
  Video,
  ShieldCheck,
  ArrowRight,
  Bell,
  Cpu,
  Layers,
  Sparkles,
  Lock,
} from "lucide-react";
import { NotifyModal } from "./NotifyModal";

interface Product {
  id: string;
  name: string;
  category: string;
  status: "LIVE" | "COMING SOON" | "PLANNED";
  icon: React.ElementType;
  description: string;
  features: string[];
  specs: string;
  ctaText: string;
  ctaLink?: string;
  isLive?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "pdf",
    name: "SlickKit PDF",
    category: "Document Utility",
    status: "LIVE",
    icon: FileText,
    description:
      "Fast, local PDF toolkit. Merge, split, compress, and organize without uploading to any server. Processes files completely in your browser memory.",
    features: ["Merge & Split", "Lossless Compress", "Rotate & Organize", "Password Decrypt"],
    specs: "pdf-lib + Web Worker Core • Zero Server Touch",
    ctaText: "Open PDF Toolkit →",
    ctaLink: "/pdf",
    isLive: true,
  },
  {
    id: "image",
    name: "SlickKit Image",
    category: "Image Processing",
    status: "COMING SOON",
    icon: ImageIcon,
    description:
      "Smart local image compression, AVIF/WebP batch conversion, and background removal via WebGPU. Full visual quality, fractional file sizes.",
    features: ["Batch AVIF & WebP", "Smart Shrink", "Neural BG Cutout", "EXIF Data Wiper"],
    specs: "WebGPU + Canvas Accelerated • 100% In-RAM",
    ctaText: "Notify Me",
  },
  {
    id: "media",
    name: "SlickKit Media",
    category: "Audio / Video Engine",
    status: "PLANNED",
    icon: Video,
    description:
      "In-browser video trimmer, audio extractor, and GIF converter via FFmpeg WebAssembly. Edit clips instantly without uploading large video files.",
    features: ["Instant Trimmer", "Audio Extractor", "GIF Generator", "Format Transcoder"],
    specs: "FFmpeg WASM Single-Threaded/Multi-Threaded",
    ctaText: "Coming Soon",
  },
  {
    id: "vault",
    name: "SlickKit Vault",
    category: "Security & Encryption",
    status: "PLANNED",
    icon: ShieldCheck,
    description:
      "Client-side file encryption and metadata scrubber. Zero server telemetry. Lock confidential files using military-grade browser cryptography.",
    features: ["AES-256-GCM Crypt", "Zero Telemetry", "Metadata Sanitizer", "Local Passkey Safe"],
    specs: "Web Crypto API • Air-Gapped Key Generation",
    ctaText: "Coming Soon",
  },
];

export function ProductSuite() {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [activeNotifyTool, setActiveNotifyTool] = useState("SlickKit Image");

  const handleOpenNotify = (toolName: string) => {
    setActiveNotifyTool(toolName);
    setNotifyModalOpen(true);
  };

  return (
    <section id="tools" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-600 dark:text-[#a1a1aa] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#4ade80]" />
            <span>LOCAL-FIRST UTILITY ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#fafafa] mb-4">
            The Product Suite
          </h2>
          <p className="max-w-xl text-base text-zinc-600 dark:text-[#a1a1aa]">
            Purpose-built utility applications designed to do one job with obsessive speed, zero latency, and absolute privacy.
          </p>
        </div>

        {/* Product Cards Grid: 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            const isLive = product.status === "LIVE";
            const isComingSoon = product.status === "COMING SOON";

            return (
              <div
                key={product.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-200 border ${
                  isLive
                    ? "bg-[#ecf8f1]/50 dark:bg-[#0a2619]/40 border-[#164d32] shadow-[0_0_30px_rgba(74,222,128,0.08)] hover:shadow-[0_0_35px_rgba(74,222,128,0.16)]"
                    : "bg-[#f4f5f7] dark:bg-[#121215] border-zinc-200 dark:border-[#27272a] hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isLive
                            ? "bg-[#4ade80]/20 text-[#22c55e] dark:text-[#4ade80] shadow-inner"
                            : "bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-[#fafafa]">
                          {product.name}
                        </h3>
                        <span className="text-xs font-mono text-zinc-500 dark:text-[#71717a]">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    {isLive && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#4ade80]/20 text-emerald-800 dark:text-[#4ade80] border border-[#164d32]">
                        <span className="flex h-1.5 w-1.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ade80]"></span>
                        </span>
                        LIVE
                      </span>
                    )}

                    {isComingSoon && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                        COMING SOON
                      </span>
                    )}

                    {!isLive && !isComingSoon && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700">
                        PLANNED
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-[#a1a1aa] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Feature Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-lg font-mono border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer specs + CTA */}
                <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-[#71717a]">
                    <Cpu className="w-3.5 h-3.5 text-emerald-500 dark:text-[#4ade80]" />
                    <span className="truncate">{product.specs}</span>
                  </div>

                  <div>
                    {isLive && (
                      <Link
                        href={product.ctaLink || "/pdf"}
                        className="inline-flex items-center justify-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#052415] font-semibold rounded-full px-5 py-2.5 text-sm shadow-sm transition-all hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] active:scale-[0.98]"
                      >
                        <span>{product.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}

                    {isComingSoon && (
                      <button
                        onClick={() => handleOpenNotify(product.name)}
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
                      >
                        <Bell className="w-3.5 h-3.5" />
                        <span>{product.ctaText}</span>
                      </button>
                    )}

                    {!isLive && !isComingSoon && (
                      <button
                        disabled
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-mono text-zinc-400 dark:text-zinc-600 border border-dashed border-zinc-300 dark:border-zinc-800 cursor-not-allowed bg-transparent"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>{product.ctaText}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
