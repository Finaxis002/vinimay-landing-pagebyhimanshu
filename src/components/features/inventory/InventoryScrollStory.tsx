"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShoppingBag,
  ScanBarcode,
  Boxes,
  Receipt,
  AlertTriangle,
  ShieldCheck,
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
    icon: ShoppingBag,
    title: "Issue Purchase Order",
    description: "Order stock from supplier with locked wholesale pricing and delivery terms.",
  },
  {
    step: "02",
    icon: ScanBarcode,
    title: "Scan Barcodes at Inwarding",
    description: "Scan product batches at warehouse dock. Shelf locations assigned automatically.",
  },
  {
    step: "03",
    icon: Boxes,
    title: "Live Stock Level Updated",
    description: "Available inventory counts instantly update across all godowns and outlets.",
  },
  {
    step: "04",
    icon: Receipt,
    title: "Instant Sales Deduction",
    description: "POS bill or customer invoice generated. Sold items deduct immediately.",
  },
  {
    step: "05",
    icon: AlertTriangle,
    title: "Low Stock Reorder Trigger",
    description: "Safety threshold reached. System generates purchase requisition automatically.",
  },
  {
    step: "06",
    icon: ShieldCheck,
    title: "Reconciled & Audited",
    description: "Physical shelf count matches recorded tally with 99.4% audit accuracy.",
  },
];

const N = STEPS.length;
const BASE_STOCK = 12400;
const INWARD_STOCK = 12450;
const POST_SALE_STOCK = 12435;

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

