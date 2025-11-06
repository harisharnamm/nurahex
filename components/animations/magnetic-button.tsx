"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  disabled?: boolean
}

export function MagneticButton({ 
  children, 
  className = "", 
  strength = 0.3,
  disabled = false 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!buttonRef.current || disabled) return

    const button = buttonRef.current
    const buttonRect = button.getBoundingClientRect()

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      })
    }

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeaveScale = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)
    button.addEventListener("mouseenter", handleMouseEnter)
    button.addEventListener("mouseleave", handleMouseLeaveScale)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
      button.removeEventListener("mouseenter", handleMouseEnter)
      button.removeEventListener("mouseleave", handleMouseLeaveScale)
    }
  }, [strength, disabled])

  return (
    <div ref={buttonRef} className={className} style={{ display: "inline-block" }}>
      {children}
    </div>
  )
}
