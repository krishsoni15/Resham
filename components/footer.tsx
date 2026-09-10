"use client";

import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-slate-400 border-t border-[#332D27] text-xs py-14">
      <div className="section-container space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#332D27]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 shrink-0">
              <Image
                src="/images/logo.png"
                alt="RESHAM Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="relative h-6.5 w-36">
                <Image
                  src="/images/wordmark-light-clean.png"
                  alt="RESHAM"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
              <span className="block text-[10px] font-semibold text-[#D0C5B8] -mt-0.5">
                {footer.descriptor}
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 font-medium text-slate-300">
            <a href="#product" className="hover:text-amber-400 transition-colors">
              Product Studio
            </a>
            <a href="#solutions" className="hover:text-amber-400 transition-colors">
              Solutions
            </a>
            <a href="#platform" className="hover:text-amber-400 transition-colors">
              Platform & Security
            </a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">
              Pricing & ROI
            </a>
            <a href="#demo-form" className="hover:text-amber-400 transition-colors">
              Book Demo
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            © {new Date().getFullYear()} RESHAM Textile Operations Management Platform. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
