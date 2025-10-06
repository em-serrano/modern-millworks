import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/rafRoundel.svg'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when clicking outside or changing routes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-transparent py-4 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-white">
              Modern Millworks
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" 
              className={`transition-colors ${isActive('/') 
                ? 'text-white font-medium' 
                : 'text-white/80 hover:text-white'}`}>
              Home
            </Link>
            <Link to="/about" 
              className={`transition-colors ${isActive('/about') 
                ? 'text-white font-medium' 
                : 'text-white/80 hover:text-white'}`}>
              About
            </Link>
            <Link to="/projects" 
              className={`transition-colors ${isActive('/projects') 
                ? 'text-white font-medium' 
                : 'text-white/80 hover:text-white'}`}>
              Projects
            </Link>
            <Link to="/contact" 
              className="px-4 py-2 bg-white text-blue-900 rounded-md hover:bg-white/90 transition-colors font-medium">
              Request a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-blue-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} font-montserrat`}>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Link to="/" 
              className={`text-xl transition-colors ${isActive('/') 
                ? 'text-white font-medium' 
                : 'text-white/80'}`}>
              Home
            </Link>
            <Link to="/about" 
              className={`text-xl transition-colors ${isActive('/about') 
                ? 'text-white font-medium' 
                : 'text-white/80'}`}>
              About
            </Link>
            <Link to="/projects" 
              className={`text-xl transition-colors ${isActive('/projects') 
                ? 'text-white font-medium' 
                : 'text-white/80'}`}>
              Projects
            </Link>
            <Link to="/contact" 
              className="mt-6 px-8 py-3 bg-white text-blue-900 text-xl rounded-md hover:bg-white/90 transition-colors font-medium">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Add this style tag to ensure Montserrat is loaded */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>
    </nav>
  );
};

export default Navigation;