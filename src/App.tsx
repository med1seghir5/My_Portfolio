import { Suspense, lazy } from 'react';

const AboutMe = lazy(() => import('./About/Aboutme'));
const VantaBackground = lazy(() => import('./Background/vantaBackground'));
const Contact = lazy(() => import('./Contact/Contact'));
const Exp = lazy(() => import('./Experience/Exp'));
const HeroSection = lazy(() => import('./HeroSection/heroSection'));
const Pictures = lazy(() => import('./Pictures/Picture'));
const Project = lazy(() => import('./Projects/project'));
const Skills = lazy(() => import('./Skills/Skills'));
// TechScene is heavy due to ThreeJS dependencies
const TechScene = lazy(() => import('./ThreeScene/TechScene'));

// Loading Screen Fallback
const LoadingScreen = () => (
  <div className="w-full h-screen flex flex-col justify-center items-center bg-[#050505] z-[9999] fixed inset-0">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#a855f7] mb-4"></div>
    <span className="text-[#a855f7] font-['Josefin_Sans'] tracking-widest animate-pulse font-medium">LOADING...</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden relative mb-14">
      <Suspense fallback={<LoadingScreen />}>
        <VantaBackground />
        <HeroSection />
        <AboutMe />
        <TechScene />
        <Skills />
        <Project />
        <Exp />
        <Pictures />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;

