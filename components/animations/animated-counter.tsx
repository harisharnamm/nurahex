"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  trigger?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  className = "",
  trigger = "top 80%"
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!counterRef.current) return

    const element = counterRef.current
    const countObj = { value: 0 }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(countObj, {
            value: end,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              setCount(Math.round(countObj.value))
            }
          })
        },
        onLeaveBack: () => {
          setCount(0)
        }
      }
    })

    // Scale animation for emphasis
    tl.fromTo(element, 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [end, duration, trigger])

  return (
    <span ref={counterRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
