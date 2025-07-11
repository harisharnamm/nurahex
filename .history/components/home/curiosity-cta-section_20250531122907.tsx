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
      className="relative overflow-hidden py-24 text-center text-surface-50 isolate bg-surface-700"
    >
      {/* ––––– Background layers ––––– */}
      {/* aurora ribbons */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-[120%] bg-[conic-gradient(at_top_right,_theme(colors.primary)_20%,_theme(colors.primary)_55%,_theme(colors.surface.600)_80%)] opacity-20 blur-3xl animate-slide-aurora" />
      {/* noise texture */}
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light" />
      {/* grid overlay - more visible */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.12)_1px,transparent_0)] [background-size:36px_36px]" />
      
      {/* ––––– Content card ––––– */}
      <div className="mx-auto max-w-5xl px-6 transition-[opacity,transform] duration-700">
        <div className="relative overflow-hidden rounded-[2rem] p-[1px] bg-gradient-to-br from-primary/40 via-primary-700/40 to-surface-600/40 shadow-2xl shadow-black/40">
          <div className="relative rounded-[1.875rem] bg-surface-900/70 backdrop-blur-md backdrop-saturate-150 overflow-hidden">
            {/* decorative top glow */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-700/60 to-transparent" />
            
            <div className="px-10 py-12 md:px-16 md:py-16">
              {/* logo icon */}
              <div className="mx-auto mb-10 w-24 h-24 rounded-3xl grid place-content-center bg-gradient-to-br from-primary-700 to-primary shadow-lg shadow-primary-700/25">
                <div className="relative">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white animate-pulse"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                      className="animate-spin"
                      style={{ animationDuration: '3s' }}
                    />
                    <path
                      d="M19 12L20.09 15.26L24 16L20.09 16.74L19 20L17.91 16.74L14 16L17.91 15.26L19 12Z"
                      fill="currentColor"
                      className="animate-ping"
                      style={{ animationDelay: '0.5s' }}
                    />
                    <path
                      d="M5 4L5.54 6.26L8 6.5L5.54 6.74L5 9L4.46 6.74L2 6.5L4.46 6.26L5 4Z"
                      fill="currentColor"
                      className="animate-bounce"
                      style={{ animationDelay: '1s', animationDuration: '2s' }}
                    />
                  </svg>
                </div>
              </div>

              {/* headline */}
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Curious what <span className="text-primary-700">AI</span> can{" "}
                <span className="block bg-gradient-to-r from-primary-700 via-primary to-primary-700 bg-clip-text text-transparent">
                  actually do for you?
                </span>
              </h2>

              {/* body copy */}
              <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-50/80">
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
              <div className="mx-auto mt-8 flex w-max items-center gap-3 rounded-full bg-surface-800/60 px-5 py-2 text-sm text-surface-50/80 ring-1 ring-white/10 backdrop-blur-sm">
                <span className="inline-block h-2 w-2 animate-ping rounded-full bg-primary-700" />
                <span>No hard sell – just insights</span>
              </div>

              {/* stats */}
              <div className="mt-12 grid grid-cols-1 gap-8 border-t border-surface-600/40 pt-8 md:grid-cols-3">
                {[
                  { label: "Discovery call", value: "15 min" },
                  { label: "Sales pressure", value: "Zero" },
                  { label: "Value focus", value: "100%" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary-700">{s.value}</span>
                    <span className="mt-1 text-sm text-surface-50/60">{s.label}</span>
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
