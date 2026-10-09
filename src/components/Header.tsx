"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Github, Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-canvas/80 dark:bg-[#09090b]/80 border-b border-zinc-200 dark:border-[#27272a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-[#fafafa] group-hover:text-zinc-700 dark:group-hover:text-white transition-colors">
              SlickKit
            </span>
            <span
              className="ml-1 w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80] group-hover:scale-125 transition-transform"
              aria-hidden="true"
            />
          </div>
          <span className="hidden sm:inline-flex items-center text-[10px] font-mono tracking-wider font-semibold px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/60">
            STUDIO
          </span>
        </Link>

        {/* Right: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#tools"
              className="text-zinc-600 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-[#fafafa] transition-colors"
            >
              Tools
            </a>
            <a
              href="#manifesto"
              className="text-zinc-600 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-[#fafafa] transition-colors"
            >
              Our Manifesto
            </a>
            <a
              href="https://github.com/slickkit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-600 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-[#fafafa] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </nav>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#121215] px-4 py-4 space-y-3">
          <a
            href="#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-[#4ade80]"
          >
            Tools
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-[#4ade80]"
          >
            Our Manifesto
          </a>
          <a
            href="https://github.com/slickkit"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-[#4ade80]"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      )}
    </header>
  );
}
