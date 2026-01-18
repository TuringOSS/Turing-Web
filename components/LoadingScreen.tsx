import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NumberTicker from './ui/number-ticker';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Wait for the animation + a bit of buffer
    const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          animate={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-turing-black flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center">
             <div className="text-8xl md:text-9xl font-display font-bold text-turing-yellow mb-2 flex items-baseline">
                <NumberTicker value={100} className="text-turing-yellow" />
                <span className="text-4xl md:text-6xl ml-1">%</span>
             </div>
             <p className="text-stone-400 font-mono tracking-widest text-sm uppercase">Initializing Systems</p>
          </div>
          
          {/* Progress Bar Line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900">
             <motion.div 
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 2.2, ease: "easeInOut" }}
               className="h-full bg-turing-yellow"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
