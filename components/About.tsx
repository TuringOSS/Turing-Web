import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const words = "We are a collective of visionaries, coders, and designers pushing the boundaries of what is possible in a collegiate environment. Turing isn't just a club; it's a movement.".split(" ");

  return (
    <section id="about" ref={containerRef} className="min-h-screen bg-white dark:bg-turing-black text-black dark:text-white py-32 px-6 md:px-12 flex flex-col justify-center relative transition-colors duration-300">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20 pointer-events-none transition-colors duration-300" />

       <div className="max-w-6xl mx-auto w-full z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex items-center gap-4"
          >
            <div className="h-[2px] w-24 bg-turing-yellow" />
            <h2 className="text-turing-yellow uppercase tracking-widest font-bold">The Mission</h2>
          </motion.div>

          <div ref={textRef} className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-4">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
              
              return (
                <motion.span 
                  key={i}
                  style={{ opacity }}
                  className="text-4xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.9]"
                >
                  {word}
                </motion.span>
              )
            })}
          </div>

          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
             {[
               { title: "Innovate", desc: "Breaking new ground in AI and Software." },
               { title: "Design", desc: "Crafting experiences that matter." },
               { title: "Deploy", desc: "Shipping real products to real users." }
             ].map((item, idx) => (
               <div key={idx} className="border-t border-gray-800 pt-8 group hover:border-turing-yellow transition-colors duration-500">
                 <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-turing-yellow transition-colors">{`0${idx + 1} / ${item.title}`}</h3>
                 <p className="text-gray-400 max-w-xs">{item.desc}</p>
               </div>
             ))}
          </motion.div>
       </div>
    </section>
  );
};

export default About;