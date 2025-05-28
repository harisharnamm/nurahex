import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export function PrimaryButton({ children, className, asChild = false, ...props }: PrimaryButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full bg-primary-700 text-primary-foreground hover:bg-primary-900 hover:shadow-[var(--shadow-primary)] transition-all duration-300 font-medium px-6 py-2",
        className,
      )}
      asChild={asChild}
      {...props}
    >
      {children}
    </Button>
  )
}
