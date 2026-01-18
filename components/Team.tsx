import React from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { DraggableCardBody, DraggableCardContainer } from './ui/draggable-card';

const coreMembers = [
  { name: "Madhav Jaju", role: "Core Member", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPbaOBDhz5hfuXwZqIWCSsnFy94QaerOAH7tlN" },
  { name: "Shobhit Luthra", role: "Core Member", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPjKSG3p0mdOTG76rLRzK1H3hCwqXpIFyWki5Z" },
  { name: "Paravi Bhatia", role: "Core Member", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPcnSAe0wDm5dWgzJYZtV9ys1ArXHaETRSLNI2" },
];

const leadMembers = [
  { name: "Ram Singhal", role: "Design Lead", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPlX5Yl7DIQwkDVPmLnNjbeXCz1YvGTUH4l2cM" },
  { name: "Disha Goyal", role: "Social Media Lead", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPkM9tA6K0GN9MOFjhmoH8nDCZqxTWEJBf3p2v" },
  { name: "Pranshu Sharma", role: "Robotics Lead", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPPbuSxZfocTOFKG05dIU1u2fBsq4W96AlDkmv" },
  { name: "Nancy Khurana", role: "Tech Lead", img: "nancy.jpeg" },
  { name: "Ojas Kulkarni", role: "Tech Lead", img: "ojas.jpeg" },
  { name: "Punya Chopra", role: "PR and Sponsorship", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPyOfVMXJz6FZpBtNs8UcuCdWbM4J1PKhyQxrV" },
  { name: "Dravya Gangwal", role: "PR and Sponsorship", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPKWgKFwmk5DuBj6L2nrHxJfSTzMqX3R9FV0PC" },
  { name: "Dhruv Singh", role: "Development Lead", img: "https://picsum.photos/400/400?random=11" },
  { name: "Neev Rawlani", role: "Operations", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiPG2CzMUuABJvL5Kpe7qzPuxjw0NZOH9CQ3yhn" },
  { name: "Arav Naik", role: "Operations", img: "https://ew9vkcsr89.ufs.sh/f/aVOKwHalrRiP984XB4rpHiDo2ftP10dERb4WQ639xAmaOvGN" },
];

const CoreCard = ({ member, index }: { member: any, index: number }) => (
    <CardContainer className="inter-var">
      <CardBody className="bg-turing-black relative group/card border-2 border-turing-yellow w-full h-auto rounded-none p-4 w-[350px] transition-colors duration-300">
        <CardItem
          translateZ="50"
          className="w-full text-3xl font-display font-bold text-white uppercase italic text-center transition-colors duration-300"
        >
          {member.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-turing-yellow font-mono text-sm uppercase max-w-sm mt-2 text-center w-full"
        >
          {member.role}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={member.img}
            className="w-full h-72 object-cover transition-all duration-500 rounded-none group-hover/card:shadow-xl"
            alt={member.name}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
);

const LeadCard = ({ member, index }: { member: any, index: number }) => (
  <div className="w-full max-w-[280px]">
    <DraggableCardContainer className="w-full h-full">
      <DraggableCardBody className="w-[280px] h-[340px] bg-turing-black border-2 border-turing-black p-0 rounded-none overflow-hidden group">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
          <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase italic">{member.name}</h3>
          <p className="text-turing-yellow font-mono text-xs md:text-sm uppercase mt-1">{member.role}</p>
        </div>
      </DraggableCardBody>
    </DraggableCardContainer>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="bg-gray-50 text-black py-32 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-20 flex justify-between items-end border-b-2 border-black pb-8 transition-colors duration-300"
        >
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter">
            The <br/> Crew
          </h2>
          <p className="text-xl font-bold max-w-xs text-right hidden md:block">
            MEET THE MINDS BEHIND THE MACHINE.
          </p>
        </motion.div>

        {/* CORE SECTION */}
        <div className="mb-32">
          <h3 className="text-4xl font-display font-bold uppercase mb-12 border-l-8 border-turing-yellow pl-4">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {coreMembers.map((member, i) => (
              <CoreCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* LEADS SECTION */}
        <div>
          <h3 className="text-4xl font-display font-bold uppercase mb-12 border-l-8 border-black dark:border-white pl-4 transition-colors duration-300">Team Leads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
             {leadMembers.map((member, i) => (
              <LeadCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;