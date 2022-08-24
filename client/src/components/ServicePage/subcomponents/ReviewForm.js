// import React from "react";
import React, {useRef} from "react";
import DynamicStar from "./DynamicStar";

export default function ReviewForm() {
  const starRef = useRef();

  return (
    <>
      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-7 bg-gray-100">
        <div className="flex flex-col min-w-full pl-2">
          <span className="text-sm sm:text-base">
            Service Provider Rating:{" "}
          </span>
          <DynamicStar starRef={starRef}/>
          {/* <DynamicStar /> */}
        </div>
      </div>

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 sm:-mb-3 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>

      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm sm:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        placeholder="Leave a review..."
      />

      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 bg-gray-100">
        <div className="inline-block min-w-full"></div>

        <div className="flex justify-end">
          <button
            onClick={()=> console.log("YOUR REF VALUE", starRef.current)}
            type="button"
            className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2"
          >
            Submit Review
          </button>
        </div>
      </div>
    </>
  );
}
