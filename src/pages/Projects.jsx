import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Brand from "../components/Brand";

const Projects = () => {
  // For the slideshow functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const openModal = (category) => {
    setSelectedCategory(category);
    setCurrentGallerySlide(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCategory(null);
      setCurrentGallerySlide(0);
    }, 300);
  };

  const nextGallerySlide = () => {
    if (selectedCategory) {
      setCurrentGallerySlide((prev) =>
        prev === selectedCategory.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevGallerySlide = () => {
    if (selectedCategory) {
      setCurrentGallerySlide((prev) =>
        prev === 0 ? selectedCategory.images.length - 1 : prev - 1
      );
    }
  };

  const goToGallerySlide = (index) => {
    setCurrentGallerySlide(index);
  };

  // Touch handlers for swipe navigation
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextGallerySlide();
    }
    if (isRightSwipe) {
      prevGallerySlide();
    }
  };

  // Sample project images for jumbotron
  const projectSlides = [
    {
      id: 1,
      image: "./src/assets/Kitchens/kitchen5.jpeg",
      title: "Modern Kitchen Cabinetry",
    },
    {
      id: 2,
      image: "./src/assets/Walls/Bookcase.jpeg",
      title: "Custom Built-in Shelving",
    },
    {
      id: 3,
      image: "./src/assets/Bespoke/GlassShelf.jpeg",
      title: "Luxury Bathroom Vanities",
    },
  ];

  // Category data with multiple images for each category
  const categories = [
    {
      id: 1,
      title: "Kitchen Cabinetry",
      description:
        "Custom kitchen solutions featuring premium materials and innovative storage designs.",
      thumbnail: "./src/assets/Kitchens/kitchen4.jpeg",
      images: [
        {
          src: "./src/assets/Kitchens/kitchen4.jpeg",
          alt: "Modern kitchen with white oak cabinetry",
          title: "Contemporary Kitchen Design",
        },
        {
          src: "./src/assets/Kitchens/kitchen1.jpg",
          alt: "Modern kitchen with white oak cabinetry",
          title: "Contemporary Kitchen Design",
        },
        {
          src: "./src/assets/Kitchens/kitchen8.jpeg",
          alt: "Modern kitchen with white oak cabinetry",
          title: "Contemporary Kitchen Design",
        },
        {
          src: "./src/assets/Kitchens/kitchen5.jpeg",
          alt: "Modern kitchen with white oak cabinetry",
          title: "Contemporary Kitchen Design",
        },
        {
          src: "./src/assets/Kitchens/kitchen7.jpeg",
          alt: "Modern kitchen with white oak cabinetry",
          title: "Contemporary Kitchen Design",
        },
        {
          src: "./src/assets/Kitchens/kitchen2.jpg",
          alt: "Traditional kitchen with custom islands",
          title: "Traditional Kitchen with Island",
        },
        {
          src: "./src/assets/Kitchens/kitchen6.jpeg",
          alt: "Modern kitchen with white oak cabinetry",
          title: "Contemporary Kitchen Design",
        },
        {
          src: "./src/assets/Kitchens/kitchen3.jpg",
          alt: "Luxury kitchen with marble countertops",
          title: "Luxury Kitchen Design",
        },
      ],
    },
    {
      id: 2,
      title: "Wall Systems & Built-ins",
      description:
        "Maximize your space with custom built-in solutions designed for functionality and style.",
      thumbnail: "./src/assets/Walls/OfficeShelving.jpeg",
      images: [
        {
          src: "./src/assets/Walls/OfficeShelving.jpeg",
          alt: "Mudroom storage with bench seating",
          title: "Office Shelving and Storage",
        },
        {
          src: "./src/assets/Walls/customShelf.jpg",
          alt: "Floor-to-ceiling built-in bookcase",
          title: "Custom Built-in Bookcase",
        },
        {
          src: "./src/assets/Walls/CustomStorage1.jpeg",
          alt: "Floor-to-ceiling built-in bookcase",
          title: "Custom Mudroom Storage",
        },
        {
          src: "./src/assets/Walls/Bookcase.jpeg",
          alt: "Mudroom storage with bench seating",
          title: "Custom Bookcase",
        },
        {
          src: "./src/assets/Walls/OfficeSystem.jpeg",
          alt: "Home office built-in desk and storage",
          title: "Home Office Built-ins",
        },
      ],
    },
    {
      id: 3,
      title: "Closet Systems",
      description:
        "Organized closet solutions with custom shelving, drawers, and hanging systems.",
      thumbnail: "./src/assets/Closets/ClosetSystem1.jpeg",
      images: [
        {
          src: "./src/assets/Closets/ClosetSystem1.jpeg",
          alt: "Walk-in closet with custom organization",
          title: "Walk-in Closet Design",
        },
        {
          src: "./src/assets/Closets/ClosetIsland.jpeg",
          alt: "Reach-in closet with efficient storage",
          title: "Efficient Closet Storage",
        },
        {
          src: "./src/assets/Closets/Closet3.jpeg",
          alt: "Reach-in closet with efficient storage",
          title: "Efficient Closet Storage",
        },
        {
          src: "./src/assets/Closets/Closet6.jpeg",
          alt: "Reach-in closet with efficient storage",
          title: "Efficient Closet Storage",
        },
        {
          src: "./src/assets/Closets/Closet4.jpeg",
          alt: "Walk-in closet with custom organization",
          title: "Walk-in Closet Design",
        },
      ],
    },
  ];

  // Additional categories for "View All"
  const additionalCategories = [
    {
      id: 4,
      title: "Entertainment Centers",
      description:
        "Custom media centers and entertainment built-ins for modern living spaces.",
      thumbnail: "./src/assets/Entertainment/Entertainment.jpeg",
      images: [
        {
          src: "./src/assets/Entertainment/Entertainment.jpeg",
          alt: "Built-in entertainment center with TV mount",
          title: "Modern Entertainment Center",
        },
        {
          src: "./src/assets/Entertainment/Entertainment2.jpeg",
          alt: "Built-in entertainment center with TV mount",
          title: "Modern Entertainment Center",
        },
        {
          src: "./src/assets/Entertainment/Entertainment3.jpeg",
          alt: "Built-in entertainment center with TV mount",
          title: "Modern Entertainment Center",
        },
        {
          src: "./src/assets/Entertainment/EntertainmentSystem.jpeg",
          alt: "Custom media cabinet with storage",
          title: "Custom Media Cabinet",
        },
        {
          src: "./src/assets/Entertainment/LivingRoom.jpeg",
          alt: "Custom living room built-in",
          title: "Custom Living Room",
        },
      ],
    },
    {
      id: 5,
      title: "Specialty Projects",
      description:
        "Unique custom millwork projects including wine cellars, bars, and specialty storage.",
      thumbnail: "./src/assets/Bespoke/Aquarium.jpeg",
      images: [
        {
          src: "./src/assets/Bespoke/Aquarium.jpeg",
          alt: "Unique custom millwork project",
          title: "Specialty Millwork",
        },
        {
          src: "./src/assets/Bespoke/Bespoke2.jpeg",
          alt: "Unique custom millwork project",
          title: "Specialty Millwork",
        },
        {
          src: "./src/assets/Bespoke/CustomTable.jpeg",
          alt: "Unique custom millwork project",
          title: "Specialty Millwork",
        },
        {
          src: "./src/assets/Bespoke/HiddenDoor.jpeg",
          alt: "Unique custom millwork project",
          title: "Specialty Millwork",
        },
        {
          src: "./src/assets/Bespoke/frames.jpg",
          alt: "Custom wine cellar with climate control",
          title: "Frames and Shelving",
        },
        {
          src: "./src/assets/Bespoke/GlassShelf.jpeg",
          alt: "Custom home bar with storage",
          title: "Custom Display Shelving",
        },
      ],
    },
    {
      id: 6,
      title: "Bathroom Vanities",
      description:
        "Elegant bathroom cabinetry combining luxury materials with practical design.",
      thumbnail: "./src/assets/BedandBath/bath1.jpeg",
      images: [
        {
          src: "./src/assets/BedandBath/bath1.jpeg",
          alt: "Double vanity with marble countertops",
          title: "Luxury Double Vanity",
        },
        {
          src: "./src/assets/BedandBath/Bathroom2.jpeg",
          alt: "Modern single vanity with storage",
          title: "Modern Bathroom Vanity",
        },
        // {
        //   src: "./src/assets/BedandBath/bath3.jpg",
        //   alt: "Traditional bathroom with custom millwork",
        //   title: "Traditional Bathroom Design",
        // },
      ],
    },
  ];

  // Auto-advance slideshow for jumbotron
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === projectSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [projectSlides.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // View all/less categories with animation
  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* NavBar */}
      <div className="absolute top-0 font-[Montserrat] left-0 right-0 z-20">
        <NavBar />
      </div>

      {/* Jumbotron Teaser for Gallery - responsive height */}
      <div className="relative h-[40vh] min-h-[400px] md:h-[33vh] flex flex-col items-center justify-center overflow-hidden font-montserrat">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {projectSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/30 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <Brand />
          <p className="mt-2 text-base md:text-lg lg:text-xl text-white/90 drop-shadow">
            Explore our gallery of craftsmanship and design excellence
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="#gallery"
              className="w-full sm:w-auto inline-block px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-white/90 transition shadow-lg text-center"
            >
              View Gallery
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition shadow-lg text-center"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Slideshow navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {projectSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all touch-manipulation ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Categories Section with Grid Background */}
      <div
        id="gallery"
        className="py-12 font-montserrat relative"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 grid-background"></div>
          <style jsx>{`
            .grid-background {
              background-image: linear-gradient(
                  to right,
                  rgba(59, 130, 246, 0.2) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(59, 130, 246, 0.2) 1px,
                  transparent 1px
                );
              background-size: 40px 40px;
              height: 100%;
              width: 100%;
            }

            .grid-background::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: radial-gradient(
                circle at center,
                transparent 0%,
                transparent 30%,
                rgba(255, 255, 255, 0.3) 60%,
                rgba(255, 255, 255, 0.8) 80%,
                white 100%
              );
              pointer-events: none;
            }

            .grid-background::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(
                  to right,
                  rgba(255, 255, 255, 0.8) 0%,
                  transparent 15%,
                  transparent 85%,
                  rgba(255, 255, 255, 0.8) 100%
                ),
                linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.8) 0%,
                  transparent 15%,
                  transparent 85%,
                  rgba(255, 255, 255, 0.8) 100%
                );
              pointer-events: none;
            }
          `}</style>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Category Cards Grid - responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer bg-white"
                onClick={() => openModal(category)}
              >
                <div className="h-56 md:h-64 bg-gray-200 relative overflow-hidden">
                  <img
                    src={category.thumbnail}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg
                        className="w-12 h-12 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <p className="font-medium">View Gallery</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 bg-white">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-900 font-medium text-sm md:text-base">
                    <span>View Projects</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Categories with Animation */}
            {showAllCategories && (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {additionalCategories.map((category) => (
                    <div
                      key={category.id}
                      className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer bg-white"
                      onClick={() => openModal(category)}
                    >
                      <div className="h-56 md:h-64 bg-gray-200 relative overflow-hidden">
                        <img
                          src={category.thumbnail}
                          alt={category.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <svg
                              className="w-12 h-12 mx-auto mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            <p className="font-medium">View Gallery</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 md:p-6 bg-white">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center text-blue-900 font-medium text-sm md:text-base">
                          <span>View Projects</span>
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* View All Categories Button */}
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={toggleCategories}
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition shadow-lg touch-manipulation"
            >
              {showAllCategories ? "Hide Categories" : "View All Categories"}
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox Modal - Mobile Optimized */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-200"
            onClick={closeModal}
          />

          {/* Modal content - full height on mobile, fixed size on desktop */}
          <div className="relative z-10 w-full h-full md:w-[90vw] md:max-w-6xl md:h-[85vh] md:mx-auto md:my-auto md:top-1/2 md:-translate-y-1/2 md:rounded-lg bg-black md:bg-white overflow-hidden flex flex-col transition-transform duration-200">
              {/* Header - sticky on mobile */}
              <div className="flex-shrink-0 p-4 md:p-6 bg-white md:border-b border-gray-200 absolute md:relative top-0 left-0 right-0 z-20 bg-opacity-95 backdrop-blur-sm md:bg-opacity-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 pr-4 truncate">
                    {selectedCategory.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="flex-shrink-0 text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full touch-manipulation"
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Gallery - with swipe support and fixed height on desktop */}
              <div 
                className="flex-1 relative flex items-center justify-center bg-black mt-16 md:mt-0 overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <img
                  key={currentGallerySlide}
                  src={selectedCategory.images[currentGallerySlide].src}
                  alt={selectedCategory.images[currentGallerySlide].alt}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-300"
                  draggable={false}
                />

                {/* Navigation arrows - larger touch targets on mobile */}
                {selectedCategory.images.length > 1 && (
                  <>
                    <button
                      onClick={prevGallerySlide}
                      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 md:p-2 rounded-full transition-colors touch-manipulation"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-7 h-7 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextGallerySlide}
                      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 md:p-2 rounded-full transition-colors touch-manipulation"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-7 h-7 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image counter and dots - better positioned on mobile */}
                <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-3 px-4">
                  {/* Dot indicators */}
                  <div className="flex space-x-2 flex-wrap justify-center max-w-full">
                    {selectedCategory.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToGallerySlide(index)}
                        className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all touch-manipulation ${
                          index === currentGallerySlide
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Counter */}
                  <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm md:text-xs text-white font-medium">
                      {currentGallerySlide + 1} / {selectedCategory.images.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Optional: Image title at bottom on desktop only */}
              {/* <div className="hidden md:block flex-shrink-0 p-4 bg-white border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedCategory.images[currentGallerySlide].title}
                </h3>
              </div> */}
            </div>
          </div>
        )}
      

      <Footer />
    </>
  );
};

export default Projects;