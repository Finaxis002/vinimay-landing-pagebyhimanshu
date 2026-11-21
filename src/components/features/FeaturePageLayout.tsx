"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground from "@/components/common/HeroBackground";

export interface FeaturePageLayoutProps {
  badge: string;
  title: string;
  lead: string;
  trustChips?: string[];
  screenComponent: React.ReactNode;
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

  return (
    <div className="w-full bg-[#fafafa] text-[#1d1b2e] min-h-screen overflow-x-clip selection:bg-[#7b5fd0] selection:text-white">
      {/* Top Reading Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 h-[3px] w-full bg-[#1fb487] origin-left scale-x-0 z-[120] pointer-events-none"
      />

      {/* HERO SECTION CONTAINER - Matches Home Page Hero Exactly */}
      <div className="p-0 sm:px-4 md:px-6 lg:px-8 sm:pt-2 pb-6 mx-auto w-full">
        <header
          ref={heroRef}
          className="relative overflow-hidden text-white text-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-3 sm:px-6 md:px-8 w-full rounded-none sm:rounded-[2.5rem] bg-hero-purple shadow-2xl border-0 sm:border border-white/20"
        >
          {/* Reusable Living WebGL Wave Canvas & Silk Sheen */}
          <HeroBackground />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Mobile-Friendly Breadcrumb */}
            <nav className="hero-meta-reveal inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white/80 mb-4 sm:mb-6 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 shadow-xs">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <Link href="/#the-features" className="hover:text-white transition-colors">
                Features
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <span className="text-white font-semibold truncate max-w-[140px] sm:max-w-none">
                {badge}
              </span>
            </nav>

            {/* Pill Badge */}
            <div className="hero-meta-reveal">
              <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-white/20 border border-white/35 backdrop-blur-md tracking-wide shadow-xs">
                {badge}
              </span>
            </div>

            {/* Headline - Masked Text Reveal Animation (emerges out of baseline mask) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.18] sm:leading-[1.12] max-w-4xl mx-auto mt-4 mb-3 sm:mb-4 px-2">
              <span className="block overflow-hidden py-0.5">
                <span className="feature-title-reveal block will-change-transform">
                  {title}
                </span>
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="feature-lead-reveal text-sm sm:text-base md:text-lg text-white/90 font-normal max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 will-change-transform">
              {lead}
            </p>

            {/* Trust Chips - Mobile First Wrap */}
            {trustChips && trustChips.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto mb-8 sm:mb-12">
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

            {/* Reusable Desktop Screen / Mockup Container */}
            <div className="feature-screen-reveal w-full mt-4 sm:mt-8 will-change-transform">
              {screenComponent}
            </div>
          </div>
        </header>
      </div>

      {/* Children Content (Story, Bento, Dashboard, CTA) */}
      <div className="w-full">{children}</div>
    </div>
  );
}
