import React from "react";
import ArcHeading from "@/components/common/ArcHeading";
import {
  Package,
  Boxes,
  Receipt,
  Users,
  BarChart3,
  QrCode,
  TrendingUp,
} from "lucide-react";

/* =========================================================================
   CHANGE ALL TEXT & DATA HERE IN ONE PLACE
   ========================================================================= */

export const HEADER_CONTENT = {
  titlePrefix: "How it works",
  handwrittenScript: "in 5 steps",
  titleSuffix: "",
  subtitle:
    "Everything you need to set up, run, and scale your business with zero hassle.",
};

export interface UpdateItem {
  id: string;
  badgeTime: string;
  badgeTag: string;
  title: string;
  category: string;
  previewVariant: "catalog" | "inventory" | "billing" | "parties" | "reports";
}

export const UPDATE_ITEMS: UpdateItem[] = [
  {
    id: "Step-1",
    badgeTime: "Step 1",
    badgeTag: "SETUP & CATALOG",
    title: "Add Product and Services",
    category: "PRODUCTS • SERVICES • HSN CODES • BARCODES",
    previewVariant: "catalog",
  },
  {
    id: "Step-2",
    badgeTime: "Step 2",
    badgeTag: "PROCUREMENT & INVENTORY",
    title: "Purchase and Stock management",
    category: "PURCHASE ORDERS • WAREHOUSES • LOW-STOCK ALERTS",
    previewVariant: "inventory",
  },
  {
    id: "Step-3",
    badgeTime: "Step 3",
    badgeTag: "BILLING & POS",
    title: "Sales and GST/VAT Invoicing",
    category: "RETAIL POS • TAX INVOICES • WHATSAPP UPI QR",
    previewVariant: "billing",
  },
  {
    id: "Step-4",
    badgeTime: "Step 4",
    badgeTag: "PARTIES & ACCOUNTS",
    title: "Customer and Vendor Management",
    category: "PARTY KHATA • RUNNING BALANCES • PAYMENT REMINDERS",
    previewVariant: "parties",
  },
  {
    id: "Step-5",
    badgeTime: "Step 5",
    badgeTag: "FINANCIAL INSIGHTS",
    title: "Reports and Insights",
    category: "PROFIT & LOSS • DAYBOOK • GSTR AUDIT REPORTS",
    previewVariant: "reports",
  },
];

/* =========================================================================
   PREVIEW COMPONENTS
   ========================================================================= */

function PreviewBox({ variant }: { variant: UpdateItem["previewVariant"] }) {
  // Step 1: Catalog & Products
  if (variant === "catalog") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-purple-500/40 transition-colors">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-white">Item Master</span>
          </div>
          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono font-medium">
            HSN 8471
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[11px]">
          <div>
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>Barcode Scanner Gun</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 rounded font-mono">18% GST</span>
            </div>
            <div className="text-[9px] text-white/50 font-mono mt-0.5">SKU: PROD-1021 • Unit: Pcs</div>
          </div>
          <div className="text-right font-mono">
            <div className="text-white font-bold text-xs">₹1,850</div>
            <div className="text-[9px] text-emerald-400">In Stock ✓</div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Stock & Inventory
  if (variant === "inventory") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
        <div className="absolute -left-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Boxes className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">Stock Movement</span>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-medium">
            LIVE SYNC
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[10px]">
          <div>
            <div className="text-white font-medium">Main Godown (North)</div>
            <div className="text-[9px] text-white/50">Auto low-stock guard: Min 50</div>
          </div>
          <div className="text-right font-mono">
            <div className="text-emerald-300 font-bold text-xs">+340 Units</div>
            <div className="text-[9px] text-white/60">1,420 On Hand</div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Sales & GST Billing
  if (variant === "billing") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-indigo-500/40 transition-colors">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Receipt className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-semibold text-white">Tax Invoice INV-2041</span>
          </div>
          <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono font-medium">
            PAID
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[11px]">
          <div>
            <div className="font-bold text-white">₹28,650 • Multi-Tax Split</div>
            <div className="text-[9px] text-white/50 flex items-center gap-1 mt-0.5">
              <span>WhatsApp PDF Sent</span>
              <span className="text-emerald-400">✓</span>
            </div>
          </div>
          <QrCode className="w-6 h-6 text-indigo-300 shrink-0" />
        </div>
      </div>
    );
  }

  // Step 4: Customer & Vendor Ledgers
  if (variant === "parties") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/40 transition-colors">
        <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">Customer Khata</span>
          </div>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-medium">
            ACTIVE
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[10px]">
          <div>
            <div className="text-white font-medium">Ramesh General Store</div>
            <div className="text-[9px] text-white/50">Payment Due in 8 Days</div>
          </div>
          <div className="text-right font-mono">
            <div className="text-amber-300 font-bold text-xs">₹8,450 Due</div>
            <div className="text-[9px] text-emerald-400">1-Click Remind ✓</div>
          </div>
        </div>
      </div>
    );
  }

  // Step 5: Reports & Insights
  return (
    <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-teal-500/40 transition-colors">
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />

      <div className="flex items-center justify-between text-[11px] text-white/70">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
          <span className="font-semibold text-white">Real-Time Reports</span>
        </div>
        <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono font-medium">
          GSTR-1 READY
        </span>
      </div>

      <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[10px]">
        <div>
          <div className="text-white font-medium flex items-center gap-1">
            <span>Sales Daybook & P&L</span>
            <TrendingUp className="w-3 h-3 text-emerald-400" />
          </div>
          <div className="text-[9px] text-white/50">Audit Trial Balance: 100% Match</div>
        </div>
        <div className="text-right font-mono">
          <div className="text-emerald-400 font-bold text-xs">+32.4% Net</div>
          <div className="text-[9px] text-teal-300">JSON Export ✓</div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN SECTION COMPONENT (LIGHT MODE)
   ========================================================================= */

export default function GeneralWorkflowSteps() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-[#fafafa] text-slate-900 border-t border-slate-200/80 overflow-hidden">
      {/* Background Arc Circle (like the reference screenshot) */}
      <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[980px] h-[980px] rounded-full border border-slate-200/60 pointer-events-none opacity-60" />
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[720px] h-[720px] rounded-full border border-dashed border-slate-300/40 pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
          >
            {`${HEADER_CONTENT.titlePrefix} ${HEADER_CONTENT.handwrittenScript} ${HEADER_CONTENT.titleSuffix}`.trim()}
          </ArcHeading>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mx-auto">
            {HEADER_CONTENT.subtitle}
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden divide-y divide-slate-200/80">
          {UPDATE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-slate-50/60 transition-colors"
            >
              {/* Left Column: Metadata, Title, Category */}
              <div className="flex-1 min-w-0">
                {/* Pill Badges */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                    {item.badgeTime}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                    {item.badgeTag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#6B62D2] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Category Subtitle */}
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  {item.category}
                </p>
              </div>

              {/* Right Column: Visual Preview Box */}
              <div className="w-full md:w-[280px] lg:w-[320px] h-[135px] shrink-0">
                <PreviewBox variant={item.previewVariant} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
