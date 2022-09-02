// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { QUERY_SERVICEUSER } from "../../../utils/queries";
// import { DELETE_TIMESLOT } from "../../../utils/mutations";
// import { useQuery, useMutation } from "@apollo/client";
// import { Reoverlay } from "reoverlay";
// import { TiDelete } from "react-icons/ti";
// import { toast } from "react-hot-toast";
// import TimeSlotModal from "../../modals/TimeSlotModal";
// import ConfirmationModal from "../../modals/ConfirmationModal";
// import moment from "moment";

// export default function TimeSlotSettings({serviceUser, refetch}) {
//   const { loggedInUserId } = useParams();
//   const { data, loading, error } = useQuery(QUERY_SERVICEUSER, {
//     variables: { serviceUserId: loggedInUserId },
//   });
//   const [removeTimeSlot] = useMutation(DELETE_TIMESLOT);
//   const { timeSlots } = serviceUser;
  
//   const addTimeSlotHandler = () => {
//     Reoverlay.showModal(TimeSlotModal, {
//       loggedInUserId: loggedInUserId,
//       refetch: refetch,
//     });
//   };

//   const removeTimeSlotHandler = (timeSlot) => {
//     Reoverlay.showModal(ConfirmationModal, {
//       confirmText: "Would you like to remove this timeslot?",
//       onConfirm: async () => {
//         try {
//           await removeTimeSlot({
//             variables: {
//               serviceUserId: loggedInUserId,
//               timeSlotId: timeSlot,
//             },
//           });
//           refetch();
//           toast.success("Timeslot successfully deleted");
//           return Reoverlay.hideModal();
//         } catch (error) {
//           refetch();
//           console.log(error);
//           return toast.error("Something went wrong. Please try again.");
//         }
//       },
//     });
//   };

//   const mappedTimeSlots = timeSlots
//     ?.sort((a, b) => a.timeSlot - b.timeSlot)
//     .map((timeSlotState, i) => (
//       <button
//         className="relative cursor-default text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
//         value={timeSlotState._id}
//         name="timeSlotId"
//         data-id={timeSlotState._id}
//         key={timeSlotState._id}
//       >
//         {moment.unix(timeSlotState.timeSlot).format("ddd M/D hh:mm A")}
//         <div
//           onClick={() => removeTimeSlotHandler(timeSlotState._id)}
//           className="absolute right-0.5 top-0.5 transition hover:text-red-500 ease-in-out duration-300"
//         >
//           <TiDelete />
//         </div>
//       </button>
//     ));

//   return (
//     <div>
//       <div className="flex justify-center pt-20 md:pt-24">
//         <button
//           onClick={addTimeSlotHandler}
//           className="inline-flex px-5 py-3 justify-center text-gray-100 bg-green-700 hover:bg-green-800 hover:text-white transition ease-in-out duration-200 rounded-lg ml-4 mb-3"
//         >
//           <svg
//             aria-hidden="true"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="flex-shrink-0 h-6 w-6 -ml-1 mr-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             />
//           </svg>
//           Add A New Timeslot
//         </button>
//       </div>
//       <div className="py-32 md:py-64 w-full h-full">
//         <div className="pl-10 text-center md:text-2xl">
//           <span>Current Timeslots:</span>
//         </div>
//         <div className="pl-10 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {mappedTimeSlots}
//         </div>
//       </div>
//     </div>
//   );
// }
