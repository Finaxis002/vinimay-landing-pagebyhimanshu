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
import ArcHeading from "@/components/common/ArcHeading";

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

  React.useEffect(() => {
    const handleOpenIndustryModal = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && INDUSTRY_DATA[customEvent.detail]) {
        setActiveModalKey(customEvent.detail);
        document.body.style.overflow = "hidden";
      }
    };

    window.addEventListener("open-industry-modal", handleOpenIndustryModal);
    return () => {
      window.removeEventListener("open-industry-modal", handleOpenIndustryModal);
    };
  }, []);

  return (
    <>
      <section
        id="industries"
        className="relative py-20 sm:py-28 md:py-36 bg-white text-slate-900 overflow-hidden border-t border-slate-100"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(128,119,236,0.06),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Centered Header */}
          <div className="relative max-w-3xl mx-auto text-center mb-14 sm:mb-20">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                <span>BUILT FOR YOUR BUSINESS</span>
              </div>

              <div>
                <ArcHeading
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
                >
                  Tools for your industry, in any country
                </ArcHeading>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
                Pick your business type and the matching tools are ready to use.
              </p>
            </div>
          </div>

          {/* Bento Grid: 6 Industries in 3 Rhythmic Alternating Rows (7+5, 5+7, 7+5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Card 1: Restaurants & Cafes (7 cols) */}
            <div
              onClick={() => handleOpenModal("restaurants")}
              className="group lg:col-span-7 bg-white hover:bg-slate-50/50 rounded-3xl p-6 sm:p-9 border border-slate-200/80 hover:border-purple-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Utensils className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                        Dining &amp; Kitchen OS
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                      Restaurants and cafes
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      Table layout, live POS, kitchen order tickets, Zomato and Swiggy orders, and recipe-based stock deduction.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore Kitchen Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Right Illustration: Table 04 & KOT */}
                <div className="md:w-1/2 w-full">
                  <div className="relative w-full max-w-[310px] mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] border-b border-slate-200 pb-2">
                      <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Table #04 (Dine-in)
                      </span>
                      <span className="font-mono text-amber-800 text-[10px] bg-amber-100 px-2 py-0.5 rounded border border-amber-300 font-bold">
                        KOT #108
                      </span>
                    </div>
                    <div className="text-center py-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold block">
                        Total Bill
                      </span>
                      <span className="text-xl font-black text-slate-900 font-mono">
                        ₹1,240<span className="text-xs text-slate-400 font-normal">.00</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] px-2.5 py-1.5 rounded-lg border border-emerald-200 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>-2 Buns, -2 Patties, -40g Cheese</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1 text-emerald-700 font-medium">
                        <Printer className="w-3 h-3 text-emerald-600" /> Thermal KOT Printed
                      </span>
                      <span className="font-mono text-slate-400">0.2s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Gyms & Fitness (5 cols) */}
            <div
              onClick={() => handleOpenModal("gyms")}
              className="group lg:col-span-5 bg-white hover:bg-slate-50/50 rounded-3xl p-6 sm:p-9 border border-slate-200/80 hover:border-pink-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center">
                    <Dumbbell className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-700 bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full">
                    Hardware IoT &amp; Pricing
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                  Gyms and fitness clubs
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Memberships, recurring billing, lead tracking, trainer commissions and short code attendance.
                </p>
              </div>

              {/* Gym Pass & Short Code Attendance Illustration */}
              <div className="relative mt-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 z-10">
                <div className="bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 p-3.5 rounded-xl shadow-md text-white relative overflow-hidden border border-white/20">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="font-extrabold tracking-wider text-[10px] uppercase">Vinimay Gym Pass</span>
                    <Radio className="w-3.5 h-3.5 text-white/90" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[8px] uppercase tracking-wider text-purple-100 font-semibold">Member</p>
                      <p className="font-bold text-xs tracking-wide">Mr Himanshu D.</p>
                    </div>
                    <span className="text-[8px] bg-white/25 px-2 py-0.5 rounded-full font-bold">CODE #108</span>
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-slate-800 font-medium">Front Desk Punch #01</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px]">
                    ✔ Attendance Logged
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Shops and Traders (5 cols) */}
            <div
              onClick={() => handleOpenModal("retail")}
              className="group lg:col-span-5 bg-white hover:bg-slate-50/50 rounded-3xl p-6 sm:p-9 border border-slate-200/80 hover:border-emerald-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Fast GST Billing
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  Shops and traders
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Fast GST billing, stock alerts, purchase entries and party-wise outstanding.
                </p>
              </div>

              {/* Barcode Scanner with Red Laser & WhatsApp Receipt */}
              <div className="relative mt-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 z-10">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs relative overflow-hidden text-center">
                  <div className="animate-laser" />
                  <div className="flex items-center justify-center gap-1 h-9 mb-1.5 opacity-90">
                    <span className="w-1 h-full bg-slate-800" />
                    <span className="w-2 h-full bg-slate-800" />
                    <span className="w-0.5 h-full bg-slate-800" />
                    <span className="w-3 h-full bg-slate-800" />
                    <span className="w-1 h-full bg-slate-800" />
                    <span className="w-0.5 h-full bg-slate-800" />
                    <span className="w-2 h-full bg-slate-800" />
                    <span className="w-1 h-full bg-slate-800" />
                    <span className="w-3 h-full bg-slate-800" />
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-mono text-slate-600 font-semibold">8 901030 452912</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      0.3s Scan
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-50/90 border border-emerald-200 p-2.5 rounded-xl flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <MessageSquare className="w-3 h-3" />
                    </div>
                    <span className="font-bold text-slate-800 text-[10px]">INV-1092.pdf sent</span>
                  </div>
                  <span className="text-emerald-700 font-mono font-bold text-[10px]">✓✓ 0.8s</span>
                </div>
              </div>
            </div>

            {/* Card 4: Transport and Logistics (7 cols) */}
            <div
              onClick={() => handleOpenModal("transport")}
              className="group lg:col-span-7 bg-white hover:bg-slate-50/50 rounded-3xl p-6 sm:p-9 border border-slate-200/80 hover:border-blue-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                        <Truck className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                        Fleet &amp; Logistics
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Transport and logistics
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      Vehicles, drivers, trip sheets, freight billing, and fuel and toll expenses.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>Explore Route &amp; Trips</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Right Illustration: Highway Route Simulation */}
                <div className="md:w-1/2 w-full">
                  <div className="relative w-full max-w-[310px] mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        <span>Delhi › Mumbai Highway</span>
                      </div>
                      <span className="font-mono font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded border border-blue-200 text-[10px]">
                        1,420 KM
                      </span>
                    </div>

                    <div className="relative w-full h-12 py-1">
                      <svg className="w-full h-full" viewBox="0 0 240 50" fill="none">
                        <path
                          d="M 15 35 Q 75 10, 130 28 T 225 15"
                          stroke="#cbd5e1"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 15 35 Q 75 10, 130 28 T 225 15"
                          stroke="#2563eb"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          className="animate-highway"
                        />
                        <circle cx="15" cy="35" r="4" fill="#2563eb" />
                        <circle cx="130" cy="28" r="4.5" fill="#9333ea" className="animate-ping opacity-75" />
                        <circle cx="130" cy="28" r="4" fill="#9333ea" />
                        <circle cx="225" cy="15" r="4" fill="#16a34a" />
                      </svg>
                    </div>

                    <div className="text-[10px] text-slate-600 space-y-1.5 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Freight Invoice Total:</span>
                        <span className="font-mono text-emerald-700 font-bold">₹42,800</span>
                      </div>
                      <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-100">
                        <span>Fuel &amp; Toll Disbursed:</span>
                        <span className="font-mono text-blue-700 font-bold">₹11,450 (Settled)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Manufacturing (7 cols) */}
            <div
              onClick={() => handleOpenModal("manufacturing")}
              className="group lg:col-span-7 bg-white hover:bg-slate-50/50 rounded-3xl p-6 sm:p-9 border border-slate-200/80 hover:border-amber-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                        <Factory className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                        BOM &amp; Production
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                      Manufacturing
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      Bill of materials, batch production orders and scrap tracking, from raw stock to finished goods.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
                    <span>Explore BOM &amp; Batches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Right Illustration: BOM & Scrap */}
                <div className="md:w-1/2 w-full">
                  <div className="relative w-full max-w-[310px] mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span>Batch #BOM-2026</span>
                      </div>
                      <span className="font-mono text-emerald-800 text-[10px] bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                        In Production
                      </span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs space-y-1.5 text-[10px]">
                      <div className="flex justify-between items-center text-slate-700">
                        <span>Raw Steel + Resin (85%)</span>
                        <span className="text-amber-600 font-bold">Deducted</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full w-4/5 animate-pulse" />
                      </div>
                      <div className="flex justify-between items-center text-slate-500 text-[9px]">
                        <span>
                          Scrap Rate: <strong className="text-emerald-700 font-bold">0.8% (Optimal)</strong>
                        </span>
                        <span>
                          Finished: <strong className="text-slate-900 font-bold">1,200 Units</strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1 text-slate-700 font-medium">
                        <Layers className="w-3 h-3 text-amber-600" />
                        Unit Landed Cost
                      </span>
                      <span className="font-mono text-emerald-700 font-bold">₹485.50/pc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Property & Rentals (5 cols) */}
            <div
              onClick={() => handleOpenModal("properties")}
              className="group lg:col-span-5 bg-white hover:bg-slate-50/50 rounded-3xl p-6 sm:p-9 border border-slate-200/80 hover:border-cyan-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded-full">
                    Leases &amp; Rentals
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  Property and rentals
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Units, tenant leases, recurring rent invoices and utility billing.
                </p>
              </div>

              {/* Lease & Rent Utility Card */}
              <div className="relative mt-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 z-10">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-slate-800 font-bold">Tower B • Suite 402</span>
                  </div>
                  <span className="text-cyan-700 font-mono text-[10px] font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                    Active Lease
                  </span>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs text-[10px] space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Monthly Rent:</span>
                    <span className="font-mono text-emerald-700 font-bold">₹65,000 / mo</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500 pt-1 border-t border-slate-100">
                    <span>Meter Utilities:</span>
                    <span className="font-mono text-slate-800 font-medium">340 kWh Electricity</span>
                  </div>
                </div>

                <div className="bg-cyan-50/90 border border-cyan-200 p-2 rounded-xl flex items-center justify-between text-[10px]">
                  <span className="text-cyan-900 font-medium">Auto WhatsApp Rent Receipt</span>
                  <span className="text-emerald-700 font-mono font-bold">Scheduled</span>
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
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
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
              className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-purple-50 hover:bg-purple-100 flex items-center justify-center text-purple-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
              <div className="md:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                  {activeData.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {activeData.subtitle}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="https://vinimay.sharda.co.in/knowledge-base"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCloseModal}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span>{activeData.cta}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://vinimay.sharda.co.in/knowledge-base"
                    target="_blank"
                    rel="noopener noreferrer"
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
