// No unused imports needed
import "./project.css";

// Importer les images depuis src/assets
import devfest23 from "../assets/devfest23.png";
import devfest24 from "../assets/devfest24.png";
import fikratech from "../assets/fikratech.png";
import coding36 from "../assets/3.6Coding.png";
import chatbot from "../assets/chatbot.png";
import gstStock from "../assets/gstStock.png";
import portfolioImg from "../assets/portfolio.png";

// Type pour les cartes
interface ProjectCardData {
  title: string;
  description: string;
  image: string;
}

import { motion } from "framer-motion";

// Composant Carte interactive
const Card: React.FC<{ data: ProjectCardData; variants: any }> = ({ data, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="project-card glass-panel group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
      style={{
        width: 320,
        height: 420,
        borderRadius: 24,
        cursor: "pointer",
        background: "rgba(255, 255, 255, 0.03)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-[220px] object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-110"
      />
      <div className="p-6 flex flex-col flex-1 relative z-20 bg-gradient-to-t from-[#050505] to-transparent h-full">
        <h2 className="text-xl font-bold mb-3 text-white/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-colors">
          {data.title}
        </h2>
        <p className="text-sm text-white/60 flex-1 leading-relaxed">{data.description}</p>
      </div>
    </motion.div>
  );
};

// Composant principal Project
const Project: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const projects: ProjectCardData[] = [
    {
      title: "Devfest 2023 website",
      description:
        "Contributed to this project using ReactJS, TailwindCSS and ShadCN to create a modern, responsive and interactive website for Devfest 2023",
      image: devfest23,
    },
    {
      title: "Devfest 2024 website",
      description:
        "Contributed to this project using ReactJS, TypeScript, TailwindCSS and ShadCN to create a modern, responsive and interactive website for Devfest 2024",
      image: devfest24,
    },
    {
      title: "FikraTech website",
      description:
        "This website is about the event FikraTech realized by Constantine students in collaboration with GDSC Batna. Contributed to this project using NextJs, TailwindCSS to create a modern, responsive and interactive website",
      image: fikratech,
    },
    {
      title: "FireGuard web_app",
      description:
        "This website, developed as the solution for the Hackathon (3.6 Coding), was built using Next.js and TailwindCSS to create a modern, responsive, and interactive experience.",
      image: coding36,
    },
    {
      title: "Chatbot",
      description:
        "A chatbot application connects a React front-end with a RESTful API back-end, powered by Together AI, for generating intelligent responses",
      image: chatbot,
    },
    {
      title: "Stock management web-app",
      description:
        "GestStock is a full-stack inventory management system built with Next.js, Express.js, and MongoDB, featuring secure JWT authentication. It offers product CRUD operations.",
      image: gstStock,
    },
    {
      title: "Portfolio website",
      description:
        "A personal portfolio showcasing my projects, skills, and creativity through modern, interactive, and responsive web design, built with ReactJS, TailwindCSS, TypeScript, and Three.js (React Three Fiber).",
      image: portfolioImg,
    },
  ];

  return (
    <div id="projects" className="flex flex-col justify-center items-center gap-y-14 p-10 mt-32 relative z-10 w-full max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-['Josefin_Sans'] text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gradient"
      >
        My Projects
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-10"
      >
        {projects.map((proj, index) => (
          <Card key={index} data={proj} variants={itemVariants} />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
