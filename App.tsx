import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/Home';
import EventDetails from './components/EventDetails';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

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
        <div className="bg-white dark:bg-turing-black text-black dark:text-white min-h-screen selection:bg-turing-yellow selection:text-black transition-colors duration-300">
          <CustomCursor />
          
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-turing-yellow origin-left z-[100]"
            style={{ scaleX }}
          />
    
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Routes>
    
          <Footer />
        </div>
      )}
    </>
  );
}

export default App; // Force reload 
