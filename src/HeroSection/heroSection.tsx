<<<<<<< HEAD
import React from 'react';
import sghyr from '../assets/sghyr.png';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection: React.FC = () => {
  return (
    <section id='home' className="w-full flex flex-col justify-center items-center">
      <div className="w-full p-5 mb-10 relative z-20">
            <section className="hidden lg:flex flex-row justify-center items-center gap-x-12 p-4 font-['Josefin_Sans']">
              <a
                href="#home"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                About
              </a>
              <a
                href="#Memories"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Memories
              </a>
              <a
                href="#Exp"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Contact
              </a>
            </section>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 text-center lg:text-left">
        <div className="flex flex-col justify-center items-center lg:items-start gap-y-6 mb-10 lg:mb-0 font-['Josefin_Sans']">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white">
            Hi, I'm Abdelmalek Medseghir
          </h1>

          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold bg-linear-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
            <Typewriter
              words={["I'm a Full-Stack MERN Developer"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={2500}
            />
          </h2>

          <p className="w-full text-[17px] sm:w-[400px] md:w-[500px] lg:w-96 text-white/90 leading-relaxed">
            A self-taught front-end developer with over 2 months of experience,
            I build responsive and user-friendly websites & apps using clean code
            and efficient design.
          </p>

          <button className="font-medium px-4 py-2 rounded-full text-md bg-linear-to-r from-[#5DFFFF] to-[#AE0CA7] text-black shadow-md hover:shadow-lg hover:scale-105 transition hover:text-amber-50">
            <a href="#">Download CV</a>
          </button>
        </div>

        <div>
          <img
            src={sghyr}
            alt="Abdelmalek Medseghir"
            className="h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

=======
import React from 'react';
import sghyr from '../assets/sghyr.png';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection: React.FC = () => {
  return (
    <section id='home' className="w-full flex flex-col justify-center items-center">
      <div className="w-full p-5 mb-10 relative z-20">
            <section className="hidden lg:flex flex-row justify-center items-center gap-x-12 p-4 font-['Josefin_Sans']">
              <a
                href="#home"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                About
              </a>
              <a
                href="#Memories"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Memories
              </a>
              <a
                href="#Exp"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-transparent hover:bg-linear-to-r hover:from-[#5DFFFF] hover:via-[#8A7FF0] hover:to-[#AE0CA7] hover:bg-clip-text transition-all duration-300"
              >
                Contact
              </a>
            </section>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 text-center lg:text-left">
        <div className="flex flex-col justify-center items-center lg:items-start gap-y-6 mb-10 lg:mb-0 font-['Josefin_Sans']">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white">
            Hi, I'm Abdelmalek Medseghir
          </h1>

          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold bg-linear-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
            <Typewriter
              words={["I'm a Full-Stack MERN Developer"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={2500}
            />
          </h2>

          <p className="w-full text-[17px] sm:w-[400px] md:w-[500px] lg:w-96 text-white/90 leading-relaxed">
            A self-taught front-end developer with over 2 months of experience,
            I build responsive and user-friendly websites & apps using clean code
            and efficient design.
          </p>

          <button className="font-medium px-4 py-2 rounded-full text-md bg-linear-to-r from-[#5DFFFF] to-[#AE0CA7] text-black shadow-md hover:shadow-lg hover:scale-105 transition hover:text-amber-50">
            <a href="#">Download CV</a>
          </button>
        </div>

        <div>
          <img
            src={sghyr}
            alt="Abdelmalek Medseghir"
            className="h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

>>>>>>> 476f160ad299c7d325babf7aed63cb2af376122b
