"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcHeading from "@/components/common/ArcHeading";

export default function FeatureBentoGrid() {
  const gridRef = useRef<HTMLElement | null>(null);

  // Tile 1 state: Automatic tax switch
  const [isInterState, setIsInterState] = useState(false);

  // Tile 2 state: HSN auto-typing
  const [hsnText, setHsnText] = useState("8528");
  const [isHsnResultVisible, setIsHsnResultVisible] = useState(true);

  // Tile 4 state: Download progress
  const [downloadPct, setDownloadPct] = useState(100);

  // Tile 6 state: 12s invoice creation
  const [secondsCount, setSecondsCount] = useState(12);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Tax split loop
      const taxTl = gsap.timeline({ repeat: -1, repeatDelay: 2.2, paused: true });
      taxTl
        .to({}, { duration: 1.5 })
        .add(() => setIsInterState(true))
        .to({}, { duration: 2.2 })
        .add(() => setIsInterState(false));

      ScrollTrigger.create({
        trigger: ".bento-tax-tile",
        start: "top 85%",
        end: "bottom 15%",
        onToggle: (self) => {
          if (self.isActive) taxTl.play();
          else taxTl.pause();
        },
      });

      // 2. HSN code typing simulation
      const hsnTarget = "8528";
      const hsnObj = { n: 0 };
      const hsnTl = gsap.timeline({ repeat: -1, repeatDelay: 2.0, paused: true });

      hsnTl
        .add(() => {
          setHsnText("");
          setIsHsnResultVisible(false);
          hsnObj.n = 0;
        })
        .to(hsnObj, {
          n: 4,
          duration: 1.0,
          ease: "none",
          onUpdate: () => {
            setHsnText(hsnTarget.slice(0, Math.round(hsnObj.n)));
          },
        })
        .add(() => setIsHsnResultVisible(true), "+=0.2")
        .to({}, { duration: 2.0 });

      ScrollTrigger.create({
        trigger: ".bento-hsn-tile",
        start: "top 85%",
        end: "bottom 15%",
        onToggle: (self) => {
          if (self.isActive) hsnTl.play();
          else hsnTl.pause();
        },
      });

      // 3. Template stack fan-out
      gsap.to(".template-card-fan", {
        rotation: (i) => (i - 1) * 14,
        x: (i) => (i - 1) * 28,
        duration: 1.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".bento-template-tile",
          start: "top 85%",
        },
      });

      // 4. Download progress bar
      const progObj = { p: 0 };
      const progTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2, paused: true });
      progTl
        .add(() => setDownloadPct(0))
        .to(progObj, {
          p: 100,
          duration: 1.8,
          ease: "power1.inOut",
          onUpdate: () => setDownloadPct(Math.round(progObj.p)),
        })
        .to({}, { duration: 1.5 });

      ScrollTrigger.create({
        trigger: ".bento-pdf-tile",
        start: "top 85%",
        end: "bottom 15%",
        onToggle: (self) => {
          if (self.isActive) progTl.play();
          else progTl.pause();
        },
      });

      // 5. Invoice speed counter (12s)
      const secObj = { s: 0 };
      ScrollTrigger.create({
        trigger: ".bento-speed-tile",
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(secObj, {
            s: 12,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => setSecondsCount(Math.round(secObj.s)),
          });
        },
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={gridRef} className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="inline-block text-xs font-bold text-[#1fb487] bg-[#e3f8f0] border border-[#1fb487]/40 rounded-full px-3.5 py-1 uppercase tracking-wide">
          Key Features
        </span>
        <ArcHeading
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mt-3 mb-2"
        >
          Built for billing, not paperwork
        </ArcHeading>
        <p className="text-slate-500 text-sm sm:text-base">
          Interactive tools designed to automate every step of Indian tax compliance.
        </p>
      </div>

      {/* Bento Grid: Mobile 1-col, Tablet 2-col, Desktop 4-col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
        {/* Tile 1: Automatic Tax Calculation (2x2 on Desktop) */}
        <div className="bento-tax-tile sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-sm relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #9a88e3 0%, #6a4fc0 100%)",
          }}
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full inline-block mb-3 border border-white/20">
              Tax Engine
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
              Automatic Tax Calculation
            </h3>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-sm">
              CGST, SGST and IGST switch on their own, based on where your customer is located.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 font-mono">
              ₹4,518
            </div>
            <p className="text-xs text-white/80 font-medium">
              {isInterState
                ? "Different state: IGST (18%)"
                : "Same state: CGST (9%) + SGST (9%)"}
            </p>

            <div className="flex gap-2 h-14 mt-4">
              {isInterState ? (
                <div className="flex-1 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center font-bold text-sm border border-white/30 animate-fadeIn">
                  IGST 18% (Inter-State)
                </div>
              ) : (
                <>
                  <div className="flex-1 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center font-bold text-sm border border-white/30 animate-fadeIn">
                    CGST 9%
                  </div>
                  <div className="flex-1 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center font-bold text-sm border border-white/30 animate-fadeIn">
                    SGST 9%
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Tile 2: HSN & SAC Management (Span 2 on Desktop) */}
        <div className="bento-hsn-tile sm:col-span-2 lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full inline-block mb-2 border border-purple-100">
              Smart Directory
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              HSN &amp; SAC Management
            </h3>
            <p className="text-xs text-slate-500">
              Type or search any code and see its official GST slab instantly.
            </p>
          </div>

          <div className="mt-5 space-y-2">
            <div className="border border-[#7b5fd0] rounded-xl px-3 py-2 text-sm font-mono font-bold text-slate-800 bg-purple-50/40 min-h-[40px] flex items-center">
              <span>{hsnText || "\u00a0"}</span>
              <span className="w-1.5 h-4 bg-[#7b5fd0] ml-1 animate-pulse" />
            </div>
            <div
              className={`bg-[#e3f8f0] text-[#1fb487] rounded-xl px-3 py-2 text-xs font-bold transition-all duration-300 ${
                isHsnResultVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              8528 · Monitors · GST 18%
            </div>
          </div>
        </div>

        {/* Tile 3: Invoice Templates */}
        <div className="bento-template-tile bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Invoice Templates
            </h3>
            <p className="text-xs text-slate-500">
              Add your logo, colors, and signature.
            </p>
          </div>

          <div className="relative h-24 mt-4 flex items-end justify-center">
            <div className="template-card-fan absolute w-16 h-20 bg-[#7b5fd0] rounded-lg shadow-sm" />
            <div className="template-card-fan absolute w-16 h-20 bg-[#1fb487] rounded-lg shadow-sm" />
            <div className="template-card-fan absolute w-16 h-20 bg-[#e8a33d] rounded-lg shadow-sm" />
          </div>
        </div>

        {/* Tile 4: PDF & Print */}
        <div className="bento-pdf-tile bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              PDF &amp; Print
            </h3>
            <p className="text-xs text-slate-500">
              Download or share in one click.
            </p>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <b className="text-slate-900 font-bold font-mono">{downloadPct}%</b>
              <span className="text-[11px] text-slate-400 font-mono">INV-2041.pdf</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-[#7b5fd0] transition-all duration-100 rounded-full"
                style={{ width: `${downloadPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tile 5: Payment Tracking (Span 2 on Desktop) */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Payment Tracking
            </h3>
            <p className="text-xs text-slate-500">
              Paid, pending and outstanding invoices in one visual bar.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-slate-100">
              <div className="h-full bg-[#1fb487] rounded-l-full" style={{ flex: 60 }} />
              <div className="h-full bg-[#e8a33d]" style={{ flex: 25 }} />
              <div className="h-full bg-[#e5484d] rounded-r-full" style={{ flex: 15 }} />
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 font-medium mt-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1fb487]" /> Paid 60%
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#e8a33d]" /> Pending 25%
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#e5484d]" /> Overdue 15%
              </span>
            </div>
          </div>
        </div>

        {/* Tile 6: GST Invoice Creation */}
        <div className="bento-speed-tile sm:col-span-2 lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Fast Invoice Creation
            </h3>
            <p className="text-xs text-slate-500">
              From customer selection to finished tax bill in record time.
            </p>
          </div>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-black text-[#7b5fd0] font-mono leading-none">
              {secondsCount}s
            </span>
            <span className="text-xs text-slate-400 font-semibold">average speed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
