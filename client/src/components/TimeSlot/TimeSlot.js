import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
// import { useParams } from "react-router-dom";
// import { QUERY_TIMESLOTS_BY_SERVICEUSERID } from "../../../src/utils/queries";
import { QUERY_TIMESLOTS_BY_SERVICEUSERID } from "../../../src/utils/queries";

// import ServiceUserProfile from "./subcomponents/ServiceUserProfile";
// import Tabs from "./subcomponents/Tabs";
import Auth from "../../utils/auth";


export default function TimeSlot() {
  // const [serviceUserTime, setServiceUserTime] = useState("");

  // // CHECK IF LOGGED
  const isLoggedIn = Auth.loggedIn() ? true : false;
  // if isLoggedin true then get the user id from the token
  // else set the user id to null
  const profile = isLoggedIn ? Auth.getProfile().data._id : null;
  console.log('I AM PROFILE --- ', profile)

  const [serviceUser, setServiceUser] = useState("");

  const { loading, error, data } = useQuery(QUERY_TIMESLOTS_BY_SERVICEUSERID, {
    variables: { serviceUserId: profile },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      setServiceUser(data.serviceUser.timeSlots);
    }
  }, [data]);

  console.log('I AM DATA', data)
  console.log('I AM TIME SLOTS', serviceUser)


  return (
    <>
      <div>
        <h1> Hello I'm TIME SLOT Page</h1>
      </div>
    </>
  );
}
