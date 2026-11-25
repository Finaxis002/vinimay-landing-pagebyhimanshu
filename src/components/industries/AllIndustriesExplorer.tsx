"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArcHeading from "@/components/common/ArcHeading";
import {
  Truck,
  Layers,
  Package,
  Plane,
  Factory,
  Building2,
  UtensilsCrossed,
  Dumbbell,
  ShoppingBasket,
  ArrowLeftRight,
  Wrench,
  Store,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface IndustryCardItem {
  id: string;
  title: string;
  category: "logistics" | "retail" | "production" | "services";
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  tags: string;
  description: string;
  preview: React.ReactNode;
}

const ALL_INDUSTRIES: IndustryCardItem[] = [
  {
    id: "transportation",
    title: "Transportation & Freight",
    category: "logistics",
    categoryLabel: "Logistics & Fleet",
    badge: "TRIP SHEETS",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: Truck,
    accentColor: "indigo",
    tags: "TRIP SHEETS • DIESEL • FASTAG • RCM 5%",
    description:
      "Manage trip sheets, highway routes, vehicle diesel logs, driver allowances, and statutory SAC 996511 RCM freight invoicing.",
    preview: (
      <div className="w-full h-full bg-slate-900 rounded-xl p-3.5 flex flex-col justify-between text-white border border-white/10 relative overflow-hidden group-hover:border-indigo-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-indigo-300 font-bold flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-indigo-400" />
            TRIP #TS-8842
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-mono font-semibold">
            ON ROUTE
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
          <div className="text-[10px] text-white/50 font-mono">Bhiwandi (MH) ➔ Sanjay Gandhi TN (Delhi)</div>
          <div className="flex justify-between items-center mt-1 text-xs font-semibold">
            <span className="text-white">Trailer MH-04-AB-9821</span>
            <span className="text-indigo-300 font-mono">22 MT Coils</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Diesel: ₹14,200</span>
          <span className="text-emerald-400">RCM Inv: ₹68,000</span>
        </div>
      </div>
    ),
  },

  {
    id: "marbles",
    title: "Marble, Granite & Tiles",
    category: "production",
    categoryLabel: "Materials & Stones",
    badge: "SQ. FT. CALC",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    icon: Layers,
    accentColor: "teal",
    tags: "SLAB SIZES • SQ. FT. CALC • TRUCK NO",
    description:
      "Multi-row slab size entries (Length × Width in inches or feet) with instant square footage calculation, transport details, and GST.",
    preview: (
      <div className="w-full h-full bg-[#121a18] rounded-xl p-3.5 flex flex-col justify-between text-white border border-teal-500/20 relative overflow-hidden group-hover:border-teal-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-teal-300 font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            SLAB DIMENSIONS
          </span>
          <span className="bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded text-[10px] font-mono">
            78.00 SQ. FT.
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px] space-y-1 font-mono">
          <div className="flex justify-between text-white/90">
            <span>Makrana White (96&quot; × 48&quot;)</span>
            <span className="text-teal-300 font-bold">32.00 sqft</span>
          </div>
          <div className="flex justify-between text-white/70">
            <span>Black Galaxy (120&quot; × 36&quot;)</span>
            <span className="text-teal-300">30.00 sqft</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Truck: RJ-14-GA-8821</span>
          <span className="text-teal-400 font-bold">Total: ₹22,184</span>
        </div>
      </div>
    ),
  },

  {
    id: "courier",
    title: "Courier & Parcel Delivery",
    category: "logistics",
    categoryLabel: "Logistics & Fleet",
    badge: "VOLUMETRIC WT",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Package,
    accentColor: "blue",
    tags: "SENDER & RECEIVER • L × W × H • SAC 996812",
    description:
      "Automated volumetric weight calculation (L × W × H cm), complete sender & receiver profiles, docket charges, and WhatsApp billing.",
    preview: (
      <div className="w-full h-full bg-[#101726] rounded-xl p-3.5 flex flex-col justify-between text-white border border-blue-500/20 relative overflow-hidden group-hover:border-blue-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-blue-300 font-bold flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-blue-400" />
            PARCEL DOCKET #CO-891
          </span>
          <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-[10px] font-mono">
            SAC 996812
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px]">
          <div className="flex justify-between text-white/70 font-mono">
            <span>Box: 30 × 20 × 15 cm</span>
            <span className="text-blue-300 font-bold">1.80 kg Volumetric</span>
          </div>
          <div className="text-[9px] text-white/50 mt-1 truncate">
            From: Rohit (Mumbai) ➔ To: Amit (Bengaluru)
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Rate: ₹90/kg</span>
          <span className="text-emerald-400">WhatsApp PDF Sent ✓</span>
        </div>
      </div>
    ),
  },

  {
    id: "travels",
    title: "Tours & Travel Operators",
    category: "logistics",
    categoryLabel: "Logistics & Fleet",
    badge: "TOUR PACKAGES",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    icon: Plane,
    accentColor: "purple",
    tags: "ODOMETER • FIXED + KM • TOLLS • SAC 9985",
    description:
      "Tour itineraries, vehicle booking sheets, start/end odometer readings, extra km/hr charges, driver allowances, and 5% tour operator GST.",
    preview: (
      <div className="w-full h-full bg-[#161224] rounded-xl p-3.5 flex flex-col justify-between text-white border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-purple-300 font-bold flex items-center gap-1.5">
            <Plane className="w-3.5 h-3.5 text-purple-400" />
            BOOKING #TRV-4402
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-[10px] font-mono">
            GST 5%
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px]">
          <div className="text-white font-semibold">Golden Triangle (3 Days)</div>
          <div className="flex justify-between text-white/60 font-mono text-[9px] mt-0.5">
            <span>Innova Crysta DL-01</span>
            <span className="text-purple-300">850 km @ ₹14/km</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Driver DA: ₹1,500</span>
          <span className="text-emerald-400">Total: ₹16,590</span>
        </div>
      </div>
    ),
  },

  {
    id: "manufacturing",
    title: "Manufacturing & Assembly",
    category: "production",
    categoryLabel: "Materials & Stones",
    badge: "BOM & PRODUCTION",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    icon: Factory,
    accentColor: "rose",
    tags: "BILL OF MATERIALS • BATCH RUNS • COSTING",
    description:
      "Create finished products via Bill of Materials (BOM), automate raw materials batch deductions with shortage warnings, and track true landed unit costs.",
    preview: (
      <div className="w-full h-full bg-[#1d1215] rounded-xl p-3.5 flex flex-col justify-between text-white border border-rose-500/20 relative overflow-hidden group-hover:border-rose-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-rose-300 font-bold flex items-center gap-1.5">
            <Factory className="w-3.5 h-3.5 text-rose-400" />
            PRODUCTION #WO-991
          </span>
          <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded text-[10px] font-mono">
            PRODUCED ✓
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px] font-mono">
          <div className="text-white font-semibold truncate">Water Pump 5HP (1 Unit)</div>
          <div className="text-[9px] text-rose-300/80 mt-0.5">
            Motor + Casing + Impeller + Fasteners
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Unit Landed: ₹8,350</span>
          <span className="text-emerald-400">Sale: ₹12,500</span>
        </div>
      </div>
    ),
  },

  {
    id: "properties",
    title: "Real Estate & Builders",
    category: "services",
    categoryLabel: "Hospitality & Services",
    badge: "RERA COMPLIANT",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    icon: Building2,
    accentColor: "amber",
    tags: "TOWERS & FLATS • CARPET AREA • RERA 5%",
    description:
      "Manage residential & commercial projects, towers, floor units, carpet area rate/sqft, statutory RERA registration numbers, and 5% construction GST.",
    preview: (
      <div className="w-full h-full bg-[#1c1810] rounded-xl p-3.5 flex flex-col justify-between text-white border border-amber-500/20 relative overflow-hidden group-hover:border-amber-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-amber-300 font-bold flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            UNIT #1402 (3 BHK)
          </span>
          <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-mono">
            RERA READY
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px]">
          <div className="text-white font-semibold truncate">Green Meadows (Tower B, Fl 14)</div>
          <div className="flex justify-between text-amber-300/80 font-mono text-[9px] mt-0.5">
            <span>Carpet: 1,450 sq. ft.</span>
            <span>@ ₹6,200/sqft</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>GST: 5% Construction</span>
          <span className="text-emerald-400">₹1,00,17,000</span>
        </div>
      </div>
    ),
  },

  {
    id: "restaurant",
    title: "Restaurant & Cafe POS",
    category: "services",
    categoryLabel: "Hospitality & Services",
    badge: "KOT & TABLE POS",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    icon: UtensilsCrossed,
    accentColor: "orange",
    tags: "TABLE STATUS • KOT TICKETS • RECIPES",
    description:
      "Live table grid status, wireless kitchen order tickets (KOT), real-time recipe ingredient inventory deductions, and 5% restaurant GST billing.",
    preview: (
      <div className="w-full h-full bg-[#1c140e] rounded-xl p-3.5 flex flex-col justify-between text-white border border-orange-500/20 relative overflow-hidden group-hover:border-orange-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-orange-300 font-bold flex items-center gap-1.5">
            <UtensilsCrossed className="w-3.5 h-3.5 text-orange-400" />
            TABLE #07 (AC DINING)
          </span>
          <span className="bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded text-[10px] font-mono">
            KOT ACTIVE
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px] font-mono">
          <div className="flex justify-between text-white/90">
            <span>Butter Chicken × 2</span>
            <span className="text-orange-300">₹760</span>
          </div>
          <div className="flex justify-between text-white/70 text-[9px]">
            <span>Garlic Naan × 6</span>
            <span>₹360</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Recipe stock synced ✓</span>
          <span className="text-emerald-400">Total: ₹1,806</span>
        </div>
      </div>
    ),
  },

  {
    id: "gyms",
    title: "Gyms & Fitness Centers",
    category: "services",
    categoryLabel: "Hospitality & Services",
    badge: "MEMBER CODE",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    icon: Dumbbell,
    accentColor: "teal",
    tags: "SHORT CODE CHECK-IN • MEMBER ID • EXPIRY",
    description:
      "Rapid 4-digit short member code punch terminal, automated membership expiry alerts, trainer session payouts, and WhatsApp renewals.",
    preview: (
      <div className="w-full h-full bg-[#0e1917] rounded-xl p-3.5 flex flex-col justify-between text-white border border-teal-500/20 relative overflow-hidden group-hover:border-teal-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-teal-300 font-bold flex items-center gap-1.5">
            <Dumbbell className="w-3.5 h-3.5 text-teal-400" />
            MEMBER CODE #108
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-mono">
            CHECKED IN ✓
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px]">
          <div className="text-white font-semibold truncate">Vikram Malhotra (Annual Gold)</div>
          <div className="text-[9px] text-teal-300 font-mono mt-0.5">
            Terminal: Front Desk Punch • 0.5s Fast Log
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Check-in: 06:14 AM</span>
          <span className="text-emerald-400">Valid: 184 Days</span>
        </div>
      </div>
    ),
  },

  {
    id: "kirana",
    title: "Kirana & Grocery Retail",
    category: "retail",
    categoryLabel: "Retail & Commerce",
    badge: "0.3s BARCODE POS",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: ShoppingBasket,
    accentColor: "emerald",
    tags: "BARCODE SCAN • UDHAAR KHATA • SPLIT PAY",
    description:
      "Lightning-speed 0.3s barcode gun checkout, customer Udhaar Khata ledger balance tracking, split payment (Cash + UPI QR), and thermal receipts.",
    preview: (
      <div className="w-full h-full bg-[#0d1a15] rounded-xl p-3.5 flex flex-col justify-between text-white border border-emerald-500/20 relative overflow-hidden group-hover:border-emerald-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-emerald-300 font-bold flex items-center gap-1.5">
            <ShoppingBasket className="w-3.5 h-3.5 text-emerald-400" />
            TERMINAL POS-01
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-mono">
            0.3s SCAN
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px] font-mono space-y-0.5">
          <div className="flex justify-between text-white">
            <span>Atta 10kg + Salt + Oil</span>
            <span className="text-emerald-300 font-bold">₹1,081</span>
          </div>
          <div className="text-[9px] text-white/50">
            Khata: Rajesh Bhai (Bal: ₹420)
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Split: Cash + UPI</span>
          <span className="text-emerald-400">Printed 80mm ✓</span>
        </div>
      </div>
    ),
  },

  {
    id: "trading",
    title: "Wholesale & B2B Trading",
    category: "retail",
    categoryLabel: "Retail & Commerce",
    badge: "B2B WHOLESALE",
    badgeColor: "bg-violet-100 text-violet-800 border-violet-200",
    icon: ArrowLeftRight,
    accentColor: "violet",
    tags: "CREDIT LIMIT • NET 30 • RULE 46 GST",
    description:
      "B2B sales invoices, customer credit term enforcement (Net 30/60), live ledger accounting, multi-slab wholesale pricing, and Rule 46 E-Invoice QR.",
    preview: (
      <div className="w-full h-full bg-[#151124] rounded-xl p-3.5 flex flex-col justify-between text-white border border-violet-500/20 relative overflow-hidden group-hover:border-violet-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-violet-300 font-bold flex items-center gap-1.5">
            <ArrowLeftRight className="w-3.5 h-3.5 text-violet-400" />
            INVOICE #INV-TRD-4091
          </span>
          <span className="bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded text-[10px] font-mono">
            NET 30
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px]">
          <div className="text-white font-semibold truncate">Agarwal Electricals Wholesale</div>
          <div className="flex justify-between text-violet-300 font-mono text-[9px] mt-0.5">
            <span>Wire Coils + LED Cartons</span>
            <span>Sub: ₹57,200</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Credit: ₹5,00,000 OK</span>
          <span className="text-emerald-400">Total: ₹67,496</span>
        </div>
      </div>
    ),
  },

  {
    id: "service",
    title: "Professional & Repair Services",
    category: "services",
    categoryLabel: "Hospitality & Services",
    badge: "JOB CARDS",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    icon: Wrench,
    accentColor: "cyan",
    tags: "SAC 9987 • SPARE PARTS • AMC BILLING",
    description:
      "Create job cards for maintenance & repair, bill labor hours under statutory SAC 9987 alongside spare parts (HSN), and handle annual AMC contracts.",
    preview: (
      <div className="w-full h-full bg-[#0d181d] rounded-xl p-3.5 flex flex-col justify-between text-white border border-cyan-500/20 relative overflow-hidden group-hover:border-cyan-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-cyan-300 font-bold flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            JOB CARD #SRV-1082
          </span>
          <span className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded text-[10px] font-mono">
            SAC 9987
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px]">
          <div className="text-white font-semibold truncate">Modern Diagnostics Lab</div>
          <div className="flex justify-between text-cyan-300 font-mono text-[9px] mt-0.5">
            <span>AMC Calibration + Valve Kit</span>
            <span>₹16,500</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Spares + Labor combined</span>
          <span className="text-emerald-400">Total: ₹19,470</span>
        </div>
      </div>
    ),
  },

  {
    id: "general",
    title: "General Business & Retail",
    category: "retail",
    categoryLabel: "Retail & Commerce",
    badge: "ALL-IN-ONE",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    icon: Store,
    accentColor: "purple",
    tags: "RETAIL POS • INVENTORY • GST INVOICING",
    description:
      "All-in-one counter sales, product & service catalog, inventory tracking, customer ledgers, and zero-setup GST/non-GST billing for any business.",
    preview: (
      <div className="w-full h-full bg-[#181224] rounded-xl p-3.5 flex flex-col justify-between text-white border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/50 transition-colors">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono text-purple-300 font-bold flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5 text-purple-400" />
            COUNTER SALE #GEN-2026
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-[10px] font-mono">
            ACTIVE
          </span>
        </div>
        <div className="bg-white/5 rounded-lg p-2 border border-white/5 text-[10px] font-mono">
          <div className="text-white font-semibold">Sharma General Store</div>
          <div className="flex justify-between text-purple-300 text-[9px] mt-0.5">
            <span>Barcode Gun + Paper Rolls</span>
            <span>₹6,450</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10 font-mono">
          <span>Live Stock Synced ✓</span>
          <span className="text-emerald-400">Paid: ₹7,611</span>
        </div>
      </div>
    ),
  },
];

