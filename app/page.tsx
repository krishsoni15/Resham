"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import ProblemSolutionSection from "@/components/problem-solution-section";
import WorkflowSection from "@/components/workflow-section";
import PricingAndImpactSection from "@/components/pricing-impact-section";
import DemoAndFAQSection from "@/components/demo-faq-section";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Logos & Production Strip */}
        <TrustStrip />

        {/* 3. The Real Challenge (Problem vs Solution & Core Capabilities Section) */}
        <ProblemSolutionSection />

        {/* 4. Connected Operations Workflow (From Order to Dispatch Thread) */}
        <WorkflowSection />

        {/* 5. Pricing & Instant ROI Estimator Section */}
        <PricingAndImpactSection />

        {/* 6. Book 21-Day Demo & FAQ Section */}
        <DemoAndFAQSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}



