import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { ADD_TIMESLOT } from "../../../utils/mutations";
import toast from "react-hot-toast";
import moment from "moment";

export default function TimeSlotCreator({
  loggedInUserId,
  refetch,
  setRenderDatePicker,
}) {
  const defaultTimeSlot = moment().add(1, "days").hours(12).startOf("hour");
  const [timeSlotInput, setTimeSlotInput] = useState(defaultTimeSlot);
  const [addTimeSlot] = useMutation(ADD_TIMESLOT);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="px-8 pt-2 relative">
        <StaticDateTimePicker
          value={timeSlotInput}
          onChange={(newValue) => {
            setTimeSlotInput(newValue);
          }}
          minutesStep={60}
          onClose={() => setRenderDatePicker(false)}
          closeOnSelect={false}
          disablePast={true}
          openTo={"day"}
          renderInput={(params) => <TextField {...params} />}
          onAccept={async () => {
            try {
              await addTimeSlot({
                variables: {
                  // using moment to parse into unix timecode and then converting the unix number to a string to match our model
                  timeSlot: moment(timeSlotInput._d).unix().toString(),
                  serviceUserId: loggedInUserId,
                },
              });
              // refetch to re-render data if it changes + toast to provide visual feedback for a successfully/unsuccessfully request
              toast.success("Timeslot successfully added!");
              refetch();
              // resetting the state to our default value to hide the calender once a timeslot is created
              setTimeSlotInput(defaultTimeSlot);
            } catch (err) {
              toast.error(
                "Looks like you've got an existing time slot for this time already. Why not try another time?"
              );
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
