import React from 'react';
import { ArrowUpRight, Github, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-turing-black text-black dark:text-white pt-32 pb-12 px-6 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-display font-bold uppercase mb-8">Let's Build Together</h2>
            <form className="flex flex-col gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="bg-transparent border-b border-gray-300 dark:border-gray-700 py-4 text-xl focus:border-turing-yellow focus:outline-none transition-colors"
              />
              <button className="self-start mt-4 bg-black dark:bg-white text-white dark:text-black px-8 py-3 font-bold uppercase hover:bg-turing-yellow hover:text-black transition-colors flex items-center gap-2">
                Subscribe <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase">Sitemap</h3>
            <ul className="space-y-4 text-lg font-bold">
              {['Home', 'About', 'Projects', 'Team', 'Events'].map(item => (
                <li key={item}><a href="#" className="hover:text-turing-yellow transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase">Socials</h3>
             <ul className="space-y-4 mb-8">
                {[
                  { icon: Github, label: "Github", link: "https://github.com/TuringOSS" },
                  { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/turing.club?igsh=d21wN2Z1Z3M4OTI5&utm_source=qr" },
                  { icon: Twitter, label: "Twitter", link: "#" }
                ].map((social, i) => (
                  <li key={i}>
                    <a href={social.link} target={social.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-3 hover:text-turing-yellow transition-colors group">
                      <social.icon size={20} />
                      <span className="font-bold uppercase">{social.label}</span>
                      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
             </ul>

             <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase">Contact</h3>
             <a href="tel:9752836989" className="text-lg font-bold hover:text-turing-yellow transition-colors">
               +91 97528 36989
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-gray-800 pt-8">
          <h1 className="text-[12vw] leading-[0.8] font-display font-bold text-turing-yellow select-none opacity-20 hover:opacity-100 transition-opacity duration-700">
            TURING
          </h1>
          <p className="text-gray-600 font-mono text-xs mt-4 md:mt-0">
            © 2026 TURING CLUB. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;