import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";

// Import images statically
import theyyam1 from "@/assets/image placeholder.jpg";
import theyyam2 from "@/assets/image placeholder.jpg";
import kerala1 from "@/assets/image placeholder.jpg";
import kerala2 from "@/assets/image placeholder.jpg";
import karnataka1 from "@/assets/image placeholder.jpg";
import technology1 from "@/assets/image placeholder.jpg";

interface LocalImage {
  id: string;
  src: any; // Use `any` to accommodate imported image objects
  alt: string;
  category: string;
  photographer: string;
}

const ImageGallery: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<LocalImage | null>(null);

  // Predefined categories for the filter
  const categories = [
    { value: "all", label: "All" },
    { value: "theyyam", label: "Theyyam" },
    { value: "kerala", label: "Kerala" },
    { value: "karnataka", label: "Karnataka" },
    { value: "technology", label: "Technology" },
  ];

  // Static array of local images with metadata
  const localImages: LocalImage[] = [
    {
      id: "1",
      src: theyyam1,
      alt: "Theyyam performance",
      category: "theyyam",
      photographer: "Your Name",
    },
    {
      id: "2",
      src: theyyam2,
      alt: "Theyyam ritual",
      category: "theyyam",
      photographer: "Your Name",
    },
    {
      id: "3",
      src: kerala1,
      alt: "Kerala backwaters",
      category: "kerala",
      photographer: "Your Name",
    },
    {
      id: "4",
      src: kerala2,
      alt: "Kerala temple",
      category: "kerala",
      photographer: "Your Name",
    },
    {
      id: "5",
      src: karnataka1,
      alt: "Karnataka monument",
      category: "karnataka",
      photographer: "Your Name",
    },
    {
      id: "6",
      src: technology1,
      alt: "Tech device",
      category: "technology",
      photographer: "Your Name",
    },
    // Add more images as needed
  ];

  // Filter images based on the selected category
  const filteredImages =
    category === "all"
      ? localImages
      : localImages.filter((image) => image.category === category);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const openModal = (image: LocalImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (filteredImages.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="category-filter flex content-center gap-4 justify-center mb-6">
          {categories.map((cat) => (
            <div
              className={`category flex items-center justify-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
                category === cat.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              key={cat.value}
            >
              <h3 onClick={() => handleCategoryChange(cat.value)}>
                {cat.label}
              </h3>
            </div>
          ))}
        </div>
        <p>No photos found for this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Your Photo Gallery
        </h1>
        <div className="category-filter flex content-center gap-4 justify-center mb-6">
          {categories.map((cat) => (
            <div
              className={`category flex items-center justify-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
                category === cat.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              key={cat.value}
            >
              <h3 onClick={() => handleCategoryChange(cat.value)}>
                {cat.label}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                placeholder="blur"
                blurDataURL={image.src.blurDataURL || image.src} // Use imported image's blurDataURL if available
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                <p>Photo by {image.photographer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for zoomed-in image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-white rounded-lg p-4 max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 text-2xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
                placeholder="blur"
                blurDataURL={selectedImage.src.blurDataURL || selectedImage.src}
              />
              <div className="mt-2 text-center">
                <p className="text-gray-800">
                  Photo by {selectedImage.photographer}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
