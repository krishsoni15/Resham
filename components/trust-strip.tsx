"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  FileSpreadsheet,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
  UserCheck,
  Sparkles,
} from "lucide-react";

// Scroll-triggered count-up animation component
function CounterNumber({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 1200;
    const increment = Math.max(1, Math.ceil(end / (duration / 16)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function TrustStrip() {
  const trustHighlights = [
    { icon: Sparkles, label: "AI-Powered Textile Assistant" },
    { icon: UserCheck, label: "Easy for Any Mill Staff (Zero Training)" },
    { icon: ShieldCheck, label: "High Security & Encrypted Data" },
    { icon: FileSpreadsheet, label: "Instant Automated Reports" },
    { icon: CheckCircle2, label: "Full GST & E-Way Ready" },
  ];

  return (
    <section className="bg-[#F5F0E8] border-y border-[#E5DDD0] py-3.5 sm:py-5 relative overflow-hidden">
      {/* Background Subtle Weave Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#9A481B 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-3.5">
        
        {/* Seamless Real Proof & Animated Metrics Bar (Unified Single Row) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center lg:justify-between gap-x-4 sm:gap-x-5 gap-y-2 text-[#1C1917]"
        >
          {/* Review */}
          <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xs sm:text-sm whitespace-nowrap shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
            <span className="text-[#9A481B] font-black ml-1 text-xs sm:text-sm">5/5 Review</span>
          </div>

          <div className="h-3.5 w-px bg-[#D8CDBB] hidden sm:block shrink-0" />

          {/* Client Proof */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#44403C] whitespace-nowrap shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>
              Trusted by <strong className="text-[#9A481B] font-extrabold">Viral Fabrics</strong> (2+ Years Live)
            </span>
          </div>

          <div className="h-3.5 w-px bg-[#D8CDBB] hidden lg:block shrink-0" />

          {/* Metric 1: 10k+ Orders */}
          <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <TrendingUp className="w-4 h-4 text-[#9A481B] shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-black text-[#9A481B]">
              <CounterNumber target={10} suffix="k+" />
            </span>
            <span className="text-[#57534E] text-[11px] sm:text-xs font-bold">Orders Managed</span>
          </div>

          <div className="h-3.5 w-px bg-[#D8CDBB] hidden sm:block shrink-0" />

          {/* Metric 2: 100+ Daily Active Users */}
          <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <Users className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-black text-emerald-700">
              <CounterNumber target={100} suffix="+" />
            </span>
            <span className="text-[#57534E] text-[11px] sm:text-xs font-bold">Daily Active Users</span>
          </div>

          <div className="h-3.5 w-px bg-[#D8CDBB] hidden sm:block shrink-0" />

          {/* Metric 3: 100+ Hours Saved / Mo */}
          <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-black text-amber-700">
              <CounterNumber target={100} suffix="+" />
            </span>
            <span className="text-[#57534E] text-[11px] sm:text-xs font-bold">Hours Saved / Mo</span>
          </div>
        </motion.div>

        {/* Operational Capabilities Strip */}
        <div className="pt-2.5 border-t border-[#E5DDD0] flex flex-wrap items-center justify-center sm:justify-between gap-x-5 sm:gap-x-6 gap-y-1.5 text-[11px] sm:text-xs font-bold text-[#57534E]">
          {trustHighlights.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 whitespace-nowrap">
              <item.icon className="w-3.5 h-3.5 text-[#9A481B] shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}





