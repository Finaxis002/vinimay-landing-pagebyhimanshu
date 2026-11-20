"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = { p: 0 };
    const pct = document.getElementById("loader-pct");
    const status = document.getElementById("loader-status");
    const bar = document.getElementById("loader-bar");

    // Lock body scroll during intro
    document.body.style.overflow = "hidden";

    // Prep drawing
    gsap.set(".loader-draw", { strokeDasharray: 1, strokeDashoffset: 1 });
    gsap.set(".loader-tip", { scale: 0, transformOrigin: "50% 50%", opacity: 0 });
    gsap.set("#loader-logo", { scale: 0.9 });

    // 1. Intro: ribbons draw in
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .to("#loader-logo", { scale: 1, duration: 1.4 }, 0)
      .to(".loader-draw", { strokeDashoffset: 0, duration: 1.1, stagger: 0.18 }, 0.1)
      .to(".loader-tip", { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2.5)", stagger: 0.1 }, 0.9)
      .to("#loader-base", { opacity: 0.8, duration: 0.5 }, 1.1);

    // 2. Idle motion while loading
    if (!reduce) {
      gsap.to("#loader-logo", { y: -8, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.2 });
      gsap.to("#loader-glowL", { scale: 1.25, opacity: 0.6, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to("#loader-glowR", { scale: 1.25, opacity: 0.6, duration: 2.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.6 });
      gsap.to("#loader-base", { scaleX: 1.6, opacity: 0.35, transformOrigin: "50% 50%", duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.2 });
    }

    // 3. Progress counter
    const minTime = 0.35;
    const render = () => {
      const v = Math.round(state.p);
      if (pct) pct.textContent = v + "%";
      if (bar) gsap.set(bar, { scaleX: state.p / 100 });
      if (status) {
        status.textContent =
          v < 40 ? "Getting things ready" : v < 85 ? "Loading assets" : v < 100 ? "Almost there" : "Ready";
      }
    };

    const crawl = gsap.to(state, { p: 90, duration: minTime, ease: "power2.out", onUpdate: render });

    const finish = () => {
      crawl.kill();
      gsap.to(state, {
        p: 100,
        duration: 0.45,
        ease: "power1.inOut",
        onUpdate: render,
        onComplete: exit,
      });
    };

    const timer = setTimeout(finish, 650);

    function exit() {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsDone(true);
        },
      });

      tl.to("#loader-logo", { scale: 1.15, duration: 0.35, ease: "power2.out" })
        .to("#loader-logo", { scale: 0.3, opacity: 0, duration: 0.5, ease: "power3.in" })
        .to("#loaderContent, #loader-glowL, #loader-glowR", { opacity: 0, duration: 0.3 }, "<0.1")
        .to("#pTop", { yPercent: -100, duration: 0.85, ease: "expo.inOut" }, "-=0.05")
        .to("#pBot", { yPercent: 100, duration: 0.85, ease: "expo.inOut" }, "<");
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      id="loader"
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Curtain panels */}
      <div id="pTop" className="absolute left-0 top-0 h-1/2 w-full bg-[#fafaff]" />
      <div id="pBot" className="absolute bottom-0 left-0 h-1/2 w-full bg-[#fafaff]" />

      {/* Ambient glow */}
      <div
        id="loader-glowL"
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-[85%] -translate-y-1/2 rounded-full bg-fuchsia-500/25 blur-[90px]"
      />
      <div
        id="loader-glowR"
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-[15%] -translate-y-1/2 rounded-full bg-cyan-400/25 blur-[90px]"
      />

      {/* Content */}
      <div
        id="loaderContent"
        className="relative flex h-full w-full flex-col items-center justify-center gap-8"
      >
        <svg
          id="loader-logo"
          viewBox="0 0 200 200"
          className="h-44 w-44 overflow-visible sm:h-56 sm:w-56"
          fill="none"
          strokeLinecap="round"
        >
          <defs>
            <linearGradient id="gL" gradientUnits="userSpaceOnUse" x1="40" y1="40" x2="100" y2="150">
              <stop offset="0" stopColor="#f02cf5" />
              <stop offset="1" stopColor="#6c4fd0" />
            </linearGradient>
            <linearGradient id="gR" gradientUnits="userSpaceOnUse" x1="160" y1="40" x2="100" y2="150">
              <stop offset="0" stopColor="#2fd0e8" />
              <stop offset="1" stopColor="#2a5fc4" />
            </linearGradient>
            <linearGradient id="gL2" gradientUnits="userSpaceOnUse" x1="68" y1="34" x2="100" y2="100">
              <stop offset="0" stopColor="#b24cf0" />
              <stop offset="1" stopColor="#4b3aa8" />
            </linearGradient>
            <linearGradient id="gR2" gradientUnits="userSpaceOnUse" x1="132" y1="34" x2="100" y2="100">
              <stop offset="0" stopColor="#2a6fd0" />
              <stop offset="1" stopColor="#1c2f8a" />
            </linearGradient>
          </defs>
          <path
            className="loader-draw"
            pathLength="1"
            d="M42 48 L100 150"
            stroke="url(#gL)"
            strokeWidth="26"
            opacity=".92"
          />
          <path
            className="loader-draw"
            pathLength="1"
            d="M158 48 L100 150"
            stroke="url(#gR)"
            strokeWidth="26"
            strokeLinecap="round"
            opacity=".85"
            style={{ mixBlendMode: "multiply" }}
          />
          <path
            className="loader-draw"
            pathLength="1"
            d="M68 34 C88 36 97 68 100 100"
            stroke="url(#gL2)"
            strokeWidth="9"
          />
          <path
            className="loader-draw"
            pathLength="1"
            d="M132 34 C112 36 103 68 100 100"
            stroke="url(#gR2)"
            strokeWidth="9"
            style={{ mixBlendMode: "multiply" }}
          />
          <path className="loader-tip" d="M26 56 L56 40 L52 72 Z" fill="#e028f0" stroke="none" />
          <path className="loader-tip" d="M174 56 L144 40 L148 72 Z" fill="#22c4e6" stroke="none" />
          <ellipse id="loader-base" cx="100" cy="152" rx="16" ry="8" fill="#6c63d8" opacity="0" stroke="none" />
        </svg>

        <div className="flex w-64 flex-col items-center gap-3 sm:w-72">
          <div className="h-1 w-full overflow-hidden rounded-full bg-slate-900/10">
            <div id="loader-bar" className="bar-fill h-full w-full origin-left scale-x-0 rounded-full" />
          </div>
          <div className="flex w-full items-baseline justify-between text-sm text-slate-500">
            <span id="loader-status">Getting things ready</span>
            <span id="loader-pct" className="tabular-nums text-slate-900">
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
