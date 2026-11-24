"use client";

import React from "react";
import FeatureOrbitalCards, {
  type OrbitalCardItem,
} from "@/components/features/FeatureOrbitalCards";

const GST_CARDS: OrbitalCardItem[] = [
  {
    badge: "TAX ENGINE",
    title: "Automatic Tax Calculation",
    desc: "CGST, SGST & IGST switch on their own based on customer place of supply with 100% precision.",
    gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    shadowColor: "rgba(139,92,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Sharma Traders (MH)</span>
          <span className="text-emerald-300 font-mono font-bold">Intra-State</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-black pt-1 border-t border-white/10">
          <span>CGST (9%) + SGST (9%)</span>
          <span className="text-emerald-300 font-bold">₹4,518.00</span>
        </div>
      </div>
    ),
    ctaText: "Explore Tax Engine",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "SMART DIRECTORY",
    title: "HSN & SAC Code Finder",
    desc: "Search over 12,000 official GST slabs instantly. Auto-attaches correct tax rates to every line item.",
    gradient: "from-[#34d399] via-[#10b981] to-[#059669]",
    shadowColor: "rgba(16,185,129,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">HSN 8528 • Monitors</span>
          <span className="text-emerald-200 font-mono font-bold">18% Slab</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Official Tariff Sync</span>
          <span className="text-white font-bold">✔ Verified GSTIN</span>
        </div>
      </div>
    ),
    ctaText: "Search HSN Slabs",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "PRINT & SHARE",
    title: "Thermal & A4 Templates",
    desc: "Switch between standard A4 tax invoices and 3-inch high-speed thermal POS receipts with one click.",
    gradient: "from-[#60a5fa] via-[#3b82f6] to-[#2563eb]",
    shadowColor: "rgba(59,130,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Invoice #INV-2041</span>
          <span className="text-cyan-200 font-mono font-bold">A4 + 80mm</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Custom Brand Watermark</span>
          <span className="text-emerald-300 font-bold">QR Included</span>
        </div>
      </div>
    ),
    ctaText: "View Templates",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "TAX COMPLIANCE",
    title: "GSTR-1 & 3B Ready",
    desc: "Export error-free JSON and Excel sheets compatible with the official GST offline portal tool.",
    gradient: "from-[#818cf8] via-[#6366f1] to-[#4f46e5]",
    shadowColor: "rgba(99,102,241,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">GSTR-1 Table 4 (B2B)</span>
          <span className="text-emerald-300 font-mono font-bold">24 Bills</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Audit Readiness</span>
          <span className="text-purple-200 font-bold">100% Validated</span>
        </div>
      </div>
    ),
    ctaText: "Download Sample GSTR",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "INSTANT DISPATCH",
    title: "WhatsApp PDF & UPI Pay",
    desc: "Deliver digitally signed tax invoices directly on customer WhatsApp with an integrated UPI payment link.",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#b45309]",
    shadowColor: "rgba(245,158,11,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">WhatsApp Cloud API</span>
          <span className="text-amber-200 font-mono font-bold">Delivered</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Dynamic UPI Link</span>
          <span className="text-emerald-300 font-bold">₹4,116 Collected</span>
        </div>
      </div>
    ),
    ctaText: "Try WhatsApp Billing",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "SPEED ENGINE",
    title: "12-Second Rapid Billing",
    desc: "Pre-saved party GSTINs and cached catalog items allow generating complete tax bills in under 12 seconds.",
    gradient: "from-[#f43f5e] via-[#e11d48] to-[#be123c]",
    shadowColor: "rgba(244,63,94,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Generation Clock</span>
          <span className="text-rose-200 font-mono font-bold">11.8 Seconds</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Tax Accuracy Check</span>
          <span className="text-emerald-300 font-bold">Zero Discrepancy</span>
        </div>
      </div>
    ),
    ctaText: "Experience Fast Billing",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function GstOrbitalCards() {
  return (
    <FeatureOrbitalCards
      id="gst-billing"
      tagline="GST BILLING SUITE • 100% AUDIT READY"
      title="Built for billing, not paperwork"
      description="Interactive capabilities designed to automate every step of your GST invoicing, tax compliance, and payment tracking."
      tabLabels={[
        "Automatic Tax Engine",
        "HSN / SAC Finder",
        "Thermal & A4 Templates",
        "GSTR-1 & 3B Ready",
        "WhatsApp & UPI Pay",
        "12s Rapid Checkout",
      ]}
      cards={GST_CARDS}
    />
  );
}
