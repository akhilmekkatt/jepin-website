import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define the type for each slide
interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "https://wallpaperaccess.com/full/2608588.jpg",
    title: "Theyyam 1",
    subtitle:
      "Muthappan is believed to be the personification of two divine figures.",
  },
  {
    image: "https://wallpaperaccess.com/full/2612130.jpg",
    title: "Theyyam 2",
    subtitle: "The biggest mistake is you think you have time.",
  },
  {
    image: "https://wallpaperaccess.com/full/2608594.jpg",
    title: "Preparation",
    subtitle: "The biggest mistake is you think you have time.",
  },
];

const BannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill // Use the fill prop instead of layout="fill"
            className="object-cover" // Removed redundant w-full h-full since fill handles it
            priority={index === 0}
          />

          <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-start text-white">
            <div className="container mx-auto px-10">
              <h2 className="text-5xl font-bold mb-6">{slide.title}</h2>
              <p className="text-xl mb-6">{slide.subtitle}</p>
              <button className="p-2 text-white flex items-center space-x-2 bg-red-500 hover:bg-transparent hover:text-white duration-300">
                <span>VIEW MORE</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-6 h-6 rounded-full border-1 ${
              index === currentSlide
                ? "bg-white border-white text-black"
                : "border-white bg-transparent text-white"
            }  flex items-center justify-center text-xs`}
          >
            {`0${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
