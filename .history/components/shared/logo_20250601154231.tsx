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
      <div className="relative w-10 h-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized N shape */}
          <polygon 
            points="7,32 7,8 13,8 27,26 27,8 33,8 33,32 27,32 13,14 13,32" 
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
