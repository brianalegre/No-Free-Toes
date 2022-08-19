import React from "react";

const serviceData = [
    {
        serviceName: "Buzz Cut",
        price: "$40",
        duration: "30 minutes",
    },
    {
        serviceName: "Mid-Low Fade",
        price: "$60",
        duration: "45 minutes",
    },
    {
        serviceName: "Hair Dye",
        price: "$120",
        duration: "120 minutes",
    },
    {
        serviceName: "Fade and Shave",
        price: "$55",
        duration: "60 minutes",
    },
    {
        serviceName: "Barber's cut",
        price: "$35",
        duration: "30 minutes",
    },
    {
        serviceName: "Cut of the day",
        price: "$15",
        duration: "30 minutes",
    },
]

const serviceRow = serviceData.map((service) => (
    <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
    <div className="flex items-center">
      <div className="ml-3">
        <p className="text-gray-900 whitespace-no-wrap">{service.serviceName}</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="ml-3">
        <p className="text-gray-900 whitespace-no-wrap">{service.serviceName}</p>
      </div>
    </div>
        <div className="flex items-center">
      <div className="ml-3">
        <p className="text-gray-900 whitespace-no-wrap">{service.serviceName}</p>
      </div>
    </div>
  </td>
))


export default function TableRow() {
  return (
    <>
      {/* SERVICETYPE ROW SUB COMPONENT TO POPULATE FROM BACKEND */}
      <tr>
        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="pl-3">
              <p className="text-gray-900 whitespace-no-wrap">Buzz Cut</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">$40</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">30 minutes</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">available</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </td>
      </tr>

      <tr>
        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="pl-3">
              <p className="text-gray-900 whitespace-no-wrap">Mid-Low Fade</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">$50</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">45 minutes</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">available</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </td>
      </tr>

      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="pl-3">
              <p className="text-gray-900 whitespace-no-wrap">Hair Dye</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">$90</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">75 minutes</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">available</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </td>
      </tr>

      <tr>
        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="pl-3">
              <p className="text-gray-900 whitespace-no-wrap">Fade {"&"} Shave</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">$40</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">60 minutes</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">available</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </td>
      </tr>

      <tr>
        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="pl-3">
              <p className="text-gray-900 whitespace-no-wrap">Layered Haircut</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">$80</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">60 minutes</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">available</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </td>
      </tr>
      
    </>
  );
}
