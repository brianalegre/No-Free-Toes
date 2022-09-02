import React from "react";
import moment from "moment";
import { QUERY_SINGLE_NORMALUSER } from "../../utils/queries";

export default function ProfileReviews({ 
    loggedInUserId }) {

    const {error, loading,  data, refetch } = useQuery(QUERY_SINGLE_NORMALUSER, {
        variables: { normalUserId: loggedInUserId },
        fetchPolicy: "no-cache",
    });
    
      console.log("----SERVICES----", data);
      // console.log("--DATE---", serviceComments[0].commentCreated);
    
    //   const reviews =
    //     serviceComments?.serviceUser?.serviceComments?.serviceCategory?.map((review) => ({
    //       userId: review._id,
    //       reviewText: review.commentText,
    //       reviewedService: `${review.serviceUser.firstName} ${review.serviceUser.lastName}`,
    //       reviewCreated: review.commentCreated,
    //       // reviewCreated: moment.unix(review[0].commentCreated).format("MM/DD/YYYY"),
    //       reviewRating: review.serviceRating,
    //       // serviceUserReviewed: `${review.serviceUser.firstName} ${review.serviceUser.lastName}`,
    //       // serviceUserReviewedCat: review.serviceUser.serviceCategory,
          
    //     })) || [];

    };