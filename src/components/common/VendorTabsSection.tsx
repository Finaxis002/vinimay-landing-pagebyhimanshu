"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircle2,
  Building2,
  ArrowRight,
  FileCheck,
  PackageCheck,
  FileText,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";
import ArcHeading from "@/components/common/ArcHeading";

export interface VendorTabItem {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}

const VENDOR_TABS_DATA: VendorTabItem[] = [
  {
    id: "directory",
    label: "SUPPLIER DIRECTORY",
    badge: "CENTRAL DIRECTORY",
    title: "Supplier Profiles, Bank Details & MSME Records",
    description:
      "Maintain a verified master directory of all your suppliers. Store GSTIN, official trade names, verified bank accounts for NEFT/RTGS, and MSME 45-day payment statutory flags.",
    bullets: [
      "Auto-validates supplier GSTIN and active taxpayer filing status",
      "Stores verified bank account, IFSC, and preferred payment methods",
      "MSME classification tracking to ensure statutory compliance under Section 43B(h)",
    ],
    ctaText: "Explore Vendor Directory",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "purchaseorders",
    label: "PURCHASE ORDERS",
    badge: "PROCUREMENT WORKFLOW",
    title: "1-Click Purchase Orders & Supplier Dispatch",
    description:
      "Generate professional, itemized Purchase Orders (PO) the moment inventory dips below safety thresholds. Dispatch official PO documents directly to supplier emails or WhatsApp.",
    bullets: [
      "Auto-generates POs based on reorder thresholds and past consumption rates",
      "Item-wise agreed supplier rates, tax slabs, and delivery schedules",
      "Full revision tracking and approval status (Draft, Sent, Confirmed)",
    ],
    ctaText: "Create Purchase Order",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "grn",
    label: "GOODS INWARD (GRN)",
    badge: "INVENTORY AUDIT",
    title: "Goods Receipt Notes (GRN) & Physical Inspection",
    description:
      "Verify incoming warehouse stock against your original Purchase Order before making payments. Log damaged or rejected units and increment available stock automatically.",
    bullets: [
      "Auto-matches received quantities against Purchase Order line items",
      "Logs damaged, short, or defective goods with instant vendor debit note alerts",
      "Instantly increments warehouse stock ledgers upon GRN verification",
    ],
    ctaText: "Explore GRN System",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "bills",
    label: "BILL RECORDING",
    badge: "ACCOUNTS PAYABLE",
    title: "Vendor Tax Invoices & Purchase Booking",
    description:
      "Record vendor invoices in seconds. Match incoming bills against PO numbers to prevent duplicate billing and verify purchase prices before booking expenses.",
    bullets: [
      "Three-way matching between Purchase Order, Goods Receipt, and Vendor Bill",
      "Item-wise tax split (CGST, SGST, IGST) automatically mapped to expense ledgers",
      "Flags duplicate invoice numbers or price discrepancy warnings automatically",
    ],
    ctaText: "Record Vendor Bill",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "itcrecon",
    label: "GSTR-2B ITC RECON",
    badge: "TAX CREDIT PROTECTION",
    title: "100% Input Tax Credit (ITC) Protection",
    description:
      "Never lose tax credits because a supplier failed to file their GSTR-1. Vinimay matches your purchase bills against auto-populated GSTR-2B data to flag defaulters immediately.",
    bullets: [
      "Automated comparison of recorded purchase tax against official GSTR-2B entries",
      "Identifies missing invoices, tax amount mismatches, and delayed supplier filings",
      "Withhold tax payment until supplier reflects invoice on the government portal",
    ],
    ctaText: "Run 2B Reconciliation",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "payables",
    label: "PAYABLE CALENDAR",
    badge: "CASH FLOW OPTIMIZATION",
    title: "Due Date Tracking & Batch Payment Schedules",
    description:
      "Stay ahead of payment deadlines without straining your working capital. View aging schedules of trade payables, avoid supplier late fees, and batch payouts cleanly.",
    bullets: [
      "Age-wise payables analysis: Current (0-15 days), Due Soon, and Overdue",
      "Calendar alerts to claim early-payment cash discounts from suppliers",
      "Batch payout exports compatible with corporate net banking portals",
    ],
    ctaText: "View Payables Schedule",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function VendorTabsSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = VENDOR_TABS_DATA[activeTabIdx] || VENDOR_TABS_DATA[0];

  const contentRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeEl = tabRefs.current[activeTabIdx];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTabIdx]);

  useEffect(() => {
    const handleResize = () => {
      const activeEl = tabRefs.current[activeTabIdx];
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTabIdx]);

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
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [activeTabIdx]);

  return (
    <section className="w-full py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <Building2 className="w-4 h-4 text-primary" />
            <span>PROCUREMENT &amp; ACCOUNTS PAYABLE AUTOMATION</span>
          </div>
          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-black"
          >
            What makes Vinimay Vendor Management seamless
          </ArcHeading>
        </div>

        {/* Tab Navigation Bar */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="relative flex items-stretch justify-start md:justify-center bg-white rounded-xl border border-slate-200 shadow-xs divide-x divide-slate-200 w-max md:w-full mx-auto">
              {VENDOR_TABS_DATA.map((tab, idx) => {
                const isActive = activeTabIdx === idx;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className={`relative shrink-0 flex-1 px-4 sm:px-5 py-4 text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer select-none text-center ${
                      isActive
                        ? "text-slate-900 font-extrabold bg-slate-50/40"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50/20"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              {/* Smooth Animated Sliding Indicator */}
              <div
                className="absolute bottom-0 h-1 bg-primary transition-all duration-300 ease-out z-10 pointer-events-none rounded-full"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div ref={contentRef} className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Authentic Mockup Card */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              <div className="absolute -top-4 -left-4 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-purple-100/60 -z-0 pointer-events-none" />
              <div
                className="absolute -top-1 left-8 w-24 h-16 pointer-events-none opacity-40 -z-0"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {activeTabIdx === 0 && <VendorDirectoryMockup />}
              {activeTabIdx === 1 && <PurchaseOrderMockup />}
              {activeTabIdx === 2 && <GrnMockup />}
              {activeTabIdx === 3 && <VendorBillMockup />}
              {activeTabIdx === 4 && <ItcReconMockup />}
              {activeTabIdx === 5 && <PayablesCalendarMockup />}
            </div>

            {/* Right Column: Title, Explanations & Bullet Points */}
            <div className="lg:col-span-6 space-y-5 lg:pl-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary-50 px-3 py-1 rounded-full border border-primary/20 inline-block mb-3">
                  {activeTab.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  {activeTab.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeTab.description}
                </p>
              </div>

              <ul className="space-y-3 pt-1">
                {activeTab.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-amber-500/80 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <a
                  href={activeTab.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 group cursor-pointer"
                >
                  <OsmoRoll>{activeTab.ctaText}</OsmoRoll>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   MOCKUP 1: SUPPLIER DIRECTORY
   ========================================================================= */
function VendorDirectoryMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
            AT
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">ABC Traders &amp; Electronics</div>
            <div className="text-[10px] text-slate-500">Tier-1 Hardware Supplier</div>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          GST Regular
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Supplier GSTIN</span>
          <span className="font-mono font-bold text-slate-800">23AABCC8871Z1Z8</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Bank &amp; IFSC</span>
          <span className="font-mono text-slate-800">HDFC0001042 • A/C ...9842</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">MSME Classification</span>
          <span className="font-semibold text-purple-800">Small Enterprise (UDYAM Reg)</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-purple-50/50 border border-purple-200">
          <span className="text-purple-900 font-medium">Payment Terms</span>
          <span className="font-bold text-purple-900">Net 45 Days (Sec 43B Compliant)</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[11px] flex items-center justify-between">
        <span>Total POs Fulfilled: 48</span>
        <span className="text-emerald-400 font-bold">100% On-Time</span>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 2: PURCHASE ORDERS (PO)
   ========================================================================= */
function PurchaseOrderMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <FileCheck className="w-4 h-4 text-purple-600" />
          <span>Purchase Order #PO-2026-018</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
          CONFIRMED
        </span>
      </div>

      <div className="p-2.5 rounded-xl bg-purple-50/40 border border-purple-200 flex items-center justify-between text-xs">
        <div>
          <div className="text-[10px] text-slate-500">To Supplier</div>
          <div className="font-bold text-slate-900">ABC Traders &amp; Electronics</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-slate-500">Delivery Due</div>
          <div className="font-bold text-purple-900">30-Nov-2026</div>
        </div>
      </div>

      <div className="space-y-1 text-xs">
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <span>Thermal Paper Roll (3-inch) × 200 Units</span>
          <span className="font-mono font-bold text-slate-900">₹9,000.00</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <span>Barcode Laser Scanner (USB) × 5 Units</span>
          <span className="font-mono font-bold text-slate-900">₹14,500.00</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-400">Total PO Value (Incl. GST)</div>
          <div className="text-base font-black font-mono">₹27,730.00</div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-primary text-white text-[10px] font-bold">
          Dispatch via Email
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 3: GOODS INWARD (GRN)
   ========================================================================= */
function GrnMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <PackageCheck className="w-4 h-4 text-purple-600" />
          <span>Goods Receipt Note (GRN #094)</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Warehouse Inwarded
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Matched Purchase Order</span>
          <span className="font-mono font-bold text-slate-900">#PO-2026-018</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Ordered Quantity</span>
          <span className="font-bold text-slate-800">205 Total Units</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200">
          <span className="text-emerald-900 font-medium">Physical Accepted</span>
          <span className="font-bold text-emerald-800">205 Units (0 Defects)</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-200 flex items-center justify-between text-xs">
        <span className="text-purple-900 font-semibold">
          Central Godown Stock Incremented
        </span>
        <CheckCircle2 className="w-4 h-4 text-purple-600" />
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center font-medium">
        Prevents paying for damaged or undelivered goods.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 4: BILL RECORDING
   ========================================================================= */
function VendorBillMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <FileText className="w-4 h-4 text-purple-600" />
          <span>Vendor Bill Booking #BILL-882</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
          3-Way Matched
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Supplier Invoice No.</span>
          <span className="font-mono font-bold text-slate-800">INV-ABC/24/0912</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Linked GRN &amp; PO</span>
          <span className="font-mono text-slate-700 font-semibold">GRN-094 • PO-018</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Taxable Goods Total</span>
          <span className="font-mono font-bold text-slate-900">₹23,500.00</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-purple-50/50 border border-purple-200">
          <span className="text-purple-900 font-medium">Eligible Input Tax (IGST 18%)</span>
          <span className="font-mono font-bold text-purple-900">₹4,230.00</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
        <div>
          <div className="text-[10px] text-slate-400">Total Amount Payable</div>
          <div className="text-base font-black font-mono">₹27,730.00</div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold">
          Book to Ledger
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 5: GSTR-2B ITC RECON
   ========================================================================= */
function ItcReconMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <ShieldCheck className="w-4 h-4 text-purple-600" />
          <span>GSTR-2B Automated ITC Reconciliation</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
          100% RECONCILED
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
          <div className="text-[10px] text-slate-500 font-medium">Purchase Register ITC</div>
          <div className="text-base font-bold text-slate-900 font-mono mt-0.5">
            ₹1,18,450
          </div>
          <div className="text-[9px] text-slate-400">Our recorded bills</div>
        </div>

        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
          <div className="text-[10px] text-slate-500 font-medium">Portal 2B Matched</div>
          <div className="text-base font-bold text-emerald-700 font-mono mt-0.5">
            ₹1,18,450
          </div>
          <div className="text-[9px] text-emerald-600 font-semibold">● 0 Discrepancy</div>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-200 space-y-1 text-xs">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-bold text-purple-900">Supplier Filing Check</span>
          <span className="text-[10px] font-mono text-purple-700 bg-white px-2 py-0.5 rounded border border-purple-200">
            GSTR-1 Filed
          </span>
        </div>
        <div className="text-[10px] text-slate-600">
          All 34 supplier bills are reflected on the official government portal.
        </div>
      </div>

      <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] text-center font-semibold">
        Zero ITC loss guaranteed before filing monthly GSTR-3B.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 6: PAYABLES CALENDAR
   ========================================================================= */
function PayablesCalendarMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <CalendarDays className="w-4 h-4 text-purple-600" />
          <span>Payables Aging &amp; Due Date Calendar</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
          Due in 7 Days
        </span>
      </div>

      <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-200 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold text-purple-800 uppercase tracking-wide">
            UPCOMING PAYABLES DUE
          </div>
          <div className="text-lg font-black text-purple-950 font-mono mt-0.5">
            ₹74,200.00
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[10px] font-bold">
          Batch Settle
        </span>
      </div>

      <div className="space-y-1 text-xs">
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <div>
            <div className="font-bold text-slate-800">ABC Traders (PO-018)</div>
            <div className="text-[10px] text-emerald-600">Due in 5 days (2% Early Cash Disc)</div>
          </div>
          <span className="font-mono font-bold text-slate-900">₹27,730</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <div>
            <div className="font-bold text-slate-800">Apex Logistics &amp; Transport</div>
            <div className="text-[10px] text-slate-500">Due in 8 days</div>
          </div>
          <span className="font-mono font-bold text-slate-900">₹46,470</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center font-medium">
        ⚡ Export batch payout file for 1-click bank transfer.
      </div>
    </div>
  );
}