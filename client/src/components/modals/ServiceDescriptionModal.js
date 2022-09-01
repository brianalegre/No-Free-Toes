import React from "react";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "reoverlay/lib/ModalWrapper.css";

const ServiceDesriptionModal = ({ serviceDescription }) => {
  const closeModal = () => {
    Reoverlay.hideModal();
  };

  return (
    <ModalWrapper>
      <div className="bg-gray-200 py-24 px-24">
        <span className="text-xl">{serviceDescription}</span>
        <div className="flex justify-around mt-12 -mb-12">
          <button
            className="outline outline-1 outline-gray-500 py-2 px-12 rounded-xl transition ease-in-out duration-150 hover:bg-red-600 hover:text-white"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ServiceDesriptionModal;

