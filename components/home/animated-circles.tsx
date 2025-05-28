"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

// Register MotionPath plugin
gsap.registerPlugin(MotionPathPlugin)

export function AnimatedCircles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])
  const particleRefs = useRef<(HTMLDivElement | null)[]>([])
  const pathRefs = useRef<(SVGPathElement | null)[]>([])

  useEffect(() => {
    // Phase 4: Advanced Motion Path Animations
    
    // Create complex motion paths for circles
    const motionPaths = [
      // Infinity loop path for large circles
      "M0,0 C-50,-50 -50,-100 0,-100 C50,-100 50,-50 0,0 C50,50 50,100 0,100 C-50,100 -50,50 0,0",
      // Figure-8 path for medium circles  
      "M0,0 C-75,-75 75,-75 0,-150 C-75,-75 75,75 0,0 C75,75 -75,75 0,150 C75,75 -75,-75 0,0",
      // Orbital ellipse for smaller circles
      "M0,0 C-100,0 -100,-50 0,-50 C100,-50 100,0 0,0 C100,0 100,50 0,50 C-100,50 -100,0 0,0",
      // Complex spiral path
      "M0,0 C-25,-25 -50,-25 -50,0 C-50,25 -25,50 0,50 C25,50 50,25 50,0 C50,-25 25,-50 0,-50 C-25,-50 -50,-25 -50,0",
    ]

    // Animate circles with motion paths
    circleRefs.current.forEach((circle, i) => {
      if (!circle) return
      
      const pathIndex = i % motionPaths.length
      const path = motionPaths[pathIndex]
      
      // Create timeline for complex animations
      const tl = gsap.timeline({ repeat: -1 })
      
      // Phase 1: Scale and fade in
      tl.fromTo(circle, 
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: circle.style.opacity || 1, 
          duration: 2,
          ease: "power2.out"
        }
      )
      
      // Phase 2: Motion path animation
      .to(circle, {
        motionPath: {
          path: path,
          autoRotate: i % 2 === 0, // Alternate rotation
          alignOrigin: [0.5, 0.5]
        },
        duration: 20 + i * 2, // Varying speeds
        ease: "none",
        transformOrigin: "center center"
      })
      
      // Phase 3: Scale breathing effect
      .to(circle, {
        scale: 1.1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      }, "-=10") // Start during motion path
      
      // Add delay based on index for staggered start
      tl.delay(i * 0.5)
    })

    // Advanced particle motion paths with Bezier curves
    particleRefs.current.forEach((particle, i) => {
      if (!particle) return
      
      // Create dynamic Bezier paths for particles
      const startX = (Math.random() - 0.5) * 400
      const startY = (Math.random() - 0.5) * 400
      const controlX1 = (Math.random() - 0.5) * 600
      const controlY1 = (Math.random() - 0.5) * 600
      const controlX2 = (Math.random() - 0.5) * 600
      const controlY2 = (Math.random() - 0.5) * 600
      const endX = (Math.random() - 0.5) * 400
      const endY = (Math.random() - 0.5) * 400
      
      const bezierPath = `M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`
      
      const particleTl = gsap.timeline({ repeat: -1, yoyo: true })
      
      particleTl
        .fromTo(particle, {
          opacity: 0,
          scale: 0
        }, {
          opacity: 0.8,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        })
        .to(particle, {
          motionPath: {
            path: bezierPath,
            autoRotate: false,
            alignOrigin: [0.5, 0.5]
          },
          duration: 15 + Math.random() * 10,
          ease: "power1.inOut"
        })
        .to(particle, {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "power2.in"
        })
        
      particleTl.delay(i * 0.3)
    })

    // Orbital motion for enhanced visual appeal
    const createOrbitalMotion = (element: HTMLDivElement, radius: number, speed: number) => {
      gsap.to(element, {
        rotation: 360,
        duration: speed,
        repeat: -1,
        ease: "none",
        transformOrigin: `${radius}px center`
      })
    }

    // Apply orbital motion to selected circles
    circleRefs.current.forEach((circle, i) => {
      if (circle && i % 3 === 0) { // Every third circle gets orbital motion
        createOrbitalMotion(circle, 50 + i * 10, 25 + i * 5)
      }
    })

    // Cleanup function
    return () => {
      gsap.killTweensOf(circleRefs.current)
      gsap.killTweensOf(particleRefs.current)
    }
  }, [])

  const circles = [
    { size: 120, color: "#D7FF1E", opacity: 0.8 },
    { size: 180, color: "#D7FF1E", opacity: 0.4 },
    { size: 240, color: "#D7FF1E", opacity: 0.2 },
    { size: 300, color: "#D7FF1E", opacity: 0.1 },
    { size: 100, color: "#9FF4F0", opacity: 0.6 },
    { size: 160, color: "#9FF4F0", opacity: 0.3 },
    { size: 220, color: "#9FF4F0", opacity: 0.15 },
    { size: 280, color: "#9FF4F0", opacity: 0.05 },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center" ref={containerRef}>
      {/* Hidden SVG paths for motion path animations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0" viewBox="-300 -300 600 600">
        <defs>
          {/* Motion path definitions */}
          <path 
            ref={el => { pathRefs.current[0] = el }}
            id="infinity-path"
            d="M0,0 C-50,-50 -50,-100 0,-100 C50,-100 50,-50 0,0 C50,50 50,100 0,100 C-50,100 -50,50 0,0"
            fill="none"
            stroke="none"
          />
          <path 
            ref={el => { pathRefs.current[1] = el }}
            id="figure8-path"
            d="M0,0 C-75,-75 75,-75 0,-150 C-75,-75 75,75 0,0 C75,75 -75,75 0,150 C75,75 -75,-75 0,0"
            fill="none"
            stroke="none"
          />
          <path 
            ref={el => { pathRefs.current[2] = el }}
            id="orbital-path"
            d="M0,0 C-100,0 -100,-50 0,-50 C100,-50 100,0 0,0 C100,0 100,50 0,50 C-100,50 -100,0 0,0"
            fill="none"
            stroke="none"
          />
          <path 
            ref={el => { pathRefs.current[3] = el }}
            id="spiral-path"
            d="M0,0 C-25,-25 -50,-25 -50,0 C-50,25 -25,50 0,50 C25,50 50,25 50,0 C50,-25 25,-50 0,-50 C-25,-50 -50,-25 -50,0"
            fill="none"
            stroke="none"
          />
        </defs>
      </svg>
      
      {/* Animated circles with motion paths */}
      {circles.map((circle, index) => (
        <div
          key={index}
          ref={el => { circleRefs.current[index] = el }}
          className="absolute rounded-full motion-circle"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            opacity: circle.opacity,
            filter: `blur(${index % 2 === 0 ? 0 : 8}px)`,
            boxShadow: `0 0 ${circle.size / 4}px ${circle.color}40`,
          }}
        />
      ))}
      
      {/* Enhanced floating particles with trail effects */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={`particle-${index}`}
          ref={el => { particleRefs.current[index] = el }}
          className="absolute rounded-full motion-particle"
          style={{
            width: Math.random() * 8 + 3,
            height: Math.random() * 8 + 3,
            backgroundColor: index % 2 === 0 ? "#D7FF1E" : "#9FF4F0",
            opacity: 0.8,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px ${index % 2 === 0 ? "#D7FF1E" : "#9FF4F0"}80`,
          }}
        />
      ))}
      
      {/* Motion trail elements for enhanced visual effect */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={`trail-${index}`}
          className="absolute rounded-full motion-trail opacity-20"
          style={{
            width: 4,
            height: 4,
            backgroundColor: index % 2 === 0 ? "#D7FF1E" : "#9FF4F0",
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  )
}
