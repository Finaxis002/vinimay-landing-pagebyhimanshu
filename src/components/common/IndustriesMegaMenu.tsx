"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Building2,
  Package,
  Layers,
  ShoppingBasket,
  Factory,
  Plane,
  Truck,
  UtensilsCrossed,
  Wrench,
  ArrowLeftRight,
  ArrowRight,
  Dumbbell,
} from "lucide-react";

/* ---------- data ---------- */

export interface BusinessSolution {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tint: string;
  modalKey?: string;
}

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    id: "general",
    title: "General",
    description: "Billing, inventory & accounts",
    icon: Building2,
    tint: "bg-purple-500/20 text-purple-300",
    modalKey: "retail",
  },
  {
    id: "courier",
    title: "Courier",
    description: "Tracking, delivery & billing",
    icon: Package,
    tint: "bg-blue-500/20 text-blue-300",
    modalKey: "transport",
  },
  {
    id: "marbles",
    title: "Marbles",
    description: "Stock, units & sales",
    icon: Layers,
    tint: "bg-teal-500/20 text-teal-300",
    modalKey: "manufacturing",
  },
  {
    id: "kirana",
    title: "Kirana & Grocery",
    description: "Billing, inventory & invoice",
    icon: ShoppingBasket,
    tint: "bg-emerald-500/20 text-emerald-300",
    modalKey: "retail",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Production, raw material & stock",
    icon: Factory,
    tint: "bg-rose-500/20 text-rose-300",
    modalKey: "manufacturing",
  },
  {
    id: "travels",
    title: "Travels",
    description: "Bookings, routes & billing",
    icon: Plane,
    tint: "bg-indigo-500/20 text-indigo-300",
    modalKey: "transport",
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Trips, vehicles & expenses",
    icon: Truck,
    tint: "bg-amber-500/20 text-amber-300",
    modalKey: "transport",
  },
  {
    id: "restaurant",
    title: "Restaurant & Cafe",
    description: "Sales, stock & vendors",
    icon: UtensilsCrossed,
    tint: "bg-orange-500/20 text-orange-300",
    modalKey: "restaurants",
  },
  {
    id: "service",
    title: "Service",
    description: "Sales, raw material & stock",
    icon: Wrench,
    tint: "bg-cyan-500/20 text-cyan-300",
    modalKey: "properties",
  },
  {
    id: "trading",
    title: "Trading",
    description: "Purchase, sales & stock ledger",
    icon: ArrowLeftRight,
    tint: "bg-violet-500/20 text-violet-300",
    modalKey: "retail",
  },
  {
    id: "gyms",
    title: "Gyms & Fitness",
    description: "Members, short code attendance & check-in",
    icon: Dumbbell,
    tint: "bg-teal-500/20 text-teal-300",
    modalKey: "gyms",
  },
  {
    id: "properties",
    title: "Real Estate & Builders",
    description: "Projects, flats & RERA invoicing",
    icon: Building2,
    tint: "bg-amber-500/20 text-amber-300",
    modalKey: "properties",
  },
];

/* ---------- desktop: 2-stage length-then-height expanding mega-menu ---------- */

