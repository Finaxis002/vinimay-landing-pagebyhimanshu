"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  ArrowUpRight,
  TrendingUp,
  Package,
  MessageCircle,
  RefreshCw,
} from "lucide-react";
import DriftingGlassCards from "@/components/common/DriftingGlassCards";
import ArcHeading from "@/components/common/ArcHeading";
import Inquiry from "./Inquiry";

/* ------------------------------------------------------------------ */
/* Number Animator Helper (DOM-direct via GSAP to prevent re-renders)  */
/* ------------------------------------------------------------------ */

function AnimatedNumberDirect({
  value,
  prefix = "",
  duration = 0.8,
}: {
  value: number;
  prefix?: string;
  duration?: number;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const prevVal = useRef(value);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const startVal = prevVal.current;
    prevVal.current = value;

    const obj = { v: startVal };
    const tween = gsap.to(obj, {
      v: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.v).toLocaleString("en-IN")}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value, prefix, duration]);

  return (
    <span ref={spanRef}>
      {prefix}
      {value.toLocaleString("en-IN")}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard 4-Phase Operating Loop                                   */
/* ------------------------------------------------------------------ */

function useDashboardLoop(enabled: boolean) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => {
      timers.push(setTimeout(() => !cancelled && fn(), ms));
    };

    const run = () => {
      timers.length = 0;
      setPhase(0); // Counter Sale / Payment (+₹14,500)
      at(2800, () => setPhase(1)); // Cash Flow Wave Draw / Reports
      at(5800, () => setPhase(2)); // Stock Auto-Deduct / Inventory
      at(8800, () => setPhase(3)); // WhatsApp Invoice Dispatch
      at(12000, run); // Seamless loop
    };

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [enabled]);

  return phase;
}

