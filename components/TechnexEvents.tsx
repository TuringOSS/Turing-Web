import React from 'react';
import { motion } from 'framer-motion';
import TechnexEventCard from './TechnexEventCard';
import { useNavigate } from 'react-router-dom';

const TechnexEvents = () => {
  const navigate = useNavigate();

  const events = [
    {
      name: "Execute",
      role: "Hackathon",
      registerLink: "https://unstop.com/o/ryz3gNQ?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Online_coding_challenge",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Hackathon"
    },
    {
      name: "Diznex",
      role: "Design Competition",
      registerLink: "https://unstop.com/o/fEQctMz?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Events",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Graphic Design"
    },
    {
      name: "Flashcoding 2.0",
      role: "Algorush",
      registerLink: "https://unstop.com/o/wbfnYE0?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Online_coding_challenge",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Algorush"
    },
    {
      name: "Fifa",
      role: "Xenex",
      registerLink: "https://unstop.com/o/3MqTXnL?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Events",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Xenex"
    },
    {
      name: "Chess",
      role: "Xenex",
      registerLink: "https://unstop.com/o/r1Mg2IA?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Events",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Xenex"
    },
    {
      name: "BGMI",
      role: "Xenex",
      registerLink: "https://unstop.com/o/SJpyxlT?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Events",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Xenex"
    },
    {
      name: "Clash Royale",
      role: "Xenex",
      registerLink: "https://unstop.com/o/qtu4TAn?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Events",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Xenex"
    },
    {
      name: "Valorant",
      role: "Xenex",
      registerLink: "https://unstop.com/o/vi4tfej?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Events",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Xenex"
    },
    {
      name: "Robo Soccer",
      role: "Ranbhoomi",
      registerLink: "https://unstop.com/o/6YWJr8O?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Competitions",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Ranbhoomi"
    },
    {
      name: "Robo Sumo",
      role: "Ranbhoomi",
      registerLink: "https://unstop.com/o/MozSw1B?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Competitions",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Ranbhoomi"
    },
    {
      name: "Robo Race",
      role: "Ranbhoomi",
      registerLink: "https://unstop.com/o/gQXxCDq?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Competitions",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Ranbhoomi"
    },
    {
      name: "PromptX",
      role: "Prompt Engineering",
      registerLink: "https://unstop.com/o/JaRAGre?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Online_coding_challenge",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Prompt Engineering"
    },
    {
      name: "Locked.exe",
      role: "Escape Room",
      registerLink: "https://unstop.com/o/s94buxn?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Competitions",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Escape Room"
    },
    {
      name: "The Vault",
      role: "Mystery Event",
      registerLink: "https://unstop.com/o/UYyrnaO?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Competitions",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Mystery Event"
    },
    {
      name: "Snapfest",
      role: "Videography",
      registerLink: "https://unstop.com/o/DogWcSi?lb=sEvx6pe&utm_medium=Share&utm_source=turinclu6155&utm_campaign=Competitions",
      statusText: "Registration Open",
      statusColor: "bg-turing-yellow",
      glowText: "Videography"
    }
  ];

  return (
    <div className="min-h-screen bg-turing-black py-20 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900 blur-[120px]"></div>
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Event <span className="text-turing-yellow">Details</span>
            </h1>
            
            <button 
                onClick={() => navigate('/technex-2026')}
                className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white"
            >
                Back to Space
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <TechnexEventCard 
                name={event.name}
                role={event.role}
                registerLink={event.registerLink}
                statusText={event.statusText}
                statusColor={event.statusColor}
                glowText={event.glowText}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnexEvents;
