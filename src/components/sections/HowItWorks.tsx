// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { OsmoRoll } from "../common/OsmoRoll";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ArcHeading from "@/components/common/ArcHeading";

// const getScatters = (isMobile: boolean) => [
//   { x: isMobile ? -280 : -550, y: isMobile ? -260 : -380, rot: -30, scale: 0.35 }, // Step 1: Top-Left
//   { x: isMobile ? 280 : 550, y: isMobile ? -260 : -380, rot: 30, scale: 0.35 },   // Step 2: Top-Right
//   { x: isMobile ? -260 : -500, y: isMobile ? 280 : 420, rot: -20, scale: 0.35 },  // Step 3: Bottom-Left
//   { x: isMobile ? 260 : 500, y: isMobile ? 280 : 420, rot: 20, scale: 0.35 },   // Step 4: Bottom-Right
// ];

// export default function HowItWorks() {
//   const [activeStep, setActiveStep] = useState(0);
//   const targetPosRef = useRef(0);
//   const currentPosRef = useRef(0);
//   const isDraggingRef = useRef(false);
//   const startXRef = useRef(0);
//   const startPosRef = useRef(0);
//   const velocityRef = useRef(0);
//   const lastXRef = useRef(0);
//   const lastTimeRef = useRef(0);
//   const animFrameRef = useRef<number | null>(null);

//   const progressObj = useRef({ p0: 0, p1: 0, p2: 0, p3: 0 });
//   const touchStartXRef = useRef(0);
//   const touchStartYRef = useRef(0);
//   const isTouchHorizontalRef = useRef<boolean | null>(null);

//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

//   const totalCards = 4;

//   const stepLabels = [
//     "Step 1 of 4 • Enter customer name or GSTIN to auto-fill details.",
//     "Step 2 of 4 • Add products or scan barcodes for instant tax calculation.",
//     "Step 3 of 4 • Review the formatted tax invoice with payment QR code.",
//     "Step 4 of 4 • Ready to go! Dispatch via WhatsApp or print.",
//   ];

//   const tabs = [
//     { label: "Step 1: Add Customer" },
//     { label: "Step 2: Add Products & GST" },
//     { label: "Step 3: Preview" },
//     { label: "Step 4: Send or Print" },
//   ];

//   const getSpacing = useCallback(() => {
//     if (typeof window === "undefined") return 350;
//     const w = window.innerWidth;
//     if (w < 640) return 230;
//     if (w < 1024) return 330;
//     if (w < 1440) return 380;
//     return Math.min(440, w * 0.26);
//   }, []);

//   const applyCardTransforms = useCallback(
//     (pos: number) => {
//       const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
//       const baseSpacing = getSpacing();
//       const scatters = getScatters(isMobile);

//       const pArr = [
//         progressObj.current.p0,
//         progressObj.current.p1,
//         progressObj.current.p2,
//         progressObj.current.p3,
//       ];

//       cardsRef.current.forEach((card, i) => {
//         if (!card) return;
//         const diff = i - pos;
//         const targetX = diff * baseSpacing;
//         const targetY = Math.abs(diff) * Math.abs(diff) * (isMobile ? 32 : 46);
//         const targetRot = diff * (isMobile ? 10 : 13);
//         const targetScale = Math.max(0.74, 1.05 - Math.abs(diff) * 0.12);
//         const targetOpacity = Math.max(0, 1 - Math.abs(diff) * 0.45);
//         const zIndex = Math.round(25 - Math.abs(diff) * 5);

//         const p = pArr[i] ?? 1;
//         const s = scatters[i];

//         // Seamless interpolation from scatter corners to final orbital deck
//         const curX = s.x * (1 - p) + targetX * p;
//         const curY = s.y * (1 - p) + targetY * p;
//         const curRot = s.rot * (1 - p) + targetRot * p;
//         const curScale = s.scale * (1 - p) + targetScale * p;
//         const curOpacity = Math.max(0.2, p) * targetOpacity;

//         card.style.transform = `translate3d(${curX}px, ${curY}px, 0px) rotate(${curRot}deg) scale(${curScale})`;
//         card.style.opacity = `${curOpacity}`;
//         card.style.zIndex = `${zIndex}`;
//         card.style.pointerEvents = p > 0.85 && Math.abs(diff) < 0.8 ? "auto" : "none";
//       });
//     },
//     [getSpacing]
//   );

