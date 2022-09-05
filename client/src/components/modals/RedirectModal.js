import React from "react";
import { ModalWrapper } from "reoverlay";
import "reoverlay/lib/ModalWrapper.css";

export default function RedirectModal({ redirectText, onConfirm }) {

  return (
    <ModalWrapper>
      <div className="bg-gray-200 py-24 px-24 m-3 rounded-xl shadow-xl">
        <span className="text-xl">{redirectText}</span>
        <div className="flex justify-around mt-12 -mb-12">
          <button
            onClick={onConfirm}
            type="button"
            className="text-gray-200 bg-green-700 hover:bg-green-800 hover:text-white transition ease-in-out duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-lg"
          >
            Leave A Review
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
