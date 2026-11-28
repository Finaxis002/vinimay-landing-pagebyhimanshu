"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import {
  FileText,
  FileOutput,
  CheckCircle2,
  Play,
  Sparkles,
  Zap,
  Share2,
  Printer,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import ArcHeading from "../common/ArcHeading";

/* ------------------------------------------------------------------ */
/* Types & Data                                                       */
/* ------------------------------------------------------------------ */

export type BillType = "gst" | "nongst";

export type HowToCreateBillProps = {
  /** Optional YouTube video ID for GST bill tutorial. Default: placeholder */
  gstVideoId?: string;
  /** Optional YouTube video ID for Non-GST bill tutorial. Default: placeholder */
  nonGstVideoId?: string;
};

const BILL_MODES = {
  gst: {
    id: "gst",
    name: "GST Tax Invoice",
    shortName: "GST Bill",
    badge: "100% Tax Compliant",
    defaultVideoId: "LXb3EKWsInQ", // Replaceable with real tutorial video
    description:
      "Generate B2B & B2C tax invoices with automatic CGST, SGST, IGST calculation, verified HSN/SAC codes, and instant E-Way bill readiness.",
    floatingPapers: [
      {
        title: "GST Invoice #2041",
        tag: "B2B TAX",
        taxLabel: "CGST + SGST (18%)",
        taxVal: "₹4,518",
        pos: "right-[-2%] sm:-right-4 top-2 sm:top-6",
        rotate: 2.5,
        delay: 0.2,
      },
      {
        title: "E-Way Bill Ready",
        tag: "VERIFIED",
        taxLabel: "HSN / SAC Code",
        taxVal: "8471 / 9987",
        pos: "right-[-3%] sm:-right-6 bottom-10 sm:bottom-16",
        rotate: -2,
        delay: 0.4,
      },
      {
        title: "Sharma Traders",
        tag: "GSTIN OK",
        taxLabel: "State Code",
        taxVal: "07 (Delhi)",
        pos: "left-[1%] sm:-left-6 -top-4 sm:-top-8",
        rotate: -2.5,
        delay: 0.6,
      },
    ],
    steps: [
      {
        number: "01",
        title: "Select Customer & Auto-Fill GSTIN",
        desc: "Type or pick customer name; GSTIN, billing address, and state code auto-populate instantly.",
      },
      {
        number: "02",
        title: "Add Products with Smart HSN & Rates",
        desc: "Scan barcodes or type items. Taxes (5%, 12%, 18%, 28%) split automatically based on inter-state rules.",
      },
      {
        number: "03",
        title: "1-Click PDF, Print & WhatsApp Send",
        desc: "Generate professional A4, A5, or thermal prints and send digitally to customer WhatsApp.",
      },
    ],
  },
  nongst: {
    id: "nongst",
    name: "Non-GST / Retail Cash Bill",
    shortName: "Non-GST Bill",
    badge: "Fast & Frictionless",
    defaultVideoId: "LXb3EKWsInQ", // Replaceable with real tutorial video
    description:
      "Ideal for composition scheme dealers, small retailers, and freelancers. Create clean cash receipts, estimates, and bills of supply in seconds.",
    floatingPapers: [
      {
        title: "Cash Bill #1089",
        tag: "RETAIL",
        taxLabel: "Tax Mode",
        taxVal: "0% (Exempt)",
        pos: "right-[-2%] sm:-right-4 top-2 sm:top-6",
        rotate: 2.5,
        delay: 0.2,
      },
      {
        title: "Thermal Print",
        tag: "3-INCH",
        taxLabel: "Layout Style",
        taxVal: "POS Slip",
        pos: "right-[-3%] sm:-right-6 bottom-10 sm:bottom-16",
        rotate: -2,
        delay: 0.4,
      },
      {
        title: "Walk-in Customer",
        tag: "CASH",
        taxLabel: "Payment",
        taxVal: "UPI / Cash",
        pos: "left-[1%] sm:-left-6 -top-4 sm:-top-8",
        rotate: -2.5,
        delay: 0.6,
      },
    ],
    steps: [
      {
        number: "01",
        title: "Quick Walk-in or Regular Client",
        desc: "No mandatory GSTIN needed. Add phone number or proceed with one-click counter cash sale.",
      },
      {
        number: "02",
        title: "Rapid POS Barcode Item Addition",
        desc: "Add items at net retail price without confusing tax splits or complex HSN lookups.",
      },
      {
        number: "03",
        title: "Instant Thermal Slip & Ledger Update",
        desc: "Fire immediate thermal print or share link via SMS/WhatsApp while inventory deducts automatically.",
      },
    ],
  },
} as const;

