import React, { useState, useEffect } from "react";
// import TimeSlotCreator from "./TimeSlotCreator";
import { useParams } from "react-router-dom";
import { QUERY_SERVICEUSER } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import { Reoverlay } from "reoverlay";
import TimeSlotModal from "../../modals/TimeSlotModal";
import moment from "moment";

export default function TimeSlotSettings(serviceUser) {
  const [userData, setUserData] = useState({});
  const { loggedInUserId } = useParams();
  const { data, loading, error, refetch } = useQuery(QUERY_SERVICEUSER, {
    variables: { serviceUserId: loggedInUserId },
    refetch: { variables: { serviceUserId: loggedInUserId } }
  });
  const { timeSlots } = serviceUser.serviceUser;
  // console.log('i am serviceUser', serviceUser.serviceUser)


  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  const addTimeSlotHandler = () => {
    Reoverlay.showModal(TimeSlotModal, {
      loggedInUserId: loggedInUserId,
      refetch: refetch
    });
  };

  // const mappedTimeSlots = data?.serviceUser?.timeSlots?.map((slot) => (
  //   <div>
  //     <span>{moment.unix(slot.timeSlot).format("llll")}</span>
  //   </div>
  // ));

  // const { timeSlots } = data.serviceUser || {};
  // console.log('i am timeslots 1', timeSlots)

  // const mappedTimeSlots = availableTimeslots?.sort((a, b) => a.timeSlot - b.timeSlot).map((slot) => (
  //   <div>
  //     <span>{moment.unix(slot.timeSlot).format("llll")}</span>
  //   </div>
  // ));

  // const mappedTimeSlots = availableTimeslots?.sort((a, b) => a.timeSlot - b.timeSlot)
  //   .map((timeSlotState) => (
  //     <button
  //     >
  //       {moment.unix(timeSlotState.timeSlot).format("lll")}
  //     </button>
  //   ));

  // const mappedTimeSlotsSort = timeSlots?.sort((a, b) => a.timeSlot - b.timeSlot)

  const mappedTimeSlots = timeSlots?.sort((a, b) => a.timeSlot - b.timeSlot).map((timeSlotState) => (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      value={timeSlotState._id}
      name="timeSlotId"
      data-id={timeSlotState._id}
    // >{moment.unix(timeSlotState.timeSlot).format('lll')}</button>
    >
      {moment.unix(timeSlotState.timeSlot).format("ddd M/D hh:mm A")}
    </button>
  ));

  return (
    <div>
      <div className="flex justify-center pt-20 md:pt-0">
        <button
          onClick={addTimeSlotHandler}
          className="inline-flex px-5 py-3 justify-center text-gray-100 bg-green-700 hover:bg-green-800 hover:text-white transition ease-in-out duration-200 rounded-lg ml-4 mb-3"
        >
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="flex-shrink-0 h-6 w-6 -ml-1 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add A New Timeslot
        </button>
      </div>
      <div className="py-32 md:py-64 w-full h-full">
        <div className="pl-10 text-center md:text-2xl">
          <span>Current Time Slots:</span>
        </div >
        <div className="pl-10 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {mappedTimeSlots}
        </div>
      </div>
    </div>
  );
}
