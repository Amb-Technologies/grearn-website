import React from "react";
import SavingsApp from "../Components/SavingsApp.js";
import JoinCircle from "../Components/JoinCircle.js";
import Halal from "../Components/Halal.js";

/*
---------------------------------------------------------------------
IMAGE IMPORT INSTRUCTIONS:
---------------------------------------------------------------------

1️⃣ Place first banner image at:
    /public/assets/waitlist/top-banner.png

2️⃣ Place second decorative image at:
    /public/assets/waitlist/bottom-accent.png

3️⃣ Update filenames to match your real assets later.
---------------------------------------------------------------------
*/

const WaitlistSections = () => {
  return (
    <div className="waitlist-sections w-full">

      {/* ================= TOP IMAGE RIGHT SIDE =================== */}
      <div className="relative w-full">
        <img
          src="/assets/waitlist/top-banner.jpg"
          alt="Grearn waitlist hero"
          className="hidden md:block absolute right-0 top-6 w-64 opacity-95 rounded-xl shadow-lg"
        />
      </div>

      {/* ================= WAITLIST FORM =================== */}
      <div className="waitlist-info py-20 text-center px-6 md:px-24">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
          Be First To Join Grearn
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Get priority access to Grearn — Nigeria’s agricultural investing platform 
          built to help you grow steady, long-term wealth sustainably.
        </p>


        {/* ===================== FORM ====================== */}
        <form
          action="#"
          method="post"
          className="max-w-lg mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-10 flex flex-col items-center"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-5 focus:ring-2 focus:ring-green-600 focus:outline-none text-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-5 py-4 mb-6 focus:ring-2 focus:ring-green-600 focus:outline-none text-lg"
          />

          <button
            type="submit"
            className="
              w-full bg-green-700 hover:bg-green-800
              text-white text-lg font-semibold
              py-4 rounded-xl shadow-md transition duration-200
            "
          >
            Join Waitlist 🚀
          </button>

          {/* Optional: link styled like Grearn UI */}
          <a
            href="/login"
            className="mt-5 text-green-700 font-semibold hover:text-green-900 underline"
          >
            Already on Grearn? Sign in →
          </a>
        </form>

      </div>


      {/* ================= BOTTOM IMAGE (LEFT SIDE) =================== */}
      <div className="relative w-full flex">
        <img
          src="/assets/waitlist/bottom-accent.png"
          alt="decor art"
          className="hidden md:block w-56 ml-6 mt-4 opacity-95 rounded-xl shadow-md"
        />
      </div>


      {/* ================= LINKED COMPONENTS =================== */}
      <div className="mt-10">
        {/*
        These 3 components automatically render inside the waitlist page:
        
        SavingsApp     → Features section (app preview visuals)
        JoinCircle     → Community show area
        Halal          → Faith-compliant investing info

        Make sure these 3 files exist:

        /src/Components/SavingsApp.js
        /src/Components/JoinCircle.js
        /src/Components/Halal.js
        */}
        <SavingsApp />
        <JoinCircle />
        <Halal />
      </div>

    </div>
  );
};

export default WaitlistSections;
