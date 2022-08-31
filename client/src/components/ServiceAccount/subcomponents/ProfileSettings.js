import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_SERVICEUSER } from "../../../utils/mutations"


export default function ProfileSettings({ loggedInUserId, serviceUser, refetch}) {
    // const { firstName, lastName, email } = serviceUser;
    const { email, firstName, lastName, bio, location } = serviceUser
    console.log(bio)
    // CREATE STATE FROM FORM
    const [userInfo, setUserInfo] = useState({
        serviceUserId: loggedInUserId,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: null,
        bio: bio,
        location: location
    })

    // UPDATE STATE
    const handleUserInput = (event) => {
        const { name, value } = event.target;

        setUserInfo({
            ...userInfo,
            [name]: value,
        });

    };

    // MUTATION TO EDIT NORMAL USER
    const [updateProfile, { error, data }] = useMutation(EDIT_SERVICEUSER)

    // SUBMIT FORM
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await updateProfile({
                variables: { ...userInfo },
            });
            refetch()
        } catch (error) {
            console.error(error);
        }
    };
    // console.log(updateProfile)


    // console.log('CURRENT STATE -----', userInfo)

    return (
        // Section div needs wrap each profile component
        <section className="mt-5 md:ml-5 md:mt-0">
            {/* Form place holder for Profile Settings */}
            <form className="">
                <h1 className="py-2 text-xl">
                    Account Details
                </h1>
                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_email" className="text-xs">Email address</label>
                    <input onChange={handleUserInput} defaultValue={email} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input onChange={handleUserInput} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                {/* <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div> */}
                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_location" className="text-xs">Location</label>
                    <input onChange={handleUserInput} defaultValue={location} type="text" name="location" id="floating_location" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={location} required />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_location" className="text-xs">Bio</label>
                    <input onChange={handleUserInput} defaultValue={bio} type="text" name="bio" id="floating_bio" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={bio} required />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <label for="floating_email" className="text-xs">First name</label>
                        <input onChange={handleUserInput} defaultValue={firstName} type="text" name="firstName" id="floating_fn" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={firstName} required />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <label for="floating_email" className="text-xs">Last name</label>
                        <input onChange={handleUserInput} defaultValue={lastName} type="text" name="lastName" id="floating_ln" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={lastName} required />
                    </div>
                </div>
                <button onClick={handleFormSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </section>
    )
}