"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  FileText,
  Activity,
  ShieldCheck,
  Download,
  CheckCircle2,
  Lock,
  Sparkles,
  QrCode,
  Zap,
  Server,
} from "lucide-react";

export default function ExportAndTrustSection() {
  const [activeTab, setActiveTab] = useState<"excel" | "pdf" | "logs" | "security">("excel");
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const triggerSimulation = () => {
    setIsExporting(true);
    setExportSuccess(false);
    setTimeout(() => {
      setIsExporting(false);
      setExportSuccess(true);
    }, 800);
  };

  return (
    <section className="section-padding bg-white border-b border-slate-200">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXCEL, PDF EXPORTS & AUDIT LOGS</span>
          </div>

          <h2 className="text-h1 text-slate-900 font-extrabold tracking-tight">
            Your data is 100% portable, secure, & traceable.
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Export full customer ledgers to Excel anytime. Generate instant PDF challans with QR codes. Every change is logged for complete audit peace of mind.
          </p>

          {/* Interactive Feature Mode Switches */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
            <button
              onClick={() => { setActiveTab("excel"); setExportSuccess(false); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "excel"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Excel (.xlsx) Export</span>
            </button>

            <button
              onClick={() => { setActiveTab("pdf"); setExportSuccess(false); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "pdf"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              <FileText className="w-4 h-4" />
              <span>PDF & QR Engine</span>
            </button>

            <button
              onClick={() => setActiveTab("logs")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "logs"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              <Activity className="w-4 h-4" />
              <span>System Activity Logs</span>
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "security"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Trust & Security</span>
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Interactive Excel Export Simulator */}
        {activeTab === "excel" && (
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Excel (.xlsx) Data Exporter
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    1-Click download for full order lists, yarn ledgers, & stock reports
                  </span>
                </div>
              </div>

              <button
                onClick={triggerSimulation}
                disabled={isExporting}
                className="btn-primary bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-5 text-xs font-bold rounded-xl"
              >
                <Download className="w-4 h-4" />
                <span>{isExporting ? "Generating .xlsx..." : "Simulate Excel Export"}</span>
              </button>
            </div>

            {exportSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-bounce">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Success: `RESHAM_Orders_FY2026.xlsx` downloaded successfully!</span>
              </div>
            )}

            {/* Simulated Excel Spreadsheet Preview */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 text-xs font-mono">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-700 text-white font-bold text-[11px]">
                    <th className="p-2.5 border-r border-emerald-600">Order ID</th>
                    <th className="p-2.5 border-r border-emerald-600">Party Name</th>
                    <th className="p-2.5 border-r border-emerald-600">Process Type</th>
                    <th className="p-2.5 border-r border-emerald-600">Quantity (Metres)</th>
                    <th className="p-2.5 border-r border-emerald-600">Delivery Date</th>
                    <th className="p-2.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="hover:bg-emerald-50/50">
                    <td className="p-2.5 border-r font-bold">#139</td>
                    <td className="p-2.5 border-r">LEHAL EXPORTS</td>
                    <td className="p-2.5 border-r text-indigo-700 font-semibold">Printing</td>
                    <td className="p-2.5 border-r font-bold">1,250 Mtr</td>
                    <td className="p-2.5 border-r">10/09/2026</td>
                    <td className="p-2.5 font-bold text-amber-700">Pending</td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50">
                    <td className="p-2.5 border-r font-bold">#138</td>
                    <td className="p-2.5 border-r">SHAH TEXTILES PVT LTD</td>
                    <td className="p-2.5 border-r text-orange-700 font-semibold">Dying</td>
                    <td className="p-2.5 border-r font-bold">3,400 Mtr</td>
                    <td className="p-2.5 border-r">12/09/2026</td>
                    <td className="p-2.5 font-bold text-indigo-700">In Production</td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50">
                    <td className="p-2.5 border-r font-bold">#137</td>
                    <td className="p-2.5 border-r">GUJARAT SILK MILLS</td>
                    <td className="p-2.5 border-r text-orange-700 font-semibold">Dying</td>
                    <td className="p-2.5 border-r font-bold">2,100 Mtr</td>
                    <td className="p-2.5 border-r">08/09/2026</td>
                    <td className="p-2.5 font-bold text-emerald-700">Delivered</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: PDF & QR Engine */}
        {activeTab === "pdf" && (
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Automated PDF & QR Document Engine
                  </h3>
                  <span className="text-xs text-amber-400 font-medium">
                    Generate Purchase Orders, Delivery Challans & QR Fabric Roll Stickers
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <QrCode className="w-6 h-6 text-amber-400" />
                <div className="font-bold text-sm text-white">QR Roll Tags & Stickers</div>
                <p className="text-xs text-slate-400">Print QR stickers directly for grey fabric lots and finished rolls for instant mobile scanning.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <FileText className="w-6 h-6 text-amber-400" />
                <div className="font-bold text-sm text-white">1-Click Delivery Challans</div>
                <p className="text-xs text-slate-400">Generates branded PDF invoices with GST details, transport party, & delivery signatures.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: System Activity Audit Logs Stream */}
        {activeTab === "logs" && (
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Real-Time System Audit Logs
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    Immutable history of every user action, rate update, & dispatch
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {[
                { time: "10 Sep 00:48", user: "Master Admin", action: "Updated Weaver Rate for Silk Crepe 80GSM (₹42/Mtr)", ip: "103.24.12.5" },
                { time: "09 Sep 18:22", user: "Admin User", action: "Generated PO-2026-049 for Premier Yarn Suppliers", ip: "103.24.12.8" },
                { time: "09 Sep 14:15", user: "Mill Manager", action: "Marked Order #139 (LEHAL EXPORTS) status as Printing Complete", ip: "115.99.4.12" },
                { time: "09 Sep 02:00", user: "System", action: "Automated Encrypted Cloud Backup Completed (2.4 GB)", ip: "INTERNAL" },
              ].map((log, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-amber-400 font-bold">{log.time}</span> • <span className="text-indigo-400 font-bold">{log.user}</span>
                    <div className="text-slate-300 font-sans text-xs mt-0.5">{log.action}</div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">IP: {log.ip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Trust & Enterprise Security */}
        {activeTab === "security" && (
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Enterprise Data Protection & Compliance
                  </h3>
                  <span className="text-xs text-amber-400 font-medium">
                    Strict encryption, isolated client databases, & 99.9% uptime
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <Server className="w-5 h-5 text-emerald-400" />
                <div className="font-bold text-white text-sm">Daily Automated Backups</div>
                <p className="text-slate-400">Automatic daily backups stored across redundant cloud storage nodes.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <div className="font-bold text-white text-sm">256-Bit SSL Encryption</div>
                <p className="text-slate-400">All data in transit and at rest encrypted using military-grade AES-256.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <div className="font-bold text-white text-sm">99.9% Uptime Guarantee</div>
                <p className="text-slate-400">High availability infrastructure engineered for uninterrupted mill operations.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
