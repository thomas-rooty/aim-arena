'use client'
import { Canvas } from '@react-three/fiber'
import Controls from "@/utils/Controls";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [-1, 1, 5], fov: 65 }}
    >
      <color attach="background" args={["lightblue"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Controls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}

export default Scene
