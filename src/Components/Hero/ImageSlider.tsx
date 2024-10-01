"use client"

// components/ImageSlider.tsx
import { useState } from "react";

const images = [
  "/images/image1.png", // replace with your image paths
  "/images/image2.png",
  "/images/image3.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`relative w-full  ${isFullScreen ? "h-screen" : "h-96"}`}>
      <div className="absolute top-2 left-2 flex items-center space-x-2">
        <span className="text-white">
          {currentIndex + 1} / {images.length}
        </span>
        <button onClick={() => setCurrentIndex(0)}>
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Close SVG Icon */}
          </svg>
        </button>
        <button onClick={toggleFullScreen}>
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Fullscreen SVG Icon */}
          </svg>
        </button>
      </div>

      <div className="w-full h-full flex items-center justify-center bg-gray-800">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-auto h-full object-contain"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
      >
        <svg
          className="h-10 w-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Prev SVG Icon */}
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <svg
          className="h-10 w-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Next SVG Icon */}
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
