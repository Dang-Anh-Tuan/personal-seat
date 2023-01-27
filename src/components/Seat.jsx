import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Chair from "./Chair";
import Keyboard from "./Keyboard";
import Monitor from "./Monitor";
import Mouse from "./Mouse";
import Table from "./Table";
import { changeShowPopupInfo } from "../features/popupInfo/popupInfoSlice";
import { getCurrentUser } from "../features/users/usersSlice";
import { changeCurrentSeatId } from "../features/seat/seatSlice";

function Seat({ seatId, employee, ...props }) {
  const [hovered, setHovered] = useState(false);
  const [colorText, setColorText] = useState("white");
  const dispatch = useDispatch();

  const textSeat = employee
    ? `${employee.name}
${employee.code}
          `
    : "Empty";

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  function handlePointerOver() {
    setHovered(true);
    setColorText("#f42c52");
  }

  function handlePointerOut() {
    setHovered(false);
    setColorText("white");
  }

  function handleShowInfoOfSeat() {
    dispatch(changeCurrentSeatId(seatId));
    dispatch(getCurrentUser(seatId));
    dispatch(changeShowPopupInfo(true));
  }

  return (
    <group
      {...props}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleShowInfoOfSeat}
    >
      <Text
        color={colorText}
        anchorX="center"
        anchorY="middle"
        position={[0, 3.5, 3.8]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.3}
      >
        {textSeat}
      </Text>
      <Chair position={[0, -0.3, 0]} scale={0.01} receiveShadow castShadow />
      <Table
        position={[-2.1, 0, 1.2]}
        scale={0.03}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
        castShadow
      />
      <Monitor
        position={[0, 0.1, 3.8]}
        scale={0.7}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      />
      <Keyboard
        position={[0, 2.71, 2.5]}
        scale={0.7}
        rotation={[Math.PI / 1.3, Math.PI / 3.5, Math.PI / 12]}
        receiveShadow
        castShadow
      />
      <Mouse
        position={[-1, 2.75, 2.6]}
        scale={[0.07, 0.07, 0.09]}
        rotation={[0, 0, 0]}
        receiveShadow
        castShadow
      />
    </group>
  );
}

export default Seat;
