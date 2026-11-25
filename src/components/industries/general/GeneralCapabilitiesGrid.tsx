import React from "react";
import ArcHeading from "@/components/common/ArcHeading";

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    title: "Product Management",
    description:
      "Organize your entire product catalog with custom HSN codes, flexible  pricing tiers, and barcode labels. Easily manage variants, bulk price updates, and unit conversions in one place.",
  },
  {
    number: "02",
    title: "Service Management",
    description:
      "Create service packages, hourly billing rates, and maintenance contracts. Track job completion status, assign technicians, and bill professional services alongside physical merchandise seamlessly.",
  },
  {
    number: "03",
    title: "Inventory Tracking",
    description:
      "Monitor stock levels in real time across multiple godowns and store shelves. Set automated low-stock warnings, track batch expiry dates, and eliminate inventory discrepancies with fast barcode audit tools.",
  },
  {
    number: "04",
    title: "GST Billing",
    description:
      "Generate fully compliant multi-rate GST invoices in seconds with automatic CGST, SGST, and IGST calculations. Dispatch tax bills straight to your customer's WhatsApp ",
  },
  {
    number: "05",
    title: "Customer & Vendors",
    description:
      "Maintain a unified ledger for both buyers and suppliers. Track party-wise balances, set customized credit limits, record advance payouts, and send automated payment reminder statements.",
  },
  {
    number: "06",
    title: "Reports",
    description:
      "Get actionable business intelligence with instant profit & loss statements, sales daybooks, stock movement summaries, and GSTR-1 ready reports ready for audit at any time.",
  },
];

export default function GeneralCapabilitiesGrid() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-white text-slate-900 border-t border-slate-200/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Big Centered Headline / Description */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 md:mb-24">
          <ArcHeading
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.28] sm:leading-[1.24]"
          >
            Design for your Business growth from Products to GST invoices, Vinimay gives business a simple and powerful way to manage billing and stock.
          </ArcHeading>
        </div>

        {/* 2-Column Grid with Horizontal Dividers (matching reference layout in Light Mode) */}
        <div className="border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {CAPABILITIES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.number}
                  className={`py-8 sm:py-10 md:py-12 border-b border-slate-200/80 ${
                    isEven
                      ? "md:pr-8 lg:pr-12 md:border-r md:border-slate-200/80"
                      : "md:pl-8 lg:pl-12"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Step Number */}
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-400 select-none pt-1 shrink-0 w-6">
                      {item.number}
                    </span>

                    {/* Text Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2 sm:mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
