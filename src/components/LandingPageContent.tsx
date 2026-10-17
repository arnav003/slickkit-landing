import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProductSuite } from "./ProductSuite";
import { ArchitectureBenchmark } from "./ArchitectureBenchmark";
import { Manifesto } from "./Manifesto";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

export function LandingPageContent() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F6F8FA] dark:bg-[#0B0D10] relative">
      {/* Floating Fluid Island Header */}
      <Header />

      {/* Main Content Hub */}
      <main id="main-content" className="flex-1">
        {/* 1. Asymmetric Split Hero + Live In-RAM Verifier + Standards Strip */}
        <Hero />

        {/* 2. Asymmetric Bento Product Suite */}
        <ProductSuite />

        {/* 3. Interactive Pipeline Benchmark (Legacy Cloud vs Local Silicon) */}
        <ArchitectureBenchmark />

        {/* 4. Editorial Split Manifesto */}
        <Manifesto />

        {/* 5. Search & Privacy FAQ */}
        <FAQ />
      </main>

      {/* 6. Closing Double-Bezel Banner & Studio Footer */}
      <Footer />
    </div>
  );
}
