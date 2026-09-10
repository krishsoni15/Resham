"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  FileCheck,
  Package,
  FlaskConical,
  Layers,
  Sparkles,
  Users,
  LayoutDashboard,
  Shield,
  Activity,
  ArrowRight,
  Eye,
  FileText,
  QrCode,
  Table,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import Image from "next/image";
import RealAppDashboardPreview from "@/components/real-app-dashboard-preview";

interface DeliverableItem {
  title: string;
  iconType: "pdf" | "qr" | "excel" | "chart" | "security";
  previewable: boolean;
  docData?: {
    type: "pdf" | "qr" | "excel" | "report";
    docTitle: string;
    docNumber: string;
    subtitle: string;
    details: Array<{ label: string; value: string }>;
    codeText?: string;
  };
}

interface PlatformPageNode {
  id: string;
  number: string;
  title: string;
  route: string;
  tabDesc: string;
  headline: string;
  operations: string[];
  deliverables: DeliverableItem[];
  buttonText: string;
  appStudioTab: string;
  icon: any;
  accentColor: string;
}

const PLATFORM_PAGES: PlatformPageNode[] = [
  {
    id: "orders",
    number: "01",
    title: "Orders Page",
    route: "/orders",
    tabDesc: "Sales order booking, multi-item pricing & style tracking",
    headline: "Complete Sales Order Lifecycle & Multi-Item Rate Engine",
    operations: [
      "Dying & Printing Specs",
      "Purchase / Mill / Sales Rates",
      "Multi-Item Image Upload",
      "Payment Status Tracking",
    ],
    deliverables: [
      {
        title: "Official Sales Order PDF",
        iconType: "pdf",
        previewable: true,
        docData: {
          type: "pdf",
          docTitle: "OFFICIAL SALES ORDER CONFIRMATION",
          docNumber: "VF/SO/2025-26/0155",
          subtitle: "VIRAL FABRICS PRIVATE LIMITED • SURAT TEXTILE MARKET",
          details: [
            { label: "Customer Name", value: "LEHAL EXPORTS PVT LTD" },
            { label: "Order Date", value: "10-09-2026" },
            { label: "Fabric Quality", value: "950M Nv Mastani Dyed (58-60 Line)" },
            { label: "Ordered Quantity", value: "12,500 Meters" },
            { label: "Mill Sales Rate", value: "₹68.50 / Meter" },
            { label: "Process Spec", value: "Reactive Dyeing + Soft Finish" },
            { label: "Target Delivery", value: "30-09-2026" },
            { label: "Payment Terms", value: "45 Days Credit (Bank LC Locked)" },
          ],
        },
      },
    ],
    buttonText: "Explore Orders Page in App Studio ➔",
    appStudioTab: "orders",
    icon: ShoppingCart,
    accentColor: "from-[#9A481B] to-amber-600",
  },
  {
    id: "purchase-orders",
    number: "02",
    title: "Purchase Orders",
    route: "/purchase-orders",
    tabDesc: "Yarn procurement, FY PO numbers & supplier allocation",
    headline: "Automated Yarn & Raw Material Procurement",
    operations: [
      "FY Auto Numbering (VF/PO/25-26/0001)",
      "Dual Company Headers (Viral Fabrics / Enterprise)",
      "Supplier Terms Lock",
    ],
    deliverables: [
      {
        title: "Vendor Purchase Order PDF",
        iconType: "pdf",
        previewable: true,
        docData: {
          type: "pdf",
          docTitle: "VENDOR YARN PURCHASE ORDER",
          docNumber: "VF/PO/25-26/0012",
          subtitle: "RAW MATERIAL PROCUREMENT DIVISION",
          details: [
            { label: "Supplier Name", value: "KAILASH WEAVES & SPINNER" },
            { label: "PO Issue Date", value: "08-09-2026" },
            { label: "Yarn Grade", value: "80s Micro Lycra Filament Yarn" },
            { label: "Total Weight", value: "3,400 Kgs / 40 Bales" },
            { label: "Agreed Rate", value: "₹37.00 / Kgs" },
            { label: "Delivery Mill", value: "J P Kachiwala Weaving Unit #3" },
            { label: "GST Structure", value: "18% IGST Applicable" },
          ],
        },
      },
    ],
    buttonText: "Explore Purchase Orders in App Studio ➔",
    appStudioTab: "purchase-orders",
    icon: FileCheck,
    accentColor: "from-blue-600 to-indigo-600",
  },
  {
    id: "grey-materials",
    number: "03",
    title: "Grey Material Stock",
    route: "/grey-materials",
    tabDesc: "Raw cloth inward, weaver challans & meter counts",
    headline: "Raw Un-Dyed Cloth (Kora Kapda) Inventory",
    operations: [
      "Weaver Inward Entry",
      "Challan Number Tracking",
      "Piece & Meter Stock Counts",
      "Quality-Wise Totals",
    ],
    deliverables: [
      {
        title: "Grey Stock Inventory PDF",
        iconType: "pdf",
        previewable: true,
        docData: {
          type: "pdf",
          docTitle: "GREY MATERIAL INWARD AUDIT REPORT",
          docNumber: "GRY-LOT-2026-8890",
          subtitle: "RAW FABRIC WAREHOUSE LOGISTICS",
          details: [
            { label: "Weaver Name", value: "MAHAVIR SYNTHETICS SURAT" },
            { label: "Inward Date", value: "09-09-2026" },
            { label: "Weaver Challan", value: "CH-99410" },
            { label: "Quality Code", value: "VF-GREY-9008 (Kora Satin)" },
            { label: "Total Pieces", value: "84 Rolls" },
            { label: "Gross Meters", value: "8,940.50 Mtrs" },
            { label: "Weaving Shrinkage", value: "1.2% Target Standard" },
          ],
        },
      },
      {
        title: "Grey Stock QR Stickers",
        iconType: "qr",
        previewable: true,
        docData: {
          type: "qr",
          docTitle: "GREY ROLL IDENTIFICATION TAG",
          docNumber: "QR-GRY-8890-01",
          subtitle: "SCAN WITH RESHAM PWA CAMERA",
          details: [
            { label: "Quality", value: "VF-GREY-9008 Kora Satin" },
            { label: "Roll ID", value: "ROLL-041 / 84" },
            { label: "Roll Meters", value: "106.50 Mtrs" },
            { label: "Weaver", value: "Mahavir Synthetics" },
          ],
          codeText: "VF|GRY|8890|R041|106.5M",
        },
      },
    ],
    buttonText: "Explore Grey Stock in App Studio ➔",
    appStudioTab: "grey-stock",
    icon: Package,
    accentColor: "from-emerald-600 to-teal-600",
  },
  {
    id: "sampling",
    number: "04",
    title: "Sampling & Lab",
    route: "/sampling",
    tabDesc: "DTH shade recipes, trial samples & QR stickers",
    headline: "DTH Shade Recipes & Swatch Approvals",
    operations: [
      "DTH Shade Matching",
      "Lab Dip Recipes",
      "Weaver Trial Lots",
      "Swatch Approval Tracking",
    ],
    deliverables: [
      {
        title: "Printable Sample QR Stickers",
        iconType: "qr",
        previewable: true,
        docData: {
          type: "qr",
          docTitle: "LAB DIP SHADE MATCH SWATCH TAG",
          docNumber: "LAB-DTH-2026-044",
          subtitle: "DTH DYEING LABORATORY RECIPE",
          details: [
            { label: "Shade Code", value: "DTH #7712 - Royal Navy Blue" },
            { label: "Lab Dye Recipe", value: "Blue 2R 1.4% + Red 3B 0.2%" },
            { label: "Buyer Status", value: "APPROVED (Sign-Off 09/09)" },
            { label: "Fastness Rating", value: "4.5 / 5.0 (Wash & Rub)" },
          ],
          codeText: "VF|LAB|DTH7712|NAVY|OK",
        },
      },
    ],
    buttonText: "Explore Sampling in App Studio ➔",
    appStudioTab: "sampling",
    icon: FlaskConical,
    accentColor: "from-purple-600 to-indigo-600",
  },
  {
    id: "finish-lot-stocks",
    number: "05",
    title: "Finish Lot Stock",
    route: "/finish-lot-stocks",
    tabDesc: "Graded finished rolls (RFD vs Finish) & roll barcodes",
    headline: "Graded Finished Roll Inventory & Roll Tagging",
    operations: [
      "RFD & Finished Roll Stock",
      "Fresh / Second Quality Grading",
      "Roll Sequence & Metering",
    ],
    deliverables: [
      {
        title: "Thermal Finish Roll QR Barcodes",
        iconType: "qr",
        previewable: true,
        docData: {
          type: "qr",
          docTitle: "THERMAL FINISH ROLL DISPATCH BARCODE",
          docNumber: "TAG-FIN-9901-77",
          subtitle: "AUTOMATED ROLLER METRIC SYSTEM",
          details: [
            { label: "Finished Style", value: "Super Deluxe Georgette Printed" },
            { label: "Grade Quality", value: "FRESH QUALITY (Zero Defect)" },
            { label: "Finish Width", value: "58 Inches (147 CM)" },
            { label: "Net Meters", value: "98.20 Mtrs" },
          ],
          codeText: "VF|FIN|9901|FRESH|98.2M",
        },
      },
    ],
    buttonText: "Explore Finish Lot Stock in App Studio ➔",
    appStudioTab: "finish-stock",
    icon: Layers,
    accentColor: "from-rose-600 to-pink-600",
  },
  {
    id: "fabrics",
    number: "06",
    title: "Master Fabrics Catalog",
    route: "/fabrics",
    tabDesc: "Greigh/Finish width, GSM weight & image gallery",
    headline: "Central Fabric Quality & Technical Specifications",
    operations: [
      "Quality Code Database",
      "Greigh Width & Finished Width",
      "Fabric Weight & GSM Specs",
      "Multi-Image Gallery",
    ],
    deliverables: [
      {
        title: "Fabric Technical Spec Sheet & Excel Export",
        iconType: "excel",
        previewable: true,
        docData: {
          type: "excel",
          docTitle: "FABRIC TECHNICAL SPECIFICATION & COST SHEET",
          docNumber: "SPEC-VF-MASTANI-950",
          subtitle: "MASTER CATALOG EXPORT • XLSX",
          details: [
            { label: "Quality Code", value: "VF-MASTANI-950" },
            { label: "Greigh Width", value: "63 Inches" },
            { label: "Finished Width", value: "58 Inches" },
            { label: "GSM Weight", value: "115 GSM (+/- 3%)" },
            { label: "Weave Structure", value: "Satin Satinette 8-End" },
            { label: "Standard Packing", value: "100 Meter Fold Roll" },
          ],
        },
      },
    ],
    buttonText: "Explore Fabrics Catalog in App Studio ➔",
    appStudioTab: "fabrics",
    icon: Sparkles,
    accentColor: "from-amber-600 to-orange-600",
  },
  {
    id: "weaver",
    number: "07",
    title: "Weaver Registry",
    route: "/weaver",
    tabDesc: "Weaver profiles, quality assignments & production history",
    headline: "Weaver Profile & Production Performance",
    operations: [
      "Weaver Directory",
      "Quality Code Allocation",
      "Historical Weaving Volume",
      "Delivery SLA Metrics",
    ],
    deliverables: [
      {
        title: "Weaver Production Performance Summary",
        iconType: "chart",
        previewable: true,
        docData: {
          type: "report",
          docTitle: "WEAVER SLA & YIELD PERFORMANCE REPORT",
          docNumber: "WEAV-AUDIT-2026-Q3",
          subtitle: "PRODUCTION AUDIT METRICS",
          details: [
            { label: "Weaver Name", value: "MAHAVIR SYNTHETICS" },
            { label: "Active Looms", value: "48 Water Jet Looms" },
            { label: "Monthly Output", value: "1,45,000 Meters" },
            { label: "Defect Ratio", value: "0.42% (Industry Top 5%)" },
            { label: "On-Time SLA", value: "99.1% Delivery Rate" },
          ],
        },
      },
    ],
    buttonText: "Explore Weaver Registry in App Studio ➔",
    appStudioTab: "weaver",
    icon: Users,
    accentColor: "from-teal-600 to-emerald-700",
  },
  {
    id: "dashboard",
    number: "08",
    title: "Executive Dashboard",
    route: "/dashboard",
    tabDesc: "Real-time KPIs, FY25-26 selector & delivery timeline",
    headline: "Real-Time Business Health & Delivery Timeline",
    operations: [
      "6 Key Metric Cards",
      "FY Financial Year Selector",
      "Dyeing vs Printing Distribution Chart",
      "Delivery Schedule",
    ],
    deliverables: [
      {
        title: "Real-Time Metric Snapshot & Excel Export",
        iconType: "excel",
        previewable: true,
        docData: {
          type: "excel",
          docTitle: "EXECUTIVE MANAGEMENT KPI DUMP",
          docNumber: "KPI-FY25-26-AUG",
          subtitle: "FINANCIAL YEAR 2025-26 SNAPSHOT",
          details: [
            { label: "Active Orders", value: "142 Live Dispatch Schedules" },
            { label: "Total Volume", value: "4,85,200 Meters" },
            { label: "Total Revenue", value: "₹3,42,80,000" },
            { label: "Dyeing vs Printing", value: "62% Dyeing / 38% Printing" },
            { label: "Avg Mill Yield", value: "98.6% Shrinkage Target" },
          ],
        },
      },
    ],
    buttonText: "Explore Dashboard in App Studio ➔",
    appStudioTab: "dashboard",
    icon: LayoutDashboard,
    accentColor: "from-[#9A481B] to-slate-800",
  },
  {
    id: "users",
    number: "09",
    title: "Users & Security",
    route: "/users",
    tabDesc: "5-Tier RBAC (Master/Admin/Party) & account controls",
    headline: "5-Tier Role-Based Governance & Buyer Portal",
    operations: [
      "Master, Superadmin, Admin, User Roles",
      "Party (Buyer Portal) Account Linking",
      "Account Lock & Security Controls",
    ],
    deliverables: [
      {
        title: "Security & Access Control Report",
        iconType: "security",
        previewable: true,
        docData: {
          type: "report",
          docTitle: "5-TIER ROLE & SECURITY AUDIT",
          docNumber: "SEC-RBAC-2026-V5",
          subtitle: "ORGANIZATION ACCESS CONTROL",
          details: [
            { label: "Active Accounts", value: "38 Registered Operators" },
            { label: "RBAC Tiers", value: "Master, SuperAdmin, Admin, User, Party" },
            { label: "Buyer Portal", value: "14 Active Linked Party Logins" },
            { label: "Security Policy", value: "2FA Required for Master Admin" },
            { label: "Encryption", value: "AES-256 TLS 1.3 End-to-End" },
          ],
        },
      },
    ],
    buttonText: "Explore Users & Roles in App Studio ➔",
    appStudioTab: "users",
    icon: Shield,
    accentColor: "from-violet-600 to-purple-700",
  },
  {
    id: "logs",
    number: "10",
    title: "Activity Audit Logs",
    route: "/logs",
    tabDesc: "System audit trail, severity levels & security logs",
    headline: "Enterprise System Audit Trail & Event Monitoring",
    operations: [
      "Real-time Action Logs",
      "Severity Filtering (Info/Error/Critical)",
      "User Attribution Tracking",
    ],
    deliverables: [
      {
        title: "Audit Trail Excel Export & Log Dump",
        iconType: "excel",
        previewable: true,
        docData: {
          type: "excel",
          docTitle: "SYSTEM AUDIT TRAIL LOG EXPORT",
          docNumber: "LOG-DUMP-2026-0910",
          subtitle: "IMMUTABLE AUDIT RECORD • CSV/XLSX",
          details: [
            { label: "Total Logged Events", value: "24,592 System Operations" },
            { label: "Severity Breakdown", value: "Info: 98.4% | Error: 0.1% | Auth: 1.5%" },
            { label: "Attribution", value: "User ID + IP Timestamped" },
            { label: "Retention", value: "365-Day Immutable Lock" },
          ],
        },
      },
    ],
    buttonText: "Explore Audit Logs in App Studio ➔",
    appStudioTab: "logs",
    icon: Activity,
    accentColor: "from-rose-600 to-red-700",
  },
];

