"use client";

import React from "react";
import {
  Users,
  MessageCircle,
  FileSpreadsheet,
  ArrowUpRight,
  Receipt,
} from "lucide-react";
import ArcHeading from "@/components/common/ArcHeading";

export default function CustomerBentoGrid() {

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-10">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#7552da] bg-[#7552da]/10 px-3 py-1.5 rounded-full mb-3">
          CRM Capabilities
        </span>
        <ArcHeading
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Everything You Need to Manage Customers &amp; Recover Dues
        </ArcHeading>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
          From simple contact books to structured business credit control. Vinimay helps you keep customers engaged and payments on schedule.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tile 1: Centralized CRM Directory */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-50 text-[#7552da] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                Unlimited
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Centralized Customer Profiles</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Save business legal names, contact numbers, delivery addresses, GSTIN numbers, and custom notes in one verified place.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 text-xs">
              <div className="flex justify-between items-center text-slate-700">
                <span>Verified GSTIN Lookup</span>
                <span className="text-emerald-600 font-bold">1-Click Auto Fill</span>
              </div>
              <div className="flex justify-between items-center text-slate-700">
                <span>Custom Shipping Addresses</span>
                <span className="text-purple-700 font-bold">Multi-Location</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Customer tag grouping & search</span>
            <ArrowUpRight className="w-4 h-4 text-[#7552da]" />
          </div>
        </div>

        {/* Tile 2: WhatsApp Reminder Automation */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                WhatsApp API
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Automated WhatsApp Reminders</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Send polite payment reminders on due dates with attached PDF invoices and one-click UPI intent pay links.
            </p>

            <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
              <p className="font-semibold">&ldquo;Dear Sharma Traders, your invoice #2041 of ₹12,400 is due. Click to pay via UPI.&rdquo;</p>
              <p className="text-[11px] text-emerald-700 font-mono">⚡ 3x faster collection turnaround</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Direct WhatsApp Cloud API webhook</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Tile 3: Bulk Import & Export */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                Excel & Tally
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">1-Click Bulk Import</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Migrate thousands of customer records and opening balances from Excel, CSV, Vyapar, or Tally in seconds without manual re-entry.
            </p>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-600">Import Format</span>
              <span className="text-blue-600 font-bold">.XLSX · .CSV · Tally XML</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Automatic duplicate deduplication</span>
            <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>

        {/* Tile 4: Party-Wise Ledger Statements */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between lg:col-span-2">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Receipt className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Ledger Statements
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Customer Ledger & Account Statement</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Download complete opening and closing balances, debit entries, credit entries, and running totals formatted for customer sign-off.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100">
                <p className="text-[11px] text-purple-700 font-medium">Billed Invoices</p>
                <p className="text-lg font-black font-mono text-purple-950">₹14,20,500</p>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <p className="text-[11px] text-emerald-700 font-medium">Payments Received</p>
                <p className="text-lg font-black font-mono text-emerald-950">₹12,85,000</p>
              </div>
              <div className="p-3 rounded-2xl bg-rose-50/60 border border-rose-100">
                <p className="text-[11px] text-rose-700 font-medium">Net Receivable</p>
                <p className="text-lg font-black font-mono text-rose-950">₹1,35,500</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Downloadable stamped PDF ledger</span>
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </div>
        </div>

        {/* Tile 5: Customer Loyalty & Retention */}
        <div className="bg-gradient-to-br from-[#7552da] to-[#5a3ebb] text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-2.5 py-1 rounded-full mb-4">
              Retention Engine
            </span>
            <h3 className="text-xl font-black mb-2">Customer Retention</h3>
            <p className="text-3xl font-black font-mono tracking-tight text-white mb-2">
              74.2% Repeat Rate
            </p>
            <p className="text-xs text-purple-200 leading-relaxed mb-6">
              Reward repeat clients with reward points, anniversary greetings, and custom tier discounts.
            </p>

            <div className="space-y-1.5 text-xs text-purple-100 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Loyalty Points Issued</span>
                <span className="font-bold font-mono">18,400 pts</span>
              </div>
              <div className="flex justify-between">
                <span>Redemption Rate</span>
                <span className="font-bold font-mono">92%</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-purple-200">
            <span>Automated anniversary offers</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
