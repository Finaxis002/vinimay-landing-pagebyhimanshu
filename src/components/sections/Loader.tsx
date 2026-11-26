"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Step = { word: string; bg: string; fg: string };

const STEPS: Step[] = [
  { word: "Billing", bg: "#ff7a45", fg: "#fff1c9" },
  { word: "Inventory", bg: "#14122c", fg: "#34d399" },
  { word: "POS", bg: "#e6e0ff", fg: "#4a2bb5" },
  { word: "GST Filing", bg: "#c8f2d8", fg: "#0b4a36" },
  { word: "Ledgers", bg: "#fbd3e6", fg: "#3d1260" },
  { word: "WhatsApp", bg: "#847BE6", fg: "#ffffff" },
  { word: "Zero cost", bg: "#ffd84d", fg: "#2a1670" },
];

const BRAND = "VINIMAY".split("");
const FINAL_BG = "#9A92E5";
const CURTAIN = "#34d399";
const CURVE = "0 0 50% 50% / 0 0 9vw 9vw";
const FIRST_AT = 0.7; // seconds before the first swap
const STEP_GAP = 0.72; // seconds between swaps
const STEP_DUR = 0.6; // duration of each slide

const fontStyle: React.CSSProperties = {
  fontFamily:
    "var(--font-bricolage), 'Bricolage Grotesque', ui-sans-serif, sans-serif",
  fontWeight: 800,
};

type Props = {
  /** Show only once per browser session. Default: every page load. */
  once?: boolean;
  /** Called when the curtain has fully lifted. */
  onComplete?: () => void;
};

/**
 * Full-screen kinetic intro:
 * "ONE SYSTEM FOR [word] BY VINIMAY™" with a colour change per word,
 * a big VINIMAY™ finale, then a two-layer curved curtain wipes up.
 */
