import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Chair(props) {
  const gltf = useGLTF("./models/chair/chair.gltf");
  return <primitive object={gltf.scene} />;
}
