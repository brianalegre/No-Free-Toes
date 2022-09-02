// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_TIMESLOT } from "../../../utils/mutations";
// import {useParams} from 'react-router-dom'
// import toast from "react-hot-toast";
// import DateMomentUtils from "@date-io/moment";
// import {
//   KeyboardDatePicker,
//   KeyboardTimePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
// import moment from "moment";

// export default function TimeSlot({loggedInUserId, refetch}) {
//   // Set default date to the next day @ 8 AM
//   const defaultTimeSlot = moment().add(1, "days").hours(8).startOf("hour");
//   const [timeSlotInput, setTimeSlotInput] = useState(defaultTimeSlot);
//   const [addTimeSlot] = useMutation(ADD_TIMESLOT);

//   return (
//     <div>
//       <div className="flex py-24 justify-center items-center align-middle">
//         <div className="flex flex-col justify-center">
//           <span className="pb-8 md:text-2xl text-xl">Create A Timeslot:</span>
//           <div>
//             <MuiPickersUtilsProvider utils={DateMomentUtils}>
//               <KeyboardDatePicker
//                 value={timeSlotInput}
//                 onChange={setTimeSlotInput}
//                 disablePast={true}
//               />
//               <KeyboardTimePicker
//                 value={timeSlotInput}
//                 onChange={setTimeSlotInput}
//                 openTo={"hours"}
//                 // caps the clock to only increment by the hour
//                 minutesStep={0}
//                 views={["hours", "minutes"]}
//               />
//             </MuiPickersUtilsProvider>
//             <div className="flex justify-center md:pl-3 md:inline-block pt-5 md:pt-0">
//               <button
//                 // async/await to utilize try/catch block for error handling
//                 onClick={async () => {
//                   try {
//                     await addTimeSlot({
//                       variables: {
//                         // using moment to parse into unix timecode and then converting the unix number to a string to match our model
//                         timeSlot: moment(timeSlotInput._d).unix().toString(),
//                         serviceUserId: loggedInUserId,
//                       },
//                     });
//                     // refetch to re-render data if it changes + toast to provide visual feedback for a successfully/unsuccessfully request
//                     toast.success("Timeslot successfully added!");
//                     refetch()
//                     // resetting the state to our default value
//                     setTimeSlotInput(defaultTimeSlot);
//                   } catch (err) {
//                     toast.error(
//                       "Looks like you've got an existing time slot for this time already. Why not try another time?"
//                     );
//                   }
//                 }}
//                 className="inline-flex items-center justify-center w-20 md:w-8 h-8 mr-2 text-white transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-gray-700"
//               >
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
//                   <path
//                     d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                     clip-rule="evenodd"
//                     fill-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
