import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CoffeeCup = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <cylinderGeometry args={[1, 1, 0.2, 64]} />
      <meshStandardMaterial color="#6f4e37" />
      <mesh position={[0, 0.6, 0]} scale={[0.9, 1.2, 0.9]}>
        <cylinderGeometry args={[0.95, 0.8, 1, 64]} />
        <meshStandardMaterial color="#2c1e12" />
      </mesh>
    </mesh>
  );
};

const CoffeeCanvas = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <CoffeeCup />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default CoffeeCanvas;
