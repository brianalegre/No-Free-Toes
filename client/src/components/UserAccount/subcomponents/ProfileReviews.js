import React, { useState, useEffect } from "react";
import moment from "moment";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS_BY_NORMAL_USER } from "../../../utils/queries";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
  ZeroStar,
} from "../../ServicePage/subcomponents/StaticStars";
import NoProfileReviews from "./NoProfileReviews";


export default function ProfileReviews({ loggedInUserId }) {


  const [dataComments, setDataComments] = useState([]);
  const { data, loading, error, refetch } = useQuery(QUERY_REVIEWS_BY_NORMAL_USER, {
    variables: { normalUserId: loggedInUserId },
  });

  useEffect(() => {
    if (data) {
      setDataComments(data)
    }
  }, [data]);

  const commentsData = dataComments?.normalUser?.serviceComments?.map((comments) => {

    // parsing the UNIX date that received from backend using moment.js
    const parsedDate = moment
      .unix(comments.commentCreated / 1000)
      .format("lll");

    let showRating;

    if (comments.serviceRating === 5) {
      showRating = <FiveStar />;
    }
    if (comments.serviceRating === 4) {
      showRating = <FourStar />;
    }
    if (comments.serviceRating === 3) {
      showRating = <ThreeStar />;
    }
    if (comments.serviceRating === 2) {
      showRating = <TwoStar />;
    }
    if (comments.serviceRating === 1) {
      showRating = <OneStar />;
    }
    if (comments.serviceRating === 0) {
      showRating = <ZeroStar />;
    }

    return (
      <section key={comments._id} className="mt-5 md:ml-5 md:mt-0">
        <div className=" shadow-md first-line:flex pl-3 sm:pl-4 py-4 m-2 rounded-lg text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white max-w-2xl">
          <div className="pl-2 sm:pl-3 flex flex-col align-middle ">
            <div className="text-lg font-bold">
              {comments.serviceUser.firstName} {comments.serviceUser.lastName} :{" "}
              {comments.serviceUser.serviceCategory.categoryName}
            </div>
            <div className="text-xs">{parsedDate}</div>
            <div className="flex flex-row">{showRating}</div>
            <div className="px-2 pb-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              {comments.commentText}
            </div>
          </div>
        </div>
      </section>
    );
  });

  refetch();

  const length = commentsData?.length;
  return <div>{length !== 0 ? commentsData : <NoProfileReviews />}</div>;
}
