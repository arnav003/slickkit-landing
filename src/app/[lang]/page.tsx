import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  SUPPORTED_LOCALES,
  isLocale,
  type Locale,
  localeLabels,
} from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import { LocaleProvider } from "../../i18n/LocaleProvider";
import { JsonLd } from "../../components/JsonLd";
import { LandingPageContent } from "../../components/LandingPageContent";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const dict = getDictionary(lang);
  const meta = localeLabels[lang];
  const canonical =
    lang === "en" ? "https://www.slickkit.dev" : `https://www.slickkit.dev/${lang}`;

  const languageAlternates: Record<string, string> = {
    en: "https://www.slickkit.dev",
    "en-US": "https://www.slickkit.dev",
    es: "https://www.slickkit.dev/es",
    fr: "https://www.slickkit.dev/fr",
    de: "https://www.slickkit.dev/de",
    pt: "https://www.slickkit.dev/pt",
    it: "https://www.slickkit.dev/it",
    ro: "https://www.slickkit.dev/ro",
    ru: "https://www.slickkit.dev/ru",
    hu: "https://www.slickkit.dev/hu",
    "x-default": "https://www.slickkit.dev",
  };

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title: dict.meta.ogTitle || dict.meta.title,
      description: dict.meta.ogDescription || dict.meta.description,
      url: canonical,
      siteName: "SlickKit",
      locale: meta.htmlLang,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: dict.meta.ogTitle || dict.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle || dict.meta.title,
      description: dict.meta.ogDescription || dict.meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocalizedLandingPage({ params }: Props) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <LocaleProvider locale={lang} dictionary={dict}>
      <JsonLd locale={lang} />
      <LandingPageContent />
    </LocaleProvider>
  );
}
