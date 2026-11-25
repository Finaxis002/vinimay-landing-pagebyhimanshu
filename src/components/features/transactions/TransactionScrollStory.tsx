"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Receipt,
  ArrowLeftRight,
  BookOpen,
  Landmark,
  Search,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import ArcHeading from "@/components/common/ArcHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StoryStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  pillHighlight: string;
}

const STEPS: StoryStep[] = [
  {
    step: "01",
    icon: Receipt,
    badge: "VOUCHER ENTRY",
    title: "Record Voucher Entry",
    description:
      "Invoice or expense entered with party name, payment mode, and tax code allocations in one frictionless step.",
    pillHighlight: "Voucher #VN-8021 Recorded ✓",
  },
  {
    step: "02",
    icon: ArrowLeftRight,
    badge: "DOUBLE-ENTRY ENGINE",
    title: "Double-Entry Posting",
    description:
      "Automated debit (Bank A/C) and credit (Sales Revenue) journal entries balance mathematically in milliseconds.",
    pillHighlight: "Debit & Credit Balanced (₹25,000) ✓",
  },
  {
    step: "03",
    icon: BookOpen,
    badge: "REAL-TIME DAYBOOK",
    title: "Instant Daybook Update",
    description:
      "Daily transaction journal automatically logs running cashflow, bank balance, and party ledger tallies.",
    pillHighlight: "Daybook & Cashflow Synced Live ✓",
  },
  {
    step: "04",
    icon: Landmark,
    badge: "BANK RECONCILIATION",
    title: "Bank Statement Auto-Match",
    description:
      "Reconcile deposits, card settlements, and UPI payouts against official bank statements with 99.8% precision.",
    pillHighlight: "UPI Ref: 628109 Matched with HDFC ✓",
  },
  {
    step: "05",
    icon: Search,
    badge: "INSTANT RETRIEVAL",
    title: "Indexed for Instant Search",
    description:
      "Locate any transaction in milliseconds by searching party name, GSTIN, amount, date, or cheque reference.",
    pillHighlight: "Voucher Indexed for Sub-second Search ✓",
  },
  {
    step: "06",
    icon: ShieldCheck,
    badge: "AUDIT READY",
    title: "Trial Balance Reconciled",
    description:
      "Debit matches credit perfectly across every ledger. 100% compliant and audit-ready for your CA's review.",
    pillHighlight: "Trial Balance Reconciled • 100% Audit Ready ✓",
  },
];

const N = STEPS.length;
const TOTAL_TXN = 25000;
const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

