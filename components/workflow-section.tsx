"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ClipboardList,
  Cpu,
  Layers,
  Sliders,
  CheckSquare,
  Truck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      step: "01",
      title: "Orders",
      subtitle: "Customer enquiries to confirmed orders",
      icon: ClipboardList,
      color: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50 border-amber-200 text-amber-700",
    },
    {
      step: "02",
      title: "Weaving",
      subtitle: "Manage weavers & production",
      icon: Cpu,
      color: "from-orange-500 to-amber-700",
      accentBg: "bg-orange-50 border-orange-200 text-orange-700",
    },
    {
      step: "03",
      title: "Materials",
      subtitle: "Track yarn & grey material stock",
      icon: Layers,
      color: "from-amber-600 to-yellow-600",
      accentBg: "bg-amber-50 border-amber-200 text-amber-800",
    },
    {
      step: "04",
      title: "Production",
      subtitle: "Monitor every stage",
      icon: Sliders,
      color: "from-amber-700 to-orange-800",
      accentBg: "bg-orange-50 border-orange-200 text-orange-800",
    },
    {
      step: "05",
      title: "Finish Lots",
      subtitle: "Track finished stock",
      icon: CheckSquare,
      color: "from-orange-600 to-amber-800",
      accentBg: "bg-amber-50 border-amber-200 text-amber-900",
    },
    {
      step: "06",
      title: "Dispatch",
      subtitle: "From mill to delivery",
      icon: Truck,
      color: "from-amber-800 to-stone-900",
      accentBg: "bg-stone-100 border-stone-300 text-stone-900",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E6DFD5] relative overflow-hidden">
      {/* Background Subtle Textile Weave Line Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#9A481B 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9A481B]/10 border border-[#9A481B]/25 text-[#9A481B] text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FROM ORDER TO DISPATCH</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-tight">
            A connected workflow for a{" "}
            <span className="font-serif italic text-[#9A481B] font-normal border-b-2 border-[#9A481B]/30">
              smoother business.
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#78716C] font-medium max-w-2xl mx-auto">
            Every textile stage linked seamlessly — from initial enquiry to final fabric delivery at the customer door.
          </p>
        </div>

        {/* 1-Line Horizontal Workflow Container */}
        <div className="relative pt-6 pb-4">
          {/* Main Connecting Thread/Line (Desktop Horizontal) */}
          <div className="hidden lg:block absolute top-[52px] left-[40px] right-[160px] h-[3px] bg-gradient-to-r from-[#D9CDBF] via-[#9A481B] to-[#D9CDBF] z-0 rounded-full shadow-sm">
            {/* Animated Pulses running along thread line */}
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-24 h-full bg-gradient-to-r from-transparent via-[#9A481B] to-transparent opacity-80"
            />
          </div>

          {/* Grid Layout for Steps + Yarn Spool Graphic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3 items-center">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative z-10 group"
                >
                  <div className="p-5 rounded-2xl bg-white border border-[#E6DFD5] shadow-sm hover:shadow-xl hover:border-[#9A481B]/40 transition-all duration-300 flex flex-col items-center text-center h-full min-h-[210px] justify-between">
                    {/* Node Icon Circle */}
                    <div className="relative mb-3">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#E6DFD5] text-[10px] font-extrabold text-[#78716C] flex items-center justify-center shadow-xs">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="space-y-1 mt-1">
                      <h3 className="text-base font-bold text-[#1C1917] tracking-tight group-hover:text-[#9A481B] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#78716C] leading-snug font-medium">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Mobile Arrow Connector */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden mt-3 flex justify-center text-[#9A481B]/40">
                        <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* 7th Column: Yarn Spool Graphic / Thread Roll (As shown in Reference Mockup) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-1 flex flex-col items-center justify-center relative group"
            >
              <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-[#FAF5EF] to-[#F2E8DC] border border-[#E2D6C5] p-3 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/yarn-spool.png"
                    alt="Textile Yarn Spool Streamlined Flow"
                    fill
                    className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#9A481B] mt-2 bg-white/80 px-2.5 py-1 rounded-full border border-[#E6DFD5] shadow-2xs">
                Seamless Thread
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

