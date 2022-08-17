import React from "react";
import mainLogo from "../images/icons/navlogo.svg";

const teamArray = [
  {
    name: "Brian Alegre",
    github: "https://github.com/brianalegre",
  },
  {
    name: "Allec Arzadon",
    github: "https://github.com/axe714",
  },
  {
    name: "Kevin Lazaro",
    github: "https://github.com/keeezy",
  },
  {
    name: "Philip Hwang",
    github: "https://github.com/phwang93",
  },
];

const teamMembers = teamArray.map((members, i) => (
  <>
    <li className={'Github Logo ' + i}>
      <a href={members.github}>
        <button
          type="button"
          className="w-38 text-white bg-transparent font-medium hover:text-red-300 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
        >
          <svg
            aria-hidden="true"
            className="mr-2 -ml-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </svg>
          {members.name}
        </button>
      </a>
    </li>
  </>
));

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8 lg:pt-20">
          <div className="md:grid md:grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="flex justify-center">
                <div className="justify-center">
                  <a
                    href="/"
                    className="flex items-center justify-center px-2 text-red-300"
                  >
                    <img
                      key="Footer Logo"
                      src={mainLogo}
                      className="h-12 w-12 sm:h-24 sm:w-24 mr-3"
                      alt="logo"
                    />
                    <span className="text-2xl font-bold">
                      No Free Toes Scheduler
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="text-center">
                <p className="text-lg font-medium text-red-600">
                  Made with ❤ by
                </p>
                <div className="mt-4 text-left pl-8 sm:text-center">
                  <ul className="sm:inline-flex">
                    <div className="grid grid-cols-2">{teamMembers}</div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:pt-6 sm:mt-12 border-t border-gray-400">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
                &copy; 2022 No Free Toes Scheduler
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
