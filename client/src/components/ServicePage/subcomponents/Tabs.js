import React, { useState } from "react";
import Services from "./Services";
import About from "./About";
import { motion } from "framer-motion";

export default function Tabs() {
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
        <ul className="py-5 flex flex-wrap justify-around text-md font-medium text-center text-gray-500 dark:text-gray-400 border-b border-slate-50 shadow rounded-lg rounded-bl-none rounded-br-none">
          {tabs.map((tabs) => (
            <li className="mr-2">
              <button
                className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setCurrentTab(tabs)} 
              >
                {tabs.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
          <div className="inline-block min-w-full"></div>
        </div>
        <About tabs={tabs} setCurrentTab={setCurrentTab}/>
        <Services tabs={tabs} setCurrentTab={setCurrentTab}/>
      </div>
    </>
  );
}
