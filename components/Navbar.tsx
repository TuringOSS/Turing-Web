import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ['About', 'Events', 'Team', 'Join'];

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
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="uppercase text-sm font-bold tracking-widest hover:text-turing-yellow transition-colors relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-turing-yellow transition-all group-hover:w-full" />
          </motion.a>
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
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={toggleMenu}
              className="text-2xl font-display font-bold uppercase hover:text-turing-yellow transition-colors"
            >
              {link}
            </a>
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