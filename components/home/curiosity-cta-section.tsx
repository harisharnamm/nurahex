"use client";

import { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/shared/primary-button";
import { useRouter } from "next/navigation";
import gsap from "gsap";

export function CuriosityCTASection() {
  const container = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!container.current) return;
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );
    setEntered(true);
  }, []);

  return (
    <section
      ref={container}
      className="relative overflow-hidden py-24 text-center text-gray-900 isolate bg-gradient-to-br from-gray-50 to-white"
    >
      {/* ––––– Background layers ––––– */}
      {/* aurora ribbons */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-[120%] bg-[conic-gradient(at_top_right,_theme(colors.primary)_15%,_theme(colors.primary)_45%,_theme(colors.accent.400)_70%)] opacity-30 blur-3xl animate-slide-aurora" />
      {/* noise texture */}
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-5 mix-blend-soft-light" />
      {/* grid overlay - more visible */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:36px_36px]" />
      
      {/* ––––– Content card ––––– */}
      <div className="mx-auto max-w-5xl px-6 transition-[opacity,transform] duration-700">
        <div className="relative overflow-hidden rounded-[2rem] p-[1px] bg-gradient-to-br from-primary/30 via-primary-700/30 to-gray-200/30 shadow-2xl shadow-black/10">
          <div className="relative rounded-[1.875rem] bg-white/80 backdrop-blur-md backdrop-saturate-150 overflow-hidden border border-gray-200/50">
            {/* decorative top glow */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-700/40 to-transparent" />
            
            <div className="px-10 py-12 md:px-16 md:py-16">
              {/* logo icon */}
                <div className="mx-auto mb-10 w-24 h-24 rounded-3xl grid place-content-center bg-gradient-to-br from-primary-700 to-primary shadow-lg shadow-primary-700/25">
                <div className="relative">
                  <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                  >
                  {/* Brain/AI core */}
                  <path
                    d="M12 3C8.5 3 6 5.5 6 9c0 2 1 3.5 2.5 4.5C7.5 14.5 6 16 6 18c0 1.5 1.5 3 3.5 3h5c2 0 3.5-1.5 3.5-3 0-2-1.5-3.5-2.5-4.5C17 12.5 18 11 18 9c0-3.5-2.5-6-6-6z"
                    fill="currentColor"
                    className="animate-pulse"
                    style={{ animationDuration: '2s' }}
                  />
                  {/* Neural connections */}
                  <circle
                    cx="8"
                    cy="8"
                    r="1.5"
                    fill="currentColor"
                    className="animate-ping"
                    style={{ animationDelay: '0.5s', animationDuration: '3s' }}
                  />
                  <circle
                    cx="16"
                    cy="8"
                    r="1.5"
                    fill="currentColor"
                    className="animate-ping"
                    style={{ animationDelay: '1s', animationDuration: '3s' }}
                  />
                  <circle
                    cx="12"
                    cy="16"
                    r="1"
                    fill="currentColor"
                    className="animate-bounce"
                    style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}
                  />
                  {/* Curiosity spark */}
                  <path
                    d="M12 1L12.5 3L14 3.5L12.5 4L12 6L11.5 4L10 3.5L11.5 3L12 1Z"
                    fill="currentColor"
                    className="animate-spin"
                    style={{ animationDuration: '4s' }}
                  />
                  </svg>
                </div>
                </div>

              {/* headline */}
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Curious what <span className="text-primary-800 dark:text-primary-700">AI</span> can{" "}
                <span className="block bg-gradient-to-r from-primary-800 via-primary-800 to-primary-800 dark:from-primary-700 dark:via-primary dark:to-primary-700 bg-clip-text text-transparent">
                  actually do for you?
                </span>
              </h2>

              {/* body copy */}
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Most teams still think in proofs‑of‑concept. We've already shipped production automations that slash costs & unlock new revenue. The fastest way to see what's possible is a 15‑minute chat.
              </p>

              {/* primary CTA */}
              <div className="mt-10 flex justify-center">
                <PrimaryButton
                  className="relative inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-lg font-semibold transition-transform duration-300 hover:scale-105"
                  onClick={() => router.push("/contact")}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Book 15-minute discovery call
                </PrimaryButton>
              </div>

              {/* trust badge */}
              <div className="mx-auto mt-8 flex w-max items-center gap-3 rounded-full bg-gray-100/80 px-5 py-2 text-sm text-gray-700 ring-1 ring-gray-200/50 backdrop-blur-sm">
                <span className="inline-block h-2 w-2 animate-ping rounded-full bg-primary-700" />
                <span>No hard sell – just insights</span>
              </div>

              {/* stats */}
              <div className="mt-12 grid grid-cols-1 gap-8 border-t border-gray-200/50 pt-8 md:grid-cols-3">
                {[
                  { label: "Discovery call", value: "30 min" },
                  { label: "Sales pressure", value: "Zero" },
                  { label: "Value focus", value: "100%" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary-800 dark:text-primary-700">{s.value}</span>
                    <span className="mt-1 text-sm text-gray-500">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS keyframes */}
      <style jsx>{`
        @keyframes slide-aurora {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-10%);
          }
        }
        .animate-slide-aurora {
          animation: slide-aurora 14s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}
