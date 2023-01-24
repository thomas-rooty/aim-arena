import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {PointerLockControls} from "@react-three/drei";
import {useControls} from "@/utils/useControls";

const FpsView = () => {
  const isLocked = useRef(false);
  const controls = useControls();
  const controlsRef = useRef<any>();

  useFrame(() => {
    const velocity = 0.05;

    // Init controls
    const {forward, backward, left, right, brake, reset, interact} = controls.current;

    // Manage controls
    if (forward) {
      controlsRef.current.moveForward(velocity);
    }
    if (backward) {
      controlsRef.current.moveForward(-velocity);
    }
    if (left) {
      controlsRef.current.moveRight(-velocity/1.33);
    }
    if (right) {
      controlsRef.current.moveRight(velocity/1.33);
    }
    if (brake) {
      console.log("brake");
    }
    if (reset) {
      console.log("reset");
    }
    if (interact) {
      console.log("interact");
    }
  });

  return (
    <PointerLockControls
      onUpdate={() => {
        if (controlsRef.current) {
          controlsRef.current.addEventListener("lock", () => {
            console.log("lock");
            isLocked.current = true;
          });
          controlsRef.current.addEventListener("unlock", () => {
            console.log("unlock");
            isLocked.current = false;
          });
        }
      }}
      ref={controlsRef}
    />
  );
};

export default FpsView;
