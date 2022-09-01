import React, { useState, useEffect } from "react";
import TimeSlotCreator from "../../TimeSlotCreator";
import { useParams } from "react-router-dom";
import { QUERY_SERVICEUSER } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import { Reoverlay } from "reoverlay";
import TimeSlotModal from "../../modals/TimeSlotModal";
import moment from "moment";

export default function TimeSlotSettings() {
  const [userData, setUserData] = useState({});
  const { loggedInUserId } = useParams();
  const { data, loading, error, refetch } = useQuery(QUERY_SERVICEUSER, {
    variables: { serviceUserId: loggedInUserId },
  });

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  const addTimeSlotHandler = () => {
    Reoverlay.showModal(TimeSlotModal, {
      onConfirm: async () => {
        // await deleteReview({
        //   variables: {
        //     serviceCommentId,
        //     normalUser: loggedInUserId,
        //   },
        // });
        console.log("hi");

        // refetch();
        // toast.success("Review successfully deleted!");
        // return Reoverlay.hideModal();
      },
    });
  };

  const mappedTimeSlots = data?.serviceUser?.timeSlots?.map((slot) => (
    <div>
      <span>{moment.unix(slot.timeSlot).format("llll")}</span>
    </div>
  ));

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={addTimeSlotHandler}
          className="inline-flex px-5 py-3 text-white bg-green-700 hover:bg-green-400 hover:text-gray-600 rounded-lg ml-6 mb-3"
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
      {mappedTimeSlots}
    </div>
  );
}
