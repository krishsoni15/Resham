"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import GooeyNav, { GooeyNavItem } from "@/components/gooey-nav";

const navItems: GooeyNavItem[] = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#demo-form" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy section detection
      const sections = ["product", "solutions", "pricing", "demo-form"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveNavIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-[1240px] mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-500 relative overflow-hidden ${scrolled
              ? "bg-stone-900/[0.04] backdrop-blur-xl border border-stone-900/10 shadow-sm"
              : "bg-transparent border border-transparent shadow-none"
            }`}
        >

          {/* LEFT SIDE: RESHAM Brand Logo & Wordmark (Home Link) */}
          <a href="#" className="relative z-10 flex items-center gap-2.5 group text-decoration-none py-1 shrink-0 pl-1" title="RESHAM Home">
            {/* Official RESHAM Woven Knot Logo */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-xs">
              <Image
                src="/images/logo.png"
                alt="RESHAM Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Official RESHAM Wordmark Image */}
            <div className="relative h-6 sm:h-6.5 w-28 sm:w-32 group-hover:brightness-110 transition-all">
              <Image
                src="/images/wordmark-clean.png"
                alt="RESHAM"
                fill
                unoptimized
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* CENTER / MIDDLE: GooeyNav React Bits Component */}
          <div className="relative z-10 hidden lg:flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <GooeyNav
              items={navItems}
              activeCategoryIndex={activeNavIndex}
              particleCount={12}
              particleDistances={[60, 10]}
              particleR={80}
              animationTime={500}
              timeVariance={250}
              colors={[1, 2, 3, 1]}
              onItemSelect={(index) => setActiveNavIndex(index)}
            />
          </div>

          {/* RIGHT SIDE: Animated Ultra-Glossy Prominent 'Book a Demo' CTA Action Button */}
          <div className="relative z-10 hidden lg:flex items-center shrink-0 pr-0.5">
            <a
              href="#demo-form"
              className="relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-xs font-black text-white uppercase tracking-widest rounded-full bg-gradient-to-r from-[#9A481B] via-[#B85721] to-[#81350E] border border-white/40 shadow-lg shadow-[#9A481B]/35 hover:shadow-xl hover:shadow-[#9A481B]/50 hover:scale-105 active:scale-98 transition-all duration-300 overflow-hidden group"
            >
              {/* Specular Inner Glint */}
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent pointer-events-none rounded-t-full" />
              {/* Metallic Light Shimmer Sweep Effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10">Book Free Demo</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile/Tablet Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-10 lg:hidden p-2.5 rounded-full text-[#1C1917] hover:bg-white/80 transition-colors shrink-0 ml-auto"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile & Tablet Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="mt-3 lg:hidden bg-[#FAF8F5]/98 backdrop-blur-2xl border border-[#E6DFD5] rounded-3xl p-6 space-y-4 shadow-2xl">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1C1917] hover:text-[#9A481B] py-1"
            >
              Home
            </a>
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1C1917] hover:text-[#9A481B] py-1"
            >
              Product
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1C1917] hover:text-[#9A481B] py-1"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1C1917] hover:text-[#9A481B] py-1"
            >
              Pricing
            </a>
            <a
              href="#demo-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1C1917] hover:text-[#9A481B] py-1"
            >
              Contact Us
            </a>
            <div className="pt-4 border-t border-[#E6DFD5]">
              <a
                href="#demo-form"
                onClick={() => setMobileMenuOpen(false)}
                className="relative inline-flex w-full items-center justify-center gap-2 text-sm font-extrabold text-white py-3 rounded-full bg-gradient-to-r from-[#9A481B] to-[#B85721] shadow-md shadow-[#9A481B]/30"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