//   const snapToTarget = useCallback(() => {
//     if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

//     const loop = () => {
//       if (!isDraggingRef.current) {
//         const delta = targetPosRef.current - currentPosRef.current;
//         currentPosRef.current += delta * 0.16;

//         if (Math.abs(delta) < 0.001) {
//           currentPosRef.current = targetPosRef.current;
//           applyCardTransforms(currentPosRef.current);
//           const activeIdx = Math.max(0, Math.min(totalCards - 1, Math.round(currentPosRef.current)));
//           setActiveStep(activeIdx);
//           return;
//         }
//         applyCardTransforms(currentPosRef.current);
//         const activeIdx = Math.max(0, Math.min(totalCards - 1, Math.round(currentPosRef.current)));
//         setActiveStep(activeIdx);
//       }
//       animFrameRef.current = requestAnimationFrame(loop);
//     };

//     animFrameRef.current = requestAnimationFrame(loop);
//   }, [applyCardTransforms]);

//   const animateToStep = useCallback(
//     (idx: number) => {
//       progressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1 };
//       const clamped = Math.max(0, Math.min(totalCards - 1, idx));
//       targetPosRef.current = clamped;
//       setActiveStep(clamped);
//       snapToTarget();
//     },
//     [snapToTarget]
//   );

//   const navigateStepsBy = (dir: number) => {
//     progressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1 };
//     const next = Math.max(0, Math.min(totalCards - 1, Math.round(currentPosRef.current) + dir));
//     animateToStep(next);
//   };

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     gsap.registerPlugin(ScrollTrigger);

//     applyCardTransforms(0);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#steps-arena",
//         start: "top 80%",
//         once: true,
//       },
//       onUpdate: () => applyCardTransforms(currentPosRef.current),
//       onComplete: () => {
//         progressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1 };
//         applyCardTransforms(currentPosRef.current);
//       },
//     });

//     tl.fromTo(progressObj.current, { p0: 0 }, { p0: 1, duration: 0.9, ease: "back.out(1.5)" })
//       .fromTo(progressObj.current, { p1: 0 }, { p1: 1, duration: 0.9, ease: "back.out(1.5)" }, "-=0.6")
//       .fromTo(progressObj.current, { p2: 0 }, { p2: 1, duration: 0.9, ease: "back.out(1.5)" }, "-=0.6")
//       .fromTo(progressObj.current, { p3: 0 }, { p3: 1, duration: 0.9, ease: "back.out(1.5)" }, "-=0.6");

//     const handleResize = () => {
//       applyCardTransforms(currentPosRef.current);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       tl.kill();
//       window.removeEventListener("resize", handleResize);
//       if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
//     };
//   }, [applyCardTransforms]);

//   // Pointer drag events
//   const onPointerDown = (clientX: number) => {
//     progressObj.current = { p0: 1, p1: 1, p2: 1, p3: 1 };
//     isDraggingRef.current = true;
//     startXRef.current = clientX;
//     lastXRef.current = clientX;
//     lastTimeRef.current = performance.now();
//     startPosRef.current = currentPosRef.current;
//     velocityRef.current = 0;
//     if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
//   };

//   const onPointerMove = (clientX: number) => {
//     if (!isDraggingRef.current) return;
//     const deltaX = clientX - startXRef.current;
//     const spacing = getSpacing();
//     const newPos = Math.max(-0.2, Math.min(totalCards - 0.8, startPosRef.current - deltaX / spacing));
//     currentPosRef.current = newPos;
//     applyCardTransforms(newPos);
//     const activeIdx = Math.max(0, Math.min(totalCards - 1, Math.round(newPos)));
//     setActiveStep(activeIdx);

//     const now = performance.now();
//     const dt = now - lastTimeRef.current;
//     if (dt > 8) {
//       velocityRef.current = (clientX - lastXRef.current) / dt;
//       lastXRef.current = clientX;
//       lastTimeRef.current = now;
//     }
//   };

//   const onPointerUp = () => {
//     if (!isDraggingRef.current) return;
//     isDraggingRef.current = false;

//     let inertiaSteps = 0;
//     if (Math.abs(velocityRef.current) > 0.4) {
//       inertiaSteps = velocityRef.current > 0 ? -1 : 1;
//     }

//     const target = Math.max(
//       0,
//       Math.min(totalCards - 1, Math.round(currentPosRef.current + inertiaSteps * 0.5))
//     );
//     targetPosRef.current = target;
//     snapToTarget();
//   };

