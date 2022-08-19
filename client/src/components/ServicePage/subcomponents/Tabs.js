import React from "react";

export default function Tabs() {
  return (
    <>
      <ul className="py-5 flex flex-wrap justify-around text-md font-medium text-center text-gray-500 dark:text-gray-400 border-b border-slate-50 shadow rounded-lg rounded-bl-none rounded-br-none">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block py-3 px-4 text-blue-500 rounded-lg active"
            aria-current="page"
          >
            About Provider
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Services
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Reviews
          </a>
        </li>
      </ul>
    </>
  );
}
