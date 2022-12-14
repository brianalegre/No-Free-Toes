import React from "react";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "reoverlay/lib/ModalWrapper.css";

const BookTimeSlotModal = ({ confirmText, onConfirm }) => {
  const closeModal = () => {
    Reoverlay.hideModal();
  };

  return (
    <ModalWrapper>
      <div className="bg-gray-200 py-24 px-24 m-3 rounded-xl shadow-xl">
        <span className="text-xl">{confirmText}</span>
        <div className="flex justify-around mt-24 -mb-12">
          <button
            className="outline outline-1 outline-gray-500 py-2 px-6 rounded-xl transition ease-in-out duration-150 hover:bg-green-600 hover:text-white shadow-lg"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="outline outline-1 outline-gray-500 py-2 px-6 rounded-xl transition ease-in-out duration-150 hover:bg-red-600 hover:text-white shadow-lg"
            onClick={closeModal}
          >
            No
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookTimeSlotModal;
