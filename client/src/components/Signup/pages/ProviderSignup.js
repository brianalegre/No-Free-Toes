import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_SERVICEUSER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";


// PROVIDER SIGNUP
const ProviderSignup = () => {

  // MUTATION TO ADD SERVICE USER
  const [addServiceUser, { error, data }] = useMutation(ADD_SERVICEUSER);
  // CREATE STATE FOR FORM
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    bio: '',
    location: '',
    serviceCategory: '',
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
      const { data } = await addServiceUser({
        variables: { ...formState },
      });

      Auth.loginServiceUser(data.addServiceUser.token);
    } catch (e) {
      console.error(e);

    }

  };
  return (
    // <div className="max-w-xxl justify-center">
    //   {/* {data ? (
    //     <p>
    //       Success! You may now head <Link to="/">back to the homepage.</Link>
    //     </p>
    //   ) : ( */}
    //   <form
    //     className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //     onSubmit={handleFormSubmit}
    //   >
    //     <h1 className="text-xl font-extrabold">Signup</h1>
    //     <br />
    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="username"
    //       >
    //         Username
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Your username"
    //         name="username"
    //         type="text"
    //         value={formState.name}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="email"
    //       >
    //         Email
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Your email"
    //         name="email"
    //         type="email"
    //         value={formState.email}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="password"
    //       >
    //         Password
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         value={formState.password}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="confirmpassword"
    //       >
    //         Confirm Password
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="******"
    //         name="confirmpassword"
    //         type="confirmpassword"
    //         value={formState.confirmpassword}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="email"
    //       >
    //         Location
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Your location"
    //         name="location"
    //         type="location"
    //         value={formState.location}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <button
    //       className="bg-purple-100 hover:bg-purple-200 text-white font-bold py-2 px-4 rounded w-full"
    //       style={{ cursor: "pointer" }}
    //       type="submit"
    //     >
    //       Submit
    //     </button>
    //   </form>
    //   {/* )} */}

    //   {/* {error && (
    //     <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
    //   )} */}
    // </div>

    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Provider Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <input
                  className="form-input"
                  placeholder="Your first name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your last name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Tell us about yourself..."
                  name="bio"
                  type="text"
                  value={formState.bio}
                  onChange={handleChange}
                />

                <input
                  className="form-input"
                  placeholder="Your location"
                  name="location"
                  type="text"
                  value={formState.location}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Service Category"
                  // TESTING VALUE: 6302a35585df27977f64cab2
                  // VALUE MAY DIFFER FROM YOUR DB
                  name="serviceCategory"
                  type="text"
                  value={formState.serviceCategory}
                  onChange={handleChange}
                />
                <button
                  className="py-2.5 px-5 mr-4 mb-4 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300 btn btn-block"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>

  );
};

export default ProviderSignup;