import React, { useState } from "react";
import DateMomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";

export default function TimeSlot() {
  const [timeSlotInput, setTimeSlotInput] = useState(new Date());
  // const [endingTimeSlot, setEndingTimeSlot] = useState(new Date());
  return (
    <div>
      <div className="h-96 py-36 px-36">
        <div className="flex flex-col">
          <span className="pb-8">Create A TimeSlot:</span>
          <div>
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
              <KeyboardDatePicker
                value={timeSlotInput}
                onChange={setTimeSlotInput}
              />
              <KeyboardTimePicker
                value={timeSlotInput}
                onChange={setTimeSlotInput}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
        {console.log(moment(timeSlotInput._d).unix())}
      </div>
    </div>
  );
}
