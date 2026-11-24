"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import HeroWaveCanvas from "../common/HeroWaveCanvas";
import { OsmoRoll } from "../common/OsmoRoll";
import { DASHBOARD_TABS, type DashboardTab } from "@/content/dashboard-tabs";
import { ArrowUpRight, Play, Check, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  VinimayAppShell,
  DashboardScreen,
  CompaniesScreen,
  RestaurantScreen,
  GymFitnessScreen,
  InvoiceScreen,
  InventoryScreen,
  PropertiesScreen,
  UsersScreen,
  MobileMockupScreen,
} from "@/components/dashboard-mockup";
import TrustedBrandsCloud from "./TrustedBrandsCloud";

const TAB_KEYS = [
  "dashboard",
  "companies",
  "invoice",
  "attendo",
  "poss",
  "inventory",
  "properties",
  "users",
] as const;

export default function Hero() {
  const [activeTabKey, setActiveTabKey] = useState<string>("dashboard");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeTab: DashboardTab = DASHBOARD_TABS[activeTabKey] || DASHBOARD_TABS.dashboard;

  const currentTabIdx = TAB_KEYS.indexOf(activeTabKey as (typeof TAB_KEYS)[number]);

  // User click on sidebar navigation inside mockup
  const handleNavigate = useCallback(
    (key: string) => {
      if (key === activeTabKey) return;
      setIsLoading(true);
      setActiveTabKey(key);
      setIsPaused(true);

      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 260);

      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      // Resume auto-cycling 8 seconds after manual click
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 8000);
    },
    [activeTabKey]
  );

  // Self-animation: Auto-play cycling through tabs every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTabKey((prevKey) => {
        const idx = TAB_KEYS.indexOf(prevKey as (typeof TAB_KEYS)[number]);
        const nextIdx = (idx + 1) % TAB_KEYS.length;

        setIsLoading(true);
        if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = setTimeout(() => {
          setIsLoading(false);
        }, 260);

        return TAB_KEYS[nextIdx];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

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

  const getSlideClass = (key: string) => {
    const idx = TAB_KEYS.indexOf(key as (typeof TAB_KEYS)[number]);
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
            className="hero-title text-3xl sm:text-6xl lg:text-8xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.15] sm:leading-[1.12] z-10"
          >
            <span className="block font-handwritten">All that your business need</span>
            <span className="block font-handwritten text-white/95 mt-1 sm:mt-2">
              for 100%{" "}
              <span className="free-pill">
                <span className="free-text">FREE</span>
              </span>
              ?
            </span>
          </h1>

          {/* Split CTAs */}
          <div
            id="hero-ctas"
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 z-10 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link
              href="https://vinimay.sharda.co.in/client-signup"
              target="_blank"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base px-7 py-3 sm:py-3.5 rounded-full shadow-xl shadow-purple-950/30 flex items-center justify-center gap-3 transition-all hover:scale-105 group"
            >
              <span>Start Free </span>
              <div className="w-6 h-6 rounded-full bg-[#8077EC] text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <a
              href="#the-features"
              rel="noopener noreferrer"
              className="hidden sm:flex text-white hover:text-white/90 bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full items-center gap-2.5 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>See What&apos;s Included</span>
            </a>
          </div>

          {/* Trust Badges */}
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
            className="dashboard-perspective-wrapper mt-6 sm:mt-12 md:mt-16 w-full max-w-5xl mx-auto px-2 sm:px-4 relative z-20 -mb-28 sm:-mb-36 md:-mb-64 lg:-mb-72"
          >
            {/* Ambient Glow */}
            <div className="ambient-glow" />

            {/* 3D Hardware Mockup with Persistent Real Dashboard Shell & Self-Animation */}
            <div
              id="dashboard-mockup"
              ref={laptopRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
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
                  <div className="relative w-full h-[370px] sm:h-[470px] md:h-[520px] lg:h-[550px] overflow-hidden bg-slate-950">
                    {/* Glossy Retina Glass Sheen */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.06] via-transparent to-white/[0.02] z-20" />

                    {/* SINGLE PERSISTENT REAL DASHBOARD SHELL */}
                    <VinimayAppShell
                      activeTabKey={activeTabKey}
                      companyName={
                        activeTabKey === "poss" ||
                        activeTabKey === "properties" ||
                        activeTabKey === "companies"
                          ? "All Companies"
                          : "Dhurandhar Fitness"
                      }
                      isLoading={isLoading}
                      isPaused={isPaused}
                      onNavigate={handleNavigate}
                    >
                      {activeTabKey === "dashboard" && <DashboardScreen />}
                      {activeTabKey === "companies" && <CompaniesScreen />}
                      {activeTabKey === "invoice" && <InvoiceScreen />}
                      {activeTabKey === "attendo" && <GymFitnessScreen />}
                      {activeTabKey === "poss" && <RestaurantScreen />}
                      {activeTabKey === "inventory" && <InventoryScreen />}
                      {activeTabKey === "properties" && <PropertiesScreen />}
                      {activeTabKey === "users" && <UsersScreen />}
                    </VinimayAppShell>
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
                onClick={() => {
                  const nextIdx = (currentTabIdx + 1) % TAB_KEYS.length;
                  handleNavigate(TAB_KEYS[nextIdx]);
                }}
                className="relative mx-auto w-[240px] sm:w-[265px] md:w-40 lg:w-52 md:absolute md:right-2 md:lg:right-4 md:xl:right-6 md:bottom-0 z-30 select-none text-left mt-1 md:mt-0 cursor-pointer"
                title="Tap to view next screen"
              >
                <div className="relative bg-[#111318] p-2 rounded-[2.2rem] border-[3px] border-slate-700/80 shadow-2xl ring-1 ring-white/10 hover:border-purple-400/50 transition-colors">
                  <div className="relative rounded-[1.8rem] overflow-hidden bg-white aspect-[9/19] flex flex-col">
                    {/* Dynamic Island */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-30 flex items-center justify-end px-2">
                      <div className="w-1 h-1 rounded-full bg-slate-900 border border-slate-800" />
                    </div>

                    {/* Glossy sheen overlay on phone screen */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.08] via-transparent to-white/[0.02] z-20" />

                    {/* Phone Screen Stage */}
                    <div className="relative w-full h-full overflow-hidden bg-slate-50 [perspective:1200px] [transform-style:preserve-3d]">
                      {TAB_KEYS.map((key) => (
                        <div
                          key={key}
                          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform bg-[#f8fafc] flex flex-col ${getSlideClass(
                            key
                          )}`}
                        >
                          <MobileMockupScreen activeTabKey={key} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Tap Indicator dots (Only on mobile) */}
                <div className="flex md:hidden items-center justify-center gap-1.5 mt-2.5">
                  {TAB_KEYS.map((key, i) => (
                    <button
                      key={key}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(key);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        activeTabKey === key
                          ? "w-6 bg-white shadow-xs"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
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
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm sm:text-base border-b-2 border-emerald-500 pb-0.5 group transition-colors"
            >
              <OsmoRoll>{activeTab.ctaText}</OsmoRoll>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trusted By Brands Cloud */}
          <TrustedBrandsCloud />
        </div>
      </section>
    </>
  );
}