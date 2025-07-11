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
          <g>
            <path
              d="
                M20 100 
                L40 60 
                L60 90 
                L80 60 
                L100 100 
                L85 100 
                L75 80 
                L60 105 
                L45 80 
                L35 100 
                Z
              "
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
