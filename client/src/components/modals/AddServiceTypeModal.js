import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ModalWrapper, Reoverlay } from "reoverlay";
import ServiceSettings from "../ServiceAccount/subcomponents/ServiceSettings";
import { ADD_SERVICETYPE } from "../../utils/mutations"
import "reoverlay/lib/ModalWrapper.css";
import toast from "react-hot-toast";
import Auth from "../../utils/auth"

const isLoggedIn = Auth.loggedIn() ? true : false;

const serviceCategoryId = isLoggedIn ? Auth.getProfile().data.serviceCategory : null;

const AddServiceTypeModal = ({ loggedInUserId, serviceUser, refetch }) => {
    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const [addServiceType, { error, data }] = useMutation(ADD_SERVICETYPE);

    
    const [serviceInfo, setServiceInfo] = useState({
        serviceUserId: loggedInUserId,
        serviceName: "",
        servicePrice: "",
        serviceDescription: "",
        serviceCategory: serviceCategoryId
    });
    console.log(serviceInfo)
    const handleUserInput = (event) => {
        const { name, value } = event.target;

        setServiceInfo({
            ...serviceInfo,
            [name]: value,
        })
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addServiceType({
                variables: { ...serviceInfo }
            })
            refetch();
            toast.success("Service type successfully added!");
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ModalWrapper loggedInUserId={loggedInUserId} serviceUser={serviceUser} refetch={refetch}>
            ADD SERVICE TYPE
            <div>
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
            </div>

        </ModalWrapper>
    )
}

export default AddServiceTypeModal