type CategoryFilter = "all" | "logistics" | "retail" | "production" | "services";

export default function AllIndustriesExplorer() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredIndustries =
    activeCategory === "all"
      ? ALL_INDUSTRIES
      : ALL_INDUSTRIES.filter((item) => item.category === activeCategory);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-200/70">
      {/* Background Arc Circles (Matching General Style) */}
      <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[980px] h-[980px] rounded-full border border-slate-200/50 pointer-events-none opacity-50" />
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[720px] h-[720px] rounded-full border border-dashed border-slate-300/30 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header with ArcHeading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>12+ Specialized Business Workflows</span>
          </div>

          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
          >
            Choose your industry to see tailored workflows
          </ArcHeading>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Every business has distinct operational rhythms. Select your sector below to discover purpose-built forms, automated tax rates, and live hardware integrations.
          </p>

          {/* Category Filter Pills (Light Mode) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-[#6B62D2] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              All Industries ({ALL_INDUSTRIES.length})
            </button>

            <button
              onClick={() => setActiveCategory("logistics")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "logistics"
                  ? "bg-[#6B62D2] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              Logistics &amp; Transport (3)
            </button>

            <button
              onClick={() => setActiveCategory("retail")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "retail"
                  ? "bg-[#6B62D2] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              Retail &amp; Commerce (3)
            </button>

            <button
              onClick={() => setActiveCategory("production")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "production"
                  ? "bg-[#6B62D2] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              Production &amp; Stones (2)
            </button>

            <button
              onClick={() => setActiveCategory("services")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "services"
                  ? "bg-[#6B62D2] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              Hospitality &amp; Services (4)
            </button>
          </div>
        </div>

        {/* 3-Column Light Mode Cards Grid (Matching Image 2 Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredIndustries.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={`/industries/${item.id}`}
                className="group flex flex-col bg-white border border-slate-200/90 hover:border-purple-300 rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Visual Container (Top) */}
                <div className="h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-5 shrink-0">
                  {item.preview}
                </div>

                {/* Content Block (Bottom) */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono">
                        {item.categoryLabel}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Title with Hover Icon */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#6B62D2] transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-purple-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-purple-200 transition-colors">
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#6B62D2] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <div className="text-[11px] font-mono font-semibold text-[#6B62D2] mb-3 uppercase tracking-wider">
                      {item.tags}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      100% Free Forever
                    </span>
                    <span className="text-[#6B62D2] group-hover:underline flex items-center gap-1">
                      Explore solution →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Don&apos;t see your exact business type listed?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-6">
            Vinimay&apos;s modular setup allows you to combine product tracking, services, custom tax fields, and barcode scanners for any custom business workflow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/industries/general"
              className="px-5 py-2.5 rounded-xl bg-[#6B62D2] hover:bg-[#5b52c0] text-white text-sm font-bold shadow-xs transition-colors"
            >
              Explore General Suite
            </Link>
            <Link
              href="#inquiry"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-semibold transition-colors"
            >
              Request Custom Vertical
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
