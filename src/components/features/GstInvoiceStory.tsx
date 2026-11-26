"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UserPlus,
  PackagePlus,
  Percent,
  FileCheck2,
  Share2,
  Wallet,
  Printer,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import GstInvoiceMockupSheet from "@/components/features/GstInvoiceMockupSheet";
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
    icon: UserPlus,
    badge: "CUSTOMER DIRECTORY",
    title: "Add your customer",
    description:
      "Pick or type a customer. Their GSTIN, billing state, and trade details are saved automatically for all future bills.",
    pillHighlight: "Customer saved & GSTIN verified ✓",
  },
  {
    step: "02",
    icon: PackagePlus,
    badge: "PRODUCT CATALOGUE",
    title: "Add products or services",
    description:
      "Select items from your catalogue with pre-saved pricing, HSN codes, and unit measures for instant row population.",
    pillHighlight: "Live inventory & price populated ✓",
  },
  {
    step: "03",
    icon: Percent,
    badge: "TAX AUTOMATION",
    title: "GST and HSN/SAC, applied",
    description:
      "Vinimay automatically detects intra-state vs inter-state supply to split CGST + SGST or apply IGST with 100% accuracy.",
    pillHighlight: "18% GST (CGST + SGST) computed ✓",
  },
  {
    step: "04",
    icon: FileCheck2,
    badge: "STATUTORY COMPLIANCE",
    title: "Generate the invoice",
    description:
      "One click creates a fully compliant Rule 46 tax invoice complete with sequential financial-year numbering and digital validation.",
    pillHighlight: "Rule 46 verified • Invoice Generated ✓",
  },
  {
    step: "05",
    icon: Share2,
    badge: "INSTANT DISPATCH",
    title: "Share or print the PDF",
    description:
      "Dispatch professional PDF invoices directly to your client's WhatsApp or email, or print immediately on A4 or thermal rolls.",
    pillHighlight: "Dispatched via WhatsApp Cloud API ✓",
  },
  {
    step: "06",
    icon: Wallet,
    badge: "PAYMENT RECONCILIATION",
    title: "Track the payment",
    description:
      "Monitor payments in real-time. Dynamic UPI QR codes reconcile settlements straight into your customer ledger.",
    pillHighlight: "Payment settled & ledger updated ✓",
  },
  {
    step: "07",
    icon: Printer,
    badge: "PRINT & E-INVOICE SHEET",
    title: "Official Print-Ready Tax Invoice",
    description:
      "Generate and print the full statutory A4 tax invoice complete with itemized HSN codes, buyer & consignee splits, bank payout details, and authorised digital signature.",
    pillHighlight: "A4 Print & E-Invoice Sheet Ready ✓",
  },
];

const N = STEPS.length;
const TOTAL = 29618;
const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

/** Smooth animated invoice row */
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

