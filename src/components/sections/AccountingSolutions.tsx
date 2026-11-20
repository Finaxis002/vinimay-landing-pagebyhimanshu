"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, BookOpen, Sparkles, PieChart, Users, CheckCircle, ShieldCheck } from "lucide-react";
import { ACCOUNTING_ITEMS } from "@/content/accounting-solutions";
import { OsmoRoll } from "../common/OsmoRoll";

export default function AccountingSolutions() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeItem = ACCOUNTING_ITEMS[activeIdx];

  const renderVisualContent = (idx: number) => {
    switch (idx) {
      case 0:
        return (
          <div className="bg-white/95 rounded-2xl p-5 border border-rose-100/80 shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                General Ledger &amp; Contra Entries
              </span>
              <span className="text-[10px] font-mono text-slate-400">FY 2026-27</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg">
                <span className="text-slate-700 font-medium">Customer Receivable (Sharma Traders)</span>
                <span className="font-mono text-emerald-600 font-bold">₹1,45,200 (CR)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg">
                <span className="text-slate-700 font-medium">Bank Account (HDFC Reconciliation)</span>
                <span className="font-mono text-blue-600 font-bold">₹3,84,500 (DR)</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] pt-1 text-slate-500 font-medium">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <CheckCircle className="w-3.5 h-3.5" /> 0 Unreconciled Entries
              </span>
              <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200">Balanced</span>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="bg-white/95 rounded-2xl p-5 border border-rose-100/80 shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Smart Auto-Ledger Categorization
              </span>
              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">AI Active</span>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="bg-purple-50/80 border border-purple-200/80 p-2.5 rounded-xl">
                <p className="text-slate-500 text-[10px]">Scanned Expense Receipt:</p>
                <p className="font-bold text-slate-800">&quot;Office Electricity &amp; Power Bill&quot;</p>
                <p className="text-purple-700 font-semibold text-[10px] mt-1">
                  ✔ Auto-mapped to: Utilities &amp; Power Expense (18% GST Input Credit)
                </p>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg text-[10px]">
                <span className="text-slate-600">Contra Entry Auto-Detected:</span>
                <span className="font-bold text-emerald-600">Petty Cash ⇄ Bank</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white/95 rounded-2xl p-5 border border-rose-100/80 shadow-md space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Profit &amp; Loss / Balance Sheet
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Live Sync</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-[9px] text-slate-400 uppercase font-semibold block">Net Profit (YTD)</span>
                <span className="text-base font-extrabold text-emerald-600 font-mono">₹4,28,450</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="text-[9px] text-slate-400 uppercase font-semibold block">Assets vs Liab.</span>
                <span className="text-base font-extrabold text-slate-800 font-mono">₹18.6L (Balanced)</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1">
              <span>
                Receivables: <strong className="text-slate-800">₹88,200 due this week</strong>
              </span>
              <span className="text-rose-600 font-bold">Party Aging Ready</span>
            </div>
          </div>
        );
      case 3:
      default:
        return (
          <div className="bg-white/95 rounded-2xl p-5 border border-rose-100/80 shadow-md space-y-2.5">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-800">Role-Based Access Permissions</span>
              <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                Audit Trail ON
              </span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg">
                <span className="font-bold text-slate-800">CA &amp; Tax Auditor</span>
                <span className="text-purple-600 font-semibold bg-purple-50 px-2 py-0.5 rounded">Read-Only All Ledgers</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg">
                <span className="font-bold text-slate-800">Senior Accountant</span>
                <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">Full Edit &amp; Journal</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-lg">
                <span className="font-bold text-slate-800">Billing Counter Staff</span>
                <span className="text-slate-600 font-semibold bg-slate-200 px-2 py-0.5 rounded">
                  POS Only (Financials Masked)
                </span>
              </div>
            </div>
          </div>
        );
    }
  };

  const renderBadgeIcon = (icon: string) => {
    switch (icon) {
      case "sparkles":
        return <Sparkles className="w-4 h-4" />;
      case "pie-chart":
        return <PieChart className="w-4 h-4" />;
      case "users":
        return <Users className="w-4 h-4" />;
      case "book-open":
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="accounting-solutions"
      className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative overflow-hidden border-t border-slate-100"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/90 text-purple-700 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-xs">
          <span>REAL ACCOUNTING</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          More than an invoice maker
        </h2>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          Your CA will be comfortable with it. Everything is double-entry and report-ready.
        </p>
      </div>

      {/* Accordion + Right Feature Card */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Interactive Vertical Accordion */}
        <div className="lg:col-span-6 space-y-0" id="accounting-accordion">
          {ACCOUNTING_ITEMS.map((item, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className="border-b border-slate-200/90 py-5 sm:py-6 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl sm:text-2xl font-bold transition-colors ${
                      isOpen ? "text-rose-600" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-180 bg-rose-50 text-rose-600" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-2.5 overflow-hidden transition-all duration-300">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
                    <a
                      href="#inquiry"
                      className="inline-flex items-center gap-1.5 text-rose-600 hover:text-rose-700 font-bold text-sm mt-3 group"
                    >
                      <OsmoRoll>Explore</OsmoRoll>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Visual Feature Illustration Card */}
        <div className="lg:col-span-6 w-full">
          <div className="relative bg-gradient-to-br from-[#fff1f2] via-[#fdf2f8] to-[#f5f3ff] rounded-3xl p-6 sm:p-9 border border-rose-100/90 shadow-xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-400/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header Badge & Status */}
            <div className="flex items-center justify-between z-10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
                  {renderBadgeIcon(activeItem.icon)}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-white/90 border border-rose-200 px-3 py-1 rounded-full shadow-xs">
                  {activeItem.badge}
                </span>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {activeItem.status}
              </span>
            </div>

            {/* Visual Preview Graphic */}
            <div className="relative z-10 my-auto py-2 transition-all duration-300">
              {renderVisualContent(activeIdx)}
            </div>

            {/* Bottom Meta Note */}
            <div className="pt-6 border-t border-rose-100/80 flex items-center justify-between text-xs z-10">
              <span className="text-slate-500 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Audit-Ready &amp; CA Friendly</span>
              </span>
              <span className="font-bold text-rose-600 font-mono">100% Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
