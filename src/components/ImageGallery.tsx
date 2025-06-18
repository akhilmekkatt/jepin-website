"use client"; // If using Next.js App Router

import React, { useRef, useState } from "react";
import Image from "next/image";
import imageData from "@/assets/gallery/images.json"; // Import the JSON data directly
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

interface LocalImage {
  id: string;
  filename: string;
  alt: string;
  category: string;
  photographer: string;
}

const ImageGallery: React.FC = () => {
  const [category, setCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<LocalImage | null>(null);

  const categories = [
    { value: "all", label: "All" },
    { value: "theyyam", label: "Theyyam" },
    { value: "kerala", label: "Kerala" },
    { value: "karnataka", label: "Karnataka" },
    { value: "technology", label: "Technology" },
  ];

  const filteredImages =
    category === "all"
      ? imageData
      : imageData.filter((image) => image.category === category);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const openModal = (image: LocalImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const container = useRef("");
  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(
    () => {
      // gsap code here...
    },
    { scope: container }
  );

  return (
    <>
      <h2 className="text-2xl text-center mb-8">Your Photo Gallery</h2>

      {/* Category Filter */}
      <div className="category-filter flex content-center gap-4 mb-6">
        {categories.map((cat) => (
          <div
            key={cat.value}
            className={`category w-full flex items-center justify-center px-10 py-6 rounded-md cursor-pointer transition-colors duration-200 ${
              category === cat.value
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange(cat.value)}
          >
            {cat.label}
          </div>
        ))}
      </div>

      {/* No Images */}
      {filteredImages.length === 0 ? (
        <p className="text-center mx-6 mb-8">
          No photos found for this category.
        </p>
      ) : (
        <div className="image grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden  shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image
                src={`/assets/gallery/${image.filename}`} // Path under /public
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white p-2 text-xs">
                <p>Photo by {image.photographer}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-transform duration-300 hover:scale-110"
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
              src={`assets/gallery/${selectedImage.filename}`}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-2 text-center">
              <p className="text-gray-800">
                Photo by {selectedImage.photographer}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
