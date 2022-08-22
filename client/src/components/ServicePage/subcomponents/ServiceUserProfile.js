import React from "react";

function ServiceUserProfile({serviceUser}) {
  
  const {firstName, lastName, photo} = serviceUser;

  return (
    <>
      <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2">
        <img
          className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
          src={photo}
          alt="default avatar"
        />
        <div className="text-center space-y-3 flex flex-col">
          <p className="text-lg text-black font-semibold">{firstName} {" "} {lastName}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceUserProfile;