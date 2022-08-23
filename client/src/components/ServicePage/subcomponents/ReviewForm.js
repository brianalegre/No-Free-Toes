import React from "react";

export default function ReviewForm() {
  return (
    <>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-0"
        placeholder="Leave a comment..."
      ></textarea>
      <div className="-mx-6 sm:-mx-8 px-4 sm:px-6 bg-gray-100">
        <div className="inline-block min-w-full"></div>
        <div className="flex justify-end">
          <button
            type="button"
            className="text-white bg-green-400 hover:bg-green-800 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
