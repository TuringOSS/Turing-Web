import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { VideoText } from "./ui/video-text";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-turing-black flex items-center justify-center">
    

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        
        <RoughNotationGroup show={true}>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-4 w-full"
            >
               {/* 
                  VideoText Component for TURING
                  - Using video1.mp4 
                  - Black overlay to match theme background
               */}
               <VideoText 
                  text="TURING"
                  videoSrc="/video1.mp4"
                  className="h-[25vh] md:h-[40vh] w-full"
                  overlayColor="#050505" 
               />
            </motion.div>

            <motion.div 
              style={{ y: textY }}
              className="flex flex-col md:flex-row justify-between w-full max-w-6xl px-4 z-20 mt-8 md:mt-0"
            >
              <div className="text-left font-sans text-sm md:text-xl text-stone-300 max-w-sm tracking-wide leading-relaxed">
                 <p>
                    Defining the <br/>
                    <RoughNotation type="underline" color="#FFD700" strokeWidth={2} padding={[0, 2]}>
                       <span className="text-white font-bold">future</span>
                    </RoughNotation> of <br/>
                    <RoughNotation type="highlight" color="#FFD700" multiline={true} padding={[2, 2]} animationDelay={1000} animationDuration={800}>
                         <span className="text-turing-black px-1 font-bold">digital interaction.</span>
                    </RoughNotation>
                 </p>
              </div>
              
              <div className="text-right mt-8 md:mt-0">
                 <div className="flex flex-col items-end">
                     <span className="font-display text-5xl md:text-6xl font-bold text-turing-yellow mb-2">
                        <RoughNotation type="circle" color="white" strokeWidth={2} padding={[10, 10]} animationDelay={1500}>
                           EST. 2017
                        </RoughNotation>
                     </span>
                     <span className="block text-sm uppercase tracking-[0.2em] text-stone-400 mt-2 border-t border-stone-600 pt-2">
                        College Club // Tech Division
                     </span>
                 </div>
              </div>
            </motion.div>
        </RoughNotationGroup>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-turing-yellow font-bold">Scroll to Explore</span>
        <ArrowDown className="text-turing-yellow animate-bounce w-6 h-6" />
      </motion.div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};

export default Hero;