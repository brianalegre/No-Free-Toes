import React from "react";
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
   
export default function ProfileReviews({ loggedInUserId, refetch }) {

  const { data, loading, error } = useQuery(QUERY_REVIEWS_BY_NORMAL_USER, {
    variables: { normalUserId: loggedInUserId },
  });

  const commentsData = data?.normalUser?.serviceComments?.map((comments) => {

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
    
    <div className="flex pl-3 sm:pl-4 py-4 m-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
     <div className="pl-2 sm:pl-3 flex flex-col align-middle">
      <div className="text-md font-bold">
        {comments.serviceUser.firstName} {comments.serviceUser.lastName}
      {comments.serviceUser.serviceCategory.categoryName}
      </div>
      <div className="text-xs">
        {moment.unix(comments.commentCreated/1000).format('lll')}
      </div>
      <div className="flex flex-row">
        {showRating}
      </div>
      <div className="px-2 pb-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        {comments.commentText}
      </div>
      </div>
    </div>
    )
  });

  return <>{commentsData}</>;
}