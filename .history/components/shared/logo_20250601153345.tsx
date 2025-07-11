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
          <g transform="translate(5, 8)">
            {/* Left wing/triangle */}
            <path 
              d="M8 2 L15 12 L12 18 L2 8 Z" 
              fill={isNavbar ? "#000000" : "#D7FF1D"} 
            />
            {/* Right wing/triangle */}
            <path 
              d="M22 2 L28 8 L18 18 L15 12 Z" 
              fill={isNavbar ? "#000000" : "#D7FF1D"} 
            />
            {/* Center connecting element */}
            <path 
              d="M12 18 L18 18 L15 24 Z" 
              fill={isNavbar ? "#000000" : "#D7FF1D"} 
            />
          </g>
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
