"use client";

import React from "react";
import {
  Building2,
  Plus,
  LayoutGrid,
  Table as TableIcon,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function CompaniesScreen() {
  const companies = [
    {
      name: "Umesh'S Place",
      type: "Sole Proprietorship",
      gstStatus: "GST Pending",
      gstColor: "bg-amber-50 text-amber-700 border-amber-200",
      tag: "restaurants_cafe",
      email: "No email added",
      phone: "+91 9000000000",
      location: "Bhopal, Madhya Pradesh",
      regNo: "# 7894561236548",
      gstin: "Not added",
      status: "Setup pending",
      statusDot: "bg-amber-500",
    },
    {
      name: "Umesh Kirana Store",
      type: "Sole Proprietorship",
      gstStatus: "GST Ready",
      gstColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      tag: "kirana_grocery_store",
      email: "No email added",
      phone: "+91 9874564565",
      location: "Bhopal, Madhya Pradesh",
      regNo: "# 789456123654789",
      gstin: "23ABCDE1234F1Z5",
      status: "Compliant",
      statusDot: "bg-emerald-500",
    },
    {
      name: "Umesh'S Eating Place",
      type: "Sole Proprietorship",
      gstStatus: "GST Pending",
      gstColor: "bg-amber-50 text-amber-700 border-amber-200",
      tag: "restaurants_cafe",
      email: "No email added",
      phone: "+91 8888888888",
      location: "ABC Nagar Bhopal MP India",
      regNo: "# 7895456698784",
      gstin: "Not added",
      status: "Setup pending",
      statusDot: "bg-amber-500",
    },
  ];

  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Companies
          </h2>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="px-2 py-0.5 rounded-full bg-purple-100/70 text-[#7c5cfc] font-bold text-[10px]">
              10 total companies
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-[10px]">
              ✓ 5 GST ready
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle (Mockup display) */}
          <div className="flex items-center gap-1 bg-slate-50 p-0.5 rounded-xl border border-slate-200 text-[10.5px]">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white shadow-2xs font-bold text-[#7c5cfc]">
              <LayoutGrid className="w-3 h-3" />
              <span>Cards</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 text-slate-400">
              <TableIcon className="w-3 h-3" />
              <span>Table</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[11px] shadow-sm shadow-purple-600/25 cursor-default">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Company</span>
          </div>
        </div>
      </div>

      {/* Grid of Company Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {companies.map((c) => (
          <div
            key={c.name}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-3.5 space-y-2.5 flex flex-col justify-between cursor-default"
          >
            {/* Top info */}
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c5cfc] border border-purple-100 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <b className="text-[12px] font-bold text-slate-900 block leading-tight">
                      {c.name}
                    </b>
                    <span className="text-[9.5px] text-slate-400 block mt-0.5">
                      {c.type}
                    </span>
                  </div>
                </div>

                <div className="text-slate-300 p-0.5 cursor-default">
                  <MoreVertical className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-1.5 mt-2 flex-wrap text-[9px]">
                <span
                  className={`px-1.5 py-0.2 rounded font-bold border ${c.gstColor}`}
                >
                  {c.gstStatus}
                </span>
                <span className="px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 font-semibold border border-purple-100">
                  INR
                </span>
                <span className="px-1.5 py-0.2 rounded bg-purple-50 text-[#7c5cfc] font-semibold border border-purple-100">
                  {c.tag}
                </span>
              </div>

              {/* Contact info */}
              <div className="mt-2.5 space-y-1 text-[9.5px] text-slate-500 border-t border-slate-100 pt-2">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Mail className="w-3 h-3 shrink-0" />
                  <span>{c.email}</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-slate-700">
                  <Phone className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{c.phone}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <MapPin className="w-3 h-3 text-[#7c5cfc] shrink-0" />
                  <span className="truncate">{c.location}</span>
                </div>
              </div>

              {/* Registration & GSTIN Boxes */}
              <div className="grid grid-cols-2 gap-1.5 mt-2.5 text-[8.5px]">
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 uppercase font-bold block text-[7.5px]">
                    REGISTRATION
                  </span>
                  <span className="font-mono text-slate-700 font-semibold truncate block mt-0.5">
                    {c.regNo}
                  </span>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 uppercase font-bold block text-[7.5px]">
                    GSTIN
                  </span>
                  <span className="font-mono text-slate-700 font-semibold truncate block mt-0.5">
                    {c.gstin}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
              <span>Address on file</span>
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <span className={`w-1.5 h-1.5 rounded-full ${c.statusDot}`} />
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}