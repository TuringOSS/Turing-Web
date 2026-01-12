import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false }) => {
  return (
    <div className="relative flex overflow-hidden py-10 bg-turing-yellow text-turing-black border-y border-turing-black">
      <div className={`flex shrink-0 animate-${reverse ? 'marquee-reverse' : 'marquee'} whitespace-nowrap gap-8`}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-display font-bold uppercase tracking-normal mx-4">
            {text} <span className="text-white mx-4 font-sans italic font-light">&mdash;</span>
          </span>
        ))}
      </div>
      <div className={`flex shrink-0 animate-${reverse ? 'marquee-reverse' : 'marquee'} whitespace-nowrap gap-8`}>
        {[...Array(10)].map((_, i) => (
          <span key={`dup-${i}`} className="text-6xl md:text-8xl font-display font-bold uppercase tracking-normal mx-4">
            {text} <span className="text-white mx-4 font-sans italic font-light">&mdash;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;