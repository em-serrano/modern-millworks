import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Modern Millworks</h2>
          <p className="text-white/70 text-sm">
            Precision cabinetry and fine European craftsmanship built to elevate every space.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-white/80 text-sm space-y-2">
            {/* <li>123 Millworks Ave, Austin, TX</li> */}
            <li>info@modmillworks.com</li>
            <li>(310) 560-9907</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-12 pt-4 text-sm text-white/60 text-center">
        &copy; {new Date().getFullYear()} Modern Millworks. All rights reserved.
      </div>
    </footer>
  );
}
