import React, { useState } from "react";
import Services from "./Services";
import About from "./About";
import Reviews from "./ServiceComments";

export default function Tabs({ serviceUser }) {
  const [tabs] = useState([
    {
      name: "About Provider",
    },
    {
      name: "Services",
    },
    {
      name: "Reviews",
    },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <>
      <div className="bg-white">
        <ul className="py-5 flex flex-wrap justify-around text-md font-medium text-center text-gray-500 border-b border-slate-50 shadow rounded-lg rounded-bl-none rounded-br-none dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          {tabs.map((tabs) => (
            <li className="mr-2" key={tabs.name}>
              <button
                className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                onClick={() => setCurrentTab(tabs)}
              >
                <span
                  className={
                    currentTab.name === tabs.name ? "text-red-600 dark:text-red-400" : null
                  }
                >
                  {tabs.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
          <div className="inline-block min-w-full"></div>
        </div>
        <div className={currentTab.name === "About Provider" ? null : "hidden"}>
          <About serviceUser={serviceUser} />
        </div>
        <div className={currentTab.name === "Services" ? null : "hidden"}>
          <Services serviceUser={serviceUser} />
        </div>
        <div className={currentTab.name === "Reviews" ? null : "hidden"}>
          <Reviews />
        </div>
      </div>
    </>
  );
}