/* ------------------------------------------------------------------ */
/* Floating Glassmorphism Paper (GSAP animated)                       */
/* ------------------------------------------------------------------ */

function FloatingPaper({
  title,
  tag,
  pos,
  rotate,
  delay,
  taxLabel,
  taxVal,
}: {
  title: string;
  tag?: string;
  pos: string;
  rotate: number;
  delay: number;
  taxLabel: string;
  taxVal: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;

    const tl = gsap.timeline({ delay });
    tl.fromTo(
      el,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
    );

    const floatTween = gsap.to(el, {
      y: -10,
      rotation: rotate * 1.3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: delay + 0.5,
    });

    return () => {
      tl.kill();
      floatTween.kill();
    };
  }, [delay, rotate]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 hidden w-[28%] max-w-[220px] sm:block ${pos}`}
    >
      <div
        ref={cardRef}
        style={{ transform: `rotate(${rotate}deg)` }}
        className="rounded-2xl border border-white/35 bg-gradient-to-br from-white/25 to-white/10 p-3 sm:p-3.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_45px_-18px_rgba(25,15,90,0.65)] backdrop-blur-md transition-transform"
      >
        <div className="flex items-center justify-between gap-1">
          <span className="truncate text-[10px] font-bold text-white drop-shadow-xs lg:text-[11px]">
            {title}
          </span>
          {tag && (
            <span className="shrink-0 rounded-full border border-white/30 bg-white/25 px-1.5 py-0.5 text-[8px] font-extrabold uppercase text-white lg:text-[9px]">
              {tag}
            </span>
          )}
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1 w-full rounded bg-white/35" />
          <div className="h-1 w-4/5 rounded bg-white/25" />
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2 text-[8.5px] text-white/85 lg:text-[9.5px]">
          <span className="text-white/70">{taxLabel}</span>
          <span className="font-bold text-white">{taxVal}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function HowToCreateBill({
  gstVideoId,
  nonGstVideoId,
}: HowToCreateBillProps) {
  const [activeTab, setActiveTab] = useState<BillType>("gst");
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const currentMode = BILL_MODES[activeTab];
  const videoId =
    activeTab === "gst"
      ? gstVideoId || currentMode.defaultVideoId
      : nonGstVideoId || currentMode.defaultVideoId;

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !inView) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".video-laptop-container",
        { opacity: 0, scale: 0.94, y: 25 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          clearProps: "transform",
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [inView]);

  return (
    <section
      id="how-to-create-bill"
      className="relative overflow-hidden border-t border-purple-400/20 bg-[radial-gradient(ellipse_70%_60%_at_50%_20%,rgba(255,255,255,0.28),transparent_70%),linear-gradient(165deg,var(--hero-gradient-from),var(--hero-gradient-to))] px-4 py-20 text-white sm:px-6 sm:py-28 md:px-8 lg:py-32"
      aria-label="How to create GST and Non-GST bills in Vinimay"
    >
      {/* Sweeping Ribbon Waves Pattern (matching Hero styling) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-35"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 1600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="htb-ribbon-top"
              x1="100%"
              y1="100%"
              x2="30%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient
              id="htb-ribbon-bottom"
              x1="0%"
              y1="0%"
              x2="90%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.20" />
            </linearGradient>
            <linearGradient
              id="htb-ribbon-main"
              x1="20%"
              y1="0%"
              x2="80%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.28" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.26" />
            </linearGradient>
            <filter id="htb-depth" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="-8"
                dy="14"
                stdDeviation="18"
                floodColor="rgba(30, 10, 80, 0.45)"
              />
            </filter>
          </defs>
          <path
            d="M 1120 540 C 840 500 580 280 520 -50"
            stroke="url(#htb-ribbon-top)"
            strokeWidth="175"
            strokeLinecap="round"
          />
          <path
            d="M -90 950 C 220 900 480 1060 620 1650"
            stroke="url(#htb-ribbon-bottom)"
            strokeWidth="175"
            strokeLinecap="round"
          />
          <path
            d="M 520 -60 C 180 170 170 470 320 780 C 470 1090 790 1260 760 1660"
            stroke="url(#htb-ribbon-main)"
            strokeWidth="185"
            strokeLinecap="round"
            filter="url(#htb-depth)"
          />
        </svg>
      </div>

      {/* Ambient bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#2e2678]/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1330px]">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-xs backdrop-blur-md">
            <Play className="h-3 w-3 fill-white text-white" />
            <span>STEP-BY-STEP VIDEO TUTORIAL</span>
          </div>

          <ArcHeading
            as="h2"
            className="mb-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl"
          >
            How To Create GST &amp; Non-GST Bills
          </ArcHeading>

          <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-white/90 drop-shadow-xs sm:text-base md:text-lg">
            Watch how effortlessly you can generate 100% compliant GST tax
            invoices or quick retail non-GST cash bills in under 60 seconds with
            Vinimay.
          </p>
        </div>

        {/* Interactive Laptop & YouTube Video Showcase */}
        <div
          ref={containerRef}
          className="relative mx-auto w-full max-w-[940px]"
        >
          {/* Ambient radial glow behind the laptop */}
          <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22),transparent_70%)] blur-2xl sm:-inset-10" />

          {/* 3 Floating glassmorphism papers peeking out from behind the laptop */}
          {currentMode.floatingPapers.map((paper) => (
            <FloatingPaper
              key={`${activeTab}-${paper.title}`}
              title={paper.title}
              tag={paper.tag}
              taxLabel={paper.taxLabel}
              taxVal={paper.taxVal}
              pos={paper.pos}
              rotate={paper.rotate}
              delay={paper.delay}
            />
          ))}

          {/* Grounded Laptop chassis housing the YouTube iframe */}
          <div className="video-laptop-container relative z-10 mx-auto w-full sm:w-[94%] md:w-[90%]">
            <div
              role="region"
              aria-label={`${currentMode.name} video guide`}
              className="relative drop-shadow-[0_25px_60px_rgba(117,82,218,0.25)]"
            >
              {/* Laptop Display Shell */}
              <div className="rounded-t-[22px] bg-[#1d1b2e] p-2.5 shadow-[0_35px_80px_rgba(85,90,207,0.3)] sm:p-3.5">
                {/* Laptop Camera Dot */}
                <div className="mb-2 flex items-center justify-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1 w-1 rounded-full bg-emerald-400/80 animate-pulse" />
                </div>

                {/* Video Container (16:9 widescreen) */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700/50 bg-black shadow-inner">
                  <iframe
                    height="315"
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/MgagE62UP0U?si=OpCDyw4uANbD_lFi"
                    title={`${currentMode.name} Tutorial - Vinimay`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Laptop base / hinge */}
              <div className="relative -mx-[4%]">
                {/* Main deck */}
                <div
                  className="relative h-3.5 rounded-b-[20px] rounded-t-[3px] bg-gradient-to-b from-[#f1f1f7] via-[#d3d3e0] to-[#a4a4ba] sm:h-[18px]
               shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(50,50,90,0.28),0_1px_0_rgba(255,255,255,0.15)]"
                >
                  {/* Thumb notch */}
                  <div
                    className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-xl bg-gradient-to-b from-[#aeaec4] to-[#cfcfdc]
                 shadow-[inset_0_1px_2px_rgba(40,40,80,0.35)] sm:h-2"
                  />
                  {/* Side hinge shading */}
                  <div className="absolute inset-y-0 left-0 w-[6%] rounded-bl-[20px] bg-gradient-to-r from-black/10 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-[6%] rounded-br-[20px] bg-gradient-to-l from-black/10 to-transparent" />
                </div>

                {/* Rubber foot lip */}
                <div className="mx-auto h-[3px] w-[88%] rounded-b-full bg-[#7f7f98]" />

                {/* Contact shadow on the surface */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none mx-auto -mt-0.5 h-4 w-[82%] rounded-[50%] bg-[#1a0f4d]/40 blur-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps Feature Walkthrough Below Video */}
        <div className="mt-14 sm:mt-18 lg:mt-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 max-w-5xl mx-auto">
            {currentMode.steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/35 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-black tracking-widest text-emerald-300 bg-emerald-950/40 border border-emerald-400/30 px-2.5 py-1 rounded-lg">
                    STEP {step.number}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-300 opacity-80" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout / Assurance */}
        <div className="mt-12 text-center sm:mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-white/90">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              100% Free Forever
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <Printer className="h-4 w-4 text-purple-200" />
              Thermal, A4 &amp; A5 Multi-format
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <Share2 className="h-4 w-4 text-blue-200" />
              Direct WhatsApp Sharing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
