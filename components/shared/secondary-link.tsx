import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SecondaryLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function SecondaryLink({ href, children, className }: SecondaryLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center text-primary-800 dark:text-primary-700 hover:text-primary-600 dark:hover:text-primary-500 transition-all duration-300 relative group",
        className,
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-800 dark:bg-primary-700 group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}
