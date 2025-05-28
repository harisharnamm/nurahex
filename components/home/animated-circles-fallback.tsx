"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface AnimatedCirclesFallbackProps {
  onAnimationStart?: () => void;
  triggerAnimation?: boolean;
}

export function AnimatedCirclesFallback({ onAnimationStart, triggerAnimation = false }: AnimatedCirclesFallbackProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRefs = useRef<HTMLDivElement[]>([])
  const particleRefs = useRef<HTMLDivElement[]>([])

  const circles = [
    { size: 120, delay: 0, color: "#D7FF1E", opacity: 0.8 },
    { size: 180, delay: 1, color: "#D7FF1E", opacity: 0.4 }, // Reduced delay
    { size: 240, delay: 2, color: "#D7FF1E", opacity: 0.2 }, // Reduced delay
    { size: 300, delay: 3, color: "#D7FF1E", opacity: 0.1 }, // Reduced delay
    { size: 100, delay: 0.5, color: "#9FF4F0", opacity: 0.6 }, // Reduced delay
    { size: 160, delay: 1.5, color: "#9FF4F0", opacity: 0.3 }, // Reduced delay
    { size: 220, delay: 2.5, color: "#9FF4F0", opacity: 0.15 }, // Reduced delay
    { size: 280, delay: 3.5, color: "#9FF4F0", opacity: 0.05 }, // Reduced delay
  ]

  // Generate random values for particles only once
  const particles = useRef(
    Array.from({ length: 15 }).map(() => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      color: Math.random() > 0.5 ? "#D7FF1E" : "#9FF4F0",
      x0: (Math.random() - 0.5) * 300,
      y0: (Math.random() - 0.5) * 300,
      x1: (Math.random() - 0.5) * 300,
      y1: (Math.random() - 0.5) * 300,
      duration: 15 + Math.random() * 10,
    }))
  ).current

  useEffect(() => {
    if (!triggerAnimation) return;
    
    // Call the animation start callback with longer delay
    setTimeout(() => {
      onAnimationStart?.();
    }, 500) // Added delay before starting callback
    
    // Animate circles with enhanced 3D-like effects - EVEN SLOWER REVEAL
    circleRefs.current.forEach((el, i) => {
      if (!el) return
      const circle = circles[i]
      
      // Enhanced 3D-like transformations - MUCH SLOWER REVEAL
      gsap.fromTo(
        el,
        { 
          scale: 0.3, 
          opacity: 0, 
          rotationX: 45,
          rotationY: 0,
          z: -100
        },
        {
          scale: 1,
          opacity: circle.opacity,
          rotationX: 0,
          rotationY: 360,
          z: 0,
          delay: circle.delay * 0.5, // Even slower stagger (was 0.3)
          duration: 3.5, // Much slower initial reveal (was 2.5)
          ease: "power2.out",
          transformOrigin: "center center",
        }
      )

      // Continuous slow rotation after reveal
      gsap.to(el, {
        rotationY: "+=360",
        duration: 35, // Much slower background rotation (was 25)
        repeat: -1,
        ease: "none",
        delay: circle.delay * 0.5 + 3.5 // Start after reveal
      })

      // Add floating animation - slower
      gsap.to(el, {
        y: "+=15",
        duration: 6 + Math.random() * 3, // Slower (was 4 + Math.random() * 2)
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: circle.delay * 0.5
      })

      // Add subtle scale pulsing - slower
      gsap.to(el, {
        scale: "+=0.05",
        duration: 8 + Math.random() * 3, // Slower (was 6 + Math.random() * 2)
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: circle.delay * 0.6
      })
    })

    // Enhanced particle animations - MUCH SLOWER REVEAL
    particleRefs.current.forEach((el, i) => {
      if (!el) return
      const p = particles[i]
      
      gsap.fromTo(
        el,
        { 
          x: p.x0, 
          y: p.y0, 
          opacity: 0,
          scale: 0,
          rotation: 0
        },
        {
          x: p.x1,
          y: p.y1,
          opacity: 0.8,
          scale: 1,
          rotation: 180,
          duration: 4 + Math.random() * 3, // Much slower (was 3 + Math.random() * 2)
          ease: "power1.out",
          delay: 2 + i * 0.2, // Slower stagger (was 1 + i * 0.15)
        }
      )

      // Continuous movement after reveal
      gsap.to(el, {
        x: `+=${(Math.random() - 0.5) * 100}`,
        y: `+=${(Math.random() - 0.5) * 100}`,
        duration: 20 + Math.random() * 10, // Slower continuous drift (was 15 + Math.random() * 8)
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 6 + i * 0.2
      })

      // Add orbiting motion - slower
      gsap.to(el, {
        rotation: "+=360",
        duration: 30 + Math.random() * 15, // Much slower (was 20 + Math.random() * 10)
        repeat: -1,
        ease: "none",
        delay: 3 + i * 0.2
      })
    })
  }, [triggerAnimation, onAnimationStart, circles, particles])

  return (
    <div className="relative w-full h-full flex items-center justify-center" ref={containerRef}>
      {circles.map((circle, index) => (
        <div
          key={index}
          ref={el => { circleRefs.current[index] = el! }}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            opacity: circle.opacity,
            filter: `blur(${index % 2 === 0 ? 0 : 8}px)`,
            boxShadow: `0 0 ${circle.size / 4}px ${circle.color}`,
            background: `radial-gradient(circle, ${circle.color} 0%, transparent 70%)`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
      {particles.map((p, index) => (
        <div
          key={`particle-${index}`}
          ref={el => { particleRefs.current[index] = el! }}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            opacity: 0.6,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${p.width * 2}px ${p.color}`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
