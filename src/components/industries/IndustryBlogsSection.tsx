"use client";

import React from "react";
import { Eye, MessageSquare, BookOpen, ChevronRight, ArrowUpRight } from "lucide-react";
import { IndustryResourceCard, IndustryBlogsGroup } from "@/content/industryBlogsData";
import Link from "next/link";
import Image from "next/image";

export interface IndustryBlogsSectionProps {
  industryTitle: string;
  data: IndustryBlogsGroup;
}

/* =========================================================================
   DETERMINISTIC META GENERATOR (100% HYDRATION-SAFE)
   ========================================================================= */

function getDeterministicMeta(id: string, index: number) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  const abs = Math.abs(hash);
  const views = (2800 + (abs % 4500)).toLocaleString();
  const comments = 2 + (abs % 7);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = days[abs % days.length];
  const month = months[(abs >> 2) % months.length];
  const dateNum = 2 + (abs % 26);
  const dateStr = `${day}, ${month} ${dateNum}`;

  return { views, comments, dateStr };
}

/* =========================================================================
   CATEGORY FORMATTER
   ========================================================================= */

function formatCategory(tag?: string): string {
  if (!tag) return "Article";
  const cleaned = tag.replace(/[-_]/g, " ").trim();
  // Convert to Title Case
  return cleaned
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* =========================================================================
   ILLUSTRATED 3D-STYLE AVATAR COMPONENT
   Matches the 3D character avatars seen in the reference design
   ========================================================================= */

const AVATAR_PALETTES = [
  { bg: "#3b82f6", skin: "#ffdbac", hair: "#1e293b", hat: "#ef4444" }, // Cap avatar
  { bg: "#8b5cf6", skin: "#c68642", hair: "#0f172a", hat: "#6366f1" }, // Beanie avatar
  { bg: "#10b981", skin: "#f1c27d", hair: "#475569", hat: null },      // Glasses avatar
  { bg: "#f59e0b", skin: "#8d5524", hair: "#1c1917", hat: "#3b82f6" }, // Beard avatar
  { bg: "#ec4899", skin: "#ffd1b3", hair: "#64748b", hat: null },      // Casual avatar
];

function AuthorAvatar({
  author,
  fallbackIndex = 0,
  size = "sm",
}: {
  author?: { name: string; avatarUrl?: string };
  fallbackIndex?: number;
  size?: "sm" | "md";
}) {
  const p = AVATAR_PALETTES[fallbackIndex % AVATAR_PALETTES.length];
  const dimensionClass = size === "md" ? "w-9 h-9" : "w-8 h-8";

  if (author?.avatarUrl) {
    return (
      <div
        className={`${dimensionClass} rounded-full ring-2 ring-white shadow-sm overflow-hidden bg-white shrink-0 relative`}
      >
        <Image
          src={author.avatarUrl}
          alt={author.name || "Author"}
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>
    );
  }

  // Stylish SVG illustrated avatar matching the design reference
  return (
    <div
      className={`${dimensionClass} rounded-full ring-2 ring-white shadow-sm overflow-hidden bg-slate-100 shrink-0 relative flex items-center justify-center`}
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="36" height="36" rx="18" fill={p.bg} />
        {/* Torso */}
        <path
          d="M8 36c0-6 4-10 10-10s10 4 10 10"
          fill={p.hair}
        />
        {/* Head */}
        <circle cx="18" cy="18" r="7.5" fill={p.skin} />
        {/* Hair / Cap */}
        {p.hat ? (
          <path
            d="M10.5 16c0-4.5 3.5-7 7.5-7s7.5 2.5 7.5 7c-2-1.5-5.5-2-7.5-2s-5.5 0.5-7.5 2z"
            fill={p.hat}
          />
        ) : (
          <path
            d="M11 16c0-4.5 3-7 7-7s7 2.5 7 7c-2-1-5-1.5-7-1.5s-5 0.5-7 1.5z"
            fill={p.hair}
          />
        )}
        {/* Eyes */}
        <circle cx="15.5" cy="18.5" r="1" fill="#0f172a" />
        <circle cx="20.5" cy="18.5" r="1" fill="#0f172a" />
        {/* Smile */}
        <path
          d="M16 21c0.6 0.8 1.4 1 2 1s1.4-0.2 2-1"
          stroke="#0f172a"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =========================================================================
   3D PASTEL ABSTRACT BACKGROUND (FALLBACK WHEN NO IMAGE)
   Matches the 3D spheres, blocks and soft gradient looks in reference
   ========================================================================= */

const PASTEL_THEMES = [
  {
    bg: "bg-gradient-to-br from-[#f1f3f6] to-[#e4e8ef]",
    accent1: "bg-white/90 shadow-lg",
    accent2: "bg-slate-300/40",
  },
  {
    bg: "bg-gradient-to-br from-[#f8f1e9] to-[#ebdcd0]",
    accent1: "bg-[#faeee2] shadow-md",
    accent2: "bg-[#e8ceb9]/60",
  },
  {
    bg: "bg-gradient-to-br from-[#ece4f8] to-[#ded2f2]",
    accent1: "bg-[#f5eefc] shadow-md",
    accent2: "bg-[#d3bdf0]/60",
  },
  {
    bg: "bg-gradient-to-br from-[#fae7e1] to-[#f4d1c7]",
    accent1: "bg-[#fdede8] shadow-md",
    accent2: "bg-[#f3bbae]/60",
  },
  {
    bg: "bg-gradient-to-br from-[#e1f3ee] to-[#c7e9df]",
    accent1: "bg-[#ebfaf6] shadow-md",
    accent2: "bg-[#a3ded0]/60",
  },
  {
    bg: "bg-gradient-to-br from-[#e3edf7] to-[#ccdcf0]",
    accent1: "bg-[#eff6fc] shadow-md",
    accent2: "bg-[#acc6e6]/60",
  },
];

function CardVisualPlaceholder({ index }: { index: number }) {
  const theme = PASTEL_THEMES[index % PASTEL_THEMES.length];

  return (
    <div className={`w-full h-full ${theme.bg} relative overflow-hidden flex items-center justify-center`}>
      {/* 3D-styled geometric shapes & lighting highlights */}
      <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-transparent pointer-events-none" />
      
      {/* 3D Spheres / Pedestals composition */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        <div className={`w-20 h-20 rounded-full ${theme.accent1} border border-white/60 relative z-10 flex items-center justify-center shadow-md`}>
          <div className="w-8 h-8 rounded-full bg-white/70 blur-xs absolute top-2 left-2" />
        </div>
        <div className={`w-12 h-12 rounded-full ${theme.accent2} absolute -bottom-1 -right-2 z-20`} />
        <div className={`w-8 h-8 rounded-full ${theme.accent2} absolute -top-1 -left-2 z-0`} />
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN INDUSTRY BLOGS SECTION
   ========================================================================= */

export default function IndustryBlogsSection({
  industryTitle,
  data,
}: IndustryBlogsSectionProps) {
  const cards = data.cards || [];
  if (cards.length === 0) return null;

  const featuredPost = cards[0];
  const gridPosts = cards.slice(1);

  const featuredMeta = getDeterministicMeta(
    featuredPost.id,
    0
  );

  return (
    <section className="relative py-16 sm:py-24 md:py-28 bg-[#fbfbfd] border-t border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-[11px] font-extrabold uppercase tracking-widest text-purple-700 mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{data.badge || "Blogs & Resources"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              {data.title}
            </h2>

            {data.buttonText && (
              <a
                href={data.buttonHref || "https://vinimay.sharda.co.in/blogs"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#635BFF] hover:bg-[#5349eb] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer group"
              >
                <span>{data.buttonText}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {data.description}
            </p>
          </div>
        </div>

        {/* =================================================================
           FEATURED POST (ROW 1: FULL WIDTH HORIZONTAL CARD)
           Matches the top wide card in the design reference
           ================================================================= */}
        <Link
          href={featuredPost.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 p-3 sm:p-4 mb-8 sm:mb-10 group overflow-hidden no-underline text-inherit"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Media Column */}
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-auto w-full min-h-[250px] sm:min-h-[300px] md:min-h-[340px] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
              {featuredPost.imageUrl ? (
                <>
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.imageAlt || featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                <CardVisualPlaceholder index={0} />
              )}

              {/* Author Avatar in Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <AuthorAvatar
                  author={featuredPost.author}
                  fallbackIndex={0}
                  size="md"
                />
              </div>

              {/* Read Time Badge in Bottom Right */}
              <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-xs">
                {featuredPost.readTime || "2 min Read"}
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
              <div>
                {/* Category Pill */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    {formatCategory(featuredPost.tag)}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-purple-600 transition-colors mb-4">
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 font-normal">
                  {featuredPost.summary}
                </p>
              </div>

              {/* Footer Meta Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 hover:text-slate-600 transition-colors">
                    <Eye className="w-4 h-4 text-slate-400" />
                    <span>{featuredPost.views || featuredMeta.views}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 hover:text-slate-600 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredPost.comments || featuredMeta.comments}</span>
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-slate-500">
                  <span className="w-2 h-2 rounded-full border border-slate-400" />
                  <span>{featuredPost.date || featuredMeta.dateStr}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* =================================================================
           POSTS GRID (ROW 2+: 3-COLUMN VERTICAL CARDS)
           Matches the bottom cards in the design reference
           ================================================================= */}
        {gridPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {gridPosts.map((card, idx) => {
              const meta = getDeterministicMeta(card.id, idx + 1);

              return (
                <Link
                  key={card.id}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white rounded-3xl border border-slate-200/80 p-3 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden no-underline text-inherit"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
                    {card.imageUrl ? (
                      <>
                        <Image
                          src={card.imageUrl}
                          alt={card.imageAlt || card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <CardVisualPlaceholder index={idx + 1} />
                    )}

                    {/* Read Time Badge at Bottom Right */}
                    <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-slate-800 shadow-xs">
                      {card.readTime || "2 min Read"}
                    </div>
                  </div>

                  {/* Overlapping Author Avatar (Positioned on the Left across the bottom border of the image) */}
                  <div className="-mt-4 ml-3 relative z-20 w-fit">
                    <AuthorAvatar
                      author={card.author}
                      fallbackIndex={idx + 1}
                      size="sm"
                    />
                  </div>

                  {/* Content Area Below Image */}
                  <div className="px-3 pb-3 pt-2 flex flex-col flex-1">
                    {/* Category Pill */}
                    <div className="mt-1 mb-2.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                        {formatCategory(card.tag)}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-snug mb-2">
                      {card.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4 font-normal">
                      {card.summary}
                    </p>

                    {/* Meta Footer Row */}
                    <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-medium">
                      <div className="flex items-center gap-3.5">
                        <span className="inline-flex items-center gap-1.5 hover:text-slate-600 transition-colors">
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          <span>{card.views || meta.views}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 hover:text-slate-600 transition-colors">
                          <MessageSquare className="w-3 h-3 text-slate-400" />
                          <span>{card.comments || meta.comments}</span>
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full border border-slate-400" />
                        <span>{card.date || meta.dateStr}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
