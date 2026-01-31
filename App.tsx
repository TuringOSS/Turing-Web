import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

// Lazy load components for performance
const Home = lazy(() => import('./components/Home'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const TechnexRegistration = lazy(() => import('./components/TechnexRegistration'));
const TechnexEvents = lazy(() => import('./components/TechnexEvents'));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll behavior with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Use a fallback loader component
  const PageLoader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-turing-black z-50">
      <div className="w-16 h-16 border-4 border-turing-yellow border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

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
    
          {location.pathname !== '/technex-2026' && <Navbar />}
          
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/technex-2026" element={<TechnexRegistration />} />
              <Route path="/technex-events" element={<TechnexEvents />} />
            </Routes>
          </Suspense>
    
          {location.pathname !== '/technex-events' && <Footer />}
        </div>
      )}
    </>
  );
}

export default App; // Force reload 
