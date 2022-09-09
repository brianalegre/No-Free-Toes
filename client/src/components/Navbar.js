import React from "react";
import { useState } from "react";
import logo from "../images/icons/navlogo.svg";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

// CHECK IF LOGGED
const isLoggedIn = Auth.loggedIn() ? true : false;
// if isLoggedin true then get the user id from the token
// else set the user id to null
const loggedInUserId = isLoggedIn ? Auth.getProfile().data._id : null;

const userType = isLoggedIn ? Auth.getProfile().data.userType : null;

// const userInfo = Auth.getProfile()

const userLink =
  userType === "normalUser"
    ? "/nuser/" + loggedInUserId
    : "/suser/" + loggedInUserId;

const visitorNavLinks = [
  {
    name: "Home",
    link: "/",
    class: "font-kanit py-5 px-3 hover:text-red-700 transition duration-300",
  },
  {
    name: "Login",
    link: "/login",
    class: "font-kanit py-5 px-3 hover:text-red-700 transition duration-300",
  },
  {
    name: "Sign Up",
    link: "/signup",
    class:
      "font-kanit py-2 px-3 ring-2 ring-offset-1 ring-red-400 bg-red-300 text-black hover:bg-red-600 hover:text-white rounded transition duration-300 rounded transition duration-300",
  },
];

const memberNavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Appointments",
    link: `/appointments/${loggedInUserId}`,
  },
  {
    name: "Account",
    link: userLink,
  },
  // {
  //   name: "Service Account",
  //   link: userLink
  // },
];

const visitorLgNav = visitorNavLinks.map((navlinks, i) => (
  <Link to={navlinks.link} key={"visitor_large_nav_link " + i}>
    <div className={navlinks.class}>{navlinks.name}</div>
  </Link>
));

const visitorMobileNav = visitorNavLinks.map((navlinks, i) => (
  <Link to={navlinks.link} key={"visitor_mobile_nav_link " + i}>
    <div
      href={navlinks.link}
      className="font-kanit text-black block py-2 px-4 text-sm hover:text-red-700 transition ease-in-out duration-300"
    >
      {navlinks.name}
    </div>
  </Link>
));

const memberLgNav = memberNavLinks.map((navlinks, i) => (
  <Link to={navlinks.link} key={"member_large_nav_link " + i}>
    <div
      href={navlinks.link}
      className="font-kanit py-5 px-3 hover:text-red-700 transition ease-in-out duration-300"
    >
      {navlinks.name}
    </div>
  </Link>
));

const memberMobileNav = memberNavLinks.map((navlinks, i) => (
  <Link to={navlinks.link} key={"member_mobile_nav_link " + i}>
    <div
      href={navlinks.link}
      className="font-kanit block py-2 px-4 text-sm text-black hover:text-red-700 transition ease-in-out duration-300"
    >
      {navlinks.name}
    </div>
  </Link>
));

export default function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [isActive, setActive] = useState("false");

  const mobileBtnHandler = () => {
    setActive(!isActive);
  };

  return (
    <nav className="bg-gradient-to-r from-red-100 to-red-300 shadow-lg">
      <div className="xl:max-w-8xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                <img src={logo} className="h-10 w-10 mr-3" alt="logo" />
                <span className="font-nato text-black hover:text-red-500 font-bold transition ease-in-out duration-300">
                  No Free Toes Scheduler
                </span>
              </a>
            </div>
          </div>

          {/* large screen visitor nav */}
          <div
            className="hidden lg:flex items-center gap-x-16"
            key="lg-scrn-visit"
          >
            {/* FOR USE WHEN WE IMPLEMENT LOGGED IN FUNCTIONALITY */}
            {/* {isLoggedIn ? visitorLgNav : memberLgNav} */}

            {Auth.loggedIn() ? (
              <>
                {memberLgNav}
                <button
                  key="lg-logout"
                  onClick={logout}
                  className="inline-flex py-2 px-3 font-kanit gap-x-2 items-center bg-red-300 ring-2 ring-offset-1 ring-red-400 hover:ring-red-700 hover:bg-red-700 text-black hover:text-gray-100 rounded transition duration-300"
                >
                  {" "}
                  Logout
                  <FiLogOut />
                </button>
              </>
            ) : (
              visitorLgNav
            )}
          </div>

          {/* hamburger menu button */}
          <div className="lg:hidden flex items-center" key="hamburger">
            <button onClick={mobileBtnHandler} className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={isActive ? "hidden lg:hidden" : "lg:hidden"}
        key="mobile-nav"
      >
        {Auth.loggedIn() ? (
          <>
            {memberMobileNav}
            <button
              onClick={logout}
              className="inline-flex gap-x-2 items-center font-kanit text-black py-2 px-4 text-sm hover:text-red-600 transition ease-in-out duration-300"
            >
              {" "}
              Logout
              <FiLogOut />
            </button>
          </>
        ) : (
          visitorMobileNav
        )}
      </div>
    </nav>
  );
}