//   // Touch handlers that preserve native vertical scroll
//   const handleTouchStart = (e: React.TouchEvent) => {
//     const touch = e.touches[0];
//     touchStartXRef.current = touch.clientX;
//     touchStartYRef.current = touch.clientY;
//     isTouchHorizontalRef.current = null;
//     onPointerDown(touch.clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     const touch = e.touches[0];
//     const dx = touch.clientX - touchStartXRef.current;
//     const dy = touch.clientY - touchStartYRef.current;

//     // Detect user intention on initial movement
//     if (isTouchHorizontalRef.current === null) {
//       if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5) {
//         // User is scrolling vertically! Allow native browser scroll
//         isTouchHorizontalRef.current = false;
//         isDraggingRef.current = false;
//         return;
//       }
//       if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
//         // User is swiping horizontally to explore cards
//         isTouchHorizontalRef.current = true;
//       }
//     }

//     if (isTouchHorizontalRef.current) {
//       onPointerMove(touch.clientX);
//     }
//   };

//   const handleTouchEnd = () => {
//     if (isTouchHorizontalRef.current) {
//       onPointerUp();
//     } else {
//       isDraggingRef.current = false;
//     }
//     isTouchHorizontalRef.current = null;
//   };

//   return (
//     <section
//       id="how-it-works"
//       className="relative py-20 lg:py-28 overflow-hidden bg-[#fafafa] w-full border-t border-slate-100"
//     >

      
//       {/* Top Mini Neon Announcement Pill */}
//       <div className="flex justify-center mb-6 px-4">
//         <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase">
//           <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
//           <span>Ready In Under 60 Seconds • Zero Training Needed • 100% Free</span>
//         </div>
//       </div>

//       {/* Section Header */}
//       <div className="relative text-center max-w-4xl mx-auto mb-1 px-4">
//         <div className="relative z-10">
//           <div>
//             <ArcHeading
//               as="h2"
//               className="text-5xl sm:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-tight mb-4 select-none font-bold"
//             >
//               Get Started
//             </ArcHeading>
//           </div>
//           <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto">
//             Your first tax invoice in four simple steps—create, preview, and send in under a minute at zero cost:
//           </p>
//         </div>

//         {/* 4 Steps Interactive Pills */}
//         <div className="w-full max-w-full overflow-x-auto scrollbar-none py-2 px-1 mt-8">
//           <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 flex-nowrap w-max md:w-auto mx-auto">
//             {tabs.map((tab, idx) => (
//               <button
//                 key={idx}
//                 type="button"
//                 onClick={() => animateToStep(idx)}
//                 className={`step-tab-btn shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
//                   activeStep === idx
//                     ? "active font-bold bg-purple-100 text-purple-700 border border-purple-300 shadow-sm"
//                     : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
//                 }`}
//               >
//                 <OsmoRoll>{tab.label}</OsmoRoll>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* 4-Segment Progress Bar */}
//         <div className="hidden sm:flex items-center justify-center gap-2 mt-5 max-w-xs mx-auto px-4">
//           {[0, 1, 2, 3].map((idx) => (
//             <div
//               key={idx}
//               className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
//                 activeStep >= idx ? "bg-purple-600" : "bg-slate-200"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Full-width Carousel Arena */}
//       <div
//         id="steps-arena"
//         onMouseDown={(e) => onPointerDown(e.clientX)}
//         onMouseMove={(e) => onPointerMove(e.clientX)}
//         onMouseUp={onPointerUp}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//         className="relative w-full max-w-none h-[640px] sm:h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden touch-pan-y px-0"
//       >
//         <svg
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] min-w-[1200px] max-w-none h-[750px] pointer-events-none opacity-45 -z-0"
//           viewBox="0 0 1600 750"
//           fill="none"
//         >
//           <path
//             d="M 50 620 C 500 360, 1100 360, 1550 620"
//             stroke="#cbd5e1"
//             strokeWidth="2.5"
//             strokeDasharray="6 8"
//           />
//         </svg>

//         {/* CARDS TRACK CONTAINER */}
//         <div id="steps-track" className="relative w-full h-full flex items-center justify-center pointer-events-none">
//           {/* STEP 0 */}
//           <div
//             ref={(el) => { cardsRef.current[0] = el; }}
//             data-index="0"
//             className="step-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(139,92,246,0.25)] bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]"
//           >
//             <div>
//               <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
//                 <span>STEP 01 OF 04</span>
//               </div>
//               <div className="text-2xl font-black mb-1">&#10038;</div>
//               <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
//                 Add Customer
//               </h3>
//               <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
//                 Type customer name or GSTIN. Business details, address, and state tax codes auto-populate directly from the official portal.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2">
//                 <div className="flex items-center justify-between text-[11px]">
//                   <span className="font-bold">Sharma Traders (Mumbai)</span>
//                   <span className="text-emerald-300 font-mono font-bold">&#10004; GSTIN Valid</span>
//                 </div>
//                 <div className="flex items-center justify-between text-xs font-mono font-black pt-1 border-t border-white/10">
//                   <span>GSTIN: 27AABCS1429B1ZB</span>
//                   <span className="text-purple-200">State: 27 MH</span>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => animateToStep(1)}
//                 className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
//               >
//                 <OsmoRoll fullWidth>Next: Add Products &rarr;</OsmoRoll>
//               </button>
//             </div>
//           </div>

//           {/* STEP 1 */}
//           <div
//             ref={(el) => { cardsRef.current[1] = el; }}
//             data-index="1"
//             className="step-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(16,185,129,0.25)] bg-gradient-to-br from-[#34d399] via-[#10b981] to-[#059669]"
//           >
//             <div>
//               <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
//                 <span>STEP 02 OF 04</span>
//               </div>
//               <div className="text-2xl font-black mb-1">&#10038;</div>
//               <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
//                 Add Products &amp; GST
//               </h3>
//               <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
//                 Pick products or scan barcode. Quantities, prices, HSN/SAC codes, and CGST/SGST/IGST are auto-calculated with zero math.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
//                 <div className="flex justify-between items-center text-[11px] font-bold">
//                   <span>Industrial Valve (HSN 8481)</span>
//                   <span className="font-mono text-emerald-200">10 pcs @ ₹350</span>
//                 </div>
//                 <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
//                   <span>GST (18% Auto Split)</span>
//                   <span className="text-emerald-300 font-mono">₹4,130.00 Total</span>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => animateToStep(2)}
//                 className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
//               >
//                 <OsmoRoll fullWidth>Next: Check Preview &rarr;</OsmoRoll>
//               </button>
//             </div>
//           </div>

//           {/* STEP 2 */}
//           <div
//             ref={(el) => { cardsRef.current[2] = el; }}
//             data-index="2"
//             className="step-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] bg-gradient-to-br from-[#60a5fa] via-[#3b82f6] to-[#2563eb]"
//           >
//             <div>
//               <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
//                 <span>STEP 03 OF 04</span>
//               </div>
//               <div className="text-2xl font-black mb-1">&#10038;</div>
//               <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
//                 Check Preview
//               </h3>
//               <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
//                 Preview your tax invoice in clean A4, compact A5, or counter thermal format with dynamic UPI QR code and digital CA signature.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-2 text-xs">
//                 <div className="flex justify-between items-center text-[11px]">
//                   <span className="font-bold">Tax Invoice #0842 (A4 Ready)</span>
//                   <span className="text-cyan-300 font-bold">⚡ QR Active</span>
//                 </div>
//                 <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
//                   <span>UPI Payment QR Included</span>
//                   <span className="text-emerald-300 font-mono">100% Verified</span>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => animateToStep(3)}
//                 className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
//               >
//                 <OsmoRoll fullWidth>Next: Send &amp; Print &rarr;</OsmoRoll>
//               </button>
//             </div>
//           </div>

//           {/* STEP 3 */}
//           <div
//             ref={(el) => { cardsRef.current[3] = el; }}
//             data-index="3"
//             className="step-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-[0_20px_50px_-12px_rgba(99,102,241,0.25)] bg-gradient-to-br from-[#818cf8] via-[#6366f1] to-[#4f46e5]"
//           >
//             <div>
//               <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
//                 <span>STEP 04 OF 04 • COMPLETED</span>
//               </div>
//               <div className="text-2xl font-black mb-1">&#10038;</div>
//               <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
//                 Send or Print
//               </h3>
//               <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
//                 Send directly to customer WhatsApp in 0.8s, email PDF, download, or print to thermal/office printers with single-click ease.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
//                 <div className="flex justify-between items-center text-[10px] text-white/80">
//                   <span>WhatsApp Dispatch</span>
//                   <span className="text-emerald-300 font-bold">✔✔ Sent (0.8s)</span>
//                 </div>
//                 <div className="flex justify-between items-center font-mono font-bold text-white">
//                   <span>Format Dispatched</span>
//                   <span className="text-purple-200">PDF + Direct UPI Link</span>
//                 </div>
//               </div>

