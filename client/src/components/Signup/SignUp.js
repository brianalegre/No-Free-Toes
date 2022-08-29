import React from "react";
import { Link } from "react-router-dom"
import heroImg from "../../images/hero_image.svg";

const Signup = () => {

    return (
    
    <div className="p-6 sm:p-20 min-h-screen grid gap-6 mb-6 md:grid-cols-2">
      {/* HERO SECTION */}
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12">
        <div className="pl-24 w-full lg:w-1/2 lg:py-6">
          <img src={heroImg} alt="hero" className="w-4/6" />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 justify-center items-start py-12 px-6">
          <h1 className="my-4 text-2xl text-bold lg:text-5xl">
            No Free Toes Scheduler
          </h1>
          <p className="leading-normal mb-4">
            No Free Toes Scheduler is a solution to all of your scheduling
            needs, for whatever service you may need. We aim to ease the
            difficulties of creating, setting up, attending or even providing
            appointments. Select signup option to get started.
          </p>
        </div>
      </div>
        <div className="p-10 min-w-center m-auto w-full text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <h5 className="mb-3 text-3xl font-bold text-white">Select Sign Up</h5>
            <p className="mb-5 text-base text-gray-400 sm:text-lg ">Sign Up for No Free Toes Scheduler</p>
            <div className="flex flex-col items-center sm:justify-between sm:items-center sm:flex">
            <Link to="/signup/client" >
                    <div className="text-left">
                        <div className="py-2.5 w-36 px-5 mr-2 mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 transition duration-300">Client</div>
                    </div>
                </Link>
                <Link to="/signup/provider" >
                    <div className="text-left">
                        <div className="py-2.5 px-5 mr-2 w-36 mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 transition duration-300">Provider</div>
                    </div>
                </Link>
            </div>
        </div>
        </div>
        );
        };

       
       
        export default Signup;