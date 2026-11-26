"use client";

import React, { useState } from "react";
import { Plus, X, ArrowRight, HelpCircle } from "lucide-react";
import ArcHeading from "@/components/common/ArcHeading";

export interface IndustryFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface IndustryFaqSectionProps {
  industryTitle: string;
  badge?: string;
  headline?: string;
  subtitle?: string;
  items: IndustryFaqItem[];
}

export default function IndustryFaqSection({
  industryTitle,
  badge = "Help Center • FAQ",
  headline = "Frequently Asked Questions",
  subtitle,
  items,
}: IndustryFaqSectionProps) {
  // First item open by default for helpful immediate guidance
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({
    1: true,
  });

  const toggleItem = (id: number) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const defaultSubtitle = `Everything you need to know about ${industryTitle} billing, statutory tax compliance, and workflow management in Vinimay.`;

  return (
    <section className="relative py-20 sm:py-28 md:py-32 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-[11px] font-extrabold uppercase tracking-widest text-purple-700 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <div>
            <ArcHeading
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
            >
              {headline}
            </ArcHeading>
          </div>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* Accordion Cards Container */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {items.map((item) => {
            const isOpen = Boolean(openMap[item.id]);
            return (
              <div
                key={item.id}
                className="faq-item bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-300 hover:border-purple-200"
              >
                <button
                  type="button"
                  aria-label="Toggle FAQ answer"
                  onClick={() => toggleItem(item.id)}
                  className="faq-btn w-full px-6 py-4.5 sm:py-5 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-purple-600 transition-colors pr-3">
                    {item.question}
                  </span>
                  <div className="faq-icon-box w-7 h-7 rounded-full bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center text-purple-600 transition-colors shrink-0">
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer px-6 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3.5 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA Card */}
        <div className="mt-14 max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs text-center">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
            Have a question specific to your {industryTitle} operations?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-md mx-auto">
            Our support team can help you configure statutory tax rates, custom print formats, and hardware terminals for your shop or office.
          </p>
          <a
            href={`https://wa.me/919999999999?text=Hi%20Vinimay%20team,%20I%20have%20a%20query%20about%20billing%20for%20${encodeURIComponent(
              industryTitle
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm cursor-pointer"
          >
            <span>Ask our team on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