//               <a
//                 href="#inquiry"
//                 className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
//               >
//                 <OsmoRoll fullWidth>Create First Invoice Free</OsmoRoll>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Left & Right Arrow Navigation Controls */}
//         <button
//           type="button"
//           onClick={() => navigateStepsBy(-1)}
//           disabled={activeStep <= 0}
//           aria-label="Previous step"
//           className="absolute left-3 sm:left-8 lg:left-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         <button
//           type="button"
//           onClick={() => navigateStepsBy(1)}
//           disabled={activeStep >= totalCards - 1}
//           aria-label="Next step"
//           className="absolute right-3 sm:right-8 lg:right-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Step Counter Label */}
//       <div className="mt-8 text-center max-w-xl mx-auto px-4">
//         <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
//           {stepLabels[activeStep]}
//         </p>
//       </div>
//     </section>
//   );
// }




"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OsmoRoll } from "../common/OsmoRoll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArcHeading from "@/components/common/ArcHeading";

type Step = {
  tab: string;
  label: string;
  title: string;
  desc: string;
  gradient: string;
  shadow: string;
  rowA: [string, string];
  rowB: [string, string];
  rowAColor: string;
  rowBColor: string;
  next: string;
};

const STEPS: Step[] = [
  {
    tab: "Step 1: Set Up Business",
    label: "Step 1 of 5 • Sign up, then add your business, products, services and customers.",
    title: "Sign Up & Set Up",
    desc: "Create your account on web or desktop, then add your business details, products, services and customers. Pick an invoice template and add your logo.",
    gradient: "bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    shadow: "shadow-[0_20px_50px_-12px_rgba(139,92,246,0.25)]",
    rowA: ["Account", "✔ Created"],
    rowB: ["Business, Products & Logo", "✔ Added"],
    rowAColor: "text-emerald-300",
    rowBColor: "text-purple-200",
    next: "Next: Add Your Team",
  },
  {
    tab: "Step 2: Team & Permissions",
    label: "Step 2 of 5 • Add employees and choose exactly what each person can do.",
    title: "Add Team & Permissions",
    desc: "Create employee accounts give them  their own login and panel. Role-based access lets someone create transactions without being able to delete them or manage inventory.",
    gradient: "bg-gradient-to-br from-[#34d399] via-[#10b981] to-[#059669]",
    shadow: "shadow-[0_20px_50px_-12px_rgba(16,185,129,0.25)]",
    rowA: ["Create Transactions", "✔ Allowed"],
    rowB: ["Delete / Manage Inventory", "✘ Blocked"],
    rowAColor: "text-emerald-200",
    rowBColor: "text-rose-200",
    next: "Next: Create Invoices",
  },
  {
    tab: "Step 3: Create Invoices",
    label: "Step 3 of 5 • Generate professional invoices from your templates.",
    title: "Create Invoices",
    desc: "Generate professional invoices from your templates. Track sales and manage products, services and inventory from one dashboard.",
    gradient: "bg-gradient-to-br from-[#f472b6] via-[#ec4899] to-[#db2777]",
    shadow: "shadow-[0_20px_50px_-12px_rgba(236,72,153,0.25)]",
    rowA: ["Invoice #0842", "✔ Generated"],
    rowB: ["Template", "Your Brand Applied"],
    rowAColor: "text-emerald-200",
    rowBColor: "text-pink-100",
    next: "Next: Work Offline",
  },
  {
    tab: "Step 4: Work Offline",
    label: "Step 4 of 5 • No internet? The desktop app keeps working as usual.",
    title: "Keep Working Offline",
    desc: "If the internet goes down, the desktop app keeps running. Create invoices and record transactions with no interruption to your business.",
    gradient: "bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706]",
    shadow: "shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)]",
    rowA: ["Internet", "✘ Offline"],
    rowB: ["Desktop App", "✔ Still Working"],
    rowAColor: "text-red-100",
    rowBColor: "text-white",
    next: "Next: Auto Sync",
  },
  {
    tab: "Step 5: Auto Sync",
    label: "Step 5 of 5 • Back online? Everything syncs to the cloud automatically.",
    title: "Auto Cloud Sync",
    desc: "When the internet is back, all offline data syncs to the cloud automatically. Your web app and desktop app stay updated and nothing is lost.",
    gradient: "bg-gradient-to-br from-[#2dd4bf] via-[#14b8a6] to-[#0d9488]",
    shadow: "shadow-[0_20px_50px_-12px_rgba(20,184,166,0.25)]",
    rowA: ["Offline Records", "⟳ Syncing..."],
    rowB: ["Cloud Status", "✔ Fully Synced"],
    rowAColor: "text-teal-100",
    rowBColor: "text-emerald-200",
    next: "Start Free",
  },
];

