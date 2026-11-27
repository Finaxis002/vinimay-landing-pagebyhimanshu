"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Store, Layers, Truck, Briefcase } from "lucide-react";
import ArcHeading from "../common/ArcHeading";

interface BusinessType {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  badge: string;
}

const businessTypes: BusinessType[] = [
  {
    icon: Store,
    title: "Retailers",
    description:
      "Keep customer details and khata records organised at your counter.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&auto=format&fit=crop&q=80",
    badge: "Counter POS & Khata",
  },
  {
    icon: Layers,
    title: "Marble Shops",
    description:
      "Track customers, orders and pending payments in one place.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80",
    badge: "Slabs & Measurements",
  },
  {
    icon: Truck,
    title: "Transport Companies",
    description:
      "Manage party accounts, follow-ups and outstanding balances with ease.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&auto=format&fit=crop&q=80",
    badge: "Fleet & Trip Logs",
  },
  {
    icon: Briefcase,
    title: "Every Business Owner",
    description:
      "Whatever your trade or size, get support to run and grow your business.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80",
    badge: "Universal OS",
  },
];

export default function Goal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden border-t border-slate-100 bg-[#fafafa] py-16 sm:py-24 transition-colors duration-700">
      {/* Dynamic Full-Bleed Background Images with Smooth Crossfade */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-out ${
          hoveredIndex !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {businessTypes.map((item, idx) => {
          const isActive = hoveredIndex === idx;
          return (
            <div
              key={item.title}
              className={`absolute inset-0 transition-all duration-700 ease-out will-change-[opacity,transform] ${
                isActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
          );
        })}

        {/* Sophisticated dual-tone frosted overlay for contrast & seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/82 to-white/30 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-purple-500/5 mix-blend-multiply pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-3.5 py-1 text-xs font-bold tracking-wide uppercase text-purple-700 backdrop-blur-md shadow-2xs">
            <span>OUR MISSION</span>
          </div>

          <ArcHeading
            as="h2"
            className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Goal
          </ArcHeading>

          <ArcHeading className="mt-4 text-base leading-relaxed text-slate-900 sm:text-2xl">
            Supporting Every Business Owner — from retail counters to marble
            showrooms and transport yards, we want every owner to have the
            support to run and grow their business at zero software cost.
          </ArcHeading>
        </div>

        {/* Business Type Cards */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {businessTypes.map(
            ({ icon: Icon, title, description, badge }, idx) => {
              const isHovered = hoveredIndex === idx;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <article
                  key={title}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(idx)}
                  onBlur={() => setHoveredIndex(null)}
                  tabIndex={0}
                  className={`group relative flex flex-col justify-between rounded-2xl p-6 cursor-pointer select-none transition-all duration-500 ease-out will-change-transform border ${
                    isHovered
                      ? "bg-white/5 backdrop-blur-xl border-purple-400 shadow-2xl -translate-y-2 ring-2 ring-purple-400/30 scale-[1.02]"
                      : isAnyHovered
                      ? "bg-white/75 backdrop-blur-md border-slate-200/80 shadow-xs opacity-75"
                      : "bg-white/90 backdrop-blur-xs border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-xl"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300 ${
                          isHovered
                            ? "bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-500/30"
                            : "bg-purple-50 border-purple-100 text-purple-700"
                        }`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase transition-colors duration-300 ${
                          isHovered
                            ? "bg-purple-100 text-purple-800"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {badge}
                      </span>
                    </div>

                    <h4 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore vertical</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </article>
              );
            }
          )}
        </div>

        {/* Our Vision */}
        <div className="mt-10 rounded-3xl bg-[#17141f]/95 px-6 py-10 text-center shadow-xl sm:mt-14 sm:px-12 backdrop-blur-md border border-white/10">
          <p className="text-xs font-bold tracking-widest uppercase text-purple-300">
            Our Vision
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-xl font-bold leading-snug text-white sm:text-3xl">
            A future where no business owner is left behind, and every business
            has the chance to grow.
          </p>
        </div>
      </div>
    </section>
  );
}
