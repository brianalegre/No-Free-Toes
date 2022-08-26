import React from "react";

function ServiceUserProfile({ serviceUser }) {
  const { firstName, lastName, photo } = serviceUser;

  return (
    <>
      <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2 dark:border-gray-700 dark:bg-gray-800">
        <img
          className="block mx-auto max-h-72 rounded-md"
          src={photo}
          alt="default avatar"
        />
        <div className="text-center space-y-3 flex flex-col">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {firstName} {lastName}
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceUserProfile;
