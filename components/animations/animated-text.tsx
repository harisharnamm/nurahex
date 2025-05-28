"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  trigger?: string
  animation?: "slideUp" | "slideIn" | "fadeIn" | "splitWords" | "typewriter"
}

export function AnimatedText({ 
  children, 
  className = "", 
  delay = 1.0, // Increased default delay (was 0.5)
  stagger = 0.15, // Increased default stagger (was 0.1)
  trigger = "top 80%",
  animation = "slideUp"
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current
    const text = element.innerText
    
    // Split text into words for animation
    if (animation === "splitWords" || animation === "typewriter") {
      element.innerHTML = text
        .split(" ")
        .map(word => `<span class="word">${word}</span>`)
        .join(" ")
    }

    const words = element.querySelectorAll(".word")
    
    // Set initial state
    switch (animation) {
      case "slideUp":
        gsap.set(element, { opacity: 0, y: 50 })
        break
      case "slideIn":
        gsap.set(element, { opacity: 0, x: -50 })
        break
      case "fadeIn":
        gsap.set(element, { opacity: 0 })
        break
      case "splitWords":
        gsap.set(words, { opacity: 0, y: 20 })
        break
      case "typewriter":
        gsap.set(words, { opacity: 0 })
        break
    }

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: "play none none reverse"
      }
    })

    switch (animation) {
      case "slideUp":
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration: 2.0, // Slower (was 1.5)
          delay,
          ease: "power2.out"
        })
        break
      case "slideIn":
        tl.to(element, {
          opacity: 1,
          x: 0,
          duration: 2.0, // Slower (was 1.5)
          delay,
          ease: "power2.out"
        })
        break
      case "fadeIn":
        tl.to(element, {
          opacity: 1,
          duration: 1.8, // Slower (was 1.2)
          delay,
          ease: "power2.out"
        })
        break
      case "splitWords":
        tl.to(words, {
          opacity: 1,
          y: 0,
          duration: 1.4, // Slower (was 1.0)
          stagger,
          delay,
          ease: "power2.out"
        })
        break
      case "typewriter":
        tl.to(words, {
          opacity: 1,
          duration: 0.3, // Slightly slower (was 0.2)
          stagger: 0.3, // Slower stagger (was 0.2)
          delay,
          ease: "none"
        })
        break
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, delay, stagger, trigger])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}
