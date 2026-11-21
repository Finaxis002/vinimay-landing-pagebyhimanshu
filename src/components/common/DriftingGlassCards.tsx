"use client";

import React from "react";

export interface DriftingGlassCardsProps {
  phase?: number;
  speed?: string;
  className?: string;
  opacity?: string;
}

export default function DriftingGlassCards({
  phase = 0,
  speed = "95s",
  className = "",
  opacity = "opacity-40 sm:opacity-100",
}: DriftingGlassCardsProps) {
  const renderCards = (keyPrefix: string) => (
    <React.Fragment key={keyPrefix}>
      {/* 1. Basmati rice inventory */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl -mt-12 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#f6f0ff,#b9b0f7_55%,#7c72dc)] shadow-[inset_0_-8px_16px_rgba(60,45,160,0.35)]" />
        <div className="flex justify-between items-center text-sm font-bold my-2">
          <span>Basmati rice 25 kg</span>
          <span>₹1,850</span>
        </div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px] mb-2">
          SKU 12312
        </span>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Opening stock</span>
          <b>210.00</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Stock in hand</span>
          <b>150.00</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Committed stock</span>
          <b>100.00</b>
        </div>
        <div className="flex justify-between py-1 text-[11px]">
          <span>Available for sale</span>
          <b className={phase === 2 ? "text-emerald-300 transition-colors" : ""}>
            {phase === 2 ? "49.00" : "50.00"}
          </b>
        </div>
      </div>

      {/* 2. Banking */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-16 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <h4 className="font-bold text-sm mb-2 text-white">Banking</h4>
        <div className="flex justify-between items-center text-sm my-2">
          <span className="text-white/80">HDFC Current ···4521</span>
          <b className="font-bold">₹7,10,000</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Gupta Gym · UPI</span>
          <b className={phase === 0 ? "text-emerald-300 font-extrabold" : ""}>+₹14,500</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Om Packaging · NEFT</span>
          <b>−₹32,100</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Counter sales</span>
          <b>+₹52,400</b>
        </div>
        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px]">
          12 to reconcile
        </span>
      </div>

      {/* 3. Customers */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-2 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <div className="h-20 mb-3 rounded-xl bg-gradient-to-br from-[#ffd1f0]/70 to-[#9b8cff]/70 flex items-center justify-center">
          <div className="flex -space-x-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd1f0] to-[#9b8cff] border-2 border-white/70" />
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b9b0f0] to-[#7c72dc] border-2 border-white/70" />
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f6f0ff] to-[#6c62cc] border-2 border-white/70" />
          </div>
        </div>
        <h4 className="font-bold text-sm mb-2 text-white">Customers</h4>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Active</span>
          <b>128</b>
        </div>
        <div className="flex justify-between py-1 text-[11px]">
          <span>With overdue bills</span>
          <b>18</b>
        </div>
      </div>

      {/* 4. P&L report */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl -mt-10 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <h4 className="font-bold text-sm mb-2 text-white">P&amp;L report</h4>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Sales</span>
          <b>₹10,00,000</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Services</span>
          <b>₹1,00,000</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Others</span>
          <b>₹30,000</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Rent</span>
          <b>₹80,000</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Salaries</span>
          <b>₹3,20,000</b>
        </div>
      </div>

      {/* 5. Today's tasks */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-14 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <h4 className="font-bold text-sm mb-2 text-white">Today’s tasks</h4>
        <div className="flex items-center gap-3 py-1.5">
          <span className="w-7 h-7 rounded-full border-2 border-white/30 border-t-white shrink-0 animate-spin" />
          <div>
            <b>Kitchen</b>
            <br />
            <span className="text-[11px] text-white/70">12 tasks</span>
          </div>
        </div>
        <div className="flex items-center gap-3 py-1.5">
          <span className="w-7 h-7 rounded-full border-2 border-white/30 border-r-white shrink-0" />
          <div>
            <b>Cleaning</b>
            <br />
            <span className="text-[11px] text-white/70">8 tasks</span>
          </div>
        </div>
        <div className="flex items-center gap-3 py-1.5">
          <span className="w-7 h-7 rounded-full border-2 border-white/30 border-b-white shrink-0" />
          <div>
            <b>Inventory</b>
            <br />
            <span className="text-[11px] text-white/70">12 tasks</span>
          </div>
        </div>
      </div>

      {/* 6. Vendors */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-0 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <h4 className="font-bold text-sm mb-2 text-white">Vendors</h4>
        <div className="flex items-center gap-3 py-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffd1f0] to-[#9b8cff] border border-white/60 shrink-0" />
          <div>
            <b>Ravi Suppliers</b>
            <br />
            <span className="text-[11px] text-white/70">Payable ₹62,000 · due Nov 28</span>
          </div>
        </div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px]">
          Scheduled
        </span>
      </div>

      {/* 7. WhatsApp billing */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl -mt-8 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <h4 className="font-bold text-sm mb-2 text-white">WhatsApp billing</h4>
        <div className="mt-2 p-3 rounded-2xl rounded-bl-xs bg-white text-[#2a1f5c] font-semibold text-xs shadow-md">
          Invoice #1042 · ₹23,360
          <br />
          <span className="font-medium text-[11px] text-emerald-600">Sent ✓✓ 10:42</span>
        </div>
      </div>

      {/* 8. GST filing */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-12 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <h4 className="font-bold text-sm mb-2 text-white">GST filing</h4>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>GSTR-1</span>
          <b>Filed Nov 11</b>
        </div>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>GSTR-3B</span>
          <b>Due Nov 20</b>
        </div>
        <div className="flex justify-between py-1 text-[11px]">
          <span>E-way bills today</span>
          <b>14</b>
        </div>
      </div>

      {/* 9. Restaurant & Cafe billing */}
      <div className="shrink-0 w-[240px] sm:w-[250px] mr-8 p-4 sm:p-5 rounded-2xl mt-2 text-xs leading-relaxed bg-gradient-to-br from-white/25 to-white/10 border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_18px_40px_-22px_rgba(30,20,110,0.7)] text-white/90 backdrop-blur-md transition-transform hover:scale-105 duration-300">
        <h4 className="font-bold text-sm mb-2 text-white">Table 7 · family of 4</h4>
        <div className="flex justify-between items-center text-sm my-2">
          <span className="text-white/80">KOT 32 · GST 5%</span>
          <b>₹3,240</b>
        </div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/25 font-bold text-[10px] mb-2">
          QR paid
        </span>
        <div className="flex justify-between py-1 border-b border-white/15 text-[11px]">
          <span>Table 3</span>
          <b>₹860</b>
        </div>
        <div className="flex justify-between py-1 text-[11px]">
          <span>Takeaway 89</span>
          <b>₹680</b>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div
      className={`flex items-center pointer-events-none overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${opacity} ${className}`}
    >
      <div
        className="flex items-center w-max animate-[drift_95s_linear_infinite]"
        style={{ animationDuration: speed }}
      >
        {renderCards("tk1")}
        {renderCards("tk2")}
      </div>
    </div>
  );
}
