// src/components/TreeModel.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cylinder, MeshWobbleMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three'; // Để làm vật liệu đẹp hơn

const TreeModel = () => {
  return (
    <Canvas style={{ height: '100vh', background: '#87CEEB' }}>
      {/* Ánh sáng */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <OrbitControls enableZoom={true} />

      {/* Thân cây */}
      <Cylinder
        args={[0.5, 0.8, 5, 16]}
        position={[0, 2.5, 0]}
        rotation={[0, 0, 0]}
      >
        <MeshWobbleMaterial
          color="#8B4513" // Màu nâu cho thân cây
          speed={0.5}
          factor={0.1}
        />
      </Cylinder>

      {/* Tán lá tầng 1 */}
      <Sphere args={[1.8, 32, 32]} position={[0, 6, 0]}>
        <meshStandardMaterial color="green" />
      </Sphere>

      {/* Tán lá tầng 2 */}
      <Sphere args={[1.5, 32, 32]} position={[0, 7.8, 0]}>
        <meshStandardMaterial color="darkgreen" />
      </Sphere>

      {/* Tán lá tầng 3 */}
      <Sphere args={[1.2, 32, 32]} position={[0, 9.2, 0]}>
        <meshStandardMaterial color="forestgreen" />
      </Sphere>
    </Canvas>
  );
};

export default TreeModel;
