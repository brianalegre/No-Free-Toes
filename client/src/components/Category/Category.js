// IMPORTS
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_SERVICEUSERS_BY_SERVICECATEGORY } from "../../../src/utils/queries";
import { Link, useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";

// IMPORT IMAGES
// const defaultImg = ".././assets/images/man.png";

function CategoryPage() {
  const { categoryId } = useParams();

  // CREATE STATE TO HOLD SERVICE USERS
  const [getServiceUsers, setGetServiceUsers] = useState([]);

  // SET CATEGORY NAME FOR TITLE
  const [categoryName, setCategoryName] = useState([]);

  // QUERY FOR ALL SERVICE USERS BY CATEGORY
  const { loading, error, data } = useQuery(
    QUERY_ALL_SERVICEUSERS_BY_SERVICECATEGORY,
    {
      // CURRENT VALUE OF IN MY DB - MAY DIFF, USING SET VALUE FOR TESTING
      variables: { serviceCategory: categoryId },
      fetchPolicy: "no-cache",
    }
  );

  // IF QUERY IS SUCCESSFUL, SET STATE TO SERVICE USERS
  useEffect(() => {
    if (data) {
      setGetServiceUsers(data.serviceUsersCategory);
      setCategoryName(
        data.serviceUsersCategory[0].serviceCategory.categoryName
      );
    }
  }, [data]);

  // LOG THE DATA TO DEV TOOLS
  // console.log('DATA ----', data);
  // console.log('GET SERVICE USERS ----', getServiceUsers);

  // MAP THE DATA
  const serviceUsers = getServiceUsers.map((serviceUser) => (
    <div
      key={serviceUser._id}
      id="serviceUser-card"
      className="py-5 flex justify-center"
    >
      <div
        href="##"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
            src={serviceUser.photo}
            alt="default"
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal w-96">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceUser.firstName} {serviceUser.lastName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {serviceUser.bio}
          </p>
        </div>
        <Link to={`/service/` + serviceUser._id}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View Profile
          </button>
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <div className="pb-2 text-center my-4 text-3xl text-bold lg:text-4xl pt-10">
        <h1 className="font-nato">Category: {categoryName}</h1>
      </div>
      <main className="flex flex-col min-h-screen pb-4">
        {serviceUsers}

        {loading && (
          <div className="min-h-3/4 flex justify-center align-middle">
            <SyncLoader color="#E96458" />
          </div>
        )}
      </main>
    </>
  );
}

export default CategoryPage;
