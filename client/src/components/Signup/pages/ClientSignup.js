import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_NORMALUSER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import heroImg from "../../../images/hero_image.svg";

// CLIENT SIGNUP
const ClientSignup = () => {
  // MUTATION TO ADD NORMAL USER
  const [addNormalUser, { error, data }] = useMutation(ADD_NORMALUSER);
  // CREATE STATE FOR FORM
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
  });

  // UPDATE  STATE
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
      const { data } = await addNormalUser({
        variables: { ...formState },
      });

      Auth.loginNormalUser(data.addNormalUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pt-16 px-5 min-h-screen flex flex-col-reverse lg:grid lg:grid-cols-2">
      <div className="container flex flex-col md:flex-row items-center my-12">
        <div className="hidden md:flex pl-24 w-full">
          <img src={heroImg} alt="hero" className="w-2/3" />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 justify-center items-start py-12 px-6">
          <h1 className="text-black font-nato text-bold my-2 text-2xl text-bold lg:text-3xl">
            No Free Toes Scheduler
          </h1>
          <p className="font-kanit text-lg leading-normal mb-6 mt-4">
            No Free Toes Scheduler is a solution to all of your scheduling
            needs, for whatever service you may need. We aim to ease the
            difficulties of creating, setting up, attending or even providing
            appointments. Fill out the form to get started.
          </p>
        </div>
      </div>
      <main className="p-3 min-w-center m-auto w-full text-center max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
        <div className="py-8 px-4 col-12">
          <div className="card">
            <h4 className="mb-4 text-3xl font-bold text-white">
              Client Sign Up
            </h4>
            <h5 className="mb-4 text-sm font-bold text-white">
              Please fill out the form below:
            </h5>
            <div className="card-body text-green-500">
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="grid gap-6 mb-6 grid-cols-2">
                    <input
                      className="form-input bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                      placeholder="Your first name"
                      name="firstName"
                      type="text"
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                      placeholder="Your last name"
                      name="lastName"
                      type="text"
                      value={formState.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-6 mb-6">
                    <input
                      className="form-input bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                      autoComplete='off'
                    />
                    <input
                      className="form-input bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
                      placeholder="Your location"
                      name="location"
                      type="text"
                      value={formState.location}
                      onChange={handleChange}
                    />
                    <button
                      className="py-2.5 px-5 mr-5 w-full text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Submit
                    </button>
                    <div className="text-sm font-medium text-gray-300">
                      Already registered?
                      <Link
                        to="/login"
                        className="text-green-500 hover:underline"
                      >
                        {" "}
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-red-500">
                  <span> Please fill out fields correctly </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientSignup;
