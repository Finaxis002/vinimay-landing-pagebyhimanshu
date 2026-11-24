"use client";

import React, { useState } from "react";
import {
  Warehouse,
  ScanBarcode,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

export default function InventoryBentoGrid() {
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>("main");

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-10">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#7552da] bg-[#7552da]/10 px-3 py-1.5 rounded-full mb-3">
          Inventory Intelligence
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Everything You Need to Run Lean, Zero-Waste Stock
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          Smart reorder points, warehouse transfers, barcode lookups, and real-time inventory valuation designed for growing operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tile 1: Multi-Location Warehouse Sync */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-[#7552da] flex items-center justify-center">
                <Warehouse className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Active Sync
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Multi-Warehouse Stock Transfer</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Transfer goods between godowns, retail stores, and fulfillment hubs with verified delivery challans.
            </p>

            {/* Mini Interactive Warehouse Selector */}
            <div className="space-y-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
              {[
                { id: "main", name: "Central Hub (Bhopal)", stock: "12,450 units", status: "Optimal" },
                { id: "indore", name: "Indore Outlet Store", stock: "4,120 units", status: "Normal" },
                { id: "raipur", name: "Transit Hub", stock: "1,850 units", status: "Receiving" },
              ].map((wh) => (
                <div
                  key={wh.id}
                  onClick={() => setSelectedWarehouse(wh.id)}
                  className={`flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer transition-all ${
                    selectedWarehouse === wh.id
                      ? "bg-white shadow-xs border border-purple-200 font-semibold text-slate-900"
                      : "text-slate-600 hover:bg-white/60"
                  }`}
                >
                  <span className="truncate max-w-[140px]">{wh.name}</span>
                  <span className="font-mono text-purple-700 font-bold">{wh.stock}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Inter-warehouse transfer challans</span>
            <ArrowUpRight className="w-4 h-4 text-[#7552da]" />
          </div>
        </div>

        {/* Tile 2: Stock Accuracy Gauge (85% to 99.4%) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                Audit Verified
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">99.4% Stock Accuracy</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Recorded software counts match physical shelf inventory, eliminating shrinkage and sudden stockouts.
            </p>

            <div className="flex items-center gap-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div
                className="relative w-20 h-20 rounded-full shrink-0 flex items-center justify-center"
                style={{
                  background: "conic-gradient(#1fb487 358deg, #e2e8f0 0deg)",
                }}
              >
                <div className="absolute inset-2 rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="text-base font-black text-slate-900">99.4%</span>
                  <span className="text-[8px] text-slate-400 uppercase font-bold">Audit</span>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-900">Zero Ghost Inventory</p>
                <p className="text-[11px] text-slate-500">Every sale, return, and damaged item writes straight to your ledger.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Cycle counting & audit sheets</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Tile 3: Barcode, SKU & Batch Expiry Tracking */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ScanBarcode className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                Sub-Second Scan
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Batch, Expiry & Barcode Scanning</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Track manufacturing dates, batch numbers, and FIFO/FEFO expiration dates with laser barcode reader support.
            </p>

            <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 font-mono text-xs">
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200/60">
                <span className="text-slate-600">Batch #B2026-09</span>
                <span className="text-emerald-600 font-bold">Expires in 180d</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200/60">
                <span className="text-slate-600">EAN-13 Barcode</span>
                <span className="text-slate-900 font-bold">890103092812</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Instant thermal barcode sticker print</span>
            <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Tile 4: Fast & Slow Moving Analytics */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between lg:col-span-2">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Velocity Matrix
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Fast vs. Slow Moving Inventory Reports</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Identify capital tied up in dead stock and automatically prioritize reorders for your top 20% revenue drivers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-emerald-50/60 border border-emerald-100 p-3.5 rounded-2xl">
                <p className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Fast Moving (Reorder Ready)
                </p>
                <p className="text-xs text-slate-700">Whey Protein 2kg (28d velocity, 42 units sold/week)</p>
              </div>
              <div className="bg-rose-50/60 border border-rose-100 p-3.5 rounded-2xl">
                <p className="text-xs font-bold text-rose-800 flex items-center gap-1.5 mb-1.5">
                  <RefreshCw className="w-3.5 h-3.5" /> Slow Moving (Capital Locked)
                </p>
                <p className="text-xs text-slate-700">Gym Straps Pro (90+ days untouched, ₹18,400 blocked)</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Automated supplier purchase requisition generation</span>
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </div>
        </div>

        {/* Tile 5: Live Valuation Summary */}
        <div className="bg-gradient-to-br from-[#7552da] to-[#5a3ebb] text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-2.5 py-1 rounded-full mb-4">
              Real-Time Valuation
            </span>
            <h3 className="text-xl font-black mb-2">Total Stock Value</h3>
            <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mb-2">
              ₹42,85,910
            </p>
            <p className="text-xs text-purple-200 leading-relaxed mb-6">
              Calculated dynamically via FIFO / weighted average cost without manual spreadsheet calculations.
            </p>

            <div className="space-y-1.5 text-xs text-purple-100 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Total Active SKUs</span>
                <span className="font-bold font-mono">1,420</span>
              </div>
              <div className="flex justify-between">
                <span>Warehouses Tracked</span>
                <span className="font-bold font-mono">3 Locations</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-purple-200">
            <span>Audit-ready balance sheet sync</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
