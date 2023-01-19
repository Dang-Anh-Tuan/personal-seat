import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function MyBox() {
  return (
    <Sphere
      castShadow={true}
      receiveShadow={true}
      position={[0, 0.5, 0]}
    >
      <meshStandardMaterial attach="material" color="hotpink" />
    </Sphere>
  );
}

export default MyBox;
