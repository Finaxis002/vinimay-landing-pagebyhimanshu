"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OsmoRoll } from "@/components/common/OsmoRoll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcHeading from "@/components/common/ArcHeading";

export interface OrbitalCardItem {
  badge: string;
  title: string;
  desc: string;
  gradient: string;
  shadowColor: string;
  previewBox: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export interface FeatureOrbitalCardsProps {
  id: string;
  tagline: string;
  title: string;
  description: string;
  tabLabels: string[];
  cards: OrbitalCardItem[];
}

const getCardScatters = (isMobile: boolean, count: number) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    const radiusX = isMobile ? 300 : 540;
    const radiusY = isMobile ? 240 : 400;
    return {
      x: Math.cos(angle) * radiusX,
      y: Math.sin(angle) * radiusY,
      rot: (i % 2 === 0 ? 1 : -1) * (20 + (i * 6) % 18),
      scale: 0.35,
    };
  });

export default function FeatureOrbitalCards({
  id,
  tagline,
  title,
  description,
  tabLabels,
  cards,
}: FeatureOrbitalCardsProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const totalCards = cards.length;

  const currentPosRef = useRef(0);
  const targetPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Entrance progress values for each card
  const progressValsRef = useRef<number[]>(new Array(totalCards).fill(0));
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isTouchHorizontalRef = useRef<boolean | null>(null);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const getSpacing = useCallback(() => {
    if (typeof window === "undefined") return 350;
    const w = window.innerWidth;
    if (w < 640) return 220;
    if (w < 1024) return 310;
    if (w < 1440) return 360;
    return Math.min(420, w * 0.24);
  }, []);

  const applyCardTransforms = useCallback(
    (pos: number) => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      const baseSpacing = getSpacing();
      const scatters = getCardScatters(isMobile, totalCards);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        let diff = i - pos;
        while (diff < -totalCards / 2) diff += totalCards;
        while (diff > totalCards / 2) diff -= totalCards;

        const targetX = diff * baseSpacing;
        const targetY = Math.abs(diff) * Math.abs(diff) * (isMobile ? 26 : 38);
        const targetRot = diff * (isMobile ? 8 : 10.5);
        const targetScale = Math.max(0.72, 1.04 - Math.abs(diff) * 0.09);
        const targetOpacity =
          Math.abs(diff) > 2.2 ? 0 : Math.max(0, 1 - Math.abs(diff) * 0.42);
        const zIndex = Math.round(25 - Math.abs(diff) * 5);

        const p = progressValsRef.current[i] ?? 1;
        const s = scatters[i] || { x: 0, y: 0, rot: 0, scale: 0.35 };

        const curX = s.x * (1 - p) + targetX * p;
        const curY = s.y * (1 - p) + targetY * p;
        const curRot = s.rot * (1 - p) + targetRot * p;
        const curScale = s.scale * (1 - p) + targetScale * p;
        const curOpacity = Math.max(0.2, p) * targetOpacity;

        card.style.transform = `translate3d(${curX}px, ${curY}px, 0px) rotate(${curRot}deg) scale(${curScale})`;
        card.style.opacity = `${curOpacity}`;
        card.style.zIndex = `${zIndex}`;
        card.style.pointerEvents =
          p > 0.85 && Math.abs(diff) < 0.8 ? "auto" : "none";
      });
    },
    [getSpacing, totalCards]
  );

  const snapToTarget = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const loop = () => {
      if (!isDraggingRef.current) {
        const delta = targetPosRef.current - currentPosRef.current;
        currentPosRef.current += delta * 0.16;

        if (Math.abs(delta) < 0.001) {
          currentPosRef.current = targetPosRef.current;
          applyCardTransforms(currentPosRef.current);
          const activeIdx =
            ((Math.round(currentPosRef.current) % totalCards) + totalCards) %
            totalCards;
          setActiveTabIdx(activeIdx);
          return;
        }
        applyCardTransforms(currentPosRef.current);
        const activeIdx =
          ((Math.round(currentPosRef.current) % totalCards) + totalCards) %
          totalCards;
        setActiveTabIdx(activeIdx);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
  }, [applyCardTransforms, totalCards]);

  const animateToCard = useCallback(
    (idx: number) => {
      progressValsRef.current.fill(1);
      const targetIdx = ((idx % totalCards) + totalCards) % totalCards;
      const currentIdx =
        ((Math.round(currentPosRef.current) % totalCards) + totalCards) %
        totalCards;
      if (targetIdx === currentIdx) return;

      setActiveTabIdx(targetIdx);

      let diff = targetIdx - currentPosRef.current;
      while (diff < -totalCards / 2) diff += totalCards;
      while (diff > totalCards / 2) diff -= totalCards;

      targetPosRef.current = currentPosRef.current + diff;
      snapToTarget();
    },
    [snapToTarget, totalCards]
  );

  const navigateCardsBy = (dir: number) => {
    progressValsRef.current.fill(1);
    targetPosRef.current = Math.round(currentPosRef.current) + dir;
    snapToTarget();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    applyCardTransforms(0);

    const arenaId = `#carousel-arena-${id}`;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: arenaId,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => applyCardTransforms(currentPosRef.current),
      onComplete: () => {
        progressValsRef.current.fill(1);
        applyCardTransforms(currentPosRef.current);
      },
    });

    for (let i = 0; i < totalCards; i++) {
      tl.fromTo(
        progressValsRef.current,
        { [i]: 0 },
        { [i]: 1, duration: 0.85, ease: "back.out(1.4)" },
        i === 0 ? undefined : "-=0.65"
      );
    }

    const handleResize = () => {
      applyCardTransforms(currentPosRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      tl.kill();
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [applyCardTransforms, id, totalCards]);

  const onPointerDown = (clientX: number) => {
    progressValsRef.current.fill(1);
    isDraggingRef.current = true;
    startXRef.current = clientX;
    lastXRef.current = clientX;
    lastTimeRef.current = performance.now();
    startPosRef.current = currentPosRef.current;
    velocityRef.current = 0;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  const onPointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - startXRef.current;
    const spacing = getSpacing();
    const newPos = startPosRef.current - deltaX / spacing;
    currentPosRef.current = newPos;
    applyCardTransforms(newPos);
    const activeIdx =
      ((Math.round(newPos) % totalCards) + totalCards) % totalCards;
    setActiveTabIdx(activeIdx);

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 8) {
      velocityRef.current = (clientX - lastXRef.current) / dt;
      lastXRef.current = clientX;
      lastTimeRef.current = now;
    }
  };

  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    let inertiaSteps = 0;
    if (Math.abs(velocityRef.current) > 0.4) {
      inertiaSteps = velocityRef.current > 0 ? -1 : 1;
    }

    targetPosRef.current =
      Math.round(currentPosRef.current + inertiaSteps * 0.5);
    snapToTarget();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    isTouchHorizontalRef.current = null;
    onPointerDown(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartXRef.current;
    const dy = touch.clientY - touchStartYRef.current;

    if (isTouchHorizontalRef.current === null) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5) {
        isTouchHorizontalRef.current = false;
        isDraggingRef.current = false;
        return;
      }
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
        isTouchHorizontalRef.current = true;
      }
    }

    if (isTouchHorizontalRef.current) {
      onPointerMove(touch.clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isTouchHorizontalRef.current) {
      onPointerUp();
    } else {
      isDraggingRef.current = false;
    }
    isTouchHorizontalRef.current = null;
  };

  return (
    <section
      id={`orbital-section-${id}`}
      className="relative py-20 lg:py-28 overflow-hidden bg-[#fafafa] w-full border-t border-slate-100"
    >
      {/* Top Announcement Pill */}
      <div className="flex justify-center mb-6 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#6d28d9] text-xs font-bold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
          <span>{tagline}</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
        <ArcHeading
          as="h2"
          className="text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-tight mb-4 select-none font-bold"
        >
          {title}
        </ArcHeading>
        <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Tab Pills - Wide Full-Width Container */}
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        <div className="w-full overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 w-max lg:w-auto mx-auto px-2">
            {tabLabels.map((label, idx) => (
              <button
                key={idx}
                ref={(el) => {
                  tabsRef.current[idx] = el;
                }}
                type="button"
                onClick={() => animateToCard(idx)}
                className={`feature-tab-btn shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTabIdx === idx
                    ? "active font-bold bg-purple-100 text-purple-700 border border-purple-300 shadow-xs ring-1 ring-purple-300/40"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-2xs"
                }`}
              >
                <OsmoRoll>{label}</OsmoRoll>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Arena */}
      <div
        id={`carousel-arena-${id}`}
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onMouseUp={onPointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-none h-[640px] sm:h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden touch-pan-y px-0 mt-2"
      >
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] min-w-[1200px] max-w-none h-[750px] pointer-events-none opacity-45 -z-0"
          viewBox="0 0 1600 750"
          fill="none"
        >
          <path
            d="M 50 620 C 500 360, 1100 360, 1550 620"
            stroke="#cbd5e1"
            strokeWidth="2.5"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Orbital Cards */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              data-index={i}
              className={`orbital-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white bg-gradient-to-br ${card.gradient}`}
              style={{
                boxShadow: `0 20px 50px -12px ${card.shadowColor}`,
              }}
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                  <span>{card.badge}</span>
                </div>
                <div className="text-2xl font-black mb-1">&#10038;</div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2">
                  {card.previewBox}
                </div>
                <a
                  href={card.ctaHref || "https://vinimay.sharda.co.in/client-signup"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
                >
                  <OsmoRoll fullWidth>{card.ctaText || "Explore Feature"}</OsmoRoll>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={() => navigateCardsBy(-1)}
          aria-label="Previous card"
          className="absolute left-3 sm:left-8 lg:left-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => navigateCardsBy(1)}
          aria-label="Next card"
          className="absolute right-3 sm:right-8 lg:right-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-8 text-center max-w-xl mx-auto px-4">
        <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
          Click and drag anywhere or use tabs to explore specialized capabilities.
        </p>
      </div>
    </section>
  );
}
