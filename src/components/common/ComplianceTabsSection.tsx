"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";

export interface FormFieldData {
  label: string;
  value: string;
  isHighlight?: boolean;
}

export interface ComplianceTabItem {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  formTitle: string;
  formFields: FormFieldData[];
  accentColor?: string;
  ctaText?: string;
  ctaHref?: string;
}

const DEFAULT_INVENTORY_COMPLIANCE_TABS: ComplianceTabItem[] = [
  {
    id: "gstin",
    label: "GSTIN",
    badge: "CENTRAL DIRECTORY",
    title: "Save & Validate GSTINs",
    description:
      "Keep a central record of verified GSTINs for customers, godowns, and suppliers to eliminate repetitive manual entry and prevent tax filing errors.",
    bullets: [
      "Save and auto-verify GSTIN of customers, branches, and vendors",
      "GSTIN auto-populates on invoices, bills, and stock transfer documents",
      "Seamless synchronization across e-invoices, e-way bills, and purchase orders",
    ],
    formTitle: "Party Tax Profile",
    formFields: [
      { label: "GST Treatment", value: "Registered Regular", isHighlight: true },
      { label: "GST Identification Number", value: "23ABCDE1234F1Z5", isHighlight: true },
      { label: "Place of Supply", value: "Madhya Pradesh (23)" },
      { label: "Tax Preference", value: "Taxable Goods" },
      { label: "Currency", value: "INR - Indian Rupee" },
      { label: "Payment Terms", value: "Due on Receipt" },
    ],
    accentColor: "from-purple-600 to-indigo-600",
    ctaText: "Manage GSTIN Profiles",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "hsn",
    label: "HSN/SAC CODES",
    badge: "TARIFF DIRECTORY",
    title: "Item-Wise HSN & SAC Management",
    description:
      "Map official 4, 6, or 8-digit HSN and SAC codes directly to your inventory SKUs to ensure 100% tax slab accuracy on every stock movement.",
    bullets: [
      "Search across 12,000+ official GST tariff codes with smart auto-suggest",
      "Assign correct GST rate slabs (0%, 5%, 12%, 18%, 28%) to catalog items",
      "Auto-detects tax implications for interstate stock dispatches and job work",
    ],
    formTitle: "Inventory Item HSN",
    formFields: [
      { label: "Item Name", value: "Commercial LED Display 55\"", isHighlight: true },
      { label: "HSN Code", value: "8528 • Monitors & Projectors", isHighlight: true },
      { label: "Tax Rate", value: "18% (CGST 9% + SGST 9%)" },
      { label: "Unit of Measurement", value: "PCS - Pieces" },
      { label: "Reverse Charge (RCM)", value: "Not Applicable" },
      { label: "ITC Eligibility", value: "Eligible for Input Tax Credit" },
    ],
    accentColor: "from-emerald-600 to-teal-600",
    ctaText: "Search HSN Directory",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "invoices",
    label: "INVOICES",
    badge: "STATUTORY COMPLIANCE",
    title: "GST-Compliant Invoices & Bills",
    description:
      "Generate professional, tax-ready invoices compliant with all Rule 46 requirements. Print in standard A4 or 3-inch thermal formats in seconds.",
    bullets: [
      "Auto-computes CGST, SGST, or IGST based on destination warehouse",
      "Sequential invoice numbering with custom financial year serial prefixes",
      "QR code and digital signature integrated for instant B2B tax verification",
    ],
    formTitle: "Tax Invoice #INV-2041",
    formFields: [
      { label: "Invoice Number", value: "VIN/2026/0842", isHighlight: true },
      { label: "Place of Supply", value: "Intra-State Supply (Code 23)" },
      { label: "Item Subtotal", value: "₹24,500.00" },
      { label: "CGST (9%)", value: "₹2,205.00", isHighlight: true },
      { label: "SGST (9%)", value: "₹2,205.00", isHighlight: true },
      { label: "Total Amount Due", value: "₹28,910.00" },
    ],
    accentColor: "from-blue-600 to-indigo-600",
    ctaText: "Explore Invoicing",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "taxes",
    label: "TAXES",
    badge: "AUTOMATED CALCULATOR",
    title: "Automated Tax Calculation & Slabs",
    description:
      "Never worry about manual tax math. Vinimay checks party state codes and automatically applies the right combination of CGST, SGST, or IGST.",
    bullets: [
      "Automatic tax split between source godown and buyer delivery location",
      "Handles multiple tax slabs, compensation cess, and zero-rated supplies",
      "Generates real-time tax liability and Input Tax Credit (ITC) ledgers",
    ],
    formTitle: "Tax Calculation Engine",
    formFields: [
      { label: "Supply Nature", value: "Inter-State Sale", isHighlight: true },
      { label: "Origin Location", value: "Madhya Pradesh (23)" },
      { label: "Destination Location", value: "Maharashtra (27)" },
      { label: "Applicable Tax", value: "IGST (18%)", isHighlight: true },
      { label: "Tax Computed", value: "₹4,410.00" },
      { label: "Tax Liability Status", value: "GSTR-1 Table 4 Auto-Mapped" },
    ],
    accentColor: "from-amber-600 to-orange-600",
    ctaText: "View Tax Engine",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "eway",
    label: "E-WAY BILLS",
    badge: "LOGISTICS COMPLIANCE",
    title: "Instant E-Way Bill Generation",
    description:
      "Generate and track official e-way bills for stock transfers, branch dispatches, and client deliveries exceeding ₹50,000 without manual portal logins.",
    bullets: [
      "Direct vehicle number, transporter ID, and route distance calculation",
      "Generates Part-A and Part-B with valid QR codes ready for road inspection",
      "Automatic validity expiry tracking with reminder alerts for long hauls",
    ],
    formTitle: "E-Way Bill #3810-4491-0021",
    formFields: [
      { label: "E-Way Bill Number", value: "3810-4491-0021", isHighlight: true },
      { label: "Consignor", value: "Central Godown (Bhopal)" },
      { label: "Consignee", value: "Branch Hub (Indore)" },
      { label: "Vehicle Number", value: "MP-04-HE-8821", isHighlight: true },
      { label: "Route Distance", value: "194 km (Valid 24h)" },
      { label: "E-Way Bill Status", value: "Active • Generated" },
    ],
    accentColor: "from-cyan-600 to-blue-600",
    ctaText: "Generate E-Way Bill",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "challan",
    label: "DELIVERY CHALLAN",
    badge: "INTERNAL MOVEMENTS",
    title: "Stock & Job Work Delivery Challans",
    description:
      "Move inventory between godowns, job workers, or goods on approval legally under Rule 55 without triggering premature tax liability.",
    bullets: [
      "Generate official Rule 55 delivery challans with serial tracking",
      "Convert delivery challans into finalized tax invoices with a single tap",
      "Track pending returnable stock with third-party job work processors",
    ],
    formTitle: "Delivery Challan #DC-804",
    formFields: [
      { label: "Challan Serial No.", value: "DC-2026-0804", isHighlight: true },
      { label: "Movement Purpose", value: "Stock Transfer Between Godowns" },
      { label: "From Location", value: "Primary Godown #01" },
      { label: "To Location", value: "Packaging & Job Work Unit" },
      { label: "Total Dispatched", value: "240 Units", isHighlight: true },
      { label: "Challan Status", value: "Dispatched • Non-Taxable Move" },
    ],
    accentColor: "from-rose-600 to-red-600",
    ctaText: "Issue Delivery Challan",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export interface ComplianceTabsSectionProps {
  title?: string;
  tagline?: string;
  tabs?: ComplianceTabItem[];
}

export default function ComplianceTabsSection({
  title = "What makes Vinimay Inventory GST Compliant",
  tagline = "100% STATUTORY GST COMPLIANCE",
  tabs = DEFAULT_INVENTORY_COMPLIANCE_TABS,
}: ComplianceTabsSectionProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = tabs[activeTabIdx] || tabs[0];

  const contentRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Update sliding indicator position
  useEffect(() => {
    const activeEl = tabRefs.current[activeTabIdx];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTabIdx]);

  // Recalculate indicator position on resize
  useEffect(() => {
    const handleResize = () => {
      const activeEl = tabRefs.current[activeTabIdx];
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTabIdx]);

  // Smooth cross-fade animation when active tab changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const content = contentRef.current;
    if (!content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.fromTo(
      content,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [activeTabIdx]);

  return (
    <section className="w-full py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#877EFC]" />
            <span>{tagline}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight ">
            {title}
          </h2>
        </div>

        {/* Tab Navigation Bar - Styled matching reference design with vertical dividers & sliding indicator */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="relative flex items-stretch justify-start md:justify-center bg-white rounded-xl border border-slate-200 shadow-xs divide-x divide-slate-200 w-max md:w-full mx-auto">
              {tabs.map((tab, idx) => {
                const isActive = activeTabIdx === idx;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className={`relative shrink-0 flex-1 px-4 sm:px-6 py-4 text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer select-none text-center ${
                      isActive
                        ? "text-slate-900 font-extrabold bg-slate-50/40"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50/20"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              {/* Smooth Animated Sliding Indicator Line at the bottom */}
              <div
                className="absolute bottom-0 h-1 bg-[#877EFC] transition-all duration-300 ease-out z-10 pointer-events-none rounded-full"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Tab Content Display Area with Smooth Cross-Fade Animation */}
        <div ref={contentRef} className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: UI Form Card with Decorative Background Element */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              {/* Decorative Pastel Background Blob with Polka Dots (matching reference) */}
              <div className="absolute -top-4 -left-4 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-rose-100/70 -z-0 pointer-events-none" />
              <div
                className="absolute -top-1 left-8 w-24 h-16 pointer-events-none opacity-50 -z-0"
                style={{
                  backgroundImage:
                    "radial-gradient(#f43f5e 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {/* Elevated Floating Form Card (exact replica of the reference) */}
              <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-7 relative z-10 space-y-3.5">
                {/* Form Fields List */}
                <div className="space-y-3 sm:space-y-3.5">
                  {activeTab.formFields.map((field, fIdx) => (
                    <div
                      key={fIdx}
                      className="grid grid-cols-12 gap-3 items-center"
                    >
                      <label
                        className={`col-span-5 text-[11px] sm:text-xs font-medium leading-snug ${
                          field.label.includes("GST Identification") ||
                          field.label.includes("HSN Code") ||
                          field.label.includes("CGST") ||
                          field.label.includes("Applicable Tax") ||
                          field.label.includes("E-Way Bill Number") ||
                          field.label.includes("Total Dispatched")
                            ? "text-rose-500 font-semibold"
                            : "text-slate-600"
                        }`}
                      >
                        {field.label}
                      </label>
                      <div className="col-span-7">
                        <div
                          className={`w-full px-3 py-1.5 sm:py-2 rounded-md text-[11px] sm:text-xs font-normal border truncate ${
                            fIdx === 0
                              ? "border-[#877EFC] ring-1 ring-[#877EFC]/20 text-slate-800 bg-white"
                              : field.isHighlight
                              ? "bg-purple-50/60 border-purple-200 text-purple-900 font-medium font-mono"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                        >
                          {field.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Title, Explanations & Bullet Points */}
            <div className="lg:col-span-6 space-y-5 lg:pl-4">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  {activeTab.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeTab.description}
                </p>
              </div>

              {/* Bullet Points with Checkmarks (matching reference) */}
              <ul className="space-y-3 pt-1">
                {activeTab.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-amber-500/80 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="pt-3">
                <a
                  href={activeTab.ctaHref || "https://vinimay.sharda.co.in/client-signup"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#877EFC] hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 group cursor-pointer"
                >
                  <OsmoRoll>{activeTab.ctaText || "Explore Feature"}</OsmoRoll>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
