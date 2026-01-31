import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Plus, Zap } from "lucide-react";

interface ComponentProps {
  name?: string;
  role?: string;
  statusText?: string;
  statusColor?: string; 
  glowText?: string; 
  registerLink?: string;
  className?: string;
}

export default function TechnexEventCard({
  name = "Event Name",
  role = "Event Description",
  statusText = "Registration Open",
  statusColor = "bg-green-500", // Default to green similar to image, but overridden by props
  glowText = "Upcoming",
  registerLink = "https://technex.co.in",
  className,
}: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("relative w-full max-w-xl", className)}
    >
     
      {/* Solid bottom bar matching the image design */}
      <div 
        className={cn(
          "pointer-events-none absolute inset-x-0 -bottom-10 top-[72%] rounded-[28px] blur-0 z-0",
          statusColor.replace('bg-', 'bg-').replace('500', '400') + "/90", // Dynamically map color to 400 shade with opacity
          "shadow-[0_40px_80px_-16px_rgba(0,0,0,0.5)]" // Darker shadow instead of colored glow
        )} 
      />

      {/* Text on top of the solid bar */}
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-0">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-black">
          <Zap className="h-4 w-4" /> {glowText}
        </div>
      </div>

      <Card className="relative z-10 mx-auto w-full max-w-3xl overflow-visible rounded-[28px] border-0 bg-[radial-gradient(120%_120%_at_30%_10%,#1a1a1a_0%,#0f0f10_60%,#0b0b0c_100%)] text-white shadow-2xl">
        <CardContent className="p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-full animate-pulse", statusColor)} />
              <span className="select-none">{statusText}</span>
            </div>
          </div>

        
          <div className="flex flex-wrap items-center gap-5">
            <div className="min-w-0">
              <h3 className="truncate text-xl font-semibold tracking-tight sm:text-2xl">
                {name}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-400">{role}</p>
            </div>
          </div>

       
          <div className="mt-6">
            <Button
              variant="secondary"
              className="h-12 w-full justify-start gap-3 p-3 rounded-2xl bg-white/10 text-white hover:bg-white/15"
              onClick={() => window.open(registerLink, '_blank')}
            >Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
