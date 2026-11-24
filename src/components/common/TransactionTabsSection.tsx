"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircle2,
  Scale,
  ArrowRight,
  Landmark,
  FileSpreadsheet,
  Receipt,
  Search,
  History,
} from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";

export interface TransactionTabItem {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}

const TRANSACTION_TABS_DATA: TransactionTabItem[] = [
  {
    id: "daybook",
    label: "DAYBOOK & JOURNAL",
    badge: "CHRONOLOGICAL LEDGER",
    title: "Real-Time Balanced Daybook & General Journal",
    description:
      "Record every monetary movement in a chronological, double-entry compliant daybook. Every debit is perfectly balanced with an equivalent credit to keep your trial balance intact.",
    bullets: [
      "Real-time debit/credit equality check prevents out-of-balance entries",
      "Instant filtering by date range, transaction type (Sales, Purchase, Payment), or cashier",
      "Summary totals of daily cash inflow, outflow, and net closing balance",
    ],
    ctaText: "Explore Daybook",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
 
 
  {
    id: "expenses",
    label: "EXPENSE TRACKING",
    badge: "COST CONTROL",
    title: "Categorized Operational & Overhead Expenses",
    description:
      "Keep operational burn strictly in check. Record petty cash expenses, vendor payments, office rent, salaries, utilities, and marketing spend categorized into custom cost centers.",
    bullets: [
      "Customizable expense categories (Rent, Utilities, Logistics, Counter Supplies)",
      "Attach bill receipts or camera snapshots directly to expense records",
      "Auto-detects Input Tax Credit (ITC) eligibility on business expenses",
    ],
    ctaText: "Track Business Expenses",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "search",
    label: "LEDGER SEARCH",
    badge: "INSTANT RETRIEVAL",
    title: "Sub-Second Global Transaction Search",
    description:
      "Find any transaction from months ago in less than half a second. Search across thousands of ledger entries by party name, cheque number, amount, narration, or date.",
    bullets: [
      "Instant fuzzy search across customer names, supplier names, and voucher narrations",
      "Filter by precise amount ranges, payment modes (Cash, UPI, Card), or bank accounts",
      "Export filtered ledger search results to Excel or PDF for audits in 1 tap",
    ],
    ctaText: "Try Ledger Search",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  }
];

export default function TransactionTabsSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = TRANSACTION_TABS_DATA[activeTabIdx] || TRANSACTION_TABS_DATA[0];

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
            <Scale className="w-4 h-4 text-[#877EFC]" />
            <span>DOUBLE-ENTRY ACCOUNTING &amp; AUDIT TRAIL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            What makes Vinimay Accounting Books audit-proof
          </h2>
        </div>

        {/* Tab Navigation Bar */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="relative flex items-stretch justify-start md:justify-center bg-white rounded-xl border border-slate-200 shadow-xs divide-x divide-slate-200 w-max md:w-full mx-auto">
              {TRANSACTION_TABS_DATA.map((tab, idx) => {
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
                className="absolute bottom-0 h-1 bg-[#877EFC] transition-all duration-300 ease-out z-10 pointer-events-none rounded-full"
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
                    "radial-gradient(#877efc 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {activeTabIdx === 0 && <DaybookMockup />}
              {activeTabIdx === 1 && <BankReconMockup />}
              {activeTabIdx === 2 && <VoucherTypesMockup />}
              {activeTabIdx === 3 && <ExpensesMockup />}
              {activeTabIdx === 4 && <LedgerSearchMockup />}
              {activeTabIdx === 5 && <AuditTrailMockup />}
            </div>

            {/* Right Column: Title, Explanations & Bullet Points */}
            <div className="lg:col-span-6 space-y-5 lg:pl-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#877EFC] bg-purple-100/60 px-3 py-1 rounded-full border border-purple-200 inline-block mb-3">
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
                  className="inline-flex items-center gap-2 bg-[#877EFC] hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 group cursor-pointer"
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
   MOCKUP 1: DAYBOOK & JOURNAL
   ========================================================================= */
function DaybookMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <Scale className="w-4 h-4 text-purple-600" />
          <span>Double-Entry Chronological Daybook</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Trial Balance: Balanced
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
          <div className="text-[10px] text-slate-500 font-medium">Total Daily Debit</div>
          <div className="text-base font-black text-slate-900 font-mono mt-0.5">
            ₹68,450.00
          </div>
          <div className="text-[9px] text-slate-400">14 Entries</div>
        </div>

        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
          <div className="text-[10px] text-slate-500 font-medium">Total Daily Credit</div>
          <div className="text-base font-black text-slate-900 font-mono mt-0.5">
            ₹68,450.00
          </div>
          <div className="text-[9px] text-emerald-600 font-semibold">● 100% Matched</div>
        </div>
      </div>

      <div className="space-y-1 text-xs">
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <div>
            <div className="font-bold text-slate-800">Bank A/C (HDFC) Dr.</div>
            <div className="text-[10px] text-slate-500">To Sharma Traders A/C (Payment)</div>
          </div>
          <span className="font-mono font-bold text-purple-900">₹28,910.00</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <div>
            <div className="font-bold text-slate-800">Rent Expense Dr.</div>
            <div className="text-[10px] text-slate-500">To Cash A/C (Office Rent)</div>
          </div>
          <span className="font-mono font-bold text-purple-900">₹15,000.00</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center font-medium">
        ⚖️ Zero math errors. Trial balance stays permanently reconciled.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 2: BANK RECONCILIATION
   ========================================================================= */
function BankReconMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <Landmark className="w-4 h-4 text-purple-600" />
          <span>HDFC Current A/C #0092 Reconciliation</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">
          AUTO-MATCHED
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Bank Statement Balance</span>
          <span className="font-mono font-bold text-slate-900">₹3,42,800.00</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Book Ledger Balance</span>
          <span className="font-mono font-bold text-slate-900">₹3,42,800.00</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200">
          <span className="text-emerald-900 font-medium">Reconciliation Variance</span>
          <span className="font-mono font-bold text-emerald-800">₹0.00 (Perfect Match)</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-200 flex items-center justify-between text-xs">
        <div>
          <div className="text-[10px] text-purple-800 font-bold">RECENTLY CLEARED</div>
          <div className="text-[11px] text-slate-700">UTR: HDFCR52026112400192 • ₹28,910</div>
        </div>
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center font-medium">
        Matches CSV bank statement entries with book payments automatically.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 3: VOUCHER TYPES
   ========================================================================= */
function VoucherTypesMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <FileSpreadsheet className="w-4 h-4 text-purple-600" />
          <span>Voucher Management Module</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
          4 Series Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl border border-purple-200 bg-purple-50/40">
          <div className="text-[10px] font-bold text-purple-900">PAYMENT VOUCHER</div>
          <div className="text-[11px] text-slate-700 font-mono mt-0.5">#PMT/2026/0142</div>
          <div className="text-[10px] text-slate-500">Vendor &amp; overhead payouts</div>
        </div>

        <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/40">
          <div className="text-[10px] font-bold text-emerald-900">RECEIPT VOUCHER</div>
          <div className="text-[11px] text-slate-700 font-mono mt-0.5">#RCPT/2026/0891</div>
          <div className="text-[10px] text-slate-500">Customer payments &amp; dues</div>
        </div>

        <div className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40">
          <div className="text-[10px] font-bold text-blue-900">CONTRA VOUCHER</div>
          <div className="text-[11px] text-slate-700 font-mono mt-0.5">#CNTR/2026/0034</div>
          <div className="text-[10px] text-slate-500">Cash-to-Bank deposits</div>
        </div>

        <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40">
          <div className="text-[10px] font-bold text-amber-900">JOURNAL VOUCHER</div>
          <div className="text-[11px] text-slate-700 font-mono mt-0.5">#JRNL/2026/0018</div>
          <div className="text-[10px] text-slate-500">Depreciation &amp; adjustments</div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center font-medium">
        Structured voucher classification keeps statutory books clean.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 4: EXPENSE TRACKING
   ========================================================================= */
function ExpensesMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <Receipt className="w-4 h-4 text-purple-600" />
          <span>Operational Expense Categorization</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
          NOV 2026
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div>
            <div className="font-bold text-slate-800">Office &amp; Godown Rent</div>
            <div className="text-[10px] text-slate-500">Paid via NetBanking</div>
          </div>
          <span className="font-mono font-bold text-slate-900">₹25,000.00</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div>
            <div className="font-bold text-slate-800">Electricity &amp; Utilities</div>
            <div className="text-[10px] text-slate-500">MPPKVVCL Commercial Meter</div>
          </div>
          <span className="font-mono font-bold text-slate-900">₹4,230.00</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <div>
            <div className="font-bold text-slate-800">Logistics &amp; Courier Freight</div>
            <div className="text-[10px] text-slate-500">Interstate dispatches (ITC Eligible)</div>
          </div>
          <span className="font-mono font-bold text-purple-900">₹3,420.00</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
        <div>
          <div className="text-[10px] text-slate-400">Total Monthly Overheads</div>
          <div className="text-base font-black font-mono">₹32,650.00</div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[10px] font-bold">
          Export Ledger
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 5: LEDGER SEARCH
   ========================================================================= */
function LedgerSearchMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <Search className="w-4 h-4 text-purple-600" />
          <span>Sub-Second Universal Search</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          0.04 sec
        </span>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 p-2 rounded-lg border border-purple-300 bg-slate-50 text-xs">
          <Search className="w-3.5 h-3.5 text-purple-600 shrink-0" />
          <span className="font-mono text-slate-800 font-bold">
            &quot;Sharma&quot; &gt; ₹20,000
          </span>
          <span className="text-[10px] text-slate-400 ml-auto">3 results</span>
        </div>
      </div>

      <div className="space-y-1 text-xs">
        <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
          <div>
            <div className="font-bold text-slate-800">Sharma Traders &amp; Co.</div>
            <div className="text-[10px] text-slate-500">20-Nov-2026 • Invoice #INV-2041</div>
          </div>
          <span className="font-mono font-bold text-purple-900">₹28,910.00</span>
        </div>

        <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
          <div>
            <div className="font-bold text-slate-800">Sharma Enterprises (Bhopal)</div>
            <div className="text-[10px] text-slate-500">14-Nov-2026 • Payment #PMT-082</div>
          </div>
          <span className="font-mono font-bold text-purple-900">₹22,400.00</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center font-medium">
        🔍 Instant search across millions of records without lagging.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 6: AUDIT TRAIL
   ========================================================================= */
function AuditTrailMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <History className="w-4 h-4 text-purple-600" />
          <span>Statutory MCA Audit Trail Log</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
          IMMUTABLE
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">VOUCHER CREATED (#INV-2041)</span>
            <span className="text-[10px] font-mono text-slate-500">14:22:04</span>
          </div>
          <div className="text-[10px] text-slate-600">
            User: <strong className="text-slate-800">admin@sharda.co.in</strong> (IP: 103.21.244.12)
          </div>
          <div className="text-[9px] text-emerald-700 font-mono">
            Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
          </div>
        </div>

        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">PAYMENT ALLOCATED</span>
            <span className="text-[10px] font-mono text-slate-500">14:35:18</span>
          </div>
          <div className="text-[10px] text-slate-600">
            UPI QR Webhook Verified (Ref #HDFC98214)
          </div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] text-center font-semibold flex items-center justify-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        <span>100% compliant with Ministry of Corporate Affairs regulations.</span>
      </div>
    </div>
  );
}