import React from "react";

const Signup = () => {

return (

<div className=" p-20 min-w-center">
<div className="p-4 w-center text-center bg-gray-900 rounded-lg font-black border shadow-md sm:p-8 border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Please select which applies to:</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Sign Up for No Free Toes Scheduler as:</p>
    <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="/Signup/client">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div className="text-left">
                <div className="py-2.5 px-5 mr-2 mb-2 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300">As a Client</div>
            </div>
        </a>
        <a href="/signup/provider">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div className="text-left">
                <div className="py-2.5 px-5 mr-2 mb-2 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300">As a Provider</div>
            </div>
        </a>
    </div>
</div>
</div>
);
};
export default Signup;