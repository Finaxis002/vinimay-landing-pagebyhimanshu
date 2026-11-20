"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { OsmoRoll } from "../common/OsmoRoll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Intersection observer for nav links
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
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#industries", label: "Industries", id: "industries" },
    { href: "#how-it-works", label: "How It Works", id: "how-it-works" },
    { href: "#testimonials", label: "Case Study", id: "testimonials" },
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
        <a href="#hero" className="flex items-center gap-2 group">
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
        </a>

        {/* Right: Login Button */}
        <a
          href="#inquiry"
          className="bg-slate-950 hover:bg-black text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-xl shadow-md transition-all active:scale-95 inline-flex items-center justify-center text-center"
        >
          Login
        </a>
      </div>

      {/* DESKTOP TOP BAR (md and above) */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
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
        </a>

        {/* Center Floating Pill Menu */}
        <nav className="flex items-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full p-1 px-1.5 shadow-sm text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
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
          <a
            href="#inquiry"
            className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-colors px-2.5 sm:px-3 py-1.5"
          >
            <OsmoRoll>Log in</OsmoRoll>
          </a>
          <a
            href="#inquiry"
            className="inline-flex bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full border border-white/20 shadow-md hover:scale-105 transition-all"
          >
            <OsmoRoll>Sign Up</OsmoRoll>
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden mt-2 bg-slate-950/80 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 py-3" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div id="mobile-nav-content" className="p-4 sm:p-5 flex flex-col gap-1 text-sm font-semibold text-white/95">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-white/15 text-white/90 hover:text-white transition-all"
            >
              {link.label}
            </a>
          ))}
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
            <a
              href="#inquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-center py-2.5 rounded-xl font-bold backdrop-blur-md transition-all active:scale-95"
            >
              Log In
            </a>
            <a
              href="#inquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 bg-slate-950 hover:bg-black text-white text-center py-2.5 rounded-xl font-bold shadow-lg transition-all active:scale-95"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
