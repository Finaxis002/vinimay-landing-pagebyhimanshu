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
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface StoryStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: StoryStep[] = [
  {
    step: "01",
    icon: UserPlus,
    title: "Add your customer",
    description: "Pick or type a customer. Their GSTIN is saved for next time.",
  },
  {
    step: "02",
    icon: PackagePlus,
    title: "Add products or services",
    description:
      "Choose items from your catalogue with saved price and quantity.",
  },
  {
    step: "03",
    icon: Percent,
    title: "GST and HSN/SAC, applied",
    description: "Codes and CGST, SGST or IGST are filled in automatically.",
  },
  {
    step: "04",
    icon: FileCheck2,
    title: "Generate the invoice",
    description: "One click gives you a professional, compliant GST invoice.",
  },
  {
    step: "05",
    icon: Share2,
    title: "Share or print the PDF",
    description: "Send on WhatsApp or email, or print in A4 or thermal.",
  },
  {
    step: "06",
    icon: Wallet,
    title: "Track the payment",
    description: "See what is paid, pending or overdue at a glance.",
  },
];

const N = STEPS.length;
const TOTAL = 29618;
const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

/** A document row that fades and slides in once its step is reached. */
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
  offsetDesktop = 100, // Safe top offset below fixed navbar on desktop
}: {
  offsetMobile?: number;
  offsetDesktop?: number;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const totalRef = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  /* ScrollTrigger Pinning on Desktop, Natural Height on Mobile */
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        reduce: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
      },
      (ctx) => {
        const { reduce, desktop } = ctx.conditions as {
          reduce: boolean;
          desktop: boolean;
          mobile: boolean;
        };

        setIsDesktop(desktop);

        // Reduced motion: no pinning, show full invoice
        if (reduce) {
          setReduced(true);
          setActive(N - 1);
          return;
        }

        setReduced(false);

        if (desktop) {
          // On Desktop: Pin section during scroll with comfortable top clearance
          const perStep = window.innerHeight * 0.45;
          const st = ScrollTrigger.create({
            trigger: section,
            start: `top top+=${offsetDesktop}`,
            end: () => `+=${perStep * N}`,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const step = Math.min(N - 1, Math.floor(self.progress * N));
              setActive(step);
            },
          });
          triggerRef.current = st;

          return () => {
            triggerRef.current = null;
          };
        } else {
          // On Mobile: NO PINNING! No massive 3000px empty spacer.
          // Clean auto-advance timer when in view if user doesn't tap
          triggerRef.current = null;
        }
      }
    );

    return () => mm.revert();
  }, [offsetDesktop]);

  /* Total counts up when the GST step is reached. */
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
      duration: 0.9,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = inr(o.v);
      },
    });
    return () => {
      tween.kill();
    };
  }, [active >= 2, reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Tap a step: scroll on desktop, or switch active step directly */
  const goTo = (i: number) => {
    setActive(i);
    const st = triggerRef.current;
    if (st && isDesktop) {
      const y = st.start + ((i + 0.5) / N) * (st.end - st.start);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNextStep = () => {
    const next = (active + 1) % N;
    goTo(next);
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="vm-story-title"
      className="relative overflow-hidden bg-[#fafafa] pt-6 sm:pt-10 pb-8 sm:pb-14"
    >
      <style>{`
        @keyframes vm-stamp{0%{opacity:0;transform:scale(2.4) rotate(-24deg)}100%{opacity:1;transform:scale(1) rotate(-12deg)}}
        @keyframes vm-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
        .vm-stamp{transform:rotate(-12deg);animation:vm-stamp .5s cubic-bezier(.2,1.5,.4,1) both}
        .vm-up{animation:vm-up .45s ease both}
        @media (prefers-reduced-motion:reduce){.vm-stamp,.vm-up{animation:none}}
      `}</style>

      {/* Soft background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#9a88e3]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#1fb487]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Grid: Desktop 2-column, Mobile clean compact stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-6 lg:gap-x-14 lg:gap-y-6 items-start">
          {/* ---------- Section Header ---------- */}
          <header className="text-center lg:text-left lg:col-start-1 lg:row-start-1">
            <span className="inline-block rounded-full border border-[#1fb487]/40 bg-[#e3f8f0] px-3 py-1 text-[11px] font-bold text-[#1fb487]">
              How it works
            </span>
            <h2
              id="vm-story-title"
              className="mt-2 text-2xl sm:text-3xl lg:text-[40px] font-black leading-tight tracking-tight text-slate-900"
            >
              Watch an invoice build itself
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-slate-500 max-w-md mx-auto lg:mx-0">
              {isDesktop
                ? "Scroll through the six steps and see the invoice take shape."
                : "See how an invoice comes together step by step."}
            </p>
          </header>

          {/* ---------- Invoice Card (Top on Mobile, Right on Desktop) ---------- */}
          {/* Sits safely with pt-2 lg:pt-3, NEVER cut off by navbar */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-start w-full pt-1 lg:pt-2">
            <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px]">
              {/* Subtle ambient glow behind invoice */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#7b5fd0]/20 via-transparent to-[#1fb487]/20 blur-xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(90,60,190,0.16)] transition-all">
                {/* Top Purple Bar - FULLY VISIBLE & CLEAR */}
                <div className="flex items-center justify-between bg-gradient-to-r from-[#8c75e0] to-[#6a4fc0] px-4 py-2.5 sm:py-3 text-white">
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

                {/* Body Content */}
                <div className="relative px-4 pb-3 pt-2 text-[12px] sm:text-[13px] text-slate-600">
                  {/* Step 0: Customer */}
                  <Row
                    on={active >= 0}
                    className="border-b border-dashed border-slate-200 py-2"
                  >
                    <span>Billed to</span>
                    <b className="text-slate-900 font-bold">Sharma Traders</b>
                  </Row>

                  {/* Step 1: Products */}
                  <div className="border-b border-dashed border-slate-200 py-1.5">
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
                      <span className="rounded bg-[#7b5fd0]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#7b5fd0]">
                        GST 18%
                      </span>
                      CGST + SGST
                    </span>
                    <span className="font-mono font-semibold text-[#7b5fd0]">
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
                    <b className="rounded bg-[#7b5fd0]/10 px-2 py-0.5 text-[#7b5fd0]">
                      WhatsApp · PDF
                    </b>
                  </Row>

                  {/* Stamps: GENERATED and PAID */}
                  {active >= 3 && active < 5 && (
                    <div
                      key="gen"
                      className="vm-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-lg border-2 border-[#1fb487] bg-white px-3 py-1 text-sm sm:text-base font-black tracking-wider text-[#1fb487] shadow-md"
                    >
                      GENERATED
                    </div>
                  )}
                  {active >= 5 && (
                    <div
                      key="paid"
                      className="vm-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-xl border-[3px] border-[#1fb487] bg-white px-4 py-1 text-base sm:text-xl font-black tracking-wider text-[#1fb487] shadow-lg"
                    >
                      PAID
                    </div>
                  )}
                </div>

                {/* Footer Action inside invoice */}
                <div className="bg-slate-50/80 border-t border-slate-100 px-4 py-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Step {active + 1} of 6</span>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="font-bold text-[#7b5fd0] hover:text-[#5d44b0] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{active === N - 1 ? "Replay" : "Next step"}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Steps Navigation ---------- */}
          {/* Desktop: 6 Accordion Step Cards */}
          {/* Mobile: Focused Active Card + Compact Connected Progress Rail (NO 3000px GAP) */}
          <div className="lg:col-start-1 lg:row-start-2 lg:self-start w-full">
            {/* Desktop Step Cards */}
            <ol className="hidden lg:block space-y-2">
              {STEPS.map((s, i) => {
                const on = i === active;
                const Icon = s.icon;
                return (
                  <li key={s.step}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={on ? "step" : undefined}
                      className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition-all duration-300 cursor-pointer ${
                        on
                          ? "vm-up border-[#7b5fd0]/30 bg-white shadow-[0_10px_25px_rgba(90,60,190,0.1)]"
                          : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                          on
                            ? "bg-gradient-to-br from-[#8c75e0] to-[#6a4fc0] text-white shadow-md shadow-purple-500/20"
                            : i < active
                            ? "bg-[#7b5fd0]/15 text-[#7b5fd0]"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[11px] font-semibold text-[#7b5fd0]">
                          {s.step} / 0{N}
                        </span>
                        <span className="block text-base font-bold leading-snug text-slate-900">
                          {s.title}
                        </span>
                        <span
                          className={`grid transition-[grid-template-rows] duration-500 ${
                            on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <span className="overflow-hidden">
                            <span className="block pt-1 text-[13px] leading-relaxed text-slate-500">
                              {s.description}
                            </span>
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Mobile View: Active Card + Progress Rail (Clean, compact, 0 awkward gap) */}
            <div className="lg:hidden w-full max-w-[380px] sm:max-w-[420px] mx-auto space-y-3">
              {/* Active Step Card */}
              <div className="bg-white border border-[#7b5fd0]/20 rounded-2xl p-3.5 shadow-sm flex items-start gap-3">
                {(() => {
                  const CurrentIcon = STEPS[active].icon;
                  return (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#8c75e0] to-[#6a4fc0] text-white shadow-xs">
                        <CurrentIcon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] font-bold text-[#7b5fd0]">
                          STEP {STEPS[active].step} OF 0{N}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          {STEPS[active].title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                          {STEPS[active].description}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Connected Mobile Progress Rail */}
              <nav
                aria-label="Invoice steps navigation"
                className="relative flex items-center justify-between px-2 pt-1 pb-1"
              >
                {/* Background Track Line */}
                <span className="absolute left-6 right-6 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-slate-200" />
                {/* Active Progress Gradient Line */}
                <span
                  className="absolute left-6 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7b5fd0] to-[#1fb487] transition-[width] duration-500"
                  style={{
                    width: `calc((100% - 3rem) * ${active / (N - 1)})`,
                  }}
                />
                {STEPS.map((s, i) => {
                  const StepIcon = s.icon;
                  const isCurrent = i === active;
                  const isPassed = i < active;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Step ${i + 1}: ${s.title}`}
                      className={`relative grid h-8 w-8 place-items-center rounded-full border transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? "scale-110 border-transparent bg-gradient-to-br from-[#8c75e0] to-[#6a4fc0] text-white shadow-md shadow-purple-500/30"
                          : isPassed
                          ? "border-[#7b5fd0]/30 bg-[#efeafc] text-[#7b5fd0]"
                          : "border-slate-200 bg-white text-slate-400"
                      }`}
                    >
                      <StepIcon className="h-3.5 w-3.5" strokeWidth={2} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
