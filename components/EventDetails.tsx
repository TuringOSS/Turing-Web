import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/events';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Trophy } from 'lucide-react';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-turing-black text-black dark:text-white">
        <h2 className="text-4xl font-display font-bold">Event Not Found</h2>
        <button onClick={() => navigate('/')} className="ml-4 text-turing-yellow underline">Go Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-turing-black text-black dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
          >
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center gap-2 text-white/80 hover:text-turing-yellow mb-6 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono uppercase text-sm tracking-widest">Back to Events</span>
            </button>
            <span className="inline-block px-4 py-1 border border-turing-yellow text-turing-yellow font-mono text-sm mb-4 rounded-full bg-black/30 backdrop-blur-md">
              {event.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-2">{event.title}</h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl">{event.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Left Column: Info Grid */}
            <div className="md:col-span-2 space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {event.details?.location && (
                        <div className="flex items-start gap-4 p-6 border border-gray-200 dark:border-white/10 rounded-lg hover:border-turing-yellow transition-colors group">
                            <MapPin className="text-turing-yellow w-8 h-8 group-hover:scale-110 transition-transform" />
                            <div>
                                <h4 className="font-display font-bold text-xl mb-1">LOCATION</h4>
                                <p className="text-gray-600 dark:text-gray-400 font-mono">{event.details.location}</p>
                            </div>
                        </div>
                    )}
                     {event.details?.participants && (
                        <div className="flex items-start gap-4 p-6 border border-gray-200 dark:border-white/10 rounded-lg hover:border-turing-yellow transition-colors group">
                            <Users className="text-turing-yellow w-8 h-8 group-hover:scale-110 transition-transform" />
                            <div>
                                <h4 className="font-display font-bold text-xl mb-1">PARTICIPANTS</h4>
                                <p className="text-gray-600 dark:text-gray-400 font-mono">{event.details.participants}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-3xl font-display font-bold mb-6 border-l-4 border-turing-yellow pl-4">About The Events</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Join us for an immersive experience where technology meets creativity. This event is designed to challenge your skills, expand your network, and provide insights into the future of technology. Whether you are a beginner or an expert, there is something for everyone.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                        We will have industry experts, hands-on sessions, and opportunities to win amazing prizes. Don't miss out on this opportunity to be part of the Turing Club legacy.
                    </p>
                </div>
            </div>

            {/* Right Column: Winners / Extra */}
            <div className="md:col-span-1">
                {event.details?.winners && (
                    <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10">
                         <div className="flex items-center gap-3 mb-6">
                            <Trophy className="text-turing-yellow w-6 h-6" />
                            <h3 className="font-display font-bold text-2xl uppercase">Winners</h3>
                         </div>
                         <ul className="space-y-4">
                            {event.details.winners.map((winner, idx) => (
                                <li key={idx} className="flex items-center gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-turing-yellow text-black font-bold font-mono text-sm">
                                        {idx + 1}
                                    </span>
                                    <span className="text-lg font-medium">{winner}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
