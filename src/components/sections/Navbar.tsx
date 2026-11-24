"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { OsmoRoll } from "../common/OsmoRoll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { usePageTransition } from "@/components/common/PageTransition";
import {
  ChevronDown,
  Receipt,
  Package,
  Store,
  Users,
  Building2,
  ArrowLeftRight,
  ArrowRight,
  Truck,
} from "lucide-react";

interface FeatureMenuItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgLight: string;
  bgHover: string;
  cardIndex: number;
  href?: string;
}

const FEATURE_ITEMS: FeatureMenuItem[] = [
  {
    title: "GST Billing & Invoice",
    description: "Automated e-invoices, GST returns & custom tax templates",
    icon: Receipt,
    color: "text-purple-600",
    bgLight: "bg-purple-100",
    bgHover: "group-hover/item:bg-purple-600",
    cardIndex: 0,
    href: "/features/gst-billing",
  },
  {
    title: "Inventory Management",
    description: "Real-time multi-warehouse stock & low-stock alerts",
    icon: Package,
    color: "text-blue-600",
    bgLight: "bg-blue-100",
    bgHover: "group-hover/item:bg-blue-600",
    cardIndex: 1,
    href: "/features/inventory",
  },
  {
    title: "POS Billing",
    description: "Lightning-fast retail checkout with offline barcode scans",
    icon: Store,
    color: "text-emerald-600",
    bgLight: "bg-emerald-100",
    bgHover: "group-hover/item:bg-emerald-600",
    cardIndex: 2,
    href: "/features/pos",
  },
  {
    title: "Customer Management",
    description: "Customer ledgers, credit limits, statements & WhatsApp bills",
    icon: Users,
    color: "text-amber-600",
    bgLight: "bg-amber-100",
    bgHover: "group-hover/item:bg-amber-600",
    cardIndex: 3,
    href: "/features/customers",
  },
  {
    title: "Vendor Management",
    description: "Supplier bills, purchase orders & smart payables tracking",
    icon: Building2,
    color: "text-rose-600",
    bgLight: "bg-rose-100",
    bgHover: "group-hover/item:bg-rose-600",
    cardIndex: 4,
    href: "/features/vendors",
  },
  {
    title: "Transaction Management",
    description: "Double-entry books, journal vouchers & automated reconciliation",
    icon: ArrowLeftRight,
    color: "text-indigo-600",
    bgLight: "bg-indigo-100",
    bgHover: "group-hover/item:bg-indigo-600",
    cardIndex: 5,
    href: "/features/transactions",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const { navigateWithTransition } = usePageTransition();

  const effectiveActiveSection = pathname === "/" ? activeSection : "";

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsFeaturesHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsFeaturesHovered(false);
    }, 180);
  };

  const handleFeatureClick = (
    e: React.MouseEvent,
    cardIndex: number,
    href?: string
  ) => {
    e.preventDefault();
    setIsFeaturesHovered(false);
    setIsMobileMenuOpen(false);

    if (href) {
      navigateWithTransition(href);
      return;
    }

    if (pathname !== "/") {
      router.push("/#the-features");
      return;
    }

    const section = document.getElementById("the-features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (cardIndex >= 0) {
      setTimeout(() => {
        const tabBtns = document.querySelectorAll<HTMLButtonElement>(".feature-tab-btn");
        if (tabBtns && tabBtns[cardIndex]) {
          tabBtns[cardIndex].click();
        }
      }, 350);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (pathname === "/") {
      const sections = ["hero", "industries", "how-it-works", "testimonials", "the-features", "faq"];
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-30% 0px -50% 0px" }
      );

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFeaturesHovered(false);
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".features-nav-container")) {
        setIsFeaturesHovered(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const getHref = (hashHref: string) => {
    if (pathname !== "/" && hashHref.startsWith("#")) {
      return `/${hashHref}`;
    }
    return hashHref;
  };

  const navLinks = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#how-it-works", label: "How It Works", id: "how-it-works" },
    { href: "#the-features", label: "Features", id: "the-features" },
    { href: "#faq", label: "FAQ", id: "faq" },
  ];

  return (
    <header
      id="navbar"
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 px-3 sm:px-6 md:px-8 lg:px-12 ${
        isScrolled
          ? "bg-[#8077EC]/90 backdrop-blur-md shadow-xl border-b border-white/20 py-2.5 sm:py-3"
          : "py-3 sm:py-4"
      }`}
    >
      {/* MOBILE FLOATING HEADER */}
      <div className="flex md:hidden items-center justify-between w-full bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl px-3.5 py-2 shadow-xl shadow-purple-950/10">
        {/* Left: Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          id="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          className="flex items-center gap-2 text-white hover:text-white/80 active:scale-95 transition-all py-1 px-1 rounded-lg focus:outline-none"
        >
          <span className="flex flex-col justify-center gap-1 w-4" id="mobile-menu-bars">
            <span
              className={`block h-[2px] w-4 bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </span>
          <span id="mobile-menu-text" className="text-sm font-semibold tracking-tight text-white select-none">
            {isMobileMenuOpen ? "Close" : "Menu"}
          </span>
        </button>

        {/* Center: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-lg overflow-hidden bg-white/20 p-0.5 backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0 shadow-xs">
            <Image
              src="/logo.webp"
              alt="Vinimay Logo"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-sans">
            Vinimay
          </span>
        </Link>

        {/* Right: Login Button */}
        <a
          href="https://vinimay.sharda.co.in/client-login"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-950 hover:bg-black text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-xl shadow-md transition-all active:scale-95 inline-flex items-center justify-center text-center"
        >
          Login
        </a>
      </div>

      {/* DESKTOP TOP BAR (md and above) */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/20 p-1 backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0 shadow-sm">
            <Image
              src="/logo.webp"
              alt="Vinimay Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Vinimay
          </span>
        </Link>

        {/* Center Floating Pill Menu */}
        <nav className="flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full p-1 px-1.5 shadow-sm text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = effectiveActiveSection === link.id;

            if (link.id === "the-features") {
              return (
                <div
                  key={link.id}
                  className="relative features-nav-container"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsFeaturesHovered((prev) => !prev);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      isActive || isFeaturesHovered
                        ? "bg-[#8077EC] text-white shadow-sm font-bold"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                    aria-expanded={isFeaturesHovered}
                    aria-haspopup="true"
                  >
                    <OsmoRoll>{link.label}</OsmoRoll>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 opacity-80 ${
                        isFeaturesHovered ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown Mega-Menu Card */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[600px] transition-all duration-200 z-50 ${
                      isFeaturesHovered
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.18)] rounded-2xl p-4 text-slate-800">
                      {/* Header Badge */}
                      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#8077EC] animate-pulse" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Business Operations Suite
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-700 border border-emerald-200/60">
                          100% Free Forever
                        </span>
                      </div>

                      {/* 2-Column Grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {FEATURE_ITEMS.map((item) => {
                          const IconComponent = item.icon;
                          if (item.href) {
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsFeaturesHovered(false);
                                  setIsMobileMenuOpen(false);
                                  if (item.href) navigateWithTransition(item.href);
                                }}
                                className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 border border-transparent hover:border-purple-100/80 transition-all text-left w-full cursor-pointer"
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.bgLight} ${item.color} ${item.bgHover} group-hover/item:text-white transition-all shadow-xs`}
                                >
                                  <IconComponent className="w-4 h-4 transition-transform group-hover/item:scale-110" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#8077EC] flex items-center justify-between transition-colors">
                                    <span>{item.title}</span>
                                    <span className="text-[9px] font-semibold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200/60">
                                      View Page →
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          }

                          return (
                            <button
                              key={item.title}
                              type="button"
                              onClick={(e) => handleFeatureClick(e, item.cardIndex, item.href)}
                              className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 border border-transparent hover:border-purple-100/80 transition-all text-left w-full cursor-pointer"
                            >
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.bgLight} ${item.color} ${item.bgHover} group-hover/item:text-white transition-all shadow-xs`}
                              >
                                <IconComponent className="w-4 h-4 transition-transform group-hover/item:scale-110" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-bold text-slate-800 group-hover/item:text-[#8077EC] flex items-center justify-between transition-colors">
                                  <span>{item.title}</span>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Bottom Footer Bar */}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/90 -mx-4 -mb-4 px-4 py-2.5 rounded-b-2xl">
                        <button
                          type="button"
                          onClick={(e) => handleFeatureClick(e, 6)}
                          className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 hover:text-cyan-700 transition-colors cursor-pointer"
                        >
                          <Truck className="w-3.5 h-3.5 text-cyan-600" />
                          <span>Trip &amp; Fleet Logistics</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleFeatureClick(e, -1)}
                          className="flex items-center gap-1 text-[11px] font-bold text-[#8077EC] hover:text-purple-700 transition-colors cursor-pointer"
                        >
                          <span>Explore Interactive Tour</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.id}
                href={getHref(link.href)}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-[#8077EC] text-white shadow-sm font-bold"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                <OsmoRoll>{link.label}</OsmoRoll>
              </a>
            );
          })}
          <a
            href="https://vinimay.sharda.co.in/knowledge-base"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-colors"
          >
            <OsmoRoll>Knowledge Center</OsmoRoll>
          </a>
        </nav>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="https://vinimay.sharda.co.in/client-login"
            target="_blank"
            className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-colors px-2.5 sm:px-3 py-1.5"
          >
            <OsmoRoll>Log in</OsmoRoll>
          </Link>
          {/* <Link
            href="https://vinimay.sharda.co.in/client-signup"
            target="_blank"
            className="inline-flex bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full border border-white/20 shadow-md hover:scale-105 transition-all"
          >
            <OsmoRoll>Sign Up</OsmoRoll>
          </Link> */}
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden mt-2 bg-slate-950/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 py-3" : "!max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div id="mobile-nav-content" className="p-4 sm:p-5 flex flex-col gap-1 text-sm font-semibold text-white/95">
          {navLinks.map((link) => {
            const isActive = effectiveActiveSection === link.id;

            if (link.id === "the-features") {
              return (
                <div key={link.id} className="flex flex-col">
                  {/* Full Row Click Event for Features on Mobile */}
                  <button
                    type="button"
                    onClick={() => setIsMobileFeaturesOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl hover:bg-white/15 text-white/90 hover:text-white transition-all text-left cursor-pointer"
                  >
                    <span className="font-semibold text-white/95">{link.label}</span>
                    <span className="flex items-center gap-1.5 text-xs text-white/70">
                      <span className="text-[11px] font-medium opacity-80">
                        {isMobileFeaturesOpen ? "Hide" : "More"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileFeaturesOpen ? "rotate-180 text-white" : "text-white/80"
                        }`}
                      />
                    </span>
                  </button>

                  {/* Expanded Mobile Features Submenu */}
                  {isMobileFeaturesOpen && (
                    <div className="pl-3 pr-1 py-1.5 flex flex-col gap-1 border-l-2 border-purple-400/40 ml-4 my-1">
                      {FEATURE_ITEMS.map((item) => {
                        const IconComponent = item.icon;
                        if (item.href) {
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                setIsFeaturesHovered(false);
                                setIsMobileMenuOpen(false);
                                if (item.href) navigateWithTransition(item.href);
                              }}
                              className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/15 text-left transition-all cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${item.bgLight} ${item.color}`}
                                >
                                  <IconComponent className="w-3.5 h-3.5" />
                                </span>
                                <span className="font-medium text-slate-100">{item.title}</span>
                              </div>
                              <span className="text-[10px] text-purple-300 font-bold bg-white/10 px-1.5 py-0.5 rounded">
                                View Page →
                              </span>
                            </Link>
                          );
                        }

                        return (
                          <button
                            key={item.title}
                            type="button"
                            onClick={(e) => handleFeatureClick(e, item.cardIndex, item.href)}
                            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/15 text-left transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${item.bgLight} ${item.color}`}
                              >
                                <IconComponent className="w-3.5 h-3.5" />
                              </span>
                              <span className="font-medium text-slate-100">{item.title}</span>
                            </div>
                            <span className="text-[10px] text-white/50">
                              Explore
                            </span>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={(e) => handleFeatureClick(e, -1)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#8077EC] bg-white/10 hover:bg-white/15 rounded-xl transition-all cursor-pointer mt-1"
                      >
                        <span>View All 7 Modules →</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.id}
                href={getHref(link.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl hover:bg-white/15 transition-all ${
                  isActive ? "bg-white/15 text-white font-bold" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://vinimay.sharda.co.in/knowledge-base"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl hover:bg-white/15 text-white/90 hover:text-white transition-all"
          >
            Knowledge Center
          </a>
          <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between gap-2.5">
            <Link
              href="https://vinimay.sharda.co.in/client-login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-center py-2.5 rounded-xl font-bold backdrop-blur-md transition-all active:scale-95"
            >
              Log In
            </Link>
            {/* <a
              href="https://vinimay.sharda.co.in/client-signup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 bg-slate-950 hover:bg-black text-white text-center py-2.5 rounded-xl font-bold shadow-lg transition-all active:scale-95"
            >
              Signup
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
