import AboutMe from './About/Aboutme';
import VantaBackground from './Background/vantaBackground';
import Contact from './Contact/Contact';
import Exp from './Experience/Exp';
import HeroSection from './HeroSection/heroSection';
import Pictures from './Pictures/Picture';
import Project from './Projects/project';
import Skills from './Skills/Skills';
import TechScene from './ThreeScene/TechScene';

function App() {
  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden relative mb-14">
      <VantaBackground />
      <HeroSection />
      <AboutMe />
      <TechScene />
      <Skills />
      <Project />
      <Exp />
      <Pictures />
      <Contact />
    </div>
  );
}

export default App;

