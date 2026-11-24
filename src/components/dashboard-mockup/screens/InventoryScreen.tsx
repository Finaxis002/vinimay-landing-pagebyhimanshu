"use client";

import React from "react";
import {
  Boxes,
  Plus,
  ArrowUpDown,
  Search,
  QrCode,
  Pencil,
  ChevronDown,
  Building,
} from "lucide-react";

export function InventoryScreen() {
  const products = [
    {
      id: 1,
      name: "Pre Workout",
      companies: "1 company",
      cost: "2,300",
      selling: "2,500",
      stock: "27",
      unit: "piece",
      hsn: "—",
      created: "Oct 30, 2026 03:14 PM",
    },
    {
      id: 2,
      name: "Protein Bars",
      companies: "1 company",
      cost: "240",
      selling: "330",
      stock: "28",
      unit: "piece",
      hsn: "—",
      created: "Oct 30, 2026 03:14 PM",
    },
    {
      id: 3,
      name: "Whey Protein",
      companies: "1 company",
      cost: "2,200",
      selling: "2,300",
      stock: "29",
      unit: "piece",
      hsn: "# 21061000",
      created: "Oct 30, 2026 03:13 PM",
    },
  ];

  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Page Header & Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Inventory
          </h2>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="px-2 py-0.5 rounded-full bg-purple-100/70 text-[#7c5cfc] font-bold text-[10px]">
              Dhurandhar Fitness
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold text-[10px]">
              Products
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-[#7c5cfc] font-semibold text-[10px]">
              3 visible
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-[11px] shadow-2xs cursor-default">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span>Import/Export</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[11px] shadow-sm shadow-purple-600/25 cursor-default">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Product</span>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-3.5 sm:p-4 space-y-3 cursor-default">
        {/* Sub Tabs (Mockup Display) */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
          <div className="px-3 py-1.5 rounded-xl bg-purple-100/70 text-[#7c5cfc] font-bold text-[11px] shadow-2xs cursor-default">
            Products (3)
          </div>
          <div className="px-3 py-1.5 rounded-xl text-slate-400 text-[11px] font-medium cursor-default">
            Services (1)
          </div>
          <div className="px-3 py-1.5 rounded-xl text-slate-400 text-[11px] font-medium cursor-default">
            Gym Memberships (7)
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-400 max-w-sm cursor-default">
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <input
            type="text"
            readOnly
            value="Search product..."
            className="bg-transparent border-none outline-none w-full text-slate-400 text-[11px] cursor-default"
          />
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[10px]">
                <th className="pb-2 w-5 font-normal">
                  <div className="w-3.5 h-3.5 rounded border border-slate-200" />
                </th>
                <th className="pb-2 font-medium">#</th>
                <th className="pb-2 font-medium">PRODUCT</th>
                <th className="pb-2 font-medium">COST</th>
                <th className="pb-2 font-medium">SELLING</th>
                <th className="pb-2 font-medium">STOCK</th>
                <th className="pb-2 font-medium">UNIT</th>
                <th className="pb-2 font-medium">HSN</th>
                <th className="pb-2 font-medium">CREATED</th>
                <th className="pb-2 font-medium">BARCODE</th>
                <th className="pb-2 font-medium text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((item) => (
                <tr key={item.id}>
                  <td className="py-2.5">
                    <div className="w-3.5 h-3.5 rounded border border-slate-200" />
                  </td>
                  <td className="py-2.5 text-slate-400 font-mono text-[10px]">{item.id}</td>

                  {/* Product Name with Purple Box Icon & Tag */}
                  <td className="py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#7c5cfc] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Boxes className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <b className="text-slate-900 font-bold block text-[11.5px] leading-tight">
                          {item.name}
                        </b>
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-purple-50 text-[#7c5cfc] font-medium text-[8.5px] border border-purple-100">
                          <Building className="w-2.5 h-2.5" />
                          {item.companies}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Cost & Selling */}
                  <td className="py-2.5 font-mono text-slate-700 font-semibold">
                    {item.cost}
                  </td>
                  <td className="py-2.5 font-mono text-slate-900 font-bold">
                    {item.selling}
                  </td>

                  {/* Stock count */}
                  <td className="py-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item.stock}
                    </span>
                  </td>

                  {/* Unit */}
                  <td className="py-2.5 text-slate-500 font-mono text-[10.5px]">
                    {item.unit}
                  </td>

                  {/* HSN */}
                  <td className="py-2.5">
                    {item.hsn !== "—" ? (
                      <span className="px-1.5 py-0.5 rounded bg-purple-50 text-[#7c5cfc] font-mono font-bold text-[9px] border border-purple-100">
                        {item.hsn}
                      </span>
                    ) : (
                      <span className="text-slate-300 font-mono">—</span>
                    )}
                  </td>

                  {/* Created */}
                  <td className="py-2.5 text-slate-400 font-mono text-[10px]">
                    {item.created}
                  </td>

                  {/* Barcode QR */}
                  <td className="py-2.5">
                    <div className="w-6 h-6 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
                      <QrCode className="w-3.5 h-3.5" />
                    </div>
                  </td>

                  {/* Edit (Mockup visual) */}
                  <td className="py-2.5 text-right">
                    <div className="p-1 text-slate-300 inline-block cursor-default">
                      <Pencil className="w-3.5 h-3.5" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer (Mockup visual) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[10.5px] text-slate-400 cursor-default">
          <span>Showing 1-3 of 3 items</span>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span>Rows per page:</span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 text-slate-600 font-semibold font-mono">
                <span>20</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 rounded border border-slate-200 text-slate-400 cursor-default">
                &lt; Previous
              </span>
              <span className="w-5 h-5 rounded bg-[#7c5cfc] text-white font-bold flex items-center justify-center font-mono text-[10px] cursor-default">
                1
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-100/60 text-[#7c5cfc] font-bold cursor-default">
                Next &gt;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}