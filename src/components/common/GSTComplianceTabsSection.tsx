"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";

export interface GSTTabItem {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

const GST_TABS_DATA: GSTTabItem[] = [
  {
    id: "custom",
    label: "Custom Invoice",
    badge: "BESPOKE BRANDING",
    title: "Tailored Invoice Templates with Your Custom Brand Identity",
    description:
      "Design professional bills that match your brand. Customize company logos, typography, accent color palettes, and seamlessly switch between multi-format layouts (A4, A5, and thermal) with instant real-time preview.",
    bullets: [
      "Upload high-resolution business logo and define custom brand accent colors (e.g. Teal, Indigo, emerald)",
      "1-click A4 / A5 template switcher with instant live preview and zero formatting distortion",
      "Professional layout complete with authorized signatory, bank details, and customizable terms",
    ],
    ctaText: "Customize Your Template",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    imageSrc: "/features/gst/custom-invoice-primefit.png",
    imageAlt: "PrimeFit Studio Custom Styled Invoice Template",
    imageCaption: "Custom Branded A4 Invoice Layout • PrimeFit Studio",
  },
  {
    id: "gst",
    label: "GST & Non-GST Invoices",
    badge: "100% STATUTORY COMPLIANCE",
    title: "Statutory Tax Invoices with Automated CGST & SGST Splits",
    description:
      "Generate 100% compliant GST and non-GST tax invoices in seconds. Vinimay validates the buyer's GSTIN, verifies state codes to automatically split CGST and SGST (or IGST), and generates accurate HSN/SAC statutory tables.",
    bullets: [
      "Automatic CGST (9%) & SGST (9%) split with item-wise HSN/SAC breakdown table",
      "Real-time tax calculation audit (e.g. ₹1,715 taxable + ₹130.50 tax = ₹1,845.50)",
      "Embedded dynamic UPI QR code on every printed & PDF invoice for instant settlements",
    ],
    ctaText: "Generate GST Invoice",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    imageSrc: "/features/gst/gst-tax-invoice.png",
    imageAlt: "Dhurandhar Fitness Full GST Tax Invoice with Tax Breakdown",
    imageCaption: "Verified Tax Invoice • CGST & SGST Slabs with HSN Table",
  },
  // {
  //   id: "conversion",
  //   label: "1-Click Conversion",
  //   badge: "ZERO RE-TYPING",
  //   title: "Convert Quotations & Session Packs to Invoices in 1 Click",
  //   description:
  //     "Transform customer plans, estimates, and session packs into final tax invoices with sequential serial numbers without re-entering client details or repeating line item entries.",
  //   bullets: [
  //     "Instant conversion from gym session packs and service plans to official invoices",
  //     "Automatic sequential financial-year numbering (e.g. DFDS26110018) with branch prefix",
  //     "Sub-second PDF generation, direct thermal print dispatch, and cloud ledger recording",
  //   ],
  //   ctaText: "Try 1-Click Invoicing",
  //   ctaHref: "https://vinimay.sharda.co.in/client-signup",
  //   imageSrc: "/features/gst/template-preview.png",
  //   imageAlt: "Invoice Preview and Template Selection Interface",
  //   imageCaption: "1-Click Template Selector & PDF Download Station",
  // },
  {
    id: "sharing",
    label: "Instant Sharing",
    badge: "PAPERLESS DISPATCH",
    title: "Direct WhatsApp Invoicing with 1-Click Dispatch",
    description:
      "Send digital invoices straight to your customer's WhatsApp in one tap. The dispatch modal pre-fills the customer's phone number, invoice date, item summary, and total amount ready to send.",
    bullets: [
      "Instant WhatsApp dispatch modal pre-filled with verified customer mobile number",
      "Automated WhatsApp message template with clear invoice breakdown and totals",
      "Delivers invoices directly into customer hands, saving paper and accelerating payments",
    ],
    ctaText: "Explore WhatsApp Dispatch",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    imageSrc: "/features/gst/whatsapp-share-modal.jpg",
    imageAlt: "Send Invoice via WhatsApp Modal Dialog",
    imageCaption: "Direct WhatsApp Dispatch • Order #PSPS26100019",
  },
  {
    id: "payments",
    label: "Easy Payments",
    badge: "DYNAMIC UPI QR",
    title: "Scan & Pay: Embedded Dynamic UPI QR & Bank Details",
    description:
      "Accelerate your cash collection cycles. Every invoice automatically prints your bank details and an exact-amount dynamic UPI QR code that clients scan to settle without typing errors.",
    bullets: [
      "Dynamic UPI QR code automatically pre-filled with the exact invoice total",
      "Zero-fee direct bank settlements credited straight to your business bank account",
      "Reduces debtor payment turnaround by 40% with zero payment chasing",
    ],
    ctaText: "Enable UPI Payments",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    imageSrc: "/features/gst/gst-tax-invoice.png",
    imageAlt: "Scan to Pay Dynamic UPI QR Code on Tax Invoice",
    imageCaption: "Embedded Scan-to-Pay UPI QR Code & Bank Details",
  },
  {
    id: "tracking",
    label: "Payment Tracking",
    badge: "AUDIT-READY RECEIVABLES",
    title: "Real-Time Customer Ledger & Outstanding Receivables",
    description:
      "Track exactly who owes what across all customers in real time. Full ledger dashboard with net receivables, total sales, discounts, receipts, and individual customer status badges.",
    bullets: [
      "Live tracking of Net Receivables (₹17,125.57) and customer balances in one screen",
      "Instant status badges: 'Owes ₹1,845.50', 'Advance ₹-2,500', or 'Settled ₹0'",
      "1-click customer ledger drill-down, receipt logs, and CSV export for complete audit readiness",
    ],
    ctaText: "View Customer Ledger",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
    imageSrc: "/features/gst/customer-ledger.jpg",
    imageAlt: "Customer Ledger and Accounts Receivable Dashboard",
    imageCaption: "Live Customer Ledger Dashboard • Receivables & Dues",
  },
];

export default function GSTComplianceTabsSection() {
  // Default to the 2nd tab: "GST & Non-GST Invoices" (index 1) as requested by user's screenshot
  const [activeTabIdx, setActiveTabIdx] = useState(1);
  const activeTab = GST_TABS_DATA[activeTabIdx] || GST_TABS_DATA[1];

  const contentRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // keep the active pill in view when it changes (tap or programmatic)
  useEffect(() => {
    tabRefs.current[activeTabIdx]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeTabIdx]);
  // Smooth cross-fade animation when active tab changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const content = contentRef.current;
    if (!content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.fromTo(
      content,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
    );
  }, [activeTabIdx]);

