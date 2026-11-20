"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OsmoRoll } from "../common/OsmoRoll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const getFeatureScatters = (isMobile: boolean) => [
  { x: 0, y: isMobile ? -300 : -450, rot: 0, scale: 0.35 },                         // Card 0: Straight Top
  { x: isMobile ? 280 : 550, y: isMobile ? -240 : -350, rot: 35, scale: 0.35 },    // Card 1: Top-Right
  { x: isMobile ? 320 : 650, y: isMobile ? 50 : 100, rot: -25, scale: 0.35 },      // Card 2: Far Right
  { x: isMobile ? 240 : 450, y: isMobile ? 280 : 450, rot: 25, scale: 0.35 },      // Card 3: Bottom-Right
  { x: isMobile ? -240 : -450, y: isMobile ? 280 : 450, rot: -25, scale: 0.35 },   // Card 4: Bottom-Left
  { x: isMobile ? -320 : -650, y: isMobile ? 50 : 100, rot: 25, scale: 0.35 },     // Card 5: Far Left
  { x: isMobile ? -280 : -550, y: isMobile ? -240 : -350, rot: -35, scale: 0.35 },  // Card 6: Top-Left
];

export default function FeaturesOrbital() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const totalCards = 7;

  const currentPosRef = useRef(0);
  const targetPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const featProgressObj = useRef({ p0: 0, p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0 });
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isTouchHorizontalRef = useRef<boolean | null>(null);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const featureTabs = [
    "GST Billing & Invoicing",
    "Inventory Management",
    "POS Billing",
    "Customer Management",
    "Vendor Management",
    "Transaction Management",
    "Trip & Transportation",
  ];

  const getSpacing = useCallback(() => {
    if (typeof window === "undefined") return 350;
    const w = window.innerWidth;
    if (w < 640) return 220;
    if (w < 1024) return 310;
    if (w < 1440) return 360;
    return Math.min(420, w * 0.24);
  }, []);

  const applyCardTransforms = useCallback(
    (pos: number) => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      const baseSpacing = getSpacing();
      const scatters = getFeatureScatters(isMobile);

      const pArr = [
        featProgressObj.current.p0,
        featProgressObj.current.p1,
        featProgressObj.current.p2,
        featProgressObj.current.p3,
        featProgressObj.current.p4,
        featProgressObj.current.p5,
        featProgressObj.current.p6,
      ];

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        let diff = i - pos;
        while (diff < -totalCards / 2) diff += totalCards;
        while (diff > totalCards / 2) diff -= totalCards;

        const targetX = diff * baseSpacing;
        const targetY = Math.abs(diff) * Math.abs(diff) * (isMobile ? 26 : 38);
        const targetRot = diff * (isMobile ? 8 : 10.5);
        const targetScale = Math.max(0.72, 1.04 - Math.abs(diff) * 0.09);
        const targetOpacity = Math.abs(diff) > 2.2 ? 0 : Math.max(0, 1 - Math.abs(diff) * 0.42);
        const zIndex = Math.round(25 - Math.abs(diff) * 5);

        const p = pArr[i] ?? 1;
        const s = scatters[i];

        const curX = s.x * (1 - p) + targetX * p;
        const curY = s.y * (1 - p) + targetY * p;
        const curRot = s.rot * (1 - p) + targetRot * p;
        const curScale = s.scale * (1 - p) + targetScale * p;
        const curOpacity = Math.max(0.2, p) * targetOpacity;

        card.style.transform = `translate3d(${curX}px, ${curY}px, 0px) rotate(${curRot}deg) scale(${curScale})`;
        card.style.opacity = `${curOpacity}`;
        card.style.zIndex = `${zIndex}`;
        card.style.pointerEvents = p > 0.85 && Math.abs(diff) < 0.8 ? "auto" : "none";
      });
    },
    [getSpacing]
  );

  const snapToTarget = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const loop = () => {
      if (!isDraggingRef.current) {
        const delta = targetPosRef.current - currentPosRef.current;
        currentPosRef.current += delta * 0.16;

        if (Math.abs(delta) < 0.001) {
          currentPosRef.current = targetPosRef.current;
          applyCardTransforms(currentPosRef.current);
          const activeIdx = ((Math.round(currentPosRef.current) % totalCards) + totalCards) % totalCards;
          setActiveTabIdx(activeIdx);
          return;
        }
        applyCardTransforms(currentPosRef.current);
        const activeIdx = ((Math.round(currentPosRef.current) % totalCards) + totalCards) % totalCards;
        setActiveTabIdx(activeIdx);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
  }, [applyCardTransforms]);

  const animateToCard = useCallback(
    (idx: number) => {
      featProgressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1, p4: 1, p5: 1, p6: 1 };
      const targetIdx = ((idx % totalCards) + totalCards) % totalCards;
      const currentIdx = ((Math.round(currentPosRef.current) % totalCards) + totalCards) % totalCards;
      if (targetIdx === currentIdx) return;

      setActiveTabIdx(targetIdx);

      let diff = targetIdx - currentPosRef.current;
      while (diff < -totalCards / 2) diff += totalCards;
      while (diff > totalCards / 2) diff -= totalCards;

      targetPosRef.current = currentPosRef.current + diff;
      snapToTarget();
    },
    [snapToTarget]
  );

  const navigateFeaturesBy = (dir: number) => {
    featProgressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1, p4: 1, p5: 1, p6: 1 };
    targetPosRef.current = Math.round(currentPosRef.current) + dir;
    snapToTarget();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    applyCardTransforms(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#carousel-arena",
        start: "top 80%",
        once: true,
      },
      onUpdate: () => applyCardTransforms(currentPosRef.current),
      onComplete: () => {
        featProgressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1, p4: 1, p5: 1, p6: 1 };
        applyCardTransforms(currentPosRef.current);
      },
    });

    tl.fromTo(featProgressObj.current, { p0: 0 }, { p0: 1, duration: 0.85, ease: "back.out(1.4)" })
      .fromTo(featProgressObj.current, { p1: 0 }, { p1: 1, duration: 0.85, ease: "back.out(1.4)" }, "-=0.65")
      .fromTo(featProgressObj.current, { p2: 0 }, { p2: 1, duration: 0.85, ease: "back.out(1.4)" }, "-=0.65")
      .fromTo(featProgressObj.current, { p3: 0 }, { p3: 1, duration: 0.85, ease: "back.out(1.4)" }, "-=0.65")
      .fromTo(featProgressObj.current, { p4: 0 }, { p4: 1, duration: 0.85, ease: "back.out(1.4)" }, "-=0.65")
      .fromTo(featProgressObj.current, { p5: 0 }, { p5: 1, duration: 0.85, ease: "back.out(1.4)" }, "-=0.65")
      .fromTo(featProgressObj.current, { p6: 0 }, { p6: 1, duration: 0.85, ease: "back.out(1.4)" }, "-=0.65");

    const handleResize = () => {
      applyCardTransforms(currentPosRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      tl.kill();
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [applyCardTransforms]);

  const onPointerDown = (clientX: number) => {
    featProgressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1, p4: 1, p5: 1, p6: 1 };
    isDraggingRef.current = true;
    startXRef.current = clientX;
    lastXRef.current = clientX;
    lastTimeRef.current = performance.now();
    startPosRef.current = currentPosRef.current;
    velocityRef.current = 0;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  const onPointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - startXRef.current;
    const spacing = getSpacing();
    const newPos = startPosRef.current - deltaX / spacing;
    currentPosRef.current = newPos;
    applyCardTransforms(newPos);
    const activeIdx = ((Math.round(newPos) % totalCards) + totalCards) % totalCards;
    setActiveTabIdx(activeIdx);

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 8) {
      velocityRef.current = (clientX - lastXRef.current) / dt;
      lastXRef.current = clientX;
      lastTimeRef.current = now;
    }
  };

  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    let inertiaSteps = 0;
    if (Math.abs(velocityRef.current) > 0.4) {
      inertiaSteps = velocityRef.current > 0 ? -1 : 1;
    }

    targetPosRef.current = Math.round(currentPosRef.current + inertiaSteps * 0.5);
    snapToTarget();
  };

  // Touch handlers preserving native vertical scrolling
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    isTouchHorizontalRef.current = null;
    onPointerDown(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartXRef.current;
    const dy = touch.clientY - touchStartYRef.current;

    if (isTouchHorizontalRef.current === null) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5) {
        // User is scrolling vertically! Allow native browser scroll
        isTouchHorizontalRef.current = false;
        isDraggingRef.current = false;
        return;
      }
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
        // User is swiping horizontally to explore feature cards
        isTouchHorizontalRef.current = true;
      }
    }

    if (isTouchHorizontalRef.current) {
      onPointerMove(touch.clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isTouchHorizontalRef.current) {
      onPointerUp();
    } else {
      isDraggingRef.current = false;
    }
    isTouchHorizontalRef.current = null;
  };

  return (
    <section id="the-features" className="relative py-20 lg:py-28 overflow-hidden bg-[#fafafa] w-full">
      {/* Top Announcement */}
      <div className="flex justify-center mb-6 px-4">
        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#059669] text-xs font-bold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          <span>Zero Cost • 100% Free Forever • 150,000+ Businesses</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto px-2">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-tight mb-4 select-none ">
          Features
        </h2>
        <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto">
          Access everything with a single platform at zero cost—GST Billing, Inventory, POS, Customers, Vendors,
          Transactions, and Fleet Logistics:
        </p>

        {/* 7 Tabs */}
        <div className="w-full max-w-full overflow-x-auto scrollbar-none py-2 px-1 mt-8">
          <div className="flex items-center justify-start xl:justify-center gap-1.5 sm:gap-2 flex-nowrap w-max xl:w-auto mx-auto">
            {featureTabs.map((label, idx) => (
              <button
                key={idx}
                ref={(el) => { tabsRef.current[idx] = el; }}
                type="button"
                onClick={() => animateToCard(idx)}
                className={`feature-tab-btn shrink-0 whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${
                  activeTabIdx === idx
                    ? "active font-bold bg-purple-100 text-purple-700 border border-purple-300 shadow-sm"
                    : "font-semibold bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <OsmoRoll>{label}</OsmoRoll>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Arena */}
      <div
        id="carousel-arena"
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onMouseUp={onPointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-none h-[640px] sm:h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden touch-pan-y px-0"
      >
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] min-w-[1200px] max-w-none h-[750px] pointer-events-none opacity-45 -z-0"
          viewBox="0 0 1600 750"
          fill="none"
        >
          <path
            d="M 50 620 C 500 360, 1100 360, 1550 620"
            stroke="#cbd5e1"
            strokeWidth="2.5"
            strokeDasharray="6 8"
          />
        </svg>

        {/* 7 Orbital Cards */}
        <div id="cards-track" className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {/* Card 0 */}
          <div
            ref={(el) => { cardsRef.current[0] = el; }}
            data-index="0"
            className="orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(139,92,246,0.25)] bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span>PART OF THE SUITE</span>
              </div>
              <div className="text-2xl font-black mb-1">&#10038;</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                GST Billing &amp; Invoicing
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                Create GST-compliant invoices in seconds, auto-calculate CGST/SGST/IGST taxes, and stay audit-ready with GSTR-1 &amp; GSTR-3B reports.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold">Sharma Traders</span>
                  <span className="text-emerald-300 font-mono font-bold">✔ GSTIN Verified</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono font-black pt-1 border-t border-white/10">
                  <span>Tax Invoice #0842 (A4/Thermal)</span>
                  <span className="text-emerald-300">₹4,116.00</span>
                </div>
              </div>
              <a
                href="https://vinimay.sharda.co.in/knowledge-base" target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
              >
                <OsmoRoll fullWidth>Discover</OsmoRoll>
              </a>
            </div>
          </div>

          {/* Card 1 */}
          <div
            ref={(el) => { cardsRef.current[1] = el; }}
            data-index="1"
            className="orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(16,185,129,0.25)] bg-gradient-to-br from-[#34d399] via-[#10b981] to-[#059669]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span>PART OF THE SUITE</span>
              </div>
              <div className="text-2xl font-black mb-1">&#10038;</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                Inventory Management
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                Track stock across warehouses in real time. Automated low-stock alerts, batch &amp; SKU tracking, and purchase-to-sale reconciliation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[11px] font-bold">
                  <span>Main Warehouse (Stock Center)</span>
                  <span className="font-mono text-emerald-200">1,420 Units</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
                  <span>Reorder Point Alert</span>
                  <span className="text-amber-200">⚠ Low Stock (50 left)</span>
                </div>
              </div>
              <a
                href="https://vinimay.sharda.co.in/knowledge-base" target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
              >
                <OsmoRoll fullWidth>Discover</OsmoRoll>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => { cardsRef.current[2] = el; }}
            data-index="2"
            className="orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] bg-gradient-to-br from-[#60a5fa] via-[#3b82f6] to-[#2563eb]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span>PART OF THE SUITE</span>
              </div>
              <div className="text-2xl font-black mb-1">&#10038;</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                POS Billing
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                A blazing-fast, offline-friendly point of sale for retail &amp; counters. Instant 0.8s barcode scanning, split payments, and receipt sharing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold">Counter POS #01</span>
                  <span className="text-cyan-300 font-bold">⚡ Offline Ready</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
                  <span>Split Pay: Cash + UPI</span>
                  <span className="text-emerald-300 font-mono">₹1,740.00 Paid</span>
                </div>
              </div>
              <a
                href="https://vinimay.sharda.co.in/knowledge-base" target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
              >
                <OsmoRoll fullWidth>Discover</OsmoRoll>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => { cardsRef.current[3] = el; }}
            data-index="3"
            className="orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(99,102,241,0.25)] bg-gradient-to-br from-[#818cf8] via-[#6366f1] to-[#4f46e5]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span>PART OF THE SUITE</span>
              </div>
              <div className="text-2xl font-black mb-1">&#10038;</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                Customer Management
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                Centralized CRM directory. Track purchase history, set party credit limits, monitor receivables, and automate WhatsApp payment reminders.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[10px] text-white/80">
                  <span>Rajesh Enterprises (CRM)</span>
                  <span className="text-emerald-300 font-bold">₹50k Credit Limit</span>
                </div>
                <div className="flex justify-between items-center font-mono font-bold text-white pt-1 border-t border-white/10">
                  <span>Outstanding Balance</span>
                  <span className="text-purple-200">₹12,400 (Sent WhatsApp)</span>
                </div>
              </div>
              <a
                href="https://vinimay.sharda.co.in/knowledge-base" target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
              >
                <OsmoRoll fullWidth>Discover</OsmoRoll>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div
            ref={(el) => { cardsRef.current[4] = el; }}
            data-index="4"
            className="orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)] bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span>PART OF THE SUITE</span>
              </div>
              <div className="text-2xl font-black mb-1">&#10038;</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                Vendor Management
              </h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                Manage supplier profiles, purchase orders (PO), debit notes, and payment vouchers. Keep all supplier payables organized in one place.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold">Bharat Chemical Corp (PO #204)</span>
                  <span className="text-amber-200 font-mono font-bold">GRN Matched</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
                  <span>Payable Outstanding</span>
                  <span className="text-amber-200">₹68,500 (Due 12d)</span>
                </div>
              </div>
              <a
                href="https://vinimay.sharda.co.in/knowledge-base" target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
              >
                <OsmoRoll fullWidth>Discover</OsmoRoll>
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div
            ref={(el) => { cardsRef.current[5] = el; }}
            data-index="5"
            className="orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(244,63,94,0.25)] bg-gradient-to-br from-[#fb7185] via-[#f43f5e] to-[#e11d48]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span>PART OF THE SUITE</span>
              </div>
              <div className="text-2xl font-black mb-1">&#10038;</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                Transaction Management
              </h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                Unified financial operations hub. Manage sales, purchases, receipts, payments, and double-entry journals with full CA-ready audit trails.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold">Journal Voucher #JV-401</span>
                  <span className="text-emerald-300 font-bold">✔ Balanced</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
                  <span>HDFC Contra Transfer</span>
                  <span className="text-rose-200 font-mono">₹1,45,200.00</span>
                </div>
              </div>
              <a
                href="https://vinimay.sharda.co.in/knowledge-base" target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
              >
                <OsmoRoll fullWidth>Discover</OsmoRoll>
              </a>
            </div>
          </div>

          {/* Card 6 */}
          <div
            ref={(el) => { cardsRef.current[6] = el; }}
            data-index="6"
            className="orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(6,182,212,0.25)] bg-gradient-to-br from-[#38bdf8] via-[#06b6d4] to-[#0284c7]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span>PART OF THE SUITE</span>
              </div>
              <div className="text-2xl font-black mb-1">&#10038;</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                Trip &amp; Transportation
              </h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                Complete logistics suite: vehicle &amp; driver management, Google Maps route distance, cargo &amp; e-way bill tracking, and instant freight invoicing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold">Trip #TR-882 • Delhi › Mumbai</span>
                  <span className="font-mono text-cyan-200">1,418 km</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
                  <span>Freight: ₹48,000</span>
                  <span className="text-emerald-300 font-bold">Net Profit: ₹14,200</span>
                </div>
              </div>
              <a
                href="https://vinimay.sharda.co.in/knowledge-base" target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
              >
                <OsmoRoll fullWidth>Discover</OsmoRoll>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={() => navigateFeaturesBy(-1)}
          aria-label="Previous card"
          className="absolute left-3 sm:left-8 lg:left-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => navigateFeaturesBy(1)}
          aria-label="Next card"
          className="absolute right-3 sm:right-8 lg:right-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-8 text-center max-w-xl mx-auto px-4">
        <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
          Click and drag anywhere to explore the full suite of Vinimay features.
        </p>
      </div>
    </section>
  );
}
