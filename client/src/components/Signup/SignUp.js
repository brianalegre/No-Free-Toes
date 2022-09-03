import React from "react";
import { Link } from "react-router-dom"
import heroImg from "../../images/hero_image.svg";

const Signup = () => {

    return (
    
    <div className="pt-16 px-5 min-h-screen flex flex-col-reverse lg:grid lg:grid-cols-2">
      {/* HERO SECTION */}
      <div className="container flex mx-auto flex-row items-center my-12">
        <div className="hidden md:flex pl-24 w-full">
          <img src={heroImg} alt="hero" className="w-2/3" />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 justify-center items-start py-12 px-6">
          <h1 className="text-black font-nato text-bold my-4 text-2xl text-bold lg:text-3xl">
            No Free Toes Scheduler
          </h1>
          <p className="font-kanit text-lg leading-normal mb-6 mt-4">
            No Free Toes Scheduler is a solution to all of your scheduling
            needs, for whatever service you may need. We aim to ease the
            difficulties of creating, setting up, attending or even providing
            appointments. Select signup option to get started.
          </p>
        </div>
      </div>
        <div className="p-20 min-w-center m-auto w-full text-center max-w-sm rounded-lg bordershadow-md bg-gray-800 border-gray-700">
            <h5 className="mb-3 text-3xl font-bold text-white">Select Sign Up</h5>
            <p className="mb-5 text-gray-400 text-lg ">Sign Up for No Free Toes Scheduler</p>
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