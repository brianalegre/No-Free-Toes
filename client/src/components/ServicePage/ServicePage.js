import React from "react";
import TableRow from "./subcomponents/TableRow"
import avatar from "../../images/man.png";

export default function ServicePage() {
  return (
    <>

      {/* AVATAR + NAME */}

      <div className="h-screen w-full flex justify-center items-center bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div className="py-8">
            <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl rounded-bl-none rounded-br-none shadow-md space-y-2">
              <img
                className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
                src={avatar}
                alt="Woman's Face"
              />
              <div className="text-center space-y-3 flex flex-col">
                <p className="text-lg text-black font-semibold">Brian Alegre</p>

              </div>
            </div>

            <div className="bg-white">

              {/* TABS */}
              <ul className="py-5 flex flex-wrap justify-around text-md font-medium text-center text-gray-500 dark:text-gray-400 border-b border-slate-50 shadow rounded-lg rounded-bl-none rounded-br-none">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-3 px-4 text-blue-500 rounded-lg active"
                    aria-current="page"
                  >
                    About Provider
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Reviews
                  </a>
                </li>
              </ul>

              {/* TABLE COMPONENT */}

              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden rounded-tl-none rounded-tr-none">
                  <table className="min-w-full leading-normal">

                    <thead>
                      <tr>
                      <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="pl-1">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Service Type
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="pl-1">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Price
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="pl-1">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Duration
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="pl-1">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Availability
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">      
                            <div className="pl-1">
                            </div>
                        </td>
                      </tr>
                    </thead>

                    <tbody>
                      {/* TABLE ROW COMPONENT */}
                      <TableRow />
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
