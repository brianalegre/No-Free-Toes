import React from "react";
import ServiceUserProfile from "./subcomponents/ServiceUserProfile";
import Tabs from "./subcomponents/Tabs"
import Services from "./subcomponents/Services";

export default function ServicePage() {
  return (
    <>
      {/* AVATAR + NAME */}

      <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div className="py-8">
            <ServiceUserProfile />

            <div className="bg-white">
              {/* TABS */}
              <Tabs />

              {/* TABLE COMPONENT */}
              <Services />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