export default function GstInvoiceStory({
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
  const totalRef = useRef<HTMLSpanElement | null>(null);

  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  // GSAP Pinned Scrub ScrollTrigger matching the Collections Prototype
  useEffect(() => {
    if (typeof window === "undefined") return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const pinEl = pinRef.current;
    const stageEl = stageRef.current;
    const listEl = listRef.current;
    if (!pinEl || !stageEl || !listEl) return;

    const titles = gsap.utils.toArray<HTMLElement>("[data-story-title]", pinEl);
    const descs = gsap.utils.toArray<HTMLElement>("[data-story-desc]", pinEl);

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

        // Initial states
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
              const currentStep = Math.min(
                N - 1,
                Math.floor(self.progress * N)
              );
              setActive(currentStep);
            },
          },
        });

        tl.to({}, { duration: 0.5 }); // initial hold

        for (let i = 1; i < N; i++) {
          const label = `step_${i}`;

          tl.addLabel(label, ">")
            .to(listEl, { y: -i * stepHeight, duration: 1 }, label)
            .to(titles[i - 1], { color: "#94a3b8", filter: "blur(2.5px)", opacity: 0.45, duration: 0.6 }, label)
            .to(titles[i], { color: "#0f172a", filter: "blur(0px)", opacity: 1, duration: 0.6 }, `${label}+=0.3`)
            .to({}, { duration: 0.5 });
        }

        // 3D Pointer Move Tilt only on desktop with hover
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

  // Total counter animation at GST step (active >= 2)
  useEffect(() => {
    const el = totalRef.current;
    if (!el) return;
    if (active < 2) {
      el.textContent = inr(0);
      return;
    }
    if (reduced) {
      el.textContent = inr(TOTAL);
      return;
    }
    const o = { v: 0 };
    const tween = gsap.to(o, {
      v: TOTAL,
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
      id="invoice-story"
      aria-labelledby="story-title"
      className={`relative w-full bg-slate-50/70 border-t border-slate-200/80 ${className}`}
    >
      <style>{`
        @keyframes vm-stamp{0%{opacity:0;transform:scale(2.4) rotate(-24deg)}100%{opacity:1;transform:scale(1) rotate(-12deg)}}
        .vm-stamp{transform:rotate(-12deg);animation:vm-stamp .5s cubic-bezier(.2,1.5,.4,1) both}
        @media (prefers-reduced-motion:reduce){.vm-stamp{animation:none}}
      `}</style>

      {/* Section Header with WordmarkArc Background */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-4 text-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/90 text-purple-700 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Interactive GST Workflow</span>
          </div>
          <div>
            <ArcHeading
              id="story-title"
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto font-bold"
            >
              Watch an invoice build itself
            </ArcHeading>
          </div>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Scroll through the seven steps and experience how Vinimay automates every statutory calculation in real time.
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-purple-600 animate-bounce">
            Scroll to explore ↓
          </p>
        </div>
      </div>

      {/* PINNED 3-COLUMN INTERACTIVE STAGE (Mobile Viewport Optimized) */}
      <div
        ref={pinRef}
        className="relative h-[100dvh] min-h-[500px] w-full overflow-hidden flex items-center justify-center py-2 md:py-0"
      >
        <div className="mx-auto h-full max-w-[1340px] w-full px-4 sm:px-8 md:px-12 flex flex-col md:grid md:grid-cols-[1.1fr_auto_1.1fr] md:gap-8 lg:gap-12 items-center justify-center">
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
                  data-story-title
                  style={{
                    filter: idx === 0 ? "blur(0px)" : "blur(2.5px)",
                    opacity: idx === 0 ? 1 : 0.45,
                  }}
                  className="h-[54px] md:h-[140px] flex flex-col justify-center transition-all px-2 text-center md:text-left will-change-[filter,opacity]"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-0.5 md:mb-1">
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

          {/* Column 2: Center Stage with Live Animated Invoice & 3D Tilt */}
          <div
            ref={stageRef}
            className={`relative order-2 shrink-0 w-[min(90vw,350px)] sm:w-[390px] md:w-[430px] lg:w-[450px] my-2 md:my-0 transition-all ${
              active >= 6 ? "z-30" : "z-10"
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Ambient backlight glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-[#1fb487]/20 blur-xl"
            />

            {/* The Live Vinimay Invoice Card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(90,60,190,0.16)] transition-all">
              {/* Top Purple Brand Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#8c75e0] to-[#6a4fc0] px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/20 text-xs font-black">
                    V
                  </span>
                  <span className="text-sm sm:text-base font-extrabold tracking-tight">
                    Vinimay
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs opacity-90">
                  INV-2041
                </span>
              </div>

              {/* Invoice Body Content */}
              <div className="relative px-4 pb-3 pt-2 text-[12px] sm:text-[13px] text-slate-600">
                {/* Step 0: Customer */}
                <Row
                  on={active >= 0}
                  className="border-b border-dashed border-slate-200 py-2"
                >
                  <div>
                    <span className="block text-slate-500 text-[11px]">Billed to</span>
                    <b className="text-slate-900 font-bold">Sharma Traders</b>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    GSTIN 23ABCDE1234F1Z5
                  </span>
                </Row>

                {/* Step 1: Products */}
                <div className="border-b border-dashed border-slate-200 py-2">
                  {[
                    ['LED Monitor 24" × 2', "₹19,000"],
                    ["Wireless Keyboard × 3", "₹3,600"],
                    ["Installation × 1", "₹2,500"],
                  ].map(([name, amt], i) => (
                    <Row
                      key={name}
                      on={active >= 1}
                      delay={i * 80}
                      className="py-[3px]"
                    >
                      <span className="truncate text-slate-700">{name}</span>
                      <span className="font-mono font-semibold text-slate-900">
                        {amt}
                      </span>
                    </Row>
                  ))}
                </div>

                {/* Step 2: Taxes */}
                <Row on={active >= 2} className="py-2">
                  <span className="flex items-center gap-1.5">
                    <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                      GST 18%
                    </span>
                    CGST + SGST
                  </span>
                  <span className="font-mono font-semibold text-primary">
                    ₹4,518
                  </span>
                </Row>

                {/* Step 2: Grand Total */}
                <Row
                  on={active >= 2}
                  delay={100}
                  className="rounded-xl bg-[#e3f8f0] px-3 py-2 my-1"
                >
                  <span className="font-bold text-slate-900">Total</span>
                  <span
                    ref={totalRef}
                    className="font-mono text-base sm:text-lg font-black text-[#14916c]"
                  >
                    ₹0
                  </span>
                </Row>

                {/* Step 4: Shared via WhatsApp · PDF */}
                <Row on={active >= 4} className="pt-2">
                  <span>Shared via</span>
                  <b className="rounded bg-primary/10 px-2 py-0.5 text-primary">
                    WhatsApp · PDF
                  </b>
                </Row>

                {/* Stamp: GENERATED (Step 3 & 4) */}
                {active >= 3 && active < 5 && (
                  <div
                    key="gen"
                    className="vm-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-lg border-2 border-[#1fb487] bg-white px-3 py-1 text-sm sm:text-base font-black tracking-wider text-[#1fb487] shadow-md"
                  >
                    GENERATED
                  </div>
                )}

                {/* Stamp: PAID (Step 5) */}
                {active >= 5 && active < 6 && (
                  <div
                    key="paid"
                    className="vm-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-xl border-[3px] border-[#1fb487] bg-white px-4 py-1 text-base sm:text-xl font-black tracking-wider text-[#1fb487] shadow-lg"
                  >
                    PAID
                  </div>
                )}
              </div>

              {/* Floating Live Verification Badge (Bottom Pill) */}
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

            {/* The Full A4 Tax Invoice Sheet Slide-up (Step 07 after PAID) - Clean 3-Column Fit */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-40">
              <div
                className={`transition-all duration-700 ease-out transform ${
                  active >= 6
                    ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
                    : "translate-y-[110%] opacity-0 scale-95 pointer-events-none"
                } w-[92vw] sm:w-[460px] md:w-[520px] lg:w-[560px] max-w-[96vw] shrink-0`}
              >
                <GstInvoiceMockupSheet className="w-full shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/20" />
              </div>
            </div>
          </div>

          {/* Column 3: Descriptions & Step Indicators */}
          <div className="relative w-full h-[90px] sm:h-[95px] md:h-[520px] order-3 mt-1 md:mt-0 z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = active === idx;
              return (
                <div
                  key={step.step || idx}
                  data-story-desc
                  className={`absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-[360px] mx-auto md:mx-0 space-y-2 md:space-y-3 text-center md:text-left transition-all duration-300 ease-out ${
                    isActive
                      ? "opacity-100 pointer-events-auto visible scale-100"
                      : "opacity-0 pointer-events-none invisible scale-95"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-100/70 border border-purple-200/60 text-purple-800 text-xs font-bold">
                    <Icon className="w-4 h-4 text-purple-600" />
                    <span>Capability {step.step}</span>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-snug md:leading-relaxed font-normal">
                    {step.description}
                  </p>

                  <div className="pt-0.5 flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-primary">
                    <span>✓ Automated in 0.12s</span>
                    <span>•</span>
                    <span>Rule 46 Verified</span>
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
