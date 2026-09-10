"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Calculator, Clock, TrendingUp } from "lucide-react";
import { pricing } from "@/lib/content";

export default function PricingAndImpactSection() {
  // Interactive ROI Calculator State
  const [monthlyOrders, setMonthlyOrders] = useState(150);

  // Estimator math
  const hoursSavedPerMonth = Math.round(monthlyOrders * 0.45);
  const estimatedCostSavedINR = Math.round(monthlyOrders * 850).toLocaleString("en-IN");

  return (
    <section id="pricing" className="section-padding bg-[#FAF9F6] border-b border-slate-200">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PLANS & ROI</span>
          </div>

          <h2 className="text-h1 text-slate-900 font-extrabold tracking-tight">
            Plans that grow with your textile operations.
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Choose the level of access that fits your current team and mill requirements. Include 21 days of full guided access.
          </p>
        </div>

        {/* =========================================================================
            Interactive Textile ROI Calculator Box
           ========================================================================= */}
        <div className="mb-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Instant Textile ROI Estimator
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  Drag the slider to match your monthly order volume
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              Guaranteed Operational Efficiency
            </span>
          </div>

          {/* Slider input */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold text-slate-800">
              <span>Monthly Customer & Weaver Orders:</span>
              <span className="text-amber-700 font-extrabold text-base">
                {monthlyOrders} Orders / Month
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={monthlyOrders}
              onChange={(e) => setMonthlyOrders(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <div className="flex justify-between text-[11px] font-semibold text-slate-600">
              <span>20 Small Boutique Orders</span>
              <span>250 Medium Mill Orders</span>
              <span>500+ Large Integrated Mill</span>
            </div>
          </div>

          {/* Calculated Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-amber-900">
                  ~{hoursSavedPerMonth} Hours / Month
                </div>
                <div className="text-xs font-bold text-amber-800">
                  Saved on manual phone calls & registers
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-emerald-900">
                  ₹{estimatedCostSavedINR}
                </div>
                <div className="text-xs font-bold text-emerald-800">
                  Estimated leakage recovered from lost stock & delays
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.tiers.map((tier, idx) => {
            const isFeatured = tier.featured;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${isFeatured
                  ? "bg-slate-900 text-white border-2 border-amber-500 shadow-2xl scale-[1.02]"
                  : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md"
                  }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    MOST POPULAR FOR MILLS
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3
                      className={`font-display font-extrabold text-2xl ${isFeatured ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-2 ${isFeatured ? "text-slate-300" : "text-slate-600"
                        }`}
                    >
                      {tier.description}
                    </p>
                  </div>

                  <div
                    className={`pt-4 border-t ${isFeatured ? "border-slate-800" : "border-slate-100"
                      }`}
                  >
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${isFeatured ? "text-amber-400" : "text-amber-700"
                        }`}
                    >
                      Included Features:
                    </span>
                    <ul className="mt-3 space-y-3">
                      {tier.highlights.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? "text-amber-400" : "text-emerald-600"
                              }`}
                          />
                          <span className={isFeatured ? "text-slate-200" : "text-slate-700"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/40">
                  <a
                    href="#demo-form"
                    className={`w-full justify-center ${isFeatured
                      ? "btn-primary py-3.5 text-sm"
                      : "btn-secondary py-3.5 text-sm"
                      }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
