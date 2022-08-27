import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_NORMALUSER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

const ClientLogin = () => {

    // CREATE STATE FOR FORM
    const [formState, setFormState] = useState({ email: '', password: '' });
  // MUTATION FOR LOGIN NORMAL USER
    const [loginNormalUser, { error, data }] = useMutation(LOGIN_NORMALUSER);

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
            const { data } = await loginNormalUser({
                variables: { ...formState },
            });

            Auth.loginNormalUser(data.loginNormalUser.token);
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

        // <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        //     <form class="space-y-6" action="#">
        //         <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        //         <div>
        //             <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        //             <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        //         </div>
        //         <div>
        //             <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
        //             <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //         </div>
                // <div class="flex items-start">
                //     <div class="flex items-start">
                //         <div class="flex items-center h-5">
                //             <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                //         </div>
                //         <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                //     </div>
        //         </div>
        //         <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                // <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                //     Not registered? <Link to="/signup" class="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                // </div>
        //     </form>
        // </div>
        <div className=" p-10">
        <main className=" p-10 min-w-center m-auto w-full text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="mb-2 text-3xl font-bold text-white">Client Login</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                            <label for="email" class="block m-4 text-sm font-medium text-gray-300">Please enter your email</label>
                                <input
                                    className="form-input bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 "
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <label for="password" class="block m-4 text-sm font-medium text-gray-300">Please enter your password</label>
                                <input
                                    className="form-input mb-4 bg-gray-100 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 "
                                    placeholder="********"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <div class="flex items-start">
                                <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" class="ml-2 mb-4 text-sm font-medium text-gray-300">Remember me</label>
                                </div>
                                <button
                                    className="btn btn-block btn py-2.5 px-5 mr-2 mb-2 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 rounded transition duration-300"
                                    style={{ cursor: 'pointer' }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <div class="text-sm font-medium text-gray-300">
                                Not registered? <Link to="/signup" class="text-green-500 hover:underline">Sign Up</Link>
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

export default ClientLogin;