function Row({
  on,
  delay = 0,
  className = "",
  children,
}: {
  on: boolean;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ transitionDelay: on ? `${delay}ms` : "0ms" }}
      className={`flex items-center justify-between gap-3 transition-all duration-500 ${
        on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function TransactionScrollStory({
  className = "",
}: {
  offsetMobile?: number;
  offsetDesktop?: number;
  className?: string;
}) {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const amountRef = useRef<HTMLSpanElement | null>(null);

  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const pinEl = pinRef.current;
    const stageEl = stageRef.current;
    const listEl = listRef.current;
    if (!pinEl || !stageEl || !listEl) return;

    const titles = gsap.utils.toArray<HTMLElement>("[data-txn-title]", pinEl);
    const descs = gsap.utils.toArray<HTMLElement>("[data-txn-desc]", pinEl);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = (context.conditions || {}) as {
          isDesktop?: boolean;
          isMobile?: boolean;
          reduceMotion?: boolean;
        };

        const stepHeight = isDesktop ? 140 : 54;

        if (reduceMotion) {
          setReduced(true);
          setActive(N - 1);
          gsap.set(titles, { color: "#0f172a", opacity: 1, filter: "none" });
          return;
        }

        setReduced(false);

        gsap.set(titles, { color: "#94a3b8", filter: "blur(2.5px)", opacity: 0.45 });
        if (titles[0]) gsap.set(titles[0], { color: "#0f172a", filter: "blur(0px)", opacity: 1 });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: pinEl,
            start: isDesktop ? "top top" : "top top+=50",
            end: () => `+=${N * (isDesktop ? 105 : 75)}%`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (barRef.current) {
                gsap.set(barRef.current, { scaleY: self.progress });
              }
              const currentStep = Math.min(N - 1, Math.floor(self.progress * N));
              setActive(currentStep);
            },
          },
        });

        tl.to({}, { duration: 0.5 });

        for (let i = 1; i < N; i++) {
          const label = `step_${i}`;

          tl.addLabel(label, ">")
            .to(listEl, { y: -i * stepHeight, duration: 1 }, label)
            .to(titles[i - 1], { color: "#94a3b8", filter: "blur(2.5px)", opacity: 0.45, duration: 0.6 }, label)
            .to(titles[i], { color: "#0f172a", filter: "blur(0px)", opacity: 1, duration: 0.6 }, `${label}+=0.3`)
            .to({}, { duration: 0.5 });
        }

        if (isDesktop && window.matchMedia("(hover: hover)").matches) {
          const handlePointerMove = (e: PointerEvent) => {
            const r = stageEl.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(stageEl, {
              rotationY: x * 6,
              rotationX: -y * 6,
              transformPerspective: 900,
              duration: 0.5,
            });
          };

          const handlePointerLeave = () => {
            gsap.to(stageEl, { rotationY: 0, rotationX: 0, duration: 0.6 });
          };

          stageEl.addEventListener("pointermove", handlePointerMove);
          stageEl.addEventListener("pointerleave", handlePointerLeave);

          return () => {
            stageEl.removeEventListener("pointermove", handlePointerMove);
            stageEl.removeEventListener("pointerleave", handlePointerLeave);
          };
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  // Total amount animation at step 2
  useEffect(() => {
    const el = amountRef.current;
    if (!el) return;
    if (active < 2) {
      el.textContent = inr(0);
      return;
    }
    if (reduced) {
      el.textContent = inr(TOTAL_TXN);
      return;
    }
    const o = { v: 0 };
    const tween = gsap.to(o, {
      v: TOTAL_TXN,
      duration: 0.85,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = inr(o.v);
      },
    });
    return () => {
      tween.kill();
    };
  }, [active, reduced]);

  return (
    <section
      id="transaction-story"
      aria-labelledby="txn-story-title"
      className={`relative w-full bg-slate-50/70 border-t border-slate-200/80 ${className}`}
    >
      <style>{`
        @keyframes txn-stamp{0%{opacity:0;transform:scale(2.4) rotate(-24deg)}100%{opacity:1;transform:scale(1) rotate(-12deg)}}
        .txn-stamp{transform:rotate(-12deg);animation:txn-stamp .5s cubic-bezier(.2,1.5,.4,1) both}
        @media (prefers-reduced-motion:reduce){.txn-stamp{animation:none}}
      `}</style>

      {/* Section Header with WordmarkArc Background */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-4 text-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/90 text-purple-700 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#877EFC]" />
            <span>Double-Entry Financial Journey</span>
          </div>
          <div>
            <ArcHeading
              id="txn-story-title"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto font-bold"
            >
              Watch books balance automatically
            </ArcHeading>
          </div>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Scroll through the six steps and experience how Vinimay records vouchers, posts double entries, and auto-matches bank statements.
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-purple-600 animate-bounce">
            Scroll to explore ↓
          </p>
        </div>
      </div>

      {/* PINNED 3-COLUMN STAGE */}
      <div
        ref={pinRef}
        className="relative h-[100dvh] min-h-[500px] w-full overflow-hidden flex items-center justify-center py-2 md:py-0"
      >
        <div className="mx-auto h-full max-w-[1340px] w-full px-4 sm:px-6 md:px-12 flex flex-col md:grid md:grid-cols-[1.1fr_auto_1.1fr] md:gap-8 lg:gap-12 items-center justify-center">
          {/* Column 1: Titles List */}
          <div
            className="relative w-full h-[54px] md:h-[520px] overflow-hidden order-1"
            style={{
              maskImage:
                "linear-gradient(transparent, #000 20%, #000 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(transparent, #000 20%, #000 80%, transparent)",
            }}
          >
            <div
              ref={listRef}
              className="absolute left-0 right-0"
              style={{ top: "50%", marginTop: "-27px" }}
            >
              {STEPS.map((step, idx) => (
                <div
                  key={step.step || idx}
                  data-txn-title
                  style={{
                    filter: idx === 0 ? "blur(0px)" : "blur(2.5px)",
                    opacity: idx === 0 ? 1 : 0.45,
                  }}
                  className="h-[54px] md:h-[140px] flex flex-col justify-center transition-all px-2 text-center md:text-left will-change-[filter,opacity]"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-purple-600 mb-0.5 md:mb-1">
                    <span>STEP {step.step}</span>
                    <span>•</span>
                    <span className="truncate">{step.badge}</span>
                  </div>
                  <h3 className="text-base sm:text-xl md:text-2xl lg:text-[2.1rem] font-bold leading-tight text-slate-900 line-clamp-1 md:line-clamp-2">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Center Stage with Live Journal Voucher & 3D Tilt */}
          <div
            ref={stageRef}
            className="relative order-2 shrink-0 w-[min(90vw,350px)] sm:w-[390px] md:w-[430px] lg:w-[450px] my-2 md:my-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#7b5fd0]/20 via-transparent to-[#1fb487]/20 blur-xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(90,60,190,0.16)] transition-all">
              {/* Card Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#8c75e0] to-[#6a4fc0] px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/20 text-xs font-black">
                    V
                  </span>
                  <span className="text-sm sm:text-base font-extrabold tracking-tight">
                    Journal Voucher
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs opacity-90">
                  JV-2026-0812
                </span>
              </div>

              {/* Body Content */}
              <div className="relative px-4 pb-3 pt-2 text-[12px] sm:text-[13px] text-slate-600">
                {/* Step 0: Transaction party */}
                <Row on={active >= 0} className="border-b border-dashed border-slate-200 py-2">
                  <div>
                    <span className="block text-slate-500 text-[11px]">Party / Account</span>
                    <b className="text-slate-900 font-bold">Sharma Traders (Invoice #1042)</b>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Mode: HDFC UPI
                  </span>
                </Row>

                {/* Step 1: Double Entry Split */}
                <div className="border-b border-dashed border-slate-200 py-2 space-y-1">
                  <Row on={active >= 1} className="py-[2px]">
                    <span className="text-slate-700 font-mono">Dr. Bank Account (HDFC)</span>
                    <span className="font-mono font-semibold text-emerald-600">+₹25,000</span>
                  </Row>
                  <Row on={active >= 1} delay={80} className="py-[2px]">
                    <span className="text-slate-700 font-mono">Cr. Sales Revenue A/C</span>
                    <span className="font-mono font-semibold text-purple-700">-₹25,000</span>
                  </Row>
                </div>

                {/* Step 2: Daybook Posting */}
                <Row on={active >= 2} className="py-2">
                  <span className="flex items-center gap-1.5">
                    <span className="rounded bg-[#7b5fd0]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#7b5fd0]">
                      Daybook
                    </span>
                    Auto-Posted
                  </span>
                  <span className="font-mono font-semibold text-[#7b5fd0]">Voucher #0812</span>
                </Row>

                {/* Step 2: Voucher Total */}
                <Row on={active >= 2} delay={100} className="rounded-xl bg-[#e3f8f0] px-3 py-2 my-1">
                  <span className="font-bold text-slate-900">Voucher Total</span>
                  <span ref={amountRef} className="font-mono text-base sm:text-lg font-black text-[#14916c]">
                    ₹0
                  </span>
                </Row>

                {/* Step 3: Bank statement pair */}
                <Row on={active >= 3} className="pt-2">
                  <span>Bank Reconciliation</span>
                  <b className="rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 font-mono text-[11px]">
                    UPI Ref: 628109 · Matched
                  </b>
                </Row>

                {/* Step 4: Audit Status */}
                <Row on={active >= 4} className="pt-2">
                  <span>Audit Trail</span>
                  <b className="rounded bg-purple-50 text-purple-700 px-2 py-0.5 text-[11px]">
                    CA Ledger Seal · Immutable
                  </b>
                </Row>

                {/* Stamps */}
                {active >= 2 && active < 5 && (
                  <div
                    key="balanced"
                    className="txn-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-lg border-2 border-[#1fb487] bg-white px-3 py-1 text-sm sm:text-base font-black tracking-wider text-[#1fb487] shadow-md"
                  >
                    BALANCED
                  </div>
                )}
                {active >= 5 && (
                  <div
                    key="audited"
                    className="txn-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-xl border-[3px] border-[#1fb487] bg-white px-4 py-1 text-base sm:text-xl font-black tracking-wider text-[#1fb487] shadow-lg"
                  >
                    AUDITED
                  </div>
                )}
              </div>

              {/* Bottom Verification Pill */}
              <div className="bg-slate-50 border-t border-slate-100 px-4 py-2.5 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 text-purple-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>{STEPS[active].pillHighlight}</span>
                </div>
                <span className="font-mono text-slate-400 font-bold text-[10px]">
                  {active + 1}/{N}
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Descriptions & Step Indicators */}
          <div className="relative w-full h-[90px] sm:h-[95px] md:h-[520px] order-3 mt-1 md:mt-0">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = active === idx;
              return (
                <div
                  key={step.step || idx}
                  data-txn-desc
                  className={`absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-[360px] mx-auto md:mx-0 space-y-1 sm:space-y-2 md:space-y-3 transition-all duration-300 ease-out text-center md:text-left ${
                    isActive
                      ? "opacity-100 pointer-events-auto visible scale-100"
                      : "opacity-0 pointer-events-none invisible scale-95"
                  }`}
                >
                  <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-xl bg-purple-100/70 border border-purple-200/60 text-purple-800 text-[11px] md:text-xs font-bold">
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600" />
                    <span>Capability {step.step}</span>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal line-clamp-2 md:line-clamp-none">
                    {step.description}
                  </p>

                  <div className="pt-0.5 md:pt-1 hidden sm:flex items-center justify-center md:justify-start gap-2 text-[11px] md:text-xs font-bold text-[#877EFC]">
                    <span>✓ Automated in 0.12s</span>
                    <span>•</span>
                    <span>100% Mathematically Balanced</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical Progress Bar */}
        <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-24 w-[3px] rounded-full overflow-hidden bg-slate-200">
          <div
            ref={barRef}
            className="w-full origin-top rounded-full transition-transform bg-[#6d28d9]"
            style={{
              height: "100%",
              transform: "scaleY(0)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
