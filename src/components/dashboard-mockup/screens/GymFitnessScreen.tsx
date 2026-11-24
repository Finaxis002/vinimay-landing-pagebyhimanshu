"use client";

import React from "react";
import {
  TrendingUp,
  QrCode,
  Users,
  Award,
  CalendarCheck,
  Settings,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  PauseCircle,
  Clock,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function GymFitnessScreen() {
  const barHeights = [
    8, 12, 14, 18, 12, 14, 16, 22, 48, 32, 90, 28, 92, 54, 52, 26, 10, 12, 18,
    14, 10,
  ];

  return (
    <div className="space-y-3 text-slate-800 text-left cursor-default select-none">
      {/* Sub Tabs (Mockup Display) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none cursor-default">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#7c5cfc] font-bold text-[11px] shadow-2xs border border-purple-200/80 cursor-default">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Overview</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-400 text-[11px] font-medium cursor-default">
          <QrCode className="w-3.5 h-3.5" />
          <span>Front Desk</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-400 text-[11px] font-medium cursor-default">
          <Users className="w-3.5 h-3.5" />
          <span>Members</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-400 text-[11px] font-medium cursor-default">
          <Award className="w-3.5 h-3.5" />
          <span>Trainers</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-400 text-[11px] font-medium cursor-default">
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Attendance List</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-400 text-[11px] font-medium cursor-default">
          <Settings className="w-3.5 h-3.5" />
          <span>Gym Settings</span>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {/* Active Members */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[10px] font-bold tracking-wider text-purple-700 uppercase block">
              Active Members
            </span>
            <b className="text-xl font-extrabold text-slate-900 leading-none mt-1 block">
              11
            </b>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              Access Granted
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <UserCheck className="w-4 h-4" />
          </div>
        </div>

        {/* Today's Check-ins */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[10px] font-bold tracking-wider text-purple-700 uppercase block">
              Today&apos;s Check-Ins
            </span>
            <b className="text-xl font-extrabold text-slate-900 leading-none mt-1 block">
              0
            </b>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              Today&apos;s Attendance
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>

        {/* Expiring Soon */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[10px] font-bold tracking-wider text-purple-700 uppercase block">
              Expiring Soon
            </span>
            <b className="text-xl font-extrabold text-slate-900 leading-none mt-1 block">
              4
            </b>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              Expiring Soon
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
            <AlertTriangle className="w-4 h-4" />
          </div>
        </div>

        {/* Frozen */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-default">
          <div>
            <span className="text-[10px] font-bold tracking-wider text-purple-700 uppercase block">
              Frozen
            </span>
            <b className="text-xl font-extrabold text-slate-900 leading-none mt-1 block">
              0
            </b>
            <span className="text-[9.5px] text-slate-400 mt-1 block">
              Frozen
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
            <PauseCircle className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Two Column Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-3">
        {/* Left Column: Peak Footfall Hours */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3.5 sm:p-4 flex flex-col justify-between cursor-default">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-xs sm:text-[13px]">
                  Peak Footfall Hours (Past 30 Days)
                </h3>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Hourly member admissions distribution for equipment and staffing planning.
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-purple-50 text-[#7c5cfc] flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bar Graph Simulation */}
            <div className="mt-6 mb-2 flex items-end justify-between gap-1.5 h-28 px-2 border-b border-slate-100 pb-1">
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center justify-end h-full"
                >
                  <div
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-t-sm ${
                      h > 70
                        ? "bg-[#7c5cfc] shadow-xs"
                        : h > 30
                        ? "bg-[#9d84fd]"
                        : "bg-[#c4b5fd]/80"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Time Span Labels */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 font-semibold pt-1">
            <span>Morning (6 AM - 11 AM)</span>
            <span>Afternoon (12 PM - 4 PM)</span>
            <span>Evening (5 PM - 10 PM)</span>
          </div>
        </div>

        {/* Right Column: Live Check-In Activity */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3.5 sm:p-4 flex flex-col justify-between cursor-default">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-900 text-xs sm:text-[13px]">
                Live Check-In Activity
              </h3>
              <span className="px-2 py-0.5 rounded-md bg-purple-50 text-[#7c5cfc] font-bold text-[9px] uppercase tracking-wider">
                TODAY
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Recent access attempts at front desk.
            </p>

            {/* Empty State */}
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10.5px] text-slate-400 font-medium">
                No visits recorded yet today
              </span>
            </div>
          </div>

          {/* Bottom link (Mockup visual) */}
          <div className="w-full pt-2 border-t border-slate-100 text-center font-bold text-[11px] text-[#7c5cfc]/80 flex items-center justify-center gap-1 cursor-default">
            <span>Open Full Attendance Terminal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}