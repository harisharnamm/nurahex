import React from "react";
import { cn } from "@/lib/utils";

interface HeatGridEnhancedProps {
  className?: string;
}

export default function HeatGridEnhanced({ className }: HeatGridEnhancedProps) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto p-4", className)}>
      <div className="grid grid-cols-2 gap-10 relative">
        {/* Top cards */}
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600 z-10">
          <h3 className="text-xl font-bold mb-2">Top Left</h3>
          <p className="text-surface-50/70">Content for the top left section</p>
        </div>
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600 z-10">
          <h3 className="text-xl font-bold mb-2">Top Right</h3>
          <p className="text-surface-50/70">Content for the top right section</p>
        </div>
        
        {/* Connecting lines and central HEAT element */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Vertical line */}
          <div className="absolute w-1 h-full bg-surface-600"></div>
          
          {/* Horizontal line */}
          <div className="absolute w-full h-1 bg-surface-600"></div>
          
          {/* Central HEAT element */}
          <div className="bg-surface-800 backdrop-blur-md border border-surface-600 px-8 py-4 rounded-xl shadow-lg z-20">
            <span className="text-2xl font-bold"><span className="text-primary-700">HEAT</span></span>
          </div>
        </div>
        
        {/* Bottom cards */}
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600 z-10">
          <h3 className="text-xl font-bold mb-2">Bottom Left</h3>
          <p className="text-surface-50/70">Content for the bottom left section</p>
        </div>
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600 z-10">
          <h3 className="text-xl font-bold mb-2">Bottom Right</h3>
          <p className="text-surface-50/70">Content for the bottom right section</p>
        </div>
      </div>
    </div>
  );
}
