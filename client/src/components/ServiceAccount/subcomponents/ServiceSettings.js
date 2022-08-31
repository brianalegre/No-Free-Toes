import React, { useState } from "react";
import Modal from 'react-modal';


export default function ServiceSettings({ serviceUser }) {
    const { serviceType } = serviceUser
    console.log(serviceType)
    const { serviceName, serviceDescription, servicePrice } = serviceUser
    console.log(serviceName)

    // MODAL FOR BOOKING
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            border: 'border-none'
        },
    };

    const [modalIsOpen, setmodalIsOpen] = useState(false);

    function openModal() {
        setmodalIsOpen(true);
    }

    function closeModal() {
        setmodalIsOpen(false);

    }


    const services = serviceType?.map((service) => (
        <div key={service.serviceName}>
            <h1>
                {service.serviceName}: {service.serviceDescription}<br></br> ${service.servicePrice}
            </h1>
            <button onClick={openModal}>Edit service</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    ))

    return (
        <div>
            <h1>
                services page
            </h1>
            <div>
                {services}

            </div>
        </div>
    )
}


// export default function ServiceSettings({ serviceUser }) {
//     const { serviceType } = serviceUser
//     console.log(serviceUser)
//     const services = serviceType?.map((service) => (
//         <tr key={service.serviceName}>
//             <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <div className="flex items-center">
//                     <div className="pl-3">
//                         <p className="whitespace-no-wrap">{service.serviceName}</p>
//                     </div>
//                 </div>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <p className="whitespace-no-wrap">
//                     {`$`}
//                     {service.servicePrice}
//                 </p>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <p className="whitespace-no-wrap">{service.serviceDuration} minutes</p>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-700 dark:bg-gray-800">
//                 <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight dark:text-green-100">
//                     <span
//                         aria-hidden="true"
//                         className="absolute inset-0 bg-green-200 opacity-50 rounded-full dark:bg-green-700"
//                     ></span>
//                     <span className="relative">available</span>
//                 </span>
//             </td>
//             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                 <button
//                     type="button"
//                     className="font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                     Book Now
//                     <svg
//                         aria-hidden="true"
//                         className="ml-2 -mr-1 w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill-rule="evenodd"
//                             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                             clip-rule="evenodd"
//                         ></path>
//                     </svg>
//                 </button>
//             </td>
//         </tr>
//     ));

//     return (
//         <section>
//             <table className="min-w-full leading-normal">
//                 <thead>
//                     <tr>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className="whitespace-no-wrap font-semibold">
//                                         Service Type
//                                     </p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className="whitespace-no-wrap font-semibold">Price</p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className="whitespace-no-wrap font-semibold">Duration</p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
//                             <div className="flex items-center">
//                                 <div className="pl-1">
//                                     <p className=" whitespace-no-wrap font-semibold">
//                                         Availability
//                                     </p>
//                                 </div>
//                             </div>
//                         </td>
//                         <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white ">
//                             <div className="pl-1"></div>
//                         </td>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {/* SERVICETYPE ROW SUB COMPONENT TO POPULATE FROM BACKEND */}
//                     {services}
//                 </tbody>
//             </table>
//         </section>
//     );
// } 