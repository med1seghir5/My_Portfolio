import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars } from "@react-three/drei";

const FloatingSphere = () => {
  const ref = useRef<any>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 2;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <Sphere ref={ref} args={[1, 32, 32]}>
      <meshStandardMaterial color="#4fc3f7" />
    </Sphere>
  );
};

const VantaBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-50"
      style={{
        background: "linear-gradient(62deg, #100425 0%, #100425 100%)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={5.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Canvas>
    </div>
  );
};

export default VantaBackground;
