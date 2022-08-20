import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import heroImg from "../images/hero_image.svg";
import { QUERY_ALL_SERVICECATEGORIES } from "../../src/utils/queries";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {

  // CREATE STATE TO HOLD CATEGORIES
  const [savedCategories, setSavedCategories] = useState([]);

  // QUERY FOR ALL CATEGORIES
  const { loading, error, data } = useQuery(QUERY_ALL_SERVICECATEGORIES, {
    fetchPolicy: "no-cache"
  });

  // IF QUERY IS SUCCESSFUL, SET STATE TO CATEGORIES
  useEffect(() => {
    if (data) {
      setSavedCategories(data.serviceCategories);
    }
  }, [data]);

  const categoryItems = savedCategories.map((services, i) => (
    <div key={"services" + i} className="align-items-center">
      <button>
        <Link to={"/" + services.categoryName}>
          <img
            src={services.categoryIcon}
            alt={services.categoryName + " icon"}
            className="w-20 h-20 mb-5 min-w-20 min-h-20"
          />
          <div className="flex justify-center">
            <span className="">{services.categoryName}</span>
          </div>
        </Link>
      </button>
    </div>
  ));

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
            <a href="/signup"> Sign Up Today!</a>
          </button>
        </div>
      </div>

      <div className="bg-slate-50 py-12">
        <div className="text-black flex items-center justify-center pb-6">
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

        <main className="px-16 py-12 place-items-center lg:h-3/4 lg:px-32 lg:py-12 grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-24">
          {categoryItems}
          {/* {savedCategories.map((categoryItem, i) => (
            <div key={"services" + i} className="align-items-center">
              <button>
                <Link to={categoryItem.categoryName}>
                  <img
                    src={categoryItem.categoryIcon}
                    alt={"icon"}
                    className="w-20 h-20 mb-5 min-w-20 min-h-20"
                  />  <div className="flex justify-center">
                    <span className="">{categoryItem.name}</span>
                  </div>
                </Link>
              </button>
            </div>
          ))

          } */}
        </main>
      </div>
    </>
  );
}

export default Home;
