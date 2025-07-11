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
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <g transform="translate(10,10)">
            <path
              d="M50 20 L25 60 L35 45 L50 70 L65 45 L75 60 L50 20"
              fill={isNavbar ? "#000000" : "#D7FF1D"}
              stroke={isNavbar ? "#000000" : "#D7FF1D"}
              strokeWidth="1"
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
