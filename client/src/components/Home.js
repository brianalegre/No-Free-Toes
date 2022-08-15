import React from "react";
import Navbar from "./Navbar";
import heroImg from "../images/hero_image.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div class="container mx-auto flex flex-col md:flex-row items-center my-12">
        <div class="pl-24 w-full lg:w-1/2 lg:py-6">
          <img src={heroImg} alt="hero image" className="w-4/6" />
        </div>
        <div class="flex flex-col w-full lg:w-2/3 justify-center items-start pt-12 pb-24 px-6">
          <h1 class="my-4 text-2xl text-bold lg:text-5xl">No Free Toes Scheduler</h1>
          <p class="leading-normal mb-4">
            No Free Toes Scheduler is a solution to all of your scheduling
            needs, for whatever service you may need. We aim to ease the
            difficulties of creating, setting up, attending or even providing
            appointments. Click the button below to get started.
          </p>
          <button class="py-2 px-3 text-lg bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300">
            Sign Up Today!
          </button>
        </div>
      </div>
    </>
  );
}
