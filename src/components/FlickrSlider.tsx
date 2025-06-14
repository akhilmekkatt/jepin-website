import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define the type for each Flickr photo (slide)
interface Slide {
  id: string;
  image: string; // Medium image URL (url_m)
  title: string;
  subtitle: string; // Using description or fallback
}

// Replace with your Flickr API key
const FLICKR_API_KEY =
  process.env.NEXT_PUBLIC_FLICKR_API_KEY || "YOUR_FLICKR_API_KEY"; // Use env variable or fallback
const SEARCH_TERM = "kannur theyyam"; // Change to any search term (e.g., "sunset", "animals")
const PER_PAGE = 8; // Number of photos to fetch (keep low for free tier)

const FlickrSlider: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch photos from Flickr API
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&text=${SEARCH_TERM}&per_page=${PER_PAGE}&format=json&nojsoncallback=1&extras=url_m,description&safe_search=1`
        );
        const data = await response.json();
        if (data.stat === "ok") {
          const fetchedSlides: Slide[] = data.photos.photo
            .filter((photo: any) => photo.url_m) // Ensure valid image URL
            .map((photo: any) => ({
              id: photo.id,
              image: photo.url_m,
              title: photo.title || "Untitled",
              subtitle:
                photo.description._content ||
                "Explore this beautiful moment captured on Flickr.",
            }));
          setSlides(fetchedSlides);
        } else {
          setError("Failed to fetch photos from Flickr.");
        }
      } catch (err) {
        setError("An error occurred while fetching photos.");
      } finally {
        setLoading(false);
      }
    };

    if (FLICKR_API_KEY !== "YOUR_FLICKR_API_KEY") {
      fetchPhotos();
    } else {
      setError("Please provide a valid Flickr API key.");
      setLoading(false);
    }
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 8000); // Change slide every 8 seconds (as in original)
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <p className="text-xl text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <p className="text-xl text-white">
          No photos found for "{SEARCH_TERM}".
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0} // Prioritize first slide
          />
          <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-start pl-10 text-white">
            <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl mb-6">{slide?.subtitle?.substring(0, 300)}</p>
            <a
              href={`https://www.flickr.com/photos/photos/${slide.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white flex items-center space-x-2 bg-red-500 hover:bg-transparent hover:text-white duration-300"
            >
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
            </a>
          </div>
        </div>
      ))}
      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-8 rounded-full border-1 ${
              index === currentSlide
                ? "bg-white border-white text-black"
                : "border-white bg-transparent text-white"
            } flex items-center justify-center text-sm`}
          >
            {`0${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlickrSlider;
