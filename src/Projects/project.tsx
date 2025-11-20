import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './project.css';

// Type pour les cartes
interface ProjectCardData {
  title: string;
  description: string;
  image: string;
}

// Composant Carte interactive
const Card: React.FC<{ data: ProjectCardData }> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 25,          // inclinaison maximale
        speed: 400,       // vitesse de l'animation
        glare: true,      // effet de lumière
        'max-glare': 0.5, // intensité du glare
      });
    }
  }, []);

  return (
    <div
      ref={ref}
      className="project-card"
      style={{
        width: 300,
        height: 400,
        borderRadius: 20,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        background: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />

      {/* Contenu de la carte */}
      <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Titre dans la carte */}
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
          {data.title}
        </h2>
        {/* Description */}
        <p style={{ fontSize: '0.9rem', color: '#555', flex: 1 }}>{data.description}</p>
      </div>
    </div>
  );
};

// Composant principal Project
const Project: React.FC = () => {
  const projects: ProjectCardData[] = [
    {
      title: 'Devfest 2023 website',
      description: 'Contributed to this project using ReactJS, TailwindCSS and ShadCN to create a modern, responsive and interactive website for Devfest 2023',
      image: '/src/assets/devfest23.png',
    },
    {
      title: 'Devfest 2024 website',
      description: 'Contributed to this project using ReactJS, TypeScript, TailwindCSS and ShadCN to create a modern, responsive and interactive website for Devfest 2024',
      image: '/src/assets/devfest24.png',
    },
    {
      title: 'FikraTech website',
      description: 'This website is about the event FikraTech realized by Constantine students in collaboration with GDSC Batna Contributed to this project using NextJs, TailwindCSS to create a modern, responsive and interactive website',
      image: '/src/assets/fikratech.png',
    },
    {
      title: 'FirGuard web_app',
      description: 'This website, developed as the solution for the Hackathon (3.6 Coding), was built using Next.js and TailwindCSS to create a modern, responsive, and interactive experience.',
      image: '/src/assets/3.6Coding.png',
    },
    {
      title: 'Chatbot ',
      description: 'A chatbot application connects a React front-end with a RESTful API back-end, powered by Together AI, for generating intelligent responses',
      image: '/src/assets/chatbot.png',
    },
      {
      title: 'Stock management web-app',
      description: 'GestStock is a full-stack inventory management system built with Next.js, Express.js, and MongoDB, featuring secure JWT authentication. It offers product CRUD operations ,',
      image: '/src/assets/gstStock.png',
    },
    {
      title: 'Portfolio website',
      description: 'A personal portfolio showcasing my projects, skills, and creativity through modern, interactive, and responsive web design, built with ReactJS, TailwindCSS, TypeScript, and Three.js (React Three Fiber).',
      image: '/src/assets/portfolio.png',
    },
  ];

  return (
    <div id='projects' className="flex flex-col justify-center items-center gap-y-14 p-10 mt-48">
      <h1 className="title bg-linear-to-r from-[#5DFFFF] via-[#8A7FF0] to-[#AE0CA7] bg-clip-text text-transparent">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((proj, index) => (
          <Card key={index} data={proj} />
        ))}
      </div>
    </div>
  );
};

export default Project;

