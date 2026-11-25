"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcHeading from "@/components/common/ArcHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StackingCardItem {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
  statBadge?: { label: string; value: string };
  imageUrl?: string;
  imageComponent?: React.ReactNode;
  gradientAccent?: string;
}

export interface StackingCardsSectionProps {
  sectionTag?: string;
  sectionTitle: string;
  sectionLead?: string;
  cards: StackingCardItem[];
  /** Layout mode: "sticky-split" (default 2-column) or "pinned-stage" (3-column pinned interactive stage) */
  layout?: "sticky-split" | "pinned-stage";
  /** Theme palette for pinned-stage: "vinimay" (brand purple), "warm" (editorial neutral), or "dark" */
  theme?: "vinimay" | "warm" | "dark";
  className?: string;
}

export default function StackingCardsSection({
  sectionTag = "ARCHITECTED FOR SCALE",
  sectionTitle,
  sectionLead = "Explore the deep capabilities that eliminate manual effort, speed up operations, and keep your financial books audit-proof.",
  cards,
  layout = "sticky-split",
  theme = "vinimay",
  className = "",
}: StackingCardsSectionProps) {
  if (layout === "pinned-stage") {
    return (
      <PinnedStageLayout
        sectionTag={sectionTag}
        sectionTitle={sectionTitle}
        sectionLead={sectionLead}
        cards={cards}
        theme={theme}
        className={className}
      />
    );
  }

  return (
    <StickySplitLayout
      sectionTag={sectionTag}
      sectionTitle={sectionTitle}
      sectionLead={sectionLead}
      cards={cards}
      className={className}
    />
  );
}

/* ==========================================================================
   LAYOUT 1: PINNED 3-COLUMN STAGE (from Collections Scroll Steps Prototype)
   ========================================================================== */
