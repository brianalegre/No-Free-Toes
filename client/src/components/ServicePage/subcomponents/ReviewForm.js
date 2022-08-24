// import React from "react";
import React, { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_SERVICECOMMENT } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import DynamicStar from "./DynamicStar";

export default function ReviewForm() {
  // retrieving logged user's ID by decoding token
  const {
    data: { _id: loggedUserId },
  } = Auth.getProfile();

  // retrieving service user ID via params
  const { serviceUserId } = useParams();

  // utilizing useRef hook to grab value service rating value via star that they click on
  const starRef = useRef();

  // utilizing useState hook to set user's input in text box
  const [userInput, setUserInput] = useState("");

  // handler to retrieve value that user types in text box and setting it as our state
  // we call this function in the text box (onChange)
  const handleUserInput = (e) => {
    e.preventDefault()
    setUserInput(e.target.value);
  }

  // useMutation(ADD_SERVICECOMMENT, {
  //   variables: {
  //     commentText: userInput,
  //     serviceRating: starRef.current,
  //     serviceUserId: serviceUserId,
  //     normalUserId: loggedUserId,
  //   },
  //   fetchPolicy: "no-cache",
  // });

  return (
    <>
      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-7 bg-gray-100">
        <div className="flex flex-col min-w-full pl-2">
          <span className="text-sm sm:text-base">
            Service Provider Rating:{" "}
          </span>
          <DynamicStar starRef={starRef} />
        </div>
      </div>

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 sm:-mb-3 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>

      <textarea
        onChange={handleUserInput}
        id="commentText"
        rows="4"
        className="block p-2.5 w-full text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        placeholder="Leave a review..."
      />

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 bg-gray-100">
        <div className="inline-block min-w-full"></div>

        <div className="flex justify-end">
          <button
            onClick={() =>
              console.log(
                `Service Rating: `,
                starRef.current,
                `normalUserId: `,
                loggedUserId,
                `serviceUserId: `,
                serviceUserId,
                userInput
              )
            }
            type="button"
            className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2"
          >
            Submit Review
          </button>
        </div>
      </div>
    </>
  );
}
