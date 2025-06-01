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
          {/* Simple V shape that matches the image */}
          <path
            d="M20 20 L60 100 L100 20"
            stroke={isNavbar ? "#000000" : "#D7FF1D"}
            strokeWidth="20"
            fill="none"
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