function PinnedStageLayout({
  sectionTag,
  sectionTitle,
  sectionLead,
  cards,
  theme = "vinimay",
  className = "",
}: {
  sectionTag?: string;
  sectionTitle: string;
  sectionLead?: string;
  cards: StackingCardItem[];
  theme?: "vinimay" | "warm" | "dark";
  className?: string;
}) {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const themeConfig = {
    vinimay: {
      bg: "bg-slate-50/70",
      border: "border-slate-200/80",
      activeText: "#0f172a",
      faintText: "#94a3b8",
      mutedText: "#475569",
      barTrack: "bg-slate-200",
      barFill: "#6d28d9",
      pillBg: "bg-purple-50 text-purple-700 border-purple-200/90",
    },
    warm: {
      bg: "bg-[#fcfbfa]",
      border: "border-[#eee8e5]",
      activeText: "#3a1d17",
      faintText: "#cfc6c3",
      mutedText: "#8d807c",
      barTrack: "bg-[#eee8e5]",
      barFill: "#3a1d17",
      pillBg: "bg-[#fbe3df] text-[#b4574a] border-[#f2a58f]",
    },
    dark: {
      bg: "bg-[#0b0f17]",
      border: "border-slate-800",
      activeText: "#f8fafc",
      faintText: "#475569",
      mutedText: "#94a3b8",
      barTrack: "bg-slate-800",
      barFill: "#a855f7",
      pillBg: "bg-purple-950/60 text-purple-300 border-purple-800/60",
    },
  }[theme];

  useEffect(() => {
    if (typeof window === "undefined") return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const pinEl = pinRef.current;
    const stageEl = stageRef.current;
    const listEl = listRef.current;
    if (!pinEl || !stageEl || !listEl || cards.length === 0) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-pinned-panel]", pinEl);
    const titles = gsap.utils.toArray<HTMLElement>("[data-pinned-title]", pinEl);
    const descs = gsap.utils.toArray<HTMLElement>("[data-pinned-desc]", pinEl);

    if (panels.length === 0 || titles.length === 0) return;

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
          isMobile?: boolean;
          reduceMotion?: boolean;
        };

        const stepHeight = isDesktop ? 140 : 54;

        if (reduceMotion) {
          gsap.set(titles, { color: themeConfig.activeText, opacity: 1, filter: "none" });
          gsap.set(panels, { autoAlpha: 1, y: 0, scale: 1 });
          gsap.set(descs, { autoAlpha: 1, y: 0 });
          return;
        }

        // Initial states
        gsap.set(titles, { color: themeConfig.faintText, filter: "blur(2.5px)", opacity: 0.45 });
        if (titles[0]) gsap.set(titles[0], { color: themeConfig.activeText, filter: "blur(0px)", opacity: 1 });

        if (panels.length > 1) {
          gsap.set(panels.slice(1), { autoAlpha: 0, y: isDesktop ? 40 : 20, scale: 0.97 });
        }
        if (descs.length > 1) {
          gsap.set(descs.slice(1), { autoAlpha: 0, y: isDesktop ? 20 : 12 });
        }

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: pinEl,
            start: isDesktop ? "top top" : "top top+=50",
            end: () => `+=${panels.length * (isDesktop ? 100 : 75)}%`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (barRef.current) {
                gsap.set(barRef.current, { scaleY: self.progress });
              }
            },
          },
        });

        tl.to({}, { duration: 0.5 }); // hold first step

        for (let i = 1; i < panels.length; i++) {
          const label = `step_${i}`;
          const currentUi = panels[i].querySelector("[data-ui-floating]");

          tl.addLabel(label, ">")
            .to(
              panels[i - 1],
              { autoAlpha: 0, y: isDesktop ? -40 : -20, scale: 0.97, duration: 1 },
              label
            )
            .to(descs[i - 1], { autoAlpha: 0, y: isDesktop ? -20 : -12, duration: 0.8 }, label)
            .to(
              panels[i],
              { autoAlpha: 1, y: 0, scale: 1, duration: 1 },
              `${label}+=0.2`
            )
            .to(descs[i], { autoAlpha: 1, y: 0, duration: 0.8 }, `${label}+=0.35`);

          if (currentUi) {
            tl.fromTo(
              currentUi,
              { y: isDesktop ? 35 : 18 },
              { y: 0, duration: 1 },
              `${label}+=0.3`
            );
          }

          tl.to(listEl, { y: -i * stepHeight, duration: 1 }, label)
            .to(titles[i - 1], { color: themeConfig.faintText, filter: "blur(2.5px)", opacity: 0.45, duration: 0.6 }, label)
            .to(
              titles[i],
              { color: themeConfig.activeText, filter: "blur(0px)", opacity: 1, duration: 0.6 },
              `${label}+=0.3`
            )
            .to({}, { duration: 0.5 });
        }

        // 3D Pointer move tilt only on desktop with fine pointer
        if (isDesktop && window.matchMedia("(hover: hover)").matches) {
          const handlePointerMove = (e: PointerEvent) => {
            const r = stageEl.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(stageEl, {
              rotationY: x * 6,
              rotationX: -y * 6,
              transformPerspective: 900,
              duration: 0.5,
            });
          };

          const handlePointerLeave = () => {
            gsap.to(stageEl, { rotationY: 0, rotationX: 0, duration: 0.6 });
          };

          stageEl.addEventListener("pointermove", handlePointerMove);
          stageEl.addEventListener("pointerleave", handlePointerLeave);

          return () => {
            stageEl.removeEventListener("pointermove", handlePointerMove);
            stageEl.removeEventListener("pointerleave", handlePointerLeave);
          };
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, [cards, themeConfig.activeText, themeConfig.faintText]);

  return (
    <section
      className={`relative w-full ${themeConfig.bg} border-t ${themeConfig.border} ${className}`}
    >
      {/* Section Header */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-4 sm:pb-8 text-center">
        <div className="relative z-10">
          {sectionTag && (
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs border ${themeConfig.pillBg}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{sectionTag}</span>
            </div>
          )}
          <div>
            <ArcHeading
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl mx-auto font-bold"
              itemClassName={theme === "dark" ? "text-white" : "text-slate-900"}
            >
              {sectionTitle}
            </ArcHeading>
          </div>
          {sectionLead && (
            <p
              className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: themeConfig.mutedText }}
            >
              {sectionLead}
            </p>
          )}
        </div>
      </div>

      {/* Pinned 3-Column Interactive Stage (Mobile Viewport Optimized) */}
      <div
        ref={pinRef}
        className="relative h-[100dvh] min-h-[500px] w-full overflow-hidden flex items-center justify-center py-2 md:py-0"
      >
        <div className="mx-auto h-full max-w-[1340px] w-full px-4 sm:px-8 md:px-12 flex flex-col md:grid md:grid-cols-[1.1fr_auto_1.1fr] md:gap-8 lg:gap-12 items-center justify-center">
          {/* Column 1: Titles List */}
          <div
            className="relative w-full h-[54px] md:h-[520px] overflow-hidden order-1"
            style={{
              maskImage:
                "linear-gradient(transparent, #000 20%, #000 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(transparent, #000 20%, #000 80%, transparent)",
            }}
          >
            <div
              ref={listRef}
              className="absolute left-0 right-0"
              style={{ top: "50%", marginTop: "-27px" }}
            >
              {cards.map((card, idx) => (
                <div
                  key={card.id || idx}
                  data-pinned-title
                  style={{
                    filter: idx === 0 ? "blur(0px)" : "blur(2.5px)",
                    opacity: idx === 0 ? 1 : 0.45,
                  }}
                  className="h-[54px] md:h-[140px] flex flex-col justify-center transition-all px-2 text-center md:text-left will-change-[filter,opacity]"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-0.5 md:mb-1">
                    <span>STEP {card.stepNumber}</span>
                    <span>•</span>
                    <span className="truncate">{card.badge}</span>
                  </div>
                  <h3 className="text-base sm:text-xl md:text-2xl lg:text-[2rem] font-bold leading-tight line-clamp-1 md:line-clamp-2">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Center Stage with 3D Tilt */}
          <div
            ref={stageRef}
            className="relative order-2 shrink-0 w-[min(90vw,350px)] sm:w-[400px] md:w-[420px] lg:w-[460px] aspect-[16/11] sm:aspect-[420/480] my-2 md:my-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((card, idx) => (
              <div
                key={card.id || idx}
                data-pinned-panel
                style={{
                  opacity: idx === 0 ? 1 : 0,
                  visibility: idx === 0 ? "visible" : "hidden",
                }}
                className="absolute inset-0 select-none overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-950/25"
              >
                {card.imageUrl ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 460px"
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/20" />

                    {/* Floating metadata card inside visual */}
                    <div
                      data-ui-floating
                      className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between"
                    >
                      <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[10px] sm:text-[11px] font-semibold text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Step {card.stepNumber} • {card.badge}</span>
                      </div>
                      {card.statBadge && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-purple-950/90 backdrop-blur-md border border-purple-500/50 text-[10px] sm:text-[11px] font-bold text-purple-200 font-mono">
                          <span>{card.statBadge.label}:</span>
                          <span className="text-[#877EFC]">
                            {card.statBadge.value}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : card.imageComponent ? (
                  <div className="h-full w-full p-4 flex items-center justify-center bg-slate-900">
                    {card.imageComponent}
                  </div>
                ) : (
                  <div className="h-full w-full p-6 flex flex-col justify-center bg-slate-950 text-white">
                    <DefaultCardVisual
                      stepNumber={card.stepNumber}
                      title={card.title}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 3: Descriptions, Bullets, and CTA */}
          <div className="relative w-full h-[90px] sm:h-[95px] md:h-[520px] order-3 mt-1 md:mt-0">
            {cards.map((card, idx) => (
              <div
                key={card.id || idx}
                data-pinned-desc
                style={{
                  opacity: idx === 0 ? 1 : 0,
                  visibility: idx === 0 ? "visible" : "hidden",
                }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-[360px] mx-auto md:mx-0 space-y-2 md:space-y-3.5 transition-opacity text-center md:text-left"
              >
                <p
                  className="text-xs sm:text-sm md:text-base leading-snug md:leading-relaxed"
                  style={{ color: themeConfig.mutedText }}
                >
                  {card.description}
                </p>

                {card.bullets && card.bullets.length > 0 && (
                  <ul className="space-y-2 pt-1 hidden sm:block">
                    {card.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-purple-100 border border-purple-200 text-[#877EFC] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                        </span>
                        <span className="text-xs text-slate-700 font-medium leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.ctaText && (
                  <div className="pt-1">
                    <a
                      href={
                        card.ctaHref || "https://vinimay.sharda.co.in/client-signup"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-purple-900 text-white text-xs font-bold transition-all group shadow-sm"
                    >
                      <OsmoRoll>{card.ctaText}</OsmoRoll>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Progress Bar */}
        <div
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-24 w-[3px] rounded-full overflow-hidden"
          style={{ background: themeConfig.barTrack }}
        >
          <div
            ref={barRef}
            className="w-full origin-top rounded-full transition-transform"
            style={{
              height: "100%",
              background: themeConfig.barFill,
              transform: "scaleY(0)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   LAYOUT 2: ORIGINAL SPLIT-STICKY CARDS
   ========================================================================== */
function StickySplitLayout({
  sectionTag,
  sectionTitle,
  sectionLead,
  cards,
  className = "",
}: {
  sectionTag?: string;
  sectionTitle: string;
  sectionLead?: string;
  cards: StackingCardItem[];
  className?: string;
}) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    const steps = gsap.utils.toArray<HTMLElement>("[data-step]", container);
    const contents = steps.map((s) =>
      s.querySelector<HTMLElement>("[data-step-content]")
    );
    const visuals = gsap.utils.toArray<HTMLElement>("[data-visual]", container);

    if (steps.length === 0 || visuals.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        const { desktop, reduce } = (ctx.conditions || {}) as {
          desktop?: boolean;
          mobile?: boolean;
          reduce?: boolean;
        };

        const textTime = reduce ? 0 : 0.45;
        const imageTime = reduce ? 0 : 0.85;

        let current = 0;

        // Set initial states
        if (contents[0]) {
          gsap.set(contents[0], { opacity: 1 });
        }
        for (let i = 1; i < contents.length; i++) {
          if (contents[i]) {
            gsap.set(contents[i], { opacity: 0.25 });
          }
        }

        visuals.forEach((v, i) => {
          gsap.set(v, {
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 2 : 1,
            scale: 1,
          });
        });

        function activate(next: number) {
          if (next === current || next < 0 || next >= steps.length) return;

          const prev = current;
          current = next;

          // Animate text opacity
          if (contents[prev]) {
            gsap.to(contents[prev], {
              opacity: 0.25,
              duration: textTime,
              ease: "power2.out",
              overwrite: true,
            });
          }
          if (contents[next]) {
            gsap.to(contents[next], {
              opacity: 1,
              duration: textTime,
              ease: "power2.out",
              overwrite: true,
            });
          }

          // Cross-fade visuals with smooth scale settle
          if (visuals[next] && visuals[prev]) {
            gsap.set(visuals[next], { zIndex: 3 });
            gsap.set(visuals[prev], { zIndex: 2 });

            gsap.fromTo(
              visuals[next],
              { opacity: 0, scale: reduce ? 1 : 1.08 },
              {
                opacity: 1,
                scale: 1,
                duration: imageTime,
                ease: "power2.out",
                overwrite: true,
              }
            );

            gsap.to(visuals[prev], {
              opacity: 0,
              duration: imageTime,
              ease: "power2.inOut",
              overwrite: true,
              onComplete: () => {
                if (visuals[prev]) {
                  gsap.set(visuals[prev], { zIndex: 1 });
                }
              },
            });
          }
        }

        // Trigger line: 50% on desktop, 72% on mobile
        const line = desktop ? "50%" : "72%";

        steps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: `top ${line}`,
            end: `bottom ${line}`,
            onToggle: (self) => {
              if (self.isActive) {
                activate(i);
              }
            },
          });
        });
      }
    );

    return () => {
      mm.revert();
    };
  }, [cards]);

  return (
    <section
      id="sticky-steps"
      ref={containerRef}
      className={`relative w-full bg-slate-50/60 border-t border-slate-200/80 ${className}`}
    >
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-4 sm:pb-8 text-center">
        {sectionTag && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/90 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#877EFC]" />
            <span>{sectionTag}</span>
          </div>
        )}
        <div>
          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto font-bold"
          >
            {sectionTitle}
          </ArcHeading>
        </div>
        {sectionLead && (
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {sectionLead}
          </p>
        )}
      </div>

      {/* Main Grid: Steps on Left, Sticky Visual on Right */}
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 px-4 sm:px-8 lg:px-12 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Sticky Visual Column */}
        <div className="sticky top-20 z-20 order-first flex h-[48vh] items-center justify-center bg-slate-50/90 backdrop-blur-md md:order-last md:top-0 md:h-screen md:justify-end md:bg-transparent md:backdrop-blur-none">
          <div
            id="visual"
            className="relative w-full max-w-[28rem] sm:max-w-[34rem] md:w-[38vw] lg:w-[44vw] md:max-w-[46rem] aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.25rem] bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-950/20"
          >
            {cards.map((card, idx) => (
              <div
                key={card.id || idx}
                data-visual
                className={`absolute inset-0 h-full w-full ${
                  idx === 0 ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
                }`}
              >
                {card.imageUrl ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 44rem"
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Step {card.stepNumber} • {card.badge}</span>
                      </div>
                      {card.statBadge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/85 backdrop-blur-md border border-purple-500/50 text-[11px] font-bold text-purple-200 font-mono">
                          <span>{card.statBadge.label}:</span>
                          <span className="text-[#877EFC]">
                            {card.statBadge.value}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : card.imageComponent ? (
                  <div className="h-full w-full p-4 sm:p-6 flex items-center justify-center bg-slate-900">
                    {card.imageComponent}
                  </div>
                ) : (
                  <div className="h-full w-full p-6 sm:p-8 flex flex-col justify-center bg-slate-950 text-white">
                    <DefaultCardVisual
                      stepNumber={card.stepNumber}
                      title={card.title}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps List Column */}
        <ol
          id="steps"
          className="py-6 sm:py-10 md:py-[15vh] space-y-6 md:space-y-0"
        >
          {cards.map((card, idx) => (
            <li
              key={card.id || idx}
              data-step
              className="flex min-h-[50vh] md:min-h-[62vh] items-center"
            >
              <div
                data-step-content
                className={`max-w-[32rem] transition-opacity duration-300 ${
                  idx === 0 ? "opacity-100" : "opacity-25"
                } space-y-4`}
              >
                {/* Step Pill & Badge */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold shadow-xs">
                    {card.stepNumber}
                  </span>
                  <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#877EFC]">
                    {card.badge}
                  </p>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 tracking-tight leading-[1.12]">
                  {card.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>

                {/* Bullets */}
                {card.bullets && card.bullets.length > 0 && (
                  <ul className="space-y-2.5 pt-1">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-purple-100/80 border border-purple-200 text-[#877EFC] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Link */}
                {card.ctaText && (
                  <div className="pt-2">
                    <a
                      href={
                        card.ctaHref || "https://vinimay.sharda.co.in/client-signup"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-purple-950 text-white text-xs sm:text-sm font-bold transition-all group shadow-sm"
                    >
                      <OsmoRoll>{card.ctaText}</OsmoRoll>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Fallback High-Tech Card Visual Node */
function DefaultCardVisual({
  stepNumber,
  title,
}: {
  stepNumber: string;
  title: string;
}) {
  return (
    <div className="space-y-4 font-mono text-xs w-full max-w-md mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <span className="text-[10px] text-slate-400">
          VINIMAY ARCHITECTURE • STEP {stepNumber}
        </span>
      </div>

      <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/50 space-y-2">
        <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">
          LIVE WORKFLOW SYNC
        </div>
        <div className="text-white font-bold text-base tracking-tight truncate">
          {title}
        </div>
        <div className="text-[11px] text-slate-400">
          Status: Automated &amp; Synchronized ✓
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-[11px]">
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">
            Latency
          </div>
          <div className="font-bold text-emerald-400 text-sm mt-0.5">0.12 sec</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">
            Tax Precision
          </div>
          <div className="font-bold text-purple-400 text-sm mt-0.5">100.00%</div>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Verified by Vinimay Cloud Engine</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Active
        </span>
      </div>
    </div>
  );
}
