"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { OsmoRoll } from "./OsmoRoll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StackingCardItem {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
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
}

export default function StackingCardsSection({
  sectionTag = "ARCHITECTED FOR SCALE",
  sectionTitle,
  sectionLead = "Explore the deep capabilities that eliminate manual effort, speed up operations, and keep your financial books audit-proof.",
  cards,
}: StackingCardsSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    const steps = gsap.utils.toArray<HTMLElement>("[data-step]", container);
    const contents = steps.map((s) => s.querySelector<HTMLElement>("[data-step-content]"));
    const visuals = gsap.utils.toArray<HTMLElement>("[data-visual]", container);

    if (steps.length === 0 || visuals.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        const { desktop, reduce } = (ctx.conditions || {}) as {
          desktop?: boolean;
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

        // Trigger line: 50% on desktop (dead center), 72% on mobile (below sticky visual)
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
      className="relative w-full bg-slate-50/60 border-t border-slate-200/80"
    >
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-4 sm:pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/90 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#877EFC]" />
          <span>{sectionTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto font-bold">
          {sectionTitle}
        </h2>
        {sectionLead && (
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {sectionLead}
          </p>
        )}
      </div>

      {/* Main Grid: Steps on Left, Sticky Visual on Right (Significantly Enlarged) */}
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 px-4 sm:px-8 lg:px-12 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Sticky Visual Column (Order first on mobile, Sticky on desktop) */}
        <div className="sticky top-20 z-20 order-first flex h-[48vh] items-center justify-center bg-slate-50/90 backdrop-blur-md md:order-last md:top-0 md:h-screen md:justify-end md:bg-transparent md:backdrop-blur-none">
          {/* ENLARGED Visual Frame: Increased width & aspect ratio per user requirement */}
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
                    {/* Subtle top and bottom shading for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

                    {/* Overlay metadata pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Step {card.stepNumber} • {card.badge}</span>
                      </div>
                      {card.statBadge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/85 backdrop-blur-md border border-purple-500/50 text-[11px] font-bold text-purple-200 font-mono">
                          <span>{card.statBadge.label}:</span>
                          <span className="text-[#877EFC]">{card.statBadge.value}</span>
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
                    <DefaultCardVisual stepNumber={card.stepNumber} title={card.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps List Column */}
        <ol id="steps" className="py-6 sm:py-10 md:py-[15vh] space-y-6 md:space-y-0">
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

                {/* Key Capability Bullet Points */}
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

                {/* Optional CTA Link */}
                {card.ctaText && (
                  <div className="pt-2">
                    <a
                      href={card.ctaHref || "https://vinimay.sharda.co.in/client-signup"}
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
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Latency</div>
          <div className="font-bold text-emerald-400 text-sm mt-0.5">0.12 sec</div>
        </div>
        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Tax Precision</div>
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
