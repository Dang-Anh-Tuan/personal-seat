import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import PopupInfoSeat from "./components/PopupInfoSeat";
import Seat from "./components/Seat";
import seats from "./constants/seats";

const employeeExample = {
  name: "Tuan",
  code: "2101",
};

function App() {
  const users = useSelector((state) => state.users.users);

  console.log(users);
  const seatsMergedUsers = seats.map((seat) => ({
    ...seat,
    employee: users.find((user) => user.seatID === seat.seatId),
  }));

  console.log(seatsMergedUsers);

  return (
    <>
      <Suspense>
        <Canvas
          shadows
          className="app"
          camera={{ position: [-7, 4, -7], fov: 90 }}
        >
          <OrbitControls />
          <ambientLight intensity={1} />
          {/* <directionalLight
          position={[-2, 3, 0]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024} 
          shadow-bias={-0.01}
        /> */}
          {/* <MyBox /> */}
          <spotLight
            args={["#ffffff", 1.5, 3, Math.PI / 4, 100]}
            position={[0, 10, 10]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.01}
          />
          {seatsMergedUsers &&
            seatsMergedUsers.map((seat) => (
              <Seat
                key={seat.seatId}
                seatId={seat.seatId}
                position={seat.position}
                rotation={seat.rotation}
                employee={seat.employee}
              ></Seat>
            ))}
        </Canvas>
      </Suspense>
      <PopupInfoSeat />
    </>
  );
}

export default App;
