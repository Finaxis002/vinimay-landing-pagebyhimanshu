"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcHeading from "@/components/common/ArcHeading";

export default function FeatureDashboardPreview() {
  const containerRef = useRef<HTMLElement | null>(null);
  const chartPathRef = useRef<SVGPathElement | null>(null);

  const [invoicesCount, setInvoicesCount] = useState(248);
  const [salesCount, setSalesCount] = useState("₹12,48,320");
  const [outstandingCount, setOutstandingCount] = useState("₹21,15,600");

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Animated line chart drawing
      if (chartPathRef.current) {
        gsap.fromTo(
          chartPathRef.current,
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );
      }

      // 2. Count up stats on enter
      const statsObj = { inv: 0, sales: 0, out: 0 };
      ScrollTrigger.create({
        trigger: container,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(statsObj, {
            inv: 248,
            sales: 1248320,
            out: 2115600,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              setInvoicesCount(Math.round(statsObj.inv));
              setSalesCount(
                `₹${Math.round(statsObj.sales).toLocaleString("en-IN")}`
              );
              setOutstandingCount(
                `₹${Math.round(statsObj.out).toLocaleString("en-IN")}`
              );
            },
          });
        },
      });

      // 3. Infinite marquee animation
      const marquee = document.getElementById("feature-dashboard-marquee");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          duration: 25,
          repeat: -1,
          ease: "none",
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const MARQUEE_ITEMS = [
    "All invoices in one place",
    "Sales and outstanding",
    "Customers and products",
    "Detailed GST reports",
    "Access anywhere, anytime",
    "Real-time backup",
  ];

  return (
    <section ref={containerRef} className="py-10 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-[#15112b] text-white rounded-3xl sm:rounded-[36px] p-6 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#7b5fd0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-[#3fe0b0] bg-[#3fe0b0]/15 border border-[#3fe0b0]/30 rounded-full px-3.5 py-1 uppercase tracking-wide">
            Dashboard
          </span>
          <ArcHeading
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight leading-tight mt-3 mb-2"
            itemClassName="text-white"
          >
            Your whole business on one screen
          </ArcHeading>
          <p className="text-[#a9a4c0] text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            View invoices, track sales and outstanding, manage customers and products, and run reports from anywhere.
          </p>

          {/* Stats Grid: Mobile 1-col, Tablet/Desktop 3-col */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 my-10 sm:my-14 text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <span className="text-[#a9a4c0] text-xs font-medium block mb-1">
                Total Invoices
              </span>
              <b className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight block font-mono">
                {invoicesCount}
              </b>
              <span className="text-xs font-bold text-[#3fe0b0] mt-1 inline-block">
                +12% this month
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <span className="text-[#a9a4c0] text-xs font-medium block mb-1">
                Total Sales
              </span>
              <b className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight block font-mono">
                {salesCount}
              </b>
              <span className="text-xs font-bold text-[#3fe0b0] mt-1 inline-block">
                +18% growth
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
              <span className="text-[#a9a4c0] text-xs font-medium block mb-1">
                Outstanding Payables
              </span>
              <b className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight block font-mono">
                {outstandingCount}
              </b>
              <span className="text-xs font-bold text-[#ff7b80] mt-1 inline-block">
                -6% collected
              </span>
            </div>
          </div>

          {/* Animated SVG Sparkline Chart */}
          <div className="w-full my-6 overflow-hidden">
            <svg
              className="w-full h-20 sm:h-28"
              viewBox="0 0 600 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                ref={chartPathRef}
                pathLength={1}
                d="M0 105C60 95 90 62 150 72S240 32 300 46S400 22 450 32S560 8 600 12"
                fill="none"
                stroke="#3fe0b0"
                strokeWidth={3.5}
                strokeLinecap="round"
                className="transition-all"
              />
            </svg>
          </div>

          {/* Infinite Marquee Ticker */}
          <div
            className="overflow-hidden mt-6"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            }}
          >
            <div
              id="feature-dashboard-marquee"
              className="flex items-center gap-2.5 sm:gap-3 w-max whitespace-nowrap"
            >
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
                <span
                  key={idx}
                  className="border border-[#3b345e] rounded-full px-4 py-1.5 text-xs sm:text-sm text-[#d9d4f0] bg-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
