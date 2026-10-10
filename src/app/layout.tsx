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
  metadataBase: new URL("https://www.slickkit.dev"),
  title: "SlickKit | Private, Instant Everyday Tools. Zero Cloud Uploads.",
  description:
    "Everyday PDF, image, and media tools that work privately on your own computer. Edit confidential contracts, financial statements, and personal files with zero cloud uploads and no monthly subscriptions.",
  keywords: [
    "SlickKit",
    "private pdf tools",
    "offline pdf editor",
    "no subscription pdf",
    "confidential document tools",
    "local file tools",
    "zero cloud uploads",
  ],
  authors: [{ name: "SlickKit Studio" }],
  openGraph: {
    title: "SlickKit | Private, Instant Everyday Tools. Zero Cloud Uploads.",
    description:
      "Everyday file tools that keep your documents yours. Edit confidential PDFs, financial reports, and photos privately on your device with no subscriptions.",
    url: "https://www.slickkit.dev",
    siteName: "SlickKit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "SlickKit | Private, Instant Everyday Tools. Zero Cloud Uploads.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickKit | Private, Instant Everyday Tools. Zero Cloud Uploads.",
    description:
      "Everyday file tools that keep your documents yours. Edit confidential PDFs, financial reports, and photos privately on your device with no subscriptions.",
    images: ["/og-image.png"],
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
