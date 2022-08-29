import React from "react";
// import { useQuery } from "@apollo/client";
// import { useParams } from "react-router-dom";
// import { QUERY_SERVICEUSER } from "../../../src/utils/queries";
// import ServiceUserProfile from "./subcomponents/ServiceUserProfile";
// import Tabs from "./subcomponents/Tabs";
import Auth from "../../utils/auth";


export default function TimeSlot() {
  //   const { serviceUserId } = useParams();
  //   const [serviceUser, setServiceUser] = useState("");

  //   const { loading, error, data } = useQuery(QUERY_SERVICEUSER, {
  //     variables: { serviceUserId: serviceUserId },
  //     fetchPolicy: "no-cache",
  //   });

  //   useEffect(() => {
  //     if (data) {
  //       setServiceUser(data.serviceUser);
  //     }
  //   }, [data]);

  // // CHECK IF LOGGED
  const isLoggedIn = Auth.loggedIn() ? true : false;
  // if isLoggedin true then get the user id from the token
  // else set the user id to null
  const profile = isLoggedIn ? Auth.getProfile().data._id : null;

  return (
    <>
      <div>
        <h1> Hello I'm TIME SLOT Page</h1>
      </div>
    </>
  );
}
