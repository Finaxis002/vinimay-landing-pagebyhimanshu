"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface WordmarkArcProps {
  /** Text to animate. Default: "VINIMAY" */
  text?: string;
  /** Animation mode: "reveal" plays smoothly on entry (recommended for bottom footers); "scrub" tracks scroll. Default: "reveal" */
  mode?: "scrub" | "reveal";
  /** Optional custom trigger element ref. If omitted, triggers relative to its own container */
  triggerRef?: React.RefObject<HTMLElement | null>;
  /** ScrollTrigger start position. Default: "top 92%" */
  start?: string;
  /** ScrollTrigger end position (scrub mode). Default: "top 76%" */
  end?: string;
  /** Scrub smoothing time in seconds. Default: 0.5 */
  scrub?: boolean | number;
  /** Multiplier for letter rotation tilt away from center. Default: 8.5 */
  rotationIntensity?: number;
  /** Multiplier for parabolic vertical bow height. Default: 9 */
  yIntensity?: number;
  /** Multiplier for horizontal fanning. Default: 5 */
  xIntensity?: number;
  /** Whether the animation should only play once or replay every time it enters the viewport. Default: false */
  once?: boolean;
  /** Whether to apply soft watermark background styling */
  watermark?: boolean;
  /** Outer wrapper className */
  className?: string;
  /** Typography / text wrapper className */
  textClassName?: string;
  /** Individual character className */
  charClassName?: string;
  /** Accessible label for screen readers. Defaults to text */
  ariaLabel?: string;
}

export default function WordmarkArc({
  text = "VINIMAY",
  mode = "reveal",
  triggerRef,
  start,
  end,
  scrub = 0.5,
  rotationIntensity = 8.5,
  yIntensity = 9,
  xIntensity = 5,
  once = false,
  watermark = false,
  className = "",
  textClassName = "",
  charClassName = "",
  ariaLabel,
}: WordmarkArcProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const letters = Array.from(text);
  const mid = (letters.length - 1) / 2;

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.config({ ignoreMobileResize: true });
    }

    const containerEl = containerRef.current;
    if (!containerEl) return;

    const chars = gsap.utils.toArray<HTMLElement>(
      "[data-wordmark-char]",
      containerEl
    );
    if (chars.length === 0) return;

    const triggerEl = triggerRef?.current || containerEl;
    const triggerStart = start || (mode === "scrub" ? "top 95%" : "top 90%");
    const triggerEnd = end || "top 76%";

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = (context.conditions || {}) as {
          isDesktop?: boolean;
          reduceMotion?: boolean;
        };

        if (reduceMotion) {
          gsap.set(chars, { rotation: 0, yPercent: 0, xPercent: 0, opacity: 1 });
          return;
        }

        // Adjust intensity for smaller mobile viewports
        const rotMultiplier = isDesktop
          ? rotationIntensity
          : rotationIntensity * 0.75;
        const yMultiplier = isDesktop ? yIntensity : yIntensity * 0.75;
        const xMultiplier = isDesktop ? xIntensity : xIntensity * 0.7;

        gsap.set(chars, { transformOrigin: "50% 100%" });

        if (mode === "reveal") {
          // Play once on entry with a fluid spring/cubic ease that ALWAYS completes to 100% straight
          gsap.fromTo(
            chars,
            {
              rotation: (i) => (i - mid) * rotMultiplier,
              yPercent: (i) => 35 + Math.pow(i - mid, 2) * yMultiplier,
              xPercent: (i) => (i - mid) * xMultiplier,
              opacity: 0.25,
            },
            {
              rotation: 0,
              yPercent: 0,
              xPercent: 0,
              opacity: 1,
              duration: 1.15,
              ease: "power3.out",
              stagger: 0.025,
              onComplete: () => {
                // Guarantee all inline transforms are completely normalized
                gsap.set(chars, { rotation: 0, yPercent: 0, xPercent: 0, opacity: 1 });
              },
              scrollTrigger: {
                trigger: triggerEl,
                start: triggerStart,
                ...(once
                  ? { once: true }
                  : { toggleActions: "restart none none reset" }),
              },
            }
          );
        } else {
          // Scrub dynamically with scroll, completing early so letters are 100% straight in view
          const scrubTween = gsap.fromTo(
            chars,
            {
              rotation: (i) => (i - mid) * rotMultiplier,
              yPercent: (i) => 35 + Math.pow(i - mid, 2) * yMultiplier,
              xPercent: (i) => (i - mid) * xMultiplier,
            },
            {
              rotation: 0,
              yPercent: 0,
              xPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: triggerEl,
                start: triggerStart,
                end: triggerEnd,
                scrub: scrub,
                onLeave: () => {
                  // Enforce 100% straight completion when reaching bottom
                  gsap.set(chars, { rotation: 0, yPercent: 0, xPercent: 0 });
                },
              },
            }
          );

          // Bottom of page safety check: when user reaches end of page, snap straight
          const onScrollCheck = () => {
            if (
              window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 40
            ) {
              gsap.to(chars, {
                rotation: 0,
                yPercent: 0,
                xPercent: 0,
                duration: 0.2,
                overwrite: "auto",
              });
            }
          };

          window.addEventListener("scroll", onScrollCheck, { passive: true });
          return () => {
            window.removeEventListener("scroll", onScrollCheck);
            scrubTween.scrollTrigger?.kill();
            scrubTween.kill();
          };
        }
      }
    );

    // Refresh ScrollTrigger after any preceding pinned sections or fonts settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, [
    text,
    mode,
    triggerRef,
    start,
    end,
    scrub,
    rotationIntensity,
    yIntensity,
    xIntensity,
    mid,
    once,
  ]);

  const defaultTextStyles = watermark
    ? "font-heading font-black tracking-[-0.05em] leading-[0.76] text-[clamp(4.5rem,18vw,22rem)] text-slate-900/[0.04] dark:text-white/[0.05] pointer-events-none select-none"
    : "font-heading font-black tracking-[-0.065em] leading-[0.76] text-[clamp(5.2rem,22vw,28rem)] text-[#1f1d1e] dark:text-[#f2f0f0]";

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
      aria-label={ariaLabel || text}
    >
      <div
        className={`flex justify-center items-center text-center whitespace-nowrap will-change-transform ${defaultTextStyles} ${textClassName}`}
      >
        {letters.map((char, index) => (
          <span
            key={index}
            data-wordmark-char
            className={`inline-block will-change-transform ${charClassName}`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}

// Re-export with semantic alias
export { WordmarkArc as VinimayWordmark };
