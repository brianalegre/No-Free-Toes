import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SERVICEUSER } from "../../../utils/queries";
import moment from "moment";

export default function SUAppointmentCards() {
  const { loggedInUserId } = useParams();
  const { data, loading, error, refetch } = useQuery(QUERY_SERVICEUSER, {
    variables: { serviceUserId: loggedInUserId },
  });


  const userAppointments = data?.serviceUser?.appointments.map((appt) => (
    <div className="py-8 md:py-16 flex justify-center">
      <div
        href="##"
        className="relative flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2 md:p-4"
          src={appt.normalUser.photo}
          alt="default"
        />
        <div className="absolute top-2 -right-0.5 md:bottom-40">
          <button className="inline-flex items-center justify-center w-5 h-5 mr-2 text-pink-100 transition delay-50 ease-in-out bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700">
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
        <div className="flex flex-col p-4 w-96">
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {moment.unix(appt.timeSlot.timeSlot).format("ddd MM/DD HH:mm")}
          </h5>
          <span className="dark: text-gray-200">Appointment with:</span>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {appt.normalUser.firstName} {appt.normalUser.lastName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-200">
            {appt.serviceType.serviceName}
          </p>
        </div>
        <div className="pt-0 md:pt-28">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 md:px-5 md:py-2.5 mr-3 mb-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Contact Information
          </button>
        </div>
      </div>
    </div>
  ));

  
  return <div>{userAppointments}</div>;
}
