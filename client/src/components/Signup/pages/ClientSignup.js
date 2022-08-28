import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_NORMALUSER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

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
    //         First Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Enter Your First Name"
    //         name="firstName"
    //         type="text"
    //         value={formState.firstName}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="username"
    //       >
    //         Last Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Enter Your Last Name"
    //         name="lastName"
    //         type="text"
    //         value={formState.lastName}
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
    //         placeholder="********"
    //         name="password"
    //         type="password"
    //         value={formState.password}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     {/* <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="confirmpassword"
    //       >
    //         Confirm Password
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="********"
    //         name="password"
    //         type="password"
    //         // value={formState.password}
    //         onChange={handleChange}
    //       />
    //     </div> */}
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
<div className="p-5">
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
              <div className="my-3 p-3 bg-danger text-black">
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