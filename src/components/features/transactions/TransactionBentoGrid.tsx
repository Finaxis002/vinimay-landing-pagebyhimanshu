"use client";

import React from "react";
import {
  Search,
  ArrowUpRight,
  BookOpen,
  Landmark,
  Scale,
} from "lucide-react";
import ArcHeading from "@/components/common/ArcHeading";

export default function TransactionBentoGrid() {

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-10">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#7552da] bg-[#7552da]/10 px-3 py-1.5 rounded-full mb-3">
          Accounting Precision
        </span>
        <ArcHeading
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Everything You Need to Maintain Clean, Balanced Books
        </ArcHeading>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          From fast cash register entries to audit-proof double entry journals. Vinimay keeps your financial books clean and tax-compliant.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tile 1: Automated Double-Entry */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-[#7552da] flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                Zero Imbalance
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Double-Entry Accounting</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Every invoice, bill, and payment generates behind-the-scenes debit and credit journal entries conforming to Indian accounting standards.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-700">
                <span>Total Debit</span>
                <span className="text-emerald-600 font-bold">₹1,84,320.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-700">
                <span>Total Credit</span>
                <span className="text-emerald-600 font-bold">₹1,84,320.00</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Trial Balance & Daybook sync</span>
            <ArrowUpRight className="w-4 h-4 text-[#7552da]" />
          </div>
        </div>

        {/* Tile 2: Bank Statement Reconciliation */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Auto-Match
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Bank & UPI Reconciliation</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Upload bank statements (.CSV / Excel). Smart AI matching pairs deposits with customer invoices and payouts with supplier bills.
            </p>

            <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Reconciliation Score</span>
                <span className="font-mono font-bold text-emerald-700">98.6%</span>
              </div>
              <p className="text-[11px] text-emerald-600">✓ 42 bank transactions auto-cleared</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Supports SBI, HDFC, ICICI, Axis & UPI</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Tile 3: Search & Smart Filters */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                Instant Filter
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Instant Multi-Tag Search</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Locate any voucher or cash receipt across millions of records in milliseconds by party, amount, payment mode, or voucher number.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-600">Query Time</span>
              <span className="text-blue-600 font-bold">&lt; 14ms (Indexed)</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Cross-company unified search</span>
            <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Tile 4: Complete Financial Reports */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between lg:col-span-2">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Financial Reports
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">One-Click Profit & Loss and Balance Sheets</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Generate accountant-verified financial summaries, cashflow statements, and GSTR summaries ready for tax filing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100">
                <p className="text-[11px] text-purple-700 font-medium">Gross Revenue</p>
                <p className="text-lg font-black font-mono text-purple-950">₹2,03,55,730</p>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <p className="text-[11px] text-emerald-700 font-medium">Operating Spend</p>
                <p className="text-lg font-black font-mono text-emerald-950">₹1,81,826</p>
              </div>
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100">
                <p className="text-[11px] text-blue-700 font-medium">Net Profit Margin</p>
                <p className="text-lg font-black font-mono text-blue-950">26.8%</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Direct Tally XML & CA-ready Excel export</span>
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </div>
        </div>

        {/* Tile 5: Audit Log Protection */}
        <div className="bg-gradient-to-br from-[#7552da] to-[#5a3ebb] text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-2.5 py-1 rounded-full mb-4">
              Compliance Lock
            </span>
            <h3 className="text-xl font-black mb-2">Audit-Proof Logs</h3>
            <p className="text-3xl font-black font-mono tracking-tight text-white mb-2">
              100% Immutable
            </p>
            <p className="text-xs text-purple-200 leading-relaxed mb-6">
              Every edit, cancellation, or back-dated entry is locked with user timestamps to pass tax scrutiny.
            </p>

            <div className="space-y-1.5 text-xs text-purple-100 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Vouchers Logged</span>
                <span className="font-bold font-mono">14,210 Entries</span>
              </div>
              <div className="flex justify-between">
                <span>Audit Discrepancies</span>
                <span className="font-bold font-mono text-emerald-300">0 Errors</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-purple-200">
            <span>Chartered Accountant access portal</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
