"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { OsmoRoll } from "../common/OsmoRoll";
import ArcHeading from "@/components/common/ArcHeading";

interface FeatureCtaBannerProps {
  title?: string;
  lead?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function FeatureCtaBanner({
  title = "Ready to simplify your GST billing?",
  lead = "Create your first GST invoice in minutes. No accounting knowledge needed.",
  buttonText = "Create your first invoice",
  buttonHref = "https://vinimay.sharda.co.in/client-signup",
}: FeatureCtaBannerProps) {
  const bannerRef = useRef<HTMLElement | null>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  const bgTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const banner = bannerRef.current;
    const btn = btnRef.current;
    const bgText = bgTextRef.current;
    if (!banner || !btn) return;

    const hasMouseHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // Background text scroll parallax
      if (bgText && !prefersReducedMotion) {
        gsap.to(bgText, {
          xPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: banner,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Magnetic Button interaction for desktop mice
      if (hasMouseHover && !prefersReducedMotion) {
        const qx = gsap.quickTo(btn, "x", { duration: 0.35, ease: "power3.out" });
        const qy = gsap.quickTo(btn, "y", { duration: 0.35, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const relX = (e.clientX - rect.left - rect.width / 2) * 0.35;
          const relY = (e.clientY - rect.top - rect.height / 2) * 0.45;
          qx(relX);
          qy(relY);
        };

        const handleMouseLeave = () => {
          qx(0);
          qy(0);
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div
        className="relative overflow-hidden rounded-3xl sm:rounded-[36px] px-6 sm:px-12 py-16 sm:py-24 text-center text-white shadow-2xl"
        style={{
          background:
            "linear-gradient(120deg, #7b5fd0 0%, #4f7be0 50%, #7b5fd0 100%)",
          backgroundSize: "200% 200%",
        }}
      >
        {/* Massive Outlined Background Text */}
        <div
          ref={bgTextRef}
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[120px] sm:text-[180px] lg:text-[220px] font-black leading-none pointer-events-none select-none opacity-20 text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.4)" }}
        >
          GST · HSN · SAC · CGST · SGST · IGST · PDF · GST · HSN · SAC ·
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/40 border border-emerald-400/30 px-3.5 py-1 rounded-full">
            Zero Cost • 100% Free Forever
          </span>

          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
            itemClassName="text-white"
          >
            {title}
          </ArcHeading>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            {lead}
          </p>

          <div className="pt-6">
            <a
              ref={btnRef}
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-white text-[#5d44b0] font-extrabold text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all min-h-[48px] w-full sm:w-auto text-center"
            >
              <OsmoRoll>{buttonText}</OsmoRoll>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
