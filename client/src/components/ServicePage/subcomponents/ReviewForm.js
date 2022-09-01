// import React from "react";
import React, { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_SERVICECOMMENT } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import DynamicStar from "./DynamicStar";
import toast from "react-hot-toast";

export default function ReviewForm({ refetch, data }) {
  // retrieving logged user's ID by decoding token
  const {
    data: { _id: loggedInUserId },
  } = Auth.getProfile();

  // retrieving service user ID via params
  const { serviceUserId } = useParams();

  // utilizing useRef hook to grab value service rating value via star that they click on
  const starRef = useRef();

  // utilizing useState hook to set user's input in text box
  const [commentText, setCommentText] = useState("");

  // handler to retrieve value that user types in text box and setting it as our state
  // we call this function in the text box (onChange)
  const handleUserInput = (e) => {
    setCommentText(e.target.value);
  };

  // we create a function called addReview and assign it to useMutation; we call this function on our 'submit' button as an onClick
  const [addReview] = useMutation(ADD_SERVICECOMMENT);

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
          {/* we pass in starRef as a prop so we can use it in our DynamicStar component */}
          <DynamicStar starRef={starRef} data={data} />
        </div>
      </div>

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 sm:-mb-3 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>

      <textarea
        // we call our handleUserInput function to set whatever they type in as our userInput state
        onChange={handleUserInput}
        id="commentText"
        rows="4"
        value={commentText}
        required={true}
        className="block p-2.5 w-full text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-500"
        placeholder="Leave a review..."
      />

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 bg-gray-100">
        <div className="inline-block min-w-full"></div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              // error handling
              if (commentText == "")
                return toast.error(
                  "Please make sure to fill in all required fields."
                );


              // we invoke an anonymous function on click that calls addReview as a call back function.
              // we pass in the variables required in our mutation, and send the data over to add to our backend
              else {
                addReview({
                  variables: {
                    commentText,
                    serviceRating: starRef.current,
                    serviceUser: serviceUserId,
                    normalUser: loggedInUserId,
                  },
                });

                // refetch comes in as a prop from ServiceComments parent component...
                // refetch is a function included in useQuery; it runs the QUERY again if data in the back end changes
                // without this function, you would have to refresh the page in order to see the comment that was just created.
                refetch();

                //clear text box, reset starRef value to 0
                // provide user a visual confirmation that their request was successful
                setCommentText("");
                starRef.current = 0
                toast.success("Review successfully posted!");
              }
            }}
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
