"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Globe,
  CheckCircle2,
  WifiOff,
  Bell,
  QrCode,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Layers,
  ShoppingBag,
} from "lucide-react";

export default function DeviceShowcaseSection() {
  const [activePlatform, setActivePlatform] = useState<"desktop" | "android" | "ios" | "pwa">("desktop");

  const platforms = [
    { id: "desktop", label: "Desktop Web App", icon: Monitor, badge: "Full Power" },
    { id: "android", label: "Android Native App", icon: Smartphone, badge: "Google Play" },
    { id: "ios", label: "iOS Native App", icon: Smartphone, badge: "Apple Store" },
    { id: "pwa", label: "PWA Web App", icon: Globe, badge: "1-Click Install" },
  ];

  return (
    <section className="section-padding bg-slate-900 text-white border-y border-slate-800 overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="section-container relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNIFIED MULTI-DEVICE ECOSYSTEM</span>
          </div>

          <h2 className="text-h1 text-white font-extrabold tracking-tight">
            One platform. Native on Desktop, Android & iOS.
          </h2>

          <p className="text-base md:text-lg text-slate-300 font-normal max-w-2xl mx-auto">
            Give your office admins full desktop controls while mill operators, weavers, and dispatch teams manage orders directly from their phones.
          </p>

          {/* Interactive Platform Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
            {platforms.map((plat) => {
              const Icon = plat.icon;
              const isActive = activePlatform === plat.id;
              return (
                <button
                  key={plat.id}
                  onClick={() => setActivePlatform(plat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${isActive
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-600/30 scale-105"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{plat.label}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-extrabold ${isActive ? "bg-white/20 text-white" : "bg-slate-700 text-slate-400"
                    }`}>
                    {plat.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Interactive Device Container */}
        <AnimatePresence mode="wait">
          {activePlatform === "desktop" && (
            <motion.div
              key="desktop"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold text-white">Desktop Web App • Full Operations Suite</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  256-Bit Encrypted
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-xs text-amber-400 font-bold">MULTI-PANE DASHBOARD</div>
                  <div className="text-sm font-bold text-white">405 Orders Managed</div>
                  <p className="text-xs text-slate-400">Full screen analytics, filter by financial year, batch export to Excel & PDF.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-xs text-amber-400 font-bold">WEAVER & MILL LEDGERS</div>
                  <div className="text-sm font-bold text-white">Real-time Rate Master</div>
                  <p className="text-xs text-slate-400">Track grey fabric deliveries, dyeing mill processing, and finish lot stock balance.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-xs text-amber-400 font-bold">5-LEVEL ROLE ISOLATION</div>
                  <div className="text-sm font-bold text-white">Master & Party Portals</div>
                  <p className="text-xs text-slate-400">Master users see full financials, while Party accounts see only their order dispatch status.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activePlatform === "android" && (
            <motion.div
              key="android"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto rounded-[36px] bg-slate-950 border-4 border-slate-800 p-6 shadow-2xl space-y-6 text-white"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-xs">Android Native App</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">v2.4 • Offline Ready</span>
              </div>

              {/* Simulated Phone Screen */}
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400">Mill Operator Mode</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold flex items-center gap-1">
                    <WifiOff className="w-3 h-3" />
                    <span>Auto Offline Sync</span>
                  </span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl space-y-1">
                  <div className="text-[11px] text-slate-400">Scan QR Roll Tag</div>
                  <div className="font-bold text-xs text-white">Lot #139 • LEHAL EXPORTS</div>
                  <div className="text-[10px] text-amber-400 font-bold">Status: Ready for Dispatch</div>
                </div>

                <button className="w-full btn-primary py-2 text-xs font-bold rounded-xl justify-center">
                  <QrCode className="w-4 h-4" />
                  <span>Scan QR Code with Camera</span>
                </button>
              </div>
            </motion.div>
          )}

          {activePlatform === "ios" && (
            <motion.div
              key="ios"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto rounded-[36px] bg-slate-950 border-4 border-slate-800 p-6 shadow-2xl space-y-6 text-white"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-indigo-400" />
                  <span className="font-bold text-xs">iOS Native App (iPhone & iPad)</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Apple App Store</span>
              </div>

              {/* Simulated Push Notification */}
              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1 shadow-md">
                  <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold">
                    <span className="flex items-center gap-1">
                      <Bell className="w-3 h-3" />
                      <span>RESHAM Alert</span>
                    </span>
                    <span>Just Now</span>
                  </div>
                  <div className="text-xs font-bold text-white">Order #139 Dispatched!</div>
                  <div className="text-[10px] text-slate-300">LEHAL EXPORTS delivery challan generated & sent via WhatsApp.</div>
                </div>
              </div>
            </motion.div>
          )}

          {activePlatform === "pwa" && (
            <motion.div
              key="pwa"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-2xl space-y-4 text-white text-center"
            >
              <Globe className="w-10 h-10 text-amber-400 mx-auto" />
              <h3 className="font-display font-bold text-xl text-white">
                Progressive Web App (PWA)
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                No app store required! Open `app.resham.in` on any phone or PC browser, click &quot;Install App&quot;, and run it instantly like a desktop software with offline storage.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
