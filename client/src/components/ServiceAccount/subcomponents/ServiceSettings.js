import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { DELETE_SERVICETYPE } from "../../../utils/mutations"
import { ADD_SERVICETYPE } from "../../../utils/mutations"
import ConfirmationModal from "../../modals/ConfirmationModal";
import { Reoverlay } from "reoverlay";
import toast from "react-hot-toast";

import Auth from "../../../utils/auth"
// serviceDescription: "Fades, Tapers, etc + lineup (if requested)"
// serviceName: "Haircut"
// servicePrice: 40
// __typename: "ServiceType"
// _id: "63100af7005a60b9d0495e9f"

const isLoggedIn = Auth.loggedIn() ? true : false;

const serviceCategoryId = isLoggedIn ? Auth.getProfile().data.serviceCategory : null;

export default function ServiceSettings({ loggedInUserId, serviceUser, refetch }) {
    // console.log(serviceType)
    const { serviceType } = serviceUser

    const { serviceName, servicePrice, serviceDescription } = serviceUser

    const [serviceInfo, setServiceInfo] = useState({
        serviceUserId: loggedInUserId,
        serviceName: "",
        servicePrice: "",
        // serviceDescription: "",
        serviceCategory: serviceCategoryId
    });

    const handleUserInput = (event) => {
        const { name, value } = event.target;

        setServiceInfo({
            ...serviceInfo,
            [name]: value,
        })
    };
    // console.log(serviceInfo)

    const [addServiceType, { error, data }] = useMutation(ADD_SERVICETYPE);

    const [deleteServiceType] = useMutation(DELETE_SERVICETYPE);

    const deleteService = (serviceType) => {
        Reoverlay.showModal(ConfirmationModal, {
            confirmText: "Are you sure you want to delete this service type?",
            onConfirm: async () => {
                await deleteServiceType({
                    variables: {
                        serviceUserId: loggedInUserId,
                        serviceTypeId: serviceType
                    },
                });

                refetch();
                toast.success("Review successfully deleted!");
                return Reoverlay.hideModal();
            },
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addServiceType({
                variables: { ...serviceInfo }
            })
            // refetch()
        } catch (error) {
            console.error(error)
        }
    }
    // console.log(serviceInfo)
    const services = serviceType?.map((service) => (
        <div key={service._id}>
            <h1>
                {service.serviceName}: {service.serviceDescription}<br></br> ${service.servicePrice}
            </h1>

            <button
                className="inline-flex items-center justify-center w-5 h-5 mr-2 text-pink-100 transition delay-50 ease-in-out bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
                onClick={() => deleteService(service._id)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>
        </div>

    ))

    return (
        <div>
            <h1>
                services page
            </h1>
            <div>
                {services}
                <button
                    type="submit"
                    className="text-white bg-green-400 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
                    onClick={handleFormSubmit}
                >
                    Add Service Type
                </button>

                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_email" className="text-xs">Service Name</label>
                    <input onChange={handleUserInput} type="text" name="serviceName" id="floating_text" placeholder="Service Name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_email" className="text-xs">Service Price</label>
                    <input onChange={handleUserInput} type="number" name="servicePrice" id="floating_text" placeholder="Service Price" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div>
                {/* <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_email" className="text-xs">Service Description</label>
                    <input onChange={handleUserInput} type="text" name="serviceDescription" id="floating_text" placeholder="Service Description" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div> */}
            </div>
        </div>
    )
}


// export default function ServiceSettings({ serviceUser }) {
//     const { serviceType } = serviceUser
//     console.log(serviceUser)
//     const services = serviceType?.map((service) => (
//         <tr key={service.serviceName}>
//             <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <div className="flex items-center">
//                     <div className="pl-3">
//                         <p className="whitespace-no-wrap">{service.serviceName}</p>
//                     </div>
//                 </div>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <p className="whitespace-no-wrap">
//                     {`$`}
//                     {service.servicePrice}
//                 </p>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <p className="whitespace-no-wrap">{service.serviceDuration} minutes</p>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-700 dark:bg-gray-800">
//                 <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight dark:text-green-100">
//                     <span
//                         aria-hidden="true"
//                         className="absolute inset-0 bg-green-200 opacity-50 rounded-full dark:bg-green-700"
//                     ></span>
//                     <span className="relative">available</span>
//                 </span>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <button
//                     type="button"
//                     className="font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                     Book Now
//                     <svg
//                         aria-hidden="true"
//                         className="ml-2 -mr-1 w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill-rule="evenodd"
//                             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                             clip-rule="evenodd"
//                         ></path>
//                     </svg>
//                 </button>
//             </td>
//         </tr>
//     ));

//     return (
//         <section>
//             <table className="min-w-full leading-normal">
//                 <thead>
//                     <tr>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className="whitespace-no-wrap font-semibold">
//                                         Service Type
//                                     </p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className="whitespace-no-wrap font-semibold">Price</p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className="whitespace-no-wrap font-semibold">Duration</p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className=" whitespace-no-wrap font-semibold">
//                                         Availability
//                                     </p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white ">
//                             <div className="pl-1"></div>
//                         </td>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {/* SERVICETYPE ROW SUB COMPONENT TO POPULATE FROM BACKEND */}
//                     {services}
//                 </tbody>
//             </table>
//         </section>
//     );
// } 