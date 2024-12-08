import React from "react";
import myself from "../assets/myself.jpg";
import Tilttext from "../components/Tilttext";
import Page1bottom from "../components/Page1bottom";

const Page1 = () => {
  return (
    <div
      id="page1"
      className="h-[95vh] text-white bg-black flex flex-col md:flex-row justify-between items-center mx-10 sm:mx-5 xsm:mx-3 my-10 sm:my-2 xsm:my-3 rounded-md shadow-2xl shadow-gray-500 p-4"
    >
      <img
        className="relative w-full md:w-[50%] sm:w-[60%] xsm:w-[70%] lg:w-[35%] h-[30vh] sm:h-[80%] xsm:h-[60%] md:top-10 sm:top-20 xsm:top-20 lg:top-5 lg:opacity-100 md:opacity-100 sm:opacity-60 xsm:opacity-60 md:h-[80%] lg:pl-10 lg:left-[10%] my-10 md:my-0 rounded-md md:ml-10"
        src={myself}
        alt="Myself"
      />
      <div className="flex flex-col items-center h-auto md:h-[80%] mt-8 md:mt-36 sm:z-10 w-full md:w-[45%] text-center md:text-left px-4">
        <Tilttext />
        <Page1bottom />
      </div>
      <div className="absolute text-black flex justify-center items-center w-[100vw] xsm:w-[80%] h-[10%] bottom-5 xsm:bottom-[-70px] font-mono lg:tracking-[6px] lg:right-32">
        <center>© Designed and developed by VEDANT HUNDARE</center>
      </div>
    </div>
  );
};

export default Page1;
