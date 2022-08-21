import React, { useState } from "react";

export default function About() {
  return (
    <section>
      <div className="min-w-full leading-normal bg-white">
        <div className="pl-6 py-6 text-black font-bold">
          <p>About Us</p>
        </div>
      </div>
      <div className="min-w-full leading-normal bg-white">
        <div className="px-8 py-6 border border-top-black text-black">
          <p>
            I've been cutting hair for over 8 years now.. I started off cutting
            hair in my backyard for my high-school friends. Today I work with
            clients, both male and female, and am widely considered the most
            fabulous haircutter in Orange County.
          </p>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
          <div className="inline-block min-w-full"></div>
        </div>
      </div>

      <div className="min-w-full leading-normal bg-white">
        <div className="pl-6 py-6 text-black font-bold">
          <p>Location</p>
        </div>
      </div>
      <div className="bg-white px-8 py-6 border border-top-black text-black">
        <p>Somewhere in Santa Ana</p>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
        <div className="inline-block min-w-full"></div>
      </div>
      <div className="min-w-full leading-normal bg-white">
        <div className="pl-6 py-6 text-black font-bold">
          <p>Contact Information</p>
        </div>
      </div>
      <div className="bg-white px-8 py-6 border border-top-black text-black">
        <p>Phone Number: (714)-492-1092</p>
      </div>
      <div className="bg-white px-8 py-6 border border-top-black text-black">
        <p>Email: brian@gmail.com</p>
      </div>
    </section>
  );
}