const TOTAL = STEPS.length;

// Scatter start positions (cards fly in from around the arena)
const getScatters = (isMobile: boolean) => {
  const a = isMobile ? 1 : 0;
  const pick = (m: number, d: number) => (a ? m : d);
  return [
    { x: pick(-280, -550), y: pick(-260, -380), rot: -30, scale: 0.35 },
    { x: pick(280, 550), y: pick(-260, -380), rot: 30, scale: 0.35 },
    { x: pick(-260, -500), y: pick(280, 420), rot: -20, scale: 0.35 },
    { x: pick(260, 500), y: pick(280, 420), rot: 20, scale: 0.35 },
    { x: pick(-200, -350), y: pick(-300, -440), rot: -15, scale: 0.35 },
    { x: pick(200, 350), y: pick(300, 440), rot: 15, scale: 0.35 },
    { x: pick(0, 0), y: pick(-300, -440), rot: 10, scale: 0.35 },
  ];
};

const allDone = () => Array.from({ length: TOTAL }, () => 1);

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const targetPosRef = useRef(0);
  const currentPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // progress of each card's entrance animation (0 = scattered, 1 = in deck)
  const progressObj = useRef<Record<string, number>>(
    Object.fromEntries(STEPS.map((_, i) => [`p${i}`, 0]))
  );
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isTouchHorizontalRef = useRef<boolean | null>(null);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pillsRef = useRef<HTMLDivElement | null>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Keep the active tab visible inside the scrolling pill row (without moving the page)
  useEffect(() => {
    const container = pillsRef.current;
    const pill = pillRefs.current[activeStep];
    if (!container || !pill) return;
    const left = pill.offsetLeft - container.clientWidth / 2 + pill.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [activeStep]);

  const setAllProgress = () => {
    STEPS.forEach((_, i) => {
      progressObj.current[`p${i}`] = 1;
    });
  };

  const getSpacing = useCallback(() => {
    if (typeof window === "undefined") return 350;
    const w = window.innerWidth;
    if (w < 640) return 230;
    if (w < 1024) return 330;
    if (w < 1440) return 380;
    return Math.min(440, w * 0.26);
  }, []);

  const applyCardTransforms = useCallback(
    (pos: number) => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      const baseSpacing = getSpacing();
      const scatters = getScatters(isMobile);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const diff = i - pos;
        const targetX = diff * baseSpacing;
        const targetY = Math.abs(diff) * Math.abs(diff) * (isMobile ? 32 : 46);
        const targetRot = diff * (isMobile ? 10 : 13);
        const targetScale = Math.max(0.74, 1.05 - Math.abs(diff) * 0.12);
        const targetOpacity = Math.max(0, 1 - Math.abs(diff) * 0.45);
        const zIndex = Math.round(25 - Math.abs(diff) * 5);

        const p = progressObj.current[`p${i}`] ?? 1;
        const s = scatters[i];

        // Seamless interpolation from scatter corners to final orbital deck
        const curX = s.x * (1 - p) + targetX * p;
        const curY = s.y * (1 - p) + targetY * p;
        const curRot = s.rot * (1 - p) + targetRot * p;
        const curScale = s.scale * (1 - p) + targetScale * p;
        const curOpacity = Math.max(0.2, p) * targetOpacity;

        card.style.transform = `translate3d(${curX}px, ${curY}px, 0px) rotate(${curRot}deg) scale(${curScale})`;
        card.style.opacity = `${curOpacity}`;
        card.style.zIndex = `${zIndex}`;
        card.style.pointerEvents = p > 0.85 && Math.abs(diff) < 0.8 ? "auto" : "none";
      });
    },
    [getSpacing]
  );

  const snapToTarget = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const loop = () => {
      if (!isDraggingRef.current) {
        const delta = targetPosRef.current - currentPosRef.current;
        currentPosRef.current += delta * 0.16;

        if (Math.abs(delta) < 0.001) {
          currentPosRef.current = targetPosRef.current;
          applyCardTransforms(currentPosRef.current);
          const activeIdx = Math.max(0, Math.min(TOTAL - 1, Math.round(currentPosRef.current)));
          setActiveStep(activeIdx);
          return;
        }
        applyCardTransforms(currentPosRef.current);
        const activeIdx = Math.max(0, Math.min(TOTAL - 1, Math.round(currentPosRef.current)));
        setActiveStep(activeIdx);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
  }, [applyCardTransforms]);

  const animateToStep = useCallback(
    (idx: number) => {
      setAllProgress();
      const clamped = Math.max(0, Math.min(TOTAL - 1, idx));
      targetPosRef.current = clamped;
      setActiveStep(clamped);
      snapToTarget();
    },
    [snapToTarget]
  );

  const navigateStepsBy = (dir: number) => {
    setAllProgress();
    const next = Math.max(0, Math.min(TOTAL - 1, Math.round(currentPosRef.current) + dir));
    animateToStep(next);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    applyCardTransforms(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#steps-arena",
        start: "top 80%",
        once: true,
      },
      onUpdate: () => applyCardTransforms(currentPosRef.current),
      onComplete: () => {
        setAllProgress();
        applyCardTransforms(currentPosRef.current);
      },
    });

    STEPS.forEach((_, i) => {
      const key = `p${i}`;
      tl.fromTo(
        progressObj.current,
        { [key]: 0 },
        { [key]: 1, duration: 0.9, ease: "back.out(1.5)" },
        i === 0 ? undefined : "-=0.6"
      );
    });

    const handleResize = () => {
      applyCardTransforms(currentPosRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      tl.kill();
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [applyCardTransforms]);

  // Pointer drag events
  const onPointerDown = (clientX: number) => {
    setAllProgress();
    isDraggingRef.current = true;
    startXRef.current = clientX;
    lastXRef.current = clientX;
    lastTimeRef.current = performance.now();
    startPosRef.current = currentPosRef.current;
    velocityRef.current = 0;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  const onPointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - startXRef.current;
    const spacing = getSpacing();
    const newPos = Math.max(-0.2, Math.min(TOTAL - 0.8, startPosRef.current - deltaX / spacing));
    currentPosRef.current = newPos;
    applyCardTransforms(newPos);
    const activeIdx = Math.max(0, Math.min(TOTAL - 1, Math.round(newPos)));
    setActiveStep(activeIdx);

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 8) {
      velocityRef.current = (clientX - lastXRef.current) / dt;
      lastXRef.current = clientX;
      lastTimeRef.current = now;
    }
  };

  const onPointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    let inertiaSteps = 0;
    if (Math.abs(velocityRef.current) > 0.4) {
      inertiaSteps = velocityRef.current > 0 ? -1 : 1;
    }

    const target = Math.max(
      0,
      Math.min(TOTAL - 1, Math.round(currentPosRef.current + inertiaSteps * 0.5))
    );
    targetPosRef.current = target;
    snapToTarget();
  };

  // Touch handlers that preserve native vertical scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    isTouchHorizontalRef.current = null;
    onPointerDown(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartXRef.current;
    const dy = touch.clientY - touchStartYRef.current;

    // Detect user intention on initial movement
    if (isTouchHorizontalRef.current === null) {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5) {
        // User is scrolling vertically: allow native browser scroll
        isTouchHorizontalRef.current = false;
        isDraggingRef.current = false;
        return;
      }
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
        // User is swiping horizontally to explore cards
        isTouchHorizontalRef.current = true;
      }
    }

    if (isTouchHorizontalRef.current) {
      onPointerMove(touch.clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isTouchHorizontalRef.current) {
      onPointerUp();
    } else {
      isDraggingRef.current = false;
    }
    isTouchHorizontalRef.current = null;
  };

  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-28 overflow-hidden bg-[#fafafa] w-full border-t border-slate-100"
    >
      {/* Top Mini Neon Announcement Pill */}
      <div className="flex justify-center mb-6 px-4">
        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200 text-purple-700 text-xs font-bold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          <span>Web App • Desktop App • Works Offline • Role-Based Security</span>
        </div>
      </div>

      {/* Section Header */}
      <div className="relative text-center w-full mb-1">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div>
            <ArcHeading
              as="h2"
              className="text-5xl sm:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-tight mb-4 select-none font-bold"
            >
              How It Works
            </ArcHeading>
          </div>
          <p className="text-slate-500 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto">
            Run your business online or offline, with full control. Here is how it works in five simple steps:
          </p>
        </div>

        {/* Interactive Step Pills */}
        <div
          ref={pillsRef}
          className="relative w-full overflow-x-auto scrollbar-none py-2 px-4 mt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex items-center gap-2 sm:gap-3 flex-nowrap w-max mx-auto">
            {STEPS.map((step, idx) => (
              <button
                key={idx}
                ref={(el) => {
                  pillRefs.current[idx] = el;
                }}
                type="button"
                onClick={() => animateToStep(idx)}
                className={`step-tab-btn shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeStep === idx
                    ? "active font-bold bg-purple-100 text-purple-700 border border-purple-300 shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <OsmoRoll>{step.tab}</OsmoRoll>
              </button>
            ))}
          </div>
        </div>

        {/* Segmented Progress Bar */}
        <div className="hidden sm:flex items-center justify-center gap-2 mt-5 max-w-sm mx-auto px-4">
          {STEPS.map((_, idx) => (
            <div
              key={idx}
              className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                activeStep >= idx ? "bg-purple-600" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Full-width Carousel Arena */}
      <div
        id="steps-arena"
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => onPointerMove(e.clientX)}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-none h-[640px] sm:h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden touch-pan-y px-0"
      >
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] min-w-[1200px] max-w-none h-[750px] pointer-events-none opacity-45 -z-0"
          viewBox="0 0 1600 750"
          fill="none"
        >
          <path
            d="M 50 620 C 500 360, 1100 360, 1550 620"
            stroke="#cbd5e1"
            strokeWidth="2.5"
            strokeDasharray="6 8"
          />
        </svg>

        {/* CARDS TRACK CONTAINER */}
        <div id="steps-track" className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {STEPS.map((step, i) => {
            const isLast = i === TOTAL - 1;
            const num = String(i + 1).padStart(2, "0");
            const totalStr = String(TOTAL).padStart(2, "0");
            return (
              <div
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                data-index={i}
                className={`step-card pointer-events-auto absolute w-[310px] sm:w-[360px] md:w-[400px] h-[490px] rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between text-white ${step.shadow} ${step.gradient}`}
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider mb-6 border border-white/20">
                    <span>
                      STEP {num} OF {totalStr}
                      {isLast ? " • COMPLETED" : ""}
                    </span>
                  </div>
                  <div className="text-2xl font-black mb-1">&#10038;</div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">{step.desc}</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/25 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-[11px] font-bold">
                      <span>{step.rowA[0]}</span>
                      <span className={`font-mono font-bold ${step.rowAColor}`}>{step.rowA[1]}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono font-bold pt-1 border-t border-white/10">
                      <span>{step.rowB[0]}</span>
                      <span className={`font-mono ${step.rowBColor}`}>{step.rowB[1]}</span>
                    </div>
                  </div>

                  {isLast ? (
                    <a
                      href="#inquiry"
                      className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
                    >
                      <OsmoRoll fullWidth>{step.next}</OsmoRoll>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => animateToStep(i + 1)}
                      className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all text-center block"
                    >
                      <OsmoRoll fullWidth>{step.next} &rarr;</OsmoRoll>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Left & Right Arrow Navigation Controls */}
        <button
          type="button"
          onClick={() => navigateStepsBy(-1)}
          disabled={activeStep <= 0}
          aria-label="Previous step"
          className="absolute left-3 sm:left-8 lg:left-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() => navigateStepsBy(1)}
          disabled={activeStep >= TOTAL - 1}
          aria-label="Next step"
          className="absolute right-3 sm:right-8 lg:right-12 z-40 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-2xl border border-slate-200/80 flex items-center justify-center transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Step Counter Label */}
      <div className="mt-8 text-center max-w-xl mx-auto px-4">
        <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
          {STEPS[activeStep].label}
        </p>
      </div>
    </section>
  );
}