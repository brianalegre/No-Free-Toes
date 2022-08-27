import React, { useState, useEffect } from "react";
import ProfileTabs from "./subcomponents/ProfileTabs";
import ProfileSettings from "./subcomponents/ProfileSettings";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_NORMALUSER } from "../../../src/utils/queries";
import Auth from "../../utils/auth";

const avatarImg = ".././assets/images/man.png";

export default function UserProfilePage() {
  const { loggedInUserId } = useParams();
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log("USERID", loggedInUserId);
  // // CHECK IF LOGGED
  // const isLoggedIn = Auth.loggedIn() ? true : false;
  // // if isLoggedin true then get the user id from the token
  // // else set the user id to null
  // const profile = isLoggedIn ? Auth.getProfile().data._id : null;

  // const loggedUserData = Auth.getProfile()
  // // console.log("LOGGED IN DATA ---------", profile)

  const { loading, error, data } = useQuery(QUERY_SINGLE_NORMALUSER, {
    variables: { normalUserId: loggedInUserId },
    fetchPolicy: "no-cache",
  });

  const { email, firstName, lastName, photo } = data?.normalUser || {};

  return (
    <>
      <main className="bg-white mx-20 mt-10 min-h-screen text-lg">
        {/* Wrapper for main section */}
        <div id="wrapper" className="max-w-screen-xl mx-auto">
          {/* Grid cols for tabs/form */}
          <div className="grid grid-cols-1 md:grid-cols-[25%_75%]">
            {/* Tabs */}
            <ProfileTabs
              firstName={firstName}
              lastName={lastName}
              email={email}
              photo= {photo}
            />
          </div>
        </div>
      </main>
    </>
  );
}


  /* <section className="mt-5 md:ml-5 md:mt-0">
    Form Card template, TODO update to fit needs
    <ProfileSettings />
</section> */

