import React, { useEffect, useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_NORMALUSER } from "../../../utils/queries";
import { DELETE_APPOINTMENT } from "../../../utils/mutations";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { Reoverlay } from "reoverlay";
import { toast } from "react-hot-toast";
import moment from "moment";
// import NoAppointmentCard from "./NoAppointmentCard";
import RedirectModal from "../../modals/RedirectModal";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineUser,
} from "react-icons/ai";

export default function AppointmentCards() {
  const navigate = useNavigate();
  const modalRef = useRef(true);

  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT);
  const { loggedInUserId } = useParams();
  const { data, loading, error, refetch } = useQuery(QUERY_SINGLE_NORMALUSER, {
    variables: { normalUserId: loggedInUserId },
  });

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  const completedApptHandler = (appointment, serviceUser) => {
    Reoverlay.showModal(ConfirmationModal, {
      confirmText: "Would you like to mark this appointment completed?",
      onConfirm: async () => {
        await deleteAppointment({
          variables: {
            appointmentId: appointment,
            normalUserId: loggedInUserId,
            serviceUserId: serviceUser,
          },
        });

        refetch();
        toast.success("Appointment successfully marked completed!");
        Reoverlay.hideModal();

        Reoverlay.showModal(RedirectModal, {
          redirectText: "Don't forget to leave a review!",
          onConfirm: () => {
            Reoverlay.hideModal();
            navigate(`/service/${serviceUser}`);
          },
        });
      },
    });
  };

  const cancelApptHandler = (appointment, serviceUser) => {
    Reoverlay.showModal(ConfirmationModal, {
      confirmText: "Are you sure you would like to cancel this appointment?",
      onConfirm: async () => {
        await deleteAppointment({
          variables: {
            appointmentId: appointment,
            normalUserId: loggedInUserId,
            serviceUserId: serviceUser,
          },
        });

        refetch();
        toast.success("Appointment successfully cancelled.");
        Reoverlay.hideModal();
      },
    });
  };

  const userAppointments = data?.normalUser?.appointments.map((appt, i) => (
    <div key={`appointment ${i}`} className="py-8 md:py-16 flex justify-center">
      <div className="relative flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl dark:border-gray-700 dark:bg-gray-800">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2 md:p-4"
          src={appt.serviceUser.photo}
          alt="default"
        />
        <div className="flex flex-col p-4 w-96">
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {moment.unix(appt.timeSlot.timeSlot).format("ddd MM/DD hh:mm A")}
          </h5>
          <span className="dark:text-gray-200">Appointment with:</span>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {appt.serviceUser.firstName} {appt.serviceUser.lastName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-200">
            {appt.serviceType.serviceName}
          </p>
        </div>
        <div className="inline-flex gap-1.5 absolute right-2 bottom-2">
          <AiOutlineCheckCircle
            className="w-6 h-6 cursor-pointer dark:text-green-400 hover:text-green-600 transition ease-in-out duration-300"
            onClick={() => completedApptHandler(appt._id, appt.serviceUser._id)}
          />
          <AiOutlineCloseCircle
            className="w-6 h-6 cursor-pointer dark:text-red-400 hover:text-red-600 transition ease-in-out duration-300"
            onClick={() => cancelApptHandler(appt._id, appt.serviceUser._id)}
          />
          <AiOutlineUser
            className="w-6 h-6 cursor-pointer dark:text-gray-200 hover:text-gray-400 transition ease-in-out duration-300"
            onClick={() => navigate(`/service/${appt.serviceUser._id}`)}
          />
        </div>
      </div>
    </div>
  ));

  const length = userAppointments?.length;
  return (
    <div>
      {length !== 0 ? (
        userAppointments
      ) : (
        <div className="flex justify-center bg-gray-50 content-center py-24 mx-8 my-8 md:mx-12 md:my-12 rounded-lg">
          <span className="text-xl">No appointments available.</span>
        </div>
      )}
    </div>
  );
}
