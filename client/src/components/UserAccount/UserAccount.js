import React, { useEffect } from "react";
import ProfileTabs from "./subcomponents/ProfileTabs";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_NORMALUSER } from "../../utils/queries";
import Auth from "../../utils/auth";

const avatarImg = ".././assets/images/man.png";

export default function UserProfile() {
  const { loggedInUserId } = useParams();

  const { loading, error, data, refetch } = useQuery(QUERY_SINGLE_NORMALUSER, {
    variables: { normalUserId: loggedInUserId },
    fetchPolicy: "no-cache",
  });

  const { email, firstName, lastName, photo, location } = data?.normalUser || {};

  // USER NEEDS TO BE LOGGED IN TO DISPLAY
  const isLoggedIn = Auth.loggedIn() ? true : false;

  const loggedInServiceUserId = isLoggedIn ? Auth.getProfile().data._id : null;

  const userType = loggedInServiceUserId ? Auth.getProfile().data.userType : null;

  // CONIDITIONAL TO CHECK IF USER IS LOGGED IN, IF NOT DISPLAYS BELOW
  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // IF LOGGED IN USER IS NORMAL USER, PAGE DISPLAYS
  if (userType === "normalUser") {
    return (
      <>
        <main className="bg-white mx-20 mt-10 min-h-screen text-lg">
          {/* Wrapper for main section */}
          <div id="wrapper" className="max-w-screen-xl mx-auto">
            {/* Grid cols for tabs/form */}
            <div className="grid grid-cols-1 md:grid-cols-[25%_75%]">
              {/* Tabs */}
              <ProfileTabs
                loggedInUserId={loggedInUserId}
                email={email}
                firstName={firstName}
                lastName={lastName}
                photo={photo}
                location={location}
                refetch={refetch}
              />
            </div>
          </div>
        </main>
      </>
    );
  }
  // IF NOT A NORMAL USER, MESSAGE DISPLAYS BELOW
  else {
    return (
      <h1>
        You need to be a client to access page
      </h1>
    )
  }
}


/* <section className="mt-5 md:ml-5 md:mt-0">
  Form Card template, TODO update to fit needs
  <ProfileSettings />
</section> */

