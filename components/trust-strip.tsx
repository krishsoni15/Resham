"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ShieldCheck,
  Building2,
  MapPin,
  CheckCircle2,
  FileSpreadsheet,
  Award,
  Layers,
} from "lucide-react";

export default function TrustStrip() {
  const textileHubs = [
    { city: "Surat", label: "Silk & Synthetic Hub", icon: Building2 },
    { city: "Tirupur", label: "Knitwear & Export Hub", icon: Building2 },
    { city: "Ahmedabad", label: "Cotton & Denim Mills", icon: Building2 },
    { city: "Ludhiana", label: "Yarn & Woolen Hub", icon: Building2 },
    { city: "Mumbai", label: "Textile Trading & Exports", icon: Building2 },
  ];

  const trustHighlights = [
    { icon: Globe, label: "Web & PWA Offline Ready" },
    { icon: Smartphone, label: "Native Android & iOS Apps" },
    { icon: ShieldCheck, label: "Bank-Grade Encryption" },
    { icon: FileSpreadsheet, label: "Instant Excel & PDF Export" },
    { icon: Award, label: "GST & E-Way Compliance" },
  ];

  return (
    <section className="bg-[#F3EEE6] border-y border-[#E6DFD5] py-8 relative overflow-hidden">
      {/* Background Subtle Weave Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#9A481B 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="section-container relative z-10 space-y-6">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A481B]/10 border border-[#9A481B]/20 text-[#9A481B] text-[11px] font-extrabold uppercase tracking-[0.2em]">
            <MapPin className="w-3 h-3 text-[#9A481B]" />
            <span>TRUSTED ACROSS INDIA&apos;S MAJOR TEXTILE HUBS</span>
          </div>
          <p className="text-xs md:text-sm font-semibold text-[#57534E]">
            Empowering 500+ textile manufacturers, weavers, dyers and exporters in leading textile clusters
          </p>
        </div>

        {/* Textile Hubs Logo Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-1">
          {textileHubs.map((hub, idx) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03, backgroundColor: "#ffffff" }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-[#E2D8C8] shadow-2xs transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-lg bg-[#FAF5EF] border border-[#E8DCCB] text-[#9A481B] flex items-center justify-center shrink-0">
                <hub.icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-[#1C1917] leading-tight flex items-center gap-1">
                  {hub.city}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                </span>
                <span className="text-[10px] font-medium text-[#78716C] leading-tight">
                  {hub.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational & Trust Badges Strip */}
        <div className="pt-3 border-t border-[#E6DFD5]/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-bold text-[#44403C]">
          {trustHighlights.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-[#9A481B]" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

