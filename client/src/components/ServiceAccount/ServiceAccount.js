import React, { useState, useEffect } from "react";
import ProfileTabs from "./subcomponents/ProfileTabs";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_SERVICEUSER } from "../../utils/queries";
import Auth from "../../utils/auth";
import { SyncLoader } from "react-spinners";

export default function ServiceAccount() {
  const { loggedInUserId } = useParams();
  const [serviceUser, setServiceUser] = useState("");

  const { loading, error, data, refetch } = useQuery(QUERY_SINGLE_SERVICEUSER, {
    variables: { serviceUserId: loggedInUserId },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      setServiceUser(data.serviceUser);
    }
  }, [data]);

  // USER NEEDS TO BE LOGGED IN TO DISPLAY
  const isLoggedIn = Auth.loggedIn() ? true : false;

  const loggedInServiceUserId = isLoggedIn ? Auth.getProfile().data._id : null;

  const userType = loggedInServiceUserId
    ? Auth.getProfile().data.userType
    : null;

  // CONIDITIONAL TO CHECK IF USER IS LOGGED IN, IF NOT DISPLAYS BELOW
  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // IF LOGGED IN USER IS SERVICE USER, PAGE DISPLAYS
  if (userType === "serviceUser") {
    return (
      <>
        <main className="bg-white mx-20 mt-10 min-h-screen text-lg">
          {loading ? (
            <div className="pt-48 flex justify-center align-middle">
              <SyncLoader color="#E96458" />
            </div>
          ) : (
            <div id="wrapper" className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[25%_75%]">
                <ProfileTabs
                  loggedInUserId={loggedInUserId}
                  serviceUser={serviceUser}
                  refetch={refetch}
                />
              </div>
            </div>
          )}
        </main>
      </>
    );
  }
  // IF NOT A SERVICE USER, MESSAGE DISPLAYS BELOW
  else {
    return (
      <main className="bg-white mt-10 min-h-screen text-lg">
        <div className="flex justify-center bg-gray-50 content-center py-24 mx-8 my-8 md:mx-12 md:my-12 rounded-lg">
          <span className="text-xl">
            Provider is required to access this page
          </span>
        </div>
      </main>
    );
  }
}
