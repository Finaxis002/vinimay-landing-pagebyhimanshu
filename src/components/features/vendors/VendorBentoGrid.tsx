"use client";

import React, { useState } from "react";
import {
  Truck,
  FileCheck2,
  Clock,
  ArrowUpRight,
  TrendingDown,
} from "lucide-react";

export default function VendorBentoGrid() {
  const [selectedAging, setSelectedAging] = useState("0-30");

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-10">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#7552da] bg-[#7552da]/10 px-3 py-1.5 rounded-full mb-3">
          Vendor Architecture
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Everything You Need to Command Your Supply Chain
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          Keep suppliers happy, avoid late fees, and claim every eligible rupee of GST Input Tax Credit with automated reconciliation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tile 1: Purchase Order Engine */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-[#7552da] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                1-Click PO
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Standardized Purchase Orders</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Generate formatted POs with pre-negotiated wholesale rates, HSN codes, and delivery terms. Send via email or WhatsApp in one tap.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-700">
                <span>PO Auto-Numbering</span>
                <span className="text-purple-700 font-bold">PO-2026-0042</span>
              </div>
              <div className="flex justify-between items-center text-slate-700">
                <span>Delivery Terms</span>
                <span className="text-emerald-600 font-bold">Doorstep Delivery</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Direct PO to Purchase Bill conversion</span>
            <ArrowUpRight className="w-4 h-4 text-[#7552da]" />
          </div>
        </div>

        {/* Tile 2: 100% ITC Reconciliation */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                GSTR-2B Ready
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Zero-Loss Input Tax Credit</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Match supplier invoices against your GSTR-2B download. Catch missing vendor filings before you file your monthly GST returns.
            </p>

            <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Eligible ITC Claimed</span>
                <span className="font-mono font-bold text-emerald-700">₹84,210</span>
              </div>
              <p className="text-[11px] text-emerald-600">✓ 100% verified against portal records</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Automated vendor filing reminder</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Tile 3: Payables Aging & Due Alerts */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                Zero Late Fees
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Payables Aging Analysis</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Categorize supplier dues by aging buckets (0–30, 31–60, and 60+ days) to protect your company&apos;s credit reputation.
            </p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div
                onClick={() => setSelectedAging("0-30")}
                className={`p-2 rounded-xl border cursor-pointer ${
                  selectedAging === "0-30" ? "bg-emerald-50 border-emerald-300 font-bold" : "bg-slate-50 border-slate-100"
                }`}
              >
                <p className="text-[10px] text-slate-400">0-30 Days</p>
                <p className="font-mono text-emerald-700">₹38,200</p>
              </div>
              <div
                onClick={() => setSelectedAging("31-60")}
                className={`p-2 rounded-xl border cursor-pointer ${
                  selectedAging === "31-60" ? "bg-amber-50 border-amber-300 font-bold" : "bg-slate-50 border-slate-100"
                }`}
              >
                <p className="text-[10px] text-slate-400">31-60 Days</p>
                <p className="font-mono text-amber-700">₹12,400</p>
              </div>
              <div
                onClick={() => setSelectedAging("60+")}
                className={`p-2 rounded-xl border cursor-pointer ${
                  selectedAging === "60+" ? "bg-rose-50 border-rose-300 font-bold" : "bg-slate-50 border-slate-100"
                }`}
              >
                <p className="text-[10px] text-slate-400">60+ Days</p>
                <p className="font-mono text-rose-700">₹0</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Automated bank payout integration</span>
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </div>
        </div>

        {/* Tile 4: Supplier Performance & Cost Comparison */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between lg:col-span-2">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Cost Control
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Supplier Price & Rate Comparison</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Compare purchase price trends across multiple suppliers for the same raw materials and discover cost savings.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-800">ABC Traders (Primary Vendor)</span>
                <span className="font-mono font-bold text-emerald-600">₹2,200/unit (Lowest)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-800">National Wholesale Supplies</span>
                <span className="font-mono font-bold text-slate-600">₹2,350/unit (+6.8%)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Negotiation benchmarks with historical price history</span>
            <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Tile 5: Payables Total Snapshot */}
        <div className="bg-gradient-to-br from-[#7552da] to-[#5a3ebb] text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-2.5 py-1 rounded-full mb-4">
              Payables Snapshot
            </span>
            <h3 className="text-xl font-black mb-2">Total Outstanding Dues</h3>
            <p className="text-3xl font-black font-mono tracking-tight text-white mb-2">
              ₹50,600
            </p>
            <p className="text-xs text-purple-200 leading-relaxed mb-6">
              Total trade payables due across all approved suppliers with zero penalties accrued.
            </p>

            <div className="space-y-1.5 text-xs text-purple-100 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Active Suppliers</span>
                <span className="font-bold font-mono">18 Vendors</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Success Rate</span>
                <span className="font-bold font-mono">100%</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-purple-200">
            <span>Automated bank voucher export</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
