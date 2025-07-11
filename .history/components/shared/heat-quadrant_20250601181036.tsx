import React from "react";
import { cn } from "@/lib/utils";

interface HeatQuadrantProps {
  className?: string;
  topLeftContent?: React.ReactNode;
  topRightContent?: React.ReactNode;
  bottomLeftContent?: React.ReactNode;
  bottomRightContent?: React.ReactNode;
}

export default function HeatQuadrant({ 
  className,
  topLeftContent = "Top Left Content",
  topRightContent = "Top Right Content",
  bottomLeftContent = "Bottom Left Content",
  bottomRightContent = "Bottom Right Content"
}: HeatQuadrantProps) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto py-12", className)}>
      <div className="relative">
        {/* The quadrant grid layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Top row */}
          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-3xl p-8 shadow-xl backdrop-blur-md">
            {topLeftContent}
          </div>
          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-3xl p-8 shadow-xl backdrop-blur-md">
            {topRightContent}
          </div>
          
          {/* Bottom row */}
          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-3xl p-8 shadow-xl backdrop-blur-md">
            {bottomLeftContent}
          </div>
          <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-3xl p-8 shadow-xl backdrop-blur-md">
            {bottomRightContent}
          </div>
        </div>
        
        {/* The center element with HEAT text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-surface-800 border border-surface-600 px-6 py-3 rounded-xl shadow-lg z-50 relative">
            <span className="text-2xl font-bold"><span className="text-primary-700">HEAT</span></span>
          </div>
          
          {/* Horizontal connecting line */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1 bg-surface-600 w-[calc(100%+3rem)]"></div>
          
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 bg-surface-600 h-[calc(100%+3rem)]"></div>
        </div>
      </div>
    </div>
  );
}
