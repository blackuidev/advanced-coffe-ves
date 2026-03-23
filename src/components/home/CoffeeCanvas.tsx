import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CoffeeCup = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, Math.sin(t * 0.5) * 0.5, 0.1);
      groupRef.current.position.y = Math.sin(t * 0.7) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={2.5} dispose={null}>
      {/* Saucer */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
        <torusGeometry args={[1.2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#a18072" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Cup */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.9, 0.7, 1.2, 64]} />
        <meshStandardMaterial color="#fdf8f6" metalness={0.2} roughness={0.5} />
      </mesh>
       {/* Coffee */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 64]} />
        <meshStandardMaterial color="#43302b" roughness={0.2} />
      </mesh>
    </group>
  );
};

const CoffeeCanvas = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full opacity-50">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#bfa094" />
        <CoffeeCup />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 2.2} />
      </Canvas>
    </div>
  );
};

export default CoffeeCanvas;
