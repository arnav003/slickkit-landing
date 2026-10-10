"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  yOffset?: number;
}

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  yOffset = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "120px 0px 120px 0px" }
    );

    observer.observe(el);

    const fallbackTimer = window.setTimeout(() => {
      setVisible(true);
    }, 300 + delayMs);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        transform: visible ? "translate3d(0, 0, 0)" : `translate3d(0, ${yOffset}px, 0)`,
        opacity: visible ? 1 : 0,
      }}
      className={`transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-[transform,opacity] ${className}`}
    >
      {children}
    </div>
  );
}
