import { useGLTF } from "@react-three/drei";
import React from "react";

export default function LoadModel({ url, ...props }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} {...props} />;
}
