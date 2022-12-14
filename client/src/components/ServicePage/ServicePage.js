import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SERVICEUSER } from "../../../src/utils/queries";
import ServiceUserProfile from "./subcomponents/ServiceUserProfile";
import Tabs from "./subcomponents/Tabs";
import { SyncLoader } from "react-spinners";

export default function ServicePage() {
  const { serviceUserId } = useParams();
  const [serviceUser, setServiceUser] = useState("");

  const { loading, error, data, refetch } = useQuery(QUERY_SERVICEUSER, {
    variables: { serviceUserId: serviceUserId },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      setServiceUser(data.serviceUser);
    }
  }, [data]);

  return (
    <>
      <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gray-100">
        {loading ? (
          <div className="flex justify-center">
            <SyncLoader color="#E96458" />
          </div>
        ) : (
          <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div className="py-8">
              <ServiceUserProfile serviceUser={serviceUser} />
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
                <div className="inline-block min-w-full"></div>
              </div>
              <Tabs serviceUser={serviceUser} refetch={refetch} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
