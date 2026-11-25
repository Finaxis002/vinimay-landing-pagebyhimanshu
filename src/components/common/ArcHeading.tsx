"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ArcHeadingProps {
  /** The heading text (plain string or children) */
  children?: React.ReactNode;
  /** Plain text (alternative to children) */
  text?: string;
  /** HTML element type. Default: "h2" */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  /**
   * "lines": words rise together, one visual line after another (follows the real wrapping).
   * "words": every word rises one after another.
   * "chars": character by character.
   * Default: "lines"
   */
  splitBy?: "lines" | "words" | "chars";
  /** "reveal" plays once on enter, "scrub" tracks scroll. Default: "reveal" */
  mode?: "reveal" | "scrub";
  /** Animation duration in seconds (reveal mode). Default: 0.9 */
  duration?: number;
  /** Delay between each line/word in seconds. Default: 0.12 for lines, 0.05 for words */
  stagger?: number;
  /** Delay before the animation starts in seconds. Default: 0 */
  delay?: number;
  /** GSAP ease. Default: "power4.out" */
  ease?: string;
  /** Start slightly tilted for a more dynamic rise, in degrees. Default: 0 */
  skewY?: number;
  /** ScrollTrigger start. Default: "top 88%" */
  start?: string;
  /** ScrollTrigger end (scrub mode). Default: "top 60%" */
  end?: string;
  /** Scrub smoothing in seconds (scrub mode). Default: 0.6 */
  scrub?: boolean | number;
  /** Optional custom trigger element ref. If omitted, triggers relative to the heading */
  triggerRef?: React.RefObject<HTMLElement | null>;
  /** Heading className */
  className?: string;
  /** ClassName for each word */
  itemClassName?: string;
  /** Accessible id */
  id?: string;
}

export type MaskRiseHeadingProps = ArcHeadingProps;

export default function ArcHeading({
  children,
  text,
  as: Component = "h2",
  splitBy = "lines",
  mode = "reveal",
  duration = 0.9,
  stagger,
  delay = 0,
  ease = "power4.out",
  skewY = 0,
  start = "top 88%",
  end = "top 60%",
  scrub = 0.6,
  triggerRef,
  className = "",
  itemClassName = "",
  id,
}: ArcHeadingProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const rawText =
    text ||
    (typeof children === "string"
      ? children
      : React.Children.toArray(children)
          .map((child) => (typeof child === "string" ? child : ""))
          .join(""));

  const tokens =
    splitBy === "chars"
      ? Array.from(rawText)
      : rawText.split(/\s+/).filter(Boolean);

  const total = tokens.length;
  const gap = stagger ?? (splitBy === "lines" ? 0.12 : 0.05);

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.config({ ignoreMobileResize: true });
    }

    const containerEl = containerRef.current;
    if (!containerEl || total === 0) return;

    const elements = gsap.utils.toArray<HTMLElement>(
      "[data-mask-unit]",
      containerEl
    );
    if (elements.length === 0) return;

    const triggerEl = triggerRef?.current || containerEl;
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        noPreference: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { reduceMotion } = (context.conditions || {}) as {
          reduceMotion?: boolean;
        };

        if (reduceMotion) {
          gsap.set(elements, { yPercent: 0, skewY: 0, clearProps: "all" });
          return;
        }

        // Measure visual line wrap
        const lineOf: number[] = [];
        let line = -1;
        let lastTop = -Infinity;
        elements.forEach((el) => {
          const top = (el.parentElement as HTMLElement)?.offsetTop ?? 0;
          if (Math.abs(top - lastTop) > 2) {
            line += 1;
            lastTop = top;
          }
          lineOf.push(line);
        });

        const staggerFn =
          splitBy === "lines"
            ? (i: number) => lineOf[i] * gap
            : (i: number) => i * gap;

        // Set initial hidden state in GSAP
        gsap.set(elements, { yPercent: 110, skewY });

        const tween =
          mode === "reveal"
            ? gsap.to(elements, {
                yPercent: 0,
                skewY: 0,
                duration,
                delay,
                ease,
                stagger: staggerFn,
                scrollTrigger: {
                  trigger: triggerEl,
                  start: start || "top 92%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              })
            : gsap.to(elements, {
                yPercent: 0,
                skewY: 0,
                ease: "none",
                stagger: staggerFn,
                scrollTrigger: {
                  trigger: triggerEl,
                  start: start || "top 92%",
                  end: end || "top 60%",
                  scrub: scrub,
                  invalidateOnRefresh: true,
                },
              });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }
    );

    // Refresh after fonts load to re-verify line wrapping
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      mm.revert();
      gsap.set(elements, { clearProps: "all" });
    };
  }, [rawText, total, splitBy, gap, mode, duration, delay, ease, skewY, start, end, scrub, triggerRef]);

  if (total === 0) {
    return (
      <Component id={id} className={cn("font-heading", className)}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      id={id}
      ref={containerRef as React.Ref<HTMLHeadingElement>}
      className={cn("font-heading", className)}
      aria-label={rawText.replace(/\s+/g, " ")}
    >
      {tokens.map((token, idx) => (
        <React.Fragment key={`${rawText}-${idx}`}>
          {/* Mask: clips the word so it rises from behind a line */}
          <span
            aria-hidden="true"
            className="inline-block overflow-hidden align-bottom"
            style={{ padding: "0.06em 0 0.16em", margin: "-0.06em 0 -0.16em" }}
          >
            <span
              data-mask-unit
              className={`block will-change-transform ${itemClassName}`}
            >
              {token}
            </span>
          </span>
          {splitBy !== "chars" && idx < total - 1 && " "}
        </React.Fragment>
      ))}
    </Component>
  );
}

export { ArcHeading as MaskRiseHeading };
