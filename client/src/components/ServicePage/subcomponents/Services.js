import React, { useState } from "react";
import Modal from 'react-modal';
import * as moment from "moment";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../../utils/mutations";


export default function Services({ serviceUser }) {
  const { serviceType } = serviceUser;
  const { timeSlots } = serviceUser;


const [formState, setFormatsterState] = useState({
  normalUserId: '',
  serviceUserId: '',  
  timeSlotId: '',
  serviceTypeId: ''

})
const [addAppointment, { error, data }] = useMutation(ADD_APPOINTMENT);


  // MODAL FOR BOOKING
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
    },
  };

  // let subtitle;
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function openModal() {
    setmodalIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setmodalIsOpen(false);

  }

  const timeSlotStateData = timeSlots?.sort(((a,b) => a.timeSlot - b.timeSlot)).slice(0, 10).map((timeSlotState) => ( 
    <button
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    data-id={timeSlotState._id}
    // >{moment.unix(timeSlotState.timeSlot).format('lll')}</button>
    >
      {moment.unix(timeSlotState.timeSlot).format('ddd MM/DD HH:mm')}
    </button>

  ));

  const services = serviceType?.map((service) => (

    
    <tr key={service.serviceName}>
      <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <div className="flex items-center">
          <div className="pl-3">
            <p className="whitespace-no-wrap">{service.serviceName}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <p className="whitespace-no-wrap">
          {`$`}
          {service.servicePrice}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <p className="whitespace-no-wrap">{service.serviceDuration} minutes</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-700 dark:bg-gray-800">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight dark:text-green-100">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full dark:bg-green-700"
          ></span>
          <span className="relative">available</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        {/* <button
          type="button"
          className="font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book Now
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> */}
        <button onClick={openModal}>Book Now</button>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <div className="m-5 p-5">
            <div className="flex">
              <h2 className="text-center w-full font-semibold" >Pick an available time slot</h2>
              <button onClick={closeModal} className="text-red-500 font-extrabold text-right">X</button>
            </div>
            <div className="w-full grid grid-cols-5 gap-3 pt-5">
              {timeSlotStateData}
            </div>
          </div>
        </Modal>
      </td>
    </tr>
  ));

  return (
    <section>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center">
                <div className="pl-1">
                  <p className="whitespace-no-wrap font-semibold">
                    Service Type
                  </p>
                </div>
              </div>
            </td>
            <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center">
                <div className="pl-1">
                  <p className="whitespace-no-wrap font-semibold">Price</p>
                </div>
              </div>
            </td>
            <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center">
                <div className="pl-1">
                  <p className="whitespace-no-wrap font-semibold">Duration</p>
                </div>
              </div>
            </td>
            <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center">
                <div className="pl-1">
                  <p className=" whitespace-no-wrap font-semibold">
                    Availability
                  </p>
                </div>
              </div>
            </td>
            <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white ">
              <div className="pl-1"></div>
            </td>
          </tr>
        </thead>

        <tbody>
          {/* SERVICETYPE ROW SUB COMPONENT TO POPULATE FROM BACKEND */}
          {services}
        </tbody>
      </table>
    </section>
  );
}


// UNUSED CODE



  // MAP TIME SLOTS TO DISPLAY
  // const availableTimes = timeSlots?.map((times, i) => {
  //   // DESTRUCTURING THE TIMESLOTS OBJECT
  //   const {
  //     timeSlot,
  //   } = times;

  //   // CONVERT TIME SLOTS WITH MOMENTJS
  //   const parsedDate = moment.unix(timeSlot).format("lll")

  //   const today = moment().format("dddd MM/DD");
  //   const todayPlusOne = moment().add(1, 'days').format("dddd MM/DD");
  //   const todayPlusTwo = moment().add(2, 'days').format("dddd MM/DD");
  //   const todayPlusThree = moment().add(3, 'days').format("dddd MM/DD");
  //   const todayPlusFour = moment().add(4, 'days').format("dddd MM/DD");
  //   const todayPlusFive = moment().add(5, 'days').format("dddd MM/DD");
  //   const todayPlusSix = moment().add(6, 'days').format("dddd MM/DD");

  //   // return parsedDate
  //   return (
  //     <>
  //       <tr>
  //         <td>{parsedDate}</td>
  //       </tr>
  //     </>
  //   )
  // }
  // )

    // // const parsedDate = moment.unix(timeSlot).format("lll")

    // // GET TIME SLOTS
    // // FILTER THE TIME SLOTS BY DATE
    // // IF TIME SLOT DATE MATCHS TABLE HEADER DATE
    // // THEN POPULATE
    // const filteredTimeSlots = timeSlots.filter(times => {
    //   if (times.timeSlot == today) {
    //     return 'true'
    //   } else {
    //     return 'false'
    //   }

    // }
    // )

    // // if parseData.date === today {
    // //   return <tr>parsed</tr>
    // // }

    // // 

    
  // const filteredTimeSlots = timeSlots.filter((obj) => {
  //   // if (moment.unix(obj.timeSlot) == moment.unix)
  //   let todayUnix = moment().unix();
  //   if (moment.unix(obj.timeSlot).isSame(todayUnix,)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // )

  // FILTER TIMESLOTS BY TODAY
  // const filteredTimeSlots = timeSlots.filter((obj) => {
  //   let todayUnix = moment().unix();
  //   if (moment.unix(obj.timeSlot).isSame(todayUnix, 'day')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // )

  // let now = moment().unix('day');

  // function checkingTimeSlots() {
  //   timeSlots.forEach((obj) => {
  //     const now = moment().unix();

  //     // if (moment(obj.timeSlot).isSame(now, 'year')) {
  //     var result = moment().isSame(obj.timeSlot, 'year')

  //     // if (moment('2010-10-20').isSame('2010-12-31', 'year')) {

  //     //   console.log('true');
  //     // } else {
  //     //   console.log('false');
  //     // }
  //   }
  //   )
  // }

  // checkingTimeSlots();

  


  // MAP TIME SLOTS TO DISPLAY
  // const availableTimes = timeSlots?.map((times, i) => {
  //   // DESTRUCTURING THE TIMESLOTS OBJECT
  //   const {
  //     timeSlot,
  //   } = times;

  //   // CONVERT TIME SLOTS WITH MOMENTJS
  //   const parsedDate = moment.unix(timeSlot).format("lll")

  //   // return parsedDate
  //   return (
  //     <>
  //       <div>
  //         <p>{parsedDate}</p>
  //       </div>
  //     </>
  //   )
  // }
  // )


