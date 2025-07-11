"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { useMotion } from "./motion-provider"

interface CounterAnimationProps {
  start?: number
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
  trigger?: string
}

export function CounterAnimation({
  start = 0,
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  trigger,
}: CounterAnimationProps) {
  const counterRef = useRef<HTMLSpanElement | null>(null)
  const { reduceMotion } = useMotion()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [displayValue, setDisplayValue] = useState(start)

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return
    let observer: IntersectionObserver | null = null
    let tween: gsap.core.Tween | null = null
    const animate = () => {
      const obj = { val: start }
      tween = gsap.fromTo(
        obj,
        { val: start },
        {
          val: end,
          duration: reduceMotion ? 0.1 : duration,
          onUpdate: () => setDisplayValue(obj.val),
          onComplete: () => setHasAnimated(true),
          ease: "power1.out"
        }
      )
    }
    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer && observer.disconnect()
        }
      },
      { rootMargin: "-100px" }
    )
    observer.observe(counterRef.current)
    return () => {
      observer && observer.disconnect()
      tween && tween.kill()
    }
  }, [start, end, duration, reduceMotion, hasAnimated])

  // Show final value immediately if motion is reduced
  useEffect(() => {
    if (reduceMotion) {
      setDisplayValue(end)
      setHasAnimated(true)
    }
  }, [reduceMotion, end])

  return (
    <span ref={counterRef} className={className}>
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  )
}
