import { Project } from "../types";

export const events: Project[] = [
  {
    id: 1,
    title: "TECHNEX 2025",
    category: "Festival",
    image: "/technex1.jpeg",
    year: "2025",
    description: `TECHNEX is a celebration of technology, innovation, and learning organized by the Turing Club at NMIMS Indore.


`,
    details: {
      date: "TBD 2026",
      location: "SVKM NMIMS College, Off Super Corridor, Indore, Madhya Pradesh",
      participants: "Hackathon: 400+; Workshops: 400; Gaming: 200; Robotics: 80; UI Rush: 50",
      winners: ["To be announced"]
    }
  },
  { 
    id: 2, 
    title: "Robotics Workshop", 
    category: "Showcase", 
    image: "/AI2.jpeg", 
    year: "2025",
    description: "A workshop where autonomous robots navigate through complex obstacle courses. Testing the limits of sensor integration and path planning algorithms.",
    details: {
      date: "August 20, 2025",
      location: "Robotics Arena",
      participants: "30 Teams",
      winners: ["Mecha Speedsters", "Robo Drift"]
    }
  },
  { 
    id: 3, 
    title: "AI Workshop", 
    category: "Workshop", 
    image: "/Ai.jpeg", 
    year: "2024",
    description: "A comprehensive hands-on workshop covering the fundamentals of Machine Learning and Neural Networks. Students built their own image recognition models.",
    details: {
      date: "November 10, 2024",
      location: "Auditorium",
      participants: "120 Students"
    }
  },
  { 
    id: 4, 
    title: "Development Workshop", 
    category: "Multi Event Hack", 
    image: "/NMevent4.jpeg", 
    year: "2026",
    description: "A series of sessions focused on Full Stack Web Development, Cloud Computing, and DevOps practices.",
    details: {
      date: "January 2026",
      location: "Online",
      participants: ""
    }
  },
];


// EXECUTE (Hackathon)

// • Format: A premier 36-hour hackathon conducted in three rounds — Idea Screening, Development Review, and Final Presentation.
// • Teams: 3 to 4 members per team.
// • Skill Level: Inclusive for beginners and challenging for experienced developers.
// • Impact: Time-bound, competitive environment focused on ideation and building real-world technical solutions.

// 🤖 Robotics Arena

// • Robowars (8 kg): Combat competition with 1v1 elimination matches progressing through Qualifying, Elimination, and Finale stages.
// • Robo Soccer: Strategy-driven matches in 1v1 or 2v2 formats where autonomous bots compete to score goals.

// 🎮 E-Sports & Design

// • XENEX (Gaming): Competitive tournaments across titles including FIFA, Valorant, BGMI, and Chess.
// • DIZNEX (UI Rush): UI design challenge for teams of 1–2 participants based on a specified brief.

// 📚 Technical Workshops

// Hands-on sessions covering GenAI, Blockchain, Machine Learning, Flutter, Figma, Agile practices, Robotics fundamentals, and Programming basics.