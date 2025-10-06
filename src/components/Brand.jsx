// components/Brand.jsx
import React from 'react';
import Logo from '/assets/rafRoundel.svg';

export default function Brand() {
  return (
    <div className="flex items-center whitespace-nowrap">
      <img
        src={Logo}
        alt="Modern Millworks Logo"
        className="h-16 w-15  m-1 shrink-0"
      />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-[Montserrat]">
        Modern Millworks
      </h1>
    </div>
  );
}
