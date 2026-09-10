"use client";

import { motion } from "framer-motion";
import {
  MinusCircle,
  CheckCircle2,
  ArrowRight,
  FileText,
  Boxes,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
} from "lucide-react";

export default function ProblemSolutionSection() {
  const problemPoints = [
    "Scattered information",
    "Manual tracking",
    "Low visibility",
    "Delayed decisions",
  ];

  const solutionPoints = [
    "Single source of truth",
    "Real-time updates",
    "Connected workflows",
    "Faster, better decisions",
  ];

  const coreCapabilities = [
    {
      title: "Orders",
      subtext: "From enquiry to delivery",
      icon: FileText,
    },
    {
      title: "Production",
      subtext: "Track every stage",
      icon: Boxes,
    },
    {
      title: "Inventory",
      subtext: "Grey & finished stock",
      icon: Package,
    },
    {
      title: "Procurement",
      subtext: "Suppliers & POs",
      icon: ShoppingCart,
    },
    {
      title: "Weavers",
      subtext: "Manage capacity",
      icon: Users,
    },
    {
      title: "Reports",
      subtext: "Insights that matter",
      icon: BarChart3,
    },
  ];

  return (
    <div id="solutions" className="bg-[#FAF7F2] py-20 relative overflow-hidden text-[#1C1917]">
      {/* Background Silk Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#9A481B 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative Silk Fiber Graphic (Top Right - White Silk Weave Accent) */}
      <div className="absolute top-0 right-0 w-[480px] h-[360px] opacity-30 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 500 400" className="w-full h-full text-[#E0D8CB] fill-current">
          <path d="M 150,0 C 280,60 380,180 500,320 L 500,0 Z" opacity="0.6" />
          <path d="M 220,0 C 320,80 420,220 500,380 L 500,0 Z" opacity="0.8" />
          <path d="M 290,0 C 380,100 450,250 500,400 L 500,0 Z" />
        </svg>
      </div>

      {/* Decorative Golden Silk Fiber Coil (Bottom Right Accent) */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[320px] opacity-25 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 350" className="w-full h-full text-[#9A481B] fill-current">
          <path d="M 100,350 C 220,250 320,150 400,50 L 400,350 Z" opacity="0.4" />
          <path d="M 180,350 C 270,280 350,180 400,100 L 400,350 Z" opacity="0.7" />
        </svg>
      </div>

      <div className="section-container relative z-10 space-y-24 max-w-6xl mx-auto">

        {/* =========================================================================
            SECTION 1: THE PROBLEM vs THE SOLUTION (Organic Curved Split Layout)
           ========================================================================= */}
        <div className="relative py-4">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">

            {/* LEFT COLUMN: THE PROBLEM */}
            <div className="lg:col-span-6 space-y-6 pr-0 lg:pr-8">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C2410C] block">
                  THE PROBLEM
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#1C1917] tracking-tight leading-[1.12]">
                  Important work <br />
                  <span className="italic font-normal">gets lost in the chaos.</span>
                </h2>
              </div>

              <p className="text-sm md:text-base text-[#57534E] leading-relaxed font-medium max-w-md">
                Spreadsheets, paper records and disconnected tools make it hard to get a clear view of your business.
              </p>

              {/* Red Circle-Minus Points */}
              <div className="space-y-3.5 pt-2">
                {problemPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-rose-500 bg-rose-50/50 text-rose-600 flex items-center justify-center shrink-0">
                      <MinusCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-[#292524]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER ORGANIC S-CURVE DIVIDER WITH ARROW NODE (Desktop & Tablet) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center h-[115%] z-20 pointer-events-none">
              <svg className="h-full w-12 text-[#E6DFD5] stroke-current fill-none" viewBox="0 0 40 400" preserveAspectRatio="none">
                <path d="M 20,0 C 35,130 5,270 20,400" strokeWidth="1.5" strokeDasharray="none" />
              </svg>
              <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#D9CDBF] shadow-sm flex items-center justify-center text-[#9A481B] pointer-events-auto">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* RIGHT COLUMN: THE SOLUTION */}
            <div className="lg:col-span-6 space-y-6 pl-0 lg:pl-10 pt-8 lg:pt-0 border-t lg:border-t-0 border-[#E6DFD5]">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#672708] block">
                  THE SOLUTION
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#1C1917] tracking-tight leading-[1.12]">
                  One platform. <br />
                  <span className="italic font-normal">Full clarity.</span>
                </h2>
              </div>

              <p className="text-sm md:text-base text-[#57534E] leading-relaxed font-medium max-w-md">
                RESHAM connects your entire workflow so you can manage everything in one place, with real-time visibility and control.
              </p>

              {/* Green Checkmark Points */}
              <div className="space-y-3.5 pt-2">
                {solutionPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-emerald-500 bg-emerald-50/50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-[#292524]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            SECTION 2: CORE CAPABILITIES (Exact Pixel-Match to Screenshot)
           ========================================================================= */}
        <div className="text-center space-y-10 pt-10 border-t border-[#E6DFD5]/60">

          {/* Header */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#9A481B]">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1C1917] tracking-tight leading-[1.15]">
              Everything your textile business needs. <br />
              <span className="italic font-normal">Nothing you don&apos;t.</span>
            </h2>
          </div>

          {/* 6 Capability Cards Grid with Clean Vertical Dividers */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E6DFD5] bg-white/70 backdrop-blur-sm rounded-2xl border border-[#E6DFD5] shadow-xs overflow-hidden">
            {coreCapabilities.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ backgroundColor: "rgba(250, 247, 242, 0.8)" }}
                  className="flex flex-col items-center text-center p-6 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EF] border border-[#E8D9C8] text-[#9A481B] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <IconComp className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h4 className="text-base font-bold text-[#1C1917] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#78716C] font-medium mt-1">
                    {item.subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}



