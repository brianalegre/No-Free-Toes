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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
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
    console.log(formState);

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

<div className="p-10 min-h-screen grid gap-6 mb-6 md:grid-cols-2">
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
            appointments. Fill out the form to get started.
          </p>
        </div>
      </div>
    <main className="p-5 min-w-center m-auto w-full text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="mb-4 text-3xl font-bold text-white">Client Sign Up</h4>
          <h5 className="mb-4 text-sm font-bold text-white">Please fill out the form below:</h5>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
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
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
                <div className="text-sm font-medium text-gray-300">
                            Already registered? 
                            <Link to="/login" className="text-green-500 hover:underline"> Login</Link>
                            </div>
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

export default ClientSignup;