"use client"

import React from "react";
import clsx from "clsx";

const CARDS = [
  {
    title: "Revolutionary AI Solutions",
    keywords: ["AI", "Innovation", "Transformation"],
    supporting: "We don't just implement AI – we revolutionise how your business operates.",
  },
  {
    title: "Lightning Fast Deployment",
    keywords: ["Speed", "Agility", "Weeks not Months"],
    supporting: "From concept to production in weeks, not months.",
  },
  {
    title: "Measurable Results",
    keywords: ["ROI", "Enterprise Scale", "Proven"],
    supporting: "Proven ROI with enterprise scale solutions that scale.",
  },
];

export default function WhyNurahexSection({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        "w-full max-w-2xl mx-auto flex flex-col items-center py-20 md:py-24",
        className
      )}
      aria-labelledby="why-nurahex-title"
    >
      <h2
        id="why-nurahex-title"
        className="text-3xl md:text-4xl font-space-grotesk font-bold text-surface-50 mb-10 tracking-tight text-center"
      >
        Why NurahexAI?
      </h2>
      <div className="flex flex-col gap-8 w-full">
        {CARDS.map((card, idx) => (
          <div
            key={card.title}
            tabIndex={0}
            className={clsx(
              "group relative bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-3xl p-8 flex flex-col items-center justify-center min-h-[220px] shadow-xl backdrop-blur-md transition-all duration-300 outline-none focus:ring-2 focus:ring-primary-700",
              "hover:scale-[1.025] hover:shadow-2xl focus:scale-[1.025]",
              "cursor-pointer"
            )}
            aria-labelledby={`card-title-${idx}`}
            aria-describedby={`card-supporting-${idx}`}
          >
            <h3
              id={`card-title-${idx}`}
              className="font-space-grotesk text-2xl md:text-3xl font-bold text-primary-700 mb-4 text-center drop-shadow"
            >
              {card.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {card.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full bg-primary-900/10 border border-primary-700/30 text-primary-700 text-xs font-semibold tracking-wide shadow-sm"
                >
                  {kw}
                </span>
              ))}
            </div>
            {/* Supporting text appears on hover/focus */}
            <div
              id={`card-supporting-${idx}`}
              className="absolute left-0 right-0 bottom-6 px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-300 text-center pointer-events-none"
            >
              <span className="block text-surface-50/90 text-base font-inter font-medium bg-surface-900/80 rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm">
                {card.supporting}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
