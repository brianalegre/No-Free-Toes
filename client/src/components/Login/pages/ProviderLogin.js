import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_SERVICEUSER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

const ProviderLogin = () => {

  // CREATE STATE FOR FORM
  const [formState, setFormState] = useState({ email: '', password: '' });
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
    console.log(formState);
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
      email: '',
      password: '',
    });
  };

  return (
    // <div className=" p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

    //   <h2>Login</h2>
    //   <form class="space-y-6" action="#">
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //       // onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //       // onChange={handleChange}
    //       />
    //     </div>
    //     {/* {error ? (
    //       <div>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </div>
    //     ) : null} */}
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>

    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Proivder Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
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
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
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
}

export default ProviderLogin;