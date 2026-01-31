import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'About', href: '/#about', type: 'anchor' },
    { name: 'Events', href: '/#events', type: 'anchor' },
    { name: 'Team', href: '/#team', type: 'anchor' },
    { name: 'Technex 2026', href: '/technex-events', type: 'route' }
  ];

  const handleNavigation = (href: string, type: string) => {
    setIsOpen(false);
    
    if (type === 'route') {
      navigate(href);
      return;
    }

    if (type === 'anchor') {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/70 dark:bg-turing-black/50 backdrop-blur-md text-turing-black dark:text-white transition-colors duration-300 border-b border-gray-200/20 dark:border-white/10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 text-2xl font-display font-bold tracking-tighter relative z-50"
      >
        <img src="/tuning.jpg" alt="Turing Logo" className="h-8 w-8 object-contain rounded-full"/>
        <span>TURING<span className="text-turing-yellow">.</span></span>
      </motion.div>

      <div className="hidden md:flex gap-8 items-center">
        {links.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group"
          >
            <button
              onClick={() => handleNavigation(link.href, link.type)}
              className="uppercase text-sm font-bold tracking-widest hover:text-turing-yellow transition-colors"
            >
              {link.name}
            </button>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-turing-yellow transition-all group-hover:w-full" />
          </motion.div>
        ))}
        <AnimatedThemeToggler />
      </div>

      <div className="md:hidden relative z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-white dark:bg-turing-black z-40 flex flex-col items-center justify-start pt-32 gap-8 text-black dark:text-white"
        >
          {links.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavigation(link.href, link.type)}
              className="text-2xl font-display font-bold uppercase hover:text-turing-yellow transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="scale-75">
            <AnimatedThemeToggler />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;