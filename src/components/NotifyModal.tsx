"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Bell, ArrowUpRight, AlertCircle } from "lucide-react";

interface NotifyModalProps {
  isOpen: boolean;
  toolName: string;
  onClose: () => void;
}

export function NotifyModal({ isOpen, toolName, onClose }: NotifyModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed || !emailRegex.test(trimmed)) {
      setError("Please enter a valid work or personal email address.");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      try {
        const saved = JSON.parse(
          localStorage.getItem("slickkit-subscribers") || "[]"
        );
        saved.push({
          tool: toolName,
          email: trimmed,
          date: new Date().toISOString(),
        });
        localStorage.setItem("slickkit-subscribers", JSON.stringify(saved));
      } catch {
        // ignore storage errors
      }
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail("");
    setError("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notify-modal-title"
    >
      <div className="relative w-full max-w-md double-bezel-shell">
        <div className="double-bezel-core p-6 sm:p-8 relative">
          <button
            onClick={handleClose}
            type="button"
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>

          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-600/20">
                <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3
                id="notify-modal-title"
                className="text-xl font-bold tracking-[-0.02em] text-slate-950 dark:text-white mb-2"
              >
                Early access confirmed
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                We will send one release note to{" "}
                <span className="font-mono font-medium text-slate-900 dark:text-white">
                  {email}
                </span>{" "}
                as soon as{" "}
                <strong className="text-slate-900 dark:text-white">
                  {toolName}
                </strong>{" "}
                ships.
              </p>
              <button
                onClick={handleClose}
                type="button"
                className="rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold px-6 py-2.5 text-xs transition-all active:scale-[0.98]"
              >
                Return to Studio
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3.5 mb-5 pr-8">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                  <Bell className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    id="notify-modal-title"
                    className="text-lg font-bold tracking-[-0.02em] text-slate-950 dark:text-white"
                  >
                    Early Access: {toolName}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Receive a single notification when the local build is ready.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="notify-email"
                    className="text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    Email address
                  </label>
                  <input
                    id="notify-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    aria-invalid={Boolean(error)}
                    aria-describedby="notify-email-helper notify-email-error"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-950 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                  <span
                    id="notify-email-helper"
                    className="text-xs text-slate-500 dark:text-slate-400"
                  >
                    Stored locally. Zero marketing newsletters, ever.
                  </span>
                  {error && (
                    <span
                      id="notify-email-error"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                      <span>{error}</span>
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2.5 text-xs font-semibold rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-slate-950 dark:bg-white disabled:opacity-50 text-white dark:text-slate-950 font-semibold pl-5 pr-1.5 py-1.5 text-xs transition-all active:scale-[0.98]"
                  >
                    <span>{loading ? "Saving..." : "Notify Me"}</span>
                    <span className="w-6 h-6 rounded-full bg-white/15 dark:bg-slate-950/10 flex items-center justify-center">
                      <ArrowUpRight
                        className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600"
                        strokeWidth={1.75}
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
