"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Scissors,
  UserCog,
  Layers,
  FlaskConical,
  Package,
  ShoppingCart,
  Activity,
  Download,
  Filter,
  Maximize2,
  Moon,
  Sun,
  CheckCircle2,
  Clock,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
  FileText,
  Calendar,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";

interface RealAppDashboardPreviewProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function RealAppDashboardPreview({
  activeTab: externalActiveTab,
  onTabChange,
}: RealAppDashboardPreviewProps = {}) {
  const [internalActiveTab, setInternalActiveTab] = useState<string>("dashboard");

  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;

  const handleTabChange = (tab: string) => {
    setInternalActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedUserRole, setSelectedUserRole] = useState<string>("All Roles");
  const [currentUserRole, setCurrentUserRole] = useState<string>("Master Admin");
  const [activeModal, setActiveModal] = useState<{
    type: "grey" | "lab" | "mill_input" | "mill_output" | "dispatch" | "details" | "edit" | "delete" | "add_user" | "add_fabric" | "add_weaver" | "add_po" | "add_stock" | null;
    orderId: string;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [orderStatus, setOrderStatus] = useState<Record<string, string>>({
    "155": "Pending",
    "154": "Pending",
  });
  const [aiQuery, setAiQuery] = useState("");
  const [aiThinking, setAiThinking] = useState(false);
  const [aiMessages, setAiMessages] = useState<Array<{ role: "user" | "ai"; text: string }>>([
    {
      role: "ai",
      text: "Hello! I am RESHAM Operational Intelligence AI. I continuously monitor mill yields, shrinkage variances, order delivery SLAs, and yarn PO rates. How can I assist your operations today?",
    },
  ]);

  const handleSendAiMessage = (queryText?: string) => {
    const textToSend = queryText || aiQuery;
    if (!textToSend.trim()) return;

    const newMsgs = [...aiMessages, { role: "user" as const, text: textToSend }];
    setAiMessages(newMsgs);
    setAiQuery("");
    setAiThinking(true);

    setTimeout(() => {
      let reply = "Operational Analysis complete. All systems operating within target SLAs.";
      const lower = textToSend.toLowerCase();
      if (lower.includes("155") || lower.includes("lehal")) {
        reply = "Order #155 (LEHAL EXPORTS - 950M Nv Mastani Dyed): Dyeing inward recorded at J P Kachiwala Mill. Delivery SLA 30/09/2026 is ON TRACK. Shrinkage yield projection: 98.6%.";
      } else if (lower.includes("po") || lower.includes("yarn") || lower.includes("kailash")) {
        reply = "Yarn Purchase Orders Summary: PO #012 issued to KAILASH WEAVES (3,400 Mtr Grey Bolt Bubble Lycra) at ₹37/Mtr. Negotiated rate saved 8.4% compared to market benchmark.";
      } else if (lower.includes("mill") || lower.includes("yield") || lower.includes("shrinkage")) {
        reply = "Mill Yield Audit: Active dyeing mills (J P Kachiwala & Mony Prints) reporting 98.6% average finished yield. Zero defect anomalies detected across recent 12 lots.";
      } else {
        reply = `RESHAM AI Analysis for "${textToSend}": Verified across 405 total historical orders, 12 registered weavers, and 24 active grey stock lots. No operational bottlenecks detected.`;
      }
      setAiMessages([...newMsgs, { role: "ai", text: reply }]);
      setAiThinking(false);
    }, 1000);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const sidebarLinks = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "orders", label: "Orders", icon: ClipboardList, badge: "19" },
    { id: "fabrics", label: "Fabrics", icon: Scissors },
    { id: "weaver", label: "Weaver", icon: UserCog },
    { id: "grey-stock", label: "Grey Material Stock", icon: Layers },
    { id: "sampling", label: "Sampling", icon: FlaskConical },
    { id: "finish-stock", label: "Finish Lot Stock", icon: Package },
    { id: "purchase-orders", label: "Purchase Orders", icon: ShoppingCart },
    { id: "logs", label: "Logs", icon: Activity },
    { id: "ai-assistant", label: "RESHAM AI", icon: Sparkles, badge: "AI" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden font-sans text-slate-900">
      {/* App Main Bar */}
      <div className="bg-[#FAFBFD] border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
        {/* Brand Header */}
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 shrink-0">
            <Image
              src="/images/logo.png"
              alt="RESHAM Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xs text-slate-800 tracking-tight">Viral Fabrics /</span>
              <div className="relative h-4.5 w-24">
                <Image
                  src="/images/wordmark-clean.png"
                  alt="RESHAM"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </div>
            <div className="text-[9px] font-semibold text-slate-600 tracking-wider uppercase">
              MFG & SUPPLIER OF ALL TYPE OF EXPORT
            </div>
          </div>
        </div>

        {/* Action icons right */}
        <div className="flex items-center gap-3 text-slate-600">
          <button className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg px-2.5 py-1">
            <span>‹ Collapse</span>
          </button>
          <button className="p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors">
            <Moon className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-sm shrink-0">
              {currentUserRole[0]}
            </div>
            <select
              value={currentUserRole}
              onChange={(e) => {
                setCurrentUserRole(e.target.value);
                triggerToast(`Active user role switched to: ${e.target.value}`);
              }}
              className="text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:border-indigo-500 cursor-pointer shadow-xs"
            >
              <option value="Master Admin">👑 Master Admin</option>
              <option value="Admin">⚡ Admin</option>
              <option value="Accounts / Party">💼 Accounts / Party</option>
              <option value="User / Staff">🛠️ User / Staff</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout Body */}
      <div className="flex flex-col md:flex-row min-h-[540px] bg-[#F4F6FC]">
        {/* Left Sidebar Menu */}
        <div className="w-full md:w-56 bg-white border-r border-slate-200/80 p-3 space-y-1 shrink-0">
          <div className="text-[10px] font-bold text-slate-600 uppercase px-3 py-1.5 tracking-wider">
            Navigation
          </div>

          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleTabChange(link.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${isActive
                  ? "bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100"
                  : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-600"}`} />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-6 px-3 border-t border-slate-100 mt-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                {currentUserRole[0]}
              </div>
              <div className="text-[11px] truncate">
                <div className="font-bold text-slate-900 truncate">Active Persona</div>
                <div className="text-[9px] text-indigo-600 font-extrabold truncate">{currentUserRole}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Dynamic View Area */}
        <div className="flex-1 p-4 sm:p-6 space-y-6 overflow-x-auto">
          {/* View Toolbar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-sm"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>
              {filterOpen && (
                <span className="text-xs text-indigo-600 font-medium animate-pulse">
                  Filtering by Current FY (2026-2027)
                </span>
              )}
            </div>

            <button
              onClick={() => triggerToast("Full Database backup exported (Excel & JSON logs)")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Backup</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {/* 1. DASHBOARD VIEW (Matching Exact Screenshot) */}
            {activeTab === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* 3 Top Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Total Orders Card */}
                  <div className="p-5 rounded-2xl bg-[#EEF2FF] border border-indigo-100 shadow-sm flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-600">Total Orders</div>
                      <div className="font-display font-extrabold text-3xl text-slate-900">405</div>
                      <div className="text-[11px] text-slate-500 font-medium">All time orders</div>
                      <button
                        onClick={() => handleTabChange("orders")}
                        className="text-xs font-bold text-indigo-600 hover:underline pt-1 block"
                      >
                        Click to view →
                      </button>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Pending Orders Card */}
                  <div className="p-5 rounded-2xl bg-[#FEFCE8] border border-amber-200/80 shadow-sm flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-600">Pending Orders</div>
                      <div className="font-display font-extrabold text-3xl text-slate-900">19</div>
                      <div className="text-[11px] text-amber-800 font-medium">Awaiting processing</div>
                      <button
                        onClick={() => handleTabChange("orders")}
                        className="text-xs font-bold text-amber-700 hover:underline pt-1 block"
                      >
                        Click to view →
                      </button>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-amber-500 flex items-center justify-center shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Delivered Orders Card */}
                  <div className="p-5 rounded-2xl bg-[#F0FDF4] border border-emerald-200/80 shadow-sm flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-600">Delivered Orders</div>
                      <div className="font-display font-extrabold text-3xl text-slate-900">386</div>
                      <div className="text-[11px] text-emerald-800 font-medium">Successfully delivered</div>
                      <button
                        onClick={() => handleTabChange("orders")}
                        className="text-xs font-bold text-emerald-700 hover:underline pt-1 block"
                      >
                        Click to view →
                      </button>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* 2 Donut Charts Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Pending Orders by Type Chart */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>Pending Orders by Type</span>
                    </div>

                    {/* Donut graphic */}
                    <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-orange-500"
                          strokeDasharray="79 100"
                          strokeWidth="5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-indigo-600"
                          strokeDasharray="21 100"
                          strokeDashoffset="-79"
                          strokeWidth="5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <div className="font-display font-extrabold text-2xl text-slate-900">19</div>
                        <div className="text-[10px] text-slate-600 font-bold">Total Pending</div>
                      </div>
                    </div>

                    {/* Legend Table */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-orange-500" />
                          <span className="font-bold text-slate-800">Dying</span>
                        </div>
                        <div className="font-extrabold text-slate-900">
                          15 <span className="text-[10px] text-slate-600 font-medium">(78.9%)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-indigo-600" />
                          <span className="font-bold text-slate-800">Printing</span>
                        </div>
                        <div className="font-extrabold text-slate-900">
                          4 <span className="text-[10px] text-slate-600 font-medium">(21.1%)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivered Orders by Type Chart */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Delivered Orders by Type</span>
                    </div>

                    {/* Donut graphic */}
                    <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-orange-500"
                          strokeDasharray="49 100"
                          strokeWidth="5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-indigo-600"
                          strokeDasharray="51 100"
                          strokeDashoffset="-49"
                          strokeWidth="5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <div className="font-display font-extrabold text-2xl text-slate-900">386</div>
                        <div className="text-[10px] text-slate-600 font-bold">Total Delivered</div>
                      </div>
                    </div>

                    {/* Legend Table */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-orange-500" />
                          <span className="font-bold text-slate-800">Dying</span>
                        </div>
                        <div className="font-extrabold text-slate-900">
                          190 <span className="text-[10px] text-slate-600 font-medium">(49.2%)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-indigo-600" />
                          <span className="font-bold text-slate-800">Printing</span>
                        </div>
                        <div className="font-extrabold text-slate-900">
                          196 <span className="text-[10px] text-slate-600 font-medium">(50.8%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivered Soon Table */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-indigo-600" />
                      <span className="font-display font-bold text-sm text-slate-900">
                        Delivered Soon
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                        Next 7 Days
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-600 font-mono text-[11px] border border-slate-200 px-2 py-1 rounded">
                        dd/mm/yyyy
                      </span>
                      <button className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px]">
                        Refresh
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                          <th className="py-2 px-3">Order Details</th>
                          <th className="py-2 px-3">Party</th>
                          <th className="py-2 px-3">Delivery Date</th>
                          <th className="py-2 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-50 hover:bg-slate-50/80">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">#139</div>
                            <div className="text-[10px] text-slate-600">Printing • 1 item</div>
                          </td>
                          <td className="py-3 px-3 font-bold text-slate-800">
                            LEHAL EXPORTS
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">10/09/2026</div>
                            <div className="text-[10px] text-rose-600 font-bold flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>Tomorrow</span>
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold">
                              Pending
                            </span>
                          </td>
                        </tr>

                        <tr className="border-b border-slate-50 hover:bg-slate-50/80">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">#138</div>
                            <div className="text-[10px] text-slate-600">Dying • 3 items</div>
                          </td>
                          <td className="py-3 px-3 font-bold text-slate-800">
                            SHAH TEXTILES PVT LTD
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">12/09/2026</div>
                            <div className="text-[10px] text-slate-600">In 2 days</div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-extrabold">
                              In Production
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. USERS VIEW (Enhanced with 4 Roles & Filters) */}
            {activeTab === "users" && (
              <motion.div
                key="users"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs w-56 focus:outline-none focus:border-indigo-500"
                    />
                    <select
                      value={selectedUserRole}
                      onChange={(e) => setSelectedUserRole(e.target.value)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 bg-white"
                    >
                      <option value="All Roles">All Roles (4 Types)</option>
                      <option value="Master Admin">Master Admin</option>
                      <option value="Admin">Admin</option>
                      <option value="Accounts / Party">Accounts / Party</option>
                      <option value="User / Staff">User / Staff</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setActiveModal({ type: "add_user", orderId: "new" })}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors"
                  >
                    + Add User
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3 px-4">User</th>
                        <th className="py-3 px-4">Role Permission</th>
                        <th className="py-3 px-4">Contact Info</th>
                        <th className="py-3 px-4">Created</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { name: "surrender", sub: "surender", role: "Accounts / Party", roleStyle: "bg-emerald-100 text-emerald-800 border-emerald-200", contact: "9157642030 (LEHAL EXPORTS)", date: "Jul 25, 2026" },
                        { name: "Master", sub: "master (You)", role: "Master Admin", roleStyle: "bg-rose-100 text-rose-800 border-rose-200", contact: "Master Operational Access", date: "Jun 12, 2026" },
                        { name: "Super Admin", sub: "superadmin", role: "Admin", roleStyle: "bg-purple-100 text-purple-800 border-purple-200", contact: "Admin System Control", date: "Nov 10, 2025" },
                        { name: "Sanjay", sub: "sanjay2030", role: "User / Staff", roleStyle: "bg-slate-100 text-slate-700 border-slate-200", contact: "7405563899 (Mill Entry)", date: "Dec 8, 2025" },
                        { name: "Rajesh Patel", sub: "rajesh3366", role: "User / Staff", roleStyle: "bg-slate-100 text-slate-700 border-slate-200", contact: "9925904422 (Despatch Entry)", date: "Dec 3, 2025" },
                      ]
                        .filter((u) => selectedUserRole === "All Roles" || u.role === selectedUserRole)
                        .map((u, i) => (
                          <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                                  {u.name[0]}
                                </div>
                                <div>
                                  <div className="font-bold text-slate-900">{u.name}</div>
                                  <div className="text-[10px] text-slate-500">{u.sub}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${u.roleStyle}`}>
                                {u.role}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-slate-600 font-medium">
                              {u.contact}
                            </td>
                            <td className="py-3 px-4 text-slate-500">
                              {u.date}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button className="text-slate-400 hover:text-indigo-600 font-bold px-2 py-1">
                                ✎ Edit
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* 3. ORDERS VIEW (Exact Cards layout from amplifyapp screenshot) */}
            {activeTab === "orders" && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Order #155 Card */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                    {/* Order ID & Type */}
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 space-y-1">
                      <div className="font-extrabold text-base text-emerald-800">Order ID: 155</div>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold text-[11px]">
                        Order Type: Dying
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 space-y-1">
                      <div className="font-bold text-indigo-900">Order Details</div>
                      <div className="text-slate-700">PO: <span className="font-extrabold">685</span></div>
                      <div className="text-slate-700 text-[11px]">Style: <span className="font-bold">#02042731009,10 PURPLE</span></div>
                    </div>

                    {/* Party Info */}
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100 space-y-1">
                      <div className="font-bold text-amber-900">Party Information</div>
                      <div className="text-slate-900 font-extrabold">LEHAL EXPORTS</div>
                      <div className="text-slate-600 text-[11px]">Contact: POOJA B-29</div>
                    </div>

                    {/* Dates & Timestamps */}
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-100 space-y-1">
                      <div className="font-bold text-rose-900">Important Dates</div>
                      <div className="text-slate-700">Arrival: <span className="font-bold">07/09/2026</span></div>
                      <div className="text-slate-700">Delivery: <span className="font-bold text-rose-600">30/09/2026</span></div>
                    </div>
                  </div>

                  {/* Item Table & Fabric Swatch Thumbnail */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden p-4 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-xs">
                      <div className="font-extrabold text-slate-900 text-sm">Nv Mastani Dyed</div>
                      <div className="text-slate-600">Qty: <span className="font-bold text-indigo-600">950 Meters</span> • Process: No process data</div>
                    </div>

                    {/* Swatch Thumbnail Box */}
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-20 rounded-lg border border-slate-300 bg-purple-100 flex items-center justify-center text-center p-1 text-[10px] font-bold text-purple-900 shadow-sm">
                        A-28 <br /> Swatch
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => triggerToast("PDF Sticker generated for Order #155")}
                          className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200 text-[11px] font-extrabold text-center transition-colors"
                        >
                          PDF Sticker
                        </button>
                        <button
                          onClick={() => {
                            const newStatus = orderStatus["155"] === "Pending" ? "Delivered" : "Pending";
                            setOrderStatus((prev) => ({ ...prev, "155": newStatus }));
                            triggerToast(`Order #155 status changed to ${newStatus}`);
                          }}
                          className={`px-3 py-0.5 rounded-full text-white text-[10px] font-extrabold text-center transition-all ${
                            orderStatus["155"] === "Delivered" ? "bg-emerald-600" : "bg-amber-500"
                          }`}
                        >
                          Status: {orderStatus["155"]}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Row matching exact screenshot */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                    <button
                      onClick={() => setActiveModal({ type: "grey", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold hover:bg-indigo-100 transition-colors"
                    >
                      + Add Grey Info
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "lab", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-bold hover:bg-amber-100 transition-colors"
                    >
                      + Add Lab Data
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "mill_input", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold hover:bg-emerald-100 transition-colors"
                    >
                      + Add Mill Input
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "mill_output", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-bold hover:bg-purple-100 transition-colors"
                    >
                      + Add Mill Output
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "dispatch", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-800 border border-orange-200 font-bold hover:bg-orange-100 transition-colors"
                    >
                      + Add Dispatch
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "details", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-bold hover:bg-slate-200 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "edit", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-bold hover:bg-blue-100 transition-colors"
                    >
                      ✎ Edit Order
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "delete", orderId: "155" })}
                      className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 font-bold hover:bg-rose-100 transition-colors"
                    >
                      Delete (155)
                    </button>
                  </div>
                </div>

                {/* Order #154 Card */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-100 space-y-1">
                      <div className="font-extrabold text-base text-purple-900">Order ID: 154</div>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[11px]">
                        Order Type: Printing
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="font-bold text-slate-800">Order Details</div>
                      <div className="text-slate-700">PO: <span className="font-extrabold">162</span></div>
                      <div className="text-slate-700 text-[11px]">Style: <span className="font-bold">BROWN DOT PRINT</span></div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100 space-y-1">
                      <div className="font-bold text-amber-900">Party Information</div>
                      <div className="text-slate-900 font-extrabold">IMPEX V</div>
                      <div className="text-slate-600 text-[11px]">Contact: BINOD GUPTA</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 space-y-1">
                      <div className="font-bold text-emerald-900">Important Dates</div>
                      <div className="text-slate-700">Arrival: <span className="font-bold">08/09/2026</span></div>
                      <div className="text-slate-700">Delivery: <span className="font-bold">02/10/2026</span></div>
                    </div>
                  </div>

                  {/* Item Table & Fabric Swatch Thumbnail */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden p-4 bg-slate-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-xs">
                      <div className="font-extrabold text-slate-900 text-sm">Armani Satin Print</div>
                      <div className="text-slate-600">Qty: <span className="font-bold text-indigo-600">1,200 Meters</span> • Process: Rotary Screen Printing</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-16 h-20 rounded-lg border border-slate-300 bg-amber-100 flex items-center justify-center text-center p-1 text-[10px] font-bold text-amber-900 shadow-sm">
                        B-12 <br /> Swatch
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => triggerToast("PDF Sticker generated for Order #154")}
                          className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200 text-[11px] font-extrabold text-center transition-colors"
                        >
                          PDF Sticker
                        </button>
                        <button
                          onClick={() => {
                            const newStatus = orderStatus["154"] === "Pending" ? "Delivered" : "Pending";
                            setOrderStatus((prev) => ({ ...prev, "154": newStatus }));
                            triggerToast(`Order #154 status changed to ${newStatus}`);
                          }}
                          className={`px-3 py-0.5 rounded-full text-white text-[10px] font-extrabold text-center transition-all ${
                            orderStatus["154"] === "Delivered" ? "bg-emerald-600" : "bg-amber-500"
                          }`}
                        >
                          Status: {orderStatus["154"] || "Pending"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                    <button
                      onClick={() => setActiveModal({ type: "grey", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold hover:bg-indigo-100 transition-colors"
                    >
                      + Add Grey Info
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "lab", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-bold hover:bg-amber-100 transition-colors"
                    >
                      + Add Lab Data
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "mill_input", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold hover:bg-emerald-100 transition-colors"
                    >
                      + Add Mill Input
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "mill_output", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-bold hover:bg-purple-100 transition-colors"
                    >
                      + Add Mill Output
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "dispatch", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-800 border border-orange-200 font-bold hover:bg-orange-100 transition-colors"
                    >
                      + Add Dispatch
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "details", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-bold hover:bg-slate-200 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "edit", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-bold hover:bg-blue-100 transition-colors"
                    >
                      ✎ Edit Order
                    </button>
                    <button
                      onClick={() => setActiveModal({ type: "delete", orderId: "154" })}
                      className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 font-bold hover:bg-rose-100 transition-colors"
                    >
                      Delete (154)
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. FABRICS VIEW (Matching exact amplifyapp screenshot) */}
            {activeTab === "fabrics" && (
              <motion.div
                key="fabrics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search all fields..."
                      className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs w-60 focus:outline-none focus:border-indigo-500"
                    />
                    <select className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 bg-white">
                      <option>All Types</option>
                      <option>Polyester</option>
                      <option>Blend</option>
                      <option>Viscose</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setActiveModal({ type: "add_fabric", orderId: "new" })}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    + Add Fabric
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
                  <table className="w-full text-left text-xs min-w-[800px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3 px-3">Quality Info</th>
                        <th className="py-3 px-3">W No.</th>
                        <th className="py-3 px-3">W Name</th>
                        <th className="py-3 px-3">W Quality</th>
                        <th className="py-3 px-3">Finish</th>
                        <th className="py-3 px-3">GSM</th>
                        <th className="py-3 px-3">Content</th>
                        <th className="py-3 px-3">Price</th>
                        <th className="py-3 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-3">
                          <div className="font-bold text-slate-900">Power Mesh</div>
                          <div className="text-[10px] text-slate-500">Code: 1293 • Polyester</div>
                        </td>
                        <td className="py-3 px-3 font-bold text-indigo-600">W1</td>
                        <td className="py-3 px-3 text-slate-800 font-medium">Sanjay bhai Vastra</td>
                        <td className="py-3 px-3 text-slate-600">Powermesh</td>
                        <td className="py-3 px-3">56</td>
                        <td className="py-3 px-3 font-bold">105</td>
                        <td className="py-3 px-3 text-[11px] text-slate-600">96%POLY 4%Spdx</td>
                        <td className="py-3 px-3 font-extrabold text-emerald-700">₹ 550</td>
                        <td className="py-3 px-3 text-right">
                          <button className="text-indigo-600 font-bold hover:underline">View</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-3">
                          <div className="font-bold text-slate-900">NV 102 HEAVY</div>
                          <div className="text-[10px] text-slate-500">Code: BLD-1023 A • Blend</div>
                        </td>
                        <td className="py-3 px-3 font-bold text-indigo-600">W1</td>
                        <td className="py-3 px-3 text-slate-800 font-medium">JIGNESH MOTI</td>
                        <td className="py-3 px-3 text-slate-600">NV # 197</td>
                        <td className="py-3 px-3">55</td>
                        <td className="py-3 px-3 font-bold">120-125</td>
                        <td className="py-3 px-3 text-[11px] text-slate-600">Poly Blend</td>
                        <td className="py-3 px-3 font-extrabold text-emerald-700">₹ 63</td>
                        <td className="py-3 px-3 text-right">
                          <button className="text-indigo-600 font-bold hover:underline">View</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* 5. WEAVER VIEW (Matching exact amplifyapp screenshot) */}
            {activeTab === "weaver" && (
              <motion.div
                key="weaver"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">Weaver Directory (12 Total)</h3>
                      <p className="text-xs text-slate-500">Registered weaving units & sample archives</p>
                    </div>
                    <button
                      onClick={() => setActiveModal({ type: "add_weaver", orderId: "new" })}
                      className="btn-primary py-2 px-4 text-xs font-bold rounded-xl cursor-pointer"
                    >
                      + Add Weaver
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-extrabold text-slate-900 text-sm">Ashwin Bhai Shilpa Group</div>
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                          6 Samples
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 font-mono">Phone: 9574593793</div>
                      <div className="text-xs text-slate-600">Address: Surat</div>
                      <div className="pt-2 flex items-center gap-2">
                        <button className="px-3 py-1 rounded bg-indigo-600 text-white text-xs font-bold">
                          View Samples
                        </button>
                        <button className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 text-xs font-bold">
                          Edit
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-extrabold text-slate-900 text-sm">Hansraj Bhai Bucha</div>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                          0 Samples
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 font-mono">Phone: 9374709149</div>
                      <div className="text-xs text-slate-500">Address: No data</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 6. GREY MATERIAL STOCK VIEW (Matching exact amplifyapp screenshot) */}
            {activeTab === "grey-stock" && (
              <motion.div
                key="grey-stock"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-base text-slate-900">Grey Material Stock Lots</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        Total 12,450 Meters Active
                      </span>
                      <button
                        onClick={() => setActiveModal({ type: "add_stock", orderId: "new" })}
                        className="px-3.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                      >
                        + Add Stock Lot
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Quality 1001 */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                      <div className="bg-slate-50 p-3 border-b border-slate-200 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-extrabold text-slate-900 text-sm">WEIGHTLESS GGT BIG</span>
                          <span className="text-slate-500 ml-2">(Code: 1001 • 4 Weavers)</span>
                        </div>
                        <span className="font-bold text-indigo-600">7,399 Meters Total</span>
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-100 text-[10px] text-slate-500 uppercase bg-slate-50/50">
                            <th className="py-2 px-3">Weaver Name</th>
                            <th className="py-2 px-3">Challan No</th>
                            <th className="py-2 px-3">Piece</th>
                            <th className="py-2 px-3">Meter</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr><td className="py-2 px-3">NM GAJJAR RAHUL BHAI (W1)</td><td className="py-2 px-3 font-mono font-bold">729</td><td className="py-2 px-3">13</td><td className="py-2 px-3 font-bold text-slate-900">1,102 M</td></tr>
                          <tr><td className="py-2 px-3">NM GAJJAR RAHUL BHAI (W2)</td><td className="py-2 px-3 font-mono font-bold">730</td><td className="py-2 px-3">20</td><td className="py-2 px-3 font-bold text-slate-900">1,751 M</td></tr>
                          <tr><td className="py-2 px-3">NM GAJJAR RAHUL BHAI (W3)</td><td className="py-2 px-3 font-mono font-bold">752</td><td className="py-2 px-3">21</td><td className="py-2 px-3 font-bold text-slate-900">1,741 M</td></tr>
                          <tr><td className="py-2 px-3">NM GAJJAR RAHUL BHAI (W4)</td><td className="py-2 px-3 font-mono font-bold">751</td><td className="py-2 px-3">31</td><td className="py-2 px-3 font-bold text-slate-900">2,805 M</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 7. SAMPLING VIEW */}
            {activeTab === "sampling" && (
              <motion.div
                key="sampling"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <h3 className="font-extrabold text-base text-slate-900">Lab & Mill Sampling Register</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase">
                        <th className="py-2.5 px-3">Quality Name</th>
                        <th className="py-2.5 px-3">Weaver</th>
                        <th className="py-2.5 px-3">Mill Name</th>
                        <th className="py-2.5 px-3">Meter</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="py-3 px-3 font-bold text-slate-900">Satin crush (S1)</td><td className="py-3 px-3">Dumpy Expo</td><td className="py-3 px-3">J P Kachiwala Mill</td><td className="py-3 px-3 font-bold">20 M</td><td><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">In Dyeing Mill</span></td></tr>
                      <tr><td className="py-3 px-3 font-bold text-slate-900">Armani satin RFD</td><td className="py-3 px-3">Lala Bhai</td><td className="py-3 px-3">Mony Prints Mill</td><td className="py-3 px-3 font-bold">50 M</td><td><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Ready</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* 8. FINISH LOT STOCK VIEW */}
            {activeTab === "finish-stock" && (
              <motion.div
                key="finish-stock"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <h3 className="font-extrabold text-base text-slate-900">Finished Mill Lots (5 Total)</h3>
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase">
                      <th className="py-2.5 px-3">Sequence</th>
                      <th className="py-2.5 px-3">Type</th>
                      <th className="py-2.5 px-3">Quality</th>
                      <th className="py-2.5 px-3">Mill Name</th>
                      <th className="py-2.5 px-3">Meters</th>
                      <th className="py-2.5 px-3">Piece</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr><td className="py-3 px-3 font-mono font-bold text-indigo-600">OTH-0001</td><td className="py-3 px-3">OTHER</td><td className="py-3 px-3 font-bold text-slate-900">american crepe</td><td className="py-3 px-3">J P Kachiwala Mill</td><td className="py-3 px-3 font-extrabold text-emerald-700">5,000 M</td><td className="py-3 px-3 font-bold">50</td></tr>
                    <tr><td className="py-3 px-3 font-mono font-bold text-indigo-600">RFD-0001</td><td className="py-3 px-3">RFD</td><td className="py-3 px-3 font-bold text-slate-900">Armani satin RFD</td><td className="py-3 px-3">J P Kachiwala Mill</td><td className="py-3 px-3 font-extrabold text-emerald-700">2,500 M</td><td className="py-3 px-3 font-bold">25</td></tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {/* 9. PURCHASE ORDERS VIEW (Matching exact amplifyapp screenshot) */}
            {activeTab === "purchase-orders" && (
              <motion.div
                key="purchase-orders"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">Purchase Orders (Yarn & Material)</h3>
                    <p className="text-xs text-slate-500">Auto-incrementing FY POs & supplier agreements</p>
                  </div>
                  <button
                    onClick={() => setActiveModal({ type: "add_po", orderId: "new" })}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    + Create PO
                  </button>
                </div>

                {/* PO Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* PO #012 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div>
                        <div className="font-extrabold text-base text-indigo-900">PO #012</div>
                        <div className="text-[11px] font-bold text-slate-600">Viral Fabrics • 09/09/2026</div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold">
                        Pending
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="text-slate-600">Broker: <span className="font-bold text-slate-800">Prem (9825788255)</span></div>
                      <div className="text-slate-600">Supplier: <span className="font-bold text-slate-900">KAILASH WEAVES PRADEEP BHAI (SURAT)</span></div>
                      <div className="font-extrabold text-slate-900 pt-1">Grey Bolt Bubble Lycra Big</div>
                      <div className="text-indigo-600 font-bold">3,400 Pcs/Mtr • Mony Prints Mill</div>
                      <div className="text-emerald-700 font-extrabold text-sm">Rate: ₹ 37 / Mtr</div>
                      <div className="text-[11px] text-slate-500">GSM: 110 • Finish W: 56 • Roll Packing</div>
                    </div>
                  </div>

                  {/* PO #003 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div>
                        <div className="font-extrabold text-base text-indigo-900">PO #003</div>
                        <div className="text-[11px] font-bold text-slate-600">Viral Enterprise • 08/09/2026</div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold">
                        Pending
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="text-slate-600">Broker: <span className="font-bold text-slate-800">Prem (9825788255)</span></div>
                      <div className="text-slate-600">Supplier: <span className="font-bold text-slate-900">KAILASH WEAVES PRADEEP BHAI</span></div>
                      <div className="font-extrabold text-slate-900 pt-1">Naylon viscose mastani 6080</div>
                      <div className="text-indigo-600 font-bold">1,150 Pcs/Mtr • Office</div>
                      <div className="text-emerald-700 font-extrabold text-sm">Rate: ₹ 63 / Mtr</div>
                      <div className="text-[11px] text-slate-500">GSM: 58 • Grey W: 63 • Finish W: 57</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 10. LOGS VIEW */}
            {activeTab === "logs" && (
              <motion.div
                key="logs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <h3 className="font-extrabold text-base text-slate-900">Audit Trail & Operations Logs</h3>
                <div className="space-y-3 text-xs">
                  {[
                    { time: "10:26 AM", event: "Order #155 process updated: Dying info added by Master", type: "order" },
                    { time: "10:21 AM", event: "Order #155 created for LEHAL EXPORTS (950 meters Nv Mastani)", type: "order" },
                    { time: "11:05 AM", event: "Purchase Order #012 issued to KAILASH WEAVES (3,400 Mtr)", type: "po" },
                    { time: "09:15 AM", event: "Grey Stock Challan #751 received from NM GAJJAR RAHUL BHAI (2,805 Mtr)", type: "stock" },
                  ].map((log, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="font-medium text-slate-800">{log.event}</div>
                      <div className="font-mono text-slate-500 text-[11px]">{log.time}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 11. RESHAM AI ASSISTANT VIEW */}
            {activeTab === "ai-assistant" && (
              <motion.div
                key="ai-assistant"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-sans"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#9A481B] text-white flex items-center justify-center font-bold shadow-md">
                      <Sparkles className="w-4.5 h-4.5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">RESHAM Operational AI Assistant</h3>
                      <p className="text-xs text-slate-500">Autonomous intelligence for textile mills, orders, and yield prediction</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>AI Engine Active</span>
                  </span>
                </div>

                {/* Quick AI Prompts */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-500">Quick AI Audits:</span>
                  {[
                    "Analyze Order #155 Timeline",
                    "Audit Mill Shrinkage Yields",
                    "Check Yarn PO #012 Rate",
                    "Summarize Lehal Exports SLA",
                  ].map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendAiMessage(prompt)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
                    >
                      💡 {prompt}
                    </button>
                  ))}
                </div>

                {/* Chat Log Window */}
                <div className="h-64 overflow-y-auto p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  {aiMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`p-3 rounded-2xl max-w-md text-xs leading-relaxed shadow-2xs ${
                          msg.role === "user"
                            ? "bg-indigo-600 text-white rounded-br-none"
                            : "bg-white text-slate-800 border border-slate-200 rounded-bl-none font-medium"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {aiThinking && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 italic">
                      <Sparkles className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                      <span>RESHAM AI is analyzing mill database...</span>
                    </div>
                  )}
                </div>

                {/* Query Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendAiMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="Ask RESHAM AI about orders, mill inward, shrinkage yield, PO rates..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-indigo-500 shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#9A481B] hover:bg-amber-900 text-white text-xs font-bold shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ask AI</span>
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Toast Alert Popup */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs shadow-2xl flex items-center gap-2 border border-slate-700"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Modal Form Popups */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4 text-xs font-sans text-slate-800 relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>

              {/* 1. GREY INFO MODAL */}
              {activeModal.type === "grey" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Add Grey Material Info</h3>
                    <p className="text-slate-500 text-[11px]">Order #{activeModal.orderId} • LEHAL EXPORTS</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Weaver Name</label>
                      <input type="text" defaultValue="NM GAJJAR RAHUL BHAI" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Challan No.</label>
                        <input type="text" defaultValue="751" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Grey Meters</label>
                        <input type="text" defaultValue="950 M" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("Grey Info successfully saved for Order #155");
                      }}
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold"
                    >
                      Save Grey Info
                    </button>
                  </div>
                </div>
              )}

              {/* 2. LAB DATA MODAL */}
              {activeModal.type === "lab" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Add Lab Data & Shade Info</h3>
                    <p className="text-slate-500 text-[11px]">Order #{activeModal.orderId} • LEHAL EXPORTS</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Lab Shade Code</label>
                      <input type="text" defaultValue="PURPLE D-29" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">DTH Recipe / Formula</label>
                      <input type="text" defaultValue="Disperse Purple 200% • 130°C" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("Lab Data recipe saved for Order #155");
                      }}
                      className="px-4 py-2 rounded-lg bg-amber-600 text-white font-bold"
                    >
                      Save Lab Data
                    </button>
                  </div>
                </div>
              )}

              {/* 3. MILL INPUT MODAL */}
              {activeModal.type === "mill_input" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Add Mill Inward Input</h3>
                    <p className="text-slate-500 text-[11px]">Order #{activeModal.orderId} • LEHAL EXPORTS</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Dyeing Mill Name</label>
                      <input type="text" defaultValue="J P Kachiwala Mill" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Inward Meters</label>
                        <input type="text" defaultValue="950 M" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Inward Date</label>
                        <input type="text" defaultValue="10/09/2026" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("Mill Inward input recorded for Order #155");
                      }}
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold"
                    >
                      Record Mill Input
                    </button>
                  </div>
                </div>
              )}

              {/* 4. MILL OUTPUT MODAL */}
              {activeModal.type === "mill_output" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Add Mill Finished Output</h3>
                    <p className="text-slate-500 text-[11px]">Order #{activeModal.orderId} • LEHAL EXPORTS</p>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Finished Meters</label>
                        <input type="text" defaultValue="942 M" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Shrinkage %</label>
                        <input type="text" defaultValue="0.8%" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("Mill Output saved for Order #155");
                      }}
                      className="px-4 py-2 rounded-lg bg-purple-600 text-white font-bold"
                    >
                      Save Mill Output
                    </button>
                  </div>
                </div>
              )}

              {/* 5. DISPATCH MODAL */}
              {activeModal.type === "dispatch" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Add Dispatch & LR Tracking</h3>
                    <p className="text-slate-500 text-[11px]">Order #{activeModal.orderId} • LEHAL EXPORTS</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Transport / Transporter Name</label>
                      <input type="text" defaultValue="Navkar Transport Surat" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">LR Number</label>
                        <input type="text" defaultValue="LR-9921" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Dispatched Meters</label>
                        <input type="text" defaultValue="942 M" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        setOrderStatus((prev) => ({ ...prev, "155": "Delivered" }));
                        triggerToast("Order #155 Dispatched & Marked Delivered!");
                      }}
                      className="px-4 py-2 rounded-lg bg-orange-600 text-white font-bold"
                    >
                      Confirm Dispatch
                    </button>
                  </div>
                </div>
              )}

              {/* 6. DETAILS MODAL */}
              {activeModal.type === "details" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Order #{activeModal.orderId} Full Timeline & Logs</h3>
                    <p className="text-slate-500 text-[11px]">Party: LEHAL EXPORTS • PO: 685</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs">
                    <div className="flex justify-between font-bold"><span>Quality:</span> <span>Nv Mastani Dyed</span></div>
                    <div className="flex justify-between"><span>Style:</span> <span>#02042731009,10 PURPLE</span></div>
                    <div className="flex justify-between"><span>Arrival Date:</span> <span>07/09/2026</span></div>
                    <div className="flex justify-between"><span>Delivery Date:</span> <span className="text-rose-600 font-bold">30/09/2026</span></div>
                    <div className="flex justify-between"><span>Created Timestamp:</span> <span>09/09/2026 10:21 AM</span></div>
                    <div className="flex justify-between"><span>Last Updated:</span> <span>09/09/2026 10:26 AM</span></div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => triggerToast(`PDF Order Summary downloaded for Order #${activeModal.orderId}`)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-bold hover:bg-slate-50"
                    >
                      Download PDF
                    </button>
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold">Close Details</button>
                  </div>
                </div>
              )}

              {/* 7. EDIT ORDER MODAL */}
              {activeModal.type === "edit" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Edit Order #{activeModal.orderId}</h3>
                    <p className="text-slate-500 text-[11px]">Update PO details, party info & dates</p>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">PO Number</label>
                        <input type="text" defaultValue={activeModal.orderId === "155" ? "685" : "162"} className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Style</label>
                        <input type="text" defaultValue={activeModal.orderId === "155" ? "#02042731009,10 PURPLE" : "BROWN DOT PRINT"} className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Party Name</label>
                      <input type="text" defaultValue={activeModal.orderId === "155" ? "LEHAL EXPORTS" : "IMPEX V"} className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Delivery Date</label>
                        <input type="text" defaultValue={activeModal.orderId === "155" ? "30/09/2026" : "02/10/2026"} className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Order Type</label>
                        <select className="w-full px-3 py-1.5 rounded-lg border border-slate-200 font-bold bg-white">
                          <option>Dying</option>
                          <option>Printing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast(`Order #${activeModal.orderId} updated successfully`);
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold"
                    >
                      Save Order Changes
                    </button>
                  </div>
                </div>
              )}

              {/* 8. DELETE ORDER MODAL */}
              {activeModal.type === "delete" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-rose-700">Delete Order #{activeModal.orderId}?</h3>
                    <p className="text-slate-500 text-[11px]">Are you sure you want to delete this order? This action cannot be undone.</p>
                  </div>
                  <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-900">
                    Warning: Deleting Order #{activeModal.orderId} will remove all associated Grey Stock, Lab Data, Mill Inward/Outward records, and Dispatch history.
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast(`Order #${activeModal.orderId} deleted from database`);
                      }}
                      className="px-4 py-2 rounded-lg bg-rose-600 text-white font-bold"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              )}

              {/* 9. ADD USER MODAL (4 Roles) */}
              {activeModal.type === "add_user" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Create New System User</h3>
                    <p className="text-slate-500 text-[11px]">Assign user details and select 1 of 4 access roles</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">User Full Name</label>
                      <input type="text" placeholder="e.g. Ramesh Shah" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Username / Mobile</label>
                      <input type="text" placeholder="9825100223" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">User Role Permission (4 Options)</label>
                      <select className="w-full px-3 py-1.5 rounded-lg border border-slate-200 font-bold bg-white">
                        <option>Master Admin (Full Platform Control)</option>
                        <option>Admin (Operations & Orders Admin)</option>
                        <option>Accounts / Party (Client Ledger & PO View)</option>
                        <option>User / Staff (Mill Inward & Dispatch Entry)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("New user account created successfully");
                      }}
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold"
                    >
                      Save & Grant Access
                    </button>
                  </div>
                </div>
              )}

              {/* 10. ADD FABRIC MODAL */}
              {activeModal.type === "add_fabric" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Add New Fabric Quality</h3>
                    <p className="text-slate-500 text-[11px]">Define quality name, GSM, width, and base pricing</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Fabric Quality Name</label>
                      <input type="text" placeholder="e.g. Satin Crush heavy" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">GSM</label>
                        <input type="text" placeholder="110" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Finish Width (Inch)</label>
                        <input type="text" placeholder="56" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Content Composition</label>
                        <input type="text" placeholder="95% Poly 5% Spandex" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Price per Meter (₹)</label>
                        <input type="text" placeholder="₹ 120" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("New Fabric Quality added to catalog!");
                      }}
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold"
                    >
                      Save Fabric Quality
                    </button>
                  </div>
                </div>
              )}

              {/* 11. ADD WEAVER MODAL */}
              {activeModal.type === "add_weaver" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Register New Weaver Unit</h3>
                    <p className="text-slate-500 text-[11px]">Weaving mill contact details & capacity</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Weaver Unit Name</label>
                      <input type="text" placeholder="e.g. Ramesh Bhai Weaves" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Contact Phone</label>
                        <input type="text" placeholder="9825100992" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">City / Location</label>
                        <input type="text" placeholder="Surat" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("New Weaver Unit registered in directory!");
                      }}
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold"
                    >
                      Save Weaver Unit
                    </button>
                  </div>
                </div>
              )}

              {/* 12. CREATE PO MODAL */}
              {activeModal.type === "add_po" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Create Purchase Order (PO)</h3>
                    <p className="text-slate-500 text-[11px]">Auto FY PO numbering & supplier terms</p>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Supplier Name</label>
                        <input type="text" placeholder="KAILASH WEAVES" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Broker Info</label>
                        <input type="text" placeholder="Prem (9825788255)" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Item / Quality Description</label>
                      <input type="text" placeholder="Grey Bolt Bubble Lycra Big" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Total Quantity (Mtr/Pcs)</label>
                        <input type="text" placeholder="3,400 Mtr" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Negotiated Rate (₹)</label>
                        <input type="text" placeholder="₹ 37 / Mtr" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("Purchase Order #013 generated & sent to supplier!");
                      }}
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold"
                    >
                      Issue Purchase Order
                    </button>
                  </div>
                </div>
              )}

              {/* 13. ADD GREY STOCK MODAL */}
              {activeModal.type === "add_stock" && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-slate-900">Inward Grey Material Stock</h3>
                    <p className="text-slate-500 text-[11px]">Record new grey fabric inward challan & meterage</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Quality Name</label>
                      <input type="text" placeholder="WEIGHTLESS GGT BIG" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Weaver Unit</label>
                        <input type="text" placeholder="NM GAJJAR RAHUL BHAI" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Challan No.</label>
                        <input type="text" placeholder="753" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Than / Piece Count</label>
                        <input type="text" placeholder="25 Than" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Total Meters</label>
                        <input type="text" placeholder="2,100 M" className="w-full px-3 py-1.5 rounded-lg border border-slate-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-lg border border-slate-200 font-bold">Cancel</button>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        triggerToast("Grey Material Stock lot inward recorded!");
                      }}
                      className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold"
                    >
                      Record Grey Inward
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
