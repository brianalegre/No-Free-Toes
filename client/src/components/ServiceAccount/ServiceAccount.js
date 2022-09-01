import React, { useState, useEffect } from "react";
import ProfileTabs from "./subcomponents/ProfileTabs";
import { useQuery } from "@apollo/client";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_SERVICEUSER } from "../../utils/queries";
import Auth from "../../utils/auth";

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
    // console.log(serviceUser)

    // const serviceUserData = data?.serviceUser || []
    // // DESTRUCTURE TO GET SERVICE USER DATA
    // const { email, firstName, lastName, photo, location } = data?.serviceUser || {};

    // DESTRUCTURE TO GET CATEGORY NAME
    const { categoryName } = data?.serviceUser.serviceCategory || [];
    // // console.log(categoryName)
    // const { ...serviceType } = data?.serviceUser.serviceType || [];
    // console.log(serviceType)

    // const ServiceUserContext = createContext(data)

    // console.log(ServiceUserContext)

    // const serviceTypeMap = serviceType.map((serv)=> ({
    //     serviceType: serv._id,
    //     serviceName: serv.serviceName
    // })) 
    // console.log(serviceName)
    // const serviceTypeMap = serviceType?.serviceName?.map((serv) => ({
    //     serviceType: serv._id,
    //     name: serv.serviceName
    // })) || []

    // console.log(serviceTypeMap)



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
    if (userType === "serviceUser") {
        return (
            <>
                <main className="bg-white mx-20 mt-10 min-h-screen text-lg">
                    {/* Wrapper for main section */}
                    <div id="wrapper" className="max-w-screen-xl mx-auto">
                        {/* Grid cols for tabs/form */}
                        <div className="grid grid-cols-1 md:grid-cols-[25%_75%]">
                            {/* Tabs */}
                            <ProfileTabs
                                // loggedInUserId={loggedInUserId}
                                // email={email}
                                // firstName={firstName}
                                // lastName={lastName}
                                // photo={photo}
                                // location={location}
                                // categoryName={categoryName}
                                // // serviceUser={serviceUser}
                                // refetch={refetch}
                                serviceUser={serviceUser}
                            // categoryName= {categoryName}
                            />
                        </div>
                    </div>
                </main>
            </>
        );
    }
    // IF NOT A SERVICE USER, MESSAGE DISPLAYS BELOW
    else {
        return (
            <h1>
                You need to be Service Provider to Access page
            </h1>
        )
    }
}

