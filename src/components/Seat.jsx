import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Seat() {
  const chair = useLoader(
    GLTFLoader,
    "/gltf/gaming_chair_free_download/scene.gltf"
  );
  return (
    <Suspense fallback={null}>
      <primitive object={chair.scene} />
    </Suspense>
  );
}

export default Seat;
