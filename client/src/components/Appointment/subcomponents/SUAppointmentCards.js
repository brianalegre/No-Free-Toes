import React, {useEffect} from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SERVICEUSER } from "../../../utils/queries";
import { DELETE_APPOINTMENT } from "../../../utils/mutations";
import moment from "moment";
import NoAppointmentCard from "./NoAppointmentCard";
import { Reoverlay } from "reoverlay";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { toast } from 'react-hot-toast'

export default function SUAppointmentCards() {
  const { loggedInUserId } = useParams();
  const { data, loading, error, refetch } = useQuery(QUERY_SERVICEUSER, {
    variables: { serviceUserId: loggedInUserId },
  });

  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT);

  useEffect(()=> {
    refetch()
  }, [data, refetch])


  const deleteApptHandler = (appointment, normalUser) => {
    Reoverlay.showModal(ConfirmationModal, {
      confirmText: "Would you like to mark this appointment completed?",
      onConfirm: async () => {
        await deleteAppointment({
          variables: {
            appointmentId: appointment,
            normalUserId: normalUser,
            serviceUserId: loggedInUserId
          },
        });

       toast.success("Appointment successfully deleted")
       refetch()
       return Reoverlay.hideModal()
      }
    })
  }

  const userAppointments = data?.serviceUser?.appointments.map((appt, i) => (
    <div key={`appointment ${i}`} className="py-8 md:py-16 flex justify-center">
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
          <button
            onClick={()=> deleteApptHandler(appt._id, appt.normalUser._id)}
            className="inline-flex items-center justify-center w-5 h-5 mr-2 text-pink-100 transition delay-50 ease-in-out bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
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
        <div className="flex flex-col p-4 w-96">
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {moment.unix(appt.timeSlot.timeSlot).format("ddd MM/DD hh:mm A")}
          </h5>
          <span className="dark:text-gray-200">Appointment with:</span>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {appt.normalUser.firstName} {appt.normalUser.lastName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-200">
            {appt.serviceType.serviceName}
          </p>
        </div>
      </div>
    </div>
  ));

  const length = userAppointments?.length;
  return <div>{length !== 0 ? userAppointments : <NoAppointmentCard />}</div>;
}