export default function KineticIntro({ once = false, onComplete }: Props) {
  const [isDone, setIsDone] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const pillRef = useRef<HTMLDivElement | null>(null);
  const blockRef = useRef<HTMLDivElement | null>(null);
  const bigRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    try {
      if (once && sessionStorage.getItem("vinimay-intro-seen")) {
        setIsDone(true);
        return;
      }
    } catch {
      /* sessionStorage unavailable */
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsDone(true);
      return;
    }

    const root = rootRef.current;
    const curtain = curtainRef.current;
    const pill = pillRef.current;
    const block = blockRef.current;
    const big = bigRef.current;
    const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
    const letters = letterRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (!root || !curtain || !pill || !block || !big) return;
    if (words.length !== STEPS.length || letters.length !== BRAND.length) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = prevOverflow;
      try {
        sessionStorage.setItem("vinimay-intro-seen", "1");
      } catch {
        /* ignore */
      }
      setIsDone(true);
      onComplete?.();
    };

    const ctx = gsap.context(() => {
      gsap.set(words.slice(1), { yPercent: 105, opacity: 1 });
      gsap.set(big, { autoAlpha: 1 });
      gsap.set(letters, { yPercent: 115 });

      const cnt = { v: 0 };
      const tl = gsap.timeline({ onComplete: finish });
      tlRef.current = tl;

      // Word swaps + colour changes
      STEPS.forEach((s, i) => {
        if (i === 0) return;
        const t = FIRST_AT + (i - 1) * STEP_GAP;
        tl.to(words[i - 1], { yPercent: -105, duration: STEP_DUR, ease: "power3.inOut" }, t)
          .to(words[i], { yPercent: 0, duration: STEP_DUR, ease: "power3.inOut" }, t)
          .to(root, { backgroundColor: s.bg, color: s.fg, duration: 0.5, ease: "power1.out" }, t);
      });

      const tFinal = FIRST_AT + (STEPS.length - 1) * STEP_GAP;

      // Counter 00% -> 100%
      tl.to(
        cnt,
        {
          v: 100,
          duration: tFinal + 0.5,
          ease: "none",
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.textContent =
                String(Math.round(cnt.v)).padStart(2, "0") + "%";
            }
          },
        },
        0
      );

      // Finale: big wordmark rises
      tl.addLabel("final", tFinal)
        .to(root, { backgroundColor: FINAL_BG, color: "#ffffff", duration: 0.5 }, "final")
        .to(block, { yPercent: -75, opacity: 0, duration: 0.8, ease: "power3.inOut" }, "final")
        .to(
          letters,
          { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power4.out" },
          "final+=0.35"
        )
        // Exit: two curved panels wipe up
        .addLabel("exit", "final+=1.9")
        .to(pill, { opacity: 0, duration: 0.3 }, "exit")
        .to(root, { yPercent: -115, duration: 1, ease: "power4.inOut" }, "exit")
        .to(curtain, { yPercent: -115, duration: 1, ease: "power4.inOut" }, "exit+=0.14");
    }, root);

    return () => {
      tlRef.current?.kill();
      ctx.revert();
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skip = () => {
    tlRef.current?.seek("final");
  };

  if (isDone) return null;

  return (
    <>
      {/* Curtain sits behind the main panel and lifts slightly later */}
      <div
        ref={curtainRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{ background: CURTAIN, borderRadius: CURVE }}
      />

      <div
        ref={rootRef}
        role="status"
        aria-label="Loading VINIMAY"
        className="fixed inset-0 z-[9999] overflow-hidden"
        style={{
          ...fontStyle,
          background: STEPS[0].bg,
          color: STEPS[0].fg,
          borderRadius: CURVE,
        }}
      >
        {/* Top bar */}
        <div
          className="absolute left-5 right-5 flex justify-between text-xs font-bold tracking-widest uppercase"
          style={{ top: "calc(18px + env(safe-area-inset-top, 0px))" }}
        >
          <span>Vinimay™ · Loading</span>
          <span ref={countRef} className="tabular-nums">
            00%
          </span>
        </div>

        {/* Headline with the swapping word */}
        <div
          ref={blockRef}
          className="absolute left-[6vw] top-1/2 -translate-y-1/2 uppercase leading-[0.95]"
          style={{ fontSize: "clamp(2.2rem, 8.5vw, 8rem)", letterSpacing: "-0.035em" }}
        >
          <div>One system for</div>
          <div className="relative h-[0.95em] w-[8em] overflow-hidden">
            {STEPS.map((s, i) => (
              <span
                key={s.word}
                ref={(el) => {
                  wordRefs.current[i] = el;
                }}
                className={`absolute left-0 top-0 whitespace-nowrap ${i === 0 ? "" : "opacity-0"}`}
              >
                {s.word}
              </span>
            ))}
          </div>
          <div>
            by Vinimay<sup className="ml-[0.15em] align-top text-[0.28em] tracking-normal">™</sup>
          </div>
        </div>

        {/* Finale wordmark */}
        <div
          ref={bigRef}
          className="invisible pointer-events-none absolute inset-0 grid place-items-center leading-none text-white"
          style={{ fontSize: "clamp(3rem, 17vw, 15rem)", letterSpacing: "-0.05em" }}
        >
          <div className="flex overflow-hidden px-[0.1em] py-[0.06em]">
            {BRAND.map((ch, i) => (
              <span
                key={i}
                ref={(el) => {
                  letterRefs.current[i] = el;
                }}
                className="inline-block"
              >
                {ch}
              </span>
            ))}
            <sup className="ml-[0.15em] align-top text-[0.28em] tracking-normal">™</sup>
          </div>
        </div>
      </div>

      {/* Skip pill */}
      <div
        ref={pillRef}
        className="fixed left-1/2 z-[10000] flex -translate-x-1/2 gap-1.5 rounded-[14px] bg-[#1d1d1d] p-1.5"
        style={{ bottom: "calc(20px + env(safe-area-inset-bottom, 0px))" }}
      >
        <span className="grid place-items-center px-3.5 text-sm font-black text-white">V.</span>
        <button
          type="button"
          onClick={skip}
          className="rounded-[9px] bg-[#aaf5c5] px-4 py-2.5 text-xs font-bold text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Skip intro
        </button>
      </div>
    </>
  );
}