import type React from "react"
import { FloatingNavBar } from "@/components/shared/floating-nav-bar"
import { Footer } from "@/components/shared/footer"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FloatingNavBar />
      <main className="scroll-snap-y-mandatory">
        {children}
      </main>
      <Footer />
    </>
  )
}
