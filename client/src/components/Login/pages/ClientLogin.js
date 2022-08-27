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
        //         <div class="flex items-start">
        //             <div class="flex items-start">
        //                 <div class="flex items-center h-5">
        //                     <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        //                 </div>
        //                 <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        //             </div>
        //         </div>
        //         <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        //         <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        //             Not registered? <Link to="/signup" class="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
        //         </div>
        //     </form>
        // </div>

        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Login</h4>
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
                            <div className="my-3 p-3 bg-danger text-black">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>

    );
};

export default ClientLogin;