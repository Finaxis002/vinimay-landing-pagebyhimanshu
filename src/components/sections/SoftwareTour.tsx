"use client";

import React from "react";

export default function SoftwareTour() {
  return (
    <section id="the-software" className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Giant Subtle Ambient Circle Backdrop */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] sm:w-[1400px] lg:w-[1950px] h-[900px] sm:h-[1400px] lg:h-[1950px] rounded-full bg-gradient-to-b from-[#8077EC]/[0.09] via-purple-50/40 to-transparent pointer-events-none -z-0" />

      <div className="w-full max-w-[1330px] mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        {/* Section Header with Massive Headline & Handwritten Annotation */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="relative inline-block mb-6">
            <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem]  text-slate-900 tracking-tighter leading-none select-none">
              VINIMAY
            </h2>
            {/* Handwritten Annotation */}
            <div className="absolute -top-7 -right-12 sm:-top-10 sm:-right-20 lg:-top-12 lg:-right-24 flex items-center gap-1 select-none pointer-events-none">
              <span className="font-handwritten text-2xl sm:text-3xl lg:text-4xl text-rose-500 font-bold rotate-6 tracking-wide drop-shadow-xs">
                (The Engine)
              </span>
              <svg
                className="w-7 h-7 sm:w-10 sm:h-10 text-rose-500 transform -rotate-12 translate-y-3 sm:translate-y-4 -translate-x-1"
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

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Built for Indian &amp; global businesses—one unified, lightning-fast operating system handling Billing, POS,
            Inventory, Ledgers, and WhatsApp at zero cost.
          </p>
        </div>

        {/* Video Showcase Frame */}
        <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[2.4rem] bg-[#111319] border border-slate-800/90 shadow-[0_40px_120px_-20px_rgba(15,23,42,0.65)] overflow-hidden w-full max-w-full mx-auto">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-4.5 sm:py-5 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 mr-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs sm:text-sm">
                <span className="text-slate-200 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8077EC] animate-pulse" />
                  Vinimay Platform Tour
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-slate-400 hidden sm:inline text-xs">
                  Interactive Transactions &amp; Accounting Workflow
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-700/60 text-rose-300 text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                Live Preview
              </span>
            </div>
          </div>

          {/* HTML5 Video */}
          <div className="relative w-full aspect-video bg-black overflow-hidden select-none">
            <video
              className="w-full h-full object-cover block select-none pointer-events-none"
              src="/software-tour.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              controls={false}
            />
            <div className="absolute inset-0 pointer-events-none rounded-b-2xl sm:rounded-b-3xl ring-1 ring-white/10 shadow-inner" />
          </div>
        </div>

        {/* Quote Caption */}
        <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto">
          <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
            We built Vinimay to help Indian &amp; global entrepreneurs work smarter, faster, and better—without ever
            paying a single rupee in software fees.
          </p>
        </div>
      </div>
    </section>
  );
}
