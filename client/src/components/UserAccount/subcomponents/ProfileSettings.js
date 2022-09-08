import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_NORMALUSER } from "../../../utils/mutations";
import { toast } from "react-hot-toast";

export default function ProfileSettings({
    loggedInUserId,
    email,
    firstName,
    lastName,
    location,
    refetch,
}) {
    // CREATE STATE FROM FORM
    const [userInfo, setUserInfo] = useState({
        normalUserId: loggedInUserId,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: null,
        location: location,
    });

    // UPDATE STATE
    const handleUserInput = (event) => {
        const { name, value } = event.target;

        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    // MUTATION TO EDIT NORMAL USER
    const [updateProfile, { error, data }] = useMutation(EDIT_NORMALUSER);

    // SUBMIT FORM
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await updateProfile({
                variables: { ...userInfo },
            });
            refetch();
            toast.success("Profile updated!");
        } catch (error) {
            console.error(error);
            return toast.error("Something went wrong");
        }
    };

    return (
        // Section div needs wrap each profile component
        <section className="mt-5 md:ml-10 md:mt-0">
            {/* Form place holder for Profile Settings */}
            <form className="">
                <h1 className="py-2 text-xl">Account Details</h1>
                <div className="relative z-0 mb-6 w-full group">
                    <label htmlFor="floating_email" className="text-xs font-semibold">
                        Email Address
                    </label>
                    <input
                        onChange={handleUserInput}
                        defaultValue={email}
                        type="email"
                        name="email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input onChange={handleUserInput} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" autoComplete='off' placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                {/* <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div> */}
                <div className="relative z-0 mb-6 w-full group">
                    <label htmlFor="floating_location" className="text-xs font-semibold">
                        Location
                    </label>
                    <input
                        onChange={handleUserInput}
                        type="text"
                        name="location"
                        id="floating_location"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder={location}
                        required
                    />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <label htmlFor="floating_location" className="text-xs font-semibold">
                        Change Picture
                    </label>
                    <input
                        // onChange={handleUserInput}
                        type="text"
                        name="photo"
                        // id="floating_location"
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder='Change your profile picture'
                        required
                    />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="floating_fn" className="text-xs font-semibold">
                            First Name
                        </label>
                        <input
                            onChange={handleUserInput}
                            type="text"
                            name="firstName"
                            id="floating_fn"
                            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder={firstName}
                            required
                        />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="floating_ln" className="text-xs font-semibold">
                            Last Name
                        </label>
                        <input
                            onChange={handleUserInput}
                            type="text"
                            name="lastName"
                            id="floating_ln"
                            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder={lastName}
                            required
                        />
                    </div>
                </div>
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Update
                </button>
            </form>
        </section>
    );
}
