const Floor = () => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      receiveShadow={true}
    >
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

export default Floor;