//   // THIS WORKS !@#!#
// // Convert timeSlotState with moment
// var timeSlotArray = [];
// const convertTimeSlotState = timeSlotState => {
//   timeSlotState.forEach(element => {
//     // moment.unix(element).format('lll')
//     timeSlotArray.push(moment.unix(element.timeSlot).format('lll'));
//     console.log('i am timeSlotArray', timeSlotArray);
//   });

// //<td>{moment.unix(timeSlot.timeSlot).format('lll')}</td>

// timeSlotIndex()
// }


// function timeSlotIndex() {
//   console.log('timeSLotIndex called')
//   console.log('timeSlotArray', timeSlotArray)
//   const today = moment().format('ddd MM/DD');
//   timeSlotArray.findIndex(element => {
//   if (moment(element).format('ddd MM/DD') === today) {
//     return console.log('i am today', element);
//   } else {
//     return console.log('i am NOT today', element);
//   }
// });
// }
// convertTimeSlotState(timeSlotState);
// // WORKS TO FIND TODAY


  // GET HEADER FUNCTION
  // DISPLAY TODAYS DATE, AND THE NEXT 6 DAYS
  // ONTO THE HEADER OF THE TABLE
  // const getHeader = () => {

  // const today = moment().format("ddd MM/DD");
  // const todayPlusOne = moment().add(1, 'days').format("ddd MM/DD");
  // const todayPlusTwo = moment().add(2, 'days').format("ddd MM/DD");
  // const todayPlusThree = moment().add(3, 'days').format("ddd MM/DD");
  // const todayPlusFour = moment().add(4, 'days').format("ddd MM/DD");
  // const todayPlusFive = moment().add(5, 'days').format("dddd MM/DD");
  // const todayPlusSix = moment().add(6, 'days').format("dddd MM/DD");

  //   return (
  //     <>
  //       <tr>
  //         <th>{today}</th>
  //         <th>{todayPlusOne}</th>
  //         <th>{todayPlusTwo}</th>
  //         <th>{todayPlusThree}</th>
  //         <th>{todayPlusFour}</th>
  //         <th>{todayPlusFive}</th>
  //         <th>{todayPlusSix}</th>
  //       </tr>
  //     </>
  //   )
  // }

  // // DISPLAY THE TIME SLOTS FOR EACH DAY
  // // ONTO THE TABLE
  // const getTimeSlots = () => {
  //   // const parsedDate = moment.unix(timeSlot).format("lll")
  //   return (
  //     <>
  //       {timeSlots.map((timeSlot, i) => {
  //         return (
  //           <tr key={i}>
  //             <td>{moment.unix(timeSlot.timeSlot).format('lll')}</td>
  //             {/* <td>{moment.unix(timeSlot.timeSlot).format('lll')}</td>
  //             <td>{moment.unix(timeSlot.timeSlot).format('lll')}</td>
  //             <td>{moment.unix(timeSlot.timeSlot).format('lll')}</td>
  //             <td>{moment.unix(timeSlot.timeSlot).format('lll')}</td>
  //             <td>{moment.unix(timeSlot.timeSlot).format('lll')}</td>
  //             <td>{moment.unix(timeSlot.timeSlot).format('lll')}</td> */}
  //           </tr>
  //         )
  //       }
  //       )}
  //     </>
  //   )
  // }


  // FOR LOOP ON TIMESLOTS
  // for (let i = 0; i < 28; i++) {
  //   console.log('dah', timeSlots[i].timeSlot);
  // }


  // const timeSlotStateData = timeSlots?.map((timeSlotState) => ( 
  //   <button
  //   data-id={timeSlotState._id}
  //   // >{moment.unix(timeSlotState.timeSlot).format('lll')}</button>
  //   >
  //     {moment.unix(timeSlotState.timeSlot).format('ddd MM/DD hh:00 A')}
  //   </button>

  // ));

//   const forTimeSlots = (params) => {
// // function forTimeSlots(params) {
//   for (let index = 0; index < 9; index++) {
//     // const element = array[index];
//     // console.log(params)
//         <button
//     data-id={params[index]._id}
//     // >{moment.unix(timeSlotState.timeSlot).format('lll')}</button>
//     >
//       {moment.unix(params[index].timeSlot).format('ddd MM/DD hh:00 A')}
//     </button> 
//   }
// }





