import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_SERVICEUSER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import heroImg from "../../../images/hero_image.svg";

const ProviderLogin = () => {
  // CREATE STATE FOR FORM
  const [formState, setFormState] = useState({ email: "", password: "" });
  // MUTATION FOR LOGIN NORMAL USER
  const [loginServiceUser, { error, data }] = useMutation(LOGIN_SERVICEUSER);

  // UPDATE STATE
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // SUBMIT FORM
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginServiceUser({
        variables: { ...formState },
      });

      Auth.loginServiceUser(data.loginServiceUser.token);
    } catch (e) {
      console.error(e);
    }

    // CLEAR FORM VARIABLES
    setFormState({
      email: "",
      password: "",
    });
  };

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
            appointments. Login to get started.
          </p>
        </div>
      </div>
      <main className="p-10 min-w-center m-auto w-full text-center max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
        <div className="p-1 col-12 col-lg-10">
          <div className="card">
            <h4 className="mb-2 text-3xl font-bold text-white">
              Service Provider Login
            </h4>
            <div className="card-body text-green-500">
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label
                    htmlFor="email"
                    className="block m-4 text-sm font-medium text-gray-300"
                  >
                    Please enter your email
                  </label>
                  <input
                    className="form-input bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 "
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="password"
                    className="block m-4 text-sm font-medium text-gray-300"
                  >
                    Please enter your password
                  </label>
                  <input
                    className="form-input mb-8 bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 "
                    placeholder="********"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    autoComplete='off'
                  />
                  {/* <div className="flex items-start">
                            <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                            </div>
                            <label htmlFor="remember" className="ml-2 mb-4 text-sm font-medium text-gray-300">Remember me</label>
                            </div> */}
                  <button
                    className="py-3 px-5 mr-5 w-full mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300 btn btn-block"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Submit
                  </button>
                  <div className="text-sm font-medium text-gray-300">
                    Not registered?{" "}
                    <Link
                      to="/signup"
                      className="text-green-500 hover:underline"
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-red-500">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProviderLogin;
