"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Logo } from "@/components/shared/logo"

export function LoadingOverlay({ onFinish }: { onFinish: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: "none",
          onComplete: onFinish,
        })
      },
    })
    tl.to(logoRef.current, { scale: 1.2, duration: 0.8, ease: "power2.out" })
      .to(progressRef.current, { width: "100%", duration: 1.5, ease: "power1.inOut" }, "<")
      .to(logoRef.current, { scale: 1, duration: 0.3, ease: "power2.inOut" }, "-=0.5")
  }, [onFinish])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-bg-dark transition-opacity duration-500"
      style={{ pointerEvents: "auto" }}
    >
      <div ref={logoRef} className="loading-logo mb-8 scale-100 transition-transform duration-300">
        <Logo />
      </div>
      <div className="w-64 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="loading-progress h-full bg-primary-800 dark:bg-primary rounded-full"
          style={{ width: 0 }}
        />
      </div>
    </div>
  )
}
