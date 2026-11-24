"use client";

import React from "react";
import {
  UtensilsCrossed,
  Utensils,
  LayoutGrid,
  Plus,
  DownloadCloud,
  Search,
  Filter,
  Pencil,
  Trash2,
} from "lucide-react";

export function RestaurantScreen() {
  const dishes = [
    {
      name: "Boiled Eggs",
      code: "#BE",
      category: "Eggs",
      type: "Veg",
      price: "Regular: ₹56",
      station: "MAIN_KITCHEN",
      available: true,
      emoji: "🥚",
      color: "from-amber-100 to-yellow-100",
    },
    {
      name: "Butter Naan",
      code: "#BN",
      category: "Breads",
      type: "Veg",
      price: "Regular: ₹66",
      station: "TANDOOR",
      available: true,
      emoji: "🫓",
      color: "from-amber-100 to-orange-100",
    },
    {
      name: "Butter Paneer",
      code: "#BP",
      category: "Paneer",
      type: "Veg",
      price: "Regular: ₹144",
      station: "MAIN_KITCHEN",
      available: true,
      emoji: "🍲",
      color: "from-rose-100 to-amber-100",
    },
    {
      name: "Cheese Sandwich",
      code: "#CS",
      category: "Sandwich",
      type: "Veg",
      price: "Regular: ₹144",
      station: "MAIN_KITCHEN",
      available: true,
      emoji: "🥪",
      color: "from-yellow-100 to-amber-100",
    },
  ];

  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-4 h-4 text-[#7c5cfc]" />
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Menu Management
          </h2>
        </div>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Manage categories and menu items across your restaurants.
        </p>
      </div>

      {/* Sub Tabs (Mockup Display) */}
      <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100/70 text-[#7c5cfc] font-bold text-[11px] shadow-2xs cursor-default">
          <Utensils className="w-3.5 h-3.5" />
          <span>Menu Items (23)</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-slate-400 text-[11px] font-medium cursor-default">
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Categories</span>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-3.5 sm:p-4 space-y-3">
        {/* Card Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-xs sm:text-[13px]">
                Active Menu Items
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                21 dishes
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Dishes available for order across your digital &amp; physical menus.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[11px] shadow-sm shadow-purple-600/20 cursor-default">
              <Plus className="w-3.5 h-3.5" />
              <span>Add Menu</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-[11px] shadow-2xs cursor-default">
              <DownloadCloud className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Bulk Import</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/90 text-[11px] text-slate-400 flex-1 max-w-md cursor-default">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              type="text"
              readOnly
              value="Search dish, variant, code..."
              className="bg-transparent border-none outline-none w-full text-slate-400 text-[11px] cursor-default"
            />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-500 font-medium text-[11px] cursor-default">
            <Filter className="w-3 h-3 text-slate-400" />
            <span>Filters</span>
          </div>
        </div>

        {/* Menu Items Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[10px]">
                <th className="pb-2 font-medium">Name</th>
                <th className="pb-2 font-medium">Category</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Variants (Price)</th>
                <th className="pb-2 font-medium">Station</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dishes.map((dish) => (
                <tr key={dish.code}>
                  {/* Name + thumbnail */}
                  <td className="py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${dish.color} flex items-center justify-center text-sm shadow-2xs shrink-0`}
                      >
                        {dish.emoji}
                      </div>
                      <div>
                        <b className="text-slate-900 font-bold block text-[11.5px] leading-tight">
                          {dish.name}
                        </b>
                        <span className="text-[9.5px] text-slate-400 font-mono">
                          {dish.code}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-2.5 text-slate-600 font-medium">{dish.category}</td>

                  {/* Type */}
                  <td className="py-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-bold text-[9.5px]">
                      {dish.type}
                    </span>
                  </td>

                  {/* Variants */}
                  <td className="py-2.5 text-slate-700 font-semibold font-mono text-[10.5px]">
                    {dish.price}
                  </td>

                  {/* Station */}
                  <td className="py-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono font-semibold text-[9.5px]">
                      {dish.station}
                    </span>
                  </td>

                  {/* Status Toggle (Mockup Visual) */}
                  <td className="py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-4 bg-emerald-500 rounded-full p-0.5 flex items-center justify-end shadow-2xs">
                        <div className="w-3 h-3 bg-white rounded-full shadow-xs" />
                      </div>
                      <span className="text-emerald-700 font-semibold text-[10.5px]">
                        Available
                      </span>
                    </div>
                  </td>

                  {/* Actions (Mockup Visual) */}
                  <td className="py-2.5 text-right">
                    <div className="flex items-center justify-end gap-1.5 text-slate-300">
                      <div className="p-1 cursor-default">
                        <Pencil className="w-3.5 h-3.5" />
                      </div>
                      <div className="p-1 cursor-default">
                        <Trash2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}