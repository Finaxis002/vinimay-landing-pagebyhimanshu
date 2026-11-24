"use client";

import React from "react";
import FeatureOrbitalCards, {
  type OrbitalCardItem,
} from "@/components/features/FeatureOrbitalCards";

const TRANSACTION_CARDS: OrbitalCardItem[] = [
  {
    badge: "VOUCHER ENGINE",
    title: "Instant Multi-Voucher Entry",
    desc: "Record Sales, Purchases, Receipts, Payments, Contra, and Journal vouchers with auto-suggest party accounts.",
    gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    shadowColor: "rgba(139,92,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Payment Voucher #PV-109</span>
          <span className="text-purple-200 font-mono font-bold">HDFC Bank</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Paid to: Sharma Traders</span>
          <span className="text-emerald-300 font-bold">₹48,000.00</span>
        </div>
      </div>
    ),
    ctaText: "Record New Voucher",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "BOOKKEEPING",
    title: "Automatic Double-Entry",
    desc: "Every transaction automatically updates debits and credits with zero math errors or imbalance entries.",
    gradient: "from-[#34d399] via-[#10b981] to-[#059669]",
    shadowColor: "rgba(16,185,129,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Debit: Bank A/c ₹48,000</span>
          <span className="text-emerald-200 font-mono font-bold">Matched</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Credit: Sales A/c ₹48,000</span>
          <span className="text-white font-bold">✔ Perfect Balance</span>
        </div>
      </div>
    ),
    ctaText: "See Double-Entry Ledger",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "AUDIT TRAIL",
    title: "Chronological Daybook",
    desc: "Real-time timeline of all business inflows and outflows with instant user tags and timestamp verification.",
    gradient: "from-[#60a5fa] via-[#3b82f6] to-[#2563eb]",
    shadowColor: "rgba(59,130,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Today&apos;s Inflow: ₹1,24,500</span>
          <span className="text-cyan-200 font-mono font-bold">28 Entries</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Today&apos;s Outflow: ₹42,100</span>
          <span className="text-emerald-300 font-bold">Net +₹82,400</span>
        </div>
      </div>
    ),
    ctaText: "Open Live Daybook",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "RECONCILIATION",
    title: "1-Click Bank Match",
    desc: "Import bank statements in Excel/CSV format. Vinimay auto-matches UTR numbers, amounts, and dates.",
    gradient: "from-[#38bdf8] via-[#06b6d4] to-[#0284c7]",
    shadowColor: "rgba(6,182,212,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">HDFC Statement (.csv)</span>
          <span className="text-cyan-200 font-mono font-bold">94 Records</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Auto-Reconciled</span>
          <span className="text-emerald-300 font-bold">94 of 94 Matched</span>
        </div>
      </div>
    ),
    ctaText: "Upload Bank Statement",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "GLOBAL SEARCH",
    title: "Sub-Second Search",
    desc: "Filter millions of transactions by party name, cheque number, amount, date range, or expense category.",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#b45309]",
    shadowColor: "rgba(245,158,11,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Query: &ldquo;Sharma 4116&rdquo;</span>
          <span className="text-amber-200 font-mono font-bold">0.04s Speed</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Found Invoice #0842</span>
          <span className="text-emerald-300 font-bold">Exact Match</span>
        </div>
      </div>
    ),
    ctaText: "Test Fast Search",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "FINANCIAL REPORTS",
    title: "Live Trial Balance & P&L",
    desc: "Generate instant Trial Balance, Profit & Loss accounts, and Balance Sheets ready for statutory tax audit.",
    gradient: "from-[#f43f5e] via-[#e11d48] to-[#be123c]",
    shadowColor: "rgba(244,63,94,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Trial Balance Balance</span>
          <span className="text-rose-200 font-mono font-bold">₹84,20,000</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Difference / Suspense</span>
          <span className="text-emerald-300 font-bold">₹0.00 (Balanced)</span>
        </div>
      </div>
    ),
    ctaText: "Export Balance Sheet",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function TransactionOrbitalCards() {
  return (
    <FeatureOrbitalCards
      id="transactions"
      tagline="ACCOUNTING OPERATIONS • CA AUDIT READY"
      title="Flawless double-entry financial control"
      description="Automated vouchers, live daybook feeds, 1-click bank reconciliation, and real-time trial balances."
      tabLabels={[
        "Instant Multi-Voucher",
        "Automatic Double-Entry",
        "Chronological Daybook",
        "1-Click Bank Match",
        "Sub-Second Search",
        "Live Trial Balance",
      ]}
      cards={TRANSACTION_CARDS}
    />
  );
}
