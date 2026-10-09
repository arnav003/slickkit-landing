"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Bell, Sparkles } from "lucide-react";

interface NotifyModalProps {
  isOpen: boolean;
  toolName: string;
  onClose: () => void;
}

export function NotifyModal({ isOpen, toolName, onClose }: { isOpen: boolean; toolName: string; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setTimeout(() => {
      // Store in localStorage for persistence
      try {
        const saved = JSON.parse(localStorage.getItem("slickkit-subscribers") || "[]");
        saved.push({ tool: toolName, email, date: new Date().toISOString() });
        localStorage.setItem("slickkit-subscribers", JSON.stringify(saved));
      } catch {
        // ignore storage errors
      }
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] p-6 shadow-2xl transition-all"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#4ade80]/20 text-[#22c55e] dark:text-[#4ade80] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              You're on the list!
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              We&apos;ll notify <span className="font-mono text-zinc-900 dark:text-zinc-200">{email}</span> the moment{" "}
              <strong className="text-zinc-900 dark:text-white">{toolName}</strong> goes live. No spam, ever.
            </p>
            <button
              onClick={handleClose}
              type="button"
              className="bg-[#4ade80] hover:bg-[#22c55e] text-[#052415] font-semibold rounded-full px-6 py-2.5 text-sm transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-500 dark:text-[#4ade80]">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Get Early Access: {toolName}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Be the first to test our 100% in-browser WebGPU engine.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="notify-email"
                  className="block text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="notify-email"
                  type="email"
                  required
                  placeholder="developer@slickkit.dev"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-[#4ade80]" />
                <span>Zero spam guarantee. One email when beta ships.</span>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-medium rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#4ade80] hover:bg-[#22c55e] disabled:opacity-50 text-[#052415] font-semibold rounded-full px-5 py-2 text-xs shadow-sm transition-all flex items-center gap-1.5"
                >
                  {loading ? "Joining..." : "Notify Me"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
