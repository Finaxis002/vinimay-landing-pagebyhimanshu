"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeroWaveCanvas from "../common/HeroWaveCanvas";
import { OsmoRoll } from "../common/OsmoRoll";
import { DASHBOARD_TABS, type DashboardTab } from "@/content/dashboard-tabs";
import { ArrowUpRight, Play, Check, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Hero() {
  const [activeTabKey, setActiveTabKey] = useState<string>("poss");
  const heroRef = useRef<HTMLElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);

  const activeTab: DashboardTab = DASHBOARD_TABS[activeTabKey] || DASHBOARD_TABS.poss;

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const hero = heroRef.current;
    const laptop = laptopRef.current;
    if (!hero || !laptop) return;

    // Hero entrance animations (Laptop & Mobile are completely stationary & grounded)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("#hero-badge", { scale: 0.8, opacity: 0, duration: 0.5 })
        .from("#hero-title", { y: 40, opacity: 0, duration: 0.9 }, "-=0.2")
        .from("#hero-subtitle", { y: 25, opacity: 0, duration: 0.7 }, "-=0.5")
        .from("#hero-ctas", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from("#hero-trust", { opacity: 0, duration: 0.6 }, "-=0.3");

      // Grounded & stable on all devices (no floating, no mouse tilt, no scroll floating)
      gsap.set(laptop, {
        rotationX: 0,
        rotationY: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        clearProps: "transformPerspective",
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  const tabsList = [
    { key: "poss", label: "Pos" },
    { key: "attendo", label: "Attendo" },
    { key: "invoice", label: "Invoice" },
    { key: "inventory", label: "Inventory" },
    { key: "properties", label: "Properties" },
  ];

  const tabKeys = ["poss", "attendo", "invoice", "inventory", "properties"];
  const currentTabIdx = tabKeys.indexOf(activeTabKey);

  const getSlideClass = (key: string) => {
    const idx = tabKeys.indexOf(key);
    if (idx === currentTabIdx) {
      return "opacity-100 [transform:translate3d(0,0,0)_rotateY(0deg)_scale(1)] pointer-events-auto z-10";
    }
    if (idx < currentTabIdx) {
      return "opacity-0 [transform:translate3d(-105%,0,-140px)_rotateY(-22deg)_scale(0.86)] pointer-events-none z-0";
    }
    return "opacity-0 [transform:translate3d(105%,0,-140px)_rotateY(22deg)_scale(0.86)] pointer-events-none z-0";
  };

  return (
    <>
      <div className="p-0 sm:px-4 md:px-6 lg:px-8 sm:pt-2 pb-6 mx-auto w-full">
        <section
          id="hero"
          ref={heroRef}
          className="relative pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-28 px-3 sm:px-6 md:px-8 w-full rounded-none sm:rounded-[2.5rem] bg-hero-purple text-white flex flex-col items-center text-center shadow-2xl border-0 sm:border border-white/20"
        >
          {/* WebGL 3D Wave Canvas */}
          <HeroWaveCanvas />

          {/* Grid pattern overlay */}
          {/* <div className="hero-grid-pattern absolute inset-0 pointer-events-none rounded-[2.5rem]" /> */}
          <div className="hero-silk-sheen absolute inset-0 pointer-events-none rounded-none sm:rounded-[2.5rem]" />

          {/* Top Pill Announcement Badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 shadow-sm text-xs font-medium text-white mb-4 sm:mb-6 backdrop-blur-md z-10"
          >
            <span className="bg-white text-[#8077EC] font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Fastest Way
            </span>
            <span className="tracking-wide hidden sm:inline">
              SIGN UP FREE. SEND YOUR FIRST INVOICE IN A MINUTE.
            </span>
          </div>

          {/* Hero Main Heading */}
           <h1
          id="hero-title"
          className="hero-title text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15] sm:leading-[1.12] z-10"
        >
          <span className="block">Why pay for accounting and billing</span>
          <span className="block font-medium text-white/95 mt-1 sm:mt-2">
            when it’s{" "}
            <span className="free-pill">
              <span className="free-text">FREE</span>
            </span>
            ?
          </span>
        </h1>

          {/* Subheading */}
        
        {/* <p
          id="hero-subtitle"
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-purple-100/90 max-w-3xl mx-auto leading-relaxed z-10"
        >
          GST &amp; VAT-ready invoicing, full accounting, POS and WhatsApp
          billing in one free app.
          <span className="text-purple-200/80 hidden sm:block mt-1"
            >Built for restaurants, gyms, transporters , manufacturers and
            many more.</span
          >
        </p> */}
          {/* Split CTAs: Clean single white button on mobile, dual buttons on sm+ */}
          <div
            id="hero-ctas"
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 z-10 w-full sm:w-auto px-4 sm:px-0"
          >
            {/* Primary White Pill Button with Arrow Icon */}
            <Link
              href="https://vinimay.sharda.co.in/client-signup"
              target="_blank"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base px-7 py-3 sm:py-3.5 rounded-full shadow-xl shadow-purple-950/30 flex items-center justify-center gap-3 transition-all hover:scale-105 group"
            >
              <span>Create Free Account</span>
              <div className="w-6 h-6 rounded-full bg-[#8077EC] text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Secondary Frosted Pill Button (Hidden on mobile for clean aesthetic) */}
            <a
              href="#the-features"
              rel="noopener noreferrer"
              className="hidden sm:flex text-white hover:text-white/90 bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full items-center gap-2.5 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>See What&apos;s Included</span>
            </a>
          </div>

          {/* Trust Badges (Hidden on mobile to eliminate clutter above laptop; visible on desktop) */}
          <div
            id="hero-trust"
            className="hidden sm:flex mt-8 flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-white/95 font-medium z-10"
          >
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-300" />
              <span>GST &amp; VAT Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-300" />
              <span>Works Offline, Syncs to Cloud</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-300" />
              <span>Unlimited Invoices with Free Account</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
              <Check className="w-3.5 h-3.5 text-emerald-300" />
              <span>English &amp; Hindi Support</span>
            </div>
          </div>

          {/* 3D HARDWARE SHOWCASE: LAPTOP & SMARTPHONE MOCKUP */}
          <div
            id="dashboard-trigger"
            className="dashboard-perspective-wrapper mt-3 sm:mt-8 md:mt-12 w-full max-w-5xl mx-auto px-2 sm:px-4 relative z-20 -mb-28 sm:-mb-36 md:-mb-64 lg:-mb-72"
          >
            {/* Ambient Glow */}
            <div className="ambient-glow" />

            {/* Module Switcher Tabs */}
            <div className="flex items-center justify-center mb-2 sm:mb-4 md:mb-10 relative z-30 px-1 sm:px-4 max-w-full">
              <div className="inline-flex items-center justify-start sm:justify-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-slate-900/85 backdrop-blur-xl border border-white/20 shadow-2xl max-w-full overflow-x-auto scrollbar-none">
                {tabsList.map((tab) => {
                  const isSelected = activeTabKey === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTabKey(tab.key)}
                      className={`dashboard-tab-btn flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                        isSelected
                          ? "bg-purple-600 text-white shadow-md font-bold"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <OsmoRoll>{tab.label}</OsmoRoll>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Hardware Mockup (Laptop on desktop, Smartphone only on mobile) */}
            <div
              id="dashboard-mockup"
              ref={laptopRef}
              className="dashboard-panel-3d relative z-10 select-none max-w-5xl mx-auto"
            >
              {/* Laptop Screen Lid (Hidden on mobile devices) */}
              <div className="hidden md:block relative bg-[#181a20] rounded-t-[1.6rem] sm:rounded-t-[2.2rem] pt-2.5 sm:pt-3.5 px-2.5 sm:px-4 pb-2.5 sm:pb-4 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.75)] border border-slate-700/80 ring-1 ring-white/10">
                {/* Top Bezel Camera Dot */}
                <div className="flex items-center justify-center gap-2 mb-2 sm:mb-2.5">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                    <div className="w-1 h-1 rounded-full bg-indigo-400/60" />
                  </div>
                </div>

                {/* Display Screen */}
                <div className="relative bg-slate-950 rounded-lg sm:rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                  <div className="relative w-full h-[370px] sm:h-[470px] md:h-[520px] lg:h-[550px] overflow-hidden bg-slate-950 [perspective:1400px] [transform-style:preserve-3d]">
                    {/* Active Status Badge on Screen */}
                    <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20 pointer-events-none">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{activeTab.screenTitle}</span>
                      </div>
                    </div>

                    {/* Glossy Retina Glass Sheen */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.06] via-transparent to-white/[0.02] z-20" />

                    {/* SLIDE 1: RESTAURANT & RETAIL POS */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col text-left ${getSlideClass(
                        "poss"
                      )}`}
                    >
                      {/* POS Header */}
                      <div className="h-11 px-4 bg-[#0f172a] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src="/vinimay_v_logo.png"
                            alt="Vinimay"
                            width={20}
                            height={20}
                            className="h-5 w-auto object-contain"
                          />
                          <span className="font-bold text-xs sm:text-sm">Vinimay POS Terminal</span>
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
                            Table 04 • KOT Active
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-slate-400 text-[11px] font-mono">Terminal #02 • 14:32 PM</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">Online</span>
                        </div>
                      </div>

                      {/* POS Body */}
                      <div className="flex-1 grid grid-cols-[1fr_210px] sm:grid-cols-[1fr_270px] overflow-hidden text-xs">
                        <div className="p-3 sm:p-4 overflow-y-auto space-y-3 bg-slate-50">
                          <div className="flex items-center justify-between text-[11px]">
                            <div className="flex gap-1.5">
                              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white font-bold text-[10px]">Popular</span>
                              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium text-[10px]">Starters</span>
                              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium text-[10px]">Mains</span>
                              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium text-[10px]">Drinks</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">Fast Touch Mode</span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-1 text-xs">🍗</div>
                              <b className="text-slate-800 text-[11px] block truncate">Butter Chicken</b>
                              <span className="text-purple-700 font-bold font-mono text-xs">₹380.00</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-1 text-xs">🫓</div>
                              <b className="text-slate-800 text-[11px] block truncate">Garlic Butter Naan</b>
                              <span className="text-purple-700 font-bold font-mono text-xs">₹65.00</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                              <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold mb-1 text-xs">🧀</div>
                              <b className="text-slate-800 text-[11px] block truncate">Paneer Tikka</b>
                              <span className="text-purple-700 font-bold font-mono text-xs">₹290.00</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                              <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold mb-1 text-xs">🍚</div>
                              <b className="text-slate-800 text-[11px] block truncate">Hyderabadi Biryani</b>
                              <span className="text-purple-700 font-bold font-mono text-xs">₹340.00</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                              <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold mb-1 text-xs">🥤</div>
                              <b className="text-slate-800 text-[11px] block truncate">Mango Lassi</b>
                              <span className="text-purple-700 font-bold font-mono text-xs">₹95.00</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                              <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-1 text-xs">☕</div>
                              <b className="text-slate-800 text-[11px] block truncate">Masala Chai</b>
                              <span className="text-purple-700 font-bold font-mono text-xs">₹40.00</span>
                            </div>
                          </div>
                        </div>

                        {/* Order Ticket */}
                        <div className="bg-white p-3.5 border-l border-slate-200 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                              <b className="text-slate-900 text-xs">Ticket #KOT-38</b>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">4 Guests</span>
                            </div>
                            <div className="divide-y divide-slate-100 text-[11px] py-1">
                              <div className="py-1.5 flex justify-between">
                                <span>1x Butter Chicken</span>
                                <b className="font-mono">₹380.00</b>
                              </div>
                              <div className="py-1.5 flex justify-between">
                                <span>3x Garlic Naan</span>
                                <b className="font-mono">₹195.00</b>
                              </div>
                              <div className="py-1.5 flex justify-between">
                                <span>1x Paneer Tikka</span>
                                <b className="font-mono">₹290.00</b>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            <div className="flex justify-between text-[11px] text-slate-500">
                              <span>GST (5%)</span>
                              <span className="font-mono">₹43.25</span>
                            </div>
                            <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1 border-t border-slate-100">
                              <span>Total Due</span>
                              <span className="font-mono text-purple-700">₹908.25</span>
                            </div>
                            <div className="w-full py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md">
                              <span>⚡ Pay via UPI QR</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SLIDE 3: ATTENDO BIOMETRIC & MEMBER ACCESS */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col text-left ${getSlideClass(
                        "attendo"
                      )}`}
                    >
                      {/* Header */}
                      <div className="h-11 px-4 bg-[#091e3a] text-white flex items-center justify-between border-b border-blue-900 shrink-0">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src="/vinimay_v_logo.png"
                            alt="Vinimay"
                            width={20}
                            height={20}
                            className="h-5 w-auto object-contain"
                          />
                          <span className="font-bold text-xs sm:text-sm">Attendo Access &amp; Staff Sync</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                            42/48 Staff Present
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-blue-200/80 hidden sm:inline text-[11px]">3 Turnstiles Online</span>
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold text-[10px] flex items-center justify-center">
                            HR
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex-1 p-3 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 text-xs">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-slate-400 text-[10px] font-semibold block">Staff On-Duty</span>
                            <b className="text-sm sm:text-lg font-extrabold text-slate-900">87.5% Present</b>
                            <span className="text-[10px] text-emerald-600 font-bold block mt-1">42 Logged In</span>
                          </div>
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-slate-400 text-[10px] font-semibold block">Member Check-ins</span>
                            <b className="text-sm sm:text-lg font-extrabold text-blue-600">312 Today</b>
                            <span className="text-[10px] text-blue-600 font-bold block mt-1">Active Gym &amp; Club</span>
                          </div>
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-slate-400 text-[10px] font-semibold block">Member Access</span>
                            <b className="text-sm sm:text-lg font-extrabold text-emerald-600">Code Synced</b>
                            <span className="text-[10px] text-slate-500 block mt-1">Instant Verification</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
                          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 font-bold text-[11px] text-slate-700 flex justify-between">
                            <span>Live Member &amp; Staff Access Log</span>
                            <span>Gate &amp; Time</span>
                          </div>
                          <div className="divide-y divide-slate-100 text-[11px]">
                            <div className="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50">
                              <div>
                                <b className="text-slate-800 block">Rohit Sharma • Annual Pro Member</b>
                                <span className="text-slate-400 text-[10px]">Member Code Entry • ID: #GM-4029</span>
                              </div>
                              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                                Gate 01 ✓ 14:28 PM
                              </span>
                            </div>
                            <div className="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50">
                              <div>
                                <b className="text-slate-800 block">Priya Verma • Head Chef (Kitchen)</b>
                                <span className="text-slate-400 text-[10px]">Biometric Fingerprint • Morning Shift</span>
                              </div>
                              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                                Verified ✓ 09:02 AM
                              </span>
                            </div>
                            <div className="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50">
                              <div>
                                <b className="text-slate-800 block">Amit Patel • Front Desk Operations</b>
                                <span className="text-slate-400 text-[10px]">Facial Recognition Terminal • Shift A</span>
                              </div>
                              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                                Verified ✓ 09:14 AM
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SLIDE 4: GST & WHATSAPP INVOICING */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#fdfdfd] text-slate-900 flex flex-col text-left ${getSlideClass(
                        "invoice"
                      )}`}
                    >
                      {/* Header */}
                      <div className="h-11 px-4 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src="/vinimay_v_logo.png"
                            alt="Vinimay"
                            width={20}
                            height={20}
                            className="h-5 w-auto object-contain"
                          />
                          <span className="font-bold text-xs sm:text-sm">Tax Invoice #0842</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                            ✔ WhatsApp Sent
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-slate-400 text-[11px] font-mono">GST 18% Verified</span>
                          <span className="px-2.5 py-1 rounded-md bg-purple-600 text-white font-bold text-[10px]">
                            Download PDF
                          </span>
                        </div>
                      </div>

                      {/* Invoice Document Preview */}
                      <div className="flex-1 p-3 sm:p-5 overflow-y-auto bg-slate-50 flex justify-center">
                        <div className="w-full max-w-xl bg-white p-3.5 sm:p-5 rounded-xl border border-slate-200 shadow-md text-xs space-y-3">
                          <div className="flex justify-between items-start border-b border-slate-100 pb-2.5">
                            <div>
                              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">SHARMA TRADING CO.</h3>
                              <p className="text-[10px] text-slate-400">GSTIN: 07AAAAA0000A1Z5 • New Delhi</p>
                            </div>
                            <div className="text-right">
                              <span className="text-emerald-600 font-bold text-[10px] block">ORIGINAL FOR RECIPIENT</span>
                              <span className="font-mono font-bold text-xs text-slate-800">INV-2026-0842</span>
                            </div>
                          </div>

                          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex justify-between text-[11px]">
                            <div>
                              <span className="text-slate-400 text-[10px] block">Billed To:</span>
                              <b className="text-slate-800">Gupta Supermarket Pvt Ltd</b>
                              <p className="text-[10px] text-slate-500">GSTIN: 07BBBBB1111B2Z3</p>
                            </div>
                            <div className="text-right">
                              <span className="text-slate-400 text-[10px] block">Invoice Date:</span>
                              <b>20 Nov 2026</b>
                            </div>
                          </div>

                          <table className="w-full text-[11px]">
                            <thead>
                              <tr className="border-b border-slate-200 text-slate-500 text-[10px]">
                                <th className="text-left pb-1 font-bold">Item Description</th>
                                <th className="text-right pb-1 font-bold">Qty</th>
                                <th className="text-right pb-1 font-bold">Rate</th>
                                <th className="text-right pb-1 font-bold">GST</th>
                                <th className="text-right pb-1 font-bold">Amount</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              <tr>
                                <td className="py-1.5">
                                  <b>Basmati Rice 25kg</b>
                                  <br />
                                  <span className="text-[9px] text-slate-400">HSN: 1006</span>
                                </td>
                                <td className="text-right font-mono">10</td>
                                <td className="text-right font-mono">₹1,850.00</td>
                                <td className="text-right font-mono">5%</td>
                                <td className="text-right font-bold font-mono">₹19,425.00</td>
                              </tr>
                              <tr>
                                <td className="py-1.5">
                                  <b>Mustard Oil 15L Tin</b>
                                  <br />
                                  <span className="text-[9px] text-slate-400">HSN: 1514</span>
                                </td>
                                <td className="text-right font-mono">2</td>
                                <td className="text-right font-mono">₹1,950.00</td>
                                <td className="text-right font-mono">5%</td>
                                <td className="text-right font-bold font-mono">₹4,095.00</td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="border-t border-slate-200 pt-2.5 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                                💬
                              </div>
                              <div>
                                <span className="text-[10px] font-bold text-slate-800 block">WhatsApp Delivered</span>
                                <span className="text-[9px] text-slate-400">+91 98765-43210</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 block">Grand Total (Incl. GST)</span>
                              <b className="text-xs sm:text-sm font-extrabold text-purple-700 font-mono">₹23,520.00</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SLIDE 5: INVENTORY & STOCK CONTROL */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col text-left ${getSlideClass(
                        "inventory"
                      )}`}
                    >
                      {/* Header */}
                      <div className="h-11 px-4 bg-[#1e293b] text-white flex items-center justify-between border-b border-slate-700 shrink-0">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src="/vinimay_v_logo.png"
                            alt="Vinimay"
                            width={20}
                            height={20}
                            className="h-5 w-auto object-contain"
                          />
                          <span className="font-bold text-xs sm:text-sm">Inventory &amp; Warehousing</span>
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                            2 Low Stock Alerts
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-slate-300 text-[11px]">Central Warehouse</span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex-1 p-3 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 text-xs">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs">
                            <span className="text-slate-400 text-[10px] block font-semibold">Total SKUs</span>
                            <b className="text-sm sm:text-lg font-bold text-slate-800">1,420 Items</b>
                            <span className="text-emerald-600 text-[10px] font-bold block mt-1">98% Available</span>
                          </div>
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs">
                            <span className="text-slate-400 text-[10px] block font-semibold">Stock Value</span>
                            <b className="text-sm sm:text-lg font-bold text-purple-700 font-mono">₹14,80,000</b>
                            <span className="text-slate-400 text-[10px] block mt-1">Cost vs Selling Active</span>
                          </div>
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 shadow-xs">
                            <span className="text-slate-400 text-[10px] block font-semibold">Reorder Alerts</span>
                            <b className="text-sm sm:text-lg font-bold text-amber-600">3 Items Critical</b>
                            <span className="text-amber-600 text-[10px] font-bold block mt-1">Automated PO Ready</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 font-bold text-[11px] text-slate-700 flex justify-between">
                            <span>Product &amp; SKU</span>
                            <span>Stock Meter &amp; Status</span>
                          </div>
                          <div className="divide-y divide-slate-100 text-[11px]">
                            <div className="px-4 py-2.5 flex justify-between items-center">
                              <div>
                                <b className="text-slate-800 block">Basmati Rice Premium 25kg</b>
                                <span className="text-slate-400 text-[10px]">SKU: RIC-2501 • Central Warehouse</span>
                              </div>
                              <div className="text-right">
                                <b className="text-emerald-600 font-bold block">150 Bags in Hand</b>
                                <span className="text-[9px] text-slate-400">Reorder at 40</span>
                              </div>
                            </div>
                            <div className="px-4 py-2.5 flex justify-between items-center bg-amber-50/40">
                              <div>
                                <b className="text-slate-800 block">Refined Sunflower Oil 15L</b>
                                <span className="text-amber-700 font-bold text-[10px]">⚠ Low Stock Warning</span>
                              </div>
                              <div className="text-right">
                                <b className="text-amber-700 font-bold block">12 Tins Left</b>
                                <span className="text-[9px] text-amber-600 font-bold">Trigger Supplier PO</span>
                              </div>
                            </div>
                            <div className="px-4 py-2.5 flex justify-between items-center">
                              <div>
                                <b className="text-slate-800 block">Toor Dal Premium 10kg</b>
                                <span className="text-slate-400 text-[10px]">SKU: DAL-1092 • Shelf Row B</span>
                              </div>
                              <div className="text-right">
                                <b className="text-emerald-600 font-bold block">84 Bags in Hand</b>
                                <span className="text-[9px] text-slate-400">Optimal Stock</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SLIDE 6: PROPERTIES & TENANT LEASE */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col text-left ${getSlideClass(
                        "properties"
                      )}`}
                    >
                      {/* Header */}
                      <div className="h-11 px-4 bg-[#14231b] text-white flex items-center justify-between border-b border-emerald-950 shrink-0">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src="/vinimay_v_logo.png"
                            alt="Vinimay"
                            width={20}
                            height={20}
                            className="h-5 w-auto object-contain"
                          />
                          <span className="font-bold text-xs sm:text-sm">Property &amp; Lease Manager</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                            Galaxy Heights • 96% Occupied
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-emerald-200/80 hidden sm:inline text-[11px]">48 Units Registered</span>
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-white font-bold text-[10px] flex items-center justify-center">
                            PM
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex-1 p-3 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 text-xs">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-slate-400 text-[10px] font-semibold block">Monthly Rent Roll</span>
                            <b className="text-sm sm:text-lg font-extrabold text-emerald-700 font-mono">₹12,40,000</b>
                            <span className="text-[10px] text-emerald-600 font-bold block mt-1">94% Collected</span>
                          </div>
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-slate-400 text-[10px] font-semibold block">Vacant Units</span>
                            <b className="text-sm sm:text-lg font-extrabold text-slate-800">2 of 48 Units</b>
                            <span className="text-[10px] text-slate-400 block mt-1">Listing Active</span>
                          </div>
                          <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-xs">
                            <span className="text-slate-400 text-[10px] font-semibold block">Maintenance Dues</span>
                            <b className="text-sm sm:text-lg font-extrabold text-amber-600 font-mono">₹24,500</b>
                            <span className="text-[10px] text-amber-600 font-bold block mt-1">3 Reminders Sent</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
                          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 font-bold text-[11px] text-slate-700 flex justify-between">
                            <span>Tenant &amp; Unit</span>
                            <span>Monthly Rent &amp; Status</span>
                          </div>
                          <div className="divide-y divide-slate-100 text-[11px]">
                            <div className="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50">
                              <div>
                                <b className="text-slate-800 block">Unit 301 • Rahul Mehta (3 BHK)</b>
                                <span className="text-slate-400 text-[10px]">Lease: 2025–2027 • Auto-E-Nach Active</span>
                              </div>
                              <div className="text-right">
                                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                                  ₹28,500 Paid ✓
                                </span>
                              </div>
                            </div>
                            <div className="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50">
                              <div>
                                <b className="text-slate-800 block">Unit 405 • Neha Kapoor (2 BHK)</b>
                                <span className="text-slate-400 text-[10px]">Lease: 2026–2028 • Paid via UPI</span>
                              </div>
                              <div className="text-right">
                                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                                  ₹34,000 Paid ✓
                                </span>
                              </div>
                            </div>
                            <div className="px-4 py-2.5 flex justify-between items-center hover:bg-slate-50">
                              <div>
                                <b className="text-slate-800 block">Unit 202 • Vertex Tech Labs (Commercial)</b>
                                <span className="text-slate-400 text-[10px]">GST Invoice Dispatched • Due Nov 25</span>
                              </div>
                              <div className="text-right">
                                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[10px]">
                                  ₹85,000 Pending ⏳
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Hinge & Base Lip (Hidden on mobile devices) */}
              <div className="hidden md:block relative -mt-0.5">
                <div className="mx-auto w-[24%] h-1 sm:h-1.5 bg-gradient-to-b from-[#11141c] to-[#1e2330] rounded-b-sm shadow-inner" />
                <div className="relative mx-auto w-[103%] -left-[1.5%] h-3.5 sm:h-5 bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] rounded-b-xl sm:rounded-b-2xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-t border-white/80 flex items-start justify-center">
                  <div className="w-20 sm:w-28 h-1 sm:h-1.5 bg-slate-400/90 rounded-b-md shadow-inner" />
                </div>
                <div className="mx-auto w-[92%] h-5 sm:h-8 bg-black/40 filter blur-xl rounded-full -mt-2 pointer-events-none" />
              </div>

              {/* Smartphone Mockup (Standalone showcase on mobile, grounded companion on desktop) */}
              <div
                id="hero-phone-mockup"
                className="relative mx-auto w-[240px] sm:w-[265px] md:w-40 lg:w-52 md:absolute md:right-2 md:lg:right-4 md:xl:right-6 md:bottom-0 z-30 pointer-events-none select-none text-left mt-1 md:mt-0"
              >
                <div className="relative bg-[#111318] p-2 rounded-[2.2rem] border-[3px] border-slate-700/80 shadow-2xl ring-1 ring-white/10">
                  <div className="relative rounded-[1.8rem] overflow-hidden bg-white aspect-[9/19] flex flex-col">
                    {/* Dynamic Island */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-30 flex items-center justify-end px-2">
                      <div className="w-1 h-1 rounded-full bg-slate-900 border border-slate-800" />
                    </div>

                    {/* Glossy sheen overlay on phone screen */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.08] via-transparent to-white/[0.02] z-20" />

                    {/* 3D Phone Carousel Stage (Light Mode) */}
                    <div className="relative w-full h-full overflow-hidden bg-slate-50 [perspective:1200px] [transform-style:preserve-3d]">
                      {/* PHONE SLIDE 1: POS (Light Mode Table / KOT Order) */}
                      <div
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col pt-6 p-2.5 sm:p-3 text-[10px] ${getSlideClass(
                          "poss"
                        )}`}
                      >
                        <div className="flex justify-between items-center mb-1 pb-1 border-b border-slate-200">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <b className="text-[11px] text-slate-900">Table 04</b>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-bold text-[8px] border border-purple-200">
                            Dining Active
                          </span>
                        </div>

                        <div className="bg-white p-2 rounded-xl mb-1.5 border border-slate-200 shadow-xs text-[9px] space-y-1">
                          <div className="flex justify-between">
                            <span className="text-slate-600">1x Butter Chicken</span>
                            <b className="text-slate-900 font-mono">₹380</b>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">3x Garlic Naan</span>
                            <b className="text-slate-900 font-mono">₹195</b>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">1x Paneer Tikka</span>
                            <b className="text-slate-900 font-mono">₹290</b>
                          </div>
                          <div className="flex justify-between pt-1 border-t border-slate-100 font-bold text-emerald-600">
                            <span>Total + GST</span>
                            <span className="font-mono">₹908.25</span>
                          </div>
                        </div>

                        <div className="bg-white text-slate-900 p-1.5 rounded-xl border border-slate-200 shadow-xs text-center mb-1.5 flex-1 flex flex-col items-center justify-center">
                          <div className="w-11 h-11 bg-slate-50 rounded-lg flex items-center justify-center font-mono text-[8px] font-bold border border-slate-200 mb-0.5 shadow-2xs">
                            [UPI QR]
                          </div>
                          <span className="text-[7.5px] text-slate-500 font-bold block">Scan to Pay via UPI</span>
                        </div>

                        <div className="w-full py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[9px] text-center shadow-xs">
                          ⚡ Send to Kitchen KOT
                        </div>
                      </div>

                      {/* PHONE SLIDE 2: ATTENDO (Member Code Dial Pad in Light Mode - Attendo Entry) */}
                      <div
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col pt-6 p-2.5 sm:p-3 text-[10px] ${getSlideClass(
                          "attendo"
                        )}`}
                      >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-1 pb-1 border-b border-slate-200">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <b className="text-[11px] text-slate-900">Member Check-In</b>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-[8px] border border-blue-200">
                            Gate 01 Active
                          </span>
                        </div>

                        {/* Code Display Box */}
                        <div className="bg-white p-2 rounded-xl mb-1.5 border border-slate-200 shadow-xs text-center">
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            Enter Member Code to Enter
                          </span>
                          <div className="flex items-center justify-center gap-1.5 my-0.5">
                            <span className="w-6 h-7 rounded-lg bg-slate-50 border border-slate-300 font-mono text-xs font-bold text-slate-800 flex items-center justify-center shadow-xs">
                              4
                            </span>
                            <span className="w-6 h-7 rounded-lg bg-slate-50 border border-slate-300 font-mono text-xs font-bold text-slate-800 flex items-center justify-center shadow-xs">
                              0
                            </span>
                            <span className="w-6 h-7 rounded-lg bg-slate-50 border border-slate-300 font-mono text-xs font-bold text-slate-800 flex items-center justify-center shadow-xs">
                              2
                            </span>
                            <span className="w-6 h-7 rounded-lg bg-slate-50 border border-slate-300 font-mono text-xs font-bold text-slate-800 flex items-center justify-center shadow-xs">
                              9
                            </span>
                          </div>
                          <span className="text-[7.5px] font-bold text-emerald-600 block mt-0.5">
                            ✓ Rohit Sharma • Verified Member
                          </span>
                        </div>

                        {/* Numeric Dial Pad */}
                        <div className="grid grid-cols-3 gap-1 px-1 my-auto">
                          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "↵"].map((key) => (
                            <div
                              key={key}
                              className="h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-bold text-[10px] flex items-center justify-center shadow-xs font-mono select-none"
                            >
                              {key}
                            </div>
                          ))}
                        </div>

                        {/* Submit Button */}
                        <div className="w-full py-1.5 rounded-lg bg-blue-600 text-white font-bold text-[9px] text-center shadow-xs mt-1">
                          Enter Member Code to Enter ✓
                        </div>
                      </div>

                      {/* PHONE SLIDE 3: INVOICE (Light Mode WhatsApp Receipt) */}
                      <div
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#eef2f6] text-slate-900 flex flex-col pt-6 p-2 text-[10px] ${getSlideClass(
                          "invoice"
                        )}`}
                      >
                        <div className="bg-[#f0f2f5] -mx-2 -mt-6 pt-6 pb-1.5 px-2.5 flex items-center justify-between border-b border-slate-200 mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[8px] flex items-center justify-center shadow-xs">
                              V
                            </div>
                            <div>
                              <b className="text-[9px] text-slate-900 block leading-tight">Vinimay Billing</b>
                              <span className="text-[7px] text-emerald-700 font-medium">Verified WhatsApp Business</span>
                            </div>
                          </div>
                          <span className="text-[7px] text-slate-500 font-mono">10:42 AM</span>
                        </div>

                        <div className="flex-1 flex flex-col justify-end space-y-1.5">
                          <div className="bg-white text-slate-900 p-2 rounded-xl rounded-tr-xs shadow-xs border border-slate-200 space-y-1">
                            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                              <span className="text-xs">📄</span>
                              <div>
                                <b className="text-[8px] text-slate-800 block leading-tight">Tax_Invoice_0842.pdf</b>
                                <span className="text-[7px] text-slate-400">142 KB • GST 18%</span>
                              </div>
                            </div>
                            <p className="text-[8px] text-slate-700 leading-tight">
                              Dear Customer, invoice for <b className="text-purple-700">₹23,520</b> is generated.
                            </p>
                            <div className="flex items-center justify-between pt-0.5 border-t border-slate-100 text-[7px]">
                              <span className="text-emerald-600 font-medium">Payment Link Ready</span>
                              <span className="text-slate-400 font-bold">10:42 ✓✓</span>
                            </div>
                          </div>
                          <div>
                            <div className="w-full py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[9px] text-center shadow-xs">
                              ⚡ Pay ₹23,520 (UPI)
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* PHONE SLIDE 4: INVENTORY (Light Mode Barcode & Stock Audit) */}
                      <div
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col pt-6 p-2.5 sm:p-3 text-[10px] ${getSlideClass(
                          "inventory"
                        )}`}
                      >
                        <div className="flex justify-between items-center mb-1.5 pb-1 border-b border-slate-200">
                          <b className="text-[11px] text-slate-900">Stock Scanner</b>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[8px] border border-emerald-200">
                            Camera Active
                          </span>
                        </div>

                        <div className="relative w-full h-20 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-center overflow-hidden mb-1.5">
                          <div className="w-20 h-12 border-2 border-dashed border-emerald-500 rounded-lg flex items-center justify-center bg-emerald-50/30">
                            <span className="text-[8px] font-mono text-emerald-700 font-bold">||| |||| || |||</span>
                          </div>
                          <div className="absolute inset-x-2 top-1/2 h-0.5 bg-rose-500 shadow-[0_0_6px_#f43f5e] animate-pulse" />
                        </div>

                        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs text-[9px] space-y-1 mb-1.5">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Product:</span>
                            <b className="text-slate-800 truncate max-w-[100px]">Basmati Rice 25kg</b>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">SKU:</span>
                            <span className="font-mono text-purple-700 font-bold">RIC-2501</span>
                          </div>
                          <div className="flex justify-between font-bold text-emerald-600 pt-0.5 border-t border-slate-100">
                            <span>In Stock:</span>
                            <span>150 Bags</span>
                          </div>
                        </div>

                        <div className="w-full py-1 rounded-lg bg-purple-600 text-white font-bold text-[9px] text-center shadow-xs">
                          + Quick Count Audit
                        </div>
                      </div>

                      {/* PHONE SLIDE 5: PROPERTIES (Light Mode Tenant Receipt) */}
                      <div
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] text-slate-900 flex flex-col pt-6 p-2.5 sm:p-3 text-[10px] ${getSlideClass(
                          "properties"
                        )}`}
                      >
                        <div className="flex justify-between items-center mb-1.5 pb-1 border-b border-slate-200">
                          <div>
                            <b className="text-[11px] text-slate-900 block leading-tight">Tenant Portal</b>
                            <span className="text-[8px] text-slate-400">Galaxy Heights</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[8px] border border-emerald-200">
                            Paid ✓
                          </span>
                        </div>

                        <div className="bg-white p-2 rounded-xl mb-1.5 border border-slate-200 shadow-xs text-[9px] space-y-1">
                          <div className="flex justify-between items-center">
                            <b className="text-[10px] text-slate-800">Unit 301 (3 BHK)</b>
                            <span className="text-emerald-600 font-mono font-bold">₹28,500</span>
                          </div>
                          <div className="text-[8px] text-slate-500 flex justify-between">
                            <span>Tenant: Rahul Mehta</span>
                            <span>Paid Nov 01</span>
                          </div>
                        </div>

                        <div className="bg-white text-slate-900 p-2 rounded-xl border border-slate-200 shadow-xs text-center mb-1.5 flex-1 flex flex-col justify-center items-center">
                          <span className="text-xs mb-0.5">📄</span>
                          <b className="text-[9px] text-slate-800 block">Rent Receipt #RR-301</b>
                          <span className="text-[7px] text-emerald-600 font-bold">NEFT Ref: 981249021</span>
                          <span className="text-[7px] text-slate-400 mt-0.5">Next Due: 01 Dec 2026</span>
                        </div>

                        <div className="w-full py-1 rounded-lg bg-emerald-600 text-white font-bold text-[9px] text-center shadow-xs">
                          📄 Download Receipt
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* LAPTOP SHOWCASE & TRUSTED BY CLIENTS STRIP */}
      <section
        id="laptop-showcase"
        className="relative bg-white text-slate-900 pt-24 sm:pt-36 md:pt-68 lg:pt-76 pb-20 px-4 sm:px-6 border-b border-slate-100 z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {activeTab.heading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              {activeTab.desc}
            </p>
            <a
              href="https://vinimay.sharda.co.in/knowledge-base"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-rose-600 hover:text-rose-700 font-bold text-sm sm:text-base border-b-2 border-rose-500 pb-0.5 group transition-colors"
            >
              <OsmoRoll>{activeTab.ctaText}</OsmoRoll>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trusted By Brands Strip */}
          <div id="client-strip" className="pt-12 sm:pt-16 pb-4 sm:pb-6 border-t border-slate-100 relative overflow-hidden">
            <div className="absolute left-0 top-12 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-12 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-slate-700 uppercase mb-10 text-center select-none">
              TRUSTED BY{" "}
              <span className="text-rose-500 font-extrabold text-base sm:text-lg md:text-xl">1,50,000+</span>{" "}
              BUSINESSES ACROSS THE GLOBE
            </h3>

            <div className="marquee-wrapper w-full overflow-hidden flex select-none py-3 cursor-grab">
              <div className="marquee-track flex items-center shrink-0 space-x-14 sm:space-x-20 pr-14 sm:pr-20">
                <Image src="/brand_logos_row.webp" alt="Trusted Brands" width={984} height={65} className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-105" />
                <Image src="/brand_logos_row.webp" alt="Trusted Brands" width={984} height={65} className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-105" />
              </div>
              <div className="marquee-track flex items-center shrink-0 space-x-14 sm:space-x-20 pr-14 sm:pr-20" aria-hidden="true">
                <Image src="/brand_logos_row.webp" alt="Trusted Brands" width={984} height={65} className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-105" />
                <Image src="/brand_logos_row.webp" alt="Trusted Brands" width={984} height={65} className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
