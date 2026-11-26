"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import WordmarkArc from "@/components/common/WordmarkArc";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

// Replace the hrefs with your real profile URLs
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/vinimay",
    Icon: FaLinkedinIn,
  },
  { name: "X (Twitter)", href: "https://x.com/vinimay", Icon: FaXTwitter },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vinimay",
    Icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/vinimay",
    Icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@vinimay",
    Icon: FaYoutube,
  },
];
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [btnText, setBtnText] = useState("Get updates");

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.config({ ignoreMobileResize: true });
    }

    const footerEl = footerRef.current;
    if (!footerEl) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { reduceMotion } = (context.conditions || {}) as {
          reduceMotion?: boolean;
        };

        if (reduceMotion) return;

        // Reveal content on enter
        gsap.from("[data-footer-reveal]", {
          y: 28,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: footerEl,
            start: "top 85%",
            once: true,
          },
        });
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !agreed) {
      setBtnText(!agreed ? "Please agree first" : "Enter email");
      setTimeout(() => setBtnText("Get updates"), 2200);
      return;
    }
    setSubmitting(true);
    setBtnText("Subscribed ✓");
    setTimeout(() => {
      setFirstName("");
      setEmail("");
      setAgreed(false);
      setSubmitting(false);
      setBtnText("Get updates");
    }, 2500);
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative overflow-hidden bg-[#f4f4f4] text-[#1f1d1e] dark:bg-[#161415] dark:text-[#f2f0f0] border-t border-slate-200/90 dark:border-slate-800/90 pt-32 sm:pt-36 md:pt-40 transition-colors"
    >
      <style>{`
        .osmo-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14.5px;
          line-height: 1.75;
          width: fit-content;
          color: inherit;
          transition: color 0.2s ease;
        }
        .osmo-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 2px;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .osmo-link:hover::after {
          transform: scaleX(1);
        }
        .osmo-tag {
          font-size: 9px;
          font-weight: 700;
          padding: 1px 5px;
          border-radius: 3px;
          line-height: 1.3;
          letter-spacing: 0.03em;
        }
        .osmo-circle {
          width: 38px;
          height: 38px;
          border-radius: 99px;
          background: #ebebeb;
          display: grid;
          place-items: center;
          transition: background 0.25s, color 0.25s, transform 0.15s;
        }
        .dark .osmo-circle {
          background: #252223;
        }
        .osmo-circle:hover {
          background: #1f1d1e;
          color: #ffffff;
          transform: translateY(-1px);
        }
        .dark .osmo-circle:hover {
          background: #ffffff;
          color: #161415;
        }
        .osmo-pill-tag {
          background: #1f1d1e;
          color: #ffffff;
          font-size: 11px;
          text-transform: uppercase;
          padding: 5px 10px;
          line-height: 1;
          display: inline-block;
          transition: background 0.2s;
        }
        .dark .osmo-pill-tag {
          background: #252223;
          color: #e2e8f0;
        }
        .osmo-pill-tag:hover {
          background: #383436;
        }
        .dark .osmo-pill-tag:hover {
          background: #3d393b;
        }
      `}</style>

      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 md:px-12 pt-8 sm:pt-12">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1.3fr] items-start">
          {/* Newsletter Column */}
          <div className="max-w-[540px]" data-footer-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wide uppercase mb-3.5">
              <span>Stay connected</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Follow Vinimay
            </h3>
            <p className="text-sm text-[#8e8c8d] dark:text-[#7d7a7b] leading-relaxed mb-6">
              GST updates, invoice automation tips, and new feature
              announcements, shared where you already read.
            </p>

            <ul className="flex flex-wrap items-center gap-3 list-none p-0 m-0">
              {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="grid h-11 w-11 place-items-center rounded-full bg-[#ebebeb] dark:bg-[#252223] text-[#1f1d1e] dark:text-[#f2f0f0] border border-slate-300 dark:border-slate-700 transition-colors hover:bg-[#1f1d1e] hover:text-white hover:border-transparent dark:hover:bg-white dark:hover:text-[#161415] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Links Grid & Quick Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
            {/* Column 1: Product */}
            <div data-footer-reveal>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#8e8c8d] dark:text-[#7d7a7b] mb-4">
                Product
              </h4>
              <nav className="flex flex-col space-y-1">
                <Link href="/features/gst-billing" className="osmo-link">
                  GST Invoicing
                </Link>
                <Link href="/features/inventory" className="osmo-link">
                  Multi-Godown Stock
                </Link>
                <Link href="/features/pos" className="osmo-link">
                  POS Counter Billing{" "}
                  <span className="osmo-tag font-mono bg-[#7a1fff] text-white">
                    NEW
                  </span>
                </Link>
                <Link href="/features/customers" className="osmo-link">
                  Customer Directory
                </Link>
                <Link href="/features/vendors" className="osmo-link">
                  Vendor &amp; PO Recon
                </Link>
                <Link href="/features/transactions" className="osmo-link">
                  Double-Entry Daybook
                </Link>
              </nav>
            </div>

            {/* Column 2: Solutions */}
            <div data-footer-reveal>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#8e8c8d] dark:text-[#7d7a7b] mb-4">
                Solutions
              </h4>
              <nav className="flex flex-col space-y-1">
                <a
                  href="https://vinimay.sharda.co.in/client-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  Retail &amp; Supermarkets
                </a>
                <a
                  href="https://vinimay.sharda.co.in/client-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  Wholesale &amp; Distribution
                </a>
                <a
                  href="https://vinimay.sharda.co.in/client-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  Textile &amp; Apparel
                </a>
                <a
                  href="https://vinimay.sharda.co.in/client-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  Pharma &amp; FMCG
                </a>
                <a
                  href="https://vinimay.sharda.co.in/client-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  Chartered Accountants
                </a>
              </nav>
            </div>

            {/* Column 3: Resources */}
            <div data-footer-reveal>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#8e8c8d] dark:text-[#7d7a7b] mb-4">
                Resources
              </h4>
              <nav className="flex flex-col space-y-1">
                <a
                  href="https://vinimay.sharda.co.in/knowledge-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  Knowledge Base
                </a>
                <a
                  href="https://vinimay.sharda.co.in/knowledge-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  GST Filing Guidelines
                </a>
                <a
                  href="https://vinimay.sharda.co.in/knowledge-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  HSN Code Directory
                </a>
                <a
                  href="https://vinimay.sharda.co.in/knowledge-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-link"
                >
                  Support &amp; FAQs
                </a>
                <a
                  href="tel:+919104369797"
                  className="osmo-link font-medium text-emerald-600 dark:text-emerald-400"
                >
                  Help: (+91) 91043 69797
                </a>
              </nav>
            </div>

            {/* Buttons + Socials */}
            <div
              className="col-span-full flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80"
              data-footer-reveal
            >
              <div className="flex items-center">
                <a
                  href="https://vinimay.sharda.co.in/client-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1f1d1e] text-white dark:bg-white dark:text-[#161415] rounded-l-full px-5 py-2.5 text-[14px] font-semibold active:scale-95 transition-all shadow-sm hover:opacity-90"
                >
                  Login
                </a>
                <a
                  href="https://vinimay.sharda.co.in/client-signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-r-full px-5 py-2.5 text-[14px] font-semibold text-white bg-emerald-500 hover:bg-emerald-800 active:scale-95 transition-all shadow-sm"
                >
                  Create Free Account
                </a>
              </div>

              {/* Social Circles */}
              <div className="flex items-center gap-1.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-circle"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <span className="text-[14px] font-extrabold leading-none">
                    in
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-circle"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-circle"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.8 3H21l-7 8 8.2 10h-6.4l-5-6.2L5.2 21H2l7.5-8.6L1.6 3h6.5l4.5 5.7L17.8 3zm-1.1 16h1.8L7.1 4.9H5.2L16.7 19z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osmo-circle"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GIANT ANIMATED WORDMARK: VINIMAY */}
      <WordmarkArc
        text="VINIMAY"
        mode="reveal"
        start="top 90%"
        once={false}
        className="mt-12 sm:mt-16 md:mt-12 border-b border-slate-200/80 dark:border-slate-800/80"
      />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-[1560px] px-5 sm:px-8 md:px-12 py-6 grid gap-4 md:grid-cols-3 items-center font-mono text-[11px] uppercase text-[#8e8c8d] dark:text-[#7d7a7b]">
        {/* Policy Pill Tags */}
        <div className="flex flex-wrap items-center">
          <a
            href="https://vinimay.sharda.co.in/knowledge-base"
            target="_blank"
            rel="noopener noreferrer"
            className="osmo-pill-tag rounded-l-full pl-3"
          >
            Licensing
          </a>
          <a
            href="https://vinimay.sharda.co.in/knowledge-base"
            target="_blank"
            rel="noopener noreferrer"
            className="osmo-pill-tag"
          >
            T&amp;Cs
          </a>
          <a
            href="https://vinimay.sharda.co.in/knowledge-base"
            target="_blank"
            rel="noopener noreferrer"
            className="osmo-pill-tag"
          >
            Privacy
          </a>
          <a
            href="https://vinimay.sharda.co.in/knowledge-base"
            target="_blank"
            rel="noopener noreferrer"
            className="osmo-pill-tag rounded-r-full pr-3"
          >
            Security
          </a>
        </div>

        {/* Copyright */}
        <div className="md:text-center text-[11px]">
          © 2026 Vinimay Technologies Pvt. Ltd., India
        </div>

        {/* Right Badge */}
        <div className="md:text-right flex md:justify-end items-center gap-1.5">
          <span>Engineered for Every Country</span>
          <span className="inline-flex rounded-full overflow-hidden shadow-2xs">
            <span className="bg-[#7D76D2] text-white px-2.5 py-1 text-[10px] font-bold">
              GST 100%
            </span>
            <span className="bg-[#1f1d1e] dark:bg-slate-800 text-white px-2 py-1 text-[10px]">
              Cloud
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
