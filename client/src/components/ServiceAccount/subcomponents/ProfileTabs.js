import React, { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import ServiceSettings from "./ServiceSettings";
import TimeSlotSettings from "./TimeSlotSettings"
const avatarImg = ".././assets/images/man.png";


export default function ProfileTabs({ serviceUser }) {
    const [profileTabs] = useState([
        {
            name: "Profile",
        },
        {
            name: "Reviews",
        },
        {
            name: "Services",
        },
        {
            name: "Time Slots",
        },
        {
            name: "Payment",
        },
    ])
    // const { serviceCategory } = serviceUser
    // console.log(serviceCategory)

    const { categoryName } = serviceUser?.serviceCategory || [];
    // console.log(categoryName)
    // const { firstName, lastName, photo } = serviceUser;

    const [currentTab, setCurrentTab] = useState(profileTabs[0]);
    return (
        <>
            <aside className="md:border-r">
                {/* Avatar image, User/Service user info */}
                <div class="flex items-center space-x-4 p-2 border-b">
                    <img className="w-10 h-10 rounded-full" src={serviceUser.photo} alt="avatar" />
                    <div className="font-medium dark:text-white">
                        <div>{serviceUser.firstName} {serviceUser.lastName}</div>
                        <div className="text-base text-gray-500 dark:text-gray-400">{categoryName}</div>
                    </div>
                </div>
                {/* Tabs */}
                <ul className>
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
                {/* Form Card template, TODO update to fit needs */}
                <ProfileSettings
                    // email={email}
                    // loggedInUserId={loggedInUserId}
                    // firstName={firstName}
                    // lastName={lastName}
                    // photo={photo}
                    // location={location}
                    // refetch={refetch}
                    serviceUser={serviceUser}
                />
            </div>
            <div className={currentTab.name === "Services" ? null : "hidden"}>
                <ServiceSettings
                    serviceUser={serviceUser}
                />
            </div>
            <div className={currentTab.name === "Time Slots" ? null : "hidden"}>
                        <TimeSlotSettings />
            </div>
        </>

    );
}

// OLD CODE
{/* <ul className>
                <li className="flex items-center justify-between border-b p-2">
                    <button
                        className="inline-block py-3 px-3 rounded-lg w-full text-left hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                        <span className="text-red-600">My Profile</span>
                    </button>
                </li>
                <li className="flex items-center justify-between border-b p-2">My Reviews</li>
                <li className="flex items-center justify-between border-b p-2">My Services</li>
                <li className="flex items-center justify-between border-b p-2">My Payment</li>
            </ul> */}




            // OLD CODE
        //     <li className="flex items-center justify-between border-b p-2">
        //     <button
        //         className="inline-block py-3 px-3 rounded-lg w-full text-left hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
        //         <span className="text-black">Reviews</span>
        //     </button>
        // </li>
        // <li className="flex items-center justify-between border-b p-2">
        //     <button
        //         className="inline-block py-3 px-3 rounded-lg w-full text-left hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
        //         <span className="text-black">Services</span>
        //     </button>
        // </li>
        // <li className="flex items-center justify-between border-b p-2">
        //     <button
        //         className="inline-block py-3 px-3 rounded-lg w-full text-left hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
        //         <span className="text-black">Payment</span>
        //     </button>
        // </li>