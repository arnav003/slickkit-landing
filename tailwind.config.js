/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "var(--background)",
          light: "#F6F8FA",
          dark: "#0B0D10",
        },
        surface: {
          DEFAULT: "var(--card)",
          elevated: "var(--elevated)",
        },
        accent: {
          DEFAULT: "#059669",
          light: "#10B981",
          tint: "#ECFDF5",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans, 'Plus Jakarta Sans')",
          "'Plus Jakarta Sans'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono, 'JetBrains Mono')",
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        "bezel-light":
          "0 1px 2px rgba(15, 23, 42, 0.03), 0 16px 40px -12px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
        "bezel-hover":
          "0 4px 12px rgba(15, 23, 42, 0.04), 0 24px 48px -12px rgba(5, 150, 105, 0.09), inset 0 1px 0 rgba(255, 255, 255, 1)",
        "island-nav":
          "0 12px 36px -8px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.85)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.32, 0.72, 0, 1)",
        outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
