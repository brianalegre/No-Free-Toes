import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_TIMESLOTS_BY_SERVICEUSERID } from "../../../src/utils/queries";
import Auth from "../../utils/auth";
import * as moment from "moment";


// TESTING URL 
// USING SERVICEUSER ID - 630c3697b059cd4f14d740a0
// http://localhost:3000/timeslot/630c3697b059cd4f14d740a0

export default function TimeSlot() {
  const { serviceUserId } = useParams();

  const [serviceUser, setServiceUser] = useState("");
  const { loading, error, data } = useQuery(QUERY_TIMESLOTS_BY_SERVICEUSERID, {
    variables: { serviceUserId: serviceUserId },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      setServiceUser(data.serviceUser);
    }
  }, [data]);

  // console.log('I AM DATA', data)
  console.log('I AM TIME SLOTS', serviceUser)

  // SINGLE TIME SLOT
  // console.log('I AM SINGLE TIME SLOT', serviceUserTime[0].timeSlot)

  // const singleTime = serviceUserTime[0].timeSlot

  // Convert singleTime Unix to Date
  // const singleTimeDate = new Date(singleTime * 1000)
  // console.log('I AM SINGLE TIME DATE', singleTimeDate)

  // Convert all serviceUser Unix to Date
  // const serviceUserTimeDate = serviceUser.map((time) => {
  //   return new Date(time.timeSlot * 1000)
  // }
  // )
  // console.log('I AM SERVICE USER TIME DATE', serviceUserTimeDate)

  // PARSE THE UNIX DATA WITH MOMENT JS
  const availableTimes = serviceUser?.map((times, i) => {
    // destructuring the times object
    const {
      _id,
      timeSlot
    } = times;

    const parsedDate = moment({ timeSlot }).format('lll')

    return (
      <>
        <div>
          <p>{parsedDate}</p>
        </div>
      </>

    )
  })

  return (
    <>

      <div>
        <h1> hi </h1>
        {availableTimes}
      </div>


      {/* <div className="m-5 p-5">
        <div className="flex">
          <h2 className="text-center w-full font-semibold" >Pick an available time slot</h2>
        </div>
        <div className="w-full">
          <table className="m-auto p-5">
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>

            </tr>
            <tr>
              <td><button>Time Slot 1</button></td>
              <td><button>Time Slot 1</button></td>
              <td><button>Time Slot 1</button></td>
              <td><button>Time Slot 1</button></td>
              <td><button>Time Slot 1</button></td>

            </tr>
            <tr>
              <td><button>Time Slot 2</button></td>
              <td><button>Time Slot 2</button></td>
              <td><button>Time Slot 2</button></td>
              <td><button>Time Slot 2</button></td>
              <td><button>Time Slot 2</button></td>

            </tr>
            <tr>
              <td><button>Time Slot 3</button></td>
              <td><button>Time Slot 3</button></td>
              <td><button>Time Slot 3</button></td>
              <td><button>Time Slot 3</button></td>
              <td><button>Time Slot 3</button></td>
            </tr>
          </table>
        </div>
      </div> */}
    </>
  );
}

