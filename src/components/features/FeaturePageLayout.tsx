"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground from "@/components/common/HeroBackground";

export interface FeaturePageLayoutProps {
  badge: string;
  title: string;
  lead?: string;
  trustChips?: string[];
  screenComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export default function FeaturePageLayout({
  badge,
  title,
  lead,
  trustChips = [
    "🛡 100% GST Compliant",
    "🖱 Easy to use",
    "✨ No accounting knowledge needed",
  ],
  screenComponent,
  children,
}: FeaturePageLayoutProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Guarantee the user always starts at the top of any feature page
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Top scroll reading progress bar
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            scrub: 0.3,
            start: "top top",
            end: "max",
          },
        });
      }

      if (!prefersReducedMotion) {
        // 1. Badge & Breadcrumb reveal
        gsap.fromTo(
          ".hero-meta-reveal",
          { y: -14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
        );

        // 2. Headline: Rises up smoothly from behind the overflow-hidden mask
        gsap.fromTo(
          ".feature-title-reveal",
          { y: "115%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
            delay: 0.2,
          }
        );

        // 3. Lead subtitle: Fades and floats in gently
        gsap.fromTo(
          ".feature-lead-reveal",
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            delay: 0.42,
          }
        );

        // 4. Trust chips: Staggered entrance
        gsap.fromTo(
          ".feature-chip-reveal",
          { y: 16, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.55,
          }
        );

        // 5. Laptop / Screen Mockup: Slides up into place
        gsap.fromTo(
          ".feature-screen-reveal",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            delay: 0.65,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const CURVE = "0 0 50% 50% / 0 0 9vw 9vw";

  return (
    <div className="w-full bg-[#fafafa] text-[#1d1b2e] min-h-screen overflow-x-clip selection:bg-primary selection:text-white">
      {/* Top Reading Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 h-[3px] w-full bg-[#1fb487] origin-left scale-x-0 z-[120] pointer-events-none"
      />

      {/* HERO SECTION CONTAINER */}
      <div className="relative z-20 w-full mx-auto">
        {/* Purple Hero Backdrop - Adapts to content on mobile, full 100dvh on desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-full md:h-screen md:h-[100dvh] w-full bg-hero-purple pointer-events-none shadow-2xl overflow-hidden z-0"
          style={{ borderRadius: CURVE }}
        >
          {/* Reusable Living WebGL Wave Canvas & Silk Sheen */}
          <HeroBackground />
        </div>

        <header
          ref={heroRef}
          className={`relative z-10 w-full text-white text-center px-4 sm:px-6 md:px-8 flex flex-col items-center ${
            screenComponent
              ? "pt-24 sm:pt-28 pb-14 sm:pb-18 md:pb-0 md:justify-start overflow-hidden md:overflow-visible md:pt-24 lg:pt-28"
              : "pt-24 sm:pt-28 pb-14 sm:pb-18 md:pb-20 justify-center overflow-hidden md:h-screen md:h-[100dvh]"
          }`}
        >
          <div
            className={`relative z-10 w-full flex flex-col items-center ${
              screenComponent
                ? "max-w-5xl shrink-0 my-0"
                : "max-w-4xl justify-center my-0 md:my-auto py-4 sm:py-6"
            }`}
          >
            {/* Pill Badge */}
            <div className="hero-meta-reveal">
              <span
                className={`inline-block font-semibold rounded-full bg-white/20 border border-white/35 backdrop-blur-md tracking-wide shadow-xs ${
                  screenComponent
                    ? "text-xs px-4 py-1.5 mb-2 sm:mb-3"
                    : "text-xs sm:text-sm px-5 py-2 mb-4 sm:mb-6"
                }`}
              >
                {badge}
              </span>
            </div>

            {/* Headline - Masked Text Reveal Animation */}
            <h1
              className={`font-black tracking-tight mx-auto px-2 ${
                screenComponent
                  ? "text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.06] max-w-4xl mt-1 mb-2 sm:mb-3"
                  : "text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] sm:leading-[1.04] max-w-5xl mb-4 sm:mb-6"
              }`}
            >
              <span className="block overflow-hidden py-0.5">
                <span className="feature-title-reveal block font-handwritten will-change-transform">
                  {title}
                </span>
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            {lead && (
              <p
                className={`feature-lead-reveal text-white/95 font-normal mx-auto leading-relaxed px-2 will-change-transform ${
                  screenComponent
                    ? "text-xs sm:text-sm md:text-base max-w-2xl mb-3 sm:mb-4"
                    : "text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mb-6 sm:mb-8 text-white/90"
                }`}
              >
                {lead}
              </p>
            )}

            {/* Trust Chips - Mobile First Wrap */}
            {trustChips && trustChips.length > 0 && (
              <div
                className={`flex flex-wrap items-center justify-center max-w-3xl mx-auto ${
                  screenComponent
                    ? "gap-1.5 sm:gap-2 mb-2 sm:mb-4"
                    : "gap-2.5 sm:gap-3.5 mb-6 sm:mb-8"
                }`}
              >
                {trustChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className={`feature-chip-reveal bg-white/15 border border-white/30 backdrop-blur-md text-white shadow-xs will-change-transform font-medium ${
                      screenComponent
                        ? "rounded-xl px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs"
                        : "rounded-2xl px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm"
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {/* In-Hero Action Button for Screenless Pages (smooth scroll to content) */}
            {!screenComponent && (
              <div className="mt-2 sm:mt-4 flex items-center justify-center">
                <a
                  href="#content-start"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white text-primary font-bold text-xs sm:text-sm shadow-lg hover:bg-white/95 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <span className="text-sm sm:text-base animate-bounce">↓</span>
                </a>
              </div>
            )}

            {/* Reusable Desktop Screen / Mockup Container (Desktop Only, Hidden on Mobile just like Hero) */}
            {screenComponent && (
              <div className="hidden md:block feature-screen-reveal w-full mt-6 sm:mt-8 md:mt-10 relative z-30 -mb-28 sm:-mb-36 md:-mb-48 lg:-mb-56 will-change-transform max-w-5xl mx-auto">
                {screenComponent}
              </div>
            )}
          </div>
        </header>
      </div>

      {/* Children Content (Story, Bento, Dashboard, CTA) */}
      <div
        id="content-start"
        className={`w-full relative z-10 ${
          screenComponent
            ? "pt-8 sm:pt-10 md:pt-48 lg:pt-56"
            : "pt-8 sm:pt-10 md:pt-16"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
