import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "navbar" | "footer"
  className?: string
}

export function Logo({ variant = "footer", className }: LogoProps) {
  const isNavbar = variant === "navbar"
  
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          {/* Right half (original) */}
          <path
            d="M60 90 C70 75 80 60 90 45 C92 42 94 39 96 36 C100 30 104 24 108 18 C110 15 112 12 114 9 C116 6 118 3 120 0 C120 0 120 10 120 20 C120 30 120 40 120 50 C115 60 110 70 105 80 C100 90 95 100 90 110 C85 120 80 120 75 120 C70 120 65 120 60 120"
            fill={isNavbar ? "#000000" : "#D7FF1D"}
          />
          {/* Left half (polished, geometric) */}
          <path
            d="M60 90 C50 75 40 60 30 45 C28 42 26 39 24 36 C20 30 16 24 12 18 C10 15 8 12 6 9 C4 6 2 3 0 0 C0 0 0 10 0 20 C0 30 0 40 0 50 C5 60 10 70 15 80 C20 90 25 100 30 110 C35 120 40 120 45 120 C50 120 55 120 60 120"
            fill={isNavbar ? "#000000" : "#D7FF1D"}
          />
        </svg>
      </div>
      <span className={cn(
        "font-heading text-xl font-bold",
        isNavbar ? "text-black" : "text-white"
      )}>
        NurahexAI
      </span>
    </Link>
  )
}
