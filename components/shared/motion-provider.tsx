"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface MotionContextValue {
  reduceMotion: boolean
}

const MotionContext = createContext<MotionContextValue>({
  reduceMotion: false
})

interface MotionProviderProps {
  children: ReactNode
}

export function MotionProvider({ children }: MotionProviderProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mediaQuery.matches)
    const handleChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches)
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <MotionContext.Provider value={{ reduceMotion }}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotion() {
  return useContext(MotionContext)
}
