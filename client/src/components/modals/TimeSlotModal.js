import React from "react";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "reoverlay/lib/ModalWrapper.css";
import TimeSlotCreator from "../ServiceAccount/subcomponents/TimeSlotCreator"

const TimeSlotModal = ({ loggedInUserId, refetch }) => {
  const closeModal = () => {
    Reoverlay.hideModal();
  };

  return (
    <ModalWrapper>
      <div className="bg-gray-200 px-24">
          <TimeSlotCreator loggedInUserId={loggedInUserId} refetch={refetch} />
        <div className="flex justify-around pb-8">
          <button
            className="outline outline-1 outline-gray-500 py-2 px-6 rounded-xl transition ease-in-out duration-150 hover:bg-red-600 hover:text-white"
            onClick={closeModal}
          >
            Close 
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TimeSlotModal;