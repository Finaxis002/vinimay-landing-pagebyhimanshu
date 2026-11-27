"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Check, CheckCircle2, FileText, FileOutput } from "lucide-react";
import WordmarkArc from "@/components/common/WordmarkArc";

/* ------------------------------------------------------------------ */
/* Data constants                                                      */
/* ------------------------------------------------------------------ */

const CUSTOMER = "Sharma Traders";
const invoiceItems = [
  { name: 'LED Monitor 24"', code: "HSN 8528", qty: 2, amount: 19000 },
  { name: "Wireless Keyboard", code: "HSN 8471", qty: 3, amount: 3600 },
  { name: "Installation Service", code: "SAC 9987", qty: 1, amount: 2500 },
];
const SUBTOTAL = invoiceItems.reduce((sum, i) => sum + i.amount, 0); // 25,100
const CGST = Math.round(SUBTOTAL * 0.09); // 2,259
const SGST = Math.round(SUBTOTAL * 0.09); // 2,259
const TOTAL = SUBTOTAL + CGST + SGST; // 29,618
const STEP_LABELS = [
  "Customer Selected",
  "Product Added",
  "GST Calculated",
  "Invoice Generated",
];

const inr = (n: number) => Math.round(n).toLocaleString("en-IN");

/* ------------------------------------------------------------------ */
/* 1. Animated number counting using GSAP                             */
/* ------------------------------------------------------------------ */

