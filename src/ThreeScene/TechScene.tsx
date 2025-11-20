import React, { useLayoutEffect, useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader, Object3D } from "three";
import { OrbitControls } from "@react-three/drei";
import { degreesToRadians } from "popmotion";

const color = "#ffffff";

const Icosahedron: React.FC = () => (
  <mesh rotation-x={10} position={[0, 0, 0]}>
    <icosahedronGeometry args={[2, 3]} />
    <meshBasicMaterial wireframe color={color} opacity={0.15} transparent />
  </mesh>
);

function Logo({ theta, phi, url, size = 0.7 }: { theta: number; phi: number; url: string; size?: number }) {
  const ref = useRef<Object3D | null>(null);
  const tex = useLoader(TextureLoader, url);

  useLayoutEffect(() => {
    const distance = 5;
    ref.current!.position.setFromSphericalCoords(distance, phi, theta);
  }, [theta, phi]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial map={tex} transparent opacity={1} polygonOffset polygonOffsetFactor={-1} />
    </mesh>
  );
}

function Scene({ num = 50, logoSizeMultiplier = 1 }: { num?: number; logoSizeMultiplier?: number }) {
  const gl = useThree((s) => s.gl);
  useLayoutEffect(() => gl.setPixelRatio(1.5));

  const logos = [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png',
  ];

  const items: React.ReactNode[] = [];
  for (let i = 0; i < num; i++) {
    const theta = degreesToRadians(Math.random() * 360);
    const phi = degreesToRadians(Math.random() * 180);
    const url = logos[i % logos.length];
    items.push(<Logo key={i} theta={theta} phi={phi} url={url} size={(1.5 - (i % 10) * 0.15) * logoSizeMultiplier} />);
  }

  return (
    <>
      <ambientLight intensity={1.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Icosahedron />
      {items}
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default function TechScene() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive height et taille logos
  let canvasHeight = 700;
  let logoSizeMultiplier = 1;
  let cameraPosition: [number, number, number] = [0, 2, 10];

  if (windowWidth < 640) {
    // mobile
    canvasHeight = 400;
    logoSizeMultiplier = 0.6;
    cameraPosition = [0, 1.5, 8];
  } else if (windowWidth < 1024) {
    // tablette
    canvasHeight = 550;
    logoSizeMultiplier = 0.8;
    cameraPosition = [0, 1.8, 9];
  }

  return (
    <div style={{ height: canvasHeight }} className="sm:mx-10 mt-48 sm:mt-48">
      <Canvas camera={{ position: cameraPosition, fov: 50 }}>
        <Suspense fallback={null}>
          <Scene num={50} logoSizeMultiplier={logoSizeMultiplier} />
        </Suspense>
      </Canvas>
    </div>
  );
}
