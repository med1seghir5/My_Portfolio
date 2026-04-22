import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  return (
    <div id='about' className="w-full flex flex-col justify-center items-center gap-y-10 p-5 sm:p-10 relative z-10 pt-32">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-['Josefin_Sans'] text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gradient"
      >
        About Me
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-panel p-8 sm:p-12 rounded-3xl w-full max-w-4xl relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <p className="font-['Josefin_Sans'] text-base sm:text-lg lg:text-xl font-light text-center sm:text-justify text-white/80 leading-relaxed sm:leading-loose">
          Hi, I’m <strong>Abdelmalek Mohamed Seghir</strong>, a 21-year-old Master’s student in Cyber Security at the University of Batna 2. I hold a Bachelor’s degree in Information Systems and Software Engineering.
          <br /><br />
          I am a Junior Full-Stack MERN Developer, passionate about building responsive, user-friendly web applications with clean code and efficient design. Over the years, I have worked on several personal and academic projects, which helped me strengthen my development and problem-solving skills.
          <br /><br />
          I also have experience participating in hackathons and ideathons, and I have been actively involved in scientific and tech clubs, which enhanced my teamwork, creativity, and innovation skills. I love turning ideas into functional applications and continuously learning new technologies to improve my craft.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
