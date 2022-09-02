import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_SERVICETYPE } from "../../../utils/mutations"
// import { ADD_SERVICETYPE } from "../../../utils/mutations"
import ConfirmationModal from "../../modals/ConfirmationModal";
import AddServiceTypeModal from "../../modals/AddServiceTypeModal";
import { Reoverlay } from "reoverlay";
import toast from "react-hot-toast";
import { AiOutlinePlus} from "react-icons/ai";

import Auth from "../../../utils/auth"

const isLoggedIn = Auth.loggedIn() ? true : false;

const serviceCategoryId = isLoggedIn ? Auth.getProfile().data.serviceCategory : null;

export default function ServiceSettings({ loggedInUserId, serviceUser, refetch }) {

    // DESTRUCTURE SERVICE TYPES
    const { serviceType } = serviceUser

    // const [serviceInfo, setServiceInfo] = useState({
    //     serviceUserId: loggedInUserId,
    //     serviceName: "",
    //     servicePrice: "",
    //     serviceDescription: "",
    //     serviceCategory: serviceCategoryId
    // });


    // const handleUserInput = (event) => {
    //     const { name, value } = event.target;

    //     setServiceInfo({
    //         ...serviceInfo,
    //         [name]: value,
    //     })
    // };

    // const [addServiceType, { error, data }] = useMutation(ADD_SERVICETYPE);

    const [deleteServiceType] = useMutation(DELETE_SERVICETYPE);

    const deleteService = (serviceType) => {
        Reoverlay.showModal(ConfirmationModal, {
            confirmText: "Are you sure you want to remove this service type?",
            onConfirm: async () => {
                await deleteServiceType({
                    variables: {
                        serviceUserId: loggedInUserId,
                        serviceTypeId: serviceType
                    },
                });

                refetch();
                toast.success("Service type successfully removed!");
                return Reoverlay.hideModal();
            },
        });
    };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         await addServiceType({
    //             variables: { ...serviceInfo }
    //         })
    //         refetch();
    //         toast.success("Service type successfully added!");
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // console.log(serviceInfo)

    // VARIABLES FOR ADDING SERVICE TYPE
    // serviceCategory: "631144879ba5fa453a850d14"
    // serviceDescription: "the freshest"
    // serviceName: "new service type"
    // servicePrice: "50"
    // serviceUserId: "631144879ba5fa453a850d68"

    const serviceModal = (serviceUser) => {
        Reoverlay.showModal(AddServiceTypeModal, {
            loggedInUserId: loggedInUserId,
            serviceDescription: "",
            serviceName: "",
            servicePrice: "",
            serviceUser: serviceUser,
            refetch: refetch
        })
    }


    // MAPPING SERVICE TYPE CARD
    const services = serviceType?.map((service) => (
        <div key={service._id}>

            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-base font-medium text-gray-900 truncate ">
                            {service.serviceName} ${service.servicePrice}
                        </p>
                        <p className="text-base text-gray-500 truncate">
                            {service.serviceDescription}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
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
                </div>
            </li>
        </div>

    ))

    return (
        <section className="mt-5 md:ml-10 md:mt-0">
            <div className="flex items-center gap-2">
                <h1 className="py-2 text-xl">
                    Service Types
                </h1>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg transition delay-50 ease-in-out bg-green-600 hover:bg-green-500 w-4 h-4 mr-2"
                    onClick={serviceModal}
                >
                    <AiOutlinePlus color="white" />
                </button>
            </div>
            <div class="p-3 w-full max-w-3xl bg-white rounded-lg border shadow-md sm:p-4">
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {services}
                    </ul>
                </div>
            </div>
            {/* <div>
                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_serviceName" className="text-xs">Service Name</label>
                    <input onChange={handleUserInput} type="text" name="serviceName" id="floating_text" placeholder="Service Name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_servicePrice" className="text-xs">Service Price</label>
                    <input onChange={handleUserInput} type="number" name="servicePrice" id="floating_text" placeholder="Service Price" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <label for="floating_serviceDescription" className="text-xs">Service Description</label>
                    <input onChange={handleUserInput} type="text" name="serviceDescription" id="floating_text" placeholder="Service Description" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                </div>
                <button
                    type="submit"
                    className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2"
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </div> */}
        </section>
    )
}
