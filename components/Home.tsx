import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Projects from './Projects';
import Team from './Team';
import Folder from './ui/folder';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleFolderClick = (index: number) => {
    // Navigate if the paper with logo (index 2) or middle paper is clicked
    if (index === 2 || index === 1 || index ===3 || index ===0 ) {
      navigate('/technex-2026');
    }
  };

  return (
    <main>
        <Hero />
        <Marquee text="CODE DESIGN INNOVATE" />
        <About />
        <Projects />
        <Marquee text="JOIN THE MOVEMENT" reverse />
        <Team />
        
        <div className="flex flex-col bg-gradient-to-b from-gray-50 via-turing-black to-turing-black justify-center items-center py-20 min-h-[600px] relative gap-10">
            <Folder 
                size={2} 
                color="#5227FF" 
                className="custom-folder"
                logo="/tuning.jpg"
                onPaperClick={handleFolderClick}
            />
            <p className="text-white text-xl pt-10 font-display tracking-widest uppercase opacity-80 animate-pulse">
                Open the Folder for a surprise
            </p>
        </div>
    </main>
  );
}

export default Home;
