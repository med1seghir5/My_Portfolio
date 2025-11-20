import './Exp.css';
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Exp.css';

interface ExpCardData {
  title: string;
  image: string;
}

const Card: React.FC<{ data: ExpCardData }> = ({ data }) => {
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
      className="project-card text-center"
      style={{
        width: 300,
        height: 300,
        borderRadius: 20,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        background: '#ffff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      <img
        src={data.image}
        alt={data.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
          {data.title}
        </h2>
      </div>
    </div>
  );
};

// Composant principal Project
const Exp: React.FC = () => {
  const Exps: ExpCardData[] = [
    {
      title: '1st place - DevChallenge 2024 (Frontend)',
      image: '/src/assets/Devchallenges.png',
    },
    {
      title: '3rd place - GDGthon (ideathon) 2024',
      image: '/src/assets/ideathon.jpg',
    },
    {
      title: 'Devfest 2024 Organizer',
      image: '/src/assets/DevfestCertificat.jpg',
    },
    {
      title: 'Internship Certificate at Algerie Telecom',
      image: '/src/assets/stage.png',
    },
    {
      title: 'Google Developer Student Club core team member for 2023/2024',
      image: '/src/assets/gdsc.png',
    },
    
  ];

  return (
    <div id='Exp' className="flex flex-col justify-center items-center gap-y-14 p-10 mt-48">
      <h1 className="font-['Josefin_Sans'] text-[50px] sm:text-4xl md:text-5xl lg:text-[70px] font-bold sm:font-light text-center
        bg-linear-to-r from-[#5DFFFF] via-[#8A7FF0] to-[#AE0CA7] bg-clip-text text-transparent">
        Experience & Achievements
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {Exps.map((proj, index) => (
          <Card key={index} data={proj} />
        ))}
      </div>
    </div>
  );
};

export default Exp;