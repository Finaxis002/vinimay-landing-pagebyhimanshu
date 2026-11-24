"use client";

import React from "react";
import FeatureOrbitalCards, {
  type OrbitalCardItem,
} from "@/components/features/FeatureOrbitalCards";

const VENDOR_CARDS: OrbitalCardItem[] = [
  {
    badge: "SUPPLIER PROFILE",
    title: "Supplier Master Directory",
    desc: "Centralize supplier PAN, GSTIN, MSME category, bank NEFT details, and agreed payment credit terms.",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#b45309]",
    shadowColor: "rgba(245,158,11,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Mahaveer Paper Mills</span>
          <span className="text-amber-200 font-mono font-bold">MSME-Udyam</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Agreed Credit Terms</span>
          <span className="text-emerald-300 font-bold">Net 30 Days</span>
        </div>
      </div>
    ),
    ctaText: "Manage Suppliers",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "PO MANAGEMENT",
    title: "Purchase Order Lifecycle",
    desc: "Generate official POs with delivery deadlines, track supplier acceptance, and monitor pending dispatches.",
    gradient: "from-[#60a5fa] via-[#3b82f6] to-[#2563eb]",
    shadowColor: "rgba(59,130,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">PO #PO-8812 (Raw Material)</span>
          <span className="text-cyan-200 font-mono font-bold">Dispatched</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Tracking ID: DL-8842</span>
          <span className="text-emerald-300 font-bold">Est: Tomorrow</span>
        </div>
      </div>
    ),
    ctaText: "Draft Purchase Order",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "QUALITY CONTROL",
    title: "Goods Receipt (GRN) Check",
    desc: "Compare received cartons against purchase order quantities. Flag damage and initiate return debit notes.",
    gradient: "from-[#34d399] via-[#10b981] to-[#059669]",
    shadowColor: "rgba(16,185,129,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">GRN Inspection #104</span>
          <span className="text-emerald-200 font-mono font-bold">Passed</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Ordered 500 | Received 500</span>
          <span className="text-white font-bold">✔ Zero Damage</span>
        </div>
      </div>
    ),
    ctaText: "Inspect Goods Inward",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "TAX CREDIT",
    title: "2B Input Tax Credit Match",
    desc: "Match supplier invoices with your GSTR-2B statement to claim 100% legitimate input tax credits without notices.",
    gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    shadowColor: "rgba(139,92,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Eligible Input Tax Credit</span>
          <span className="text-purple-200 font-mono font-bold">₹44,200</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>GST Portal 2B Match</span>
          <span className="text-emerald-300 font-bold">100% Reconciled</span>
        </div>
      </div>
    ),
    ctaText: "Sync GSTR-2B",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "PAYABLE SCHEDULE",
    title: "Upcoming Payables Alerts",
    desc: "Never miss early-payment cash discounts or incur late penalties with proactive payment maturity alerts.",
    gradient: "from-[#f43f5e] via-[#e11d48] to-[#be123c]",
    shadowColor: "rgba(244,63,94,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Payable Due in 3 Days</span>
          <span className="text-rose-200 font-mono font-bold">₹36,000</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Early Cash Discount</span>
          <span className="text-emerald-300 font-bold">₹720 Saved</span>
        </div>
      </div>
    ),
    ctaText: "Schedule Payables",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "PURCHASE ANALYTICS",
    title: "Supplier Rate History",
    desc: "Compare historical quotation trends across vendors to negotiate best procurement rates on raw materials.",
    gradient: "from-[#38bdf8] via-[#06b6d4] to-[#0284c7]",
    shadowColor: "rgba(6,182,212,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Kraft Roll 120GSM</span>
          <span className="text-cyan-200 font-mono font-bold">Best: ₹39/kg</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Cost Variance Savings</span>
          <span className="text-emerald-300 font-bold">₹7,200 This Month</span>
        </div>
      </div>
    ),
    ctaText: "Compare Vendor Prices",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function VendorOrbitalCards() {
  return (
    <FeatureOrbitalCards
      id="vendors"
      tagline="SUPPLIER LIFECYCLE • ITC RECONCILIATION"
      title="Streamline your entire supply chain"
      description="Draft purchase orders, verify incoming goods with GRN, and match input tax credits against GST portal data."
      tabLabels={[
        "Supplier Master CRM",
        "Purchase Order Flow",
        "Goods Receipt (GRN)",
        "GSTR-2B Tax Credit",
        "Payable Due Alerts",
        "Historical Price Compare",
      ]}
      cards={VENDOR_CARDS}
    />
  );
}
