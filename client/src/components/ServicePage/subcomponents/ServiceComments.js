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
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SERVICECOMMENTS_BY_SERVICEUSERID } from "../../../utils/queries";
import * as moment from "moment";

export default function Reviews() {
  const { serviceUserId } = useParams();
  const [serviceComments, setServiceComments] = useState([]);
  const [renderReviewForm, setRenderReviewForm] = useState(false);

  const { loading, error, data } = useQuery(
    QUERY_SERVICECOMMENTS_BY_SERVICEUSERID,
    {
      variables: { serviceUserId: serviceUserId },
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    if (data) {
      setServiceComments(data.serviceComments);
    }
  }, [data]);

  const serviceReviews = serviceComments?.map((reviews, i) => {
    const {
      commentText,
      commentCreated,
      serviceRating,
      // serviceUser: { firstName: serviceUserFn, lastName: serviceUserLn },
      normalUser: { firstName: normalUserFn, lastName: normalUserLn },
    } = reviews;
    const parsedDate = moment({ commentCreated }).format("ll");

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
        <ReviewForm renderReviewForm={renderReviewForm} />
      )}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>
    </section>
  );
}
