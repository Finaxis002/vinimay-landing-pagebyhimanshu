"use client";

import React from "react";
import {
  Users,
  Plus,
  LayoutGrid,
  Table as TableIcon,
  Link as LinkIcon,
  Copy,
  Phone,
  Mail,
  MapPin,
  Building,
} from "lucide-react";

export function UsersScreen() {
  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            Users
          </h2>
          <p className="text-[10.5px] text-slate-400 mt-0.5">
            Manage user accounts, company assignments, and access control from one place.
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="px-2 py-0.5 rounded-full bg-purple-100/70 text-[#7c5cfc] font-bold text-[10px]">
              1 total users
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white border border-purple-200 text-purple-700 font-semibold text-[10px]">
              10 companies linked
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle (Mockup display) */}
          <div className="flex items-center gap-1 bg-slate-50 p-0.5 rounded-xl border border-slate-200 text-[10.5px]">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white shadow-2xs font-bold text-[#7c5cfc] cursor-default">
              <LayoutGrid className="w-3 h-3" />
              <span>Cards</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 text-slate-400 cursor-default">
              <TableIcon className="w-3 h-3" />
              <span>Table</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c5cfc] text-white font-bold text-[11px] shadow-sm shadow-purple-600/25 cursor-default">
            <Plus className="w-3.5 h-3.5" />
            <span>Add User</span>
          </div>
        </div>
      </div>

      {/* User Login URL Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-default">
        <div className="flex items-center gap-2 flex-1">
          <div className="w-7 h-7 rounded-xl bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
            <LinkIcon className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold text-slate-800 block">
              User Login URL
            </span>
            <span className="text-[9.5px] font-mono text-slate-400 block truncate">
              https://vinimay-testing.sharda.co.in/user-login
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-[10.5px] shadow-2xs self-start sm:self-auto cursor-default">
          <Copy className="w-3 h-3 text-slate-400" />
          <span>Copy URL</span>
        </div>
      </div>

      {/* Sub Tabs Bar (Mockup display) */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 cursor-default">
        <div className="flex items-center gap-1.5">
          <div className="px-3 py-1 rounded-xl bg-purple-100/70 text-[#7c5cfc] font-bold text-[11px] shadow-2xs cursor-default">
            All Users (1)
          </div>
          <div className="px-3 py-1 rounded-xl text-slate-400 text-[11px] font-medium cursor-default">
            Admins (0)
          </div>
        </div>
        <span className="text-[10px] text-slate-400 font-medium">1 shown</span>
      </div>

      {/* User Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-3.5 space-y-3 cursor-default">
        {/* User Identity */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-purple-100 text-[#7c5cfc] font-bold text-xs flex items-center justify-center shrink-0 border border-purple-200/60">
              UM
            </div>
            <div>
              <b className="text-[12px] font-bold text-slate-900 block leading-tight">
                Umesh
              </b>
              <span className="text-[9.5px] text-slate-400 font-mono">
                ID: umesh_user
              </span>
            </div>
          </div>

          <span className="px-2 py-0.5 rounded-full bg-purple-50 text-[#7c5cfc] font-bold text-[9.5px] flex items-center gap-1 border border-purple-100">
            <Users className="w-2.5 h-2.5" />
            <span>User</span>
          </span>
        </div>

        {/* Contact details */}
        <div className="space-y-1.5 text-[9.5px]">
          <span className="text-slate-400 uppercase font-bold text-[8px] block">
            CONTACT
          </span>
          <div className="flex items-center gap-2 text-slate-700 font-mono">
            <Phone className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>+918888888888</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Mail className="w-3 h-3 shrink-0" />
            <span>No email added</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-3 h-3 shrink-0" />
            <span>No address added</span>
          </div>
        </div>

        {/* Assigned Companies */}
        <div className="pt-2 border-t border-slate-100 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 uppercase font-bold text-[8px]">
              COMPANIES
            </span>
            <span className="w-4 h-4 rounded-full bg-purple-100 text-[#7c5cfc] font-bold text-[8.5px] flex items-center justify-center">
              3
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap text-[9px]">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 text-[#7c5cfc] font-semibold border border-purple-100">
              <Building className="w-2.5 h-2.5" />
              Umesh&apos;S Place
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 text-[#7c5cfc] font-semibold border border-purple-100">
              <Building className="w-2.5 h-2.5" />
              Fitness Freak GYM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}