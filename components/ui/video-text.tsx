"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface VideoTextProps {
  text: string;
  videoSrc: string;
  className?: string;
  overlayColor?: string; // The color of the "background" masking the video
}

export const VideoText = ({
  text,
  videoSrc,
  className,
  overlayColor = "black",
}: VideoTextProps) => {
  return (
    <div className={cn("relative overflow-hidden flex items-center justify-center", className)}>
      {/* video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="" />
      </video>

      {/* The Mask Layer 
          Light Mode: mix-blend-screen (Black text reveals, White BG hides)
          Dark Mode: mix-blend-multiply (White text reveals, Black BG hides)
      */}
      <div 
        className="absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-turing-black mix-blend-screen dark:mix-blend-multiply transition-colors duration-300"
      >
         <h1 className="font-display font-black text-black dark:text-white select-none whitespace-nowrap text-[15vw] md:text-[22vw] tracking-tighter leading-none">
            {text}
         </h1>
      </div>
    </div>
  );
};
