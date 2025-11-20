import { Canvas, } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

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
