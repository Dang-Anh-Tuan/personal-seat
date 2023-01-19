import {
  AccumulativeShadows,
  Environment,
  OrbitControls,
  Plane,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import MyBox from "./components/MyBox";
import * as THREE from "three";
import Seat from "./components/Seat";
import Chair from "./components/Chair";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <Canvas
        shadows
        className="app"
        camera={{ position: [0, 500, 500], fov: 90 }}
      >
        <OrbitControls />
        <fog attach="fog" args={["white", 0, 40]} />
        <primitive object={new THREE.AxesHelper(10)} />
        <ambientLight intensity={1} />
        {/* <directionalLight
        position={[-2, 3, 0]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.01}
      /> */}
        <spotLight
          args={["#ffffff", 1.5, 200, Math.PI / 4, 100]}
          position={[0, 500, 500]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.01}
        />
        {/* <MyBox /> */}
        <Chair />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[1000, 1000]} />
          <meshPhongMaterial color={"white"} />
        </mesh>
      </Canvas>
    </Suspense>
  );
}

export default App;
