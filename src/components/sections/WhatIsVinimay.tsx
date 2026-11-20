"use client";

import React from "react";
import Image from "next/image";

export default function WhatIsVinimay() {
  const renderCards = (keyPrefix: string) => (
    <React.Fragment key={keyPrefix}>
      {/* 1. Basmati rice inventory */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl -mt-12 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#f6f0ff,#b9b0f7_55%,#7c72dc)] shadow-[inset_0_-8px_16px_rgba(60,45,160,0.35)]" />
        <div className="flex justify-between items-center text-sm font-bold my-2">
          <span>Basmati rice 25 kg</span>
          <span>₹1,850</span>
        </div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px] mb-2">SKU 12312</span>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Opening stock</span><b>210.00</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Stock in hand</span><b>150.00</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Committed stock</span><b>100.00</b></div>
        <div className="flex justify-between py-1 text-[11px]"><span>Available for sale</span><b>50.00</b></div>
      </div>

      {/* 2. Banking */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-16 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <h4 className="font-bold text-sm mb-2 text-white">Banking</h4>
        <div className="flex justify-between items-center text-sm my-2">
          <span className="text-white/80">HDFC Current ···4521</span>
          <b className="font-bold">₹7,10,000</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Gupta Gym · UPI</span><b>+₹14,500</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Om Packaging · NEFT</span><b>−₹32,100</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Counter sales</span><b>+₹52,400</b></div>
        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px]">12 to reconcile</span>
      </div>

      {/* 3. Customers */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-2 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <div className="h-20 mb-3 rounded-xl bg-gradient-to-br from-[#ffd1f0]/70 to-[#9b8cff]/70 flex items-center justify-center">
          <div className="flex -space-x-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd1f0] to-[#9b8cff] border-2 border-white/70" />
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b9b0f0] to-[#7c72dc] border-2 border-white/70" />
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f6f0ff] to-[#6c62cc] border-2 border-white/70" />
          </div>
        </div>
        <h4 className="font-bold text-sm mb-2 text-white">Customers</h4>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Active</span><b>128</b></div>
        <div className="flex justify-between py-1 text-[11px]"><span>With overdue bills</span><b>18</b></div>
      </div>

      {/* 4. P&L report */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl -mt-10 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <h4 className="font-bold text-sm mb-2 text-white">P&amp;L report</h4>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Sales</span><b>₹10,00,000</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Services</span><b>₹1,00,000</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Others</span><b>₹30,000</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Rent</span><b>₹80,000</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Salaries</span><b>₹3,20,000</b></div>
      </div>

      {/* 5. Today's tasks */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-14 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <h4 className="font-bold text-sm mb-2 text-white">Today’s tasks</h4>
        <div className="flex items-center gap-3 py-1.5">
          <span className="w-7 h-7 rounded-full border-2 border-white/30 border-t-white shrink-0 animate-spin" />
          <div><b>Kitchen</b><br /><span className="text-[11px] text-white/70">12 tasks</span></div>
        </div>
        <div className="flex items-center gap-3 py-1.5">
          <span className="w-7 h-7 rounded-full border-2 border-white/30 border-r-white shrink-0" />
          <div><b>Cleaning</b><br /><span className="text-[11px] text-white/70">8 tasks</span></div>
        </div>
        <div className="flex items-center gap-3 py-1.5">
          <span className="w-7 h-7 rounded-full border-2 border-white/30 border-b-white shrink-0" />
          <div><b>Inventory</b><br /><span className="text-[11px] text-white/70">12 tasks</span></div>
        </div>
      </div>

      {/* 6. Vendors */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-0 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <h4 className="font-bold text-sm mb-2 text-white">Vendors</h4>
        <div className="flex items-center gap-3 py-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd1f0] to-[#9b8cff] border border-white/60 shrink-0" />
          <div>
            <b>Ravi Suppliers</b>
            <br />
            <span className="text-[11px] text-white/70">Payable ₹62,000 · due Nov 28</span>
          </div>
        </div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px]">Scheduled</span>
      </div>

      {/* 7. WhatsApp billing */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl -mt-8 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <h4 className="font-bold text-sm mb-2 text-white">WhatsApp billing</h4>
        <div className="mt-2 p-3 rounded-2xl rounded-bl-xs bg-white text-[#2a1f5c] font-semibold text-xs shadow-md">
          Invoice #1042 · ₹23,360
          <br />
          <span className="font-medium text-[11px] text-slate-500">Sent ✓✓ 10:42</span>
        </div>
      </div>

      {/* 8. GST filing */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-12 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <h4 className="font-bold text-sm mb-2 text-white">GST filing</h4>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>GSTR-1</span><b>Filed Nov 11</b></div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>GSTR-3B</span><b>Due Nov 20</b></div>
        <div className="flex justify-between py-1 text-[11px]"><span>E-way bills today</span><b>14</b></div>
      </div>

      {/* 9. Restaurant & Cafe billing */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-2 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md">
        <h4 className="font-bold text-sm mb-2 text-white">Table 7 · family of 4</h4>
        <div className="flex justify-between items-center text-sm my-2">
          <span className="text-white/80">KOT 32 · GST 5%</span>
          <b>₹3,240</b>
        </div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px] mb-2">QR paid</span>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]"><span>Table 3</span><b>₹860</b></div>
        <div className="flex justify-between py-1 text-[11px]"><span>Takeaway 89</span><b>₹680</b></div>
      </div>
    </React.Fragment>
  );

  return (
    <section
      id="what-is-vinimay"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-[radial-gradient(ellipse_70%_60%_at_50%_20%,rgba(255,255,255,0.28),transparent_70%),linear-gradient(165deg,#8E86E8,#584FB2)] text-white overflow-hidden border-t border-purple-400/20"
      aria-label="What is Vinimay dashboard overview"
    >
      {/* Bottom ambient vignette */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2e2678]/40 to-transparent pointer-events-none z-20" />

      <div className="w-full mx-auto relative z-10">
        {/* Header Title & Subtitle matching site standards */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-extrabold uppercase tracking-widest mb-4 backdrop-blur-md shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL-IN-ONE PLATFORM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-sm">
            What is Vinimay?
          </h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-xs">
            Vinimay is free accounting and billing software. Send GST and VAT invoices,
            take payments at the counter, and bill on WhatsApp—all in one app.
          </p>
        </div>

        {/* Central Showcase Stage */}
        <div className="relative w-full flex justify-center items-center overflow-visible">
          {/* Drifting Glass Cards Track (Behind) */}
          <div className="absolute inset-y-0 -inset-x-8 sm:-inset-x-20 flex items-center z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex items-center w-max animate-[drift_95s_linear_infinite]">
              {renderCards("c1")}
              {renderCards("c2")}
            </div>
          </div>

          {/* Scaled Dashboard Window (Front) */}
          <div className="relative z-10 w-full max-w-[920px] rounded-2xl overflow-hidden bg-white text-[#1d1640] shadow-[0_40px_90px_-20px_rgba(25,15,90,0.75),0_0_0_1px_rgba(255,255,255,0.4)]">
            {/* Top Window Bar */}
            <div className="flex items-center gap-3 h-10 px-4 bg-[#1d1640] text-white font-bold text-xs sm:text-sm">
              <Image
                src="/vinimay_v_logo.png"
                alt="Vinimay"
                width={22}
                height={22}
                className="h-5 w-auto object-contain"
                priority
              />
              <span>Vinimay</span>
              <span className="flex-1 max-w-[300px] h-6 rounded-md bg-white/10 font-normal text-[11px] leading-6 px-3 text-white/70">
                Search
              </span>
              <span className="ml-auto w-6 h-6 rounded-full bg-gradient-to-br from-[#ffd1f0] to-[#9b8cff]" />
            </div>

            {/* Window Body */}
            <div className="grid grid-cols-[135px_1fr] sm:grid-cols-[176px_1fr] min-h-[480px] sm:min-h-[560px]">
              {/* Sidebar Navigation */}
              <div className="bg-[#f4f2fb] p-3 text-xs font-semibold space-y-1">
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white text-[#1d1640] shadow-sm">
                  <span className="w-2.5 h-2.5 rounded bg-[#584FB2]" />
                  <span>Home</span>
                </div>
                {[
                  "Product",
                  "Sales",
                  "Customers",
                  "Invoices",
                  "Purchases",
                  "Inventory",
                  "Restaurant",
                  "Gym",
                  "Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#4a4270] hover:bg-white/60 transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded bg-[#b9b0f0]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Screen */}
              <div className="p-4 sm:p-6 text-xs space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <small className="block text-[#6b6396] font-semibold text-[11px]">Total receivables</small>
                    <b className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">₹5,64,000</b>
                    <div className="flex h-2 rounded-full overflow-hidden my-2">
                      <span className="bg-[#584FB2] w-[74.5%]" />
                      <span className="bg-[#f5b82e] w-[25.5%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#6b6396]">
                      <span>Current <b className="block text-slate-900 text-xs">₹4,20,000</b></span>
                      <span>Overdue <b className="block text-slate-900 text-xs">₹1,44,000</b></span>
                    </div>
                  </div>

                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                    <small className="block text-[#6b6396] font-semibold text-[11px]">Total payables</small>
                    <b className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">₹2,24,000</b>
                    <div className="flex h-2 rounded-full overflow-hidden my-2">
                      <span className="bg-[#584FB2] w-[72.3%]" />
                      <span className="bg-[#f5b82e] w-[27.7%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#6b6396]">
                      <span>Current <b className="block text-slate-900 text-xs">₹1,62,000</b></span>
                      <span>Overdue <b className="block text-slate-900 text-xs">₹62,000</b></span>
                    </div>
                  </div>
                </div>

                {/* Cash Flow Graph */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 pt-2">
                  <div>
                    <h5 className="font-bold text-[#6b6396] text-[11px] mb-2 uppercase tracking-wide">Cash flow</h5>
                    <svg viewBox="0 0 520 190" className="w-full h-auto" role="img" aria-label="Cash flow rising through the year">
                      <defs>
                        <linearGradient id="tw-cashflow-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#584FB2" stopOpacity="0.35" />
                          <stop offset="1" stopColor="#584FB2" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <g stroke="#eeeaf9">
                        <path d="M0 20h520M0 60h520M0 100h520M0 140h520" />
                      </g>
                      <path
                        d="M10 150 L60 130 L110 138 L160 96 L210 70 L260 62 L310 52 L360 40 L410 34 L460 28 L510 24 V170 H10Z"
                        fill="url(#tw-cashflow-grad)"
                      />
                      <path
                        d="M10 150 L60 130 L110 138 L160 96 L210 70 L260 62 L310 52 L360 40 L410 34 L460 28 L510 24"
                        fill="none"
                        stroke="#584FB2"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <g fill="#9a93c0" fontSize="10" fontFamily="inherit">
                        <text x="4" y="186">Apr</text>
                        <text x="64" y="186">Jun</text>
                        <text x="134" y="186">Aug</text>
                        <text x="204" y="186">Oct</text>
                        <text x="274" y="186">Dec</text>
                        <text x="344" y="186">Feb</text>
                        <text x="470" y="186">Mar</text>
                      </g>
                    </svg>
                  </div>

                  <div className="space-y-2 text-[11px] text-[#6b6396] border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-4 flex flex-col justify-center">
                    <div className="pb-1.5 border-b border-slate-100">
                      Cash as on 01-04-2026
                      <b className="block text-slate-900 text-xs font-bold">₹42,250.00</b>
                    </div>
                    <div className="pb-1.5 border-b border-slate-100 text-emerald-600">
                      Incoming
                      <b className="block text-emerald-700 text-xs font-bold">+₹11,93,838.29</b>
                    </div>
                    <div className="pb-1.5 border-b border-slate-100 text-rose-600">
                      Outgoing
                      <b className="block text-rose-700 text-xs font-bold">−₹12,06,018.12</b>
                    </div>
                    <div>
                      Cash as on 31-03-2027
                      <b className="block text-slate-900 text-xs font-bold">₹30,070.17</b>
                    </div>
                  </div>
                </div>

                <div className="font-bold text-[#6b6396] text-[11px] pt-1">Income and expense</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
