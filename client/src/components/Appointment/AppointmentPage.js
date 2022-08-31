import React from "react";
import AppointmentCards from "./subcomponents/AppointmentCards";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen">
      <div className="py-12 md:py-24 flex justify-center">
        <AppointmentCards />
      </div>
    </div>
  );
}
