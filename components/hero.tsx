"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import { FaAndroid } from "react-icons/fa";
import RealAppDashboardPreview from "@/components/real-app-dashboard-preview";

export default function Hero() {
  const [showInteractiveStudio, setShowInteractiveStudio] = useState(false);
  const [activePlatformInfo, setActivePlatformInfo] = useState<string | null>(null);

  const platformDetails: Record<string, string> = {
    Web: "Cloud Web App — Optimized for Desktop & Laptops",
    iOS: "Native iOS App — Optimized for iPhone & iPad",
    Android: "Native Android App — Optimized for Phones & Tablets",
    PWA: "Progressive Web App — Installable on Windows, Mac & Linux",
  };

  const handlePlatformClick = (key: string) => {
    setActivePlatformInfo((prev) => (prev === key ? null : key));
  };

  return (
    <section className="relative min-h-screen flex items-start lg:items-center pt-28 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 overflow-hidden bg-[#F7F5F0]">
      {/* =========================================================================
          RESPONSIVE HERO BACKGROUND IMAGES (Desktop Widescreen lg: 1024px+ vs Mobile & Tablet < 1024px)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {/* Mobile & Portrait Tablet Background Image (< 1024px) */}
        <Image
          src="/images/hero-bg-mobile.png"
          alt="RESHAM Luxury Editorial Studio Scene Mobile"
          fill
          priority
          quality={100}
          className="lg:hidden object-cover object-bottom"
        />
        {/* Widescreen Desktop & Landscape Background Image (1024px+) */}
        <Image
          src="/images/hero-bg-desktop.png"
          alt="RESHAM Luxury Editorial Studio Scene Desktop"
          fill
          priority
          quality={100}
          className="hidden lg:block object-cover object-center xl:object-right"
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* =========================================================================
              LEFT/CENTER COLUMN: Hero Text Content (Centered on Mobile/Tablet, Left on Desktop)
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-6 xl:col-span-6 space-y-2.5 sm:space-y-4 xl:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center max-w-lg lg:max-w-[540px] xl:max-w-[620px] mx-auto lg:mx-0 p-0 z-10"
          >
            {/* Eyebrow Tag: BUILT FOR MODERN TEXTILE BUSINESSES */}
            <div className="text-[10px] sm:text-xs font-bold text-[#B84A1D] tracking-[0.16em] uppercase">
              BUILT FOR MODERN TEXTILE BUSINESSES
            </div>

            {/* Main Headline (2-Line Desktop & Tablet, Fully Responsive Mobile) */}
            <h1 className="text-[1.65rem] sm:text-4xl lg:text-[3.1rem] xl:text-[3.5rem] font-extrabold text-[#1C1917] tracking-tight leading-[1.1] md:leading-[1.08] text-center lg:text-left">
              <span className="block sm:inline-block sm:whitespace-nowrap">The New Standard</span>{" "}
              <span className="block sm:inline-block sm:whitespace-nowrap">
                in <span className="font-serif italic font-normal text-[#B84A1D]">Textile Operations.</span>
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-[11px] sm:text-sm md:text-base text-[#4A4540] font-medium leading-relaxed max-w-xs sm:max-w-md xl:max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              The intelligent operating system for modern textile enterprises—unifying yarn procurement, fabric roll tracking, dyeing batches, and live factory analytics in one seamless platform.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-0.5 sm:pt-1 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 w-full">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#demo-form"
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-extrabold text-white rounded-full bg-[#B84A1D] hover:bg-[#A03E16] shadow-md shadow-[#B84A1D]/25 transition-all flex items-center justify-center gap-2.5 group whitespace-nowrap"
              >
                <span>Get Free Demo</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#B84A1D] transition-colors duration-300">
                  <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://appresham.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-extrabold text-[#1C1917] rounded-full border border-[#E6DFD5] bg-white/95 hover:bg-[#FAF8F5] shadow-2xs transition-all flex items-center justify-center gap-2.5 group whitespace-nowrap"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#B84A1D]/10 text-[#B84A1D] flex items-center justify-center group-hover:bg-[#B84A1D] group-hover:text-white transition-colors duration-300">
                  <Play className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-current ml-0.5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span>Explore Live Platform</span>
              </motion.a>
            </div>

            {/* Platform Badges (Interactive Liquid Glass Pill Bar with Floating Absolute Hover Tooltips) */}
            <div className="pt-0.5 w-full flex justify-center lg:justify-start">
              <div className="relative inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/35 hover:bg-white/50 backdrop-blur-xl border border-white/60 shadow-md shadow-stone-900/5 text-[10px] sm:text-xs font-black text-[#1C1917] transition-all duration-300">
                {/* Specular Inner Glass Glint */}
                <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-full" />

                {/* Web Platform */}
                <div className="relative group/badge">
                  <button className="relative z-10 flex items-center gap-1.5 text-[#3A3531] hover:text-[#B84A1D] transition-colors cursor-pointer py-0.5">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-current" />
                    <span>Web</span>
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover/badge:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#1C1917]/95 backdrop-blur-md text-white text-[10px] font-semibold whitespace-nowrap shadow-xl border border-white/20 pointer-events-none z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84A1D]" />
                    <span>Cloud Web App — Desktop & Laptops</span>
                  </div>
                </div>

                <span className="relative z-10 w-1 h-1 rounded-full bg-[#1C1917]/25" />

                {/* iOS Platform */}
                <div className="relative group/badge">
                  <button className="relative z-10 flex items-center gap-1.5 text-[#3A3531] hover:text-[#B84A1D] transition-colors cursor-pointer py-0.5">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.02c.62-.75 1.04-1.79.92-2.83-.9.04-2 .6-2.64 1.34-.57.66-1.07 1.72-.94 2.74 1.01.08 2.04-.5 2.66-1.25z" />
                    </svg>
                    <span>iOS</span>
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover/badge:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#1C1917]/95 backdrop-blur-md text-white text-[10px] font-semibold whitespace-nowrap shadow-xl border border-white/20 pointer-events-none z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84A1D]" />
                    <span>Native iOS App — iPhone & iPad</span>
                  </div>
                </div>

                <span className="relative z-10 w-1 h-1 rounded-full bg-[#1C1917]/25" />

                {/* Android Platform */}
                <div className="relative group/badge">
                  <button className="relative z-10 flex items-center gap-1.5 text-[#3A3531] hover:text-[#B84A1D] transition-colors cursor-pointer py-0.5">
                    <FaAndroid className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-current" />
                    <span>Android</span>
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover/badge:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#1C1917]/95 backdrop-blur-md text-white text-[10px] font-semibold whitespace-nowrap shadow-xl border border-white/20 pointer-events-none z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84A1D]" />
                    <span>Native Android App — Phones & Tablets</span>
                  </div>
                </div>

                <span className="relative z-10 w-1 h-1 rounded-full bg-[#1C1917]/25" />

                {/* PWA Platform */}
                <div className="relative group/badge">
                  <button className="relative z-10 flex items-center gap-1.5 text-[#3A3531] hover:text-[#B84A1D] transition-colors cursor-pointer py-0.5">
                    <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-current" />
                    <span>PWA</span>
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover/badge:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#1C1917]/95 backdrop-blur-md text-white text-[10px] font-semibold whitespace-nowrap shadow-xl border border-white/20 pointer-events-none z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B84A1D]" />
                    <span>Progressive Web App — Windows, Mac & Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Blank space so background laptop and phone imagery is fully visible on wide screens */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 min-h-[300px] lg:min-h-[420px] pointer-events-none" />

        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE APP STUDIO MODAL (Triggered by 'Explore Platform')
         ========================================================================= */}
      <AnimatePresence>
        {showInteractiveStudio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-y-auto shadow-2xl p-6 border border-[#E0D8CB]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD5] mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="RESHAM Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="relative h-5.5 w-32">
                        <Image
                          src="/images/wordmark-clean.png"
                          alt="RESHAM"
                          fill
                          unoptimized
                          className="object-contain object-left"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#9A481B] bg-[#9A481B]/10 px-2 py-0.5 rounded-md">
                        Interactive Studio
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-[#78716C]">Click any menu to simulate real textile operations</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowInteractiveStudio(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-[#57534E] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <RealAppDashboardPreview />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
