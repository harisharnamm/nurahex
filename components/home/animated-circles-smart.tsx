"use client"

import { useEffect, useState, Suspense } from "react"
import dynamic from "next/dynamic"
import { AnimatedCirclesFallback } from "./animated-circles-fallback"

// Dynamically import the 3D version with eager loading for faster performance
const AnimatedCircles3D = dynamic(
  () => import("./animated-circles-3d"),
  { 
    ssr: false,
    loading: () => <AnimatedCirclesFallback />
  }
)

// WebGL detection utility - optimized for speed
function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return !!(gl && gl instanceof WebGLRenderingContext)
  } catch (e) {
    return false
  }
}

// Performance detection - optimized
function detectPerformance(): boolean {
  const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                         (window.devicePixelRatio && window.devicePixelRatio < 1.5)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  return !isLowEndDevice && !prefersReducedMotion
}

interface AnimatedCirclesProps {
  onAnimationStart?: () => void;
  triggerAnimation?: boolean;
}

export function AnimatedCircles({ onAnimationStart, triggerAnimation }: AnimatedCirclesProps) {
  const [use3D, setUse3D] = useState<boolean | null>(null) // null = checking, boolean = decided
  
  useEffect(() => {
    // Immediate capability check for faster loading
    const hasWebGL = detectWebGL()
    const hasGoodPerformance = detectPerformance()
    
    // Set immediately without delay
    setUse3D(hasWebGL && hasGoodPerformance)
  }, [])

  // Show fallback immediately while checking
  if (use3D === null) {
    return <AnimatedCirclesFallback onAnimationStart={onAnimationStart} triggerAnimation={triggerAnimation} />
  }

  return (
    <Suspense fallback={<AnimatedCirclesFallback onAnimationStart={onAnimationStart} triggerAnimation={triggerAnimation} />}>
      {use3D ? (
        <AnimatedCircles3D onAnimationStart={onAnimationStart} triggerAnimation={triggerAnimation} />
      ) : (
        <AnimatedCirclesFallback onAnimationStart={onAnimationStart} triggerAnimation={triggerAnimation} />
      )}
    </Suspense>
  )
}
