"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

/**
 * Preloader featuring:
 * - Pure, un-stroked, natural Bricolage Grotesque typography
 *   matching the Footer VINIMAY exactly (font, weight, tracking, clamp size).
 * - Exact Hero section background (#8279ec -> #7166e5 with silk sheen highlights).
 * - Exponential doorway dive into the central letter ("I") with subtle dynamic rotation.
 */
export default function Loader() {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wordRef = useRef<SVGTextElement | null>(null);
  const holeRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    const PRELOADER_ONCE = false;
    try {
      if (PRELOADER_ONCE && sessionStorage.getItem("vinimay-preloader-seen")) {
        setIsDone(true);
        return;
      }
    } catch {
      // sessionStorage unavailable
    }

    const root = containerRef.current;
    const svg = svgRef.current;
    const word = wordRef.current;
    const hole = holeRef.current;

    if (!root || !svg || !word || !hole) return;

    const MIN_SECONDS = 1.8; // Duration text stays before zoom dive
    const ZOOM_SECONDS = 2.1; // Duration of exponential zoom dive
    const ROTATION_DEG = 10; // total tilt during the dive (negative = counter-clockwise)

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // Lock scroll during preloader

    let fontSize = 100;
    let isCleanedUp = false;
    let checkInterval: NodeJS.Timeout | null = null;
    let fallbackTimeout: NodeJS.Timeout | null = null;
    let activeTimeline: gsap.core.Timeline | null = null;

    // Layout matching Footer clamp(5.2rem, 22vw, 28rem) exactly
    const layout = () => {
      if (!svg || !word || !hole) return;
      const W = window.innerWidth;
      const H = window.innerHeight;

      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

      const rem =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const minSize = 5.2 * rem; // 83.2px
      const prefSize = W * 0.22; // 22vw
      const maxSize = 28 * rem; // 448px

      fontSize = Math.max(minSize, Math.min(prefSize, maxSize));
      // Ensure text width comfortably fits viewport width on narrow screens
      [word, hole].forEach((t) => t.setAttribute("font-size", fontSize.toString()));
      const wordBox = word.getBBox?.();
      if (wordBox && wordBox.width > W * 0.88) {
        fontSize = fontSize * ((W * 0.88) / wordBox.width);
      }
      fontSize = Math.min(fontSize, H * 0.48);

      const targetX = W / 2;
      const targetY = H / 2 + fontSize * 0.35;

      [word, hole].forEach((t) => {
        t.setAttribute("font-size", fontSize.toString());
        t.setAttribute("x", targetX.toString());
        t.setAttribute("y", targetY.toString());
      });
    };

    const finish = () => {
      if (isCleanedUp) return;
      document.body.style.overflow = prevOverflow;
      try {
        sessionStorage.setItem("vinimay-preloader-seen", "1");
      } catch {
        // Ignore storage errors
      }
      window.removeEventListener("resize", layout);
      setIsDone(true);
    };

    const zoom = () => {
      if (isCleanedUp || !word || !hole || !root) return;

      // Locate the exact center of the middle letter "I" (index 3 in V-I-N-I-M-A-Y)
      let ox = window.innerWidth / 2;
      let oy = window.innerHeight / 2;
      try {
        const charExtent = word.getExtentOfChar?.(3);
        if (charExtent && charExtent.width > 0) {
          ox = charExtent.x + charExtent.width / 2;
          oy = charExtent.y + charExtent.height / 2;
        }
      } catch {
        const yAttr = parseFloat(word.getAttribute("y") || "0");
        ox = window.innerWidth / 2;
        oy = yAttr - fontSize * 0.35;
      }

      const els = [word, hole];
      const S = (Math.max(window.innerWidth, window.innerHeight) / fontSize) * 8.5;
      const p = { v: 0 };

      gsap.set(els, { svgOrigin: `${ox} ${oy}`, scale: 1, rotation: 0 });

      activeTimeline = gsap.timeline({ onComplete: finish });
      activeTimeline
        // Zoom exponentially through the letter doorway
        .to(
          p,
          {
            v: 1,
            duration: ZOOM_SECONDS,
            ease: "power2.in",
            onUpdate: () => {
              const currentScale = Math.pow(S, p.v);
              // Dynamic camera rotation tilt (-5.2 degrees) while diving in
            const currentRot = ROTATION_DEG * Math.sqrt(p.v);
              gsap.set(els, { scale: currentScale, rotation: currentRot });
            },
          },
          0
        )
        // White text fades out: mask hole reveals hero section underneath
        .to(word, { opacity: 0, duration: 0.45, ease: "power1.inOut" }, 0.1)
        .to(hole, { opacity: 1, duration: 0.45, ease: "power1.inOut" }, 0.1)
        // Fade out overlay container right at end of zoom
        .to(root, { opacity: 0, duration: 0.25 }, ZOOM_SECONDS - 0.25);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let loaded = document.readyState === "complete";
    const t0 = performance.now();

    const handleLoad = () => {
      loaded = true;
    };
    if (!loaded) {
      window.addEventListener("load", handleLoad, { once: true });
    }

    fallbackTimeout = setTimeout(() => {
      loaded = true;
    }, 4500);

    // Wait for Bricolage Grotesque font to load for accurate letter metrics
    const fontReadyPromise =
      typeof document !== "undefined" && document.fonts
        ? Promise.race([
            document.fonts.load('100px "Bricolage Grotesque"'),
            document.fonts.ready,
            new Promise((resolve) => setTimeout(resolve, 1200)),
          ])
        : Promise.resolve();

    fontReadyPromise
      .catch(() => {})
      .then(() => {
        if (isCleanedUp) return;

        layout();
        window.addEventListener("resize", layout);

        if (reduce) {
          gsap.set(word, { opacity: 1 });
          gsap.to(root, {
            opacity: 0,
            delay: 0.6,
            duration: 0.3,
            onComplete: finish,
          });
          return;
        }

        // Smooth natural entrance for the wordmark
        gsap.fromTo(
          word,
          {
            opacity: 0,
            scale: 0.92,
            y: 15,
            svgOrigin: `${window.innerWidth / 2} ${window.innerHeight / 2}`,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
          }
        );

        checkInterval = setInterval(() => {
          if (loaded && (performance.now() - t0) / 1000 >= MIN_SECONDS) {
            if (checkInterval) clearInterval(checkInterval);
            zoom();
          }
        }, 50);
      });

    return () => {
      isCleanedUp = true;
      if (checkInterval) clearInterval(checkInterval);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", layout);
      if (activeTimeline) activeTimeline.kill();
      gsap.killTweensOf([root, word, hole]);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (isDone) return null;

  // Exact typographic styles matching Footer VINIMAY (WordmarkArc.tsx)
  const fontStyle: React.CSSProperties = {
    fontFamily:
      "var(--font-bricolage), 'Bricolage Grotesque', ui-sans-serif, sans-serif",
    fontWeight: 800,
    letterSpacing: "-0.065em",
  };

  return (
    <div
      id="preloader"
      ref={containerRef}
      role="status"
      aria-label="Loading VINIMAY"
      className="fixed inset-0 z-[9999] pointer-events-auto"
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full select-none"
        aria-hidden="true"
      >
        <defs>
          {/* Exact Hero Section Gradient: 135deg from #8279ec -> #7d74ea -> #7166e5 */}
          <linearGradient id="hero-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8279ec" />
            <stop offset="45%" stopColor="#7d74ea" />
            <stop offset="100%" stopColor="#7166e5" />
          </linearGradient>

          {/* Hero Silk Sheen Highlights */}
          <radialGradient id="silk-sheen-1" cx="30%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="silk-sheen-2" cx="75%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0" />
          </radialGradient>

          {/* Mask: White = opaque background, Black text = transparent cutout of VINIMAY */}
          <mask id="pl-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
            <text
              ref={holeRef}
              data-hole
              className="font-heading font-black select-none"
              textAnchor="middle"
              fill="#000000"
              style={{
                opacity: 0,
                ...fontStyle,
              }}
            >
              VINIMAY
            </text>
          </mask>
        </defs>

        {/* 1. Exact Hero Base Gradient Rect with Mask */}
        <rect
          width="100%"
          height="100%"
          fill="url(#hero-purple-grad)"
          mask="url(#pl-mask)"
        />

        {/* 2. Hero Silk Sheen Radial Highlights with Mask */}
        <rect
          width="100%"
          height="100%"
          fill="url(#silk-sheen-1)"
          mask="url(#pl-mask)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#silk-sheen-2)"
          mask="url(#pl-mask)"
        />

        {/* 3. Front White Text: Identical geometry, font, weight & kerning as Footer VINIMAY */}
        <text
          ref={wordRef}
          data-word
          className="font-heading font-black select-none"
          textAnchor="middle"
          fill="#ffffff"
          style={{
            opacity: 0,
            ...fontStyle,
          }}
        >
          VINIMAY
        </text>
      </svg>
    </div>
  );
}
