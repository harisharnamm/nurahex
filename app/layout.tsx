import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProvider as CustomThemeProvider } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "NurahexAI | AI Automation Agency",
  description: "NurahexAI injects production-ready AI workflows into your product in weeks, not months.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <CustomThemeProvider>
          <main className="relative">
            {children}
          </main>
          <Toaster />
        </CustomThemeProvider>
      </body>
    </html>
  )
}
