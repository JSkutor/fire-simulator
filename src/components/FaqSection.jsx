import React, { useState } from "react";

export default function FaqSection({ locale }) {
  const { t } = locale;
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default

  if (!t.faqs || t.faqs.length === 0) return null;

  const toggle = (idx) => {
    setOpenIndex((cur) => (cur === idx ? -1 : idx));
  };

  return (
    <section className="space-y-4 pt-2">
      {/* Section Header */}
      <div className="text-center md:text-left space-y-1.5 px-1">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <span>{t.faqSectionBadge}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          {t.faqSectionTitle}
        </h2>
        <p className="text-sm text-slate-500 max-w-2xl">
          {t.faqSectionSubtitle}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-2.5">
        {t.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const contentId = `faq-content-${idx}`;
          const buttonId = `faq-btn-${idx}`;

          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition hover:border-slate-300"
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left font-semibold text-slate-900 transition hover:bg-slate-50/80"
              >
                <span className="text-sm md:text-base flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">
                    Q
                  </span>
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {isOpen && (
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-4 pb-4 md:px-5 md:pb-5 pt-0 text-xs md:text-sm leading-relaxed text-slate-600 border-t border-slate-100 bg-slate-50/40"
                >
                  <div className="pt-3">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
