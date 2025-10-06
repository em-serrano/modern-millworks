import React from 'react';

import logo1 from '/assets/Logos/BandB.jpg';
import logo2 from '/assets/Logos/bulthaup_logo.svg';
import logo3 from '/assets/Logos/Poliform.png';
import logo4 from '/assets/Logos/Boffi-Site-Logo.webp';
import logo5 from '/assets/Logos/Molteni.png';
import logo6 from '/assets/Logos/Rimadesio-Logo.png';
import logo7 from '/assets/Logos/Scavolini-Logo.png';
import logo8 from '/assets/Logos/siematic-logo.jpg';
import logo9 from '/assets/Logos/Porecelanosa.png';

const logos = [
  { src: logo1, alt: 'B&B Italia', href: 'https://www.bebitalia.com/' },
  { src: logo2, alt: 'Bulthaup', href: 'https://www.bulthaup.com/' },
  { src: logo3, alt: 'Poliform', href: 'https://www.poliform.it/' },
  { src: logo4, alt: 'Boffi', href: 'https://www.boffi.com/' },
  { src: logo5, alt: 'Molteni', href: 'https://www.molteni.it/' },
  { src: logo6, alt: 'Rimadesio', href: 'https://www.rimadesio.com/' },
  { src: logo7, alt: 'Scavolini', href: 'https://www.scavolini.com/' },
  { src: logo8, alt: 'Siematic', href: 'https://www.siematic.com/' },
  { src: logo9, alt: 'Porcelanosa', href: 'https://www.porcelanosa.com/' },
];

const LogoTicker = () => {
  const duplicatedLogos = [...logos, ...logos]; // for seamless scroll loop

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade masks for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

      {/* Ticker scroll container */}
      <div
        className="flex animate-scroll w-fit"
        style={{ animation: 'scroll 30s linear infinite' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 sm:mx-8 flex items-center justify-center h-20 w-28 sm:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <a href={logo.href} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Scroll animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
