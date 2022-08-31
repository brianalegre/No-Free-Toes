import React, { useEffect } from "react";
import NUAppointmentCards from "./subcomponents/NUAppointmentCards";
import SUAppointmentCards from "./subcomponents/SUAppointmentCards";
import Auth from "../../utils/auth";

export default function AppointmentPage() {
  const userType = Auth.getProfile().data.userType;
  console.log(userType);

  return (
    <main className="flex flex-col min-h-screen">
      {userType === "normalUser" ? (
        <NUAppointmentCards />
      ) : (
        <SUAppointmentCards />
      )}
    </main>
  );
}
