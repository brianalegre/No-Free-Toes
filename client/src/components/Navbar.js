import React from "react";
import { useState } from "react";
import logo from "../images/icons/navlogo.svg";

const visitorNavLinks = [
  {
    name: "Home",
    link: "/",
    class: "py-5 px-3 hover:text-pink-600 transition duration-300"
  },
  {
    name: "Login",
    link: "#",
    class: "py-5 px-3 hover:text-pink-600 transition duration-300"
  },
  {
    name: "Sign Up",
    link: "#",
    class: "py-2 px-3 bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300"
  }
];

const memberNavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Appointments",
    link: "#",
  },
  {
    name: "Dashboard",
    link: "#",
  },
  {
    name: "Account",
    link: "#",
  },
  {
    name: "Logout",
    link: "#",
  },
];

const visitorLgNav = visitorNavLinks.map((navlinks) => (
  <>
    <a href={navlinks.link} className={navlinks.class}>
      {navlinks.name}
    </a>
  </>
));

const visitorMobileNav = visitorNavLinks.map((navlinks) => (
  <>
    <a
      href={navlinks.link}
      className="block py-2 px-4 text-sm text-black hover:text-pink-500"
    >
      {navlinks.name}
    </a>
  </>
));

const memberLgNav = memberNavLinks.map((navlinks) => (
  <>
    <a href={navlinks.link} className="py-5 px-3">
      {navlinks.name}
    </a>
  </>
));

const memberMobileNav = memberNavLinks.map((navlinks) => (
  <>
    <a
      href={navlinks.link}
      className="block py-2 px-4 text-sm text-black hover:text-pink-500"
    >
      {navlinks.name}
    </a>
  </>
));

export default function Navbar() {
  const [isActive, setActive] = useState("false");
  //   const [isLoggedIn, setIsLoggedIn] = useState("false");

  const mobileBtnHandler = () => {
    setActive(!isActive);
  };

  return (
    <nav className="bg-gradient-to-r from-red-100 to-red-300">
      <div className="xl:max-w-8xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                <img src={logo} className="h-10 w-10 mr-3" alt="logo" />
                <span className="font-bold">No Free Toes Scheduler</span>
              </a>
            </div>
          </div>

          {/* large screen visitor nav */}
          <div className="hidden md:flex items-center gap-x-16">

            {/* FOR USE WHEN WE IMPLEMENT LOGGED IN FUNCTIONALITY */}
            {/* {isLoggedIn ? visitorLgNav : memberLgNav} */}
            {visitorLgNav}

          </div>

          {/* hamburger menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={mobileBtnHandler} className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className={isActive ? "hidden md:hidden" : "md:hidden"}>

        {/* FOR USE WHEN WE IMPLEMENT LOGGED IN FUNCTIONALITY */}
        {/* {isLoggedIn ? visitorMobileNav : memberMobileNav} */}
        {visitorMobileNav}

      </div>
    </nav>
  );
}
