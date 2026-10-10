"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, ArrowUpRight } from "lucide-react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-full focus:bg-slate-900 focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <header className="fixed top-4 sm:top-5 inset-x-0 z-50 mx-auto max-w-5xl px-4">
        {/* Double-Bezel Floating Island Shell */}
        <div className="rounded-full p-1 bg-slate-900/[0.04] dark:bg-white/[0.05] border border-slate-900/[0.07] dark:border-white/[0.08] backdrop-blur-xl shadow-island-nav transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <div className="rounded-full bg-white/90 dark:bg-[#12151A]/90 border border-white/80 dark:border-white/[0.06] h-12 px-4 sm:px-5 flex items-center justify-between">
            {/* Left: Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-full"
            >
              {/* Tactile Optical Prism Mark */}
              <span
                className="w-7 h-7 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-3.5 h-3.5 text-white dark:text-slate-900"
                >
                  <path
                    d="M4 6.5L10 3L16 6.5V13.5L10 17L4 13.5V6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="10" cy="10" r="2.2" className="fill-emerald-400 dark:fill-emerald-600" />
                </svg>
              </span>

              <span className="font-bold text-[15px] tracking-[-0.03em] text-slate-900 dark:text-white">
                SlickKit
              </span>

              <span className="hidden sm:inline-flex items-center text-[10px] font-mono uppercase tracking-[0.16em] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60">
                Studio
              </span>
            </Link>

            {/* Center: Single-Line Consumer-Friendly Navigation */}
            <nav
              aria-label="Primary"
              className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-600 dark:text-slate-300"
            >
              <a
                href="#tools"
                className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300"
              >
                Our Tools
              </a>
              <a
                href="#architecture"
                className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300"
              >
                How It Works
              </a>
              <a
                href="#manifesto"
                className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300"
              >
                Why SlickKit
              </a>
              <a
                href="#manifesto"
                className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300"
              >
                Lifetime Access
              </a>
            </nav>

            {/* Right: Theme Toggle + Nested Island CTA */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Switch color theme"
                title={theme === "dark" ? "Switch to daylight mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" strokeWidth={1.5} />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-600" strokeWidth={1.5} />
                )}
              </button>

              <Link
                href="/pdf"
                className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 pl-4 pr-1.5 py-1 text-xs font-semibold tracking-[-0.01em] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <span>Open PDF Toolkit</span>
                <span className="w-6 h-6 rounded-full bg-white/15 dark:bg-slate-900/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" strokeWidth={1.75} />
                </span>
              </Link>
            </div>

            {/* Mobile Controls: Theme + Fluid Morphing Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                aria-label="Switch color theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" strokeWidth={1.5} />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" strokeWidth={1.5} />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="relative w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                <span
                  className={`block absolute h-[1.5px] w-3.5 bg-current transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-[3px]"
                  }`}
                />
                <span
                  className={`block absolute h-[1.5px] w-3.5 bg-current transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[3px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Expanded Glass Overlay with Staggered Reveal */}
        <div
          className={`md:hidden mt-2 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <div className="double-bezel-shell">
            <div className="double-bezel-core p-5 space-y-3 backdrop-blur-2xl">
              {[
                { label: "Our Tools", href: "#tools", delay: "delay-75" },
                { label: "How It Works", href: "#architecture", delay: "delay-100" },
                { label: "Why SlickKit", href: "#manifesto", delay: "delay-150" },
                { label: "Lifetime Access", href: "#manifesto", delay: "delay-200" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  } ${item.delay}`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                </a>
              ))}

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full group flex items-center justify-between rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 pl-5 pr-2 py-2.5 text-sm font-semibold"
                >
                  <span>Open PDF Toolkit</span>
                  <span className="w-7 h-7 rounded-full bg-white/15 dark:bg-slate-900/10 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 dark:text-emerald-600" strokeWidth={1.75} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
