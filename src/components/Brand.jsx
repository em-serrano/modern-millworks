import React from "react";
import Logo from "/assets/rafRoundel.svg";

export default function Brand() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-4 w-full">
      <img
        src={Logo}
        alt="Modern Millworks Logo"
        className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 shrink-0"
      />
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight font-[Montserrat]">
        Modern Millworks
      </h1>
    </div>
  );
}
