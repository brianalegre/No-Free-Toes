import React, { useEffect } from "react";
import ProfileTabs from "./subcomponents/ProfileTabs";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_SERVICEUSER } from "../../utils/queries";
import Auth from "../../utils/auth";

export default function ServiceAccount() {
    const { loggedInUserId } = useParams();

    const { loading, error, data, refetch } = useQuery(QUERY_SINGLE_SERVICEUSER, {
        variables: { serviceUserId: loggedInUserId },
        fetchPolicy: "no-cache",
    });

    // DESTRUCTURE TO GET SERVICE USER DATA
    const { email, firstName, lastName, photo, location } = data?.serviceUser || {};
    
    // DESTRUCTURE TO GET CATEGORY NAME
    const { categoryName } = data?.serviceUser.serviceCategory || {};
    // console.log(data)
    const services = data?.serviceUser.serviceType || {};
    // console.log(services)
    
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
    
    // IF LOGGED IN USER IS SERVICE USER, PAGE DISPLAYS
    if (userType === "servicUser") {
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
                                categoryName={categoryName}
                                refetch={refetch}
                            />
                        </div>
                    </div>
                </main>
            </>
        );
    }
    // IF NOT A SERVICE USER, DISPLAYS THIS
    else {
        return (
            <h1>
                You need to be Service Provider to Access page
            </h1>
        )
    }
}

