import React, {useState,useEffect} from "react";
import { useQuery } from '@apollo/client'
import { useParams } from "react-router-dom"
import { QUERY_SERVICEUSER } from "../../../../src/utils/queries";
import avatar from "../../../images/man.png";

export default function ServiceUserProfile() {

  const {serviceUserId}  = useParams();
  const [serviceUser, setServiceUser] = useState("");
  const [serviceUserFirstName, setServiceUserFirstName] = useState("");
  const [serviceUserLastName, setServiceUserLastName] = useState("");
  const [serviceUserPhoto, setServiceUserPhoto] = useState("");

  const { loading, error, data } = useQuery(QUERY_SERVICEUSER, {
    variables: { serviceUserID: serviceUserId },
    fetchPolicy: "no-cache"
  });

  useEffect(() => {
    if (data) {
      setServiceUser(data.serviceUser)
      setServiceUserFirstName(data.serviceUser.firstName);
      setServiceUserLastName(data.serviceUser.lastName);
      setServiceUserPhoto(data.serviceUser.photo);
    }
  } , [data]);

  console.log('DATA = ', data);
  console.log('GET SERVICE USERS ----', serviceUser);

  return (
    <>
      <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2">
        <img
          className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
          src={avatar}
          alt="default avatar"
        />
        <div className="text-center space-y-3 flex flex-col">
          <p className="text-lg text-black font-semibold">Brian Alegre</p>
        </div>
      </div>
    </>
  );
}
