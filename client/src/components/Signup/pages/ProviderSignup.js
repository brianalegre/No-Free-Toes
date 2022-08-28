import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SERVICEUSER } from "../../../utils/mutations";
import { QUERY_ALL_SERVICECATEGORIES } from "../../../utils/queries";
import Auth from "../../../utils/auth";
import Select from "react-select";


// PROVIDER SIGNUP
const ProviderSignup = () => {
  const {
    data: categories,
    error: catError,
    loading,
  } = useQuery(QUERY_ALL_SERVICECATEGORIES);

  // const [errorMessage, setErrorMessage] = useState('');

  // setErrorMessage('Please fill out all necessary info!');

  const [selectedOption, setSelectedOption] = useState(null);
  // const [destructure, setDestructure] = useState(null);


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

    // setSelectedOption(event);
  };

  const handleSelectedOption = val => {
    setSelectedOption(val)
    // console.log("SELECTED OPTION", val)
    // DESTRUCTURE VALUE
    const { serviceCategory } = val;
    // setDestructure(serviceCategory);
    // console.log('THIS IS SERVICECATETORY IN HANDLE', serviceCategory)
    setFormState({
      ...formState,
      serviceCategory: serviceCategory,
    });
    // SET STATE OF SELECTED OPTION
    // console.log("SELECTED OPTION", val)
    // console.log('SELECTED OPTION STATE', selectedOption)
  }
  // console.log('SELECTED OPTION STATE2', selectedOption)
  // console.log('DESTRUCTURE', destructure)

  // ADD DESTRUCTURE TO FORMSTATE


  // SUBMIT FORM
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('FORMSTATE -----', formState);

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

    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">
            Provider Sign Up
          </h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
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
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tell us about yourself..."
                    name="bio"
                    type="text"
                    value={formState.bio}
                    onChange={handleChange}
                  />

                  <input
                    className="form-input form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Your location"
                    name="location"
                    type="text"
                    value={formState.location}
                    onChange={handleChange}
                  />
                  <Select
                    plptiaceholder="Select On"
                    value={selectedOption}
                    options={cats4Dropdown}
                    onChange={handleSelectedOption}
                    name="serviceCategory"
                  />
                  <button
                    className="py-2.5 px-5 mr-4 mb-4 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300 btn btn-block"
                    style={{ cursor: "pointer" }}
                    type="submit"
                    onClick={() => handleFormSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
            {/* 
            {error && (
              <div className="my-3 p-3 bg-danger text-black">
                {error.message}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProviderSignup;
