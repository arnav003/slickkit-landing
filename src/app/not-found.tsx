import React from "react";
import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-[#F6F8FA] dark:bg-[#0B0D10] text-slate-900 dark:text-white p-4 text-center">
      <div className="double-bezel-shell max-w-md w-full">
        <div className="double-bezel-core p-8 sm:p-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 mb-5">
            <FileQuestion className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 mb-3">
            404 Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] mb-2">
            Route not found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mb-7 leading-relaxed">
            The utility or page you requested does not exist at this address.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold px-6 py-3 text-xs transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            <span>Return to Studio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