function AnimatedNumber({
  to,
  run,
  prefix = "",
  duration = 0.9,
}: {
  to: number;
  run: boolean;
  prefix?: string;
  duration?: number;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    if (!run) {
      el.textContent = `${prefix}0`;
      return;
    }
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${prefix}${inr(Math.round(obj.v))}`;
      },
    });
    return () => {
      tween.kill();
    };
  }, [run, to, duration, prefix]);

  return <span ref={spanRef}>{prefix}0</span>;
}

/* ------------------------------------------------------------------ */
/* 2. Self-looping invoice flow hook                                  */
/* ------------------------------------------------------------------ */

/**
 * phase 0: typing customer      1: customer selected
 *       2: products slide in    3: GST calculated
 *       4: button pulses        5: invoice generated (+ PDF)
 * Loops every ~10s while the laptop is visible.
 */
function useInvoiceLoop(enabled: boolean) {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => {
      timers.push(setTimeout(() => !cancelled && fn(), ms));
    };

    const run = () => {
      timers.length = 0;
      setPhase(0);
      setTyped("");
      for (let i = 1; i <= CUSTOMER.length; i++) {
        at(300 + i * 60, () => setTyped(CUSTOMER.slice(0, i)));
      }
      at(1300, () => setPhase(1));
      at(1900, () => setPhase(2));
      at(3400, () => setPhase(3));
      at(4900, () => setPhase(4));
      at(6800, () => setPhase(5));
      at(10000, run);
    };

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [enabled]);

  return { phase, typed };
}

/* ------------------------------------------------------------------ */
/* 3. Scaled Screen container                                         */
/* ------------------------------------------------------------------ */

function ScaledScreen({
  children,
  width = 640,
  height = 360,
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const update = () => {
      if (el) setScale(el.clientWidth / width);
    };
    update();
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={wrap}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          visibility: scale ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  children,
  on,
  strong,
}: {
  label: string;
  children: React.ReactNode;
  on: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between ${
        strong ? "text-[12px] font-bold" : "text-[11px]"
      }`}
    >
      <span className="text-[#4A4A6A]">{label}</span>
      <span
        className={`tabular-nums transition-colors duration-500 ${
          on ? "text-[#30304f]" : "text-[#4A4A6A]/40"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. GST Invoice Screen Simulation                                   */
/* ------------------------------------------------------------------ */

function InvoiceScreen({ phase, typed }: { phase: number; typed: string }) {
  const lit = [phase >= 1, phase >= 2, phase >= 3, phase >= 5];

  return (
    <div className="flex h-full w-full select-none flex-col bg-[#faf9ff] text-[#30304f]">
      {/* top bar */}
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-[#ece6f7] bg-white px-4">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-[#b83ceb] via-[#7552da] to-[#4fc3d7] bg-clip-text text-[13px] font-bold text-transparent">
            Vinimay
          </span>
          <span className="text-[11px] text-[#4A4A6A]/70">/ New GST Invoice</span>
        </div>
        <span className="text-[11px] font-medium text-[#4A4A6A]">INV-2041</span>
      </div>

      {/* progress chips */}
      <div className="flex shrink-0 items-center gap-1.5 px-4 py-3">
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={`flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-medium transition-colors duration-500 ${
              lit[i]
                ? "border-[#7552da]/30 bg-[#7552da]/10 text-[#7552da]"
                : "border-[#ece6f7] bg-white text-[#4A4A6A]/50"
            }`}
          >
            <span
              className={`flex h-3.5 w-3.5 items-center justify-center rounded-full transition-colors duration-500 ${
                lit[i] ? "bg-[#7552da] text-white" : "bg-[#ece6f7]"
              }`}
            >
              {lit[i] && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
            </span>
            {label}
          </div>
        ))}
      </div>

      {/* body */}
      <div className="grid min-h-0 flex-1 grid-cols-[1fr_190px] gap-3 px-4 pb-4">
        {/* left: customer + items */}
        <div className="rounded-xl border border-[#ece6f7] bg-white p-3">
          <p className="mb-1 text-[10px] font-medium text-[#4A4A6A]/70">Customer</p>
          <div
            className={`flex h-8 items-center justify-between rounded-lg border px-2.5 text-[12px] transition-colors duration-500 ${
              phase >= 1 ? "border-emerald-400/60" : "border-[#7552da]/40"
            }`}
          >
            <span>
              {typed}
              {phase === 0 && (
                <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-[#7552da] align-middle" />
              )}
            </span>
            {phase >= 1 && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600 transition-all duration-300">
                <CheckCircle2 className="h-3 w-3" />
                GSTIN 23ABCDE1234F1Z5
              </span>
            )}
          </div>

          <div className="mt-3 grid grid-cols-[1fr_64px_28px_64px] gap-2 px-2 text-[9.5px] font-medium text-[#4A4A6A]/60">
            <span>Item</span>
            <span>HSN / SAC</span>
            <span>Qty</span>
            <span className="text-right">Amount</span>
          </div>

          <div className="mt-1 min-h-[108px] space-y-1">
            {phase < 2 && (
              <div className="flex h-[100px] items-center justify-center rounded-lg border border-dashed border-[#ddd5f3] text-[10px] text-[#4A4A6A]/50">
                Add products or services
              </div>
            )}
            {phase >= 2 &&
              invoiceItems.map((item, i) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[1fr_64px_28px_64px] items-center gap-2 rounded-lg bg-[#faf9ff] px-2 py-1.5 text-[11px] transition-all duration-300"
                  style={{
                    animation: "fadeIn 0.35s ease forwards",
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <span className="truncate font-medium">{item.name}</span>
                  <span className="text-[9.5px] text-[#7552da]">{item.code}</span>
                  <span>{item.qty}</span>
                  <span className="text-right tabular-nums">
                    ₹{inr(item.amount)}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* right: tax summary + generate */}
        <div className="flex flex-col rounded-xl border border-[#ece6f7] bg-white p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-[#4A4A6A]/70">Tax Summary</p>
            <span
              className={`rounded bg-[#7552da]/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#7552da] transition-opacity duration-500 ${
                phase >= 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              GST 18%
            </span>
          </div>

          <div className="space-y-1.5">
            <SummaryRow label="Subtotal" on={phase >= 2}>
              <AnimatedNumber to={SUBTOTAL} run={phase >= 2} prefix="₹" />
            </SummaryRow>
            <SummaryRow label="CGST 9%" on={phase >= 3}>
              <AnimatedNumber to={CGST} run={phase >= 3} prefix="₹" />
            </SummaryRow>
            <SummaryRow label="SGST 9%" on={phase >= 3}>
              <AnimatedNumber to={SGST} run={phase >= 3} prefix="₹" />
            </SummaryRow>
            <div className="border-t border-[#f0ecfa] pt-1.5">
              <SummaryRow label="Total" on={phase >= 3} strong>
                <AnimatedNumber to={TOTAL} run={phase >= 3} prefix="₹" duration={1.1} />
              </SummaryRow>
            </div>
          </div>

          <div className="mt-2 min-h-[26px]">
            {phase >= 5 && (
              <div className="flex items-center gap-1.5 rounded-md bg-[#7552da]/10 px-2 py-1 text-[10px] font-medium text-[#7552da] transition-all duration-300">
                <FileText className="h-3 w-3" />
                INV-2041.pdf
              </div>
            )}
          </div>

          <div
            className={`mt-auto flex items-center justify-center gap-1.5 rounded-lg py-2 text-[11px] font-semibold text-white transition-all duration-500 ${
              phase >= 5
                ? "bg-emerald-500"
                : phase === 4
                ? "bg-gradient-to-r from-[#b83ceb] via-[#7552da] to-[#4fc3d7] scale-[1.03] shadow-[0_0_18px_rgba(117,82,218,0.5)]"
                : "bg-[#7552da]/40"
            }`}
          >
            {phase >= 5 ? (
              <>
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
                Invoice Generated
              </>
            ) : (
              <>
                <FileOutput className="h-3.5 w-3.5" />
                Generate Invoice
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Laptop Hardware Chassis                                         */
/* ------------------------------------------------------------------ */

function InvoiceLaptop({ inView = true }: { inView?: boolean }) {
  const { phase, typed } = useInvoiceLoop(inView);

  return (
    <div
      role="img"
      aria-label="Vinimay GST invoice creation screen with auto GST calculation, HSN/SAC support and PDF invoice generation"
      className="relative drop-shadow-[0_25px_60px_rgba(117,82,218,0.16)]"
    >
      <div className="rounded-t-[20px] bg-[#1d1b2e] p-2.5 shadow-[0_35px_80px_rgba(85,90,207,0.22)] sm:p-3">
        <div className="mb-1.5 flex justify-center">
          <span className="h-1 w-1 rounded-full bg-white/25" />
        </div>
        <div className="overflow-hidden rounded-md border border-slate-800/40">
          <ScaledScreen>
            <InvoiceScreen phase={phase} typed={typed} />
          </ScaledScreen>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="ml-[-3%] h-3.5 w-[106%] rounded-b-[18px] bg-gradient-to-b from-[#d9d9e3] to-[#b4b4c6] shadow-md">
          <div className="mx-auto h-1 w-1/6 rounded-b-md bg-[#9d9db2]" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Floating invoice papers using GSAP                              */
/* ------------------------------------------------------------------ */

function FloatingPaper({
  title,
  tag,
  pos,
  rotate,
  delay,
  floatY,
  duration,
}: {
  title: string;
  tag?: string;
  pos: string;
  rotate: number;
  delay: number;
  floatY: number;
  duration: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;

    // GSAP entrance + gentle floating animation
    const tl = gsap.timeline({ delay });
    tl.fromTo(
      el,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
    );

    const floatTween = gsap.to(el, {
      y: -floatY,
      rotation: rotate * 1.35,
      duration: duration / 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay + 0.7,
    });

    return () => {
      tl.kill();
      floatTween.kill();
    };
  }, [delay, floatY, rotate, duration]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 hidden w-[26%] sm:block ${pos}`}
    >
      <div
        ref={cardRef}
        style={{ transform: `rotate(${rotate}deg)` }}
        className="rounded-2xl border border-white/35 bg-gradient-to-br from-white/25 to-white/10 p-3 sm:p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_45px_-18px_rgba(25,15,90,0.65)] text-white backdrop-blur-md transition-transform"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-white drop-shadow-xs lg:text-[11px]">
            {title}
          </span>
          {tag && (
            <span className="rounded-full bg-white/25 border border-white/30 px-1.5 py-0.5 text-[8px] font-bold text-white lg:text-[9px]">
              {tag}
            </span>
          )}
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1 w-full rounded bg-white/35" />
          <div className="h-1 w-4/5 rounded bg-white/25" />
          <div className="h-1 w-3/5 rounded bg-white/20" />
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2 text-[8.5px] text-white/80 lg:text-[9.5px]">
          <span>CGST + SGST</span>
          <span className="font-bold text-white">18%</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Main Section Component                                          */
/* ------------------------------------------------------------------ */

export default function SoftwareTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !inView) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".laptop-container",
        { opacity: 0, scale: 0.94, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      id="the-software"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-[radial-gradient(ellipse_70%_60%_at_50%_20%,rgba(255,255,255,0.28),transparent_70%),linear-gradient(165deg,var(--hero-gradient-from),var(--hero-gradient-to))] text-white overflow-hidden border-t border-purple-400/20"
      aria-label="Vinimay the software platform engine"
    >
      {/* Sweeping Ribbon Waves Pattern (matching screenshot) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 rounded-[2.5rem] overflow-hidden pointer-events-none z-0"
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 1600"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Ribbon 1 Gradient (Top Arc) */}
                <linearGradient id="hero-ribbon-top-arc" x1="100%" y1="100%" x2="30%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.22" />
                </linearGradient>

                {/* Ribbon 2 Gradient (Bottom-Left Arc) */}
                <linearGradient id="hero-ribbon-bottom-arc" x1="0%" y1="0%" x2="90%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.20" />
                </linearGradient>

                {/* Ribbon 3 Gradient (Main Serpentine S-Curve) */}
                <linearGradient id="hero-ribbon-main-scurve" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.28" />
                  <stop offset="45%" stopColor="#ffffff" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.26" />
                </linearGradient>

                {/* Ribbon Interlacing Depth Shadow */}
                <filter id="hero-ribbon-depth" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow
                    dx="-8"
                    dy="14"
                    stdDeviation="18"
                    floodColor="rgba(30, 10, 80, 0.45)"
                  />
                </filter>
              </defs>

              {/* 1. Top Arc Loop (Background layer) */}
              <path
                d="M 1120 540 C 840 500 580 280 520 -50"
                stroke="url(#hero-ribbon-top-arc)"
                strokeWidth="175"
                strokeLinecap="round"
              />

              {/* 2. Bottom-Left Arc Loop (Background layer) */}
              <path
                d="M -90 950 C 220 900 480 1060 620 1650"
                stroke="url(#hero-ribbon-bottom-arc)"
                strokeWidth="175"
                strokeLinecap="round"
              />

              {/* 3. Main Central Serpentine S-Curve Ribbon (Foreground layer with depth shadow) */}
              <path
                d="M 520 -60 C 180 170 170 470 320 780 C 470 1090 790 1260 760 1660"
                stroke="url(#hero-ribbon-main-scurve)"
                strokeWidth="185"
                strokeLinecap="round"
                filter="url(#hero-ribbon-depth)"
              />
            </svg>
          </div>
      {/* Bottom ambient vignette */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2e2678]/40 to-transparent pointer-events-none z-20" />

      <div className="w-full max-w-[1330px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-extrabold uppercase tracking-widest mb-4 backdrop-blur-md shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>THE ENGINE</span>
          </div>

          <div className="relative inline-block mb-4 w-full">
            <WordmarkArc
              text="VINIMAY"
              mode="scrub"
              textClassName="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] text-white tracking-tighter leading-none select-none font-bold drop-shadow-sm"
            />
            {/* Handwritten Annotation */}
            <div className="absolute -top-7 -right-12 sm:-top-10 sm:-right-20 lg:-top-12 lg:-right-24 flex items-center gap-1 select-none pointer-events-none">
              <span className="font-handwritten text-2xl sm:text-3xl lg:text-4xl text-rose-300 font-bold rotate-6 tracking-wide drop-shadow-xs">
                (The Engine)
              </span>
              <svg
                className="w-7 h-7 sm:w-10 sm:h-10 text-rose-300 transform -rotate-12 translate-y-3 sm:translate-y-4 -translate-x-1"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M 8 10 C 22 10, 28 22, 22 32 M 16 28 L 22 32 L 26 26" />
              </svg>
            </div>
          </div>

          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-normal drop-shadow-xs">
            Built for Indian &amp; global businesses—one unified, lightning-fast operating system handling Billing, POS,
            Inventory, Ledgers, and WhatsApp at zero cost.
          </p>
        </div>

        {/* Interactive Laptop & Glassmorphism Floating Invoice Showcase */}
        <div ref={containerRef} className="relative mx-auto w-full max-w-[920px]">
          {/* Ambient radial glow behind the laptop */}
          <div className="pointer-events-none absolute -inset-6 sm:-inset-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22),transparent_70%)] blur-2xl" />

          {/* 3 Floating glassmorphism papers peeking out from behind the laptop */}
          <FloatingPaper
            title="Invoice #1"
            pos="right-[-2%] sm:-right-4 top-2 sm:top-6"
            rotate={2.5}
            delay={0.3}
            floatY={10}
            duration={5.5}
          />
          <FloatingPaper
            title="Tax Invoice"
            tag="PDF"
            pos="right-[-3%] sm:-right-6 bottom-10 sm:bottom-16"
            rotate={-2}
            delay={0.5}
            floatY={12}
            duration={6.5}
          />
          <FloatingPaper
            title="Invoice #2"
            pos="left-[1%] sm:-left-6 -top-4 sm:-top-8"
            rotate={-2.5}
            delay={0.7}
            floatY={9}
            duration={6}
          />

          {/* Grounded Laptop chassis with deep rich shadow */}
          <div className="laptop-container relative z-10 w-full sm:w-[92%] md:w-[88%] mx-auto">
            <InvoiceLaptop inView={inView} />
          </div>
        </div>

        {/* Quote Caption */}
        <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto">
          <p className="text-white/80 text-sm sm:text-base font-normal leading-relaxed">
            We built Vinimay to help Indian &amp; global entrepreneurs work smarter, faster, and better—without ever
            paying a single rupee in software fees.
          </p>
        </div>
      </div>
    </section>
  );
}
