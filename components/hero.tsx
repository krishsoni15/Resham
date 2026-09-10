"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import RealAppDashboardPreview from "@/components/real-app-dashboard-preview";

export default function Hero() {
  const [showInteractiveStudio, setShowInteractiveStudio] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#F7F5F0]">
      {/* =========================================================================
          FULL SECTION BACKGROUND IMAGE (The exact photography from User Request)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <Image
          src="/images/hero-bg-full.png"
          alt="RESHAM Luxury Editorial Studio Scene"
          fill
          priority
          quality={100}
          className="object-cover object-center lg:object-right"
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* =========================================================================
              LEFT COLUMN: Hero Text Content (100% Crisp & Legible Across All Screens)
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 space-y-6 text-left max-w-md lg:max-w-[440px] bg-white/75 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-3xl border border-white/90 lg:border-none shadow-2xl shadow-stone-900/10 lg:shadow-none z-10"
          >
            {/* Category Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 lg:bg-[#9A481B]/10 border border-[#9A481B]/25 text-[#9A481B] text-xs font-bold tracking-[0.16em] uppercase shadow-xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#9A481B] animate-pulse" />
              <span>FROM YARN TO YOUR NEXT GROWTH</span>
            </div>

            {/* Main Headline in One Row with Serif Italic 'Operations.' */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.8rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              The New Standard <br className="hidden sm:inline" />
              in Textile{" "}
              <span className="font-serif italic font-normal text-[#9A481B] border-b-2 border-[#9A481B]/30 pb-0.5 whitespace-nowrap">
                Operations.
              </span>
            </h1>

            {/* Sub-description - Concise, Highly Legible, Perfectly Scaled */}
            <p className="text-sm sm:text-base text-[#334155] font-semibold leading-relaxed max-w-sm sm:max-w-md">
              Unify yarn procurement, roll inventory, dyeing dispatches, and real-time executive analytics in one seamless operating system.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 20px 30px -10px rgba(154, 72, 27, 0.35)" }}
                whileTap={{ scale: 0.97 }}
                href="#demo-form"
                className="btn-primary text-sm sm:text-base py-3.5 px-7 rounded-xl shadow-lg shadow-[#9A481B]/25 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Book a 21-Day Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://appresham.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base sm:text-lg py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2.5 border-[#E0D8CB] bg-white/95 backdrop-blur-md hover:bg-white shadow-xs hover:shadow-md transition-all group whitespace-nowrap"
              >
                <div className="w-7 h-7 rounded-full bg-[#9A481B]/10 text-[#9A481B] flex items-center justify-center group-hover:bg-[#9A481B] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span className="font-bold text-[#0F172A]">Explore Live Platform</span>
              </motion.a>
            </div>

            {/* Platform Badges (Web, Android, iOS, PWA) */}
            <div className="pt-6 border-t border-[#E6DFD5]/90 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                href="https://appresham.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2D9CC] shadow-2xs transition-all text-decoration-none"
              >
                <Globe className="w-4 h-4 text-[#9A481B]" />
                <span className="text-xs font-black tracking-wide text-[#0F172A]">Web</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                href="https://appresham.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2D9CC] shadow-2xs transition-all text-decoration-none"
              >
                <Smartphone className="w-4 h-4 text-[#9A481B]" />
                <span className="text-xs font-black tracking-wide text-[#0F172A]">Android</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                href="https://appresham.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2D9CC] shadow-2xs transition-all text-decoration-none"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#9A481B] fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.02c.62-.75 1.04-1.79.92-2.83-.9.04-2 .6-2.64 1.34-.57.66-1.07 1.72-.94 2.74 1.01.08 2.04-.5 2.66-1.25z" />
                </svg>
                <span className="text-xs font-black tracking-wide text-[#0F172A]">iOS</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.05 }}
                href="https://appresham.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2D9CC] shadow-2xs transition-all text-decoration-none"
              >
                <Layers className="w-4 h-4 text-[#9A481B]" />
                <span className="text-xs font-black tracking-wide text-[#0F172A]">PWA</span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Blank space so background laptop and phone imagery is fully visible */}
          <div className="lg:col-span-7 xl:col-span-7 min-h-[350px] md:min-h-[480px] pointer-events-none" />

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
