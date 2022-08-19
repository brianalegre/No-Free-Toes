import React from "react";
import avatar from "../../../images/man.png";

export default function ServiceUserProfile() {
  return (
    <>
      <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl rounded-bl-none rounded-br-none shadow-md space-y-2">
        <img
          className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
          src={avatar}
          alt="default avatar"
        />
        <div className="text-center space-y-3 flex flex-col">
          <p className="text-lg text-black font-semibold">Brian Alegre</p>
        </div>
      </div>
    </>
  );
}
