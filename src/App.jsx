import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactPage from "./pages/Contact";


function App() {
  useEffect(() => {
    const smoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return (
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />

    </Routes>
  );
}

export default App;
