import React, { useState } from "react";
import DateMomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";

export default function TimeSlot() {
  // Set default date to the next day @ 8 AM
  const defaultTimeSlot = moment().add(1, "days").hours(8).startOf("hour");
  const [timeSlotInput, setTimeSlotInput] = useState(defaultTimeSlot);
  // const [endingTimeSlot, setEndingTimeSlot] = useState(new Date());
  return (
    <div>
      <div className="flex py-36 justify-center items-center align-middle">
        <div className="flex flex-col">
          <span className="pb-8">Create A Time Slot:</span>
          <div>
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
              <KeyboardDatePicker
                value={timeSlotInput}
                onChange={setTimeSlotInput}
                disablePast={true}
              />
              <KeyboardTimePicker
                value={timeSlotInput}
                onChange={setTimeSlotInput}
                maxTime={8}
                openTo={"hours"}
                minutesStep={0}
                views={["hours", "minutes"]}
              />
            </MuiPickersUtilsProvider>
            <div className="pl-3 inline-block">
              <button
                onClick={()=> console.log(moment(timeSlotInput._d).unix())}
                className="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-gray-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
