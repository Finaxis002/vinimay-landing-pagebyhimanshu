"use client";

import React, { useState } from "react";
import {
  Store,
  UtensilsCrossed,
  ShoppingBasket,
  QrCode,
  WifiOff,
  Printer,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import ArcHeading from "@/components/common/ArcHeading";

const counterTypes = [
  {
    icon: Store,
    title: "Retail Stores & Apparel",
    desc: "Scan clothing tags, size-color variants, manage seasonal discounts & customer phone loyalty.",
    points: ["Barcode & EAN-13 scanning", "Exchange & return management", "Instant WhatsApp receipt"],
    tone: "border-purple-200/80 bg-purple-50/40 text-[#7552da]",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants, Cafes & QSR",
    desc: "Table layout management, direct Kitchen Order Tickets (KOT), modifier add-ons & bill splitting.",
    points: ["Thermal kitchen KOT routing", "Dine-in / Takeaway / Delivery", "Table-wise running bills"],
    tone: "border-amber-200/80 bg-amber-50/40 text-amber-600",
  },
  {
    icon: ShoppingBasket,
    title: "Supermarkets & Grocery",
    desc: "Rapid bulk checkout, electronic weigh-scale integration, and high-frequency item lookups.",
    points: ["Weigh scale auto-reading", "Bulk FMCG barcode queues", "Cash drawer auto-trigger"],
    tone: "border-emerald-200/80 bg-emerald-50/40 text-emerald-600",
  },
];

export default function PosBentoGrid() {
  const [activeCounter, setActiveCounter] = useState(0);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-10">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#7552da] bg-[#7552da]/10 px-3 py-1.5 rounded-full mb-3">
          Counter Architecture
        </span>
        <ArcHeading
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Engineered for Retail, Dining &amp; Supermarket Counters
        </ArcHeading>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          Whether you run a high-traffic boutique, a buzzing quick-service cafe, or a neighborhood supermarket, Vinimay POS molds to your counter flow.
        </p>
      </div>

      {/* 3 Counter Form Factors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {counterTypes.map((c, idx) => (
          <div
            key={c.title}
            onClick={() => setActiveCounter(idx)}
            className={`rounded-3xl p-6 border transition-all duration-300 cursor-pointer bg-white ${
              activeCounter === idx
                ? "shadow-lg border-purple-300 ring-2 ring-purple-100 -translate-y-1"
                : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${c.tone}`}>
              <c.icon className="w-6 h-6" strokeWidth={2} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-5">{c.desc}</p>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              {c.points.map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bento Grid: Offline Mode + Multi Payment + Hardware Integration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Offline Engine */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-[#7552da] flex items-center justify-center">
                <WifiOff className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                Zero Downtime
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">100% Offline Resilience</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Never halt lines when internet fluctuates. All bills, barcode scans, and receipt prints continue offline, auto-syncing to the cloud once reconnected.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-800">
                Local SQLite cache active (0 packets dropped)
              </span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Automated conflict-free cloud sync</span>
            <ArrowUpRight className="w-4 h-4 text-[#7552da]" />
          </div>
        </div>

        {/* Dynamic UPI & Multi Payment Hub */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <QrCode className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Zero Fees
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Dynamic UPI QR per Bill</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Display an exact-amount UPI QR code directly on customer display. Eliminates wrong payment amounts and manual reconciliation headaches.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Supported Rails</span>
              <span className="font-mono text-purple-700 font-bold">UPI · Cards · Cash · Wallets</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Soundbox & UPI webhook verification</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Hardware & Peripherals */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Printer className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                Plug & Play
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Universal Hardware Support</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Connect thermal printers (ESC/POS 58mm/80mm), USB barcode guns, electronic weighing machines, and RJ11 cash drawers out of the box.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-600">Protocol Driver</span>
              <span className="text-emerald-600 font-bold">Raw ESC/POS · USB-HID</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>No proprietary hardware lock-in</span>
            <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
