import React from "react";

export default function About({ serviceUser }) {
  const { email, bio, location } = serviceUser;

  return (
    <section>
      <div className="divide-y divide-solid">
        <div className="min-w-full leading-normal bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="pl-6 py-6 font-bold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <p>About Us</p>
          </div>
        </div>
        <div className="min-w-full leading-normal bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="px-8 py-6 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <p>{bio}</p>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
            <div className="inline-block min-w-full"></div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-solid">
        <div className="min-w-full leading-normal bg-white">
          <div className="pl-6 py-6 font-bold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <p>Location</p>
          </div>
        </div>
        <div className="bg-white px-8 py-6 text-gray-900 dark:text-white dark:border-gray-700 dark:bg-gray-800">
          <p>{location}</p>
        </div>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>

      <div className="divide-y divide-solid">
        <div className="min-w-full leading-normal bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="pl-6 py-6 font-bold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <p>Contact Information</p>
          </div>
        </div>
        <div className="bg-white px-8 py-6 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <p>Email: {email}</p>
        </div>
      </div>
    </section>
  );
}
