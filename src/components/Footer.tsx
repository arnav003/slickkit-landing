"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Heart, Wifi, WifiOff } from "lucide-react";

export function Footer() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] transition-colors">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">
                SlickKit
              </span>
              <span className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
              <span className="ml-2 text-xs font-mono text-zinc-500 dark:text-[#71717a]">
                slickkit.dev
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-[#a1a1aa] max-w-sm leading-relaxed">
              An independent software studio building high-speed, local-first browser utilities. Respecting your RAM, your CPU, and your privacy.
            </p>
          </div>

          {/* Tools Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pdf"
                  className="text-zinc-600 dark:text-[#a1a1aa] hover:text-[#4ade80] transition-colors flex items-center gap-1.5"
                >
                  <span>SlickKit PDF</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#4ade80]/20 text-[#22c55e] dark:text-[#4ade80]">
                    LIVE
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-zinc-600 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  SlickKit Image (Coming Soon)
                </a>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-zinc-600 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  SlickKit Media (Planned)
                </a>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-zinc-600 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  SlickKit Vault (Planned)
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Studio
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#manifesto"
                  className="text-zinc-600 dark:text-[#a1a1aa] hover:text-[#4ade80] transition-colors"
                >
                  Manifesto
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/slickkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-[#a1a1aa] hover:text-[#4ade80] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <span className="text-zinc-400 dark:text-zinc-600 text-xs">
                  Zero Telemetry Certified
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-[#71717a]">
          <p>© {new Date().getFullYear()} SlickKit Studio. Built for speed and privacy.</p>
          <p className="flex items-center gap-1 font-mono">
            <span>Client-side WebAssembly & Web Workers</span>
          </p>
        </div>
      </div>

      {/* Persistent Status Bar (DESIGN.md Component #5) */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#070709] px-4 py-2 sm:px-6 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
          </span>
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            All systems running locally
          </span>
          <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">•</span>
          <span className="hidden sm:inline">RAM Execution Only • Zero Server Uploads</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px]">
            {isOnline ? (
              <span className="text-zinc-500 flex items-center gap-1">
                <Wifi className="w-3 h-3 text-emerald-500" />
                <span>ONLINE (READY OFFLINE)</span>
              </span>
            ) : (
              <span className="text-amber-500 dark:text-amber-400 flex items-center gap-1 font-semibold">
                <WifiOff className="w-3 h-3" />
                <span>100% OFFLINE ACTIVE</span>
              </span>
            )}
          </div>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <span className="text-[11px] text-zinc-500">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
