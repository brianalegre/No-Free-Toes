import React, { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import ProfileReviews from "./ProfileReviews";

export default function ProfileTabs({
  loggedInUserId,
  email,
  firstName,
  lastName,
  photo,
  location,
  refetch,
}) {
  const [profileTabs] = useState([
    {
      name: "Profile",
    },
    {
      name: "Reviews",
    },
  ]);

  const [currentTab, setCurrentTab] = useState(profileTabs[0]);
  return (
    <>
      <aside className="md:border-r">
        {/* Avatar image, User/Service user info */}
        <div className="flex items-center space-x-4 p-2 border-b">
          <img className="w-10 h-10 rounded-full" src={photo} alt="avatar" />
          <div className="font-bold">
            <div>
              {firstName} {lastName}
            </div>
            <div className="text-base text-gray-500 dark:text-gray-400">
              Client
            </div>
          </div>
        </div>
        {/* Tabs */}
        <ul>
          {profileTabs.map((tabs) => (
            <li
              className="flex items-center justify-between border-b  p-3  hover:text-gray-900 hover:bg-[#fafafa] dark:hover:bg-gray-800 dark:hover:text-white"
              key={tabs.name}
            >
              <button
                className="inline-block rounded-lg w-full text-left"
                onClick={() => setCurrentTab(tabs)}
              >
                <span
                  className={
                    currentTab.name === tabs.name
                      ? "border-l-4 border-[#fca5a5] px-2"
                      : null
                  }
                >
                  {tabs.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className={currentTab.name === "Profile" ? null : "hidden"}>
        {/* Form Card template, TODO update to fit needs */}
        <ProfileSettings
          email={email}
          loggedInUserId={loggedInUserId}
          firstName={firstName}
          lastName={lastName}
          photo={photo}
          location={location}
          refetch={refetch}
        />
      </div>

      <div className={currentTab.name === "Reviews" ? null : "hidden"}>
        <ProfileReviews loggedInUserId={loggedInUserId} refetch={refetch} />
      </div>
    </>
  );
}
