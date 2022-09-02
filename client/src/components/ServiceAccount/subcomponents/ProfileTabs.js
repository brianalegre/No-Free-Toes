import React, { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import ServiceSettings from "./ServiceSettings";
import TimeSlotSettings from "./TimeSlotSettings"
const avatarImg = ".././assets/images/man.png";


export default function ProfileTabs({ loggedInUserId, serviceUser, refetch }) {
    const [profileTabs] = useState([
        {
            name: "Profile",
        },
        {
            name: "Services",
        },
        {
            name: "Timeslots",
        },
    ])

    const { categoryName } = serviceUser?.serviceCategory || [];


    const [currentTab, setCurrentTab] = useState(profileTabs[0]);
    return (
        <>
            <aside className="md:border-r">
                {/* Avatar image, User/Service user info */}
                <div className="flex items-center space-x-4 p-2 border-b">
                    <img className="w-10 h-10 rounded-full" src={serviceUser.photo} alt="avatar" />
                    <div className="font-bold">
                        <div>{serviceUser.firstName} {serviceUser.lastName}</div>
                        <div className="text-base text-gray-500 dark:text-gray-400">{categoryName}</div>
                    </div>
                </div>
                {/* Tabs */}
                <ul>
                    {profileTabs.map((tabs) => (
                        <li className="flex items-center justify-between border-b  p-3  hover:text-gray-900 hover:bg-[#fafafa] dark:hover:bg-gray-800 dark:hover:text-white" key={tabs.name}>
                            <button
                                className="inline-block rounded-lg w-full text-left"
                                onClick={() => setCurrentTab(tabs)}
                            >
                                <span className={currentTab.name === tabs.name ? "border-l-4 border-[#fca5a5] px-2" : null}>{tabs.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>

            </aside>

            <div className={currentTab.name === "Profile" ? null : "hidden"}>
                {/* Form Card template */}
                <ProfileSettings
                    loggedInUserId={loggedInUserId}
                    serviceUser={serviceUser}
                    refetch={refetch}
                />
            </div>
            <div className={currentTab.name === "Services" ? null : "hidden"}>
                <ServiceSettings
                    loggedInUserId={loggedInUserId}
                    serviceUser={serviceUser}
                    refetch={refetch}
                />
            </div>
            <div className={currentTab.name === "Timeslots" ? null : "hidden"}>
                <TimeSlotSettings serviceUser={serviceUser} refetch={refetch} />
            </div>
        </>

    );
}
