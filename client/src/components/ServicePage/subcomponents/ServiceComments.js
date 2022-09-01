import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { QUERY_SERVICECOMMENTS_BY_SERVICEUSERID } from "../../../utils/queries";
import { DELETE_SERVICECOMMENT } from "../../../utils/mutations";
import { Reoverlay } from "reoverlay";
import ConfirmationModal from "../../modals/ConfirmationModal";
import toast from "react-hot-toast";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
  ZeroStar,
} from "./StaticStars";
import Auth from "../../../utils/auth";
import ReviewForm from "./ReviewForm";
import * as moment from "moment";

export default function Reviews() {
  // set the parameter at the link up top as serviceUserId
  const { serviceUserId } = useParams();

  // set the state of serviceComments as an array to match our schema/models
  const [serviceComments, setServiceComments] = useState([]);

  // initial state of render reviewform is false, once true (on button click) we render in the reviewForm component
  const [renderReviewForm, setRenderReviewForm] = useState(false);

  // pulling out the deleteReview function from useMutation hook and attaching the mutation we wrote
  const [deleteReview] = useMutation(DELETE_SERVICECOMMENT);

  // CHECK IF LOGGED
  const isLoggedIn = Auth.loggedIn() ? true : false;

  //create navigate function to assign to useNavigate to redirect user to login page if not logged in
  const navigate = useNavigate();

  // if isLoggedin true then get the user id from the token
  // else set the user id to null
  const loggedInUserId = isLoggedIn ? Auth.getProfile().data._id : null;

  // using the useQuery hook to retrieve data from the back end
  const { loading, error, data, refetch } = useQuery(
    QUERY_SERVICECOMMENTS_BY_SERVICEUSERID,
    {
      variables: { serviceUserId: serviceUserId },
    }
  );

  // allows data to mount owhenever [data] parameter is changed
  // IF data is available, we set the service comments that we received from the back end as our state in the front end.
  useEffect(() => {
    if (data) {
      setServiceComments(data.serviceComments);
    }
  }, [data]);

  // optional chaining (?.) is needed here because initially, when this page opens, serviceReviews isn't available due to
  // useEffect's [data] parameter not triggering yet so we end up getting an run time error that crashes the app...
  // with optional chaining, it sets serviceReviews as 'undefined' and allows the code to run so our useEffect can work after.
  const serviceReviews = serviceComments?.map((reviews, i) => {
    // destructuring the data we receive from the back end
    const {
      _id: serviceCommentId,
      commentText,
      commentCreated,
      serviceRating,
      normalUser: {
        _id: reviewCreatorUserId,
        firstName: normalUserFn,
        lastName: normalUserLn,
      },
    } = reviews;

    // parsing the UNIX date that received from backend using moment.js
    const parsedDate = moment({ commentCreated }).format("ll");

    // renders the user's ratings as stars
    let showRating;

    if (serviceRating === 5) {
      showRating = <FiveStar />;
    }
    if (serviceRating === 4) {
      showRating = <FourStar />;
    }
    if (serviceRating === 3) {
      showRating = <ThreeStar />;
    }
    if (serviceRating === 2) {
      showRating = <TwoStar />;
    }
    if (serviceRating === 1) {
      showRating = <OneStar />;
    }
    if (serviceRating === 0) {
      showRating = <ZeroStar />;
    }

    // confirmation modal when user tries to delet a review
    const deletePost = () => {
      Reoverlay.showModal(ConfirmationModal, {
        confirmText: "Are you sure you want to delete this review?",
        onConfirm: async () => {
          await deleteReview({
            variables: {
              serviceCommentId,
              normalUser: loggedInUserId,
            },
          });

          refetch();
          toast.success("Review successfully deleted!");
          return Reoverlay.hideModal();
        },
      });
    };

    return (
      <>
        <div
          key={normalUserFn + normalUserLn + "review card " + i}
          className="min-w-full h-auto bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <div
            key={normalUserFn + normalUserLn + "review banner " + i}
            className="flex pl-3 sm:pl-4 py-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <img
              className="w-16"
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="default avatar"
            />
            <div className="pl-2 sm:pl-3 flex flex-col align-middle">
              <p className="text-md font-bold">
                {normalUserFn} {normalUserLn}
              </p>
              <div className="flex flex-row">{showRating}</div>
              <span className="text-xs">{parsedDate}</span>
            </div>
          </div>
          <div className="px-5 pb-6 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <p>{commentText}</p>
          </div>

          {/* we compare the decoded usertoken with the review currently posted on the page */}
          {/* we apply this code if the two values match, if not, we return null. */}
          {loggedInUserId === reviewCreatorUserId ? (
            <div
              key={normalUserFn + normalUserLn + "posted review " + i}
              className="relative flex justify-end pr-2 pb-2"
            >
              <div className="absolute bottom-28 -right-0.5">
                <button
                  className="inline-flex items-center justify-center w-5 h-5 mr-2 text-pink-100 transition delay-50 ease-in-out bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
                  onClick={() => deletePost()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
          <div className="inline-block min-w-full"></div>
        </div>
      </>
    );
  });

  return (
    <section>
      {serviceReviews}
      {renderReviewForm === false ? (
        <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 bg-gray-100">
          <div className="flex justify-end">
            <button
              type="button"
              className="text-white bg-green-400 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
              onClick={() =>
                Auth.loggedIn() === true
                  ? setRenderReviewForm(true)
                  : navigate("/login")
              }
            >
              Leave Review
            </button>
          </div>
        </div>
      ) : (
        <ReviewForm
          renderReviewForm={renderReviewForm}
          refetch={refetch}
          data={data}
        />
      )}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>
    </section>
  );
}
