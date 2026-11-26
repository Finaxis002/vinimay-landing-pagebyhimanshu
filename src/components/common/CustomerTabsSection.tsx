"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircle2,
  Users,
  ArrowRight,
  BookOpen,
  MessageSquare,
  ShieldAlert,
  Award,
  FileSpreadsheet,
} from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";
import ArcHeading from "@/components/common/ArcHeading";

export interface CustomerTabItem {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}

const CUSTOMER_TABS_DATA: CustomerTabItem[] = [
  {
    id: "profile360",
    label: "CUSTOMER 360°",
    badge: "CENTRAL DIRECTORY",
    title: "Complete Customer Profile & GSTIN Verification",
    description:
      "Maintain a unified directory of your clients. Save verified GSTINs, multiple shipping addresses, billing preferences, and contact persons for instant auto-population on invoices.",
    bullets: [
      "Auto-validates party GSTIN and fetches legal trade name directly from GST portal",
      "Store multiple dispatch warehouses and delivery locations per customer",
      "Assign custom credit terms (Due on Receipt, Net 15, Net 30, Net 60)",
    ],
    ctaText: "Explore Customer Directory",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "khata",
    label: "KHATA & UDHAAR",
    badge: "RECEIVABLES GOVERNANCE",
    title: "Real-Time Customer Ledger & Aging Analysis",
    description:
      "Track every rupee owed by your customers. The live double-entry ledger records debits on billing and credits on payment with automatic aging categorization.",
    bullets: [
      "Real-time running balance updated the moment an invoice or payment is logged",
      "Age-wise receivables analysis: 0-30 days, 31-60 days, and 60+ days overdue",
      "Instant 'Settle Balance' button to clear full or partial balances with receipts",
    ],
    ctaText: "Track Customer Ledgers",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "whatsapp",
    label: "WHATSAPP REMINDERS",
    badge: "FASTER RECOVERY",
    title: "Automated WhatsApp Payment Alerts & UPI Links",
    description:
      "Recover outstanding payments 3x faster without awkward phone calls. Send automated, polite WhatsApp payment reminders with an embedded 1-tap UPI payment link.",
    bullets: [
      "Pre-scheduled payment reminder schedules (3 days before due, on due date, 7 days overdue)",
      "Embedded dynamic UPI QR code allowing customers to pay immediately from WhatsApp",
      "Automatic ledger update and thank-you confirmation sent upon successful payment",
    ],
    ctaText: "Automate Reminders",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "creditlimits",
    label: "CREDIT LIMITS",
    badge: "RISK MITIGATION",
    title: "Intelligent Credit Caps & Overdue Billing Locks",
    description:
      "Protect your working capital from bad debts. Define maximum credit limits per customer and enforce automated warnings or billing locks when overdue invoices cross thresholds.",
    bullets: [
      "Set custom credit amount ceilings and maximum allowable credit days per party",
      "Soft warning or hard checkout block when a customer exceeds their allocated limit",
      "Role-based manager override permissions for authorized exceptions",
    ],
    ctaText: "Set Credit Controls",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "loyalty",
    label: "LOYALTY & REWARDS",
    badge: "CUSTOMER RETENTION",
    title: "Points-Based Loyalty & VIP Membership Tiers",
    description:
      "Turn one-time shoppers into lifelong regulars. Award loyalty points automatically on purchases and allow customers to redeem them directly at checkout.",
    bullets: [
      "Configurable points earning rules (e.g., 1 point per ₹100 spent)",
      "Tier-based perks: Bronze, Silver, and Gold tiers with exclusive discounts",
      "Frictionless 1-click redemption directly deducted from bill total during billing",
    ],
    ctaText: "Launch Loyalty Program",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
  {
    id: "statements",
    label: "PARTY STATEMENTS",
    badge: "TRANSPARENT RECONCILIATION",
    title: "1-Click PDF & Excel Ledger Statements",
    description:
      "Eliminate account balance disputes. Generate clean, audit-ready customer account statements across any date range and share them via WhatsApp or email with a single tap.",
    bullets: [
      "Date-filtered statement showing opening balance, invoice debits, credits, and closing balance",
      "Export directly to branded PDF or Excel format with your company header",
      "Direct 1-tap WhatsApp statement delivery to the customer's registered number",
    ],
    ctaText: "Download Sample Statement",
    ctaHref: "https://vinimay.sharda.co.in/client-signup",
  },
];

export default function CustomerTabsSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = CUSTOMER_TABS_DATA[activeTabIdx] || CUSTOMER_TABS_DATA[0];

  const contentRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeEl = tabRefs.current[activeTabIdx];
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTabIdx]);

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
            <Users className="w-4 h-4 text-primary" />
            <span>CENTRALIZED CRM &amp; KHATA GOVERNANCE</span>
          </div>
          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight font-black"
          >
            What makes Vinimay Customer CRM so powerful
          </ArcHeading>
        </div>

        {/* Tab Navigation Bar */}
        <div className="w-full max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="relative flex items-stretch justify-start md:justify-center bg-white rounded-xl border border-slate-200 shadow-xs divide-x divide-slate-200 w-max md:w-full mx-auto">
              {CUSTOMER_TABS_DATA.map((tab, idx) => {
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

              {/* Smooth Animated Sliding Indicator */}
              <div
                className="absolute bottom-0 h-1 bg-primary transition-all duration-300 ease-out z-10 pointer-events-none rounded-full"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div ref={contentRef} className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Authentic Mockup Card */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4">
              <div className="absolute -top-4 -left-4 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-purple-100/60 -z-0 pointer-events-none" />
              <div
                className="absolute -top-1 left-8 w-24 h-16 pointer-events-none opacity-40 -z-0"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {activeTabIdx === 0 && <Customer360Mockup />}
              {activeTabIdx === 1 && <CustomerKhataMockup />}
              {activeTabIdx === 2 && <CustomerWhatsAppMockup />}
              {activeTabIdx === 3 && <CreditLimitsMockup />}
              {activeTabIdx === 4 && <LoyaltyRewardsMockup />}
              {activeTabIdx === 5 && <PartyStatementsMockup />}
            </div>

            {/* Right Column: Title, Explanations & Bullet Points */}
            <div className="lg:col-span-6 space-y-5 lg:pl-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary-50 px-3 py-1 rounded-full border border-primary/20 inline-block mb-3">
                  {activeTab.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
                  {activeTab.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeTab.description}
                </p>
              </div>

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

              <div className="pt-3">
                <a
                  href={activeTab.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 group cursor-pointer"
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
   MOCKUP 1: CUSTOMER 360 PROFILE
   ========================================================================= */
function Customer360Mockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
            ST
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Sharma Traders &amp; Co.</div>
            <div className="text-[10px] text-slate-500">Regular B2B Client</div>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          GSTIN Verified
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Party GSTIN</span>
          <span className="font-mono font-bold text-slate-800">23ABCDE1234F1Z5</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Contact Person</span>
          <span className="font-semibold text-slate-800">Ravi Sharma (+91 98260 ••••)</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-500">Credit Terms</span>
          <span className="font-medium text-slate-800">Net 30 Days</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-purple-50/50 border border-purple-200">
          <span className="text-purple-900 font-medium">Lifetime Revenue</span>
          <span className="font-mono font-bold text-purple-900">₹8,42,500.00</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[11px] flex items-center justify-between">
        <span>Active Invoices: 18</span>
        <span className="text-emerald-400 font-bold">Good Standing</span>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 2: KHATA & UDHAAR
   ========================================================================= */
function CustomerKhataMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <BookOpen className="w-4 h-4 text-purple-600" />
          <span>Party Ledger &amp; Aging Summary</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
          BALANCE DUE
        </span>
      </div>

      <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">
            CURRENT OUTSTANDING RECEIVABLE
          </div>
          <div className="text-lg font-black text-amber-950 font-mono mt-0.5">
            ₹46,800.00
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-white text-[10px] font-bold">
          Collect Now
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          AGING ANALYSIS
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
            <div className="text-slate-500">0 - 30 Days</div>
            <div className="font-mono font-bold text-emerald-800 text-xs mt-0.5">₹34,200</div>
          </div>
          <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">
            <div className="text-slate-500">31 - 60 Days</div>
            <div className="font-mono font-bold text-amber-800 text-xs mt-0.5">₹12,600</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-slate-500">60+ Days</div>
            <div className="font-mono font-bold text-slate-400 text-xs mt-0.5">₹0.00</div>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] flex items-center justify-between text-slate-700">
        <span>Last Payment: ₹20,000 via UPI (18 Nov)</span>
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 3: WHATSAPP REMINDERS
   ========================================================================= */
function CustomerWhatsAppMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp Cloud Automated Dispatch</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Delivered ✓
        </span>
      </div>

      {/* WhatsApp Message Bubble Mockup */}
      <div className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-2 text-xs">
        <div className="text-[10px] text-emerald-800 font-semibold">
          To: Sharma Traders (+91 98260 ••••)
        </div>
        <p className="text-slate-700 text-[11px] leading-relaxed bg-white p-2.5 rounded-lg border border-emerald-100 shadow-2xs">
          Hello Sharma Traders, a gentle reminder that invoice{" "}
          <strong className="text-slate-900 font-mono">#INV-2041</strong> for{" "}
          <strong className="text-emerald-700 font-mono">₹28,910.00</strong> is due on{" "}
          <strong className="text-slate-900">28-Nov-2026</strong>.
        </p>
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            className="w-full py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[10px] shadow-xs text-center"
          >
            ⚡ Pay via UPI (Single Tap)
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
        <span>Payment link auto-reconciles ledger</span>
        <span className="font-semibold text-emerald-700">0% Gateway Fee</span>
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 4: CREDIT LIMITS
   ========================================================================= */
function CreditLimitsMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <ShieldAlert className="w-4 h-4 text-purple-600" />
          <span>Intelligent Risk &amp; Credit Ceiling</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">
          LIMIT ACTIVE
        </span>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Assigned Credit Cap</span>
          <span className="font-mono font-bold text-slate-900 text-sm">₹1,00,000.00</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-purple-600 rounded-full" style={{ width: "46.8%" }} />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Utilized: ₹46,800.00 (46.8%)</span>
          <span className="text-emerald-700 font-semibold">Available: ₹53,200.00</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-purple-50/50 border border-purple-200 space-y-1 text-xs">
        <div className="font-bold text-purple-900 text-[11px]">Enforcement Rules</div>
        <div className="flex items-center gap-1.5 text-[10px] text-purple-800">
          <CheckCircle2 className="w-3 h-3 text-purple-600" />
          <span>Soft alert triggered at 80% utilization</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-purple-800">
          <CheckCircle2 className="w-3 h-3 text-purple-600" />
          <span>Hard checkout lock if invoices cross 45 days overdue</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center font-medium">
        🛡️ Shields your balance sheet from uncollectable bad debts.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 5: LOYALTY & REWARDS
   ========================================================================= */
function LoyaltyRewardsMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <Award className="w-4 h-4 text-purple-600" />
          <span>Loyalty Rewards &amp; VIP Membership</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
          GOLD TIER ⭐
        </span>
      </div>

      <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-200 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold text-purple-800 uppercase tracking-wide">
            AVAILABLE LOYALTY BALANCE
          </div>
          <div className="text-lg font-black text-purple-950 font-mono mt-0.5">
            1,450 Points
          </div>
          <div className="text-[10px] text-purple-700">Redeemable Value: ₹145.00</div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[10px] font-bold">
          Redeem at Counter
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">Points Accrual Formula</span>
          <span className="font-semibold text-slate-800">1 pt per ₹100 spent</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-slate-600">VIP Discount Entitlement</span>
          <span className="font-bold text-purple-900">5% Auto-discount</span>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] text-center font-semibold">
        Increases customer return frequency by over 35%.
      </div>
    </div>
  );
}

/* =========================================================================
   MOCKUP 6: PARTY STATEMENTS
   ========================================================================= */
function PartyStatementsMockup() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative z-10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
          <FileSpreadsheet className="w-4 h-4 text-purple-600" />
          <span>Statement of Account (Ledger)</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
          01-Nov to 24-Nov
        </span>
      </div>

      <div className="space-y-1 text-xs">
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <span className="text-slate-600">02 Nov • Invoice #INV-1980</span>
          <span className="font-mono font-bold text-rose-600">Debit: +₹32,400</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <span className="text-slate-600">10 Nov • Payment Recd (UPI)</span>
          <span className="font-mono font-bold text-emerald-600">Credit: -₹20,000</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
          <span className="text-slate-600">20 Nov • Invoice #INV-2041</span>
          <span className="font-mono font-bold text-rose-600">Debit: +₹28,910</span>
        </div>
        <div className="p-2.5 rounded-lg bg-purple-50/60 border border-purple-200 flex items-center justify-between font-bold">
          <span className="text-purple-950">Closing Balance Due</span>
          <span className="font-mono text-purple-950 text-sm">₹41,310.00</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 gap-2">
        <button
          type="button"
          className="flex-1 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-bold text-center"
        >
          Download PDF
        </button>
        <button
          type="button"
          className="flex-1 py-1.5 rounded-lg bg-emerald-600 text-white text-[10px] font-bold text-center"
        >
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
}