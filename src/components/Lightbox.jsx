// components/Lightbox.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ images = [], onClose }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-[70vh] object-contain rounded-md bg-black"
          />

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl px-4 focus:outline-none"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl px-4 focus:outline-none"
          >
            ❯
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full focus:outline-none"
            aria-label="Close gallery"
          >
            ✕
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                }`}
              ></button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
