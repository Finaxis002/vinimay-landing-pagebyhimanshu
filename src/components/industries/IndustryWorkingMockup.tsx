"use client";

import React, { useState } from "react";
import {
  Truck,
  Package,
  Layers,
  ShoppingBag,
  Factory,
  Plane,
  UtensilsCrossed,
  Dumbbell,
  Building2,
  Wrench,
  CheckCircle2,
  Clock,
  Printer,
  FileText,
  QrCode,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Scale,
  Fuel,
  Compass,
} from "lucide-react";

export interface IndustryWorkingMockupProps {
  industryId: string;
}

export default function IndustryWorkingMockup({ industryId }: IndustryWorkingMockupProps) {
  // Normalize industry ID (handles plurals like "properties", "travels", "marbles", "gyms", "restaurants")
  const rawId = (industryId || "").toLowerCase().trim();
  const id = rawId.endsWith("ies")
    ? rawId.replace(/ies$/, "y")
    : rawId.replace(/s$/, "");

  // 1. TRANSPORTATION & FREIGHT (Trip Sheets, Route, Diesel, Freight Invoice)
  if (id === "transportation" || id === "transport" || rawId === "transportation") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Trip Sheet & Cargo Details */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2.5 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-indigo-500" />
                  Trip Sheet Details
                </span>
                <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                  TRIP #TS-8842
                </span>
              </div>

              {/* Route Summary */}
              <div className="flex items-center justify-between bg-indigo-50/50 border border-indigo-100 rounded-lg p-2.5 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-indigo-500 font-bold block">ROUTE (HIGHWAY HAUL)</span>
                  <span className="font-bold text-slate-800">Mumbai (Bhiwandi) → Delhi (SGTN)</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-indigo-500 font-bold block">GOOGLE DISTANCE</span>
                  <span className="font-mono font-bold text-indigo-700">1,410 Km</span>
                </div>
              </div>

              {/* Vehicle & Driver Info */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mb-2.5">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-semibold">VEHICLE ASSIGNED</span>
                  <span className="font-bold text-slate-800 font-mono">MH-04-GP-8842</span>
                  <span className="text-[9px] text-slate-500 block">22-Ton Multi-Axle</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-semibold">DRIVER &amp; LICENSE</span>
                  <span className="font-bold text-slate-800">Rajesh Kumar</span>
                  <span className="text-[9px] text-slate-500 font-mono block">DL-90214-A (Valid)</span>
                </div>
              </div>

              {/* Cargo Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-5">Consignor &amp; Cargo</span>
                  <span className="col-span-3 text-center">Weight</span>
                  <span className="col-span-4 text-right">Freight Rate</span>
                </div>
                <div className="grid grid-cols-12 p-2 items-center border-t border-slate-100 text-slate-700">
                  <span className="col-span-5 font-semibold text-slate-900 truncate">Jindal Steel (Hot Coils)</span>
                  <span className="col-span-3 text-center font-mono">21.50 Tons</span>
                  <span className="col-span-4 text-right font-mono font-bold text-slate-900">₹1,650 / Ton</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Trip Financials & Expense Reconciliation */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Freight &amp; Expense Summary
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
                  RCM COMPLIANT
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Base Freight (21.5 T)</span>
                  <span className="font-mono text-slate-800 font-bold">₹35,475</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Loading / Unloading</span>
                  <span className="font-mono text-slate-700">₹1,200</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px] pt-1 border-t border-dashed border-slate-200">
                  <span className="text-amber-600 font-medium">Diesel Expenses (Logged)</span>
                  <span className="font-mono text-amber-700">-₹14,200</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span className="text-amber-600 font-medium">Fastag Toll Charges</span>
                  <span className="font-mono text-amber-700">-₹3,850</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span className="text-amber-600 font-medium">Driver Cash Advance</span>
                  <span className="font-mono text-amber-700">-₹5,000</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Net Freight Receivable</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹36,675</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-indigo-700 bg-indigo-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>TRIP-INV-9021.pdf (Consignor Copy)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Trip Invoice Created</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. MARBLES & TILES (Multi-Row Size Entries, Sq. Ft., Truck No.)
  if (id === "marble") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3">
          {/* Left: Multi-Row Slab Dimension Table */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  Marble Slab Dimension Sheet
                </span>
                <span className="text-[10px] font-mono font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
                  BLOCK #MG-88
                </span>
              </div>

              {/* Product Header */}
              <div className="flex items-center justify-between bg-teal-50/50 border border-teal-100 rounded-lg p-2 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-teal-600 font-bold block">PRODUCT / STONE LOT</span>
                  <span className="font-bold text-slate-800">Royal White Makrana Marble</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-teal-600 font-bold block">RATE / SQ. FT.</span>
                  <span className="font-mono font-bold text-teal-700">₹185.00</span>
                </div>
              </div>

              {/* Multi-Row Slab Dimensions Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-3">Dimensions</span>
                  <span className="col-span-2 text-center">Qty</span>
                  <span className="col-span-3 text-center">Sq. Ft.</span>
                  <span className="col-span-4 text-right">Amount</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-3 font-mono font-bold">72&quot; × 48&quot; (6×4 ft)</span>
                    <span className="col-span-2 text-center font-mono">4</span>
                    <span className="col-span-3 text-center font-mono text-teal-700 font-bold">96.00</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹17,760</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-3 font-mono font-bold">84&quot; × 54&quot; (7×4.5)</span>
                    <span className="col-span-2 text-center font-mono">6</span>
                    <span className="col-span-3 text-center font-mono text-teal-700 font-bold">189.00</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹34,965</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-3 font-mono font-bold">60&quot; × 36&quot; (5×3 ft)</span>
                    <span className="col-span-2 text-center font-mono">8</span>
                    <span className="col-span-3 text-center font-mono text-teal-700 font-bold">120.00</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹19,800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Truck Details on Bottom Left */}
            <div className="mt-2.5 p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between text-[10px]">
              <div>
                <span className="text-slate-400 block font-semibold">TRUCK NO. &amp; TRANSPORTER</span>
                <span className="font-bold text-slate-800 font-mono">RJ-14-GA-9021 • Marwar Roadlines</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block font-semibold">E-WAY BILL NO.</span>
                <span className="font-mono text-slate-700 font-bold">891240129</span>
              </div>
            </div>
          </div>

          {/* Right: Slab Summary & Tax Totals */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Stone Tax Summary
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700">
                  GST 18% (HSN 6802)
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Total Slabs Measured</span>
                  <span className="font-mono text-slate-800 font-bold">18 Slabs</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Total Square Feet</span>
                  <span className="font-mono text-teal-700 font-black text-xs">405.00 Sq. Ft.</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>Subtotal Amount</span>
                  <span className="font-mono text-slate-700">₹72,525</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>CGST 9%</span>
                  <span className="font-mono text-teal-700">₹6,527</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>SGST 9%</span>
                  <span className="font-mono text-teal-700">₹6,527</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Bill Amount</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹85,579</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-teal-700 bg-teal-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>MRBL-INV-8921.pdf (Gate Pass Ready)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Gate Pass &amp; Bill Generated</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. COURIER (Sender/Receiver, Volumetric Weight L × W × H, SAC 996812)
  if (id === "courier") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Sender/Receiver & Consignments */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-blue-600" />
                  Courier Booking &amp; Volumetric Engine
                </span>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                  AWB #BLU-8921
                </span>
              </div>

              {/* Sender & Receiver Card */}
              <div className="grid grid-cols-2 gap-2 text-[10px] mb-2.5">
                <div className="p-2 rounded-lg bg-blue-50/50 border border-blue-100">
                  <span className="text-[9px] text-blue-600 block font-bold">SENDER DETAILS</span>
                  <span className="font-bold text-slate-800 block">Sharma Garments (Jaipur)</span>
                  <span className="text-slate-500 block truncate">Station Road, Jaipur - 302001</span>
                </div>
                <div className="p-2 rounded-lg bg-emerald-50/50 border border-emerald-100">
                  <span className="text-[9px] text-emerald-600 block font-bold">RECEIVER DETAILS</span>
                  <span className="font-bold text-slate-800 block">Blue Star Retail (Bengaluru)</span>
                  <span className="text-slate-500 block truncate">Koramangala, BLR - 560034</span>
                </div>
              </div>

              {/* Volumetric Parcels Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-4">Parcel Box</span>
                  <span className="col-span-3 text-center">Dimensions (cm)</span>
                  <span className="col-span-2 text-center">Charged</span>
                  <span className="col-span-3 text-right">Freight</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-2 items-center text-slate-700">
                    <span className="col-span-4 font-semibold text-slate-900 truncate">Apparel Carton A</span>
                    <span className="col-span-3 text-center font-mono text-[10px]">30×20×15 cm</span>
                    <span className="col-span-2 text-center font-mono font-bold text-blue-700">2.5 kg</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹225.00</span>
                  </div>
                  <div className="grid grid-cols-12 p-2 items-center text-slate-700">
                    <span className="col-span-4 font-semibold text-slate-900 truncate">Fabric Roll B</span>
                    <span className="col-span-3 text-center font-mono text-[10px]">60×15×15 cm</span>
                    <span className="col-span-2 text-center font-mono font-bold text-blue-700">4.8 kg</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹432.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-between">
              <span>Volumetric Formula: (L × W × H) / 5000</span>
              <span className="font-mono font-bold text-blue-600">Rate: ₹90.00 / Kg</span>
            </div>
          </div>

          {/* Right: Courier Charge & SAC 996812 Summary */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Courier Tax Summary
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                  SAC 996812 (18%)
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Weight Charges (7.3 kg)</span>
                  <span className="font-mono text-slate-800 font-bold">₹657.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Docket &amp; Handling</span>
                  <span className="font-mono text-slate-700">₹50.00</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>Taxable Value</span>
                  <span className="font-mono text-slate-700">₹707.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>CGST 9% + SGST 9%</span>
                  <span className="font-mono text-blue-600">₹127.26</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Amount</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹834.26</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-blue-700 bg-blue-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>AWB-8921.pdf (Thermal Sticker Ready)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AWB &amp; WhatsApp Receipt Dispatched</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 4. TRAVELS (Routes, Fixed + Per-Km Variable, Toll, SAC 9985)
  if (id === "travel") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Travel Itinerary & Vehicle Details */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-indigo-600" />
                  Travel Booking &amp; Cab Itinerary
                </span>
                <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                  BOOKING #TRV-504
                </span>
              </div>

              {/* Route & Date */}
              <div className="flex items-center justify-between bg-indigo-50/50 border border-indigo-100 rounded-lg p-2.5 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-indigo-600 font-bold block">ITINERARY ROUTE</span>
                  <span className="font-bold text-slate-800">Delhi IGI Airport → Agra → Jaipur</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-indigo-600 font-bold block">TRAVEL DATES</span>
                  <span className="font-mono text-slate-700 font-bold">28 Nov – 30 Nov</span>
                </div>
              </div>

              {/* Vehicle & Driver */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mb-2">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-semibold">VEHICLE &amp; TYPE</span>
                  <span className="font-bold text-slate-800">Innova Crysta (SUV)</span>
                  <span className="text-[9px] font-mono text-slate-500">DL-01-TC-4021</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-semibold">CHAUFFEUR ASSIGNED</span>
                  <span className="font-bold text-slate-800">Ramesh Chand</span>
                  <span className="text-[9px] font-mono text-slate-500">+91 98290 XXXXX</span>
                </div>
              </div>

              {/* Billing Structure Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-6">Service Component</span>
                  <span className="col-span-3 text-center">Qty / Rate</span>
                  <span className="col-span-3 text-right">Amount</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900">3-Day Outstation Package</span>
                    <span className="col-span-3 text-center font-mono">Fixed Hire</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹9,500</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900">Variable Distance Run</span>
                    <span className="col-span-3 text-center font-mono text-indigo-700">620 Km @ ₹14</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹8,680</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Toll, Extras & SAC 9985 Tax */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Travel Tax &amp; Tolls
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700">
                  SAC 9985 (5% GST)
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Base Package + Km</span>
                  <span className="font-mono text-slate-800 font-bold">₹18,180</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Fastag Highway Tolls</span>
                  <span className="font-mono text-slate-700">₹950</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Airport Parking Charges</span>
                  <span className="font-mono text-slate-700">₹320</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Driver Overnight Allowance</span>
                  <span className="font-mono text-slate-700">₹600</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>GST 5% (SAC 9985)</span>
                  <span className="font-mono text-indigo-600">₹1,002.50</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Bill Amount</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹21,052.50</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-indigo-700 bg-indigo-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>TRV-INV-504.pdf (Duty Slip Linked)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Itinerary &amp; GST Bill Generated</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 5. MANUFACTURING (BOM Recipe, Production Entry, Raw Stock Deduction)
  if (id === "manufacturing") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3">
          {/* Left: Production Run & BOM Component Consumption */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-rose-600" />
                  BOM Production Run Desk
                </span>
                <span className="text-[10px] font-mono font-bold bg-rose-50 text-rose-700 px-2 py-0.5 rounded">
                  BATCH #MFG-NOV-50
                </span>
              </div>

              {/* Finished Good Header */}
              <div className="flex items-center justify-between bg-rose-50/50 border border-rose-100 rounded-lg p-2 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-rose-600 font-bold block">MANUFACTURED FINISHED ITEM</span>
                  <span className="font-bold text-slate-800">Industrial Ceiling Fan 1200mm</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-rose-600 font-bold block">OUTPUT CONFIRMED</span>
                  <span className="font-mono font-bold text-emerald-600">+50 Units Inwarded</span>
                </div>
              </div>

              {/* Raw Materials Consumed from BOM */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-6">Raw Material (BOM)</span>
                  <span className="col-span-3 text-center">Consumed</span>
                  <span className="col-span-3 text-right">Remaining</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Copper Motor Stator 1200mm</span>
                    <span className="col-span-3 text-center font-mono text-rose-600 font-bold">-50 Pcs</span>
                    <span className="col-span-3 text-right font-mono text-slate-500">180 Pcs</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Aluminum Blades (Set of 3)</span>
                    <span className="col-span-3 text-center font-mono text-rose-600 font-bold">-150 Pcs</span>
                    <span className="col-span-3 text-right font-mono text-slate-500">420 Pcs</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Ball Bearings 6202ZZ</span>
                    <span className="col-span-3 text-center font-mono text-rose-600 font-bold">-100 Pcs</span>
                    <span className="col-span-3 text-right font-mono text-slate-500">500 Pcs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-[10px] text-emerald-700 font-semibold flex items-center justify-between bg-emerald-50 p-2 rounded-lg border border-emerald-100">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Raw Material Shortage Check: Passed (0 Shortages)
              </span>
              <span className="font-mono text-slate-600">Stock Deducted ✓</span>
            </div>
          </div>

          {/* Right: Landed Cost & Batch Summary */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Costing &amp; Landed Yield
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-700">
                  PRODUCTION ENTRY
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Raw Material Cost</span>
                  <span className="font-mono text-slate-800 font-bold">₹44,200</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Factory Direct Labor</span>
                  <span className="font-mono text-slate-700">₹3,500</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Electricity &amp; Machine Overhead</span>
                  <span className="font-mono text-slate-700">₹800</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Batch Cost</span>
                  <span className="font-mono text-sm font-black text-slate-900">₹48,500</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-1">
                  <span>Landed Cost per Unit</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹970.00 / Unit</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-rose-700 bg-rose-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>PROD-ENTRY-01.pdf (Stock Audit Log)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Production Confirmed &amp; Stock Added</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 6. REAL ESTATE & PROPERTIES (Projects, Towers, Units, Carpet Area, RERA)
  if (
    id === "property" ||
    id === "properties" ||
    id === "propertie" ||
    id === "real_estate" ||
    id === "realestate" ||
    rawId === "properties"
  ) {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3">
          {/* Left: Project Unit Inventory Specs */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-600" />
                  Real Estate Unit Registry
                </span>
                <span className="text-[10px] font-mono font-bold bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded">
                  RERA: P-BPL-24-9021
                </span>
              </div>

              {/* Project & Unit Header */}
              <div className="flex items-center justify-between bg-cyan-50/50 border border-cyan-100 rounded-lg p-2.5 mb-2.5 text-xs">
                <div>
                  <span className="text-[10px] text-cyan-600 font-bold block">PROJECT &amp; TOWER</span>
                  <span className="font-bold text-slate-800">Aman Heights • Tower B, 14th Floor</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-cyan-600 font-bold block">UNIT SPECIFICATION</span>
                  <span className="font-mono font-bold text-cyan-700">Unit #B-1402 (3 BHK)</span>
                </div>
              </div>

              {/* Carpet Area & Pricing Grid */}
              <div className="grid grid-cols-3 gap-2 text-[11px] mb-2.5">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                  <span className="text-[9px] text-slate-400 block font-semibold">CARPET AREA</span>
                  <span className="font-mono font-bold text-slate-800">1,420 Sq. Ft.</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                  <span className="text-[9px] text-slate-400 block font-semibold">SUPER BUILT-UP</span>
                  <span className="font-mono font-bold text-slate-800">1,890 Sq. Ft.</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                  <span className="text-[9px] text-slate-400 block font-semibold">RATE / SQ. FT.</span>
                  <span className="font-mono font-bold text-cyan-700">₹6,200.00</span>
                </div>
              </div>

              {/* Unit Features */}
              <div className="flex items-center justify-between text-[10px] bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-slate-600">Facing: <b>Park &amp; Lake Corner Unit</b></span>
                <span className="text-slate-600">Parking Slot: <b>Covered P-22</b></span>
                <span className="text-emerald-600 font-bold">Status: AVAILABLE</span>
              </div>
            </div>
          </div>

          {/* Right: Agreement Value & 5% GST */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Real Estate Agreement
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700">
                  GST 5% (HOUSING)
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Base Unit Consideration</span>
                  <span className="font-mono text-slate-800 font-bold">₹1,17,18,000</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Covered Parking Slot</span>
                  <span className="font-mono text-slate-700">₹3,50,000</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Club Membership &amp; PLC</span>
                  <span className="font-mono text-slate-700">₹1,50,000</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>Total Agreement Value</span>
                  <span className="font-mono text-slate-700">₹1,22,18,000</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>GST 5% (Residential)</span>
                  <span className="font-mono text-cyan-700">₹6,10,900</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Package Value</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹1,28,28,900</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-700 bg-cyan-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>UNIT-B1402-BOOKING.pdf</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Milestone Invoice Issued</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 7. RESTAURANTS & CAFES (Tables, Wireless KOT, Recipe Stock Deduction)
  if (id === "restaurant") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Table POS & Fired KOT Items */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-orange-600" />
                  Table POS &amp; Kitchen Tickets (KOT)
                </span>
                <span className="text-[10px] font-mono font-bold bg-orange-50 text-orange-700 px-2 py-0.5 rounded">
                  TABLE #04 (4 GUESTS)
                </span>
              </div>

              {/* Order Status Bar */}
              <div className="flex items-center justify-between bg-orange-50/50 border border-orange-100 rounded-lg p-2 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-orange-600 font-bold block">ORDER TYPE &amp; SERVER</span>
                  <span className="font-bold text-slate-800">Dine-in • Server: Aman S.</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-orange-600 font-bold block">KOT TRANSMISSION</span>
                  <span className="font-mono font-bold text-emerald-600">Printed (0.2s Kitchen) ✓</span>
                </div>
              </div>

              {/* Fired KOT Dishes Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-6">Dish &amp; Station</span>
                  <span className="col-span-2 text-center">Qty</span>
                  <span className="col-span-4 text-right">Amount</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Paneer Butter Masala (Full)</span>
                    <span className="col-span-2 text-center font-mono">2</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹560.00</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Garlic Butter Naan (Tandoor)</span>
                    <span className="col-span-2 text-center font-mono">6</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹270.00</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Cold Coffee with Ice Cream</span>
                    <span className="col-span-2 text-center font-mono">2</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹240.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
              <span className="text-orange-700 font-medium">Recipe Ingredients Deducted:</span>
              <span className="font-mono text-slate-700">Paneer 400g • Butter 80g • Milk 500ml</span>
            </div>
          </div>

          {/* Right: Restaurant Bill & Split Payment */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Restaurant Tax Bill
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-50 text-orange-700">
                  GST 5% (FOOD)
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Food Subtotal</span>
                  <span className="font-mono text-slate-800 font-bold">₹1,070.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>CGST 2.5%</span>
                  <span className="font-mono text-slate-700">₹26.75</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>SGST 2.5%</span>
                  <span className="font-mono text-slate-700">₹26.75</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Table Bill</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹1,123.50</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-orange-700 bg-orange-50 rounded-lg px-2.5 py-1.5">
                <Printer className="w-3.5 h-3.5" />
                <span>Thermal Slip Printed • Cash Drawer Kick</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Paid via Dynamic Table UPI</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 8. GYMS & FITNESS (Short Member Code Attendance & Check-in)
  if (id === "gym" || id === "fitness") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Member Attendance & Short Code Terminal */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-purple-600" />
                  Short Code Attendance Terminal
                </span>
                <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                  CODE PUNCH: ACTIVE
                </span>
              </div>

              {/* Checkin Result Box */}
              <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-emerald-700 font-bold block">SHORT CODE ENTERED</span>
                  <span className="font-bold text-slate-800">Code #108 • Vikram Malhotra</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-700 font-bold block">ATTENDANCE STATUS</span>
                  <span className="font-mono font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    CHECK-IN LOGGED
                  </span>
                </div>
              </div>

              {/* Membership & Plan Specs */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mb-2">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-semibold">PLAN ACTIVE</span>
                  <span className="font-bold text-slate-800">Annual Gold (365 Days)</span>
                  <span className="text-[9px] font-mono text-emerald-600">184 Days Remaining</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-400 block font-semibold">PERSONAL TRAINER</span>
                  <span className="font-bold text-slate-800">Trainer Rahul Sharma</span>
                  <span className="text-[9px] text-slate-500">PT Session 12/24</span>
                </div>
              </div>

              {/* Measurement History */}
              <div className="border border-slate-100 rounded-lg p-2 bg-slate-50 flex items-center justify-between text-[10px]">
                <span className="text-slate-600">Recent Fitness Assessment:</span>
                <span className="font-mono text-slate-800 font-semibold">Weight: 76.4 kg • Body Fat: 14.8%</span>
              </div>
            </div>
          </div>

          {/* Right: Membership Invoice & Renewal Tracker */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Membership Account
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-50 text-purple-700">
                  PAID IN FULL
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Annual Subscription</span>
                  <span className="font-mono text-slate-800 font-bold">₹16,000.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>One-time Joining Fee</span>
                  <span className="font-mono text-slate-700">₹1,000.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Locker Rental (Annual)</span>
                  <span className="font-mono text-slate-700">₹1,000.00</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>GST 18% (Fitness)</span>
                  <span className="font-mono text-purple-600">₹3,240.00</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Amount Paid</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹21,240.00</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-purple-700 bg-purple-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>GYM-INV-108.pdf (WhatsApp Delivered)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Attendance Recorded &amp; Synced</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 9. KIRANA & GROCERY (0.3s Barcode Scan, Udhaar Khata, Thermal POS)
  if (id === "kirana") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Rapid Barcode Counter POS Table */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
                  0.3s Rapid Barcode Checkout
                </span>
                <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">
                  COUNTER REGISTER 01
                </span>
              </div>

              {/* Customer Khata Bar */}
              <div className="flex items-center justify-between bg-emerald-50/50 border border-emerald-100 rounded-lg p-2 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-emerald-600 font-bold block">CUSTOMER KHATA</span>
                  <span className="font-bold text-slate-800">Ramesh Kumar (Regular Udhaar)</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-600 font-bold block">PREVIOUS BALANCE</span>
                  <span className="font-mono font-bold text-amber-700">₹450 Due</span>
                </div>
              </div>

              {/* Barcode Scanned Items Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-6">Item &amp; Barcode</span>
                  <span className="col-span-2 text-center">Qty</span>
                  <span className="col-span-4 text-right">Amount</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Fortune Sunlite Oil 1L</span>
                    <span className="col-span-2 text-center font-mono">2</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹290.00</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Tata Salt Iodized 1kg</span>
                    <span className="col-span-2 text-center font-mono">3</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹84.00</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Aashirvaad Chakki Atta 5kg</span>
                    <span className="col-span-2 text-center font-mono">1</span>
                    <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹245.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
              <span>Scan Speed: <b>0.3s / Item</b></span>
              <span className="font-mono text-emerald-700 font-bold">Total: 6 Items</span>
            </div>
          </div>

          {/* Right: Payment Split & Receipt */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Payment Collection
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
                  SPLIT PAYMENT
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Gross Items Total</span>
                  <span className="font-mono text-slate-800 font-bold">₹619.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Special Discount</span>
                  <span className="font-mono text-emerald-600">-₹19.00</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>Paid in Cash</span>
                  <span className="font-mono text-slate-700 font-bold">₹100.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Paid via Dynamic UPI</span>
                  <span className="font-mono text-emerald-600 font-bold">₹500.00</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Amount Paid</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹600.00</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 rounded-lg px-2.5 py-1.5">
                <Printer className="w-3.5 h-3.5" />
                <span>3-Inch Thermal Receipt Slip Cut</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Checkout Complete (₹0 Discrepancy)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 10. TRADING & WHOLESALE (B2B Multi-Rate, Party Ledger, PO to Sales)
  if (id === "trading") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Wholesale Items & PO */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  B2B Wholesale Tax Invoice
                </span>
                <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                  INV-B2B-104
                </span>
              </div>

              {/* Party Header */}
              <div className="flex items-center justify-between bg-purple-50/50 border border-purple-100 rounded-lg p-2.5 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-purple-600 font-bold block">BUYER (B2B REGISTERED)</span>
                  <span className="font-bold text-slate-800">Mahalaxmi Electrical Trading</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-purple-600 font-bold block">CREDIT TERMS</span>
                  <span className="font-mono font-bold text-slate-700">Net 30 Days (Safe)</span>
                </div>
              </div>

              {/* Wholesale Items Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-5">Product &amp; HSN</span>
                  <span className="col-span-2 text-center">Qty</span>
                  <span className="col-span-2 text-right">Rate</span>
                  <span className="col-span-3 text-right">Amount</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-5 font-semibold text-slate-900 truncate">Copper Wire 1.5mm (Drum)</span>
                    <span className="col-span-2 text-center font-mono">20</span>
                    <span className="col-span-2 text-right font-mono">₹2,400</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹48,000</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-5 font-semibold text-slate-900 truncate">Modular Switch 16A (Box 20)</span>
                    <span className="col-span-2 text-center font-mono">15</span>
                    <span className="col-span-2 text-right font-mono">₹1,100</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹16,500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-[10px] text-slate-500 flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
              <span>GSTIN: <b>23AAACM1234F1Z9</b></span>
              <span className="text-emerald-600 font-bold">Rule 46 Compliant ✓</span>
            </div>
          </div>

          {/* Right: Party Ledger & Tax Split */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Wholesale Tax Summary
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-50 text-purple-700">
                  GST 18%
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal Amount</span>
                  <span className="font-mono text-slate-800 font-bold">₹64,500.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>CGST 9%</span>
                  <span className="font-mono text-purple-600 font-bold">₹5,805.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>SGST 9%</span>
                  <span className="font-mono text-purple-600 font-bold">₹5,805.00</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Invoice Total</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹76,110.00</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-purple-700 bg-purple-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>INV-B2B-104.pdf (WhatsApp Delivered)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Customer Ledger Debited</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 11. SERVICE & REPAIR (Services + Spare Parts, SAC 9987, Start/Due Dates)
  if (id === "service") {
    return (
      <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
          {/* Left: Service & Spare Parts Lines */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-cyan-600" />
                  Service &amp; Maintenance Invoice
                </span>
                <span className="text-[10px] font-mono font-bold bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded">
                  JOB #SRV-2026
                </span>
              </div>

              {/* Service Job Dates */}
              <div className="flex items-center justify-between bg-cyan-50/50 border border-cyan-100 rounded-lg p-2.5 mb-2 text-xs">
                <div>
                  <span className="text-[10px] text-cyan-600 font-bold block">CLIENT / COMMERCIAL SITE</span>
                  <span className="font-bold text-slate-800">Horizon Commercial Towers</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-cyan-600 font-bold block">SERVICE PERIOD</span>
                  <span className="font-mono text-slate-700 font-bold">25 Nov – 26 Nov</span>
                </div>
              </div>

              {/* Services & Spare Parts Combined Table */}
              <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
                <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                  <span className="col-span-6">Service / Spares Description</span>
                  <span className="col-span-3 text-center">Type</span>
                  <span className="col-span-3 text-right">Amount</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Chiller Plant Preventive Maint.</span>
                    <span className="col-span-3 text-center text-[10px] bg-cyan-50 text-cyan-700 font-mono rounded">SAC 9987</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹13,000</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">Technician Labor (4 Hours)</span>
                    <span className="col-span-3 text-center text-[10px] bg-cyan-50 text-cyan-700 font-mono rounded">Hourly</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹3,400</span>
                  </div>
                  <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                    <span className="col-span-6 font-semibold text-slate-900 truncate">R-410A Refrigerant (5 kg Cylinder)</span>
                    <span className="col-span-3 text-center text-[10px] bg-emerald-50 text-emerald-700 font-mono rounded">Product</span>
                    <span className="col-span-3 text-right font-mono font-bold text-slate-800">₹4,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service Tax & Statement */}
          <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Service Tax Summary
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700">
                  GST 18%
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Professional Services</span>
                  <span className="font-mono text-slate-800 font-bold">₹16,400.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Replaced Spare Parts</span>
                  <span className="font-mono text-slate-700 font-bold">₹4,200.00</span>
                </div>
                <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-100">
                  <span>Taxable Value</span>
                  <span className="font-mono text-slate-700">₹20,600.00</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>GST 18%</span>
                  <span className="font-mono text-cyan-700 font-bold">₹3,708.00</span>
                </div>

                <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Due</span>
                  <span className="font-mono text-sm font-black text-emerald-600">₹24,308.00</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-700 bg-cyan-50 rounded-lg px-2.5 py-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>SRV-INV-2026.pdf (Dynamic UPI QR)</span>
              </div>
            </div>

            <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Job Invoice Dispatched</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT / GENERAL (General Store Counter POS, Retail, All-in-One)
  return (
    <div className="p-3 sm:p-4 text-xs bg-slate-50/50">
      <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
        {/* Left: General Store Counter Sales Table */}
        <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-purple-600" />
                General Business Counter Billing
              </span>
              <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                POS #GEN-2026
              </span>
            </div>

            {/* Customer Header */}
            <div className="flex items-center justify-between bg-purple-50/50 border border-purple-100 rounded-lg p-2.5 mb-2 text-xs">
              <div>
                <span className="text-[10px] text-purple-600 font-bold block">CUSTOMER / PARTY</span>
                <span className="font-bold text-slate-800">Sharma General Store</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-purple-600 font-bold block">STATUS</span>
                <span className="font-mono font-bold text-emerald-600">✓ In-Stock Live Sync</span>
              </div>
            </div>

            {/* General Products & Services Table */}
            <div className="border border-slate-100 rounded-lg overflow-hidden text-[11px]">
              <div className="grid grid-cols-12 bg-slate-100/70 p-1.5 font-bold text-[10px] text-slate-500">
                <span className="col-span-6">Item / Service</span>
                <span className="col-span-2 text-center">Qty</span>
                <span className="col-span-4 text-right">Amount</span>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                  <span className="col-span-6 font-semibold text-slate-900 truncate">Wireless Barcode Scanner Gun</span>
                  <span className="col-span-2 text-center font-mono">2</span>
                  <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹3,700</span>
                </div>
                <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                  <span className="col-span-6 font-semibold text-slate-900 truncate">Thermal Paper Rolls (Box of 50)</span>
                  <span className="col-span-2 text-center font-mono">1</span>
                  <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹1,250</span>
                </div>
                <div className="grid grid-cols-12 p-1.5 items-center text-slate-700">
                  <span className="col-span-6 font-semibold text-slate-900 truncate">Software Setup &amp; Training</span>
                  <span className="col-span-2 text-center font-mono">1</span>
                  <span className="col-span-4 text-right font-mono font-bold text-slate-800">₹1,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tax Summary & Final Button */}
        <div className="border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Tax Summary
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-50 text-purple-700">
                GST 18%
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal Amount</span>
                <span className="font-mono text-slate-800 font-bold">₹6,450.00</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>CGST 9%</span>
                <span className="font-mono text-purple-600 font-bold">₹580.50</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>SGST 9%</span>
                <span className="font-mono text-purple-600 font-bold">₹580.50</span>
              </div>

              <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                <span>Total Bill Amount</span>
                <span className="font-mono text-sm font-black text-emerald-600">₹7,611.00</span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-purple-700 bg-purple-50 rounded-lg px-2.5 py-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>INV-GEN-2026.pdf (WhatsApp Delivered)</span>
            </div>
          </div>

          <button className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Invoice Generated &amp; Paid</span>
          </button>
        </div>
      </div>
    </div>
  );
}
