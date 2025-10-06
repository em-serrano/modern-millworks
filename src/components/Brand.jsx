// components/Brand.jsx
import React from 'react';
import Logo from '/assets/rafRoundel.svg';

export default function Brand() {
  return (
    <div className="flex items-center whitespace-nowrap m-5">
      <img
        src={Logo}
        alt="Modern Millworks Logo"
        className="h-16 w-16 sm:h-20 sm:w-20 mr-4 shrink-0"
      />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-[Montserrat]">
        Modern Millworks
      </h1>
    </div>
  );
}
