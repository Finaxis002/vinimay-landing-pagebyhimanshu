"use client";

import React from "react";
import {
  UtensilsCrossed,
  Dumbbell,
  FileText,
  Boxes,
  Building,
  QrCode,
  Download,
  ArrowRight,
  Plus,
  Home,
  LayoutDashboard,
  Building2,
  Users,
  Copy,
} from "lucide-react";

interface MobileMockupScreenProps {
  activeTabKey: string;
}

export function MobileMockupScreen({ activeTabKey }: MobileMockupScreenProps) {
  // DASHBOARD
  if (activeTabKey === "dashboard") {
    return (
      <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
        <div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
                <LayoutDashboard className="w-3 h-3" />
              </div>
              <div>
                <b className="text-[10px] text-slate-900 block leading-tight">Dashboard</b>
                <span className="text-[7.5px] text-slate-400">Dhurandhar Fitness</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[7.5px]">
              Live
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[7.5px] text-slate-400 uppercase font-bold block">
                Total Sales
              </span>
              <b className="text-xs font-black text-slate-900 font-mono">₹1,17,894</b>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[7.5px] text-slate-400 uppercase font-bold block">
                Purchases
              </span>
              <b className="text-xs font-black text-slate-900 font-mono">₹1,50,712</b>
            </div>
          </div>

          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-1 mb-1.5">
            <span className="text-[8px] font-bold text-[#7c5cfc] uppercase block">
              Inventory Pulse
            </span>
            <div className="flex justify-between items-center text-[8px] text-slate-600">
              <span>Products &amp; Stock</span>
              <b className="text-slate-900">3 SKUs</b>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
        >
          <Plus className="w-3 h-3" />
          <span>New Transaction</span>
        </button>
      </div>
    );
  }

  // COMPANIES
  if (activeTabKey === "companies") {
    return (
      <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
        <div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
                <Building2 className="w-3 h-3" />
              </div>
              <div>
                <b className="text-[10px] text-slate-900 block leading-tight">Companies</b>
                <span className="text-[7.5px] text-slate-400">10 Total • 5 GST Ready</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-purple-100 text-[#7c5cfc] font-bold text-[7.5px]">
              Multi-Entity
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-0.5">
              <div className="flex justify-between items-center">
                <b className="text-[9px] text-slate-900">Umesh&apos;S Place</b>
                <span className="px-1 py-0.2 rounded bg-amber-50 text-amber-700 text-[7px] font-bold">
                  GST Pending
                </span>
              </div>
              <span className="text-[7.5px] text-slate-400 block">+91 9000000000</span>
            </div>

            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-0.5">
              <div className="flex justify-between items-center">
                <b className="text-[9px] text-slate-900">Umesh Kirana Store</b>
                <span className="px-1 py-0.2 rounded bg-emerald-50 text-emerald-700 text-[7px] font-bold">
                  GST Ready
                </span>
              </div>
              <span className="text-[7.5px] text-slate-400 block">+91 9874564565</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
        >
          <Plus className="w-3 h-3" />
          <span>Add Company</span>
        </button>
      </div>
    );
  }

  // RESTAURANT / POS SCREEN
  if (activeTabKey === "poss") {
    return (
      <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
        <div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
                <UtensilsCrossed className="w-3 h-3" />
              </div>
              <div>
                <b className="text-[10px] text-slate-900 block leading-tight">Menu Manager</b>
                <span className="text-[7.5px] text-slate-400">21 Active Dishes</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[7.5px]">
              Live
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="bg-white p-2 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">🥚</span>
                <div>
                  <b className="text-[9.5px] text-slate-900 block leading-tight">Boiled Eggs</b>
                  <span className="text-[7.5px] text-slate-400">MAIN_KITCHEN</span>
                </div>
              </div>
              <div className="text-right">
                <b className="font-mono text-slate-800 block text-[9px]">₹56</b>
                <span className="text-[7.5px] text-emerald-600 font-bold">● Active</span>
              </div>
            </div>

            <div className="bg-white p-2 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">🫓</span>
                <div>
                  <b className="text-[9.5px] text-slate-900 block leading-tight">Butter Naan</b>
                  <span className="text-[7.5px] text-slate-400">TANDOOR</span>
                </div>
              </div>
              <div className="text-right">
                <b className="font-mono text-slate-800 block text-[9px]">₹66</b>
                <span className="text-[7.5px] text-emerald-600 font-bold">● Active</span>
              </div>
            </div>

            <div className="bg-white p-2 rounded-xl border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">🍲</span>
                <div>
                  <b className="text-[9.5px] text-slate-900 block leading-tight">Butter Paneer</b>
                  <span className="text-[7.5px] text-slate-400">MAIN_KITCHEN</span>
                </div>
              </div>
              <div className="text-right">
                <b className="font-mono text-slate-800 block text-[9px]">₹144</b>
                <span className="text-[7.5px] text-emerald-600 font-bold">● Active</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
        >
          <Plus className="w-3 h-3" />
          <span>Add Menu Item</span>
        </button>
      </div>
    );
  }

  // GYM & FITNESS SCREEN
  if (activeTabKey === "attendo") {
    return (
      <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
        <div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
                <Dumbbell className="w-3 h-3" />
              </div>
              <div>
                <b className="text-[10px] text-slate-900 block leading-tight">Dhurandhar Fitness</b>
                <span className="text-[7.5px] text-slate-400">Front Desk Active</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-purple-100 text-[#7c5cfc] font-bold text-[7.5px]">
              Gate 01
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[7.5px] text-slate-400 uppercase font-bold block">
                Members
              </span>
              <b className="text-sm font-extrabold text-slate-900">11 Active</b>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[7.5px] text-slate-400 uppercase font-bold block">
                Expiring
              </span>
              <b className="text-sm font-extrabold text-amber-600">4 Soon</b>
            </div>
          </div>

          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs mb-1.5">
            <span className="text-[8px] font-bold text-slate-700 block mb-1">
              Today&apos;s Footfall Flow
            </span>
            <div className="flex items-end gap-1 h-12 pt-1">
              {[20, 35, 60, 95, 80, 50, 25].map((h, i) => (
                <div key={i} className="flex-1 bg-purple-100 rounded-t h-full flex items-end">
                  <div
                    style={{ height: `${h}%` }}
                    className="w-full bg-[#7c5cfc] rounded-t"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-1.5 rounded-xl bg-purple-600 text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
        >
          <span>Open Gate Check-In</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    );
  }

  // INVOICE SCREEN
  if (activeTabKey === "invoice") {
    return (
      <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
        <div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
                <FileText className="w-3 h-3" />
              </div>
              <div>
                <b className="text-[10px] text-slate-900 block leading-tight">Tax Invoice</b>
                <span className="text-[7.5px] text-slate-400">#DFFS202610000</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[7.5px]">
              GST 18%
            </span>
          </div>

          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-1 mb-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Customer:</span>
              <b className="text-slate-900">Kushagra Chouhan</b>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Items:</span>
              <span>15 Session Pack + 1</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-slate-100 font-bold text-slate-900">
              <span>Balance Due:</span>
              <span className="text-[#7c5cfc] font-mono">₹1,029.59</span>
            </div>
          </div>

          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs text-center flex flex-col items-center">
            <div className="w-10 h-10 border border-slate-200 rounded p-1 flex items-center justify-center bg-slate-50 mb-1">
              <QrCode className="w-8 h-8 text-slate-800" />
            </div>
            <span className="text-[8px] font-bold text-slate-700">Scan to Pay via UPI</span>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
        >
          <Download className="w-3 h-3" />
          <span>Download Invoice PDF</span>
        </button>
      </div>
    );
  }

  // INVENTORY SCREEN
  if (activeTabKey === "inventory") {
    return (
      <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
        <div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
                <Boxes className="w-3 h-3" />
              </div>
              <div>
                <b className="text-[10px] text-slate-900 block leading-tight">Inventory</b>
                <span className="text-[7.5px] text-slate-400">3 SKUs in Stock</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[7.5px]">
              Synced
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
              <div>
                <b className="text-[9px] text-slate-900 block leading-tight">Pre Workout</b>
                <span className="text-[7.5px] text-slate-400">Selling: ₹2,500</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[8px]">
                ● 27 pcs
              </span>
            </div>

            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
              <div>
                <b className="text-[9px] text-slate-900 block leading-tight">Protein Bars</b>
                <span className="text-[7.5px] text-slate-400">Selling: ₹330</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[8px]">
                ● 28 pcs
              </span>
            </div>

            <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
              <div>
                <b className="text-[9px] text-slate-900 block leading-tight">Whey Protein</b>
                <span className="text-[7.5px] text-slate-400">Selling: ₹2,300</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[8px]">
                ● 29 pcs
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
        >
          <QrCode className="w-3 h-3" />
          <span>Barcode Scanner</span>
        </button>
      </div>
    );
  }

  // USERS
  if (activeTabKey === "users") {
    return (
      <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
        <div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
                <Users className="w-3 h-3" />
              </div>
              <div>
                <b className="text-[10px] text-slate-900 block leading-tight">Users &amp; Access</b>
                <span className="text-[7.5px] text-slate-400">10 Linked Companies</span>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-purple-100 text-[#7c5cfc] font-bold text-[7.5px]">
              Active
            </span>
          </div>

          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-1 mb-1.5">
            <div className="flex justify-between items-center">
              <b className="text-[9px] text-slate-900">Umesh (umesh_user)</b>
              <span className="px-1.5 py-0.2 rounded bg-purple-50 text-[#7c5cfc] font-bold text-[7.5px]">
                User
              </span>
            </div>
            <span className="text-[7.5px] text-slate-400 block">+918888888888</span>
            <div className="pt-1 border-t border-slate-100 text-[7px] text-slate-500">
              Assigned: Umesh&apos;S Place, Fitness Freak GYM
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
        >
          <Copy className="w-3 h-3" />
          <span>Copy Login URL</span>
        </button>
      </div>
    );
  }

  // PROPERTIES SCREEN (default fallback)
  return (
    <div className="flex-1 flex flex-col justify-between text-slate-800 text-left pt-6 p-2 text-[9px]">
      <div>
        <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 mb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-[#7c5cfc] text-white flex items-center justify-center">
              <Building className="w-3 h-3" />
            </div>
            <div>
              <b className="text-[10px] text-slate-900 block leading-tight">Real Estate</b>
              <span className="text-[7.5px] text-slate-400">Portfolio ₹2.44 Cr</span>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-purple-100 text-[#7c5cfc] font-bold text-[7.5px]">
            50% Sold
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Home className="w-3 h-3 text-[#7c5cfc]" />
                <b className="text-[9px] text-slate-900">Villa 18</b>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-rose-50 text-rose-600 font-bold text-[7.5px] border border-rose-200">
                Sold
              </span>
            </div>
            <div className="flex justify-between text-[7.5px] text-slate-500">
              <span>Green Meadows</span>
              <b className="font-mono text-emerald-700">₹1.69 Cr</b>
            </div>
          </div>

          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Home className="w-3 h-3 text-emerald-600" />
                <b className="text-[9px] text-slate-900">Flat 302 (3 BHK)</b>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 font-bold text-[7.5px] border border-emerald-200">
                Available
              </span>
            </div>
            <div className="flex justify-between text-[7.5px] text-slate-500">
              <span>Skyline Greens</span>
              <b className="font-mono text-emerald-700">₹75.40 L</b>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[8.5px] flex items-center justify-center gap-1 shadow-xs"
      >
        <Plus className="w-3 h-3" />
        <span>Add Unit</span>
      </button>
    </div>
  );
}