export function IndustriesMegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!open) return;
    }

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    if (open) {
      container.style.display = "block";
      container.style.pointerEvents = "auto";
      const targetWidth = Math.min(1152, window.innerWidth - 32);

      const tl = gsap.timeline();
      timelineRef.current = tl;

      gsap.set(container, {
        opacity: 1,
        width: "480px",
        height: "52px",
        borderRadius: "9999px",
        overflow: "hidden",
      });
      gsap.set(content, { opacity: 0, y: 20 });

      // STAGE 1: Increase LENGTH (width) slowly FIRST
      tl.to(container, {
        width: targetWidth,
        borderRadius: "24px",
        duration: 0.44,
        ease: "power3.inOut",
      });

      // STAGE 2: Increase HEIGHT slowly downward SECOND
      tl.to(container, {
        height: 720,
        duration: 0.48,
        ease: "power3.inOut",
      });

      // Reveal inner content
      tl.to(content, { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }, "-=0.18");
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          if (container) {
            container.style.pointerEvents = "none";
            container.style.display = "none";
          }
        },
      });
      timelineRef.current = tl;

      tl.to(content, { opacity: 0, y: 10, duration: 0.18, ease: "power2.in" });
      tl.to(container, { height: "52px", duration: 0.38, ease: "power3.inOut" });
      tl.to(container, { width: "480px", borderRadius: "9999px", duration: 0.38, ease: "power3.inOut" });
      tl.to(container, { opacity: 0, duration: 0.12 }, "-=0.08");
    }
  }, [open]);

  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const handleSolutionClick = (modalKey?: string) => {
    onClose();
    if (modalKey) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("open-industry-modal", { detail: modalKey }));
      }, 350);
    }
  };

  return (
    <div
      id="industries-menu"
      role="region"
      aria-label="Business Solutions"
      className="hidden md:block fixed top-2.5 sm:top-3 left-1/2 -translate-x-1/2 z-[150] w-full max-w-6xl px-4 pointer-events-none"
    >
      <div
        ref={containerRef}
        className="mx-auto overflow-hidden border border-white/10 bg-[#17141f]/95 backdrop-blur-2xl text-[#f4f2f8] shadow-2xl shadow-black/60 industries-morph-container"
        style={{ width: "480px", height: "52px", borderRadius: "9999px", display: "none" }}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 h-[52px] border-b border-white/10 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all active:scale-95 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
            <span>Close</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Vinimay Industries &amp; Verticals
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/industries"
              onClick={onClose}
              className="text-[10px] font-bold px-3 py-1 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 transition-colors flex items-center gap-1.5"
            >
              <span>12 Business Solutions</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Content wrapper */}
        <div ref={contentRef} className="opacity-0">
          <div className="flex gap-8 p-8">
            {/* Left column: Solutions Grid */}
            <div className="flex min-w-0 flex-1 flex-col gap-4">
              <p className="text-xs font-semibold tracking-[0.08em] text-[#a9a3bd] uppercase">
                Business Solutions
              </p>
              <p className="text-sm text-[#a9a3bd] -mt-2">
                Choose a solution built for your business
              </p>

              <div className="grid grid-cols-2 gap-3">
                {BUSINESS_SOLUTIONS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.id}
                      href={`/industries/${item.id}`}
                      onClick={onClose}
                      className="group flex items-center gap-3 p-3 rounded-2xl border border-[#2e2a3d] bg-[#211d2e] transition-all hover:border-[#4a4466] hover:bg-[#282336]"
                    >
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.tint} group-hover:bg-primary group-hover:text-white transition-all shrink-0`}>
                        <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold text-[#f4f2f8] group-hover:text-[#e3b5d8] transition-colors truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-[#a9a3bd] truncate mt-0.5">
                          {item.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#e3b5d8] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right column: Featured & Explore Cards */}
            <div className="flex w-[340px] shrink-0 flex-col justify-between gap-4">
              {/* Featured Setup Card */}
              <div className="flex flex-col gap-3 rounded-[20px] border border-[#2e2a3d] bg-[#211d2e] p-5">
                <div className="h-[120px] overflow-hidden rounded-xl bg-[#2a2539]">
                  <svg viewBox="0 0 290 150" className="h-full w-full" aria-hidden="true">
                    <circle cx="70" cy="80" r="46" fill="#8fa8f0" />
                    <rect x="120" y="34" width="86" height="86" rx="22" fill="#f08aa0" />
                    <path d="M206 120a44 44 0 0 1 44-44v44z" fill="#f5a46b" />
                    <circle cx="70" cy="80" r="16" fill="#2a2539" />
                    <circle cx="163" cy="77" r="14" fill="#2a2539" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-[#e3b5d8]">FEATURED SETUP</p>
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-white mt-0.5">Restaurants &amp; POS</h3>
                  <p className="text-xs leading-relaxed text-[#a9a3bd] mt-1">
                    Tables, orders, KOT and kitchen inventory in one place.
                  </p>
                </div>
                <Link
                  href="/industries/restaurant"
                  onClick={onClose}
                  className="self-start rounded-lg bg-[#f4f2f8] px-3.5 py-1.5 text-xs font-semibold text-[#12101a] transition-colors hover:bg-white flex items-center gap-1.5"
                >
                  <span>See restaurant setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Dedicated "Explore All Solutions" Card on the Right Side */}
              <Link
                href="/industries"
                onClick={onClose}
                className="group flex flex-col justify-between p-5 rounded-[20px] border border-purple-500/30 bg-gradient-to-br from-purple-900/30 via-[#211d2e] to-indigo-950/40 hover:border-purple-400/60 transition-all shadow-md relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 font-mono px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                    DIRECTORY
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#e3b5d8] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#e3b5d8] transition-colors">
                  Explore All Solutions →
                </h4>
                <p className="text-xs text-[#a9a3bd] mt-1">
                  View all 12 specialized industry verticals with live capabilities and interactive workflows.
                </p>
              </Link>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex h-[60px] items-center justify-between border-t border-[#2e2a3d] px-8">
            <Link href="/industries" onClick={onClose} className="text-[15px] font-semibold text-[#e3b5d8] hover:underline">
              Explore all solutions →
            </Link>
            <Link href="#inquiry" onClick={onClose} className="text-sm text-[#a9a3bd]">
              Not sure where you fit? <span className="font-semibold text-[#f4f2f8] underline">Talk to us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- mobile: render inside your isMobileMenuOpen drawer ---------- */

export function IndustriesMobileList({ onNavigate }: { onNavigate: () => void }) {
  const handleSolutionClick = (modalKey?: string) => {
    onNavigate();
    if (modalKey) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("open-industry-modal", { detail: modalKey }));
      }, 350);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#17141f] p-2 text-[#f4f2f8]">
      {BUSINESS_SOLUTIONS.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.id}
            href={`/industries/${item.id}`}
            onClick={onNavigate}
            className="flex min-h-[48px] w-full items-center gap-3 rounded-xl px-3 py-2 text-left hover:bg-white/10 transition-colors"
          >
            <span className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 ${item.tint}`}>
              <IconComponent className="w-4 h-4" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-semibold truncate">{item.title}</div>
              <div className="text-[10px] text-[#a9a3bd] truncate">{item.description}</div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#a9a3bd] shrink-0" />
          </Link>
        );
      })}
      <Link
        href="/industries"
        onClick={onNavigate}
        className="flex min-h-[48px] items-center px-3 text-[15px] font-semibold text-[#e3b5d8] hover:underline"
      >
        Explore all solutions →
      </Link>
    </div>
  );
}
