import React from "react";
import { cn } from "@/lib/utils";

interface HeatGridProps {
  className?: string;
}

export default function HeatGrid({ className }: HeatGridProps) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto p-4", className)}>
      <div className="grid grid-cols-2 gap-6 relative">
        {/* Top cards */}
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600">
          <h3 className="text-xl font-bold mb-2">Top Left</h3>
          <p className="text-surface-50/70">Content for the top left section</p>
        </div>
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600">
          <h3 className="text-xl font-bold mb-2">Top Right</h3>
          <p className="text-surface-50/70">Content for the top right section</p>
        </div>
        
        {/* Central HEAT element */}
        <div className="col-span-2 flex justify-center -my-3 relative z-10">
          <div className="bg-surface-800 backdrop-blur-md border border-surface-600 px-6 py-3 rounded-xl shadow-lg">
            <span className="text-xl font-bold"><span className="text-primary-700">HEAT</span></span>
          </div>
        </div>
        
        {/* Bottom cards */}
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600">
          <h3 className="text-xl font-bold mb-2">Bottom Left</h3>
          <p className="text-surface-50/70">Content for the bottom left section</p>
        </div>
        <div className="bg-surface-700/50 backdrop-blur-md rounded-2xl p-6 border border-surface-600">
          <h3 className="text-xl font-bold mb-2">Bottom Right</h3>
          <p className="text-surface-50/70">Content for the bottom right section</p>
        </div>
      </div>
    </div>
  );
}
