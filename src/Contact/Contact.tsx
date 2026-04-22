import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css';
const Contact: React.FC = () => {
  const githubUrl = "https://github.com/med1seghir5";
  const linkedinUrl = "https://www.linkedin.com/in/mohamed-seghir-abdelmalek?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
  const email = "mohamed.abdelmalek@etu.univ-batna2.dz";
  const phone = "+213675915448";

  return (
    <div id="contact" className="flex flex-col justify-center items-center p-5 sm:p-10 mt-32 gap-10 relative z-10 w-full max-w-7xl mx-auto mb-20 whitespace-normal">
      <h1 className="font-['Josefin_Sans'] text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gradient">
        Contact Me
      </h1>
          <motion.div
            className="contact-text flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24 w-full max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-6 items-center md:items-start text-white/80 w-full md:w-1/2 font-['Josefin_Sans'] glass-panel p-8 rounded-3xl group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-white transition-colors text-base sm:text-lg w-full p-4 rounded-xl hover:bg-white/5 relative z-10"
          >
            <div className="p-3 glass-panel rounded-full text-[#a855f7]"><FaGithub size={24} /></div>
            <span className="font-medium tracking-wide">GitHub</span>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-white transition-colors text-base sm:text-lg w-full p-4 rounded-xl hover:bg-white/5 relative z-10"
          >
            <div className="p-3 glass-panel rounded-full text-[#06b6d4]"><FaLinkedin size={24} /></div>
            <span className="font-medium tracking-wide">LinkedIn</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 hover:text-white transition-colors text-base sm:text-lg w-full p-4 rounded-xl hover:bg-white/5 relative z-10"
          >
            <div className="p-3 glass-panel rounded-full text-[#f472b6]"><FaEnvelope size={24} /></div>
            <span className="break-all font-medium tracking-wide">{email}</span>
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-4 hover:text-white transition-colors text-base sm:text-lg w-full p-4 rounded-xl hover:bg-white/5 relative z-10"
          >
            <div className="p-3 glass-panel rounded-full text-[#9333ea]"><FaPhone size={24} /></div>
            <span className="font-medium tracking-wide">{phone}</span>
          </a>
        </div>

        <motion.form
          className="flex flex-col gap-6 glass-panel p-8 rounded-3xl w-full md:w-1/2 relative"
          onSubmit={(e) => e.preventDefault()}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-semibold tracking-widest uppercase pl-2">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent transition-all placeholder:text-white/20"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-semibold tracking-widest uppercase pl-2">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent transition-all placeholder:text-white/20"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-semibold tracking-widest uppercase pl-2">Message</label>
            <textarea
              placeholder="Hello..."
              rows={4}
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent transition-all placeholder:text-white/20 resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="btn-primary py-4 rounded-xl font-bold tracking-widest uppercase mt-2 text-sm"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
