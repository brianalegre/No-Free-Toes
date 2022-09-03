import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SERVICEUSER } from "../../../utils/mutations";
import { QUERY_ALL_SERVICECATEGORIES } from "../../../utils/queries";
import Auth from "../../../utils/auth";
import Select from "react-select";
import heroImg from "../../../images/hero_image.svg";

// PROVIDER SIGNUP
const ProviderSignup = () => {
  const {
    data: categories,
    error: catError,
    loading,
  } = useQuery(QUERY_ALL_SERVICECATEGORIES);
  // console.log(categories)

  // const [errorMessage, setErrorMessage] = useState('');

  // setErrorMessage('Please fill out all necessary info!');

  const [selectedOption, setSelectedOption] = useState(null);

  // MUTATION TO ADD SERVICE USER
  const [addServiceUser, { error, data }] = useMutation(ADD_SERVICEUSER);
  // CREATE STATE FOR FORM
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: "",
    location: "",
    serviceCategory: "",
  });

  // UPDATE  STATE

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSelectedOption = (val) => {
    setSelectedOption(val);
    const { serviceCategory } = val;
    setFormState({
      ...formState,
      serviceCategory: serviceCategory,
    });
  };

  // SUBMIT FORM
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addServiceUser({
        variables: { ...formState },
      });

      Auth.loginServiceUser(data.addServiceUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // SERVICE DROPDOWN
  const cats4Dropdown =
    categories?.serviceCategories?.map((cat) => ({
      serviceCategory: cat._id,
      label: cat.categoryName,
    })) || [];

  return (
    <div className="pt-16 px-5 min-h-screen flex flex-col-reverse lg:grid lg:grid-cols-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12">
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
            appointments. Fill out the information to get started.
          </p>
        </div>
      </div>
      <main className="p-8 min-w-center m-auto w-full text-center max-w-sm rounded-lg bordershadow-md bg-gray-800 border-gray-700">
        <div className="col-12">
          <div className="card">
            <h4 className="mb-4 text-3xl font-bold text-white">
              Provider Sign Up
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
                      className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Your first name"
                      name="firstName"
                      type="text"
                      required
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Your last name"
                      name="lastName"
                      type="text"
                      value={formState.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-6 mb-6">
                    <input
                      className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="********"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />

                    <textarea
                      id="message"
                      rows="4"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      name="bio"
                      type="text"
                      placeholder="Tell us about yourself..."
                      value={formState.bio}
                      onChange={handleChange}
                    />

                    <input
                      className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Your location"
                      name="location"
                      type="text"
                      value={formState.location}
                      onChange={handleChange}
                    />
                    <Select
                      placeholder="Select service provided"
                      value={selectedOption}
                      options={cats4Dropdown}
                      onChange={handleSelectedOption}
                      name="serviceCategory"
                      className="text-gray-900 rounded-lg block w-full"
                    />
                    <button
                      className="py-3 px-5 mr-5 w-full text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 transition duration-300 btn btn-block"
                      style={{ cursor: "pointer" }}
                      type="submit"
                      onClick={() => handleFormSubmit()}
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

export default ProviderSignup;
