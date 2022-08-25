import React, { useState } from "react";

const dynamicStar = (
  <svg
    aria-hidden="true"
    className="w-4"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

export default function DynamicStar({ starRef }) {
  // set the initial state of 5 items to 'null' value
  // 5 nulls are just place holders to specify that we have 5 items in this hook
  const [clickedStars, setClickedStars] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);

  // create a function that sets the stars state to 'clickedStars' on click
  // for loop to set the state of the clicked star and all indexes below it to true
  // and everything else above the clicked index to false
  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clickedStars];
    for (let i = 0; i < 5; i++) {
      i <= index ? (clickStates[i] = true) : (clickStates[i] = false);
    }
    setClickedStars(clickStates);
  };

  return (
    <div className="flex">
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleStarClick(e, 0);
          starRef.current = 1;
        }}
        className={
          clickedStars[0]
            ? "flex text-yellow-400"
            : "flex text-gray-400 transition ease-in-out hover:text-yellow-400"
        }
      >
        {dynamicStar}
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleStarClick(e, 1);
            starRef.current = 2;
          }}
          className={
            clickedStars[1]
              ? "flex text-yellow-400"
              : "flex text-gray-400 transition ease-in-out hover:text-yellow-400"
          }
        >
          {dynamicStar}
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleStarClick(e, 2);
              starRef.current = 3;
            }}
            className={
              clickedStars[2]
                ? "flex text-yellow-400"
                : "flex text-gray-400 transition ease-in-out hover:text-yellow-400"
            }
          >
            {dynamicStar}
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleStarClick(e, 3);
                starRef.current = 4;
              }}
              className={
                clickedStars[3]
                  ? "flex text-yellow-400"
                  : "flex text-gray-400 transition ease-in-out hover:text-yellow-400"
              }
            >
              {dynamicStar}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleStarClick(e, 4);
                  starRef.current = 5;
                }}
                className={
                  clickedStars[4]
                    ? "flex text-yellow-400"
                    : "flex text-gray-400 transition ease-in-out hover:text-yellow-400"
                }
              >
                {dynamicStar}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
