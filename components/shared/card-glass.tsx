"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"

interface CardGlassProps {
  children: React.ReactNode
  className?: string
}

export function CardGlass({ children, className }: CardGlassProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onEnter = () => {
      gsap.to(card, {
        y: -4,
        boxShadow: "var(--shadow-primary)",
        duration: 0.2,
      })
    }
    const onLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "none",
        duration: 0.2,
      })
    }
    card.addEventListener("mouseenter", onEnter)
    card.addEventListener("mouseleave", onLeave)
    return () => {
      card.removeEventListener("mouseenter", onEnter)
      card.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg p-6 transition-all duration-200",
        className,
      )}
    >
      {children}
    </div>
  )
}
