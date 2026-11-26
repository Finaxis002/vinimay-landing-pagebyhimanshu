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

      {/* HERO SECTION CONTAINER - Matches Home Page Hero Exactly */}
      <div className="relative w-full mx-auto">
        {/* Purple Hero Backdrop - Locked to 100dvh (or 60vh when no mockup) */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 w-full bg-hero-purple pointer-events-none shadow-2xl overflow-hidden z-0 ${
            screenComponent ? "h-screen h-[100dvh]" : "h-[50vh] sm:h-[58vh] md:h-[62vh]"
          }`}
          style={{ borderRadius: CURVE }}
        >
          {/* Reusable Living WebGL Wave Canvas & Silk Sheen */}
          <HeroBackground />
        </div>

        <header
          ref={heroRef}
          className="relative z-10 w-full text-white text-center pt-20 sm:pt-24 md:pt-26 px-3 sm:px-6 md:px-8 flex flex-col items-center"
        >
          <div className="relative z-10 max-w-5xl mx-auto w-full">
            {/* Pill Badge */}
            <div className="hero-meta-reveal">
              <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-white/20 border border-white/35 backdrop-blur-md tracking-wide shadow-xs mb-3 sm:mb-4">
                {badge}
              </span>
            </div>

            {/* Headline - Masked Text Reveal Animation */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.06] max-w-4xl mx-auto mt-2 mb-2 sm:mb-3 px-2">
              <span className="block overflow-hidden py-0.5">
                <span className="feature-title-reveal block font-handwritten will-change-transform">
                  {title}
                </span>
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="feature-lead-reveal text-sm sm:text-base md:text-lg text-white/90 font-normal max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-5 px-2 will-change-transform">
              {lead}
            </p>

            {/* Trust Chips - Mobile First Wrap */}
            {trustChips && trustChips.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto mb-4 sm:mb-6">
                {trustChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="feature-chip-reveal bg-white/15 border border-white/30 backdrop-blur-md rounded-xl px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white shadow-xs will-change-transform"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {/* Reusable Desktop Screen / Mockup Container - Overlaps across bottom curve like Home Hero */}
            {screenComponent && (
              <div className="feature-screen-reveal w-full mt-2 sm:mt-4 relative z-20 -mb-28 sm:-mb-36 md:-mb-52 lg:-mb-60 will-change-transform">
                {screenComponent}
              </div>
            )}
          </div>
        </header>
      </div>

      {/* Children Content (Story, Bento, Dashboard, CTA) */}
      <div
        className={`w-full relative z-10 ${
          screenComponent
            ? "pt-28 sm:pt-40 md:pt-56 lg:pt-64"
            : "pt-12 sm:pt-16"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
