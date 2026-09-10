"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import ProblemSolutionSection from "@/components/problem-solution-section";
import WorkflowSection from "@/components/workflow-section";
import PlatformShowcase from "@/components/platform-showcase";
import ExportAndTrustSection from "@/components/export-and-trust-section";
import DemoAndFAQSection from "@/components/demo-faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Logos & Major Textile Clusters Strip */}
        <TrustStrip />

        {/* 3. The Real Challenge (Problem vs Solution & Core Capabilities Section) */}
        <ProblemSolutionSection />

        {/* 4. Connected Operations Workflow (From Order to Dispatch Thread) */}
        <WorkflowSection />

        {/* 5. Interactive All-Pages Platform Showcase (10 Pages Stepper) */}
        <PlatformShowcase />

        {/* 6. Excel Exports, PDF Generation & Audit Trust */}
        <ExportAndTrustSection />

        {/* 7. Book 21-Day Demo & FAQ Section */}
        <DemoAndFAQSection />
      </main>
      <Footer />
    </>
  );
}



