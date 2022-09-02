// import React from "react";
// import moment from "moment";
// import { QUERY_REVIEWS_BY_NORMAL_USER } from "../../../utils/queries";

// export default function ProfileReviews({ 
//     loggedInUserId, 
//     email, 
//     firstName, 
//     lastName, 
//     location, 
//     refetch }) {

//     const {
//         data: serviceComments,
//         error: serviceError,
//         loading,
//       } = useQuery(QUERY_REVIEWS_BY_NORMAL_USER, {
//         variables: { normalUserId: loggedInUserId },
//       });
    
//       console.log("----SERVICES----", serviceComments);
//       // console.log("--DATE---", serviceComments[0].commentCreated);
    
//       const reviews =
//         serviceComments?.serviceUser?.serviceComments?.serviceCategory?.map((review) => ({
//           userId: review._id,
//           reviewText: review.commentText,
//           reviewedService: `${review.serviceUser.firstName} ${review.serviceUser.lastName}`,
//           reviewCreated: review.commentCreated,
//           // reviewCreated: moment.unix(review[0].commentCreated).format("MM/DD/YYYY"),
//           reviewRating: review.serviceRating,
//           // serviceUserReviewed: `${review.serviceUser.firstName} ${review.serviceUser.lastName}`,
//           // serviceUserReviewedCat: review.serviceUser.serviceCategory,
          
//         })) || [];

//     };