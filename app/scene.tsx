'use client'
import { Canvas } from '@react-three/fiber'
import FpsView from "@/utils/fpsView";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [-1, 1, 5], fov: 65 }}
    >
      <color attach="background" args={["lightyellow"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <FpsView />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}

export default Scene
