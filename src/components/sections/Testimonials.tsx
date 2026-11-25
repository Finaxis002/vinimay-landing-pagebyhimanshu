"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/content/testimonials";
import ArcHeading from "@/components/common/ArcHeading";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTestimonials = (dir: number) => {
    if (!trackRef.current) return;
    const scrollAmount = 440 * dir;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-10 sm:mb-14 max-w-6xl mx-auto">
        <div>
          <ArcHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            Hear from our clients
          </ArcHeading>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTestimonials(-1)}
            aria-label="Previous testimonials"
            className="w-10 h-10 rounded-full border border-[#A099E9] text-[#A099E9] hover:bg-[#504b85] hover:text-white active:scale-95 flex items-center justify-center transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollTestimonials(1)}
            aria-label="Next testimonials"
            className="w-10 h-10 rounded-full border border-rose-300 text-rose-500 hover:bg-rose-50 hover:border-rose-400 active:scale-95 flex items-center justify-center transition-all shadow-xs cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontally Scrolling Cards Track */}
      <div
        ref={trackRef}
        id="testimonials-track"
        className="flex gap-6 sm:gap-7 overflow-x-auto scroll-smooth no-scrollbar pb-6 px-1 snap-x snap-mandatory max-w-6xl mx-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between w-[84vw] sm:w-[380px] md:w-[420px] max-w-[420px] shrink-0 snap-start hover:shadow-lg transition-all duration-300"
          >
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed mb-8 font-normal">
              {item.quote}
            </p>

            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-50">
              <Image
                src={item.image}
                alt={item.name}
                width={44}
                height={44}
                className="w-11 h-11 rounded-lg object-cover bg-slate-100 shrink-0 border border-slate-200/80"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