export default function PlatformShowcase() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [appStudioModalOpen, setAppStudioModalOpen] = useState(false);
  const [targetStudioTab, setTargetStudioTab] = useState("orders");
  const [previewDocModal, setPreviewDocModal] = useState<DeliverableItem["docData"] | null>(null);

  const activePage = PLATFORM_PAGES[activePageIndex];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isFirstRender = useRef(true);

  // Auto-scroll selected node into view ONLY on container track when user changes tab, NOT window on page load
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.children[activePageIndex] as HTMLElement;
      if (activeEl) {
        const container = scrollContainerRef.current;
        const scrollLeftTarget = activeEl.offsetLeft - container.clientWidth / 2 + activeEl.clientWidth / 2;
        container.scrollTo({ left: scrollLeftTarget, behavior: "smooth" });
      }
    }
  }, [activePageIndex]);

  const handleNextPage = () => {
    setActivePageIndex((prev) => (prev + 1) % PLATFORM_PAGES.length);
  };

  const handlePrevPage = () => {
    setActivePageIndex((prev) => (prev - 1 + PLATFORM_PAGES.length) % PLATFORM_PAGES.length);
  };

  const openStudioModal = (tabKey: string) => {
    setTargetStudioTab(tabKey);
    setAppStudioModalOpen(true);
  };

  return (
    <section id="platform-showcase" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E6DFD5] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-amber-500/10 via-[#9A481B]/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 space-y-10">
        
        {/* =========================================================================
            HEADER TITLE & SUBTITLE
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9A481B]/10 border border-[#9A481B]/20 text-[#9A481B] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE ALL-PAGES PLATFORM SHOWCASE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            10 Connected Pages. <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#9A481B]">Zero Operational Gaps.</span>
          </h2>

          <p className="text-sm md:text-base text-[#57534E] font-medium max-w-2xl mx-auto leading-relaxed">
            Click any page node below to explore real textile workflows, automated deliverable PDFs, QR stickers, and launch the interactive App Studio mockup!
          </p>
        </div>

        {/* =========================================================================
            1. TOP INTERACTIVE HORIZONTAL SCROLLABLE STEPPER / NAVIGATION BAR
           ========================================================================= */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-2 md:p-3 border border-[#E2D9CC] shadow-lg">
          {/* Scroll indicators / controls for desktop */}
          <div className="flex items-center justify-between px-3 py-1 mb-2 text-xs text-[#78716C] font-semibold border-b border-[#F0EBE1]">
            <span className="flex items-center gap-1.5 text-[#9A481B] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#9A481B] animate-pulse" />
              <span>SELECT PLATFORM PAGE MODULE ({activePageIndex + 1} / 10)</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                className="p-1 rounded-lg hover:bg-[#F2EDE4] text-[#57534E] transition-colors"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono text-[#A8A29E]">Use arrows to navigate</span>
              <button
                onClick={handleNextPage}
                className="p-1 rounded-lg hover:bg-[#F2EDE4] text-[#57534E] transition-colors"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 10 Page Nodes Horizontal Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-none py-1 px-1 snap-x scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PLATFORM_PAGES.map((page, index) => {
              const isActive = index === activePageIndex;
              const IconComponent = page.icon;

              return (
                <button
                  key={page.id}
                  onClick={() => setActivePageIndex(index)}
                  className={`snap-center shrink-0 min-w-[200px] md:min-w-[230px] p-3 rounded-xl text-left transition-all duration-300 relative border ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02] ring-2 ring-[#9A481B]/40"
                      : "bg-white hover:bg-[#FAF6F0] text-slate-800 border-[#E5DFD5] shadow-sm hover:border-[#D4C9B8]"
                  }`}
                >
                  {/* Step Badge & Route Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#9A481B] text-white shadow-sm"
                          : "bg-[#F2EDE4] text-[#78716C]"
                      }`}
                    >
                      {page.number}
                    </span>

                    <span
                      className={`text-[11px] font-mono font-medium truncate max-w-[120px] ${
                        isActive ? "text-amber-300" : "text-[#9A481B]"
                      }`}
                    >
                      {page.route}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-1.5 rounded-lg shrink-0 ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-[#FAF5EF] text-[#9A481B]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <h4
                        className={`text-xs font-extrabold truncate ${
                          isActive ? "text-white" : "text-[#1C1917]"
                        }`}
                      >
                        {page.title}
                      </h4>
                      <p
                        className={`text-[10px] truncate ${
                          isActive ? "text-slate-300" : "text-[#78716C]"
                        }`}
                      >
                        {page.tabDesc}
                      </p>
                    </div>
                  </div>

                  {/* Glowing active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute -bottom-1 left-4 right-4 h-1 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            2. DYNAMIC CARD CONTENT & BULLET POINTS (SNAPPY TRANSITION)
           ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-3xl bg-white border border-[#E2D9CC] shadow-2xl p-6 md:p-10 relative overflow-hidden"
          >
            {/* Top Accent Gradient Ribbon */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${activePage.accentColor}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Headline & Sub-Stage Operations */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Route Header Badge */}
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-lg bg-[#9A481B]/10 border border-[#9A481B]/20 text-[#9A481B] font-mono text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9A481B] animate-ping" />
                    <span>📍 PAGE {activePage.number}: {activePage.route}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#78716C] bg-[#FAF6F0] px-2.5 py-1 rounded-md border border-[#EBE3D7]">
                    {activePage.title}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  {activePage.headline}
                </h3>

                {/* Sub-Stage Operations List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-[#78716C] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Sub-Stage Core Operations & Automations</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePage.operations.map((op, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center gap-2.5 text-xs font-bold text-[#292524] shadow-sm hover:border-[#D9CFBF] transition-all hover:bg-white"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9A481B] shrink-0" />
                        <span>• {op}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger Button */}
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openStudioModal(activePage.appStudioTab)}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 border border-slate-700 transition-all group"
                  >
                    <span>{activePage.buttonText}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

              </div>

              {/* Right Column: Automated Deliverables & Live Interactive Previews */}
              <div className="lg:col-span-5 space-y-5 bg-[#FAF6F0] p-6 rounded-2xl border border-[#E5DCD0]">
                
                <div className="flex items-center justify-between border-b border-[#E0D5C5] pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#9A481B]" />
                    <h4 className="text-xs font-extrabold text-[#1C1917] uppercase tracking-wider">
                      Automated System Deliverables
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold bg-[#9A481B]/10 text-[#9A481B] px-2 py-0.5 rounded">
                    Instant Output
                  </span>
                </div>

                {/* Deliverables Badges */}
                <div className="space-y-3">
                  {activePage.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white border border-[#E2D8C8] shadow-sm flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          {item.iconType === "pdf" && <FileText className="w-4 h-4 text-rose-600 shrink-0" />}
                          {item.iconType === "qr" && <QrCode className="w-4 h-4 text-indigo-600 shrink-0" />}
                          {item.iconType === "excel" && <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />}
                          {item.iconType === "chart" && <Table className="w-4 h-4 text-amber-600 shrink-0" />}
                          {item.iconType === "security" && <Shield className="w-4 h-4 text-purple-600 shrink-0" />}

                          <span className="text-xs font-extrabold text-[#1C1917]">
                            {item.title}
                          </span>
                        </div>

                        {item.previewable && item.docData && (
                          <button
                            onClick={() => setPreviewDocModal(item.docData || null)}
                            className="px-2.5 py-1 rounded-lg bg-[#9A481B]/10 hover:bg-[#9A481B] text-[#9A481B] hover:text-white font-bold text-[11px] flex items-center gap-1 transition-all"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Preview 👁</span>
                          </button>
                        )}
                      </div>

                      <p className="text-[11px] text-[#78716C] leading-snug">
                        Generated dynamically with real-time barcode telemetry & customer header signatures.
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quick Studio Trigger inside Deliverable Card */}
                <button
                  onClick={() => openStudioModal(activePage.appStudioTab)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-[#FAF6F0] border border-[#DCD1C0] text-[#9A481B] font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Launch Live UI Mockup for {activePage.title}</span>
                </button>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* =========================================================================
          3. INTERACTIVE APP STUDIO MODAL (PRE-SELECTED TO TARGET PAGE TAB)
         ========================================================================= */}
      <AnimatePresence>
        {appStudioModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl overflow-y-auto shadow-2xl p-4 sm:p-6 border border-[#E0D8CB]"
            >
              {/* Header inside Modal */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD5] mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="RESHAM Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="relative h-5.5 w-32">
                        <Image
                          src="/images/wordmark-clean.png"
                          alt="RESHAM"
                          fill
                          unoptimized
                          className="object-contain object-left"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#9A481B] bg-[#9A481B]/10 px-2 py-0.5 rounded-md">
                        App Studio • Live Mockup
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-[#78716C]">
                      Viewing module: <span className="font-bold text-slate-900">/{targetStudioTab}</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setAppStudioModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-[#57534E] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Render Real App Preview with activeTab passed */}
              <RealAppDashboardPreview activeTab={targetStudioTab} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          4. DELIVERABLE DOCUMENT / QR STICKER PREVIEW MODAL
         ========================================================================= */}
      <AnimatePresence>
        {previewDocModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E0D8CB]"
            >
              {/* Top Banner */}
              <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                    {previewDocModal.type === "pdf" ? "📄 AUTOMATED PDF PREVIEW" : previewDocModal.type === "qr" ? "🏷️ THERMAL QR STICKER PREVIEW" : "📊 EXCEL REPORT SPEC PREVIEW"}
                  </div>
                  <h4 className="text-base font-extrabold text-white mt-0.5">
                    {previewDocModal.docTitle}
                  </h4>
                  <p className="text-[11px] text-slate-300 font-mono">
                    Doc ID: {previewDocModal.docNumber}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewDocModal(null)}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-5 bg-[#FAF8F5]">
                <div className="text-center pb-2 border-b border-[#E8E2D8]">
                  <p className="text-xs font-bold text-[#9A481B] tracking-wider uppercase">
                    {previewDocModal.subtitle}
                  </p>
                  <p className="text-[11px] text-[#78716C] mt-0.5">
                    Surat Textile District • Real-Time Automated Output
                  </p>
                </div>

                {/* Details Table */}
                <div className="bg-white rounded-xl p-4 border border-[#E5DFD5] space-y-2.5 shadow-sm">
                  {previewDocModal.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-none">
                      <span className="font-semibold text-[#78716C]">{detail.label}</span>
                      <span className="font-bold text-[#1C1917] font-mono text-right">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* QR Code Graphic if QR type */}
                {previewDocModal.type === "qr" && previewDocModal.codeText && (
                  <div className="p-4 rounded-xl bg-white border border-[#E5DFD5] text-center space-y-2 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-slate-900 rounded-lg p-2 flex items-center justify-center shadow-inner">
                      <QrCode className="w-24 h-24 text-white" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                      {previewDocModal.codeText}
                    </span>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => setPreviewDocModal(null)}
                    className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
                  >
                    Close Preview
                  </button>
                  <button
                    onClick={() => {
                      alert(`Downloading official document sample: ${previewDocModal.docNumber}`);
                      setPreviewDocModal(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#9A481B] hover:bg-[#803a14] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Output</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
