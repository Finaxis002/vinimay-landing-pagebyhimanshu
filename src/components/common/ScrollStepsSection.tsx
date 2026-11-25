"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcHeading from "@/components/common/ArcHeading";

export interface ScrollStepItem {
  id?: string;
  /** Primary title displayed in the sliding vertical list on the left */
  title: string | React.ReactNode;
  /** Explanatory description displayed on the right */
  description: string | React.ReactNode;
  /** Visual stage card or panel node. If omitted, default showcase visual will be used */
  visual?: React.ReactNode;
}

export interface ScrollStepsSectionProps {
  /** Optional top header section */
  header?: {
    eyebrow?: string;
    title: string | React.ReactNode;
    subtitle?: string;
  };
  /** Steps list (defaults to the 4 rich interactive panels from the prototype) */
  steps?: ScrollStepItem[];
  /** Theme mode: "warm" (original editorial aesthetic), "vinimay" (brand purple), or "dark" */
  theme?: "warm" | "vinimay" | "dark";
  /** Optional bottom CTA banner */
  ctaBanner?: {
    title: string;
    buttonText?: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
  /** Show the "Scroll to explore" hint below the header */
  showExploreHint?: boolean;
}

/** Reusable SVG Character illustration with custom theme colors */
export function PersonAvatar({
  hair = "#4b3a32",
  skin = "#d8a58a",
  top = "#1f1a18",
  className = "",
}: {
  hair?: string;
  skin?: string;
  top?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 300 360" className={className} aria-hidden="true">
      <path
        d="M20 360 C26 290 70 250 120 240 L180 240 C230 250 274 290 280 360Z"
        fill={top}
      />
      <rect x="128" y="196" width="44" height="52" rx="18" fill={skin} />
      <path
        d="M92 118 C88 40 214 36 210 118 C212 175 186 212 150 212 C114 212 90 175 92 118Z"
        fill={skin}
      />
      <path
        d="M84 126 C70 36 230 30 216 126 C214 90 196 66 150 64 C104 66 86 90 84 126Z"
        fill={hair}
      />
      <path
        d="M84 120 C78 170 86 214 100 232 C92 190 94 150 98 122Z M216 120 C222 170 214 214 200 232 C208 190 206 150 202 122Z"
        fill={hair}
      />
    </svg>
  );
}

/** Default Panel 1: Denial research & revenue recovery (Mobile Optimized) */
export function DefaultPanel1() {
  return (
    <div className="absolute inset-0">
      {/* Background container */}
      <div className="absolute left-[3%] right-[3%] top-0 bottom-[8%] rounded-2xl overflow-hidden bg-[#7d7a60]">
        <div
          className="absolute inset-0 bg-[#efb5a6]"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 62%, 97% 64%, 93% 61%, 88% 65%, 82% 62%, 76% 66%, 70% 63%, 63% 67%, 56% 64%, 48% 68%, 40% 64%, 33% 67%, 25% 63%, 17% 66%, 9% 63%, 0 66%)",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,.07) 0 1px, transparent 1px 14px)",
          }}
        />
      </div>

      {/* Character */}
      <PersonAvatar
        hair="#4b3a32"
        skin="#d8a58a"
        top="#1f1a18"
        className="absolute left-[16%] top-[2%] w-[68%]"
      />

      {/* Floating UI card - Clamped margins to prevent mobile overflow */}
      <div
        data-ui-card
        className="absolute left-1.5 sm:left-[-4%] right-2 sm:right-[16%] bottom-[2%] rounded-xl bg-white text-[#3a1d17] p-0 shadow-[0_18px_40px_-12px_rgba(40,15,10,.28),0_0_0_1px_rgba(0,0,0,.06)] text-[11px]"
      >
        <div className="flex items-center justify-between px-3 py-1.5 sm:py-2">
          <span className="text-[#8d807c] font-medium">CLM-682475</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#fbe3df] text-[#b4574a]">
            Denied
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 sm:py-2 border-t border-[#eee8e5]">
          <span className="text-[#8d807c]">Research</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#eee8e5]">
            AI Agent
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 sm:py-2 border-t border-[#eee8e5]">
          <span className="font-bold">CLM-8451264</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#fdf0cf] text-[#9a7416]">
            45 days
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 sm:py-2 border-t border-[#eee8e5]">
          <span className="text-[#8d807c]">Follow up</span>
          <span className="space-x-1">
            <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#eee8e5]">
              AI Agent
            </span>
            <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#eee8e5]">
              Specialist
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2 sm:py-2.5 border-t border-[#eee8e5]">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-[#2a0f0a] text-white font-serif text-sm">
            A
          </div>
          <span className="font-medium text-[11px]">Revenue recovered</span>
          <span className="font-serif ml-auto text-base sm:text-lg font-bold">$8,248.00</span>
        </div>
      </div>
    </div>
  );
}

/** Default Panel 2: Live metrics & A/R visibility (Mobile Optimized) */
export function DefaultPanel2() {
  return (
    <div className="absolute inset-0">
      {/* Background container */}
      <div className="absolute left-[3%] right-[3%] top-0 bottom-[8%] rounded-2xl overflow-hidden bg-gradient-to-b from-[#7d7a58] to-[#8a8466]">
        <div className="absolute left-3 top-4 text-[10px] leading-4 text-[#e9d7b8] font-mono opacity-70">
          CURRENT
          <br />
          AMOUNT
          <br />
          338.00
          <br />
          175.00
          <br />
          313.00
        </div>
      </div>

      <div
        className="absolute left-[4%] bottom-[2%] h-[26%] w-[55%] rounded-lg bg-[#f2a58f]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,.07) 0 1px, transparent 1px 14px)",
        }}
      />

      {/* Character */}
      <PersonAvatar
        hair="#5a3a2c"
        skin="#dba98f"
        top="#8f958c"
        className="absolute left-[18%] top-[4%] w-[66%]"
      />

      {/* Floating UI card - Clamped margins to prevent mobile overflow */}
      <div
        data-ui-card
        className="absolute left-2 sm:left-[8%] right-1.5 sm:right-[-4%] bottom-[5%] rounded-xl bg-white text-[#3a1d17] p-0 shadow-[0_18px_40px_-12px_rgba(40,15,10,.28),0_0_0_1px_rgba(0,0,0,.06)] text-[11px]"
      >
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 px-3 py-2 sm:py-2.5">
          <div>
            <div className="text-[#8d807c] text-[10px]">Total A/R</div>
            <div className="font-serif text-base sm:text-lg font-bold">$2.4M</div>
            <div className="text-[#3d8b5a] text-[9.5px] font-semibold">+3% wk</div>
          </div>
          <div>
            <div className="text-[#8d807c] text-[10px]">Recovery</div>
            <div className="font-serif text-base sm:text-lg font-bold">91%</div>
            <div className="text-[#3d8b5a] text-[9.5px] font-semibold">+4pts mo</div>
          </div>
          <div>
            <div className="text-[#8d807c] text-[10px]">Days A/R</div>
            <div className="font-serif text-base sm:text-lg font-bold">32</div>
            <div className="text-[#3d8b5a] text-[9.5px] font-semibold">On target</div>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-1 border-t border-[#eee8e5] text-[#8d807c] text-[10px]">
          <span>Claim</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-[#eee8e5]">
          <span className="font-bold">CLM-7267389</span>
          <span>$4,200</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#dff3e4] text-[#2f7a4a]">
            Paid
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-[#eee8e5]">
          <span className="font-bold">CLM-6488653</span>
          <span>$1,250</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#fdf0cf] text-[#9a7416]">
            Aging
          </span>
        </div>
      </div>
    </div>
  );
}

/** Default Panel 3: Consistent execution & audit log (Mobile Optimized) */
export function DefaultPanel3() {
  return (
    <div className="absolute inset-0">
      {/* Background container */}
      <div className="absolute left-[3%] right-[3%] top-0 bottom-[8%] rounded-2xl overflow-hidden bg-gradient-to-b from-[#b98d86] to-[#8a5a48]">
        <div
          className="absolute inset-0 bg-[#f0d9d3]"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 62%, 97% 64%, 93% 61%, 88% 65%, 82% 62%, 76% 66%, 70% 63%, 63% 67%, 56% 64%, 48% 68%, 40% 64%, 33% 67%, 25% 63%, 17% 66%, 9% 63%, 0 66%)",
          }}
        />
        <div className="absolute left-4 top-3 font-serif italic text-xl text-[#6b4a44] opacity-60">
          J. Morgan
        </div>
        <div className="absolute left-4 top-10 text-[9.5px] leading-3.5 text-[#6b4a44] opacity-70">
          James Morgan • AGHB
        </div>
      </div>

      {/* Character */}
      <PersonAvatar
        hair="#b88a62"
        skin="#e6bfa8"
        top="#5b4034"
        className="absolute left-[14%] top-[5%] w-[66%]"
      />

      {/* Floating UI card - Clamped margins to prevent mobile overflow */}
      <div
        data-ui-card
        className="absolute left-1.5 sm:left-[-4%] right-1.5 sm:right-[4%] bottom-[5%] rounded-xl bg-white text-[#3a1d17] p-0 shadow-[0_18px_40px_-12px_rgba(40,15,10,.28),0_0_0_1px_rgba(0,0,0,.06)] text-[11px]"
      >
        <div className="flex items-center justify-between px-3 py-1.5 text-[#8d807c] text-[10px]">
          <span>Action</span>
          <span>By</span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-[#eee8e5]">
          <span className="truncate pr-2">Portal status verified</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-medium bg-[#efe3fa] text-[#7a4fb0] shrink-0">
            AI Agent
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-[#eee8e5]">
          <span className="truncate pr-2">Denial CO-16 identified</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-medium bg-[#efe3fa] text-[#7a4fb0] shrink-0">
            AI Agent
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-[#eee8e5]">
          <span className="truncate pr-2">Appeal letter drafted</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-medium bg-[#efe3fa] text-[#7a4fb0] shrink-0">
            AI Agent
          </span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-[#eee8e5]">
          <span className="truncate pr-2">Letter reviewed & submitted</span>
          <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-semibold bg-[#fbe6dc] text-[#b4573a] shrink-0">
            Specialist
          </span>
        </div>
      </div>
    </div>
  );
}

/** Default Panel 4: Ownership through resolution timeline (Mobile Optimized) */
export function DefaultPanel4() {
  return (
    <div className="absolute inset-0">
      {/* Background container */}
      <div className="absolute left-[3%] right-[3%] top-0 bottom-[2%] rounded-2xl overflow-hidden bg-[#a6846c]">
        <div className="absolute -left-8 -bottom-7 h-40 w-40 rounded-full bg-[#c79cf0]" />
        <div className="absolute -right-7 -bottom-5 h-36 w-36 rounded-full bg-[#c79cf0]" />
        <div className="absolute left-1/3 -bottom-10 h-28 w-36 rounded-full bg-[#fdeee3]" />
      </div>

      {/* Floating mini header card */}
      <div
        data-ui-card
        className="absolute left-[8%] right-[8%] top-[5%] flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#f8f1ea] text-[#3a1d17] shadow-[0_18px_40px_-12px_rgba(40,15,10,.28),0_0_0_1px_rgba(0,0,0,.06)]"
      >
        <div className="grid h-7 w-7 place-items-center rounded-lg bg-[#2a0f0a] text-white font-serif text-sm">
          A
        </div>
        <div>
          <div className="text-[#8d807c] text-[9.5px]">Assigned to</div>
          <b className="text-[12px]">Amperos RCM</b>
        </div>
      </div>

      {/* Floating timeline card */}
      <div
        data-ui-card
        className="absolute left-[8%] right-[8%] top-[24%] p-3 sm:p-4 rounded-xl bg-white text-[#3a1d17] shadow-[0_18px_40px_-12px_rgba(40,15,10,.28),0_0_0_1px_rgba(0,0,0,.06)] text-[11px]"
      >
        <div className="flex items-start justify-between">
          <b className="text-[12px]">CLM-8456287</b>
          <span className="font-serif text-base sm:text-lg font-bold">$1,875.00</span>
        </div>
        <div className="text-[#8d807c] mb-3 mt-0.5 text-[10px]">Aug 08 • CO-16 denial</div>

        <ul className="space-y-2.5">
          {[
            { title: "Claim ingested", date: "Aug 10" },
            { title: "Denial researched", date: "Aug 24" },
            { title: "Appeal submitted", date: "Aug 24" },
            { title: "Follow-up placed", date: "Sep 12" },
            { title: "Payment received", date: "Sep 18" },
          ].map((item, idx, arr) => (
            <li key={idx} className="relative pl-3.5">
              <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-[#b98ae8]" />
              {idx !== arr.length - 1 && (
                <span className="absolute left-[2.5px] top-2.5 bottom-[-10px] w-[1px] bg-[#eee8e5]" />
              )}
              <b className="text-[10.5px]">{item.title}</b>
              <span className="text-[#8d807c] text-[9.5px] ml-2">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DEFAULT_STEPS: ScrollStepItem[] = [
  {
    id: "step-1",
    title: (
      <>
        Collections that
        <br className="hidden md:block" /> keep moving
      </>
    ),
    description:
      "AI agents work claims end-to-end, while Amperos RCM experts provide oversight and guidance for resolving complex denials and escalations.",
    visual: <DefaultPanel1 />,
  },
  {
    id: "step-2",
    title: (
      <>
        Complete
        <br className="hidden md:block" /> visibility
      </>
    ),
    description:
      "Every interaction, update, and decision is captured and summarized so teams always know the status of their collections activity.",
    visual: <DefaultPanel2 />,
  },
  {
    id: "step-3",
    title: (
      <>
        Consistent
        <br className="hidden md:block" /> execution
      </>
    ),
    description:
      "Workflows run reliably across claims, reducing the operational variability that often slows collections — whether following your existing SOPs or proven best-practice workflows.",
    visual: <DefaultPanel3 />,
  },
  {
    id: "step-4",
    title: (
      <>
        Ownership
        <br className="hidden md:block" /> through resolution
      </>
    ),
    description:
      "Claims aren’t just worked. They’re pursued through to outcome, with clear accountability for results.",
    visual: <DefaultPanel4 />,
  },
];

export default function ScrollStepsSection({
  header = {
    title: (
      <>
        AI agents that recover revenue,{" "}
        <span className="opacity-60">backed by RCM experts</span>
      </>
    ),
  },
  steps = DEFAULT_STEPS,
  theme = "warm",
  ctaBanner = {
    title: "Ready to recover more revenue?",
    buttonText: "Book a demo",
    href: "#",
  },
  className = "",
  showExploreHint = true,
}: ScrollStepsSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const themeStyles = {
    warm: {
      bg: "bg-[#fcfbfa]",
      textInk: "#3a1d17",
      textMuted: "#9b8d89",
      textFaint: "#cfc6c3",
      line: "#eee8e5",
      darkBg: "bg-[#2a0f0a]",
      barBg: "bg-[#eee8e5]",
      barFill: "#3a1d17",
    },
    vinimay: {
      bg: "bg-white",
      textInk: "#1e293b",
      textMuted: "#64748b",
      textFaint: "#cbd5e1",
      line: "#f1f5f9",
      darkBg: "bg-[#1e1b4b]",
      barBg: "bg-slate-200",
      barFill: "#6d28d9",
    },
    dark: {
      bg: "bg-[#15100e]",
      textInk: "#f4e9e4",
      textMuted: "#a39793",
      textFaint: "#5a4d49",
      line: "#352925",
      darkBg: "bg-[#0b0605]",
      barBg: "bg-[#352925]",
      barFill: "#f4e9e4",
    },
  }[theme];

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const pinEl = pinRef.current;
    const stageEl = stageRef.current;
    const listEl = listRef.current;
    if (!pinEl || !stageEl || !listEl) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-step-panel]", pinEl);
    const titles = gsap.utils.toArray<HTMLElement>("[data-step-title]", pinEl);
    const descs = gsap.utils.toArray<HTMLElement>("[data-step-desc]", pinEl);

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
          gsap.set(titles, { color: themeStyles.textInk, opacity: 1, filter: "none" });
          gsap.set(panels, { autoAlpha: 1, y: 0, scale: 1 });
          gsap.set(descs, { autoAlpha: 1, y: 0 });
          return;
        }

        // Initial states
        gsap.set(titles, { color: themeStyles.textFaint, filter: "blur(2.5px)", opacity: 0.45 });
        if (titles[0]) gsap.set(titles[0], { color: themeStyles.textInk, filter: "blur(0px)", opacity: 1 });

        if (panels.length > 1) {
          gsap.set(panels.slice(1), { autoAlpha: 0, y: isDesktop ? 50 : 25, scale: 0.97 });
        }
        if (descs.length > 1) {
          gsap.set(descs.slice(1), { autoAlpha: 0, y: isDesktop ? 24 : 14 });
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

        tl.to({}, { duration: 0.5 });

        for (let i = 1; i < panels.length; i++) {
          const label = `step_${i}`;
          const currentUi = panels[i].querySelector("[data-ui-card]");

          tl.addLabel(label, ">")
            .to(
              panels[i - 1],
              { autoAlpha: 0, y: isDesktop ? -50 : -25, scale: 0.97, duration: 1 },
              label
            )
            .to(descs[i - 1], { autoAlpha: 0, y: isDesktop ? -24 : -14, duration: 0.8 }, label)
            .to(
              panels[i],
              { autoAlpha: 1, y: 0, scale: 1, duration: 1 },
              `${label}+=0.25`
            )
            .to(descs[i], { autoAlpha: 1, y: 0, duration: 0.8 }, `${label}+=0.4`);

          if (currentUi) {
            tl.fromTo(
              currentUi,
              { y: isDesktop ? 40 : 20 },
              { y: 0, duration: 1 },
              `${label}+=0.35`
            );
          }

          tl.to(listEl, { y: -i * stepHeight, duration: 1 }, label)
            .to(titles[i - 1], { color: themeStyles.textFaint, filter: "blur(2.5px)", opacity: 0.45, duration: 0.6 }, label)
            .to(
              titles[i],
              { color: themeStyles.textInk, filter: "blur(0px)", opacity: 1, duration: 0.6 },
              `${label}+=0.3`
            )
            .to({}, { duration: 0.5 });
        }

        // Only attach 3D tilt on desktop with hover capability
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
  }, [steps, themeStyles.textFaint, themeStyles.textInk]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full ${themeStyles.bg} text-[${themeStyles.textInk}] font-sans ${className}`}
    >
      {/* Optional Top Header */}
      {header && (
        <div className="relative px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 pb-6 sm:pb-10 text-center max-w-7xl mx-auto">
          <div className="relative z-10">
            {header.eyebrow && (
              <p
                className="text-xs uppercase tracking-wider font-semibold mb-2.5"
                style={{ color: themeStyles.textMuted }}
              >
                {header.eyebrow}
              </p>
            )}
            <div>
              <ArcHeading
                as="h2"
                className="font-serif mx-auto max-w-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-bold"
              >
                {header.title}
              </ArcHeading>
            </div>
            {header.subtitle && (
              <p
                className="mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
                style={{ color: themeStyles.textMuted }}
              >
                {header.subtitle}
              </p>
            )}
            {showExploreHint && (
              <p
                className="mt-4 text-xs sm:text-sm font-medium animate-bounce"
                style={{ color: themeStyles.textMuted }}
              >
                Scroll to explore ↓
              </p>
            )}
          </div>
        </div>
      )}

      {/* PINNED INTERACTIVE 3-COLUMN STAGE (Mobile Viewport Optimized) */}
      <div
        ref={pinRef}
        className="relative h-[100dvh] min-h-[500px] w-full overflow-hidden flex items-center justify-center py-2 sm:py-0"
      >
        <div className="mx-auto h-full max-w-[1300px] w-full px-4 sm:px-6 md:px-12 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-10 items-center justify-center">
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
              style={{ top: "50%", marginTop: "calc(-1 * (var(--step-h, 27px)))" }}
            >
              {steps.map((step, idx) => (
                <div
                  key={step.id || idx}
                  data-step-title
                  style={{
                    filter: idx === 0 ? "blur(0px)" : "blur(2.5px)",
                    opacity: idx === 0 ? 1 : 0.45,
                  }}
                  className="h-[54px] md:h-[140px] flex items-center justify-center md:justify-start font-serif text-lg sm:text-xl md:text-[clamp(1.5rem,2.2vw,2.1rem)] leading-[1.15] transition-all text-center md:text-left will-change-[filter,opacity]"
                >
                  {step.title}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Stage with 3D tilt */}
          <div
            ref={stageRef}
            className="relative order-2 shrink-0 w-[min(90vw,340px)] sm:w-[380px] md:w-[420px] aspect-[420/500] my-2 md:my-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={step.id || idx}
                data-step-panel
                style={{
                  opacity: idx === 0 ? 1 : 0,
                  visibility: idx === 0 ? "visible" : "hidden",
                }}
                className="absolute inset-0 select-none"
              >
                {step.visual}
              </div>
            ))}
          </div>

          {/* Column 3: Descriptions */}
          <div className="relative w-full h-[80px] sm:h-[90px] md:h-[520px] order-3 mt-1 md:mt-0">
            {steps.map((step, idx) => (
              <p
                key={step.id || idx}
                data-step-desc
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 max-w-[340px] text-xs sm:text-sm leading-relaxed mx-auto md:mx-0 text-center md:text-left transition-opacity"
                style={{
                  color: themeStyles.textMuted,
                  opacity: idx === 0 ? 1 : 0,
                  visibility: idx === 0 ? "visible" : "hidden",
                }}
              >
                {step.description}
              </p>
            ))}
          </div>
        </div>

        {/* Vertical Progress Bar */}
        <div
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 h-20 sm:h-24 w-[3px] rounded-full overflow-hidden"
          style={{ background: themeStyles.line }}
        >
          <div
            ref={barRef}
            className="w-full origin-top rounded-full transition-transform"
            style={{
              height: "100%",
              background: themeStyles.barFill,
              transform: "scaleY(0)",
            }}
          />
        </div>
      </div>

      {/* Optional Bottom CTA Banner */}
      {ctaBanner && (
        <div className="px-4 sm:px-6 md:px-12 pb-16 pt-6">
          <div
            className={`mx-auto max-w-[1300px] min-h-[14rem] sm:min-h-[16rem] py-10 sm:py-12 px-6 rounded-2xl grid place-items-center text-center ${themeStyles.darkBg} text-white shadow-xl`}
          >
            <div className="space-y-5 max-w-xl">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight">
                {ctaBanner.title}
              </h3>
              {ctaBanner.buttonText && (
                <div>
                  {ctaBanner.href ? (
                    <a
                      href={ctaBanner.href}
                      className="inline-flex items-center justify-center rounded-xl bg-white text-[#2a0f0a] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm hover:opacity-95 transition-all shadow-md active:scale-95"
                    >
                      {ctaBanner.buttonText}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={ctaBanner.onClick}
                      className="inline-flex items-center justify-center rounded-xl bg-white text-[#2a0f0a] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm hover:opacity-95 transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      {ctaBanner.buttonText}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
