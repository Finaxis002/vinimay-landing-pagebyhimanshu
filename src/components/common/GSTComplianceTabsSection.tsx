"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
  Building2,
} from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";
import GstInvoiceMockupSheet from "@/components/features/GstInvoiceMockupSheet";
import ArcHeading from "@/components/common/ArcHeading";

export interface GSTTabItem {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}

const GST_TABS_DATA: GSTTabItem[] = [
  {
    id: "custom",
    label: "Custom Invoice",
    badge: "BESPOKE BRANDING",
    title: "Tailored Invoice Templates with Your Custom Brand Identity",
    description:
      "Design professional bills that match your brand. Customize company logos, typography, accent color palettes, and seamlessly switch between multi-format layouts (A4, A5, and thermal) with instant real-time preview.",
    bullets: [
      "Upload high-resolution business logo and define custom brand accent colors (e.g. Teal, Indigo, Rose)",
      "1-click A4 / A5 template switcher with instant live preview and zero formatting distortion",
      "Professional layout complete with authorized signatory, bank details, and customizable terms",
    ],
    ctaText: "Customize Your Template",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "gst",
    label: "GST & Non-GST Invoices",
    badge: "100% STATUTORY COMPLIANCE",
    title: "Statutory Tax Invoices with Automated CGST & SGST Splits",
    description:
      "Generate 100% compliant GST and non-GST tax invoices in seconds. Vinimay validates the buyer's GSTIN, verifies state codes to automatically split CGST and SGST (or IGST), and generates accurate HSN/SAC statutory tables.",
    bullets: [
      "Automatic CGST (9%) & SGST (9%) split with item-wise HSN/SAC breakdown table",
      "Real-time tax calculation audit (e.g. ₹1,715 taxable + ₹130.50 tax = ₹1,845.50)",
      "Embedded dynamic UPI QR code on every printed & PDF invoice for instant settlements",
    ],
    ctaText: "Generate GST Invoice",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "tracking",
    label: "Payment Tracking",
    badge: "AUDIT-READY RECEIVABLES",
    title: "Real-Time Customer Ledger & Outstanding Receivables",
    description:
      "Track exactly who owes what across all customers in real time. Full ledger dashboard with net receivables, total sales, discounts, receipts, and individual customer status badges.",
    bullets: [
      "Live tracking of Net Receivables (₹17,125.57) and customer balances in one screen",
      "Instant status badges: 'Owes ₹1,845.50', 'Advance ₹-2,500', or 'Settled ₹0'",
      "1-click customer ledger drill-down, receipt logs, and CSV export for complete audit readiness",
    ],
    ctaText: "View Customer Ledger",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

/* =========================================================================
   MOCKUP 1: CUSTOM INVOICE TEMPLATE BUILDER
   ========================================================================= */
function CustomInvoiceMockup() {
  const [selectedFormat, setSelectedFormat] = useState<"a4" | "a5" | "thermal">("a4");
  const [accentColor, setAccentColor] = useState<"teal" | "indigo" | "purple">("teal");

  const colors = {
    teal: {
      bg: "bg-teal-600",
      text: "text-teal-700",
      border: "border-teal-200",
      light: "bg-teal-50",
    },
    indigo: {
      bg: "bg-indigo-600",
      text: "text-indigo-700",
      border: "border-indigo-200",
      light: "bg-indigo-50",
    },
    purple: {
      bg: "bg-purple-600",
      text: "text-purple-700",
      border: "border-purple-200",
      light: "bg-purple-50",
    },
  };

  const currentTheme = colors[accentColor];

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-300/40 p-4 sm:p-5 relative z-10 space-y-3.5">
      {/* Studio Header Toolbar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-lg ${currentTheme.bg} flex items-center justify-center text-white text-xs font-black shadow-xs`}>
            P
          </div>
          <div>
            <div className="font-extrabold text-xs text-slate-900 tracking-tight">PrimeFit Studio • Template Studio</div>
            <div className="text-[10px] text-slate-500">Live Branded A4 &amp; Multi-Format Preview</div>
          </div>
        </div>

        {/* Accent Color Swatches */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200/80">
          {(["teal", "indigo", "purple"] as const).map((colorKey) => (
            <button
              key={colorKey}
              type="button"
              onClick={() => setAccentColor(colorKey)}
              className={`w-4 h-4 rounded-full transition-transform cursor-pointer ${
                colorKey === "teal"
                  ? "bg-teal-600"
                  : colorKey === "indigo"
                  ? "bg-indigo-600"
                  : "bg-purple-600"
              } ${accentColor === colorKey ? "scale-125 ring-2 ring-white ring-offset-1" : "opacity-70 hover:opacity-100"}`}
              aria-label={`Select ${colorKey} theme`}
            />
          ))}
        </div>
      </div>

      {/* Format Selector Pills */}
      <div className="flex items-center gap-2 text-[11px] font-bold">
        <span className="text-slate-500 text-[10px] uppercase tracking-wider">Format:</span>
        {(["a4", "a5", "thermal"] as const).map((fmt) => (
          <button
            key={fmt}
            type="button"
            onClick={() => setSelectedFormat(fmt)}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer select-none uppercase text-[10px] ${
              selectedFormat === fmt
                ? `${currentTheme.bg} text-white shadow-xs`
                : "bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
          >
            {fmt === "a4" ? "A4 Standard" : fmt === "a5" ? "A5 Compact" : "3\" Thermal POS"}
          </button>
        ))}
      </div>

      {/* Simulated Live Invoice Sheet */}
      <div className={`p-4 rounded-xl border ${currentTheme.border} ${currentTheme.light} space-y-3 transition-colors duration-300 font-sans`}>
        {/* Invoice Top Header */}
        <div className="flex items-start justify-between border-b border-slate-200/80 pb-2.5">
          <div>
            <div className={`text-base font-black ${currentTheme.text} tracking-tight`}>PrimeFit Studio</div>
            <div className="text-[10px] text-slate-600">Fitness &amp; Wellness Hub, Plot 42, Commercial Zone, Bhopal</div>
            <div className="text-[10px] font-mono text-slate-500">GSTIN: 23AABCP8921M1Z4</div>
          </div>
          <div className="text-right">
            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${currentTheme.bg} text-white tracking-wider`}>
              CUSTOM INVOICE
            </span>
            <div className="text-[10px] font-mono font-bold text-slate-800 mt-1">#PF26-100019</div>
            <div className="text-[9px] text-slate-500">Date: 25/11/2026</div>
          </div>
        </div>

        {/* Bill To */}
        <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 text-[11px] flex justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Billed To</span>
            <span className="font-bold text-slate-800">Vikram Malhotra</span>
            <span className="text-[10px] text-slate-500 block">+91 98260 44120 • Regular VIP</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Payment Terms</span>
            <span className="font-semibold text-emerald-700">Due On Receipt</span>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="bg-white rounded-lg border border-slate-200/80 overflow-hidden text-[10px]">
          <div className="grid grid-cols-12 bg-slate-100/80 p-1.5 font-bold text-slate-600 border-b border-slate-200">
            <span className="col-span-6">Description</span>
            <span className="col-span-2 text-center">HSN</span>
            <span className="col-span-2 text-center">Qty</span>
            <span className="col-span-2 text-right">Amount</span>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="grid grid-cols-12 p-1.5 text-slate-700">
              <span className="col-span-6 font-medium">VIP Annual Membership</span>
              <span className="col-span-2 text-center font-mono text-slate-500">9997</span>
              <span className="col-span-2 text-center font-mono">1 Yr</span>
              <span className="col-span-2 text-right font-mono font-bold">₹18,000</span>
            </div>
            <div className="grid grid-cols-12 p-1.5 text-slate-700">
              <span className="col-span-6 font-medium">Personal Training (24 Sessions)</span>
              <span className="col-span-2 text-center font-mono text-slate-500">9993</span>
              <span className="col-span-2 text-center font-mono">1 Pk</span>
              <span className="col-span-2 text-right font-mono font-bold">₹12,000</span>
            </div>
          </div>
        </div>

        {/* Totals & Signature */}
        <div className="flex items-end justify-between pt-1 text-[11px]">
          <div className="text-[10px] text-slate-500">
            <div className="font-semibold text-slate-700">Authorized Digital Signatory:</div>
            <div className="italic text-slate-600">PrimeFit Technologies Pvt Ltd</div>
          </div>
          <div className="text-right bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs font-mono">
            <div className="text-[10px] text-slate-500">Total Payable:</div>
            <div className={`text-sm font-extrabold ${currentTheme.text}`}>₹30,000.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 2: LIVE CUSTOMER LEDGER & RECEIVABLES TRACKING
   ========================================================================= */
function PaymentTrackingMockup() {
  return (
    <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-300/40 p-4 sm:p-5 relative z-10 space-y-3.5">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-xs font-black shadow-xs">
            <Building2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-extrabold text-xs text-slate-900 tracking-tight">Customer Accounts Receivable Ledger</div>
            <div className="text-[10px] text-slate-500">Live Running Balances &amp; Debtors Audit</div>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
          Updated 2m ago
        </span>
      </div>

      {/* 3 Metric Tiles */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="p-2 rounded-lg bg-rose-50 border border-rose-200">
          <div className="text-[10px] text-rose-700 font-semibold">Net Receivables</div>
          <div className="font-mono font-bold text-rose-900 text-xs mt-0.5">₹17,125.57</div>
          <div className="text-[9px] text-rose-600">2 Overdue</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div className="text-[10px] text-slate-600 font-semibold">Total Invoiced</div>
          <div className="font-mono font-bold text-slate-900 text-xs mt-0.5">₹1,84,500</div>
          <div className="text-[9px] text-slate-500">This Month</div>
        </div>
        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
          <div className="text-[10px] text-emerald-700 font-semibold">Total Collected</div>
          <div className="font-mono font-bold text-emerald-900 text-xs mt-0.5">₹1,67,374</div>
          <div className="text-[9px] text-emerald-600">90.7% Cleared</div>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden text-[11px]">
        <div className="grid grid-cols-12 bg-slate-100/80 p-1.5 font-bold text-slate-600 border-b border-slate-200 text-[10px]">
          <span className="col-span-5">Party / Customer</span>
          <span className="col-span-4 text-center">Outstanding</span>
          <span className="col-span-3 text-right">Status</span>
        </div>
        <div className="divide-y divide-slate-100">
          <div className="grid grid-cols-12 p-2 items-center text-slate-700">
            <span className="col-span-5 font-semibold text-slate-900 truncate">Apex Traders</span>
            <span className="col-span-4 text-center font-mono font-bold text-rose-600">₹1,845.50</span>
            <span className="col-span-3 text-right">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-800">
                Owes
              </span>
            </span>
          </div>
          <div className="grid grid-cols-12 p-2 items-center text-slate-700">
            <span className="col-span-5 font-semibold text-slate-900 truncate">Sharma Traders</span>
            <span className="col-span-4 text-center font-mono font-bold text-slate-400">₹0.00</span>
            <span className="col-span-3 text-right">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">
                Settled ✓
              </span>
            </span>
          </div>
          <div className="grid grid-cols-12 p-2 items-center text-slate-700">
            <span className="col-span-5 font-semibold text-slate-900 truncate">PrimeFit Studio</span>
            <span className="col-span-4 text-center font-mono font-bold text-blue-600">-₹2,500.00</span>
            <span className="col-span-3 text-right">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-100 text-blue-800">
                Advance
              </span>
            </span>
          </div>
          <div className="grid grid-cols-12 p-2 items-center text-slate-700">
            <span className="col-span-5 font-semibold text-slate-900 truncate">Patel Logistics</span>
            <span className="col-span-4 text-center font-mono font-bold text-amber-600">₹15,280.00</span>
            <span className="col-span-3 text-right">
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
                Due in 6d
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between text-[11px] pt-1">
        <span className="text-slate-500 text-[10px]">1-click automated ledger reconciliation</span>
        <button
          type="button"
          className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white font-bold text-[10px] cursor-pointer"
        >
          Export CSV Ledger
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN COMPONENT
   ========================================================================= */
export default function GSTComplianceTabsSection() {
  // Default to the 2nd tab: "GST & Non-GST Invoices" (index 1)
  const [activeTabIdx, setActiveTabIdx] = useState(1);
  const activeTab = GST_TABS_DATA[activeTabIdx] || GST_TABS_DATA[1];

  const [gstSubtype, setGstSubtype] = useState<"gst" | "nongst">("gst");

  const contentRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const content = contentRef.current;
    if (!content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.fromTo(
      content,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [activeTabIdx, gstSubtype]);

  const isGstTab = activeTab.id === "gst";

  const displayBadge = isGstTab
    ? gstSubtype === "gst"
      ? "100% STATUTORY COMPLIANCE"
      : "CLEAN COMMERCIAL BILLING"
    : activeTab.badge;

  const displayTitle = isGstTab
    ? gstSubtype === "gst"
      ? "Statutory Tax Invoices with Automated CGST & SGST Splits"
      : "Non-GST Invoices & Bills of Supply with Zero Tax Friction"
    : activeTab.title;

  const displayDescription = isGstTab
    ? gstSubtype === "gst"
      ? "Generate 100% compliant GST tax invoices in seconds. Vinimay validates the buyer's GSTIN, verifies state codes to automatically split CGST and SGST (or IGST), and generates accurate HSN/SAC statutory tables so your buyers can claim full Input Tax Credit (ITC)."
      : "Ideal for composition scheme dealers, unregistered retailers, or exempt goods and services. Issue crisp commercial invoices without tax calculation clutter, while retaining full inventory deduction, customer ledger tracking, and instant QR payments."
    : activeTab.description;

  const displayBullets = isGstTab
    ? gstSubtype === "gst"
      ? [
          "Automatic CGST (9%) & SGST (9%) split with item-wise HSN/SAC breakdown table",
          "Statutory tax calculation audit (₹1,715 taxable + ₹130.50 tax = ₹1,845.50)",
          "100% Input Tax Credit (ITC) eligible for B2B business customers",
        ]
      : [
          "Clean Bill of Supply / Commercial format with zero tax calculations or rates",
          "Ideal for composition scheme sellers, unregistered vendors & exempt supplies",
          "Embedded Dynamic UPI QR code & bank details for instant one-scan payment",
        ]
    : activeTab.bullets;

  // Render the dedicated interactive mockup for the active tab
  // When Non-GST Invoice is selected on the GST tab, show the Custom Invoice Mockup as requested
  const renderMockup = () => {
    switch (activeTab.id) {
      case "custom":
        return <CustomInvoiceMockup />;
      case "gst":
        return gstSubtype === "gst" ? <GstInvoiceMockupSheet /> : <CustomInvoiceMockup />;
      case "tracking":
        return <PaymentTrackingMockup />;
      default:
        return <GstInvoiceMockupSheet />;
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>STATUTORY GST AUTOMATION</span>
            </div>
            <div>
              <ArcHeading
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-bold"
              >
                Everything you need for effortless GST billing
              </ArcHeading>
            </div>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From bespoke custom invoice templates and automated CGST/SGST tax splits to live customer ledgers.
            </p>
          </div>
        </div>

        {/* Pill Navigation Bar: 3 Tabs (Custom Invoice, GST & Non-GST, Payment Tracking) */}
        <div className="w-full max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {GST_TABS_DATA.map((tab, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => setActiveTabIdx(idx)}
                  className={`group feature-tab-btn inline-flex items-center justify-center overflow-hidden whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none border text-center ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/25 scale-[1.02]"
                      : "bg-white text-slate-600 border-slate-200/90 hover:text-slate-900 hover:bg-slate-50/80 shadow-2xs"
                  }`}
                >
                  <OsmoRoll>{tab.label}</OsmoRoll>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Area: 2 Columns */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-5">
              {/* If on GST & Non-GST Invoices tab, display the Subtype Toggle */}
              {isGstTab && (
                <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setGstSubtype("gst")}
                    className={`group feature-tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer select-none overflow-hidden ${
                      gstSubtype === "gst"
                        ? "bg-white text-emerald-700 shadow-xs border border-emerald-200/80"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <OsmoRoll>GST Tax Invoice</OsmoRoll>
                  </button>
                  <button
                    type="button"
                    onClick={() => setGstSubtype("nongst")}
                    className={`group feature-tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer select-none overflow-hidden ${
                      gstSubtype === "nongst"
                        ? "bg-white text-blue-700 shadow-xs border border-blue-200/80"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <OsmoRoll>Non-GST Invoice</OsmoRoll>
                  </button>
                </div>
              )}

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                  {displayBadge}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  {displayTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {displayDescription}
                </p>
              </div>

              {/* Bullet Points with Checkmarks */}
              <ul className="space-y-2.5 pt-1">
                {displayBullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Side-by-Side Comparison Box */}
              {isGstTab && (
                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200">
                    <span>Key Differences at a Glance</span>
                    <span className="text-emerald-600 font-semibold">Live Comparison</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {/* GST Tax Invoice Card */}
                    <div
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                        gstSubtype === "gst"
                          ? "bg-emerald-50/90 border-emerald-300 shadow-xs ring-1 ring-emerald-200"
                          : "bg-white border-slate-200/80 hover:bg-slate-50 opacity-70"
                      }`}
                      onClick={() => setGstSubtype("gst")}
                    >
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>GST Tax Invoice</span>
                      </div>
                      <ul className="text-[10px] text-slate-600 mt-1.5 space-y-1 leading-snug">
                        <li>• Mandatory 15-digit GSTIN</li>
                        <li>• Item-wise HSN/SAC table</li>
                        <li>• CGST (9%) + SGST (9%) split</li>
                        <li>• <strong className="text-emerald-700">Buyer can claim ITC ✓</strong></li>
                      </ul>
                    </div>

                    {/* Non-GST Invoice Card */}
                    <div
                      className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                        gstSubtype === "nongst"
                          ? "bg-blue-50/90 border-blue-300 shadow-xs ring-1 ring-blue-200"
                          : "bg-white border-slate-200/80 hover:bg-slate-50 opacity-70"
                      }`}
                      onClick={() => setGstSubtype("nongst")}
                    >
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>Non-GST Invoice</span>
                      </div>
                      <ul className="text-[10px] text-slate-600 mt-1.5 space-y-1 leading-snug">
                        <li>• Custom Branded Template</li>
                        <li>• Zero tax calculation (flat)</li>
                        <li>• Multi-format layout support</li>
                        <li>• <strong className="text-blue-700">Composition friendly ✓</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button with OsmoRoll */}
              <div className="pt-2">
                <a
                  href={activeTab.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md shadow-emerald-600/20 transition-all active:scale-95 group cursor-pointer"
                >
                  <OsmoRoll>{isGstTab ? (gstSubtype === "gst" ? "Generate GST Invoice" : "Generate Custom Bill") : activeTab.ctaText}</OsmoRoll>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: High-Resolution Interactive Mockups */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Decorative Subtle Ambient Glow */}
              <div className="absolute -top-6 -left-6 w-56 h-56 rounded-full bg-emerald-100/50 blur-2xl -z-0 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-full bg-purple-100/40 blur-2xl -z-0 pointer-events-none" />

              {/* Render the Mockup corresponding to the active tab */}
              <div className="w-full flex items-center justify-center">
                {renderMockup()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
