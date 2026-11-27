"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Asterisk 
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
  image: string;
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
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full mb-3">
            COMPLETE VERTICAL DIRECTORY
          </span>
          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Find Your Trade. Start Free.
          </ArcHeading>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every trade vertical comes with pre-configured GST/SAC rates, specialized entry forms, and hardware support ready on day one.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {[
            { id: "all", label: "All 12+ Verticals" },
            { id: "logistics", label: "Fleet & Transport" },
            { id: "production", label: "Manufacturing & Stone" },
            { id: "retail", label: "Retail & Kirana" },
            { id: "services", label: "Services & Food" },
          ].map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Light Mode Cards Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
  {filteredIndustries.map((item) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.id}
        href={`/industries/${item.id}`}
        className="group block"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-slate-200">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        {/* Title row */}
        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-[17px] font-medium leading-tight text-slate-900 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="mt-0.5 truncate font-mono text-xs uppercase tracking-wide text-slate-500">
              {item.tags}
            </p>
          </div>
        </div>

        {/* Resources row */}
        <div className="mt-5 flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200/70">
            <Asterisk className="h-4 w-4 text-violet-600" />
          </span>
          <span className="border-b border-slate-300 pb-0.5 font-mono text-[13px] uppercase tracking-wide text-slate-800 transition-colors group-hover:border-violet-500">
            <span className="text-violet-600">{item.badge}</span>{" "}
            {item.categoryLabel}
          </span>
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
              className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-xs transition-colors"
            >
              Explore General Suite
            </Link>
            <Link
              href="#inquiry"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-semibold transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
