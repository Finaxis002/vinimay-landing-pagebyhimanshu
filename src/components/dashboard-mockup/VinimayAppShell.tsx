"use client";

import React, { ReactNode } from "react";
import {
  LayoutDashboard,
  Building2,
  ArrowLeftRight,
  Dumbbell,
  UtensilsCrossed,
  Boxes,
  Building,
  Users,
  Search,
  Settings,
  Sun,
  Bell,
  ChevronDown,
  Bot,
  PanelLeft,
  Loader2,
  Sparkles,
} from "lucide-react";

interface VinimayAppShellProps {
  activeTabKey: string;
  companyName?: string;
  isLoading?: boolean;
  isPaused?: boolean;
  onNavigate?: (key: string) => void;
  children: ReactNode;
}

export function VinimayAppShell({
  activeTabKey,
  companyName = "Dhurandhar Fitness",
  isLoading = false,
  isPaused = false,
  onNavigate,
  children,
}: VinimayAppShellProps) {
  // Built modules with their exact icons and keys
  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      key: "companies",
      label: "Companies",
      icon: Building2,
    },
    {
      key: "invoice",
      label: "Transactions",
      icon: ArrowLeftRight,
    },
    {
      key: "attendo",
      label: "Gym & Fitness",
      icon: Dumbbell,
    },
    {
      key: "poss",
      label: "Restaurant & Cafe",
      icon: UtensilsCrossed,
    },
    {
      key: "inventory",
      label: "Inventory",
      icon: Boxes,
    },
    {
      key: "properties",
      label: "Properties",
      icon: Building,
    },
    {
      key: "users",
      label: "Users",
      icon: Users,
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#f8f9fe] text-slate-800 flex overflow-hidden font-sans select-none text-[11px] leading-tight">
      {/* KEYFRAME ANIMATIONS FOR SMOOTH DASHBOARD TRANSITIONS */}
      <style>{`
        @keyframes dashboardScreenEntrance {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.992);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes autoTourFill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-screen-entrance {
          animation: dashboardScreenEntrance 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-tour-progress {
          animation: autoTourFill 4s linear forwards;
        }
      `}</style>

      {/* LEFT SIDEBAR - Persistent & Grounded */}
      <aside className="w-[180px] sm:w-[195px] bg-white border-r border-slate-200/80 flex flex-col justify-between shrink-0 shadow-xs z-10">
        <div className="p-2.5 sm:p-3">
          {/* Logo Header */}
          <div className="flex items-center gap-2 px-1.5 py-1 mb-2.5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6 sm:w-7 sm:h-7">
                <path d="M8 8L20 32L24 24L14 8H8Z" fill="url(#v-grad-1)" />
                <path d="M32 8L20 32L24 24L30 8H32Z" fill="url(#v-grad-2)" />
                <defs>
                  <linearGradient
                    id="v-grad-1"
                    x1="8"
                    y1="8"
                    x2="24"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#38bdf8" />
                    <stop offset="1" stopColor="#7c5cfc" />
                  </linearGradient>
                  <linearGradient
                    id="v-grad-2"
                    x1="32"
                    y1="8"
                    x2="20"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ec4899" />
                    <stop offset="1" stopColor="#7c5cfc" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-extrabold text-[14px] sm:text-[15px] tracking-wide text-[#1e1b4b] uppercase font-sans">
              VINIMAY
            </span>
          </div>

          {/* Navigation Items (Interactive - These navigate the mockup!) */}
          <nav className="space-y-0.5" aria-label="Dashboard Modules">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTabKey === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => onNavigate?.(item.key)}
                  className={`w-full text-left flex items-center justify-between px-2.5 py-1.5 rounded-xl text-[10.5px] sm:text-[11px] font-medium transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-[#7c5cfc] to-[#8d6ffd] text-white shadow-sm shadow-purple-500/25 font-bold scale-[1.02]"
                      : "text-slate-600 hover:bg-purple-50/80 hover:text-[#7c5cfc] hover:translate-x-0.5"
                  }`}
                >
                  <div className="flex items-center gap-2 relative z-10">
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 transition-transform group-hover:scale-110 ${
                        isActive ? "text-white" : "text-slate-400 group-hover:text-[#7c5cfc]"
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </div>

                  {isActive && (
                    <div className="flex items-center gap-1 relative z-10 shrink-0 ml-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs animate-ping absolute" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile Card at Bottom (Decorative Mockup) */}
        <div className="p-2 border-t border-slate-100 bg-white cursor-default">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-50/80 border border-slate-100">
            <div className="w-7 h-7 rounded-full bg-purple-100 text-[#7c5cfc] font-bold text-[10px] flex items-center justify-center shrink-0">
              HI
            </div>
            <div className="truncate text-left leading-tight">
              <div className="font-semibold text-slate-800 text-[10px] truncate">
                Himanshu Dhammeriya
              </div>
              <div className="text-[8.5px] text-slate-400 truncate">
                himan30051999@gmail.com
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP HEADER (Decorative Mockup - Non-clickable header buttons have cursor-default and no hover) */}
        <header className="h-11 sm:h-12 bg-white border-b border-slate-200/80 px-3 sm:px-4 flex items-center justify-between shrink-0 shadow-2xs z-10 relative cursor-default">
          {/* Left: Sidebar toggle, welcome & date */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="text-slate-400 p-1 rounded-md cursor-default">
              <PanelLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="hidden sm:block text-left cursor-default">
              <div className="font-bold text-slate-900 text-[11px] sm:text-[11.5px] leading-tight">
                Welcome back, Himanshu
              </div>
              <div className="text-[9px] text-slate-400">
                Tuesday, November 24, 2026
              </div>
            </div>

            {/* Company Selector Pill */}
            <div className="ml-1 sm:ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-[10px] sm:text-[10.5px] font-medium shadow-2xs cursor-default">
              <Search className="w-3 h-3 text-slate-400" />
              <span className="font-semibold truncate max-w-[110px] sm:max-w-[140px]">
                {companyName}
              </span>
            </div>

            {/* Live Interactive Tour indicator */}
            <div className="hidden xl:flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 text-[#7c5cfc] border border-purple-200/60 text-[9px] font-bold cursor-default">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Interactive Demo</span>
            </div>
          </div>

          {/* Right: Actions, Notifications & Profile (Static Mockup Icons - No Deceptive Hover) */}
          <div className="flex items-center gap-2 sm:gap-2.5 cursor-default">
            <div className="text-slate-400 p-1 rounded-md cursor-default" title="Settings (Preview)">
              <Settings className="w-3.5 h-3.5" />
            </div>
            <div className="text-slate-400 p-1 rounded-md cursor-default" title="Theme (Preview)">
              <Sun className="w-3.5 h-3.5" />
            </div>

            {/* Notifications */}
            <div className="relative cursor-default" title="Notifications (Preview)">
              <div className="text-slate-400 p-1 rounded-md cursor-default">
                <Bell className="w-3.5 h-3.5" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 px-1 py-0.2 rounded-full bg-rose-500 text-white font-extrabold text-[8px] leading-tight">
                9+
              </span>
            </div>

            {/* Language dropdown */}
            <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700 px-1.5 py-0.5 rounded border border-slate-200 cursor-default">
              <span>EN</span>
              <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
            </div>

            {/* Client Profile Pill */}
            <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-200 cursor-default">
              <div className="w-6 h-6 rounded-full bg-purple-100 text-[#7c5cfc] font-bold text-[9px] flex items-center justify-center">
                HI
              </div>
              <div className="hidden lg:block text-left">
                <div className="font-semibold text-slate-800 text-[10px] leading-tight">
                  Himanshu Dhammeriya
                </div>
                <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                  CLIENT
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Animated Auto-Tour Progress Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-100 overflow-hidden">
            <div
              key={activeTabKey}
              className={`h-full bg-gradient-to-r from-[#7c5cfc] via-indigo-500 to-purple-400 ${
                isPaused ? "w-full opacity-0" : "animate-tour-progress"
              }`}
            />
          </div>
        </header>

        {/* ACTIVE SCREEN CONTENT */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 bg-[#f8f9fe] relative cursor-default">
          {/* Top Loading Progress Line */}
          {isLoading && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-[#7c5cfc] to-indigo-600 animate-pulse z-40 shadow-xs" />
          )}

          {/* Animated Screen Container */}
          <div
            key={activeTabKey}
            className={`animate-screen-entrance transition-opacity duration-200 ${
              isLoading
                ? "opacity-50 filter blur-[0.4px] pointer-events-none"
                : "opacity-100 filter blur-0 pointer-events-auto"
            }`}
          >
            {children}
          </div>

          {/* Quick Floating Loading Spinner Badge when Loading */}
          {isLoading && (
            <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-purple-200 text-[#7c5cfc] text-[10px] font-bold shadow-md cursor-default">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Updating...</span>
            </div>
          )}

          {/* Floating AI Chatbot Button (Static Mockup) */}
          <div className="absolute bottom-3 right-3 z-30 cursor-default pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7c5cfc] to-[#9273ff] text-white flex items-center justify-center shadow-lg shadow-purple-600/30 border border-white/20">
              <Bot className="w-4 h-4" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-white" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}