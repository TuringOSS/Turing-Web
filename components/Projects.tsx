import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const events: Project[] = [
  { id: 1, title: "AI Workshop", category: "Workshop", image: "/Ai.jpeg", year: "2024" },
  { id: 2, title: "AI Showcase", category: "Showcase", image: "/AI2.jpeg", year: "2024" },
  { id: 3, title: "Hack Night", category: "Hackathon", image: "/Ai.jpeg", year: "2024" },
  { id: 4, title: "Dev Summit", category: "Conference", image: "/AI2.jpeg", year: "2023" },
];

const Events: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section id="events" ref={targetRef} className="relative h-[300vh] bg-turing-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Title */}
        <div className="absolute top-10 left-10 z-0 opacity-10 pointer-events-none">
          <h2 className="text-[20vw] font-display font-bold text-gray-500 leading-none">EVENTS</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-16 px-16 relative z-10">
          {/* Header Card */}
           <div className="w-[80vw] md:w-[30vw] shrink-0 flex flex-col justify-end pb-20">
              <h3 className="text-6xl font-display font-bold text-white mb-6">UPCOMING <br/> <span className="text-turing-yellow">EVENTS</span></h3>
              <p className="text-gray-400 text-lg max-w-md">
                A selection of upcoming events, workshops and showcases from the club.
              </p>
           </div>

           {/* Project Cards */}
          {events.map((project) => (
            <div key={project.id} className="group relative w-[85vw] md:w-[45vw] lg:w-[35vw] h-[70vh] shrink-0 overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-turing-yellow">
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono border border-white/20 px-3 py-1 rounded-full text-white/80 backdrop-blur-sm bg-black/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/60">{project.year}</span>
                </div>
                
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h4 className="text-5xl font-display font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex items-center gap-2 text-turing-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm uppercase tracking-widest font-bold">View Case Study</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;