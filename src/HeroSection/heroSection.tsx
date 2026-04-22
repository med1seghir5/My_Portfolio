import sghyr from '../assets/sghyr.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id='home' className="w-full min-h-screen flex flex-col justify-center items-center relative">
      {/* Floating Navigation */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl hidden lg:flex justify-center"
      >
        <nav className="glass-panel w-full flex flex-row justify-center items-center gap-x-10 p-4 rounded-full font-['Josefin_Sans'] text-sm tracking-wider">
          <a href="#home" className="text-white/70 hover:text-white transition-colors duration-300">Home</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">About</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#Exp" className="text-white/70 hover:text-white transition-colors duration-300">Experience</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">Contact</a>
        </nav>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 text-center lg:text-left mt-20 lg:mt-0 p-6 z-10 w-full max-w-7xl mx-auto"
      >
        <div className="flex flex-col justify-center items-center lg:items-start gap-y-6 font-['Josefin_Sans'] flex-1">
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass-panel mb-2">
            <span className="text-sm font-medium tracking-widest text-[#a855f7]">WELCOME TO MY UNIVERSE</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Hi, I'm <br className="hidden lg:block"/>
            <span className="text-gradient">Abdelmalek.</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-light text-white/80 h-[40px]">
            <Typewriter
              words={["I'm a Full-Stack MERN Developer", "I build secure web apps", "I love clean design"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={2500}
            />
          </motion.h2>

          <motion.p variants={itemVariants} className="w-full text-lg sm:text-xl text-white/60 leading-relaxed font-light max-w-xl">
            A self-taught web developer, I create responsive, user-friendly websites and applications, focusing on clean code and efficient, modern design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 mt-6">
            <a href="/PDF/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3 rounded-full font-semibold tracking-wide text-sm">
              View Résumé
            </a>
            <a href="#contact" className="glass-panel px-8 py-3 rounded-full font-semibold tracking-wide text-sm text-white hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative group p-1"
          >
            {/* Spinning glowing background blob */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-1000"
            ></motion.div>
            
            {/* Profile Picture Container */}
            <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px] rounded-full overflow-hidden border-2 border-white/20 glass-panel shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <img
                src={sghyr}
                alt="Abdelmalek Medseghir"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 hover:rotate-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

