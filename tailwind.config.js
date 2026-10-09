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
          dark: "#09090b",
          light: "#fafafa",
        },
        surface: {
          DEFAULT: "var(--card)",
          elevated: "var(--elevated)",
        },
        tint: {
          card: "var(--tint-card)",
          border: "var(--tint-border)",
        },
        primary: {
          DEFAULT: "#4ade80",
          hover: "#22c55e",
          foreground: "#052415",
        },
        border: {
          subtle: "var(--border-subtle)",
          active: "var(--border-active)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(74, 222, 128, 0.15)",
        "glow-lg": "0 0 40px rgba(74, 222, 128, 0.25)",
      },
      borderRadius: {
        card: "1rem", // 16px
        subcard: "0.75rem", // 12px
      },
    },
  },
  plugins: [],
};
