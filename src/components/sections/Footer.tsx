"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#090e17] text-slate-300 pt-44 sm:pt-48 pb-12 px-4 sm:px-8 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Top Row: Logo, Contact Info, Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Vinimay Logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className="text-white font-extrabold text-xl tracking-tight">VINIMAY</span>
          </div>

          {/* Center: Connect with us */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
            <span className="text-slate-300 font-medium">Connect with us:</span>
            <a
              href="tel:+919104369797"
              className="inline-flex items-center gap-1.5 text-white hover:text-rose-400 underline transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(+91) 91043 69797</span>
            </a>
            <a
              href="mailto:inquiry@vinimay.com"
              className="inline-flex items-center gap-1.5 text-white hover:text-rose-400 underline transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>inquiry@vinimay.com</span>
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-700 hover:border-white hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <span className="text-xs font-bold leading-none font-sans">in</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-700 hover:border-white hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="Instagram"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-700 hover:border-white hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-700 hover:border-white hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright, Policy Links, Country Selector */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-400">
          <div className="text-center lg:text-left">
            <span>© 2026 Vinimay Technologies Pvt. Ltd., India</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-slate-400 text-center">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#compliance" className="hover:text-white transition-colors">
              Compliance
            </Link>
            <span>•</span>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="#refund" className="hover:text-white transition-colors">
              Cancellation &amp; Refund
            </Link>
            <span>•</span>
            <Link href="#corporate" className="hover:text-white transition-colors">
              Corporate Information
            </Link>
            <span>•</span>
            <Link href="#escalation" className="hover:text-white transition-colors">
              Escalation Matrix
            </Link>
            <span>•</span>
            <Link href="#security" className="hover:text-white transition-colors">
              Security
            </Link>
            <span>•</span>
            <Link href="#cookies" className="hover:text-white transition-colors">
              Cookie settings
            </Link>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              aria-label="Change language selection"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-white text-xs font-medium transition-colors"
            >
              <span>🇮🇳</span>
              <span>India</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
