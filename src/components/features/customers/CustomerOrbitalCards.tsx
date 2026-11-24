"use client";

import React from "react";
import FeatureOrbitalCards, {
  type OrbitalCardItem,
} from "@/components/features/FeatureOrbitalCards";

const CUSTOMER_CARDS: OrbitalCardItem[] = [
  {
    badge: "PARTY CRM",
    title: "360° Customer Directory",
    desc: "Complete profile history: registered GSTIN, delivery addresses, lifetime spend, and item-wise buying habits.",
    gradient: "from-[#818cf8] via-[#6366f1] to-[#4f46e5]",
    shadowColor: "rgba(99,102,241,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Rajesh Enterprises</span>
          <span className="text-purple-200 font-mono font-bold">42 Orders</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Customer Lifetime Value</span>
          <span className="text-emerald-300 font-bold">₹3,84,200.00</span>
        </div>
      </div>
    ),
    ctaText: "Explore Customer Directory",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "RISK CONTROL",
    title: "Credit Limit Guard",
    desc: "Lock or flag invoice generation whenever a customer’s outstanding balance exceeds their approved credit ceiling.",
    gradient: "from-[#f43f5e] via-[#e11d48] to-[#be123c]",
    shadowColor: "rgba(244,63,94,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Approved Credit Limit</span>
          <span className="text-rose-200 font-mono font-bold">₹50,000</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Current Balance: ₹48,200</span>
          <span className="text-amber-200 font-bold">⚠ Near Ceiling</span>
        </div>
      </div>
    ),
    ctaText: "Setup Credit Limits",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "COLLECTIONS",
    title: "WhatsApp Payment Dues",
    desc: "Send polite payment reminder messages with statement PDFs and direct UPI payment links with one tap.",
    gradient: "from-[#34d399] via-[#10b981] to-[#059669]",
    shadowColor: "rgba(16,185,129,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">WhatsApp Reminder</span>
          <span className="text-emerald-200 font-mono font-bold">1-Click Dispatch</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Outstanding Balance</span>
          <span className="text-white font-bold">₹12,400 (Link Clicked)</span>
        </div>
      </div>
    ),
    ctaText: "Automate Dues Collection",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "PRICE LISTS",
    title: "Tiered Wholesale Pricing",
    desc: "Assign wholesale, distributor, or retail price lists to customer categories. Rates apply automatically on billing.",
    gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    shadowColor: "rgba(139,92,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Party Category</span>
          <span className="text-purple-200 font-mono font-bold">Distributor A</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Volume Rate Slab</span>
          <span className="text-emerald-300 font-bold">12% Auto-Deduction</span>
        </div>
      </div>
    ),
    ctaText: "Configure Price Lists",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "CASH FLOW",
    title: "Receivables Aging",
    desc: "Categorize pending dues into 0-30, 31-60, and 90+ day buckets to prioritize overdue payment follow-ups.",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#b45309]",
    shadowColor: "rgba(245,158,11,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Total Receivables</span>
          <span className="text-amber-200 font-mono font-bold">₹1.45 Lakh</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>0-30 Days Health</span>
          <span className="text-emerald-300 font-bold">82% on schedule</span>
        </div>
      </div>
    ),
    ctaText: "View Aging Breakdown",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "RETENTION",
    title: "Loyalty Points & Rewards",
    desc: "Reward repeat shoppers with loyalty points per rupee spent. Customers can redeem points directly at checkout.",
    gradient: "from-[#38bdf8] via-[#06b6d4] to-[#0284c7]",
    shadowColor: "rgba(6,182,212,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Active Loyalty Balance</span>
          <span className="text-cyan-200 font-mono font-bold">840 Points</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Redemption Value</span>
          <span className="text-emerald-300 font-bold">₹420 Discount Applied</span>
        </div>
      </div>
    ),
    ctaText: "Start Loyalty Program",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function CustomerOrbitalCards() {
  return (
    <FeatureOrbitalCards
      id="customers"
      tagline="CUSTOMER CRM • CREDIT INTELLIGENCE"
      title="Turn one-time buyers into loyal regulars"
      description="Maintain 360° party ledgers, set automated credit limit guards, and automate WhatsApp receivable collections."
      tabLabels={[
        "360° Customer CRM",
        "Credit Limit Guard",
        "WhatsApp Payment Dues",
        "Tiered Wholesale Rates",
        "Receivables Aging",
        "Loyalty Rewards",
      ]}
      cards={CUSTOMER_CARDS}
    />
  );
}
