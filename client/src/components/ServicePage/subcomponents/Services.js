import React, { useState } from "react";
import Modal from "react-modal";
import * as moment from "moment";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../../utils/mutations";
import { useParams, useNavigate } from "react-router-dom";
import ServiceDesriptionModal from "../../modals/ServiceDescriptionModal";
import Auth from "../../../utils/auth";
import toast from "react-hot-toast";
import { Reoverlay } from "reoverlay";

export default function Services({ serviceUser, refetch }) {
  const { serviceType } = serviceUser;
  const { timeSlots } = serviceUser;
  const { serviceUserId } = useParams();
  const navigate = useNavigate();

  // CHECK IF LOGGED
  const isLoggedIn = Auth.loggedIn() ? true : false;
  const loggedInUserId = isLoggedIn ? Auth.getProfile().data._id : null;
  const userType = isLoggedIn ? Auth.getProfile().data.userType : null;

  const [formState, setFormState] = useState({
    normalUserId: loggedInUserId,
    serviceUserId: serviceUserId,
    timeSlotId: "",
    serviceTypeId: "",
  });
  const [addAppointment, { error, data }] = useMutation(ADD_APPOINTMENT);

  // SUBMIT FORM
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addAppointment({
        variables: { ...formState },
      });

      toast.success("Successfully Booked!");
      closeModal();
      refetch();
    } catch (e) {
      toast.error("Please Select an Available Timeslot");
    }
  };

  // UPDATE  STATE
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // MODAL FOR BOOKING
  const customStyles = {
    overlay: {
      height: "38%",
      top: "50%",
      left: "50%",
      right: "auto",
      width: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
    },
    content: {
      border: "none",
    },
  };

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function openModal(event) {
    Auth.loggedIn() === true ? setmodalIsOpen(true) : navigate("/login");
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function closeModal() {
    setmodalIsOpen(false);
  }

  const descriptionModal = (serviceDescription) => {
    Reoverlay.showModal(ServiceDesriptionModal, {
      serviceDescription: serviceDescription,
    });
  };

  const timeSlotStateData = timeSlots
    ?.sort((a, b) => a.timeSlot - b.timeSlot)
    .slice(0, 10)
    .map((timeSlotState) => (
      <button
        onClick={handleChange}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        value={timeSlotState._id}
        name="timeSlotId"
        data-id={timeSlotState._id}
        key={timeSlotState._id}
      >
        {moment.unix(timeSlotState.timeSlot).format("ddd M/D hh:mm A")}
      </button>
    ));

  const services = serviceType?.map((service) => (
    <tr key={service.serviceName}>
      <td className="px-3 sm:px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <div className="w-full flex-wrap items-center">
          <div className="sm:pl-12">
            <button
              onClick={() => descriptionModal(service.serviceDescription)}
              className="whitespace-no-wrap font-bold hover:text-red-600 dark:hover:text-red-400"
            >
              {service.serviceName}
            </button>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <p className="whitespace-no-wrap pl-1 sm:pl-0 sm:pr-4">
          {`$`}
          {service.servicePrice}
        </p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="sm:pl-0 sm:mr-12">
          {userType !== "normalUser" ? null : (
            <button
              className="text-white bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-500 transition ease-in-out duration-200 font-semibold rounded-lg px-1.5 sm:px-2 py-1.5 mr-2 mb-2"
              onClick={openModal}
              value={service._id}
              name="serviceTypeId"
              data-id={service._id}
            >
              Book Now
            </button>
          )}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="m-5 p-5">
            <div className="flex">
              <h2 className="text-center w-full font-semibold top-0">
                Pick an Available Timeslot
              </h2>
              <button
                onClick={closeModal}
                className="text-red-500 font-extrabold text-right"
              >
                X
              </button>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-5">
              {timeSlotStateData}
            </div>
            <div className="flex justify-end pt-5">
              <button
                type="button"
                onClick={handleFormSubmit}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </td>
    </tr>
  ));

  return (
    <section>
      <table className="min-w-full leading-normal text-center">
        <thead>
          <tr>
            <td className="py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="sm:pl-12">
                <div className="flex justify-center">
                  <p className="whitespace-no-wrap font-semibold text-center">
                    Service Type
                  </p>
                </div>
              </div>
            </td>
            <td className="sm:px-36 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="flex justify-center">
                <div className="pl-1 sm:pl-0 sm:pr-4">
                  <p className="whitespace-no-wrap font-semibold">Price</p>
                </div>
              </div>
            </td>
            <td className="py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="">
                <div className="sm:pr-16">
                  <p className=" whitespace-no-wrap font-semibold">
                    Scheduling
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>{services}</tbody>
      </table>
    </section>
  );
}
