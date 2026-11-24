"use client";

import React from "react";
import {
  TrendingUp,
  Settings,
  FileText,
  Plus,
  CreditCard,
  Users,
  Building2,
  Search,
  IndianRupee,
} from "lucide-react";

export function DashboardScreen() {
  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Dashboard Top Header & Quick Actions */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-3.5 sm:p-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                Dashboard
              </h2>
              <div className="w-6 h-6 rounded-full bg-[#7c5cfc] text-white flex items-center justify-center shadow-xs">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            </div>
            <p className="text-[10.5px] text-slate-400 mt-0.5">
              Track cashflow, inventory movement, and team activity for Dhurandhar Fitness.
            </p>
            <div className="mt-1.5">
              <span className="px-2 py-0.5 rounded-full bg-purple-50 text-[#7c5cfc] font-bold text-[9.5px] border border-purple-100">
                Dhurandhar Fitness
              </span>
            </div>
          </div>

          {/* Quick Actions (Static Mockup Visual) */}
          <div className="border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-4 pt-2.5 lg:pt-0">
            <span className="text-[9px] font-bold tracking-wider text-purple-700 uppercase block mb-1">
              Quick Actions
            </span>
            <p className="text-[10px] text-slate-400 mb-2 max-w-xs">
              Create invoices, record entries, or jump into settings without leaving this view.
            </p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-[10.5px] shadow-2xs cursor-default">
                <Settings className="w-3 h-3 text-slate-400" />
                <span>Settings</span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-[10.5px] shadow-2xs cursor-default">
                <FileText className="w-3 h-3 text-slate-400" />
                <span>Proforma Invoice</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[10.5px] shadow-xs cursor-default">
                <Plus className="w-3 h-3" />
                <span>New Transaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {/* Total Sales */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[9.5px] font-bold tracking-wider text-purple-700 uppercase block">
              Total Sales
            </span>
            <b className="text-base sm:text-lg font-extrabold text-slate-900 leading-none mt-1 block font-mono">
              ₹1,17,894.89
            </b>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[9px] text-slate-400">Selected company performance</span>
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">Live</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
            <IndianRupee className="w-4 h-4" />
          </div>
        </div>

        {/* Total Purchases */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[9.5px] font-bold tracking-wider text-purple-700 uppercase block">
              Total Purchases
            </span>
            <b className="text-base sm:text-lg font-extrabold text-slate-900 leading-none mt-1 block font-mono">
              ₹1,50,712.00
            </b>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[9px] text-slate-400">Operating spend snapshot</span>
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">Live</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
            <CreditCard className="w-4 h-4" />
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[9.5px] font-bold tracking-wider text-purple-700 uppercase block">
              Active Users
            </span>
            <b className="text-base sm:text-lg font-extrabold text-slate-900 leading-none mt-1 block font-mono">
              1
            </b>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[9px] text-slate-400">Collaborators currently counted</span>
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">Live</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
        </div>

        {/* Companies */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[9.5px] font-bold tracking-wider text-purple-700 uppercase block">
              Companies
            </span>
            <b className="text-base sm:text-lg font-extrabold text-slate-900 leading-none mt-1 block font-mono">
              10
            </b>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[9px] text-slate-400">Business entities in view</span>
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">Live</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
            <Building2 className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Inventory Pulse Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-3.5 sm:p-4 space-y-3 cursor-default">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-[#7c5cfc] font-bold text-[9px] tracking-wider uppercase inline-block mb-1">
              INVENTORY PULSE
            </span>
            <h3 className="font-extrabold text-slate-900 text-xs sm:text-[13px]">
              Product &amp; Service Stock
            </h3>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Current inventory levels and management
            </p>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[11px] shadow-xs self-start sm:self-auto cursor-default">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Product</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-400 cursor-default">
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <input
            type="text"
            readOnly
            value="Search products or services..."
            className="bg-transparent border-none outline-none w-full text-slate-400 text-[11px] cursor-default"
          />
        </div>
      </div>
    </div>
  );
}