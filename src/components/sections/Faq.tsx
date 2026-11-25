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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Column: "Need More Help?" Card */}
        <div className="hidden sm:block lg:col-span-5 bg-gradient-to-br from-purple-50/90 via-indigo-50/60 to-pink-50/70 p-6 md:p-8 rounded-3xl border border-purple-100/90 shadow-sm backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
              <HelpCircle className="w-6 h-6" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Team Online Now
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-1">Need More Help?</h3>
          <p className="text-xs font-semibold text-purple-700 mb-3">We&apos;re here to assist you 24/7</p>

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
            Can&apos;t find the answer you&apos;re looking for? Ask us directly and our technical team will respond to your
            WhatsApp promptly.
          </p>

          {/* Quick Suggestions */}
          <div className="space-y-1.5 mb-5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Suggested Topics:</div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setQuestionText("How does recipe stock deduction work?")}
                className="text-[11px] bg-white hover:bg-purple-100/80 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
              >
                Recipe Deduction
              </button>
              <button
                type="button"
                onClick={() => setQuestionText("Can my CA export GSTR-1 directly?")}
                className="text-[11px] bg-white hover:bg-purple-100/80 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
              >
                GSTR-1 CA Export
              </button>
            </div>
          </div>

          {/* Ask Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="faq-textarea" className="block text-xs font-bold text-slate-700 mb-2">
                Ask Your Question
              </label>
              <textarea
                id="faq-textarea"
                aria-label="Ask your question"
                rows={4}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Type your question here..."
                required
                className="w-full bg-white border border-slate-200/90 rounded-2xl p-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all resize-none shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={isSent}
              className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold text-sm py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>{isSent ? "Sending..." : "Send Now"}</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Right Column: Accordion List */}
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
