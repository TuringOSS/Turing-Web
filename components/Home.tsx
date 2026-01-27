import React, { useRef } from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Projects from './Projects';
import Team from './Team';

const Home: React.FC = () => {
  return (
    <main>
        <Hero />
        <Marquee text="CODE DESIGN INNOVATE" />
        <About />
        <Projects />
        <Marquee text="JOIN THE MOVEMENT" reverse />
        <Team />
    </main>
  );
}

export default Home;
