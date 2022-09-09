import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import heroImg from "../images/hero_image.svg";
import { QUERY_ALL_SERVICECATEGORIES } from "../../src/utils/queries";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { SyncLoader } from "react-spinners";

const Home = () => {
  const isLoggedIn = Auth.loggedIn() ? true : false;
  // CREATE STATE TO HOLD CATEGORIES
  const [savedCategories, setSavedCategories] = useState([]);

  // QUERY FOR ALL CATEGORIES
  const { loading, error, data } = useQuery(QUERY_ALL_SERVICECATEGORIES, {
    fetchPolicy: "no-cache",
  });

  // IF QUERY IS SUCCESSFUL, SET STATE TO CATEGORIES
  useEffect(() => {
    if (data) {
      setSavedCategories(data.serviceCategories);
    }
  }, [data]);

  const categoryItems = savedCategories?.map((category) => (
    <div key={category._id} className="align-items-center">
      <button className="transform hover:scale-105 duration-500 ease-in-out">
        <Link to={"/category/" + category._id}>
          <img
            src={category.categoryIcon}
            alt={category.categoryName + " icon"}
            className="w-20 h-20 mb-5 min-w-20 min-h-20"
          />
          <div className="flex justify-center">
            <span className="font-nato">{category.categoryName}</span>
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
          <h1 className="font-nato my-4 text-2xl text-bold lg:text-5xl">
            No Free Toes Scheduler
          </h1>
          <p className="font-kanit text-lg leading-normal mb-6 mt-4">
            No Free Toes Scheduler is a solution to all of your scheduling
            needs, for whatever service you may need. We aim to ease the
            difficulties of creating, setting up, attending or even providing
            appointments. Click the button below to get started.
          </p>
          {isLoggedIn ? null : (
            <button className="py-2 px-3 text-lg ring-2 ring-offset-1 ring-red-400 bg-red-300 text-black hover:bg-red-700 hover:text-white rounded transition duration-300">
              <Link to="/signup">
                <div className="text-kanit font-semibold">
                  <p>Sign Up Today!</p>
                </div>
              </Link>
            </button>
          )}
        </div>
      </div>

      <div className="bg-slate-50 py-12 rounded-lg shadow-inner">
        {loading ? (
          <div className="py-24 flex justify-center">
            <SyncLoader color="#E96458" />
          </div>
        ) : (
          <main className="px-16 py-12 place-items-center lg:h-3/4 lg:px-32 lg:py-12 grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-24">
            {categoryItems}
          </main>
        )}
      </div>
    </>
  );
};

export default Home;
