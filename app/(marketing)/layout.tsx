import type React from "react"
import { FloatingNavBar } from "@/components/shared/floating-nav-bar"
import { Footer } from "@/components/shared/footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FloatingNavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
