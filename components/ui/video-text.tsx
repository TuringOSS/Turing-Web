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
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* The Mask Layer 
          We use mix-blend-multiply.
          - White areas become transparent (showing the video).
          - Black areas stay black (hiding the video).
          
          So we need:
          - Background: Black (or overlayColor)
          - Text: White
      */}
      <div 
        className="absolute inset-0 z-10 flex items-center justify-center mix-blend-multiply"
        style={{ backgroundColor: overlayColor }}
      >
         <h1 className="font-display font-black text-white select-none whitespace-nowrap text-[15vw] md:text-[22vw] tracking-tighter leading-none">
            {text}
         </h1>
      </div>
    </div>
  );
};
