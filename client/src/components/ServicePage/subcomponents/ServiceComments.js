import React, { useState, useEffect } from "react";
import {
  FiveStar,
  FourStar,
  ThreeStar,
  TwoStar,
  OneStar,
  ZeroStar,
} from "./StarRating";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SERVICECOMMENTS_BY_SERVICEUSERID } from "../../../utils/queries";
import * as moment from "moment";

export default function Reviews() {
  const { serviceUserId } = useParams();
  const [serviceComments, setServiceComments] = useState([]);

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

  const serviceReviews = serviceComments?.map((reviews) => {
    let {
      commentText,
      commentCreated,
      serviceRating,
      serviceUser: { firstName: serviceUserFn, lastName: serviceUserLn },
      normalUser: { firstName: normalUserFn, lastName: normalUserLn },
    } = reviews;
    const parsedDate = moment({ commentCreated }).format("ll");

    return (
      <>
        <div className="min-w-full h-auto bg-white">
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
              <div className="flex flex-row">

                 

              </div>
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

  return <section>{serviceReviews}</section>;
}
