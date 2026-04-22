import './Exp.css';
// No additional imports needed
import Devchallenges from '../assets/Devchallenges.png';
import ideathon from '../assets/ideathon.jpg';
import DevfestCertificat from '../assets/DevfestCertificat.jpg';
import stage from '../assets/stage.png';
import gdsc from '../assets/gdsc.png';

interface ExpCardData {
  title: string;
  image: string;
}

import { motion } from "framer-motion";

const Card: React.FC<{ data: ExpCardData; variants: any }> = ({ data, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="project-card glass-panel group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)]"
      style={{
        width: 320,
        height: 350,
        borderRadius: 24,
        cursor: 'pointer',
        background: "rgba(255, 255, 255, 0.03)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-[220px] object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-110"
      />
      <div className="p-6 flex flex-col flex-1 relative z-20 bg-gradient-to-t from-[#050505] to-transparent h-full justify-center">
        <h2 className="text-lg font-bold mb-3 text-white/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-colors text-center leading-snug">
          {data.title}
        </h2>
      </div>
    </motion.div>
  );
};

const Exp: React.FC = () => {
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

  const Exps: ExpCardData[] = [
    {
      title: '1st place - DevChallenge 2024 (Frontend)',
      image: Devchallenges,
    },
    {
      title: '3rd place - GDGthon (ideathon) 2024',
      image: ideathon,
    },
    {
      title: 'Devfest 2024 Organizer',
      image: DevfestCertificat,
    },
    {
      title: 'Internship Certificate at Algerie Telecom',
      image: stage,
    },
    {
      title: 'Google Developer Student Club core team member for 2023/2024',
      image: gdsc,
    },
  ];

  return (
    <div id='Exp' className="flex flex-col justify-center items-center gap-y-14 p-10 mt-32 relative z-10 w-full max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-['Josefin_Sans'] text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gradient"
      >
        Experience & Achievements
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-10"
      >
        {Exps.map((proj, index) => (
          <Card key={index} data={proj} variants={itemVariants} />
        ))}
      </motion.div>
    </div>
  );
};

export default Exp;
