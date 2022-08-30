import React, { useState, useEffect } from "react";
import TimeSlotCreator from "../../TimeSlotCreator";
import { useParams } from "react-router-dom";
import { QUERY_SERVICEUSER_TIMESLOTS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import moment from 'moment'

export default function TimeSlotSettings() {
  const [userData, setUserData] = useState({});
  const { loggedInUserId } = useParams();
  const { data, loading, error, refetch } = useQuery(
    QUERY_SERVICEUSER_TIMESLOTS,
    {
      variables: { serviceUserId: loggedInUserId },
    }
  );

  useEffect(() => {
      if (data) {
          setUserData(data);
        }
    }, [data]);

    console.log(data)
    const mappedTimeSlots = data?.serviceUser?.timeSlots?.map((slot) => (
        <div>
            
            <span>{moment.unix(slot.timeSlot).format('llll')}</span>
        
        </div>
    ))

  return (
    <div>
      {/* <TimeSlotCreator loggedInUserId={loggedInUserId} /> */}
      {mappedTimeSlots}
    </div>
  );
}
