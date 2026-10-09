import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "SlickKit — Fast, In-Browser Utilities. Zero Cloud Uploads.",
  description:
    "Indie software studio specializing in fast, local-first, privacy-respecting browser utilities. Pure client-side WebAssembly tools built to run locally on your device.",
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
    title: "SlickKit — Fast, In-Browser Utilities. Zero Cloud Uploads.",
    description:
      "Software that respects your RAM and your privacy. Pure client-side WebAssembly tools with zero cloud uploads.",
    url: "https://slickkit.dev",
    siteName: "SlickKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickKit — Fast, In-Browser Utilities. Zero Cloud Uploads.",
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
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen font-sans bg-canvas text-zinc-900 dark:text-[#fafafa] selection:bg-[#4ade80]/30 selection:text-white transition-colors duration-150">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
