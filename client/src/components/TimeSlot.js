import React, { useState } from "react";
import DateMomentUtils from "@date-io/moment";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from 'moment'

export default function TimeSlot() {
  const [currentDate, setCurrentData] = useState(new Date());
  return (
    <div>
      
      <div className="h-96 py-36 px-36">
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DatePicker value={currentDate} onChange={setCurrentData} />
          <TimePicker value={currentDate} onChange={setCurrentData} />
          {/* <DateTimePicker value={currentDate} onChange={setCurrentData} /> */}
        </MuiPickersUtilsProvider>
      </div>
      
      {console.log(moment(currentDate._d).unix())}
    </div>
  );
}
