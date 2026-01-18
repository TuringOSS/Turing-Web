import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Turing Hackathon 2025",
    description:
      "Join us for a 48-hour coding marathon where innovation meets execution. Build real-world solutions, compete with the best minds, and win exciting prizes. Whether you're a seasoned developer or just starting, this is your platform to shine.",
    content: (
        <div className="h-full w-full bg-turing-black border-2 border-turing-yellow flex flex-col items-center justify-center text-white p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-turing-yellow/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <h3 className="text-4xl font-display font-bold text-turing-yellow z-10 text-center">HACKATHON<br/>2025</h3>
            <div className="mt-4 px-4 py-2 bg-turing-yellow text-turing-black font-bold text-lg z-10 uppercase tracking-widest">
                Register Now
            </div>
      </div>
    ),
  },
  {
    title: "AI Workshop Series",
    description:
      "Dive deep into the world of Artificial Intelligence with our expert-led workshops. From Neural Networks to Generative AI, learn the cutting-edge technologies shaping the future. Hands-on sessions included.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white border-2 border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/Ai.jpeg"
          className="h-full w-full object-cover absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
          alt="AI Workshop"
        />
        <span className="relative z-20 font-display text-3xl font-bold tracking-widest border-b-2 border-turing-yellow pb-2">WORKSHOPS</span>
      </div>
    ),
  },
  {
    title: "Tech Talks: Future of Web3",
    description:
      "Explore the decentralized web with industry leaders. specific discussions on Blockchain, Smart Contracts, and the evolution of the internet. Don't miss this opportunity to network and learn.",
    content: (
        <div className="h-full w-full bg-zinc-900 flex flex-col items-center justify-center text-white p-6 border-l-4 border-turing-yellow">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-6">
                 <span className="text-2xl font-bold">W3</span>
            </div>
            <h4 className="text-2xl font-display font-bold uppercase">Web3 Revolution</h4>
      </div>
    ),
  },
  {
    title: "Coding Competitive League",
    description:
      "Test your algorithmic skills in our weekly competitive programming contests. Climb the leaderboard, solve complex problems, and prepare for top-tier tech interviews.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-turing-black to-zinc-900 flex items-center justify-center text-white font-bold text-2xl border border-white/20">
         <span className="text-turing-yellow font-mono text-4xl">&lt;Code /&gt;</span>
      </div>
    ),
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <div className="py-20 w-full bg-white dark:bg-turing-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-turing-yellow mb-4">UPCOMING EVENTS</h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Mark your calendars for what's next.</p>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}

export default UpcomingEvents;
