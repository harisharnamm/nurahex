"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import gsap from "gsap"

export default function ThanksPage() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const handRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/")
    }, 8000)
    return () => clearTimeout(timeout)
  }, [router])

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      )
    }
    if (handRef.current) {
      gsap.to(handRef.current, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4">
      <div ref={containerRef} className="text-center">
        <div ref={handRef} className="text-6xl mb-6">
          👋
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">See you soon!</h1>
        <p className="text-xl text-primary-foreground/80 mb-8">
          Thanks for booking a call with us. We'll be in touch shortly.
        </p>
        <p className="text-primary-foreground/60">Redirecting to home in a few seconds...</p>
      </div>
    </div>
  )
}