export default function WhatIsVinimay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const phase = useDashboardLoop(inView);

  // SVG Cash Flow Line Draw on Phase 1
  useEffect(() => {
    if (phase === 1 && pathRef.current && areaRef.current) {
      gsap.fromTo(
        pathRef.current,
        { strokeDashoffset: 600 },
        { strokeDashoffset: 0, duration: 1.4, ease: "power2.out" },
      );
      gsap.fromTo(
        areaRef.current,
        { opacity: 0.1 },
        { opacity: 1, duration: 1.4, ease: "power2.out" },
      );
    }
  }, [phase]);

  // Sidebar dynamic active indicator mapping
  const activeNav: string =
    phase === 0
      ? "Sales"
      : phase === 1
        ? "Reports"
        : phase === 2
          ? "Inventory"
          : "Invoices";

  return (
    <>
      <section
        id="what-is-vinimay"
        className="relative py-20 sm:py-28 lg:py-28 px-4 sm:px-6 md:px-8 bg-[radial-gradient(ellipse_70%_60%_at_50%_20%,rgba(255,255,255,0.28),transparent_70%),linear-gradient(165deg,var(--hero-gradient-from),var(--hero-gradient-to))] text-white overflow-hidden border-t border-purple-400/20"
        aria-label="What is Vinimay dashboard overview"
      >
        {/* Bottom ambient vignette */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2e2678]/40 to-transparent pointer-events-none z-20" />
        {/* Sweeping Ribbon Waves Pattern (matching screenshot) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 rounded-[2.5rem] overflow-hidden pointer-events-none z-0"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 1600"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Ribbon 1 Gradient (Top Arc) */}
              <linearGradient
                id="hero-ribbon-top-arc"
                x1="100%"
                y1="100%"
                x2="30%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.22" />
              </linearGradient>

              {/* Ribbon 2 Gradient (Bottom-Left Arc) */}
              <linearGradient
                id="hero-ribbon-bottom-arc"
                x1="0%"
                y1="0%"
                x2="90%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.20" />
              </linearGradient>

              {/* Ribbon 3 Gradient (Main Serpentine S-Curve) */}
              <linearGradient
                id="hero-ribbon-main-scurve"
                x1="20%"
                y1="0%"
                x2="80%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.28" />
                <stop offset="45%" stopColor="#ffffff" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.26" />
              </linearGradient>

              {/* Ribbon Interlacing Depth Shadow */}
              <filter
                id="hero-ribbon-depth"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="-8"
                  dy="14"
                  stdDeviation="18"
                  floodColor="rgba(30, 10, 80, 0.45)"
                />
              </filter>
            </defs>

            {/* 1. Top Arc Loop (Background layer) */}
            <path
              d="M 1120 540 C 840 500 580 280 520 -50"
              stroke="url(#hero-ribbon-top-arc)"
              strokeWidth="175"
              strokeLinecap="round"
            />

            {/* 2. Bottom-Left Arc Loop (Background layer) */}
            <path
              d="M -90 950 C 220 900 480 1060 620 1650"
              stroke="url(#hero-ribbon-bottom-arc)"
              strokeWidth="175"
              strokeLinecap="round"
            />

            {/* 3. Main Central Serpentine S-Curve Ribbon (Foreground layer with depth shadow) */}
            <path
              d="M 520 -60 C 180 170 170 470 320 780 C 470 1090 790 1260 760 1660"
              stroke="url(#hero-ribbon-main-scurve)"
              strokeWidth="185"
              strokeLinecap="round"
              filter="url(#hero-ribbon-depth)"
            />
          </svg>
        </div>
        <div className="w-full mx-auto relative z-10">
          {/* Header Title & Subtitle */}
          <div className="relative max-w-3xl mx-auto text-center mb-14 sm:mb-20">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-extrabold uppercase tracking-widest mb-4 backdrop-blur-md shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ALL-IN-ONE PLATFORM</span>
              </div>

              <div>
                <ArcHeading
                  as="h2"
                  className="text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-4 drop-shadow-sm font-bold"
                  itemClassName="text-white"
                >
                  What is Vinimay?
                </ArcHeading>
              </div>

              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-xs">
                Vinimay is free accounting and billing software. Send GST and
                VAT invoices, take payments at the counter, and bill on
                WhatsApp—all in one app.
              </p>
            </div>
          </div>

          {/* Central Showcase Stage */}
          <div
            ref={containerRef}
            className="relative w-full flex justify-center items-center overflow-visible"
          >
            {/* Drifting Glass Cards Track (Behind) */}
            <DriftingGlassCards
              phase={phase}
              className="absolute inset-y-0 -inset-x-8 sm:-inset-x-20"
              opacity="opacity-35 sm:opacity-100"
            />

            {/* Scaled Dashboard Window (Front) */}
            <div className="relative z-10 w-full max-w-[720px] rounded-2xl overflow-hidden bg-white text-[#1d1640] shadow-[0_40px_90px_-20px_rgba(25,15,90,0.75),0_0_0_1px_rgba(255,255,255,0.4)] transition-all duration-500">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between h-10 sm:h-11 px-3 sm:px-4 bg-[#1d1640] text-white text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image
                    src="/vinimay_v_logo.png"
                    alt="Vinimay"
                    width={22}
                    height={22}
                    className="h-4.5 sm:h-5 w-auto object-contain"
                    style={{ width: "auto" }}
                    priority
                  />
                  <span className="font-bold tracking-tight text-xs sm:text-sm">
                    Vinimay OS
                  </span>
                  <span className="hidden sm:inline-block h-6 rounded-md bg-white/10 font-normal text-[11px] leading-6 px-3 text-white/70">
                    Search products, ledgers, bills...
                  </span>
                </div>

                {/* Real-time System Pulse Pill */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] sm:text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Sync
                  </span>
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#ffd1f0] to-[#9b8cff] shadow-inner" />
                </div>
              </div>

              {/* Window Body: Responsive flex-col on mobile, 2-column grid on sm+ */}
              <div className="flex flex-col sm:grid sm:grid-cols-[176px_1fr] min-h-[460px]">
                {/* Mobile Module Navigation Pill Strip (hidden on desktop) */}
                <div className="flex sm:hidden items-center justify-between px-3 py-2 bg-[#f4f2fb] border-b border-[#ece6f7] text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#6b6396] text-[10px] font-medium">
                      Module:
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white text-[#584FB2] shadow-2xs font-bold text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {activeNav}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[9.5px] text-[#6b6396] font-medium">
                    {["Sales", "Reports", "Inventory", "Invoices"].map(
                      (mod) => (
                        <span
                          key={mod}
                          className={`px-1.5 py-0.5 rounded transition-all duration-300 ${
                            activeNav === mod
                              ? "bg-[#584FB2] text-white font-bold shadow-2xs"
                              : "text-[#6b6396]/60"
                          }`}
                        >
                          {mod}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Desktop Sidebar Navigation with dynamic active indicator (hidden on mobile) */}
                <div className="hidden sm:block bg-[#f4f2fb] p-3 text-xs font-semibold space-y-1 select-none border-r border-[#ece6f7]">
                  <div
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all duration-300 ${
                      activeNav === "Home"
                        ? "bg-white text-[#1d1640] shadow-sm font-bold"
                        : "text-[#4a4270] hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        activeNav === "Home" ? "bg-[#584FB2]" : "bg-[#b9b0f0]"
                      }`}
                    />
                    <span>Home</span>
                  </div>
                  {[
                    { name: "Sales", icon: ArrowUpRight },
                    { name: "Invoices", icon: MessageCircle },
                    { name: "Inventory", icon: Package },
                    { name: "Reports", icon: TrendingUp },
                    { name: "Customers" },
                    { name: "Purchases" },
                    { name: "Restaurant" },
                    { name: "Gym" },
                  ].map((item) => {
                    const isActive = activeNav === item.name;
                    return (
                      <div
                        key={item.name}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "bg-white text-[#584FB2] shadow-sm font-bold scale-[1.02]"
                            : "text-[#4a4270] hover:bg-white/60"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              isActive ? "bg-[#584FB2]" : "bg-[#b9b0f0]"
                            }`}
                          />
                          <span>{item.name}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Main Dashboard Screen */}
                <div className="p-3 sm:p-5 text-xs space-y-3 sm:space-y-4">
                  {/* Dynamic Live Event Banner */}
                  <div
                    className={`flex items-center justify-between p-2 sm:p-2.5 rounded-xl border transition-all duration-500 ${
                      phase === 0
                        ? "bg-emerald-50/90 border-emerald-200 text-emerald-900"
                        : phase === 1
                          ? "bg-purple-50/90 border-purple-200 text-purple-900"
                          : phase === 2
                            ? "bg-amber-50/90 border-amber-200 text-amber-900"
                            : "bg-blue-50/90 border-blue-200 text-blue-900"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-xs">
                        {phase === 0 && (
                          <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
                        )}
                        {phase === 1 && (
                          <TrendingUp className="h-3.5 w-3.5 text-purple-600" />
                        )}
                        {phase === 2 && (
                          <Package className="h-3.5 w-3.5 text-amber-600" />
                        )}
                        {phase === 3 && (
                          <MessageCircle className="h-3.5 w-3.5 text-blue-600" />
                        )}
                      </span>
                      <span className="text-[10.5px] sm:text-[11px] font-semibold truncate">
                        {phase === 0 &&
                          "Counter Sale: +₹14.5k via UPI (Gupta Gym)"}
                        {phase === 1 &&
                          "Cash Flow & P&L Synchronized (+34% YoY)"}
                        {phase === 2 &&
                          "Stock Adjusted: Basmati Rice (-1 sold)"}
                        {phase === 3 && "WhatsApp Invoice #1042 Delivered ✓✓"}
                      </span>
                    </div>
                    <span className="shrink-0 rounded px-1.5 py-0.5 text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider bg-white/80 ml-1.5">
                      {phase === 0 && "Sale Logged"}
                      {phase === 1 && "Reports"}
                      {phase === 2 && "Stock Synced"}
                      {phase === 3 && "WhatsApp"}
                    </span>
                  </div>

                  {/* Top Metrics Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                    {/* Receivables Card */}
                    <div className="bg-slate-50/90 p-3 rounded-xl border border-slate-100 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <small className="block text-[#6b6396] font-semibold text-[11px]">
                          Total receivables
                        </small>
                        <span className="text-[10px] font-bold text-emerald-600">
                          {phase === 0 ? "+₹14.5k today" : "Verified"}
                        </span>
                      </div>
                      <b className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 block my-0.5">
                        <AnimatedNumberDirect
                          value={phase === 0 ? 578500 : 564000}
                          prefix="₹"
                        />
                      </b>
                      <div className="flex h-2 rounded-full overflow-hidden my-2 bg-slate-200">
                        <span
                          className="bg-[#584FB2] transition-all duration-700"
                          style={{ width: phase === 0 ? "76.5%" : "74.5%" }}
                        />
                        <span
                          className="bg-[#f5b82e] transition-all duration-700"
                          style={{ width: phase === 0 ? "23.5%" : "25.5%" }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#6b6396]">
                        <span>
                          Current{" "}
                          <b className="block text-slate-900 text-xs">
                            <AnimatedNumberDirect
                              value={phase === 0 ? 434500 : 420000}
                              prefix="₹"
                            />
                          </b>
                        </span>
                        <span>
                          Overdue{" "}
                          <b className="block text-slate-900 text-xs">
                            ₹1,44,000
                          </b>
                        </span>
                      </div>
                    </div>

                    {/* Payables Card */}
                    <div className="bg-slate-50/90 p-3 rounded-xl border border-slate-100 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <small className="block text-[#6b6396] font-semibold text-[11px]">
                          Total payables
                        </small>
                        <span className="text-[10px] font-bold text-purple-600">
                          Vendor ledger
                        </span>
                      </div>
                      <b className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 block my-0.5">
                        ₹2,24,000
                      </b>
                      <div className="flex h-2 rounded-full overflow-hidden my-2 bg-slate-200">
                        <span className="bg-[#584FB2] w-[72.3%]" />
                        <span className="bg-[#f5b82e] w-[27.7%]" />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#6b6396]">
                        <span>
                          Current{" "}
                          <b className="block text-slate-900 text-xs">
                            ₹1,62,000
                          </b>
                        </span>
                        <span>
                          Overdue{" "}
                          <b className="block text-slate-900 text-xs">
                            ₹62,000
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cash Flow Graph & Real-Time Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_190px] gap-3 pt-1">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h5 className="font-bold text-[#6b6396] text-[11px] uppercase tracking-wide">
                          Cash Flow Velocity
                        </h5>
                        {phase === 1 && (
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded animate-fade-in">
                            Peak Mar: ₹11.9L
                          </span>
                        )}
                      </div>
                      <svg
                        viewBox="-5 0 535 195"
                        className="w-full h-auto overflow-visible"
                        role="img"
                        aria-label="Cash flow rising through the year"
                      >
                        <defs>
                          <linearGradient
                            id="tw-cashflow-grad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0"
                              stopColor="#584FB2"
                              stopOpacity="0.38"
                            />
                            <stop
                              offset="1"
                              stopColor="#584FB2"
                              stopOpacity="0.02"
                            />
                          </linearGradient>
                        </defs>
                        <g stroke="#eeeaf9">
                          <path d="M0 20h520M0 60h520M0 100h520M0 140h520" />
                        </g>
                        <path
                          ref={areaRef}
                          d="M10 150 L60 130 L110 138 L160 96 L210 70 L260 62 L310 52 L360 40 L410 34 L460 28 L510 24 V170 H10Z"
                          fill="url(#tw-cashflow-grad)"
                        />
                        <path
                          ref={pathRef}
                          d="M10 150 L60 130 L110 138 L160 96 L210 70 L260 62 L310 52 L360 40 L410 34 L460 28 L510 24"
                          fill="none"
                          stroke="#584FB2"
                          strokeWidth="3.2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          style={{ strokeDasharray: 600, strokeDashoffset: 0 }}
                        />
                        {/* Interactive Beacon at Highest Peak */}
                        <circle
                          cx="510"
                          cy="24"
                          r="6"
                          fill="#584FB2"
                          className="animate-ping opacity-75"
                        />
                        <circle
                          cx="510"
                          cy="24"
                          r="4.5"
                          fill="#584FB2"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                        />
                        <g fill="#9a93c0" fontSize="10" fontFamily="inherit">
                          <text x="4" y="186">
                            Apr
                          </text>
                          <text x="64" y="186">
                            Jun
                          </text>
                          <text x="134" y="186">
                            Aug
                          </text>
                          <text x="204" y="186">
                            Oct
                          </text>
                          <text x="274" y="186">
                            Dec
                          </text>
                          <text x="344" y="186">
                            Feb
                          </text>
                          <text x="470" y="186">
                            Mar
                          </text>
                        </g>
                      </svg>
                    </div>

                    {/* Cash Breakdown: Responsive 2x2 on mobile, vertical stack on desktop */}
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 md:gap-1.5 text-[11px] text-[#6b6396] border-t md:border-t-0 md:border-l border-slate-100 pt-2.5 md:pt-0 md:pl-3">
                      <div className="pb-1 border-b border-slate-100">
                        Opening Cash
                        <b className="block text-slate-900 text-xs font-bold">
                          ₹42,250.00
                        </b>
                      </div>
                      <div className="pb-1 border-b border-slate-100 text-emerald-600">
                        Incoming Sales
                        <b className="block text-emerald-700 text-xs font-bold">
                          +₹11,93,838.29
                        </b>
                      </div>
                      <div className="pb-1 border-b border-slate-100 text-rose-600">
                        Operating Outflow
                        <b className="block text-rose-700 text-xs font-bold">
                          −₹12,06,018.12
                        </b>
                      </div>
                      <div>
                        Net Cash Balance
                        <b className="block text-slate-900 text-xs font-bold">
                          ₹30,070.17
                        </b>
                      </div>
                    </div>
                  </div>

                  {/* Footer sync badge */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 pt-2 border-t border-slate-100 text-[10px] text-[#6b6396]">
                    <span className="flex items-center gap-1 font-medium">
                      <RefreshCw className="h-3 w-3 text-emerald-500 animate-spin" />
                      Continuous Cloud Reconcile
                    </span>
                    <span className="font-semibold text-slate-500">
                      GST Ready · Multi-Store Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen">
        <Inquiry />
      </div>
    </>
  );
}
