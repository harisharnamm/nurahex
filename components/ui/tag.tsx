import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-accent text-accent-foreground hover:bg-accent/80",
        accent: "bg-[#D7FF1E]/20 text-[#D7FF1E] border border-[#D7FF1E]/30 hover:bg-[#D7FF1E]/30",
        success: "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400",
        error: "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400",
        // New beautiful color variants for innovation components with enhanced aesthetics
        "light-purple": "bg-purple-100/25 text-purple-200 border border-purple-400/40 hover:bg-purple-100/35 backdrop-blur-sm dark:bg-purple-500/15 dark:text-purple-200 dark:border-purple-400/30 dark:hover:bg-purple-500/25 shadow-sm",
        "blue": "bg-sky-100/25 text-sky-200 border border-sky-400/40 hover:bg-sky-100/35 backdrop-blur-sm dark:bg-sky-500/15 dark:text-sky-200 dark:border-sky-400/30 dark:hover:bg-sky-500/25 shadow-sm",
        "pink": "bg-rose-100/25 text-rose-200 border border-rose-400/40 hover:bg-rose-100/35 backdrop-blur-sm dark:bg-rose-500/15 dark:text-rose-200 dark:border-rose-400/30 dark:hover:bg-rose-500/25 shadow-sm",
        "green": "bg-emerald-100/25 text-emerald-200 border border-emerald-400/40 hover:bg-emerald-100/35 backdrop-blur-sm dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-400/30 dark:hover:bg-emerald-500/25 shadow-sm",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, size, ...props }: TagProps) {
  return (
    <div className={cn(tagVariants({ variant, size }), className)} {...props} />
  )
}

export { Tag, tagVariants }