import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="bg-turing-black text-white min-h-screen selection:bg-turing-yellow selection:text-black">
          <CustomCursor />
          
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-turing-yellow origin-left z-[100]"
            style={{ scaleX }}
          />
    
          <Navbar />
          
          <main>
            <Hero />
            <Marquee text="CODE DESIGN INNOVATE" />
            <About />
            <Projects />
            <UpcomingEvents />
            <Marquee text="JOIN THE MOVEMENT" reverse />
            <Team />
          </main>
    
          <Footer />
        </div>
      )}
    </>
  );
}

export default App; // Force reload 
