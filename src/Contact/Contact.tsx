import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css';
const Contact: React.FC = () => {
  const githubUrl = "https://github.com/med1seghir5";
  const linkedinUrl = "https://www.linkedin.com/in/mohamed-seghir-abdelmalek?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
  const email = "mohamed.abdelmalek@etu.univ-batna2.dz";
  const phone = "+213675915448";

  return (
   <div id="contact" className="flex flex-col justify-center items-center p-5 sm:p-10 mt-24 sm:mt-48 gap-10 font-['Josefin_Sans']">
      <h1 className="title text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-[#5DFFFF] via-[#8A7FF0] to-[#AE0CA7] bg-clip-text text-transparent text-center">
        Contact Me
      </h1>
          <motion.div
            className="contact-text flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="flex flex-col gap-6 items-center md:items-start text-white w-full max-w-sm md:max-w-none font-['Josefin_Sans']">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#8A7FF0] transition-colors text-sm sm:text-base md:text-base"
          >
            <FaGithub size={32} /> GitHub
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#8A7FF0] transition-colors text-sm sm:text-base md:text-base"
          >
            <FaLinkedin size={32} /> LinkedIn
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 hover:text-[#8A7FF0] transition-colors break-words text-sm sm:text-base md:text-base"
          >
            <FaEnvelope size={32} /> {email}
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 hover:text-[#8A7FF0] transition-colors break-words text-sm sm:text-base md:text-base"
          >
            <FaPhone size={32} /> {phone}
          </a>
        </div>

        <motion.form
          className="flex flex-col gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md"
          onSubmit={(e) => e.preventDefault()}
          whileHover={{ scale: 1.02 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A7FF0]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A7FF0]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A7FF0] resize-none"
          />
          <button
            type="submit"
            className="bg-linear-to-r from-[#5DFFFF] via-[#8A7FF0] to-[#AE0CA7] py-3 rounded-lg text-white font-bold hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
