"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollParticleSystemProps {
  particleCount?: number
  colors?: string[]
  maxSize?: number
  minSize?: number
  intensity?: number
  zones?: "hero" | "full" | "section"
  className?: string
}

export function ScrollParticleSystem({
  particleCount = 30,
  colors = ["#D7FF1E", "#9FF4F0"],
  maxSize = 6,
  minSize = 2,
  intensity = 1,
  zones = "full",
  className = ""
}: ScrollParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particleRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Generate particles based on zone
    const getZoneConstraints = () => {
      switch (zones) {
        case "hero":
          return {
            xRange: window.innerWidth,
            yRange: window.innerHeight,
            startY: 0
          }
        case "section":
          return {
            xRange: window.innerWidth * 0.8,
            yRange: window.innerHeight * 0.6,
            startY: window.innerHeight * 0.2
          }
        default:
          return {
            xRange: window.innerWidth,
            yRange: window.innerHeight * 2,
            startY: 0
          }
      }
    }

    const constraints = getZoneConstraints()
    
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * constraints.xRange,
      y: constraints.startY + Math.random() * constraints.yRange,
      size: Math.random() * (maxSize - minSize) + minSize,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 100 + 50,
      phase: Math.random() * Math.PI * 2,
    }))

    // Create DOM elements for particles
    particles.forEach((particle, i) => {
      const element = document.createElement('div')
      element.className = `fixed rounded-full pointer-events-none transition-all duration-300 ${className}`
      element.style.width = `${particle.size}px`
      element.style.height = `${particle.size}px`
      element.style.backgroundColor = particle.color
      element.style.opacity = '0'
      element.style.left = `${particle.x}px`
      element.style.top = `${particle.y}px`
      element.style.filter = 'blur(1px)'
      element.style.willChange = 'transform, opacity'
      element.style.zIndex = '5'
      element.style.borderRadius = '50%'
      element.style.boxShadow = `0 0 ${particle.size * 2}px ${particle.color}40`
      
      if (containerRef.current) {
        containerRef.current.appendChild(element)
        particleRefs.current[i] = element
      }
    })

    // Enhanced scroll-triggered animations
    const scrollTrigger = ScrollTrigger.create({
      trigger: zones === "hero" ? ".hero-section" : document.body,
      start: "top top",
      end: zones === "hero" ? "bottom top" : "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        const velocity = self.getVelocity() / -300 // Normalize velocity
        
        particleRefs.current.forEach((element, i) => {
          if (!element) return
          
          const particle = particles[i]
          const scrollOffset = progress * window.innerHeight * 3
          const velocityInfluence = Math.abs(velocity) * 0.1
          
          // Complex movement patterns
          const waveX = Math.sin(scrollOffset * particle.speed + particle.phase) * particle.amplitude
          const waveY = Math.cos(scrollOffset * particle.speed * 0.7 + particle.phase) * (particle.amplitude * 0.3)
          
          const newX = particle.x + waveX + (velocity * particle.speed * 0.5)
          const newY = particle.y + scrollOffset * particle.speed + waveY
          
          // Dynamic opacity based on scroll position and velocity
          const baseOpacity = Math.sin(progress * Math.PI) * 0.8
          const velocityOpacity = Math.min(velocityInfluence, 0.3)
          const finalOpacity = (baseOpacity + velocityOpacity) * intensity
          
          // Scale effects based on scroll velocity
          const baseScale = 1 + progress * 0.3
          const velocityScale = 1 + velocityInfluence
          const finalScale = baseScale * velocityScale
          
          gsap.set(element, {
            x: newX,
            y: newY,
            opacity: Math.max(0, Math.min(1, finalOpacity)),
            scale: finalScale,
            rotation: progress * 180 + velocity * 2,
          })
        })
      },
      onEnter: () => {
        // Entrance animation
        particleRefs.current.forEach((element, i) => {
          if (!element) return
          gsap.fromTo(element, 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 0.6, duration: 1, delay: i * 0.05, ease: "back.out(1.7)" }
          )
        })
      },
      onLeave: () => {
        // Exit animation
        particleRefs.current.forEach((element) => {
          if (!element) return
          gsap.to(element, { scale: 0, opacity: 0, duration: 0.5 })
        })
      }
    })

    // Mouse interaction for additional interactivity
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      particleRefs.current.forEach((element, i) => {
        if (!element) return
        
        const rect = element.getBoundingClientRect()
        const elementX = rect.left + rect.width / 2
        const elementY = rect.top + rect.height / 2
        
        const distance = Math.sqrt(
          Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2)
        )
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          const angle = Math.atan2(elementY - mouseY, elementX - mouseX)
          
          gsap.to(element, {
            x: `+=${Math.cos(angle) * force * 20}`,
            y: `+=${Math.sin(angle) * force * 20}`,
            scale: `+=${force * 0.3}`,
            duration: 0.3,
            ease: "power2.out"
          })
        }
      })
    }

    if (zones === "hero") {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      scrollTrigger.kill()
      document.removeEventListener('mousemove', handleMouseMove)
      particleRefs.current.forEach(element => {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
      particleRefs.current = []
    }
  }, [particleCount, colors, maxSize, minSize, intensity, zones, className])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }} />
}

// Specialized particle effects for different sections
export function HeroParticles() {
  return (
    <ScrollParticleSystem
      particleCount={40}
      colors={["#D7FF1E", "#9FF4F0", "#FFFFFF"]}
      maxSize={8}
      minSize={3}
      intensity={1.2}
      zones="hero"
      className="hero-particles"
    />
  )
}

export function SectionParticles() {
  return (
    <ScrollParticleSystem
      particleCount={20}
      colors={["#D7FF1E80", "#9FF4F080"]}
      maxSize={5}
      minSize={2}
      intensity={0.8}
      zones="section"
      className="section-particles"
    />
  )
}

export function FullPageParticles() {
  return (
    <ScrollParticleSystem
      particleCount={60}
      colors={["#D7FF1E", "#9FF4F0"]}
      maxSize={6}
      minSize={2}
      intensity={1}
      zones="full"
      className="full-page-particles"
    />
  )
}
