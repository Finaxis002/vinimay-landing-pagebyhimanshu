"use client";

import React from "react";
import FeatureOrbitalCards, {
  type OrbitalCardItem,
} from "@/components/features/FeatureOrbitalCards";

const INVENTORY_CARDS: OrbitalCardItem[] = [
  {
    badge: "MULTI-LOCATION",
    title: "Centralized Godown Tracking",
    desc: "Track live stock quantities across primary warehouses, retail floors, and transit vehicles in a unified view.",
    gradient: "from-[#34d399] via-[#10b981] to-[#059669]",
    shadowColor: "rgba(16,185,129,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Main Godown (North)</span>
          <span className="text-emerald-200 font-mono font-bold">1,420 Units</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Branch Store #2</span>
          <span className="text-white font-bold">380 Units In Hand</span>
        </div>
      </div>
    ),
    ctaText: "Explore Multi-Godown",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "BATCH / FIFO",
    title: "Batch & Expiry Guard",
    desc: "Automated First-In-First-Out dispatch guarantees older stock moves first to eliminate expiration losses.",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#b45309]",
    shadowColor: "rgba(245,158,11,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Batch #B-9021 (LED Panel)</span>
          <span className="text-amber-200 font-mono font-bold">Exp: 12/2027</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>FIFO Queue Enforcement</span>
          <span className="text-emerald-300 font-bold">✔ Active Guard</span>
        </div>
      </div>
    ),
    ctaText: "Setup Batch Control",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "RAPID SCAN",
    title: "0.8s Barcode Scanning",
    desc: "Scan GS1, EAN-13, and custom 1D/2D barcodes with wireless handheld scanners or your mobile camera.",
    gradient: "from-[#38bdf8] via-[#06b6d4] to-[#0284c7]",
    shadowColor: "rgba(6,182,212,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">SKU-9042 • Handheld Gun</span>
          <span className="text-cyan-200 font-mono font-bold">0.78s Response</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Inward Count</span>
          <span className="text-emerald-300 font-bold">+48 Units Logged</span>
        </div>
      </div>
    ),
    ctaText: "Test Barcode Inwarding",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "AUTOMATION",
    title: "Automated Reorder Alerts",
    desc: "Set dynamic safety stock thresholds. Vinimay auto-drafts Purchase Orders when stock touches minimum levels.",
    gradient: "from-[#f43f5e] via-[#e11d48] to-[#be123c]",
    shadowColor: "rgba(244,63,94,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Threshold Alert: 50 Units</span>
          <span className="text-rose-200 font-mono font-bold">Current: 48</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Auto-Draft PO #PO-4401</span>
          <span className="text-amber-200 font-bold">Pending Approval</span>
        </div>
      </div>
    ),
    ctaText: "Configure Reorders",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "AUDIT READY",
    title: "Stock Valuation & Audits",
    desc: "Calculate closing stock value with weighted average or FIFO methods. One-tap physical audit adjustments.",
    gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    shadowColor: "rgba(139,92,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Inventory Valuation</span>
          <span className="text-purple-200 font-mono font-bold">₹18.42 Lakh</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Audit Variance</span>
          <span className="text-emerald-300 font-bold">0 Units (100% Match)</span>
        </div>
      </div>
    ),
    ctaText: "Run Audit Report",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "REAL-TIME SYNC",
    title: "Purchase-to-Sale Deduction",
    desc: "Every POS receipt or GST invoice instantly updates warehouse counts. Never oversell on backorders.",
    gradient: "from-[#60a5fa] via-[#3b82f6] to-[#2563eb]",
    shadowColor: "rgba(59,130,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Invoice #INV-2041</span>
          <span className="text-cyan-200 font-mono font-bold">-2 Units Sold</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Multi-Channel Sync</span>
          <span className="text-emerald-300 font-bold">Instant Broadcast</span>
        </div>
      </div>
    ),
    ctaText: "Sync Warehouses",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function InventoryOrbitalCards() {
  return (
    <FeatureOrbitalCards
      id="inventory"
      tagline="INVENTORY INTELLIGENCE • ZERO SHRINKAGE"
      title="Complete control over every single unit"
      description="Real-time visibility into multi-godown stock levels, batch lifecycles, and predictive reorder triggers."
      tabLabels={[
        "Multi-Godown Tracking",
        "Batch & FIFO Control",
        "0.8s Barcode Scanning",
        "Automated Reorders",
        "Stock Valuation Audits",
        "Real-Time Sales Sync",
      ]}
      cards={INVENTORY_CARDS}
    />
  );
}
