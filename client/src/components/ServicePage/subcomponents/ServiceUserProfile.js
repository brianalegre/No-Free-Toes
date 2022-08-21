import React, {useState,useEffect} from "react";
import { useQuery } from '@apollo/client'
import { useParams } from "react-router-dom"
import { QUERY_SERVICEUSER } from "../../../../src/utils/queries";

function ServiceUserProfile() {

  const { serviceUserId }  = useParams();
  console.log('SERVICE USER ID  -----', serviceUserId)
  
  const [serviceUser, setServiceUser] = useState("");

  const { loading, error, data } = useQuery(QUERY_SERVICEUSER, {
    variables: { serviceUserId: serviceUserId },
    fetchPolicy: "no-cache"
  });

  useEffect(() => {
    if (data) {
      setServiceUser(data.serviceUser)
    }
  } , [data]);

  const {firstName, lastName, photo} = serviceUser;

  return (
    <>
      <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2">
        <img
          className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
          src={photo}
          alt="default avatar"
        />
        <div className="text-center space-y-3 flex flex-col">
          <p className="text-lg text-black font-semibold">{firstName} {" "} {lastName}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceUserProfile;