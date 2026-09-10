"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2B211A] via-[#362A21] to-[#241A14] border border-[#4A3B30] p-8 md:p-12 shadow-2xl"
        >
          {/* Decorative ambient silk wave glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A481B]/20 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side text */}
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="relative w-6 h-6 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="RESHAM Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-5 w-28">
                  <Image
                    src="/images/wordmark-light-clean.png"
                    alt="RESHAM"
                    fill
                    unoptimized
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#E8D5C8] uppercase block">
                READY TO SEE THE DIFFERENCE?
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                Start your 21-day demo today.
              </h2>
              <p className="text-sm md:text-base text-[#D0C5B8] max-w-xl">
                Explore RESHAM with your own data and see how it can fit your business.
              </p>
            </div>

            {/* Right side CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-start lg:justify-center gap-4">
              <a
                href="#demo-form"
                className="btn-primary w-full sm:w-auto text-sm py-3.5 px-7 rounded-xl shadow-lg shadow-[#9A481B]/30"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#demo-form"
                className="text-xs font-bold text-[#E8D5C8] hover:text-white underline underline-offset-4 tracking-wide transition-colors py-1"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
