"use client";

import React from "react";
import FeatureOrbitalCards, {
  type OrbitalCardItem,
} from "@/components/features/FeatureOrbitalCards";

const POS_CARDS: OrbitalCardItem[] = [
  {
    badge: "SPEED POS",
    title: "Instant 0.8s Barcode Billing",
    desc: "Keyboard shortcuts, barcode gun support, and touch categories keep counter queues moving at peak hours.",
    gradient: "from-[#38bdf8] via-[#06b6d4] to-[#0284c7]",
    shadowColor: "rgba(6,182,212,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Register #01 • Express</span>
          <span className="text-cyan-200 font-mono font-bold">0.78s Scan</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Items in Cart: 6</span>
          <span className="text-emerald-300 font-bold">Cart: ₹1,740.00</span>
        </div>
      </div>
    ),
    ctaText: "Launch POS Demo",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "INSTANT PAY",
    title: "Dynamic UPI QR Codes",
    desc: "Generates exact-amount QR codes on the customer-facing screen. No manual entry, zero reconciliation errors.",
    gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    shadowColor: "rgba(139,92,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Customer Screen QR</span>
          <span className="text-purple-200 font-mono font-bold">Auto-Generated</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Payment Confirmation</span>
          <span className="text-emerald-300 font-bold">✔ Paid via GPay</span>
        </div>
      </div>
    ),
    ctaText: "Try Dynamic QR",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "OFFLINE RESILIENT",
    title: "100% Offline Mode",
    desc: "Internet went down? Continue ringing up sales. Local database queues transactions and auto-syncs when reconnected.",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#b45309]",
    shadowColor: "rgba(245,158,11,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Network Status</span>
          <span className="text-amber-200 font-mono font-bold">Offline Active</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Queued Transactions</span>
          <span className="text-white font-bold">14 Bills Cached</span>
        </div>
      </div>
    ),
    ctaText: "See Offline Engine",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "FLEXIBLE PAY",
    title: "Split & Multi-Tender Pay",
    desc: "Accept cash, card, store credit, and UPI across a single bill with automatic change calculation.",
    gradient: "from-[#34d399] via-[#10b981] to-[#059669]",
    shadowColor: "rgba(16,185,129,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Bill Total: ₹2,500</span>
          <span className="text-emerald-200 font-mono font-bold">Split Tender</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Cash ₹1,000 + UPI ₹1,500</span>
          <span className="text-emerald-300 font-bold">✔ Fully Settled</span>
        </div>
      </div>
    ),
    ctaText: "Test Split Payments",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "HARDWARE READY",
    title: "Thermal Receipt Engine",
    desc: "Direct driver-free printing to 2-inch and 3-inch ESC/POS thermal printers via USB, Bluetooth, or LAN.",
    gradient: "from-[#60a5fa] via-[#3b82f6] to-[#2563eb]",
    shadowColor: "rgba(59,130,246,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Thermal Printer (80mm)</span>
          <span className="text-cyan-200 font-mono font-bold">ESC/POS</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Auto Paper Cutter</span>
          <span className="text-emerald-300 font-bold">Hardware Linked</span>
        </div>
      </div>
    ),
    ctaText: "Check Printer Specs",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    badge: "REGISTER CLOSING",
    title: "Cash Drawer Z-Reports",
    desc: "Track cash-in-drawer per cashier shift. Generate detailed X and Z reports with payment breakdown.",
    gradient: "from-[#f43f5e] via-[#e11d48] to-[#be123c]",
    shadowColor: "rgba(244,63,94,0.3)",
    previewBox: (
      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center text-[11px]">
          <span className="font-bold">Shift #02 (Ramesh)</span>
          <span className="text-rose-200 font-mono font-bold">Drawer Closed</span>
        </div>
        <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
          <span>Cash Expected vs Actual</span>
          <span className="text-emerald-300 font-bold">₹0.00 Variance</span>
        </div>
      </div>
    ),
    ctaText: "View Sample Z-Report",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function PosOrbitalCards() {
  return (
    <FeatureOrbitalCards
      id="pos"
      tagline="RETAIL POS ENGINE • 0.8S CHECKOUT"
      title="Engineered for speed at checkout"
      description="Blazing-fast point of sale that works seamlessly offline, handles split tenders, and prints instant receipts."
      tabLabels={[
        "Instant 0.8s Checkout",
        "Dynamic UPI QR Pay",
        "100% Offline Mode",
        "Split & Multi-Tender",
        "Thermal Receipt Engine",
        "Daily Z-Report Close",
      ]}
      cards={POS_CARDS}
    />
  );
}
