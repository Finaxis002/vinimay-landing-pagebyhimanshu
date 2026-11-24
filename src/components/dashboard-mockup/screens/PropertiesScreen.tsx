"use client";

import React from "react";
import {
  Building2,
  Layers,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  FolderPlus,
  Plus,
  Search,
  Copy,
  Pencil,
  Trash2,
  ChevronDown,
  Table as TableIcon,
  LayoutGrid,
  Grid3X3,
  Home,
} from "lucide-react";

export function PropertiesScreen() {
  const properties = [
    {
      unit: "Villa 18 - Green Meadows",
      subUnit: "Unit #V-18 • North-East",
      project: "Green Meadows",
      location: "Phase 2 • Ground + 1 • Bhopal",
      type: "Villa",
      carpetArea: "2,100 Sq.Ft",
      sbua: "SBUA: 2,600 Sq.Ft",
      valuation: "₹1,69,00,000",
      rate: "₹6,500 / Sq.Ft",
      status: "Sold",
      statusColor: "bg-rose-50 text-rose-600 border-rose-200",
    },
    {
      unit: "Flat 302 - Tower B",
      subUnit: "Unit #302 • East",
      project: "Skyline Greens",
      location: "Tower B • 3rd Floor • Bhopal",
      type: "3 BHK",
      carpetArea: "1,150 Sq.Ft",
      sbua: "SBUA: 1,450 Sq.Ft",
      valuation: "₹75,40,000",
      rate: "₹5,200 / Sq.Ft",
      status: "Available",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Header & Main Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Properties
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Manage real estate projects, properties, units, and inventory portfolio.
          </p>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-[11px] shadow-2xs cursor-default">
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Import Excel</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-[11px] shadow-2xs cursor-default">
            <FolderPlus className="w-3.5 h-3.5 text-[#7c5cfc]" />
            <span>+ Project</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[11px] shadow-sm shadow-purple-600/25 cursor-default">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Property</span>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {/* Total Property Value */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[9.5px] font-bold tracking-wider text-slate-400 uppercase block">
              Total Property Value
            </span>
            <b className="text-base sm:text-lg font-extrabold text-slate-900 leading-none mt-1 block font-mono">
              ₹2.44 Cr
            </b>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              • 2 units • 2 projects
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
            <Building2 className="w-4 h-4" />
          </div>
        </div>

        {/* Available Properties */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[9.5px] font-bold tracking-wider text-emerald-700 uppercase block">
              Available Properties
            </span>
            <b className="text-base sm:text-lg font-extrabold text-emerald-700 leading-none mt-1 block font-mono">
              ₹75.40 L
            </b>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              • 1 available
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
        </div>

        {/* Sold & Booked Value */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[9.5px] font-bold tracking-wider text-rose-500 uppercase block">
              Sold &amp; Booked Value
            </span>
            <b className="text-base sm:text-lg font-extrabold text-slate-900 leading-none mt-1 block font-mono">
              ₹1.69 Cr
            </b>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              • 1 units
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>

        {/* Properties Sold Progress */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div className="flex-1 mr-2">
            <div className="flex justify-between items-center">
              <span className="text-[9.5px] font-bold tracking-wider text-slate-400 uppercase">
                Properties Sold
              </span>
              <b className="text-xs font-bold text-slate-900">50%</b>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
              <div className="bg-[#7c5cfc] h-full rounded-full w-1/2" />
            </div>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              1 of 2 units sold
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-3.5 sm:p-4 space-y-3 cursor-default">
        {/* Filter & View Mode Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-400 w-full sm:w-64 cursor-default">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              type="text"
              readOnly
              value="Search by unit, tower, project, city..."
              className="bg-transparent border-none outline-none w-full text-slate-400 text-[11px] cursor-default"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            {/* Status Pills (Mockup display) */}
            <div className="flex items-center gap-1 bg-slate-50 p-0.5 rounded-xl border border-slate-200/80 text-[10.5px]">
              <span className="px-2 py-0.5 rounded-lg bg-white shadow-2xs font-bold text-[#7c5cfc] cursor-default">
                All
              </span>
              <span className="px-2 py-0.5 text-slate-400 cursor-default">Available</span>
              <span className="px-2 py-0.5 text-slate-400 cursor-default">Booked</span>
              <span className="px-2 py-0.5 text-slate-400 cursor-default">Sold</span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-slate-50 p-0.5 rounded-xl border border-slate-200/80 text-slate-400">
              <div className="p-1 rounded-lg bg-white shadow-2xs text-[#7c5cfc] cursor-default">
                <TableIcon className="w-3.5 h-3.5" />
              </div>
              <div className="p-1 rounded-lg text-slate-400 cursor-default">
                <LayoutGrid className="w-3.5 h-3.5" />
              </div>
              <div className="p-1 rounded-lg text-slate-400 cursor-default">
                <Grid3X3 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Properties Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[10px]">
                <th className="pb-2 font-medium">Unit / Property</th>
                <th className="pb-2 font-medium">Project &amp; Location</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Carpet Area</th>
                <th className="pb-2 font-medium">Valuation / Price</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {properties.map((p) => (
                <tr key={p.unit}>
                  {/* Unit / Property */}
                  <td className="py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0 border border-purple-100">
                        <Home className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <b className="text-slate-900 font-bold block text-[11.5px] leading-tight">
                          {p.unit}
                        </b>
                        <span className="text-[9.5px] text-slate-400">
                          {p.subUnit}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Project & Location */}
                  <td className="py-2.5">
                    <b className="text-slate-800 block font-semibold leading-tight">
                      {p.project}
                    </b>
                    <span className="text-[9.5px] text-slate-400">
                      {p.location}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="py-2.5">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[10px]">
                      {p.type}
                    </span>
                  </td>

                  {/* Carpet Area */}
                  <td className="py-2.5">
                    <b className="text-slate-800 block font-mono leading-tight">
                      {p.carpetArea}
                    </b>
                    <span className="text-[9px] text-slate-400 font-mono">
                      {p.sbua}
                    </span>
                  </td>

                  {/* Valuation */}
                  <td className="py-2.5">
                    <b className="text-emerald-700 block font-mono font-bold leading-tight">
                      {p.valuation}
                    </b>
                    <span className="text-[9px] text-slate-400 font-mono">
                      {p.rate}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-2.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border font-bold text-[9.5px] ${p.statusColor}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {p.status}
                    </span>
                  </td>

                  {/* Actions (Mockup visual) */}
                  <td className="py-2.5 text-right">
                    <div className="flex items-center justify-end gap-1.5 text-slate-300">
                      <div className="p-1 cursor-default">
                        <Copy className="w-3.5 h-3.5" />
                      </div>
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

        {/* Pagination Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[10.5px] text-slate-400 cursor-default">
          <span>Showing 1-2 of 2 items</span>

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