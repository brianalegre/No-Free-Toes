import React, { useState } from "react";
import Modal from 'react-modal';

export default function Services({ serviceUser }) {
  const { serviceType } = serviceUser;

  console.log(serviceType);

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
