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

const BRAND_LETTERS = "VINIMAY".split("");

export default function Hero() {
  const [activeTabKey, setActiveTabKey] = useState<string>("dashboard");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);
  const state1Ref = useRef<HTMLDivElement | null>(null);
  const state2Ref = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
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

    // Hero entrance and alternating headline animation
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (hero.querySelector("#hero-badge")) {
        tl.from("#hero-badge", { scale: 0.8, opacity: 0, duration: 0.5 });
      }
      tl.from(state1Ref.current, { y: 40, opacity: 0, duration: 0.9 }, "-=0.2")
        .from("#hero-ctas", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from("#hero-trust", { opacity: 0, duration: 0.6 }, "-=0.3")
        .from(laptop, { y: 40, opacity: 0, duration: 0.6 }, "-=0.3");

      if (!prefersReducedMotion) {
        const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
        const text1 = state1Ref.current;
        const text2 = state2Ref.current;
        if (!text1 || !text2 || letters.length === 0) return;

        // Set initial positions
        gsap.set(letters, { yPercent: 115 });
        gsap.set(text2, { opacity: 0 });

        // Continuous back and forth loop
        const loopTl = gsap.timeline({
          repeat: -1,
          delay: 3.5, // Hold initial text for 3.5s before first swap
        });

        loopTl
          // Step 1: Slide State 1 ("All that your business need...") up and fade out
          .to(text1, {
            y: -35,
            opacity: 0,
            duration: 0.65,
            ease: "power3.inOut",
          })
          // Step 2: Show State 2 container and raise VINIMAY letters up
          .set(text2, { opacity: 1, pointerEvents: "auto" })
          .to(
            letters,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.05,
              ease: "power4.out",
            },
            "-=0.1"
          )
          // Step 3: Hold VINIMAY on screen
          .to({}, { duration: 3.5 })
          // Step 4: Slide VINIMAY letters up and fade out
          .to(letters, {
            yPercent: -115,
            opacity: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: "power3.inOut",
          })
          .set(text2, { opacity: 0, pointerEvents: "none" })
          // Reset letters position invisibly for next iteration
          .set(letters, { yPercent: 115 })
          // Step 5: Slide State 1 back in from below
          .fromTo(
            text1,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power4.out",
            },
            "-=0.1"
          )
          // Step 6: Hold State 1 before repeating
          .to({}, { duration: 3.5 });
      }
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

  const CURVE = "0 0 50% 50% / 0 0 9vw 9vw";

  return (
    <>
      <div className="relative z-20 w-full mx-auto h-screen h-[100dvh] overflow-hidden">
        {/* Purple Hero Backdrop - EXACT MATCH to Loader.tsx dimensions and shape */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-hero-purple pointer-events-none shadow-2xl overflow-hidden z-0"
          style={{ borderRadius: CURVE }}
        >
          {/* WebGL 3D Wave Canvas */}
          <HeroWaveCanvas />

          <div
            className="hero-silk-sheen absolute inset-0 pointer-events-none"
            style={{ borderRadius: CURVE }}
          />
        </div>

        {/* Hero Interactive Content & Mockup */}
        <section
          id="hero"
          ref={heroRef}
          className="relative z-10 w-full h-full text-white flex flex-col items-center justify-between pt-16 sm:pt-18 md:pt-20 pb-4 sm:pb-6 md:pb-8 px-3 sm:px-6 md:px-8 overflow-hidden"
        >
          {/* Top Content Group */}
          <div className="w-full flex flex-col items-center shrink-0">
            {/* Hero Main Heading with Alternating Kinetic Typography */}
            <h1
              id="hero-title"
              className="hero-title relative w-full max-w-5xl mx-auto min-h-[75px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center z-10 select-none my-0.5 sm:my-1"
            >
              {/* State 1: All that your business need for 100% FREE ? */}
              <div
                ref={state1Ref}
                className="w-full text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.06] will-change-transform"
              >
                <span className="block font-heading">All that your business need</span>
                <span className="block font-handwritten text-white/95 mt-0.5 sm:mt-1">
                  for 100%{" "}
                  <span className="gradient-pill-border text-slate-900 not-italic font-sans text-lg sm:text-3xl lg:text-4xl font-black mx-1 sm:mx-1.5 align-middle inline-flex shadow-xl">
                    <span>FREE</span>
                  </span>
                  ?
                </span>
              </div>

              {/* State 2: VINIMAY™ (Exact Match to Loader.tsx font size, weight & letter-spacing) */}
              <div
                ref={state2Ref}
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none text-white leading-none font-heading font-extrabold uppercase select-none"
                style={{
                  fontSize: "clamp(2.5rem, 13vw, 11rem)",
                  letterSpacing: "-0.05em",
                }}
              >
                <div className="flex overflow-hidden px-[0.1em] tracking-tighter py-[0.06em]">
                  {BRAND_LETTERS.map((ch, i) => (
                    <span
                      key={i}
                      ref={(el) => {
                        lettersRef.current[i] = el;
                      }}
                      className="inline-block will-change-transform"
                    >
                      {ch}
                    </span>
                  ))}
                  <sup className="ml-[0.15em] align-top text-[0.28em] tracking-normal">™</sup>
                </div>
              </div>
            </h1>

            {/* Split CTAs */}
            <div
              id="hero-ctas"
              className="mt-2 sm:mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 z-10 w-full sm:w-auto px-4 sm:px-0"
            >
              <Link
                href="https://vinimay.sharda.co.in/client-signup"
                target="_blank"
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full shadow-xl shadow-purple-950/30 flex items-center justify-center gap-2.5 transition-all hover:scale-105 group"
              >
                <span>Start Free </span>
                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>

              <a
                href="#the-features"
                rel="noopener noreferrer"
                className="hidden sm:flex text-white hover:text-white/90 bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md font-semibold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-full items-center gap-2 transition-all"
              >
                <Play className="w-3 h-3 fill-white text-white" />
                <span>See What&apos;s Included</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              id="hero-trust"
              className="hidden md:flex mt-2 sm:mt-2.5 flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-white/95 font-medium z-10"
            >
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                <Check className="w-3 h-3 text-emerald-300" />
                <span>GST &amp; VAT Compliant</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                <Check className="w-3 h-3 text-emerald-300" />
                <span>Works Offline, Syncs to Cloud</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                <Check className="w-3 h-3 text-emerald-300" />
                <span>Unlimited Invoices with Free Account</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                <Check className="w-3 h-3 text-emerald-300" />
                <span>English &amp; Hindi Support</span>
              </div>
            </div>
          </div>

          {/* 3D HARDWARE SHOWCASE: LAPTOP & SMARTPHONE MOCKUP */}
          <div
            id="dashboard-trigger"
            className="dashboard-perspective-wrapper mt-2 sm:mt-3 md:mt-4 w-full max-w-5xl mx-auto px-2 sm:px-4 relative z-20 shrink min-h-0"
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
              <div className="hidden md:block relative bg-[#181a20] rounded-t-[1.4rem] sm:rounded-t-[1.8rem] pt-2 sm:pt-2.5 px-2 sm:px-3 pb-2 sm:pb-3 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] border border-slate-700/80 ring-1 ring-white/10">
                {/* Top Bezel Camera Dot */}
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                    <div className="w-1 h-1 rounded-full bg-indigo-400/60" />
                  </div>
                </div>

                {/* Display Screen */}
                <div className="relative bg-slate-950 rounded-lg sm:rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[370px] lg:h-[400px] xl:h-[430px] max-h-[38vh] overflow-hidden bg-slate-950">
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
        className="relative bg-white text-slate-900 pt-16 sm:pt-20 md:pt-24 pb-20 px-4 sm:px-6 border-b border-slate-100 z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2
              key={activeTabKey}
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 transition-all duration-300"
            >
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