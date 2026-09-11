"use client";

import { useState } from "react";
import {
  ClipboardList,
  Scissors,
  Users,
  Layers,
  FlaskConical,
  Package,
  ShoppingCart,
  Activity,
  FileText,
  QrCode,
  Tag,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Send,
} from "lucide-react";
import { modules, documents, ai, workflow } from "@/lib/content";

export default function OperationsHub() {
  const [activeTab, setActiveTab] = useState<"modules" | "documents" | "ai" | "workflow">("modules");

  // Interactive AI simulator state
  const [selectedAiQuestionIndex, setSelectedAiQuestionIndex] = useState(0);

  const iconMap: Record<string, any> = {
    clipboardList: ClipboardList,
    scissors: Scissors,
    users: Users,
    layers: Layers,
    flask: FlaskConical,
    package: Package,
    shoppingCart: ShoppingCart,
    activity: Activity,
    fileText: FileText,
    qrCode: QrCode,
    tag: Tag,
  };

  return (
    <section className="section-padding bg-[#FAF9F6] border-b border-slate-200">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ALL-IN-ONE TEXTILE CAPABILITIES</span>
          </div>

          <h2 className="text-h1 text-slate-900 font-extrabold tracking-tight">
            Every module, document, and workflow. Integrated.
          </h2>

          <p className="text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Explore the core engine designed specifically around how Indian textile mills, manufacturers, and fabric suppliers operate day to day.
          </p>

          {/* Interactive Mode Switches */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
            <button
              onClick={() => setActiveTab("modules")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "modules"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              Core Operations Modules
            </button>

            <button
              onClick={() => setActiveTab("workflow")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "workflow"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              Order & Mill Workflow
            </button>

            <button
              onClick={() => setActiveTab("documents")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === "documents"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              PDF & QR Document Engine
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === "ai"
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>RESHAM Assistant</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Core Operations Modules Grid */}
        {activeTab === "modules" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.items.map((mod, idx) => {
              const Icon = iconMap[mod.icon] || ClipboardList;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-amber-700 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Workflow Pipeline Visualizer */}
        {activeTab === "workflow" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Order Flow */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    END-TO-END FABRIC PIPELINE
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Order to Delivery Cycle
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Automated Tracking
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {workflow.orderFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center relative"
                  >
                    <div className="text-[10px] font-extrabold text-amber-600 uppercase">
                      Stage 0{idx + 1}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-1">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Procurement Flow */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    YARN & MATERIAL PROCUREMENT
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Supplier & Purchase Flow
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                  Instant PO PDFs
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {workflow.procurementFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center"
                  >
                    <div className="text-[10px] font-extrabold text-slate-500 uppercase">
                      Step 0{idx + 1}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-1">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Document & Sticker PDF Engine */}
        {activeTab === "documents" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                <FileText className="w-3.5 h-3.5" />
                <span>NO MANUAL FORMATTING NEEDED</span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900">
                {documents.headline}
              </h3>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {documents.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {documents.types.map((doc, idx) => {
                  const Icon = iconMap[doc.icon] || FileText;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm"
                    >
                      <Icon className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">
                        {doc.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Document PDF Mockup Preview */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl text-white space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-mono font-bold">PO-2024-049.pdf</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                  Ready to Print / WhatsApp
                </span>
              </div>

              <div className="bg-white text-slate-900 p-5 rounded-xl font-sans space-y-4 shadow-inner text-xs">
                <div className="flex justify-between border-b pb-3">
                  <div>
                    <div className="font-extrabold text-sm text-slate-900">RESHAM TEXTILES PVT LTD</div>
                    <div className="text-[10px] text-slate-500">GIDC Textile Zone, Surat, Gujarat</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-amber-600">PURCHASE ORDER</div>
                    <div className="text-[10px] text-slate-500">Date: 10 Sep 2026</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-slate-700">Vendor: Premier Yarn Suppliers</div>
                  <div className="text-[10px] text-slate-500">Item: 80s Combed Cotton Yarn • 1,200 KG • ₹380/KG</div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t text-[10px]">
                  <div className="flex items-center gap-2 text-slate-500">
                    <QrCode className="w-6 h-6 text-slate-800" />
                    <span>Scan QR for instant lot verification</span>
                  </div>
                  <div className="font-extrabold text-sm text-slate-900">Total: ₹4,56,000</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: RESHAM Assistant Simulator */}
        {activeTab === "ai" && (
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-700 text-white flex items-center justify-center font-bold shadow-md shadow-amber-600/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    RESHAM Copilot
                  </h3>
                  <span className="text-xs text-amber-400 font-medium">
                    Ask natural questions in Plain English / Hindi
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Instant Business Intelligence
              </span>
            </div>

            {/* AI Prompts Suggestions */}
            <div className="space-y-2">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Click a sample question to test:
              </span>
              <div className="flex flex-wrap gap-2">
                {ai.conversations.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAiQuestionIndex(idx)}
                    className={`text-xs px-3.5 py-2 rounded-xl transition-all font-medium text-left ${selectedAiQuestionIndex === idx
                        ? "bg-amber-600 text-white shadow-md font-bold"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                  >
                    &ldquo;{item.question}&rdquo;
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Chat Output Box */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
              {/* Question bubble */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
                  YOU
                </div>
                <div className="bg-slate-800 text-slate-100 p-3 rounded-xl text-sm font-medium">
                  {ai.conversations[selectedAiQuestionIndex].question}
                </div>
              </div>

              {/* Response bubble */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-md">
                  AI
                </div>
                <div className="bg-amber-950/60 border border-amber-600/30 text-amber-100 p-4 rounded-xl text-sm leading-relaxed font-medium space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Real-time DB Result:</span>
                  </div>
                  <div>{ai.conversations[selectedAiQuestionIndex].answer}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
