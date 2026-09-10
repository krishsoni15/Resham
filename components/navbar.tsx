"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { navigation } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E6DFD5] py-3.5"
          : "bg-transparent py-5"
        }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand Logo Mark */}
        <a href="#" className="flex items-center gap-2.5 group text-decoration-none py-1">
          {/* Official RESHAM Woven Knot Logo */}
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="RESHAM Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Official RESHAM Wordmark Image */}
          <div className="relative h-5 sm:h-5.5 w-28 sm:w-32 group-hover:brightness-110 transition-all">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#product"
            className="text-sm font-medium text-[#44403C] hover:text-[#9A481B] transition-colors"
          >
            Product
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium text-[#44403C] hover:text-[#9A481B] transition-colors"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-[#44403C] hover:text-[#9A481B] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#platform"
            className="text-sm font-medium text-[#44403C] hover:text-[#9A481B] transition-colors"
          >
            Resources
          </a>
        </nav>

        {/* Desktop CTA Action (Sign In Removed) */}
        <div className="hidden md:flex items-center">
          <a
            href="#demo-form"
            className="btn-primary py-2.5 px-6 text-xs rounded-xl shadow-md shadow-[#9A481B]/20"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#1C1917] hover:bg-[#E8E1D5]/50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E6DFD5] px-6 py-6 space-y-4 shadow-xl">
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
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#1C1917] hover:text-[#9A481B] py-1"
          >
            Resources
          </a>
          <div className="pt-4 border-t border-[#E6DFD5]">
            <a
              href="#demo-form"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full justify-center text-sm py-3"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