export default function InventoryScrollStory({
  offsetMobile = 72,
  offsetDesktop = 100,
}: {
  offsetMobile?: number;
  offsetDesktop?: number;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const stockRef = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

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

        if (reduce) {
          setReduced(true);
          setActive(N - 1);
          return;
        }
        setReduced(false);

        const top = desktop ? offsetDesktop : offsetMobile;
        const factor = desktop ? 0.45 : 0.35;

        const st = ScrollTrigger.create({
          trigger: section,
          start: `top top+=${top}`,
          end: () => `+=${window.innerHeight * factor * N}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setActive(Math.min(N - 1, Math.floor(self.progress * N)));
          },
        });
        triggerRef.current = st;

        return () => {
          triggerRef.current = null;
        };
      }
    );

    return () => mm.revert();
  }, [offsetDesktop, offsetMobile]);

  // Live stock counter interpolation
  useEffect(() => {
    const el = stockRef.current;
    if (!el) return;
    let target = BASE_STOCK;
    if (active >= 2 && active < 3) target = INWARD_STOCK;
    if (active >= 3) target = POST_SALE_STOCK;

    if (reduced) {
      el.textContent = `${target.toLocaleString("en-IN")} units`;
      return;
    }
    const o = { v: BASE_STOCK };
    const tween = gsap.to(o, {
      v: target,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(o.v).toLocaleString("en-IN")} units`;
      },
    });
    return () => {
      tween.kill();
    };
  }, [active, reduced]);

  const goTo = (i: number) => {
    const st = triggerRef.current;
    if (st) {
      const y = st.start + ((i + 0.5) / N) * (st.end - st.start);
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      setActive(i);
    }
  };

  const handleNextStep = () => {
    const next = (active + 1) % N;
    goTo(next);
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="inv-story-title"
      className="relative overflow-hidden bg-[#fafafa] pt-3 sm:pt-10 pb-4 sm:pb-14"
    >
      <style>{`
        @keyframes inv-stamp{0%{opacity:0;transform:scale(2.4) rotate(-24deg)}100%{opacity:1;transform:scale(1) rotate(-12deg)}}
        @keyframes inv-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
        .inv-stamp{transform:rotate(-12deg);animation:inv-stamp .5s cubic-bezier(.2,1.5,.4,1) both}
        .inv-up{animation:inv-up .45s ease both}
        @media (prefers-reduced-motion:reduce){.inv-stamp,.inv-up{animation:none}}
      `}</style>

      {/* Ambient background blur */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#9a88e3]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#1fb487]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-6 lg:gap-x-14 lg:gap-y-6 items-start">
          {/* Section Header */}
          <header className="text-center lg:text-left lg:col-start-1 lg:row-start-1">
            <span className="inline-block rounded-full border border-[#1fb487]/40 bg-[#e3f8f0] px-3 py-1 text-[11px] font-bold text-[#1fb487]">
              How it works
            </span>
            <h2
              id="inv-story-title"
              className="mt-2 text-2xl sm:text-3xl lg:text-[40px] font-black leading-tight tracking-tight text-slate-900"
            >
              Watch stock move in real time
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-slate-500 max-w-md mx-auto lg:mx-0">
              Scroll through the six steps and see how Vinimay synchronizes inventory from dock to shelf.
            </p>
          </header>

          {/* Interactive Card: Top on Mobile, Right on Desktop */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-start w-full pt-1 lg:pt-2">
            <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#7b5fd0]/20 via-transparent to-[#1fb487]/20 blur-xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(90,60,190,0.16)] transition-all">
                {/* Purple Top Bar */}
                <div className="flex items-center justify-between bg-gradient-to-r from-[#8c75e0] to-[#6a4fc0] px-4 py-2.5 sm:py-3 text-white">
                  <div className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/20 text-xs font-black">
                      V
                    </span>
                    <span className="text-sm sm:text-base font-extrabold tracking-tight">
                      Stock Ledger
                    </span>
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs opacity-90">
                    SKU-WHEY-2KG
                  </span>
                </div>

                {/* Body Content */}
                <div className="relative px-4 pb-3 pt-2 text-[12px] sm:text-[13px] text-slate-600">
                  {/* Step 0: Vendor PO */}
                  <Row on={active >= 0} className="border-b border-dashed border-slate-200 py-2">
                    <span>Vendor PO</span>
                    <b className="text-slate-900 font-bold">PO-1042 · ABC Nutrition</b>
                  </Row>

                  {/* Step 1: Barcode Scan */}
                  <Row on={active >= 1} className="border-b border-dashed border-slate-200 py-1.5">
                    <span>EAN-13 Scanned</span>
                    <span className="font-mono font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      890103092812 (Dock 3)
                    </span>
                  </Row>

                  {/* Step 2: Live Stock Count */}
                  <Row on={active >= 2} className="rounded-xl bg-[#e3f8f0] px-3 py-2 my-1.5">
                    <span className="font-bold text-slate-900">Available Stock</span>
                    <span ref={stockRef} className="font-mono text-base sm:text-lg font-black text-[#14916c]">
                      12,400 units
                    </span>
                  </Row>

                  {/* Step 3: Sales Deduction */}
                  <Row on={active >= 3} className="border-b border-dashed border-slate-200 py-1.5">
                    <span>Recent Deduction</span>
                    <span className="font-mono font-semibold text-rose-600">
                      -15 units (Invoice #2041)
                    </span>
                  </Row>

                  {/* Step 4: Reorder Alert */}
                  <Row on={active >= 4} className="pt-2">
                    <span>Reorder Trigger</span>
                    <b className="rounded bg-amber-50 text-amber-700 border border-amber-200/60 px-2 py-0.5">
                      Auto-PO Ready (Min: 20 units)
                    </b>
                  </Row>

                  {/* Stamps */}
                  {active >= 2 && active < 5 && (
                    <div
                      key="synced"
                      className="inv-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-lg border-2 border-[#1fb487] bg-white px-3 py-1 text-sm sm:text-base font-black tracking-wider text-[#1fb487] shadow-md"
                    >
                      SYNCED
                    </div>
                  )}
                  {active >= 5 && (
                    <div
                      key="audited"
                      className="inv-stamp absolute right-3 sm:right-5 top-12 z-10 rounded-xl border-[3px] border-[#1fb487] bg-white px-4 py-1 text-base sm:text-xl font-black tracking-wider text-[#1fb487] shadow-lg"
                    >
                      AUDITED
                    </div>
                  )}
                </div>

                {/* Footer Action */}
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

          {/* Steps Navigation */}
          <div className="lg:col-start-1 lg:row-start-2 lg:self-start w-full">
            {/* Desktop Step Accordion Cards */}
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
                          ? "inv-up border-[#7b5fd0]/30 bg-white shadow-[0_10px_25px_rgba(90,60,190,0.1)]"
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

            {/* Mobile View: Active Card + Progress Rail */}
            <div className="lg:hidden w-full max-w-[380px] sm:max-w-[420px] mx-auto space-y-3">
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
                aria-label="Inventory steps navigation"
                className="relative flex items-center justify-between px-2 pt-1 pb-1"
              >
                <span className="absolute left-6 right-6 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-slate-200" />
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
