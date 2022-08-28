import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    return (
    
    <div className=" p-10 max-w-center">
    <div className="p-10 min-w-center m-auto mb-4 w-full text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-white">Select Login</h5>
            <p className="mb-5 text-base text-gray-400 sm:text-lg ">Login to No Free Toes Scheduler</p>
            <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link to="/login/client" >
                    <div className="text-left">
                        <div className="py-2.5 px-5 mr-2 mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300">Client</div>
                    </div>
                </Link>
                <Link to="/login/provider" >
                    <div className="text-left">
                        <div className="py-2.5 px-5 mr-2 mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300">Provider</div>
                    </div>
                    
                    </Link>
            </div>
        </div>
        </div>
        );
        };
        
        
        export default Login;


<Link to="/login/provider" ></Link>