import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn, zoomIn } from "../utils/motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Brand from "../components/Brand";
import LogoTicker from "../components/LogoTicker";


import kitchen1 from '/assets/Kitchens/kitchen1.JPG';
import shelf from '/assets/Walls/customShelf.JPG';
import bath1 from '/assets/BedandBath/bath1.jpeg';
import entertainment from '/assets/Entertainment/Entertainment.jpeg';

const galleryImages = [
  { id: 1, src: kitchen1, alt: 'Modern kitchen installation', title: 'Contemporary Kitchen' },
  { id: 2, src: shelf, alt: 'Custom built-in shelving', title: 'Wall Systems' },
  { id: 3, src: bath1, alt: 'Luxury bathroom vanity', title: 'Bathroom Cabinetry' },
  { id: 4, src: entertainment, alt: 'Custom entertainment center', title: 'Media Solutions' }
];
// Sample gallery images
// const galleryImages = [
//   {
//     id: 1,
//     src: "./src/assets/Kitchens/kitchen1.jpg",
//     alt: "Modern kitchen installation",
//     title: "Contemporary Kitchen"
//   },
//   {
//     id: 2,
//     src: "./src/assets/Walls/customShelf.jpg",
//     alt: "Custom built-in shelving",
//     title: "Wall Systems"
//   },
//   {
//     id: 3,
//     src: "./src/assets/BedandBath/bath1.jpeg",
//     alt: "Luxury bathroom vanity",
//     title: "Bathroom Cabinetry"
//   },
//   {
//     id: 4,
//     src: "./src/assets/Entertainment/Entertainment.jpeg",
//     alt: "Custom entertainment center",
//     title: "Media Solutions"
//   }
// ];

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    // Set up gallery rotation
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="about-hero"
        className="relative min-h-screen w-full overflow-hidden"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 -z-10 grid-background">
          <style jsx>{`
            .grid-background {
              background-image: 
                linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
              background-size: 40px 40px;
              height: 100%;
            }
            
            @media (max-width: 768px) {
              .grid-background {
                background-size: 20px 20px;
              }
            }
            
            .grid-background::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0.7) 80%, white 100%);
              pointer-events: none;
            }
          `}</style>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/30 to-transparent" />

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-20 font-[Montserrat]">
          <NavBar />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 min-h-screen flex items-center">
          {/* Mobile-first responsive layout */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            
            {/* Gallery Section */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl"
              >
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-medium">{image.title}</h3>
                    </div>
                  </div>
                ))}
                
                {/* Gallery Navigation Dots */}
                <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 flex justify-center space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left font-[Montserrat]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-none lg:max-w-lg mx-auto lg:mx-0"
              >
                {/* Brand Component */}
                <div className="mb-6 sm:mb-8 lg:mb-10">
                  <Brand />
                </div>
                
                {/* Description Text */}
                <div className="space-y-4 sm:space-y-6 text-gray-700 mb-6 sm:mb-8 lg:mb-10">
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    With decades of specialized experience in European cabinetry
                    installation, Modern Millworks brings unparalleled expertise
                    to every project.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                    Our meticulous attention to detail and commitment to perfection
                    sets us apart in the world of custom millwork.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/projects"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 text-white font-medium text-sm sm:text-base rounded-lg hover:bg-blue-800 transition shadow-lg text-center"
                  >
                    View Our Work
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-900 text-blue-900 font-medium text-sm sm:text-base rounded-lg hover:bg-blue-50 transition shadow-lg text-center"
                  >
                    Get In Touch
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Logo Ticker - Hidden on mobile if needed */}
        <div className="hidden sm:block">
          <LogoTicker />
        </div>
        
        {/* Mobile Logo Ticker - Optional smaller version */}
        <div className="block sm:hidden">
          <LogoTicker />
        </div>
      </section>

      <Footer />
    </>
  );
}