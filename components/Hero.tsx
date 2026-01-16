import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-turing-black flex items-center justify-center">
      
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full z-0 opacity-50"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0" />

      {/* Background Abstract Elements */}
      <motion.div 
        style={{ y, scale, opacity: 0.3 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-turing-yellow rounded-full blur-[128px] mix-blend-screen opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[150px] mix-blend-overlay opacity-10" />
      </motion.div>

      {/* Main Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <motion.div 
          style={{ y: textY }}
          className="flex justify-between w-full max-w-6xl px-4"
        >
          <motion.p 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="font-sans text-sm md:text-lg text-gray-400 uppercase tracking-widest max-w-xs"
          >
            Defining the future <br/> of digital interaction.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="text-right"
          >
             <span className="block font-display text-4xl font-bold text-turing-yellow">EST. 2017</span>
             <span className="block text-xs uppercase tracking-widest text-gray-500">College Club // Tech Division</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-turing-yellow">Scroll</span>
        <ArrowDown className="text-white animate-bounce w-5 h-5" />
      </motion.div>
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/10" />
        <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/10" />
      </div>
    </div>
  );
};

export default Hero;