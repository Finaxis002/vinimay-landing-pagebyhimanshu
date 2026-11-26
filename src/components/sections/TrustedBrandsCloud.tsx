"use client";

import React from "react";
import Image from "next/image";

interface BrandItem {
  name: string;
  image: string;
}

const BRANDS: BrandItem[] = [
  { name: "Pizza Hut", image: "/trusted-brands/pizzahut.png" },
  { name: "Potful", image: "/trusted-brands/potful.png" },
  { name: "Nando's", image: "/trusted-brands/nandos.png" },
  { name: "SOCIAL", image: "/trusted-brands/social.png" },
  { name: "Cinnabon", image: "/trusted-brands/cinnabon.png" },
  { name: "REBEL FOODS", image: "/trusted-brands/rebelfoods.png" },
  { name: "BOX8", image: "/trusted-brands/box8.png" },
  { name: "Biryani by Kilo", image: "/trusted-brands/biryanibykilo.png" },
  { name: "McDonald's", image: "/trusted-brands/mcdonalds.png" },
  { name: "KFC", image: "/trusted-brands/kfc.png" },
  { name: "ANAND Sweets", image: "/trusted-brands/anand.png" },
  { name: "SUBWAY", image: "/trusted-brands/subway.png" },
  { name: "DUNKIN' DONUTS", image: "/trusted-brands/dunkin.png" },
  { name: "BIG BOWL", image: "/trusted-brands/bigbowl.png" },
  { name: "CHINESE WOK", image: "/trusted-brands/chinesewok.png" },
  { name: "BIKANERVALA", image: "/trusted-brands/bikanervala.png" },
  { name: "BARBEQUE NATION", image: "/trusted-brands/barbequenation.png" },
  { name: "Haldiram's", image: "/trusted-brands/haldirams.png" },
  { name: "WOW! momo", image: "/trusted-brands/wowmomo.png" },
  { name: "chili's", image: "/trusted-brands/chilis.png" },
];

const ROW_ONE = BRANDS.slice(0, 10);
const ROW_TWO = BRANDS.slice(10);

const FADE_MASK =
  "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)";

function BrandCard({ brand, hidden }: { brand: BrandItem; hidden?: boolean }) {
  return (
    <div
      title={hidden ? undefined : brand.name}
      className="group flex-none w-28 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28 rounded-xl sm:rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-3 sm:p-4 select-none transition-colors duration-200 hover:border-purple-300"
    >
      <Image
        src={brand.image}
        alt={hidden ? "" : brand.name}
        width={110}
        height={70}
        loading="lazy"
        className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain  opacity-70 transition duration-200 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </div>
  );
}

function MarqueeRow({
  brands,
  reverse = false,
  duration,
}: {
  brands: BrandItem[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div
      className="tb-row overflow-hidden"
      style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
    >
      <div
        className={`tb-track flex w-max ${reverse ? "tb-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Two identical copies; each ends with the same gap so the -50% loop is seamless */}
        <div className="flex gap-3 sm:gap-4 pr-3 sm:pr-4">
          {brands.map((b) => (
            <BrandCard key={b.name} brand={b} />
          ))}
        </div>
        <div className="flex gap-3 sm:gap-4 pr-3 sm:pr-4" aria-hidden="true">
          {brands.map((b) => (
            <BrandCard key={`${b.name}-copy`} brand={b} hidden />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TrustedBrandsMarquee() {
  return (
    <section
      id="trusted-brands-cloud"
      className="pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-100"
    >
      <style>{`
        @keyframes tb-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tb-track { animation: tb-scroll linear infinite; }
        .tb-reverse { animation-direction: reverse; }
        .tb-row:hover .tb-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .tb-row { overflow-x: auto; mask-image: none !important; -webkit-mask-image: none !important; }
          .tb-track { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#232938] tracking-tight text-center mb-8 sm:mb-12">
          Trusted by <span className="text-purple-700 font-black">40, 000+</span>{" "}
          Businesses Globally
        </h3>

        <div className="flex flex-col gap-3 sm:gap-4">
          <MarqueeRow brands={ROW_ONE} duration={45} />
          <MarqueeRow brands={ROW_TWO} reverse duration={52} />
        </div>
      </div>
    </section>
  );
}