"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  Crown,
  Shield,
  Settings,
  User,
  Briefcase,
  CheckCircle2,
  Lock,
  Globe,
  Monitor,
  WifiOff,
  Sparkles,
} from "lucide-react";
import { roles, platform, security } from "@/lib/content";

export default function MobileAndSecuritySection() {
  const [selectedRoleTitle, setSelectedRoleTitle] = useState("Master");

  const activeRole =
    roles.items.find((r) => r.title === selectedRoleTitle) || roles.items[0];

  const roleIcons: Record<string, any> = {
    Master: Crown,
    Superadmin: Shield,
    Admin: Settings,
    User: User,
    Party: Briefcase,
  };

  const rolePermissionsMap: Record<string, string[]> = {
    Master: [
      "Full System & Financial Controls",
      "Weaver Rate Master & Commission Rules",
      "Multi-Mill Ledger Access",
      "User Permission Overrides",
      "Complete Audit Logs",
    ],
    Superadmin: [
      "Operational Dashboard & Analytics",
      "Order Creation & Mill Allocation",
      "Purchase Order Approval",
      "Inventory & Stock Movements",
      "Staff Access Management",
    ],
    Admin: [
      "Order Status Updates & Dispatch",
      "Challan PDF Generation",
      "Grey & Finish Stock Logging",
      "Supplier Rate Recording",
    ],
    User: [
      "Assigned Order Entry",
      "Quality Check Inputs",
      "Dispatch Packing List View",
    ],
    Party: [
      "External Customer Order Tracking",
      "Dispatch & Delivery Status",
      "Copy of Order Invoices",
    ],
  };

  return (
    <section id="platform" className="section-padding bg-white border-b border-slate-200">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span>ENTERPRISE MOBILITY & SECURITY</span>
          </div>

          <h2 className="text-h1 text-slate-900 font-extrabold tracking-tight">
            Work anywhere. Control who sees what.
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Whether you are on the mill floor with your phone or at the office desktop, RESHAM keeps your data synchronized and protected with 5-level role security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Multi-Platform & Offline Sync */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                <span>CROSS-PLATFORM ENGINE</span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900">
                Your operations don&apos;t stop at the desk.
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Mill managers and dispatchers can enter updates directly from their mobile phones. Works online or offline in low-connectivity textile clusters.
              </p>
            </div>

            {/* Platform Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Desktop Web</div>
                  <div className="text-xs text-slate-500">Chrome, Safari, Edge</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">PWA App</div>
                  <div className="text-xs text-slate-500">1-Click Browser Install</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Android & iOS</div>
                  <div className="text-xs text-slate-500">Native Mobile Apps</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <WifiOff className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Offline Sync</div>
                  <div className="text-xs text-slate-500">Auto-syncs when online</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5-Level Role Security Matrix */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shadow-amber-600/20">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    5-Level Role Access Control
                  </h3>
                  <span className="text-xs text-amber-400 font-medium">
                    Strict permission isolation for staff & customers
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Role Buttons */}
            <div className="space-y-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Select a role to inspect permissions:
              </span>
              <div className="flex flex-wrap gap-2">
                {roles.items.map((role) => {
                  const Icon = roleIcons[role.title] || User;
                  const isSelected = selectedRoleTitle === role.title;
                  return (
                    <button
                      key={role.title}
                      onClick={() => setSelectedRoleTitle(role.title)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${isSelected
                          ? "bg-amber-500 text-white shadow-md"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                        }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{role.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Role Permissions Card */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-display font-bold text-base text-amber-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{activeRole.title} Access Scope</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Configurable
                </span>
              </div>

              <p className="text-xs text-slate-300">
                {activeRole.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                {(rolePermissionsMap[activeRole.title] || []).map((perm, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{perm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
