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
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

export default function ProblemSolutionSection() {
  const problemPoints = [
    { title: "Scattered Information", desc: "Orders, stock and rates split across multiple sheets & registers." },
    { title: "Manual Tracking", desc: "Constant phone calls and manual entries to get production updates." },
    { title: "Low Stock Visibility", desc: "Hard to know exact grey material and finished lot stock in real time." },
    { title: "Delayed Decisions", desc: "Waiting hours or days for reports leads to delayed customer deliveries." },
  ];

  const solutionPoints = [
    { title: "Single Source of Truth", desc: "Every order, fabric quality, and PO in one central system." },
    { title: "Real-time Updates", desc: "Instant updates flow across web, Android, iOS and PWA applications." },
    { title: "Connected Workflows", desc: "Order -> Production -> Inventory -> Dispatch connected end-to-end." },
    { title: "Faster, Better Decisions", desc: "Executive KPI dashboards & automatic PDF reports at your fingertips." },
  ];

  const coreCapabilities = [
    {
      title: "Orders Engine",
      subtext: "From enquiry to delivery",
      desc: "Multi-item pricing & style specs",
      icon: FileText,
      badge: "Sales & Lifecycle",
    },
    {
      title: "Production Stage",
      subtext: "Track every stage",
      desc: "Loom, dyeing & printing status",
      icon: Boxes,
      badge: "Mill & Process",
    },
    {
      title: "Stock & Inventory",
      subtext: "Grey & finished stock",
      desc: "Real-time yardage & roll count",
      icon: Package,
      badge: "Real-time Stock",
    },
    {
      title: "Procurement & POs",
      subtext: "Suppliers & POs",
      desc: "Automated PO PDFs & terms lock",
      icon: ShoppingCart,
      badge: "Yarn & Raw Material",
    },
    {
      title: "Weaver Operations",
      subtext: "Manage capacity",
      desc: "Loom allocation & inward tracking",
      icon: Users,
      badge: "Loom & Weaver Hub",
    },
    {
      title: "Reports & Documents",
      subtext: "Insights that matter",
      desc: "Excel ledgers, PDFs & QR stickers",
      icon: BarChart3,
      badge: "Instant Exports",
    },
  ];

  return (
    <section id="solutions" className="bg-[#FAF7F2] py-20 md:py-28 relative overflow-hidden text-[#1C1917] border-b border-[#E6DFD5]">
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

      <div className="section-container relative z-10 space-y-20 max-w-6xl mx-auto">

        {/* =========================================================================
            SECTION 1: THE PROBLEM vs THE SOLUTION (Luxury Glassmorphism Card Grid)
           ========================================================================= */}
        <div className="relative space-y-8">
          {/* Section Eyebrow Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9A481B]/10 border border-[#9A481B]/25 text-[#9A481B] text-xs font-bold tracking-[0.22em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE REALITY OF TEXTILE OPERATIONS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
              Replace Operational Friction With{" "}
              <span className="font-serif italic font-normal text-[#9A481B] border-b-2 border-[#9A481B]/30">
                Absolute Clarity.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">

            {/* LEFT COLUMN: THE PROBLEM CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 p-7 md:p-8 rounded-3xl bg-gradient-to-b from-rose-50/60 via-white to-white border border-rose-200/80 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                  <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-rose-700 bg-rose-100/70 px-3 py-1 rounded-full">
                    WITHOUT RESHAM (THE PROBLEM)
                  </span>
                  <span className="text-xs font-semibold text-rose-600/80">Disconnected Tools</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#1C1917] tracking-tight leading-snug">
                  Critical work gets <span className="italic font-normal text-rose-700">buried in chaos.</span>
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed font-medium">
                  Spreadsheets, paper registers and manual WhatsApp messages create blind spots that delay production and frustrate customers.
                </p>

                {/* Red Problem Points */}
                <div className="space-y-4 pt-2">
                  {problemPoints.map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full border border-rose-300 bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <MinusCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1917]">{item.title}</h4>
                        <p className="text-xs text-[#78716C] font-medium mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CENTER CONNECTOR (Desktop Badge) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border-2 border-[#D9CDBF] shadow-lg flex items-center justify-center text-[#9A481B]">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* RIGHT COLUMN: THE SOLUTION CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 p-7 md:p-8 rounded-3xl bg-gradient-to-b from-emerald-50/60 via-white to-white border border-emerald-200/80 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                  <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                    WITH RESHAM (THE SOLUTION)
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">100% Connected</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#1C1917] tracking-tight leading-snug">
                  One platform. <span className="italic font-normal text-emerald-700">Total operational control.</span>
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed font-medium">
                  RESHAM unifies customer orders, weaver capacity, stock quantities, POs and dispatch into one real-time operational engine.
                </p>

                {/* Green Solution Points */}
                <div className="space-y-4 pt-2">
                  {solutionPoints.map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full border border-emerald-400 bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1917]">{item.title}</h4>
                        <p className="text-xs text-[#78716C] font-medium mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =========================================================================
            SECTION 2: CORE CAPABILITIES (Modern Card Grid Layout)
           ========================================================================= */}
        <div className="space-y-10 pt-10 border-t border-[#E6DFD5]">

          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#9A481B] bg-[#9A481B]/10 px-3 py-1 rounded-full border border-[#9A481B]/20">
              CORE CAPABILITIES & MODULES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
              Everything Your Textile Business Needs. <br />
              <span className="font-serif italic font-normal text-[#9A481B]">
                Nothing Excess.
              </span>
            </h2>
          </div>

          {/* 6 Capability Cards Grid - Clean Gap Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white border border-[#E6DFD5] shadow-xs hover:shadow-xl hover:border-[#9A481B]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF5EF] border border-[#E8D9C8] text-[#9A481B] flex items-center justify-center shadow-2xs group-hover:bg-[#9A481B] group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#9A481B] bg-[#FAF5EF] px-2.5 py-1 rounded-md border border-[#E8D9C8]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1C1917] tracking-tight group-hover:text-[#9A481B] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#78716C]">
                      {item.subtext}
                    </p>

                    <p className="text-xs text-[#57534E] leading-relaxed font-normal pt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}




