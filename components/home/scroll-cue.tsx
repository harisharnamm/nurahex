"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ChevronDown } from "lucide-react"

export function ScrollCue() {
  const cueRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cueRef.current) {
      gsap.fromTo(
        cueRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, delay: 1, duration: 0.5 }
      )
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }
  }, [])

  return (
    <div
      ref={cueRef}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <div ref={iconRef}>
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
      <span className="text-xs text-white/50 mt-2">Scroll to explore</span>
    </div>
  )
}
