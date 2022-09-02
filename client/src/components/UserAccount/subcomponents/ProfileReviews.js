import React from "react";
import moment from "moment";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS_BY_NORMAL_USER } from "../../../utils/queries";

export default function ProfileReviews({ loggedInUserId, refetch }) {

  const { data, loading, error } = useQuery(QUERY_REVIEWS_BY_NORMAL_USER, {
    variables: { normalUserId: loggedInUserId },
  });

  const commentsData = data?.normalUser?.serviceComments?.map((comments) => (
    <div>
      <span>
        Service User:
        {comments.serviceUser.firstName} {comments.serviceUser.lastName}
      </span>
      <span>
        Comments created:
        {moment.unix(comments.commentCreated/1000).format('lll')}
      </span>
      <span>
        Comment Text:
        {comments.commentText}
      </span>
      <span>
        Rating:
        {comments.serviceRating}
      </span>
      <span>
        Category Name:
        {comments.serviceUser.serviceCategory.categoryName}
      </span>
    </div>
  ));

  return <>{commentsData}</>;
}