  return (
    <section className="w-full py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald" />
            <span>STATUTORY GST AUTOMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-bold">
            Everything you need for effortless GST billing
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From bespoke custom invoice templates and automated CGST/SGST tax
            splits to 1-click WhatsApp sharing and live customer ledgers.
          </p>
        </div>

        {/* Pill Navigation Bar: Matching the User-Provided Screenshot */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div
            role="tablist"
            className="
        flex flex-nowrap items-center gap-2.5
        overflow-x-auto snap-x snap-mandatory scroll-smooth
        px-4 py-3 -my-3
        [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]
        sm:flex-wrap sm:justify-center sm:gap-3.5 sm:overflow-visible sm:px-0 sm:py-0 sm:my-0 sm:snap-none sm:[mask-image:none]
      "
          >
            {GST_TABS_DATA.map((tab, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`shrink-0 snap-center whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none border text-center ${
                    isActive
                      ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/25 scale-[1.02]"
                      : "bg-white text-slate-600 border-slate-200/90 hover:text-slate-900 hover:bg-slate-50/80 shadow-2xs"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Area: 2 Columns (Left: Text & Controls, Right: Authentic Screenshot) */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Title, Explanations, Key Bullets & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                  {activeTab.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  {activeTab.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeTab.description}
                </p>
              </div>

              {/* Bullet Points with Checkmarks */}
              <ul className="space-y-3 pt-1">
                {activeTab.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button with OsmoRoll */}
              <div className="pt-2">
                <a
                  href={activeTab.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md shadow-emerald-500/20 transition-all active:scale-95 group cursor-pointer"
                >
                  <OsmoRoll>{activeTab.ctaText}</OsmoRoll>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: High-Resolution Real UI Screenshot Showcase */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Decorative Subtle Ambient Glow */}
              <div className="absolute -top-6 -left-6 w-56 h-56 rounded-full bg-emerald-100/50 blur-2xl -z-0 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-full bg-purple-100/40 blur-2xl -z-0 pointer-events-none" />

              {/* Screenshot Card Container */}
              <div className="relative w-full aspect-[16/11] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-900/5 shadow-2xl shadow-slate-300/40 overflow-hidden flex items-center justify-center p-2 sm:p-3 group">
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-100">
                  <Image
                    src={activeTab.imageSrc}
                    alt={activeTab.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42rem"
                    className="object-contain p-1 sm:p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                    priority
                  />

                  {/* Top Floating Badge Tag */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-white shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activeTab.imageCaption}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
