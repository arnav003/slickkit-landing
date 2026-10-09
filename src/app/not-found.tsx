import React from "react";
import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-canvas text-zinc-900 dark:text-[#fafafa] p-4 text-center">
      <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 mb-6">
        <FileQuestion className="w-7 h-7" />
      </div>
      <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 mb-3">
        404 • NOT FOUND
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-sm text-zinc-600 dark:text-[#a1a1aa] max-w-sm mb-6">
        The tool or page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#052415] font-semibold rounded-full px-5 py-2.5 text-sm shadow-sm transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Studio Hub</span>
      </Link>
    </div>
  );
}
