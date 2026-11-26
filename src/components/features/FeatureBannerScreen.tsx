"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, FileText } from "lucide-react";
import DriftingGlassCards from "@/components/common/DriftingGlassCards";

export interface FeatureBannerScreenProps {
  windowTitle?: string;
  windowSubtitle?: string;
  badgeCode?: string;
  chips?: string[];
  customerName?: string;
  customerGstin?: string;
  children?: React.ReactNode;
}

const DEFAULT_CHIPS = [
  "Customer Selected",
  "Product Added",
  "GST Calculated",
  "Invoice Generated",
];

export default function FeatureBannerScreen({
  windowTitle = "Vinimay",
  windowSubtitle = "/ New GST Invoice",
  badgeCode = "INV-2041",
  chips = DEFAULT_CHIPS,
  customerName = "Sharma Traders",
  customerGstin = "✓ GSTIN 23ABCDE1234F1Z5",
  children,
}: FeatureBannerScreenProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const laptopRef = useRef<HTMLDivElement | null>(null);

  // Dynamic simulation state for default body
  const [activeChipIdx, setActiveChipIdx] = useState(0);
  const [displayCustomer, setDisplayCustomer] = useState(customerName);
  const [isGstinVisible, setIsGstinVisible] = useState(true);
  const [isInvoiceDone, setIsInvoiceDone] = useState(true);
  const [subtotalVal, setSubtotalVal] = useState("₹25,100");
  const [cgstVal, setCgstVal] = useState("₹2,259");
  const [sgstVal, setSgstVal] = useState("₹2,259");
  const [totalVal, setTotalVal] = useState("₹29,618");

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const laptop = laptopRef.current;
    const stage = stageRef.current;
    if (!laptop || !stage) return;

    // Check if device supports fine hover (desktop mouse)
    const hasMouseHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // 3D Mouse Tilt only on desktop with mouse
      if (hasMouseHover && !prefersReducedMotion) {
        gsap.set(laptop, { transformPerspective: 1000 });
        const rx = gsap.quickTo(laptop, "rotationX", {
          duration: 0.6,
          ease: "power2.out",
        });
        const ry = gsap.quickTo(laptop, "rotationY", {
          duration: 0.6,
          ease: "power2.out",
        });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = stage.getBoundingClientRect();
          const xFactor = (e.clientX - rect.left) / rect.width - 0.5;
          const yFactor = (e.clientY - rect.top) / rect.height - 0.5;
          ry(xFactor * 10);
          rx(-yFactor * 7);
        };

        const handleMouseLeave = () => {
          rx(0);
          ry(0);
        };

        stage.addEventListener("mousemove", handleMouseMove);
        stage.addEventListener("mouseleave", handleMouseLeave);
      }

      // Live Invoice Generation Simulation Timeline
      if (!children && !prefersReducedMotion) {
        const typeObj = { charCount: 0 };
        const numObj = { sub: 0, cgst: 0, sgst: 0, tot: 0 };

        const resetState = () => {
          setActiveChipIdx(0);
          setDisplayCustomer("");
          setIsGstinVisible(false);
          setIsInvoiceDone(false);
          setSubtotalVal("₹0");
          setCgstVal("₹0");
          setSgstVal("₹0");
          setTotalVal("₹0");
        };

        const simTl = gsap.timeline({
          repeat: -1,
          repeatDelay: 2.5,
          paused: true,
        });

        simTl
          .add(resetState)
          // Step 1: Type Customer
          .to(typeObj, {
            charCount: customerName.length,
            duration: 1.0,
            ease: "none",
            onUpdate: () => {
              setDisplayCustomer(
                customerName.slice(0, Math.round(typeObj.charCount))
              );
            },
          })
          .add(() => {
            setIsGstinVisible(true);
            setActiveChipIdx(1);
          }, "+=0.2")
          // Step 2: Show Items & Subtotal count
          .to(numObj, {
            sub: 25100,
            duration: 0.8,
            ease: "power1.out",
            onUpdate: () => {
              setSubtotalVal(
                `₹${Math.round(numObj.sub).toLocaleString("en-IN")}`
              );
            },
          })
          .add(() => setActiveChipIdx(2), "+=0.3")
          // Step 3: Calculate Taxes
          .to(numObj, {
            cgst: 2259,
            sgst: 2259,
            tot: 29618,
            duration: 0.9,
            ease: "power1.out",
            onUpdate: () => {
              setCgstVal(`₹${Math.round(numObj.cgst).toLocaleString("en-IN")}`);
              setSgstVal(`₹${Math.round(numObj.sgst).toLocaleString("en-IN")}`);
              setTotalVal(
                `₹${Math.round(numObj.tot).toLocaleString("en-IN")}`
              );
            },
          })
          .add(() => {
            setActiveChipIdx(3);
            setIsInvoiceDone(true);
          }, "+=0.4");

        // Play simulation only when scrolled into view
        ScrollTrigger.create({
          trigger: stage,
          start: "top 85%",
          end: "bottom 10%",
          onToggle: (self) => {
            if (self.isActive) simTl.play();
            else simTl.pause();
          },
        });
      }
    }, stageRef);

    return () => ctx.revert();
  }, [customerName, children]);

  return (
    <div
      ref={stageRef}
      className="relative w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[800px] mx-auto px-1 sm:px-4 select-none"
    >
      {/* Drifting Glassmorphic Business Cards (Marquee Track behind screen) */}
      <DriftingGlassCards
        className="absolute top-1/2 -translate-y-1/2 -inset-x-8 sm:-inset-x-24 md:-inset-x-36 z-0 pointer-events-none"
        opacity="opacity-40 sm:opacity-85"
      />

      {/* Main Desktop / Laptop Device Frame */}
      <div
        ref={laptopRef}
        className="relative z-20 w-full bg-white text-slate-800 rounded-t-xl sm:rounded-t-2xl border-4 sm:border-6 md:border-[7px] border-[#1a1a24] text-left shadow-[0_20px_50px_rgba(30,10,90,0.35)] overflow-hidden"
      >
        {/* Window Top Control Bar */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-slate-200/80 bg-slate-50/70 text-xs">
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <b className="text-primary font-extrabold text-[11px] sm:text-xs">
            {windowTitle}
          </b>
          <span className="text-slate-400 text-[10px] sm:text-[11px]">
            {windowSubtitle}
          </span>
          <span className="ml-auto text-slate-400 font-mono text-[10px] sm:text-[11px]">
            {badgeCode}
          </span>
        </div>

        {/* Workflow Status Chips (Mobile Horizontally Scrollable) */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-slate-100 overflow-x-auto scrollbar-none">
          {chips.map((chip, idx) => {
            const isDone = idx <= activeChipIdx;
            return (
              <span
                key={idx}
                className={`shrink-0 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                  isDone
                    ? "bg-primary/10 border-primary text-primary font-semibold"
                    : "border-slate-200 text-slate-400 font-medium"
                }`}
              >
                {chip}
              </span>
            );
          })}
        </div>

        {/* Laptop Inner Screen Body */}
        {children ? (
          children
        ) : (
          <div className="p-3 sm:p-4 text-xs">
            {/* Mobile-First Grid: Stacks on mobile, 2-cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
              {/* Left Column: Customer & Item Table */}
              <div className="border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">
                    Customer Details
                  </span>

                  {/* Customer Field */}
                  <div className="flex items-center justify-between gap-2 border border-emerald-500/40 bg-emerald-50/70 text-emerald-800 rounded-lg px-2.5 py-1.5 min-h-[34px] font-semibold text-xs">
                    <span className="truncate">
                      {displayCustomer || "Select Customer..."}
                    </span>
                    {isGstinVisible && (
                      <span className="text-[10px] font-mono text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded shrink-0">
                        {customerGstin}
                      </span>
                    )}
                  </div>

                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-1 text-[10px] font-semibold text-slate-400 pt-3 pb-1 border-b border-slate-100">
                    <span className="col-span-5 sm:col-span-6">Item / HSN</span>
                    <span className="col-span-3 text-center">HSN / SAC</span>
                    <span className="col-span-1 text-center">Qty</span>
                    <span className="col-span-3 sm:col-span-2 text-right">
                      Amount
                    </span>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-1.5 pt-1 text-[11px]">
                    <div className="grid grid-cols-12 gap-1 items-center bg-slate-50/90 rounded-md p-1.5">
                      <span className="col-span-5 sm:col-span-6 font-medium text-slate-800 truncate">
                        LED Monitor 24&quot;
                      </span>
                      <span className="col-span-3 text-[10px] text-primary text-center font-mono">
                        HSN 8528
                      </span>
                      <span className="col-span-1 text-center font-mono text-slate-500">
                        2
                      </span>
                      <b className="col-span-3 sm:col-span-2 text-right font-mono text-slate-800">
                        ₹19,000
                      </b>
                    </div>

                    <div className="grid grid-cols-12 gap-1 items-center bg-slate-50/90 rounded-md p-1.5">
                      <span className="col-span-5 sm:col-span-6 font-medium text-slate-800 truncate">
                        Wireless Keyboard
                      </span>
                      <span className="col-span-3 text-[10px] text-primary text-center font-mono">
                        HSN 8471
                      </span>
                      <span className="col-span-1 text-center font-mono text-slate-500">
                        3
                      </span>
                      <b className="col-span-3 sm:col-span-2 text-right font-mono text-slate-800">
                        ₹3,600
                      </b>
                    </div>

                    <div className="grid grid-cols-12 gap-1 items-center bg-slate-50/90 rounded-md p-1.5">
                      <span className="col-span-5 sm:col-span-6 font-medium text-slate-800 truncate">
                        Installation Service
                      </span>
                      <span className="col-span-3 text-[10px] text-primary text-center font-mono">
                        SAC 9987
                      </span>
                      <span className="col-span-1 text-center font-mono text-slate-500">
                        1
                      </span>
                      <b className="col-span-3 sm:col-span-2 text-right font-mono text-slate-800">
                        ₹2,500
                      </b>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Tax Summary & Action */}
              <div className="border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between bg-white shadow-2xs">
                <div>
                  <div className="flex items-center justify-between pb-1 mb-2 border-b border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Tax Summary
                    </span>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                      GST 18%
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal</span>
                      <span className="font-mono text-slate-700 font-medium">
                        {subtotalVal}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>CGST 9%</span>
                      <span className="font-mono text-primary">{cgstVal}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>SGST 9%</span>
                      <span className="font-mono text-primary">{sgstVal}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                      <span>Total Amount</span>
                      <span className="font-mono text-sm font-black text-emerald-600">
                        {totalVal}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary/10 rounded-lg px-2.5 py-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>INV-2041.pdf</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div
                    className={`w-full py-2.5 rounded-lg text-center font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      isInvoiceDone
                        ? "bg-[#1fb487] text-white shadow-sm"
                        : "bg-primary text-white"
                    }`}
                  >
                    {isInvoiceDone && <Check className="w-3.5 h-3.5" />}
                    <span>
                      {isInvoiceDone
                        ? "Invoice Generated"
                        : "Generate Invoice"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Laptop Hardware Base Stand */}
      <div className="h-2 sm:h-3 w-[104%] -mx-[2%] bg-gradient-to-b from-[#d9d9e3] to-[#b4b4c6] rounded-b-xl sm:rounded-b-2xl shadow-md" />
    </div>
  );
}
