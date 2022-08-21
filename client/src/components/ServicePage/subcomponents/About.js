import React, {useState, useEffect} from "react";
import { useQuery } from '@apollo/client'
import { useParams } from "react-router-dom"
import { QUERY_SERVICEUSER } from "../../../../src/utils/queries";

export default function About() {

  const {serviceUserId} = useParams();

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

  const {email, bio, location} = serviceUser;

  return (
    <section>
      <div className="divide-y divide-solid">
        <div className="min-w-full leading-normal bg-white">
          <div className="pl-6 py-6 text-black font-bold">
            <p>About Us</p>
          </div>
        </div>
        <div className="min-w-full leading-normal bg-white">
          <div className="px-8 py-6 text-black">
            <p>
              {bio}
            </p>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
            <div className="inline-block min-w-full"></div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-solid">
      <div className="min-w-full leading-normal bg-white">
        <div className="pl-6 py-6 text-black font-bold">
          <p>Location</p>
        </div>
      </div>
      <div className="bg-white px-8 py-6 text-black">
        <p>{location}</p>
      </div>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>

      <div className="divide-y divide-solid">
      <div className="min-w-full leading-normal bg-white">
        <div className="pl-6 py-6 text-black font-bold">
          <p>Contact Information</p>
        </div>
      </div>
      <div className="bg-white px-8 py-6 text-black">
        <p>Email: {email}</p>
      </div>
      </div>
    </section>
  );
}
