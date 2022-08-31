import React from "react";
import defaultImg from "../../images/man.png"

export default function AppointmentPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-red-400 h-48 mx-4 mt-8 md:h-80 rounded-lg md:mx-12 lg:my-16 lg:mx-36">
        <div className="flex">
        <img src={defaultImg} alt="default" className="h-48 w-48 md:h-80 md:w-80 py-2 px-2 md:pl-2 md:pt-2" />
        <div className="flex flex-col">
        <span className="text-xl md:text-3xl lg:text-4xl text-black pt-8 md:pt-16">Brian Alegre</span>
        <span>Monday, 9/3/22 5:00 PM</span>
        <span>Haircut Trim</span>
        </div>
        </div>
        
      </div>
    </div>
  );
}
