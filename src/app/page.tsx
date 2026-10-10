import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProductSuite } from "../components/ProductSuite";
import { ArchitectureBenchmark } from "../components/ArchitectureBenchmark";
import { Manifesto } from "../components/Manifesto";
import { Footer } from "../components/Footer";

export default function Home() {
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
      </main>

      {/* 5. Closing Double-Bezel Banner & Studio Footer */}
      <Footer />
    </div>
  );
}
