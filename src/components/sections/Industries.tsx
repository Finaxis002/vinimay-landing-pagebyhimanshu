"use client";

import React, { useState } from "react";
import { INDUSTRY_DATA, type IndustryData } from "@/content/industries";
import {
  Utensils,
  Dumbbell,
  ShoppingBag,
  Truck,
  Factory,
  Building2,
  ArrowRight,
  Sparkles,
  Printer,
  Radio,
  MessageSquare,
  MapPin,
  Layers,
  X,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

export default function Industries() {
  const [activeModalKey, setActiveModalKey] = useState<string | null>(null);

  const activeData: IndustryData | null = activeModalKey ? INDUSTRY_DATA[activeModalKey] : null;

  const handleOpenModal = (key: string) => {
    setActiveModalKey(key);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setActiveModalKey(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section
        id="industries"
        className="hidden sm:block relative py-28 -mt-7 sm:py-36 bg-[#0B1120] text-white overflow-hidden border-t border-slate-800/80"
      >
        {/* Ambient Top Mesh Radial Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(128,119,236,0.18),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Centered Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wider uppercase mb-5 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>BUILT FOR YOUR BUSINESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Tools for your industry, in any country
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Pick your business type and the matching tools are ready to use.
            </p>
          </div>

          {/* Bento Grid: 6 Industries in 3 Rhythmic Alternating Rows (7+5, 5+7, 7+5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Card 1: Restaurants & Cafes (7 cols) */}
            <div
              onClick={() => handleOpenModal("restaurants")}
              className="group lg:col-span-7 bg-[#131b2e] hover:bg-[#18233c] rounded-3xl p-6 sm:p-9 border border-slate-800/90 hover:border-purple-500/50 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                        <Utensils className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950/70 border border-purple-800/50 px-2.5 py-0.5 rounded-full">
                        Dining &amp; Kitchen OS
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      Restaurants and cafes
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      Table layout, live POS, kitchen order tickets, Zomato and Swiggy orders, and recipe-based stock deduction.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Kitchen Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Right Illustration: Table 04 & KOT */}
                <div className="md:w-1/2 w-full">
                  <div className="relative w-full max-w-[310px] mx-auto p-4 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#080d18] border border-slate-700/60 shadow-inner space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-slate-200 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Table #04 (Dine-in)
                      </span>
                      <span className="font-mono text-amber-400 text-[10px] bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20 font-bold">
                        KOT #108
                      </span>
                    </div>
                    <div className="text-center py-2 bg-slate-900/90 rounded-xl border border-slate-800">
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold block">
                        Total Bill
                      </span>
                      <span className="text-xl font-black text-white font-mono">
                        ₹1,240<span className="text-xs text-slate-400 font-normal">.00</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-950/80 text-emerald-400 text-[10px] px-2.5 py-1 rounded-lg border border-emerald-800/60 font-semibold animate-pulse">
                      <Sparkles className="w-3 h-3" />
                      <span>-2 Buns, -2 Patties, -40g Cheese</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Printer className="w-3 h-3" /> Thermal KOT Printed
                      </span>
                      <span className="font-mono text-slate-500">0.2s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Gyms & Fitness (5 cols) */}
            <div
              onClick={() => handleOpenModal("gyms")}
              className="group lg:col-span-5 bg-[#131b2e] hover:bg-[#18233c] rounded-3xl p-6 sm:p-9 border border-slate-800/90 hover:border-purple-500/50 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <Dumbbell className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400 bg-pink-950/70 border border-pink-800/50 px-2.5 py-0.5 rounded-full">
                    Hardware IoT &amp; Pricing
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Gyms and fitness clubs
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Memberships, recurring billing, lead tracking, trainer commissions and turnstile check-in.
                </p>
              </div>

              {/* Gym Pass & Turnstile Illustration */}
              <div className="relative mt-2 p-3.5 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#080d18] border border-slate-700/60 space-y-2.5 z-10">
                <div className="animate-card-float bg-gradient-to-tr from-purple-700 via-pink-600 to-amber-500 p-3.5 rounded-xl shadow-lg text-white relative overflow-hidden border border-white/20">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="font-extrabold tracking-wider text-[10px] uppercase">Vinimay Gym Pass</span>
                    <Radio className="w-3.5 h-3.5 text-white/90" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[8px] uppercase tracking-wider text-purple-200 font-semibold">Member</p>
                      <p className="font-bold text-xs tracking-wide">Mr Himanshu D.</p>
                    </div>
                    <span className="text-[8px] bg-white/20 px-2 py-0.5 rounded-full font-bold">RFID ACTIVE</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-slate-200 font-medium">Turnstile Barrier #01</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[10px]">✔ Gate Unlocked</span>
                </div>
              </div>
            </div>

            {/* Card 3: Shops and Traders (5 cols) */}
            <div
              onClick={() => handleOpenModal("retail")}
              className="group lg:col-span-5 bg-[#131b2e] hover:bg-[#18233c] rounded-3xl p-6 sm:p-9 border border-slate-800/90 hover:border-purple-500/50 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                    Fast GST Billing
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Shops and traders
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Fast GST billing, stock alerts, purchase entries and party-wise outstanding.
                </p>
              </div>

              {/* Barcode Scanner with Red Laser & WhatsApp Receipt */}
              <div className="relative mt-2 p-3.5 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#080d18] border border-slate-700/60 space-y-2.5 z-10">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 relative overflow-hidden text-center">
                  <div className="animate-laser" />
                  <div className="flex items-center justify-center gap-1 h-9 mb-1 opacity-80">
                    <span className="w-1 h-full bg-slate-200" />
                    <span className="w-2 h-full bg-slate-200" />
                    <span className="w-0.5 h-full bg-slate-200" />
                    <span className="w-3 h-full bg-slate-200" />
                    <span className="w-1 h-full bg-slate-200" />
                    <span className="w-0.5 h-full bg-slate-200" />
                    <span className="w-2 h-full bg-slate-200" />
                    <span className="w-1 h-full bg-slate-200" />
                    <span className="w-3 h-full bg-slate-200" />
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-mono text-slate-400">8 901030 452912</span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/40">
                      0.3s Scan
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-950/60 border border-emerald-800/60 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                      <MessageSquare className="w-3 h-3" />
                    </div>
                    <span className="font-bold text-slate-200 text-[10px]">INV-1092.pdf sent</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold text-[10px]">✓✓ 0.8s</span>
                </div>
              </div>
            </div>

            {/* Card 4: Transport and Logistics (7 cols) */}
            <div
              onClick={() => handleOpenModal("transport")}
              className="group lg:col-span-7 bg-[#131b2e] hover:bg-[#18233c] rounded-3xl p-6 sm:p-9 border border-slate-800/90 hover:border-purple-500/50 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Truck className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/70 border border-blue-800/50 px-2.5 py-0.5 rounded-full">
                        Fleet &amp; Logistics
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      Transport and logistics
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      Vehicles, drivers, trip sheets, freight billing, and fuel and toll expenses.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore Route &amp; Trips</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Right Illustration: Highway Route Simulation */}
                <div className="md:w-1/2 w-full">
                  <div className="relative w-full max-w-[310px] mx-auto p-4 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#080d18] border border-slate-700/60 shadow-inner space-y-2.5">
                    <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-1.5 font-bold text-slate-200 text-[11px]">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        <span>Delhi › Mumbai Highway</span>
                      </div>
                      <span className="font-mono font-bold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20 text-[10px]">
                        1,420 KM
                      </span>
                    </div>

                    <div className="relative w-full h-12 py-1">
                      <svg className="w-full h-full" viewBox="0 0 240 50" fill="none">
                        <path
                          d="M 15 35 Q 75 10, 130 28 T 225 15"
                          stroke="#334155"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 15 35 Q 75 10, 130 28 T 225 15"
                          stroke="#38bdf8"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          className="animate-highway"
                        />
                        <circle cx="15" cy="35" r="4" fill="#38bdf8" />
                        <circle cx="130" cy="28" r="4.5" fill="#a855f7" className="animate-ping opacity-75" />
                        <circle cx="130" cy="28" r="4" fill="#c084fc" />
                        <circle cx="225" cy="15" r="4" fill="#10b981" />
                      </svg>
                    </div>

                    <div className="text-[10px] text-slate-300 space-y-1 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                      <div className="flex justify-between text-slate-400">
                        <span>Freight Invoice Total:</span>
                        <span className="font-mono text-emerald-400 font-bold">₹42,800</span>
                      </div>
                      <div className="flex justify-between text-slate-400 pt-1 border-t border-slate-800/60">
                        <span>Fuel &amp; Toll Disbursed:</span>
                        <span className="font-mono text-cyan-400 font-bold">₹11,450 (Settled)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Manufacturing (7 cols) */}
            <div
              onClick={() => handleOpenModal("manufacturing")}
              className="group lg:col-span-7 bg-[#131b2e] hover:bg-[#18233c] rounded-3xl p-6 sm:p-9 border border-slate-800/90 hover:border-purple-500/50 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Factory className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/70 border border-amber-800/50 px-2.5 py-0.5 rounded-full">
                        BOM &amp; Production
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      Manufacturing
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      Bill of materials, batch production orders and scrap tracking, from raw stock to finished goods.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore BOM &amp; Batches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Right Illustration: BOM & Scrap */}
                <div className="md:w-1/2 w-full">
                  <div className="relative w-full max-w-[310px] mx-auto p-4 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#080d18] border border-slate-700/60 shadow-inner space-y-2.5">
                    <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-1.5 font-bold text-slate-200 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span>Batch #BOM-2026</span>
                      </div>
                      <span className="font-mono text-emerald-400 text-[10px] bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20 font-bold">
                        In Production
                      </span>
                    </div>

                    <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 space-y-1.5 text-[10px]">
                      <div className="flex justify-between items-center text-slate-300">
                        <span>Raw Steel + Resin (85%)</span>
                        <span className="text-amber-400 font-bold">Deducted</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full w-4/5 animate-pulse" />
                      </div>
                      <div className="flex justify-between items-center text-slate-400 text-[9px]">
                        <span>
                          Scrap Rate: <strong className="text-emerald-400">0.8% (Optimal)</strong>
                        </span>
                        <span>
                          Finished: <strong className="text-white">1,200 Units</strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Layers className="w-3 h-3 text-amber-400" />
                        Unit Landed Cost
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">₹485.50/pc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Property & Rentals (5 cols) */}
            <div
              onClick={() => handleOpenModal("properties")}
              className="group lg:col-span-5 bg-[#131b2e] hover:bg-[#18233c] rounded-3xl p-6 sm:p-9 border border-slate-800/90 hover:border-purple-500/50 shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/50 px-2.5 py-0.5 rounded-full">
                    Leases &amp; Rentals
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Property and rentals
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Units, tenant leases, recurring rent invoices and utility billing.
                </p>
              </div>

              {/* Lease & Rent Utility Card */}
              <div className="relative mt-2 p-3.5 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#080d18] border border-slate-700/60 space-y-2.5 z-10">
                <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-200 font-bold">Tower B • Suite 402</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[10px] font-bold">Active Lease</span>
                </div>

                <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-[10px] space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Monthly Rent:</span>
                    <span className="font-mono text-emerald-400 font-bold">₹65,000 / mo</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 pt-1 border-t border-slate-800">
                    <span>Meter Utilities:</span>
                    <span className="font-mono text-slate-300">340 kWh Electricity</span>
                  </div>
                </div>

                <div className="bg-cyan-950/50 border border-cyan-800/50 p-2 rounded-xl flex items-center justify-between text-[10px]">
                  <span className="text-cyan-300 font-medium">Auto WhatsApp Rent Receipt</span>
                  <span className="text-emerald-400 font-mono font-bold">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED INDUSTRY MODAL */}
      {activeData && (
        <div
          id="industry-modal-overlay"
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            id="industry-modal-card"
            className="bg-white text-slate-900 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200/90 relative overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-purple-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
              <div className="md:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                  {activeData.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {activeData.subtitle}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="#inquiry"
                    onClick={handleCloseModal}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span>{activeData.cta}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#faq"
                    onClick={handleCloseModal}
                    className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-semibold px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    See 100% Free Details
                  </a>
                </div>
              </div>

              {/* Right Side: Bullet Benefits Checklist */}
              <div className="md:col-span-5 bg-slate-50/80 p-5 rounded-2xl border border-slate-100 space-y-3">
                {activeData.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Visual Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch pt-6 border-t border-slate-100">
              <div className="md:col-span-7 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center min-h-[220px] p-4 relative group">
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 mx-auto mb-3">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-800">{activeData.previewTitle}</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Integrated live in Vinimay with zero subscription or terminal fees.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50/70 p-6 rounded-2xl border border-amber-200/60 flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-orange-500 tracking-tight font-mono mb-2">
                  {activeData.statValue}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-xs leading-relaxed">
                  {activeData.statDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
