import React, { useState, useEffect } from 'react';

import LogoTicker from '../components/LogoTicker';

import image1 from '/assets/Kitchens/kitchen1.JPG';
import image2 from '/assets/Kitchens/kitchen2.jpg';
import image3 from '/assets/Kitchens/kitchen3.jpg';
import image4 from '/assets/Bespoke/frames.JPG';

const services = [
  {
    title: 'Expert Installation of Luxury European Cabinet Systems',
    description: 'Precision installation of premium European kitchen and cabinet systems from world-renowned Italian and German manufacturers. Our decades of experience ensure flawless installation and seamless integration with your architectural elements, guaranteeing perfect alignment, superior craftsmanship, and exceptional results that showcase the prestigious quality these luxury brands demand.',
    iconPath: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 10h16M10 4v16" />
      </>
    ),
    hoverImage: image1
  },
  {
    title: 'Custom Millwork & Specialty Projects',
    description: 'Bespoke millwork solutions and specialty accents that complement and enhance your luxury European installations. From custom trim work and architectural details to sophisticated built-in features and unique design elements, we create personalized touches that elevate your space with unmatched elegance and seamless integration.',
    iconPath: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </>
    ),
    hoverImage: image2
  }
];

const projectImages = [image1, image2, image3, image4];

const Icon = ({ children }) => (
  <svg className="w-12 h-12 text-blue-700 mb-4 transition-all duration-300 group-hover:text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {children}
  </svg>
);

export default function Services() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderServiceCard = (service, index, isMobile = false) => (
    <div key={index} className="group relative overflow-hidden transition-all duration-500 border border-gray-200 rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img
          src={service.hoverImage}
          alt={`${service.title} showcase`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`flex ${isMobile ? 'items-center mb-4' : 'justify-center mb-6'}`}>
          <Icon>{service.iconPath}</Icon>
          <h3 className="text-2xl font-semibold text-blue-800 group-hover:text-white transition-colors duration-300 ml-2">{service.title}</h3>
        </div>
        <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed text-lg transition-colors duration-300">{service.description}</p>
      </div>
    </div>
  );

  const renderProjectGallery = (isMobile = false) => (
    <div className="group transition-all duration-300 border border-gray-200 rounded-lg p-6 bg-white shadow-lg">
      <div className={`${isMobile ? 'text-center' : 'grid md:grid-cols-3 gap-8 items-center'}`}>
        <div className={isMobile ? '' : 'md:col-span-1'}>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">Recent Projects</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Explore our portfolio of completed luxury installations showcasing the finest European brands and craftsmanship.
          </p>
          <a href="/projects" className="inline-flex items-center text-blue-700 font-medium text-lg group-hover:text-blue-500">
            View All Projects
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className={`${isMobile ? '' : 'md:col-span-2'}`}>
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
            <img
              src={projectImages[currentImageIndex]}
              alt={`Project ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        .grid-background {
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.20) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.20) 1px, transparent 1px);
          background-size: 40px 40px;
          position: relative;
        }
        
        .grid-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.8) 80%, white 100%);
          pointer-events: none;
        }
        
        .grid-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, transparent 15%, transparent 85%, rgba(255, 255, 255, 0.8) 100%),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, transparent 15%, transparent 85%, rgba(255, 255, 255, 0.8) 100%);
          pointer-events: none;
        }
      `}</style>
      
      <section id="services" className="relative w-full py-16 md:py-8 px-4 sm:px-6 md:px-12 bg-white grid-background font-[Montserrat]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">What We Offer:</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              At Modern Millworks, we specialize in the expert installation of high-end European cabinetry and furniture systems, bringing decades of experience to ensure flawless execution.
            </p>
            <h6 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mt-10 mb-0">Brands We Specialize In:</h6>

            <LogoTicker />
          </div>

          {/* Mobile View */}
          <div className="grid gap-8 md:hidden">
            {services.map((service, i) => renderServiceCard(service, i, true))}
            {renderProjectGallery(true)}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-2 gap-8 xl:gap-12 mb-8">
              {services.map((service, i) => renderServiceCard(service, i))}
            </div>
            {renderProjectGallery()}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gray-50 rounded-xl p-8 md:p-12 shadow-inner">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Let's Collaborate and Transform Your Space
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Whether you're installing new luxury European cabinetry or enhancing your space, our decades of experience ensure exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="/contact" className="px-6 py-3 md:px-8 md:py-4 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition shadow-lg">
                Contact Us
              </a>
              <a href="/projects" className="px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-blue-900 text-blue-900 font-medium rounded-md hover:bg-blue-50 transition shadow-lg">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}