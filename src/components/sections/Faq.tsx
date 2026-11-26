"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, X, Send } from "lucide-react";
import { FAQ_ITEMS } from "@/content/faq";
import ArcHeading from "@/components/common/ArcHeading";

export default function Faq() {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({
    1: true,
  });
  const [questionText, setQuestionText] = useState("");
  const [isSent, setIsSent] = useState(false);

  const toggleItem = (id: number) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      alert("Thank you! Your inquiry has been received. Our team will message you on WhatsApp.");
      setQuestionText("");
      setIsSent(false);
    }, 400);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-[11px] font-extrabold uppercase tracking-widest text-purple-700 mb-4">
          <span>Help Center</span>
        </div>
        <div>
          <ArcHeading
            as="h2"
            className="text-5xl sm:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-tight mb-4 select-none font-bold"
          >
            Frequently Asked Questions
          </ArcHeading>
        </div>
        <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
          Find answers to common questions about Vinimay&apos;s features, offline syncing, and zero-cost model.
        </p>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
      


        <div className="lg:col-span-7 space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = Boolean(openMap[item.id]);
            return (
              <div
                key={item.id}
                className="faq-item bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  aria-label="Toggle FAQ answer"
                  onClick={() => toggleItem(item.id)}
                  className="faq-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-bold text-slate-900 text-sm md:text-base group-hover:text-purple-600 transition-colors pr-3">
                    {item.question}
                  </span>
                  <div className="faq-icon-box w-7 h-7 rounded-full bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center text-purple-600 transition-colors shrink-0">
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="faq-answer px-6 pb-5 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
       
      </div>
    </section>
  );
}
