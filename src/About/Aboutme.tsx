import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div id='about' className="flex flex-col justify-center items-center gap-y-2 p-5 sm:p-10 sm:gap-y-7 mt-24 sm:mt-48">
      <h1 className="font-['Josefin_Sans'] text-[50px] sm:text-4xl md:text-5xl lg:text-[70px] font-bold sm:font-light text-center
        bg-linear-to-r from-[#5DFFFF] via-[#8A7FF0] to-[#AE0CA7] bg-clip-text text-transparent">
        About me
      </h1>
      <p className="font-['Josefin_Sans'] text-lg sm:text-lg md:text-xl lg:text-[24px] font-light text-center
        w-full max-w-[1000px] bg-linear-to-r from-[#5DFFFF] via-[#8A7FF0] to-[#AE0CA7] bg-clip-text text-transparent">
        Hi, I’m Abdelmalek Mohamed Seghir, a 21-year-old Master’s student in Distributed Systems and Security Engineering at the University of Batna 2. I hold a Bachelor’s degree in Information Systems and Software Engineering.
        I am a Junior Full-Stack MERN Developer, passionate about building responsive, user-friendly web applications with clean code and efficient design. Over the years, I have worked on several personal and academic projects, which helped me strengthen my development and problem-solving skills.
        I also have experience participating in hackathons and ideathons, and I have been actively involved in scientific and tech clubs, which enhanced my teamwork, creativity, and innovation skills.
        I love turning ideas into functional applications and continuously learning new technologies to improve my craft.
      </p>
    </div>
  );
};

export default AboutMe;
