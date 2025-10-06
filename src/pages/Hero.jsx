import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Services from './Services';
import Brand from '../components/Brand';

// Images
import image1 from '../assets/Kitchens/kitchen4.jpeg';
import image2 from '../assets/Closets/ClosetSystem1.jpeg';
import image3 from '../assets/Walls/OfficeSystem.jpeg';
import image4 from '../assets/Entertainment/LivingRoom.jpeg';


export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const hero = document.querySelector('#hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setScrollProgress(Math.min(1, -rect.top / (window.innerHeight * 0.5)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden font-[Montserrat]"
      >
        {/* Background Slideshow */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Soft Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/30 to-transparent" />

        {/* Bottom White Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent mix-blend-overlay"
          style={{ opacity: 1 - scrollProgress * 1.2 }}
        />

        {/* NavBar */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <NavBar />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div
              className={`transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
              }`}
            >
              {/* <div className="flex items-center justify-center mb-4 space-x-4">
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-all duration-300"
                />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl">
                  Modern Millworks
                </h1>
              </div> */}

<div className={`transform transition-all duration-1000 ${
  isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
}`}>
  <div className="flex justify-center mb-4">
    <Brand />
  </div>
</div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
              }`}
            >
              <p className="text-xl md:text-2xl text-white/90 drop-shadow-md mb-8">
                European. Precision. Elegance. Defined.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
              }`}
            >
              <a
                href="#services"
                className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>
      <Services />
      <Footer />
    </>
  );
}
