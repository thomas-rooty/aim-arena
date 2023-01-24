'use client'
import { Canvas } from '@react-three/fiber'
import FpsView from "@/utils/fpsView";
import Floor from "@/components/floor/Floor";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 65 }}
    >
      <color attach="background" args={["lightyellow"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <FpsView />
      <Floor />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}

export default Scene
