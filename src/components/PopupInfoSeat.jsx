import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { changeShowPopupInfo } from "../features/popupInfo/popupInfoSlice";
import { changeSeatId } from "../features/users/usersSlice";

function PopupInfoSeat() {
  const showPopup = useSelector((state) => state.popupInfo.show);
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  const currentSeatId = useSelector((state) => state.seat.currentSeatId);
  const [currentCodeSelected, setCurrentCodeSelected] = useState();
  const dispatch = useDispatch();

  function handleClosePopup() {
    dispatch(changeShowPopupInfo(false));
  }

  function handleClearSeat() {
    if (currentUser) {
      dispatch(changeSeatId({ code: currentUser?.code, seatID: null }));
    } else {
      dispatch(
        changeSeatId({ code: currentCodeSelected, seatID: currentSeatId })
      );
    }
    dispatch(changeShowPopupInfo(false));
  }

  function handleChangeSelect(e) {
    setCurrentCodeSelected(e.target.value);
  }

  return (
    <Modal
      isOpen={showPopup}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader>Thong tin cho ngoi</ModalHeader>
      <ModalBody>
        {currentUser ? (
          <>
            <p>{`Ho ten : ${currentUser.name}`}</p>
            <p>{`Ma nhan vien : ${currentUser.code}`}</p>
          </>
        ) : (
          <>
            <label for="code">Chon nhan vien cho cho ngoi</label>
            <br />
            <select name="code" id="code" onChange={handleChangeSelect}>
              {users &&
                users.map((user) => (
                  <option
                    key={user.code}
                    value={user.code}
                  >{`${user.name} - ${user.code}`}</option>
                ))}
            </select>
          </>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleClearSeat}>
          {currentUser ? "Xoa thong tin cho ngoi" : "Xep cho"}
        </Button>{" "}
        <Button color="secondary" onClick={handleClosePopup}>
          Dong
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default PopupInfoSeat;
