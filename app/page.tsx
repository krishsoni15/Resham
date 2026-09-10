"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProblemSolutionSection from "@/components/problem-solution-section";
import PlatformShowcase from "@/components/platform-showcase";
import DemoAndFAQSection from "@/components/demo-faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. The Real Challenge (Problem vs Solution & Core Capabilities Section) */}
        <ProblemSolutionSection />

        {/* 3. Interactive All-Pages Platform Showcase (10 Pages Stepper) */}
        <PlatformShowcase />

        {/* 4. Book 21-Day Demo & FAQ Section */}
        <DemoAndFAQSection />
      </main>
      <Footer />
    </>
  );
}


