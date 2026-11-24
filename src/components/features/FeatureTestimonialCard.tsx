"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle2, Quote } from "lucide-react";

export interface FeatureTestimonialProps {
  featureName: string;
  metricBadge: string;
  metricHighlight: string;
  quote: string;
  authorRole: string;
  companyName: string;
  businessScale: string;
  gradientAccent?: string;
}

export default function FeatureTestimonialCard({
  featureName,
  metricBadge,
  metricHighlight,
  quote,
  authorRole,
  companyName,
  businessScale,
  gradientAccent = "from-purple-600 via-indigo-600 to-violet-700",
}: FeatureTestimonialProps) {
  return (
    <section className="w-full py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main Card with ambient backlight & layered gradient border */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(109,40,217,0.12)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_70px_-15px_rgba(109,40,217,0.18)]">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Background Decorative Quote Mark */}
          <Quote
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 text-purple-600/[0.06] pointer-events-none"
            strokeWidth={1.5}
          />

          {/* Top Row: Ratings, Eyebrow & Live Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 relative z-10">
            {/* Stars & Category */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 drop-shadow-xs"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                5.0 Verified Review
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="hidden sm:inline-block text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
                {featureName}
              </span>
            </div>

            {/* Impact Metric Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/80 px-3.5 py-1.5 rounded-full shadow-2xs self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-700">
                {metricBadge}:
              </span>
              <span className={`text-xs font-extrabold bg-gradient-to-r ${gradientAccent} bg-clip-text text-transparent`}>
                {metricHighlight}
              </span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="relative z-10 mb-8 sm:mb-10">
            <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed sm:leading-relaxed tracking-tight">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>

          {/* Author Profile Footer - Mobile Friendly */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 relative z-10">
            {/* Left: Avatar + Details */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Photo with Glowing Gradient Ring */}
              <div className="relative shrink-0">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl overflow-hidden ring-2 ring-purple-600/30 ring-offset-2 ring-offset-white shadow-md bg-purple-100">
                  <Image
                    src="/testimonials/himanshu.jpg"
                    alt="Himanshu Dhammeriya"
                    width={60}
                    height={60}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Verified Checkmark Pill */}
                <span
                  className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs"
                  title="Verified Business Owner"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                </span>
              </div>

              {/* Name, Role & Company */}
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                    Himanshu Dhammeriya
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                    Verified Owner
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {authorRole} • <span className="text-slate-700 font-semibold">{companyName}</span>
                </p>
              </div>
            </div>

            {/* Right: Business Scale Pill */}
            <div className="self-start sm:self-auto flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-600">
              <span className="text-purple-600 font-black">⚡ Live Scale:</span>
              <span className="font-bold text-slate-900">{businessScale}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
