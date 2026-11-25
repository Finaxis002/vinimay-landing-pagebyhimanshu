"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircle2,
  Zap,
  ArrowRight,
  Receipt,
  Search,
  ShoppingCart,
  UtensilsCrossed,
  Printer,
  WifiOff,
  UserCheck,
  CreditCard,
  DollarSign,
  Clock,
  Sparkles,
} from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";
import ArcHeading from "@/components/common/ArcHeading";

export interface POSTabItem {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}

const POS_TABS_DATA: POSTabItem[] = [
  {
    id: "shortcode",
    label: "SHORTCODE & TOUCH",
    badge: "TURBOCHARGED COUNTER BILLING",
    title: "Instant Shortcode Punching & Visual Touch Grid",
    description:
      "Eliminate queue bottlenecks during peak rush hours. Cashiers can punch dishes in milliseconds using mnemonic shortcodes (like 'bn' for Butter Naan or '3*bn' for 3 qty) or tap high-res visual category tiles.",
    bullets: [
      "Sub-second item punching via smart shortcodes ('bn', '101', '3*bn') with instant auto-match",
      "Visual touch-screen categories with live table status indicators ('Table 8', 'Table 11')",
      "One-tap dual dispatch to Kitchen Display / KOT and customer billing cart simultaneously",
    ],
    ctaText: "Try Shortcode Billing",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "split",
    label: "SPLIT PAYMENTS",
    badge: "MULTI-TENDER CHECKOUT",
    title: "Flexible Multi-Mode Split Bill Settlement",
    description:
      "Give customers complete freedom to divide any bill across Cash, UPI Dynamic QR, Credit/Debit Cards, and Khata without cashier math errors or register discrepancies.",
    bullets: [
      "Real-time split allocation across Cash, dynamic UPI QR, and Cards in seconds",
      "Direct Khata / Udhaar assignment for registered regular customers",
      "Zero calculation errors with live allocation matcher ('Ready ✔ Exact Match')",
    ],
    ctaText: "Explore Split Tender",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "khata",
    label: "KHATA & DUES",
    badge: "CREDIT LEDGER & UDHAAR",
    title: "Automated Customer Khata & Dues Collection",
    description:
      "Retain regular customers by offering trusted credit sales while keeping airtight tracking of receivables, individual order ledgers, and single-click settlements.",
    bullets: [
      "Live ledger tracking of pending vs collected customer credit and dues",
      "Instant customer lookup via mobile number or customer name at the counter",
      "'Settle in One Go' single-click balance clearance with automated receipt delivery",
    ],
    ctaText: "Manage Credit Khata",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "hold",
    label: "HOLD & MULTI-CART",
    badge: "QUEUE OPTIMIZATION",
    title: "Instant Hold / Park Bill & Multi-Cart Switching",
    description:
      "Never let a customer stepping away to grab another item block your entire checkout counter. Park their cart in one tap, ring up the next customer, and resume instantly.",
    bullets: [
      "Hold and park active carts in 1 click without losing scanned items or table links",
      "Immediately start billing subsequent queue customers with zero lag",
      "One-click recall to resume parked carts the moment the customer returns",
    ],
    ctaText: "See Queue Controls",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "register",
    label: "REGISTER & CASH",
    badge: "DRAWER GOVERNANCE",
    title: "Shift Open/Close & Register Reconciliation",
    description:
      "Eliminate cash discrepancies across cashier shift changes. Record opening floats, log mid-shift petty cash drops, and automate shift-end X & Z reconciliation reports.",
    bullets: [
      "Opening float entry with automated cash drawer lock enforcement",
      "Mid-shift petty cash and counter expense disbursement tracking",
      "Automated X & Z shift reports matching system totals against physical counted cash",
    ],
    ctaText: "View Cash Controls",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "offline",
    label: "OFFLINE & THERMAL",
    badge: "FAIL-SAFE RESILIENCE",
    title: "100% Offline Resilience & High-Speed Thermal Receipts",
    description:
      "Keep ringing up sales even when your internet drops completely. Invoices are stored in local storage and sync silently to the cloud the moment connectivity returns.",
    bullets: [
      "Continuous offline cashier billing with local SQLite cache and auto-sync on reconnect",
      "High-speed printing to 2-inch (58mm) and 3-inch (80mm) ESC/POS thermal printers",
      "Instant paperless dispatch: auto-sends GST tax invoices directly via WhatsApp & SMS",
    ],
    ctaText: "Experience Offline POS",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function POSTabsSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = POS_TABS_DATA[activeTabIdx] || POS_TABS_DATA[0];

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

  // Recalculate on window resize
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
            <Zap className="w-4 h-4 text-[#877EFC]" />
            <span>SUB-SECOND COUNTER PERFORMANCE</span>
          </div>
          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-bold"
          >
            What makes Vinimay POS lightning fast
          </ArcHeading>
        </div>

        {/* Tab Navigation Bar - Styled matching reference design with vertical dividers & sliding indicator */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="relative flex items-stretch justify-start md:justify-center bg-white rounded-xl border border-slate-200 shadow-xs divide-x divide-slate-200 w-max md:w-full mx-auto">
              {POS_TABS_DATA.map((tab, idx) => {
                const isActive = activeTabIdx === idx;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className={`relative shrink-0 flex-1 px-4 sm:px-5 py-4 text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer select-none text-center ${
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
            {/* Left Column: Authentic Mockup Card tailored to the active tab */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              {/* Decorative Pastel Background Blob with Polka Dots */}
              <div className="absolute -top-4 -left-4 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-purple-100/60 -z-0 pointer-events-none" />
              <div
                className="absolute -top-1 left-8 w-24 h-16 pointer-events-none opacity-40 -z-0"
                style={{
                  backgroundImage:
                    "radial-gradient(#877efc 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {/* Render Tab-Specific High-Fidelity Mockup */}
              {activeTabIdx === 0 && <ShortcodeTouchMockup />}
              {activeTabIdx === 1 && <SplitPaymentMockup />}
              {activeTabIdx === 2 && <KhataDuesMockup />}
              {activeTabIdx === 3 && <HoldMultiCartMockup />}
              {activeTabIdx === 4 && <RegisterCashMockup />}
              {activeTabIdx === 5 && <OfflineThermalMockup />}
            </div>

            {/* Right Column: Title, Explanations & Bullet Points */}
            <div className="lg:col-span-6 space-y-5 lg:pl-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#877EFC] bg-purple-100/60 px-3 py-1 rounded-full border border-purple-200 inline-block mb-3">
                  {activeTab.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
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
                  href={activeTab.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#877EFC] hover:bg-purple-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 group cursor-pointer"
                >
                  <OsmoRoll>{activeTab.ctaText}</OsmoRoll>
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

/* =========================================================================
   MOCKUP 1: SHORTCODE & TOUCH (Modeled on Screenshot 1)
   ========================================================================= */
function ShortcodeTouchMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-bold text-slate-700 font-mono pl-1">
            Cashier &amp; Billing Terminal
          </span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
          Online
        </span>
      </div>

      {/* Active Tables Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[10px]">
        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-200 shrink-0">
          ● Eight ₹56
        </span>
        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-200 shrink-0">
          ● Eleven ₹210
        </span>
        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-200 shrink-0">
          ● Five ₹66
        </span>
        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 shrink-0">
          ● Table One
        </span>
      </div>

      {/* Search / Shortcode Instant Punch Bar */}
      <div className="relative">
        <div className="flex items-center justify-between bg-slate-50 border border-purple-300 rounded-lg px-3 py-2 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-mono truncate">
            <Search className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span className="text-[11px] text-slate-500 truncate">
              Type shortcode e.g. <strong className="text-purple-700">&apos;bn&apos;</strong>, <strong className="text-purple-700">&apos;3*bn&apos;</strong>...
            </span>
          </div>
          <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0 flex items-center gap-1">
            <Zap className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
            Instant Punch
          </span>
        </div>
      </div>

      {/* Dish Grid Cards with Shortcodes */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <div className="border border-slate-200 rounded-xl p-2.5 bg-slate-50/50 hover:border-purple-300 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-mono">
              BN
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="Veg" />
          </div>
          <div className="text-xs font-bold text-slate-900 truncate">Butter Naan</div>
          <div className="text-[11px] font-semibold text-slate-600 font-mono mt-0.5">
            ₹66.00
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-2.5 bg-slate-50/50 hover:border-purple-300 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-mono">
              BP
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="Veg" />
          </div>
          <div className="text-xs font-bold text-slate-900 truncate">Butter Paneer</div>
          <div className="text-[11px] font-semibold text-slate-600 font-mono mt-0.5">
            ₹144.00
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-2.5 bg-slate-50/50 hover:border-purple-300 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-mono">
              CB
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="Veg" />
          </div>
          <div className="text-xs font-bold text-slate-900 truncate">Chhole Bhature</div>
          <div className="text-[11px] font-semibold text-slate-600 font-mono mt-0.5">
            ₹155.00
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-2.5 bg-slate-50/50 hover:border-purple-300 transition-colors">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-mono">
              DF
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="Veg" />
          </div>
          <div className="text-xs font-bold text-slate-900 truncate">Dal Fry</div>
          <div className="text-[11px] font-semibold text-slate-600 font-mono mt-0.5">
            ₹133.00
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-1 gap-2 border-t border-slate-100">
        <span className="text-[10px] font-medium text-slate-500 flex items-center gap-1">
          <UtensilsCrossed className="w-3 h-3 text-slate-400" />
          Send to Kitchen (KOT)
        </span>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[11px] font-bold">
          <ShoppingCart className="w-3 h-3" />
          <span>Cart (3 items) • ₹365</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 2: SPLIT PAYMENTS (Modeled on Screenshot 2)
   ========================================================================= */
function SplitPaymentMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      {/* Toast Notification Alert */}
      <div className="flex items-center justify-between bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] shadow-sm">
        <span className="font-semibold">Bill Generated</span>
        <span className="text-slate-300 font-mono">Order #773d locked for payment</span>
      </div>

      {/* Modal Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
          <span className="text-purple-600">🔀</span>
          <span>Split Bill</span>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-slate-400 font-medium">Grand Total</div>
          <div className="text-sm font-black text-blue-600 font-mono">₹288.00</div>
        </div>
      </div>

      {/* Payment Tenders Form */}
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-purple-400 bg-purple-50/20">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <DollarSign className="w-3.5 h-3.5 text-slate-500" />
            <span>Cash (₹)</span>
          </div>
          <span className="font-mono font-bold text-purple-900 text-sm px-2 py-0.5 bg-white border border-purple-200 rounded">
            288.00
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg border border-slate-200 bg-slate-50/50">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Zap className="w-3.5 h-3.5 text-slate-500" />
            <span>UPI / QR (₹)</span>
          </div>
          <span className="font-mono text-slate-500 text-xs px-2 py-0.5 bg-white border border-slate-200 rounded">
            0.00
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg border border-slate-200 bg-slate-50/50">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <CreditCard className="w-3.5 h-3.5 text-slate-500" />
            <span>Card (₹)</span>
          </div>
          <span className="font-mono text-slate-500 text-xs px-2 py-0.5 bg-white border border-slate-200 rounded">
            0.00
          </span>
        </div>

        {/* Khata Notice */}
        <div className="p-2 rounded-lg border border-amber-200 bg-amber-50/60 text-[10px]">
          <div className="flex items-center justify-between font-semibold text-amber-900 mb-1">
            <span>Add to Khata / Due (₹)</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-200 text-amber-800">
              Customer Required
            </span>
          </div>
          <p className="text-amber-800/80 leading-tight">
            Registered customer required to settle on credit.
          </p>
        </div>
      </div>

      {/* Validation Status & Settle Button */}
      <div className="pt-1 space-y-2">
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
          <span>Total Allocated: ₹288.00</span>
          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700">
            <CheckCircle2 className="w-3 h-3" /> Exact Match Ready
          </span>
        </div>

        <button
          type="button"
          className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Settle Bill</span>
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 3: KHATA & DUES (Modeled on Screenshot 3)
   ========================================================================= */
function KhataDuesMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/40">
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">
            OUTSTANDING DUES
          </div>
          <div className="text-base font-black text-amber-900 font-mono mt-0.5">
            ₹2,480.18
          </div>
          <div className="text-[9px] text-amber-700/80">9 Pending customers</div>
        </div>

        <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/40">
          <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
            DUES COLLECTED
          </div>
          <div className="text-base font-black text-emerald-900 font-mono mt-0.5">
            ₹2,114.86
          </div>
          <div className="text-[9px] text-emerald-700/80">Recovered &amp; settled</div>
        </div>
      </div>

      {/* Customer Filter Search Box */}
      <div className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-700">
        <UserCheck className="w-3.5 h-3.5 text-purple-600 shrink-0" />
        <span className="font-semibold truncate">Aditya Jayasawal</span>
        <span className="text-[10px] text-slate-400 font-mono">(+91 9000000005)</span>
      </div>

      {/* Quick Settlement Banner */}
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs">
        <div>
          <div className="text-[10px] text-amber-800 font-medium">Total Customer Due</div>
          <div className="text-sm font-black text-amber-900 font-mono">₹356.46</div>
        </div>
        <button
          type="button"
          className="px-3 py-1.5 rounded-lg bg-amber-500 text-white text-[10px] font-bold shadow-xs hover:bg-amber-600 transition-colors flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          <span>Settle in One Go</span>
        </button>
      </div>

      {/* Ledger Table Row */}
      <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-1.5 text-xs">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-mono font-bold text-slate-900">#ORD-33B1 (Table One)</span>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
            PENDING CREDIT
          </span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Billed: 02:01 pm • Full Due</span>
          <span className="font-mono font-bold text-slate-900">₹356.46</span>
        </div>
        <div className="flex items-center justify-end gap-2 pt-1">
          <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
            <Receipt className="w-3 h-3" /> Receipt
          </span>
          <span className="px-2.5 py-0.5 rounded bg-orange-600 text-white text-[10px] font-bold">
            Collect Due
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 4: HOLD & MULTI-CART (Queue Station)
   ========================================================================= */
function HoldMultiCartMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      {/* Station Title */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-600" />
          <span className="text-xs font-bold text-slate-900">Queue Flow &amp; Cart Parking</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Zero Delays
        </span>
      </div>

      {/* Active Order Box */}
      <div className="p-3 rounded-xl border border-purple-300 bg-purple-50/30 space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-purple-900">Active Register #01</span>
          <span className="text-[10px] font-mono text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
            RINGING UP NOW
          </span>
        </div>
        <div className="text-xs font-medium text-slate-700">Order #ORD-784 • Table Five</div>
        <div className="flex items-center justify-between text-xs pt-1">
          <span className="text-slate-500">3 items in cart</span>
          <span className="font-mono font-bold text-slate-900">₹343.00</span>
        </div>
      </div>

      {/* Parked Carts List */}
      <div className="space-y-2 pt-1">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          PARKED / ON-HOLD CARTS (2)
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs">
          <div>
            <div className="font-bold text-slate-800">#HOLD-01 • Rakesh S.</div>
            <div className="text-[10px] text-slate-500">4 items • ₹620.00 (Parked 2m ago)</div>
          </div>
          <button
            type="button"
            className="px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[10px] font-bold hover:bg-purple-700 transition-colors"
          >
            Resume ↗
          </button>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs">
          <div>
            <div className="font-bold text-slate-800">#HOLD-02 • Takeaway #12</div>
            <div className="text-[10px] text-slate-500">2 items • ₹240.00 (Parked 4m ago)</div>
          </div>
          <button
            type="button"
            className="px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[10px] font-bold hover:bg-purple-700 transition-colors"
          >
            Resume ↗
          </button>
        </div>
      </div>

      <div className="text-[10px] text-slate-500 text-center pt-1 font-medium">
        ⚡ Never make the line wait when a customer steps away.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 5: REGISTER & CASH (Shift Governance)
   ========================================================================= */
function RegisterCashMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      {/* Shift Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div>
          <div className="text-xs font-bold text-slate-900">Shift Reconciliation</div>
          <div className="text-[10px] text-slate-500">Cashier: Rahul M. • Register #02</div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
          Shift: Morning
        </span>
      </div>

      {/* Financial Breakdown Table */}
      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Opening Cash Float</span>
          <span className="font-mono font-semibold text-slate-900">₹2,000.00</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Cash Sales Collected</span>
          <span className="font-mono font-semibold text-emerald-700">+₹18,450.00</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Petty Cash Counter Drops</span>
          <span className="font-mono font-semibold text-rose-600">-₹450.00</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-purple-50/50 border border-purple-200 font-bold">
          <span className="text-purple-900">Expected Drawer Cash</span>
          <span className="font-mono text-purple-900 text-sm">₹20,000.00</span>
        </div>
      </div>

      {/* Counted vs Expected Balance Check */}
      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
        <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
          <span>Physical Counted: ₹20,000.00</span>
          <span className="flex items-center gap-1 text-[10px]">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Discrepancy: ₹0.00
          </span>
        </div>
        <div className="text-[10px] text-emerald-700/80">
          Audit check passed. Drawer balance matches register entries with 100% precision.
        </div>
      </div>

      <button
        type="button"
        className="w-full py-2 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
      >
        <Receipt className="w-3.5 h-3.5" />
        <span>Generate Shift Z-Report</span>
      </button>
    </div>
  );
}

/* =========================================================================
   MOCKUP 6: OFFLINE & THERMAL (Dispatch Engine)
   ========================================================================= */
function OfflineThermalMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      {/* Offline Status Badge */}
      <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50 border border-amber-200">
        <div className="flex items-center gap-2">
          <WifiOff className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-bold text-amber-900">Offline Resilience Active</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-bold">
          LOCAL CACHE
        </span>
      </div>

      {/* Buffer Statistics */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
          <div className="text-[10px] text-slate-500 font-medium">Local SQLite Queue</div>
          <div className="text-base font-bold text-slate-900 font-mono mt-0.5">
            42 Invoices
          </div>
          <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">● Ready to sync</div>
        </div>

        <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
          <div className="text-[10px] text-slate-500 font-medium">Thermal Print Speed</div>
          <div className="text-base font-bold text-slate-900 font-mono mt-0.5">
            0.18 sec
          </div>
          <div className="text-[9px] text-slate-500 mt-0.5">3-inch ESC/POS</div>
        </div>
      </div>

      {/* Hardware Dispatch Hub */}
      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            <Printer className="w-3.5 h-3.5 text-purple-600" />
            <span className="font-medium text-slate-800">Thermal 80mm Printer</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Connected
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            <Receipt className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium text-slate-800">WhatsApp &amp; SMS Invoicing</span>
          </div>
          <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            Auto-Send ON
          </span>
        </div>
      </div>

      {/* Mini Receipt Preview */}
      <div className="p-2 rounded-lg bg-slate-900 text-slate-300 text-[10px] font-mono flex items-center justify-between">
        <span>VIN/2026/0921 • Total ₹1,240</span>
        <span className="text-emerald-400">Printed &amp; WhatsApp Delivered ✓</span>
      </div>
    </div>
  );
}