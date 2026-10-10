import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SlickKit Studio | Fast, In-Browser Utilities. Zero Cloud Uploads.",
  description:
    "Indie software studio crafting high-speed, local-first, privacy-respecting browser utilities. Pure client-side WebAssembly tools built to run in your device memory.",
  keywords: [
    "SlickKit",
    "local-first",
    "browser utilities",
    "webassembly",
    "privacy-first",
    "pdf tools",
    "client-side",
    "zero cloud uploads",
  ],
  authors: [{ name: "SlickKit Studio" }],
  openGraph: {
    title: "SlickKit Studio | Fast, In-Browser Utilities. Zero Cloud Uploads.",
    description:
      "Software that respects your RAM and your privacy. Pure client-side WebAssembly tools with zero cloud uploads.",
    url: "https://slickkit.dev",
    siteName: "SlickKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickKit Studio | Fast, In-Browser Utilities. Zero Cloud Uploads.",
    description:
      "Software that respects your RAM and your privacy. Pure client-side WebAssembly tools with zero cloud uploads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body
        style={{
          fontFamily:
            "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
        className="min-h-[100dvh] font-sans bg-[#F6F8FA] dark:bg-[#0B0D10] text-slate-900 dark:text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-950 dark:selection:text-emerald-200 antialiased transition-colors duration-300"
      >
        {/* Fixed GPU-safe subtle tactile grain overlay */}
        <div
          className="fixed inset-0 z-40 pointer-events-none opacity-[0.022] dark:opacity-[0.03] bg-noise-pattern"
          aria-hidden="true"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
