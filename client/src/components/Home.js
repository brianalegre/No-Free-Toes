import React from "react";
import heroImg from "../images/hero_image.svg";
import danceIcon from "../images/icons/dance_icon.svg";
import eyelashesIcon from "../images/icons/eyelashes_icon.svg";
import haircutIcon from "../images/icons/haircut_icon.svg";
import massageIcon from "../images/icons/massage_icon.svg";
import nailCareIcon from "../images/icons/nailcare_icon.svg"
import personalTrainingIcon from "../images/icons/personaltraining_icon.svg"
import petCareIcon from "../images/icons/petcare_icon.svg"
import mediaIcon from "../images/icons/media_icon.svg"
import tutoringIcon from "../images/icons/tutoring_icon.svg"
import singingIcon from "../images/icons/singing_icon.svg"

const servicesArray = [
  {
    name: "Haircut",
    image: haircutIcon,
    link: "#"
  },
  {
    name: "Massage",
    image: massageIcon,
    link: "#"
  },
  {
    name: "Eyelashes",
    image: eyelashesIcon,
    link: "#"
  },
  {
    name: "Nailcare",
    image: nailCareIcon,
    link: "#"
  },
  {
    name: "Dance",
    image: danceIcon,
    link: "#"
  },
  {
    name: "Fitness",
    image: personalTrainingIcon,
    link: "#"
  },
  {
    name: "Pet Care",
    image: petCareIcon,
    link: "#"
  },
  {
    name: "Tutoring",
    image: tutoringIcon,
    link: "#"
  },
  {
    name: "Media",
    image: mediaIcon,
    link: "#"
  },
  {
    name: "Singing",
    image: singingIcon,
    link: "#"
  },
];

const categoryItems = servicesArray.map((services, i) => (
  <div key={'services' + i} className="align-items-center">
    <img src={services.image} alt={services.name + " icon"} className="w-20 h-20 mb-5 min-w-20 min-h-20" />
    <div className="flex justify-center">
      <span className="">{services.name}</span>
    </div>
  </div>
));

export default function Home() {
  return (
    <>

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
            appointments. Click the button below to get started.
          </p>
          <button className="py-2 px-3 text-lg bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300">
            {/* add {Link} router here for signup page */}
            Sign Up Today!
          </button>
        </div>
      </div>

      <div className="text-black bg-white flex items-center justify-center pb-12">
        <form
          role="search"
          className="mb-4 md:flex md:flex-wrap md:justify-between input-group"
        >
          <div className="border rounded overflow-hidden flex">
            <label htmlFor="userInput" className="sr-only">
              Search Services
            </label>
            <input
              type="search"
              name="search-service"
              autoComplete="on"
              className="pl-6 lg:pl-8 py-2"
              id="userInput"
              placeholder="Search for a service.."
              size="30"
            />
            <button className="flex items-center bg-green-700 justify-center px-4">
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <main className="px-16 py-12 place-items-center lg:px-32 lg:py-12 grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-24">
        {categoryItems}
      </main>
    </>
  );
}
