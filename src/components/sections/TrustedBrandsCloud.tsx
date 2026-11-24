"use client";

import React from "react";
import Image from "next/image";

interface BrandItem {
  name: string;
  image: string;
}

// 9 columns in the exact arrangement of the staggered honeycomb cloud (total: 20 brands)
const BRAND_COLUMNS: BrandItem[][] = [
  // Col 1 (1 card, center)
  [{ name: "Pizza Hut", image: "/trusted-brands/pizzahut.png" }],

  // Col 2 (3 cards)
  [
    { name: "Potful", image: "/trusted-brands/potful.png" },
    { name: "Nando's", image: "/trusted-brands/nandos.png" },
    { name: "SOCIAL", image: "/trusted-brands/social.png" },
  ],

  // Col 3 (2 cards, staggered)
  [
    { name: "Cinnabon", image: "/trusted-brands/cinnabon.png" },
    { name: "REBEL FOODS", image: "/trusted-brands/rebelfoods.png" },
  ],

  // Col 4 (3 cards)
  [
    { name: "BOX8", image: "/trusted-brands/box8.png" },
    { name: "Biryani by Kilo", image: "/trusted-brands/biryanibykilo.png" },
    { name: "McDonald's", image: "/trusted-brands/mcdonalds.png" },
  ],

  // Col 5 (2 cards, staggered)
  [
    { name: "KFC", image: "/trusted-brands/kfc.png" },
    { name: "ANAND Sweets", image: "/trusted-brands/anand.png" },
  ],

  // Col 6 (3 cards)
  [
    { name: "SUBWAY", image: "/trusted-brands/subway.png" },
    { name: "DUNKIN' DONUTS", image: "/trusted-brands/dunkin.png" },
    { name: "BIG BOWL", image: "/trusted-brands/bigbowl.png" },
  ],

  // Col 7 (2 cards, staggered)
  [
    { name: "CHINESE WOK", image: "/trusted-brands/chinesewok.png" },
    { name: "BIKANERVALA", image: "/trusted-brands/bikanervala.png" },
  ],

  // Col 8 (3 cards)
  [
    { name: "BARBEQUE NATION", image: "/trusted-brands/barbequenation.png" },
    { name: "Haldiram's", image: "/trusted-brands/haldirams.png" },
    { name: "WOW! momo", image: "/trusted-brands/wowmomo.png" },
  ],

  // Col 9 (1 card, center)
  [{ name: "chili's", image: "/trusted-brands/chilis.png" }],
];

export default function TrustedBrandsCloud() {
  return (
    <div id="trusted-brands-cloud" className="pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#232938] tracking-tight text-center mb-10 sm:mb-14">
          Trusted by <span className="text-[#6d28d9] font-black">40000+</span> Restaurants Globally
        </h3>

        {/* Cloud Container with horizontal scroll safety on very small screens */}
        <div className="w-full overflow-x-auto no-scrollbar py-3 px-1">
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4 min-w-[760px] lg:min-w-0 mx-auto">
            {BRAND_COLUMNS.map((column, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col items-center justify-center gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4"
              >
                {column.map((brand) => (
                  <div
                    key={brand.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[108px] lg:h-[108px] xl:w-[114px] xl:h-[114px] rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3 md:p-3.5 select-none group"
                    title={brand.name}
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={90}
                      height={90}
                      className="w-auto h-auto max-w-[82%] max-h-[75%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
