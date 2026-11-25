"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturePageLayout from "@/components/features/FeaturePageLayout";
import FeatureBannerScreen from "@/components/features/FeatureBannerScreen";
import ArcHeading from "@/components/common/ArcHeading";
import IndustryWorkingMockup from "@/components/industries/IndustryWorkingMockup";
import {
  Package,
  Boxes,
  Receipt,
  Users,
  BarChart3,
  QrCode,
  TrendingUp,
} from "lucide-react";
import { IndustryPageData, WorkflowStepItem } from "@/content/industryPagesData";

/* =========================================================================
   PREVIEW BOX (MATCHING GENERAL STYLE)
   ========================================================================= */

function PreviewBox({
  variant,
  item,
}: {
  variant: WorkflowStepItem["previewVariant"];
  item: WorkflowStepItem;
}) {
  if (variant === "catalog") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-purple-500/40 transition-colors">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-white">{item.badgeTag}</span>
          </div>
          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono font-medium">
            ACTIVE
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[11px]">
          <div>
            <div className="font-bold text-white truncate max-w-[170px]">{item.title}</div>
            <div className="text-[9px] text-white/50 font-mono mt-0.5">Configured &amp; Verified</div>
          </div>
          <div className="text-right font-mono shrink-0">
            <div className="text-emerald-400 text-[10px]">Ready ✓</div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "inventory") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
        <div className="absolute -left-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Boxes className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">{item.badgeTag}</span>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-medium">
            LIVE SYNC
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[10px]">
          <div className="truncate max-w-[170px]">
            <div className="text-white font-medium truncate">{item.title}</div>
            <div className="text-[9px] text-white/50">Auto Status Guard</div>
          </div>
          <div className="text-right font-mono shrink-0">
            <div className="text-emerald-300 font-bold text-xs">Synced ✓</div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "billing") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-indigo-500/40 transition-colors">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Receipt className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-semibold text-white">GST / Tax Invoice</span>
          </div>
          <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono font-medium">
            STATUTORY
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[11px]">
          <div className="truncate max-w-[160px]">
            <div className="font-bold text-white truncate">{item.title}</div>
            <div className="text-[9px] text-white/50 flex items-center gap-1 mt-0.5">
              <span>WhatsApp PDF Attached</span>
              <span className="text-emerald-400">✓</span>
            </div>
          </div>
          <QrCode className="w-6 h-6 text-indigo-300 shrink-0" />
        </div>
      </div>
    );
  }

  if (variant === "parties") {
    return (
      <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/40 transition-colors">
        <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">Party Account</span>
          </div>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-medium">
            BALANCED
          </span>
        </div>

        <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[10px]">
          <div className="truncate max-w-[170px]">
            <div className="text-white font-medium truncate">{item.title}</div>
            <div className="text-[9px] text-white/50">Running Balance Synced</div>
          </div>
          <div className="text-right font-mono shrink-0">
            <div className="text-amber-300 font-bold text-xs">Recorded ✓</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#17141f] rounded-xl border border-white/10 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-teal-500/40 transition-colors">
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />

      <div className="flex items-center justify-between text-[11px] text-white/70">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
          <span className="font-semibold text-white">Reports &amp; Audit</span>
        </div>
        <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono font-medium">
          GSTR READY
        </span>
      </div>

      <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between text-[10px]">
        <div className="truncate max-w-[170px]">
          <div className="text-white font-medium flex items-center gap-1 truncate">
            <span>{item.title}</span>
            <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
          </div>
          <div className="text-[9px] text-white/50">Trial Balance: 100% Match</div>
        </div>
        <div className="text-right font-mono shrink-0">
          <div className="text-teal-300 text-[10px]">JSON Export ✓</div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   REUSABLE INDUSTRY TEMPLATE
   ========================================================================= */

export default function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  const { hero, capabilities, workflow } = data;

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <FeaturePageLayout
          badge={hero.badge}
          title={hero.title}
          lead={hero.lead}
          trustChips={hero.trustChips}
          screenComponent={
            <FeatureBannerScreen
              windowTitle={hero.windowTitle || "Vinimay"}
              windowSubtitle={hero.windowSubtitle}
              badgeCode={hero.badgeCode}
              customerName={hero.customerName}
              customerGstin={hero.customerGstin}
              chips={hero.chips}
            >
              <IndustryWorkingMockup industryId={data.id} />
            </FeatureBannerScreen>
          }
        >
          {/* Section 1: Capabilities Grid (with ArcHeading) */}
          <section className="relative py-20 sm:py-28 md:py-36 bg-white text-slate-900 border-t border-slate-200/70 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Big Centered Headline with ArcHeading */}
              <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 md:mb-24">
                <ArcHeading
                  as="h2"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.28] sm:leading-[1.24]"
                >
                  {capabilities.headline}
                </ArcHeading>
              </div>

              {/* 2-Column Grid with Horizontal Dividers */}
              <div className="border-t border-slate-200/80">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {capabilities.items.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={item.number}
                        className={`py-8 sm:py-10 md:py-12 border-b border-slate-200/80 ${
                          isEven
                            ? "md:pr-8 lg:pr-12 md:border-r md:border-slate-200/80"
                            : "md:pl-8 lg:pl-12"
                        }`}
                      >
                        <div className="flex items-start gap-4 sm:gap-6">
                          <span className="text-xs sm:text-sm font-mono font-medium text-slate-400 select-none pt-1 shrink-0 w-6">
                            {item.number}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2 sm:mb-2.5">
                              {item.title}
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: How It Works / Workflow Steps (with ArcHeading) */}
          <section className="relative py-20 sm:py-28 md:py-36 bg-[#fafafa] text-slate-900 border-t border-slate-200/80 overflow-hidden">
            {/* Background Arc Circles */}
            <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[980px] h-[980px] rounded-full border border-slate-200/60 pointer-events-none opacity-60" />
            <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[720px] h-[720px] rounded-full border border-dashed border-slate-300/40 pointer-events-none opacity-40" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
              {/* Section Header with ArcHeading */}
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <ArcHeading
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
                >
                  {`${workflow.titlePrefix} ${workflow.handwrittenScript} ${workflow.titleSuffix}`.trim()}
                </ArcHeading>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mx-auto">
                  {workflow.subtitle}
                </p>
              </div>

              {/* Stacked Cards Container */}
              <div className="rounded-3xl border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden divide-y divide-slate-200/80">
                {workflow.steps.map((step) => (
                  <div
                    key={step.id}
                    className="group p-6 sm:p-8 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-slate-50/60 transition-colors"
                  >
                    {/* Left Column: Metadata, Title, Category */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                          {step.badgeTime}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                          {step.badgeTag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#6B62D2] transition-colors mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        {step.category}
                      </p>
                    </div>

                    {/* Right Column: Visual Preview Box */}
                    <div className="w-full md:w-[280px] lg:w-[320px] h-[135px] shrink-0">
                      <PreviewBox variant={step.previewVariant} item={step} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FeaturePageLayout>
      </main>

      <Footer />
    </>
  );
}
