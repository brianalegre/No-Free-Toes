import React, { useState, useEffect } from "react";
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
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SERVICECOMMENTS_BY_SERVICEUSERID } from "../../../utils/queries";
import { DELETE_SERVICECOMMENT } from "../../../utils/mutations";
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

  // retrieving logged user's user id
  const {
    data: { _id: loggedInUserId },
  } = Auth.getProfile();

  // using the useQuery hook to retrieve data from the back end
  const { loading, error, data, refetch } = useQuery(
    QUERY_SERVICECOMMENTS_BY_SERVICEUSERID,
    {
      variables: { serviceUserId: serviceUserId },
      fetchPolicy: "no-cache",
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

    return (
      <>
        <div
          key={normalUserFn + normalUserLn + "review " + i}
          className="min-w-full h-auto bg-white"
        >
          <div className="flex pl-3 sm:pl-4 py-4 text-black font-bold">
            <img
              className="w-16"
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="default avatar"
            />
            <div className="pl-2 sm:pl-3 flex flex-col align-middle">
              <p className="text-md">
                {normalUserFn} {normalUserLn}
              </p>
              <div className="flex flex-row">{showRating}</div>
              <span className="text-xs">{parsedDate}</span>
            </div>
          </div>
          <div className="px-5 pb-6">
            <p>{commentText}</p>
          </div>

          {/* we compare the decoded usertoken with the review currently posted on the page */}
          {/* we apply this code if the two values match, if not, we return null. */}
          {loggedInUserId === reviewCreatorUserId ? (
            <div className="flex justify-end pr-2 pb-2">
              <button
                onClick={() => {
                  deleteReview({
                    variables: { serviceCommentId, normalUser: loggedInUserId },
                  });
                  
                  refetch();
                }}
                className="bg-red-700 text-gray-100 text-sm rounded-lg py-1 px-1 "
              >
                Delete
              </button>
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
                  : window.location.assign("/login")
              }
            >
              Leave Review
            </button>
          </div>
        </div>
      ) : (
        <ReviewForm renderReviewForm={renderReviewForm} refetch={refetch} />
      )}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>
    </section>
  );
}
