import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./Footer";

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
    full: string;
  };
  alt_description: string | null;
  user: {
    name: string;
    username: string;
  };
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  // Replace with your Unsplash username
  const username = "your_unsplash_username";

  // Predefined categories for the filter
  const categories = [
    { value: "all", label: "All" },
    { value: "theyyam", label: "Theyyam" },
    { value: "Kerala", label: "Kerala" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "technology", label: "Technology" },
  ];

  useEffect(() => {
    const fetchUserPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = "";
        if (category === "all") {
          url = `https://api.unsplash.com/users/mekkatt/photos/?client_id=LvofF0QM5RIBpFkNvpDKpCev3Hx0WR4N8PMjJig_ag0&per_page=12`;
        } else {
          url = `https://api.unsplash.com/search/photos/?client_id=LvofF0QM5RIBpFkNvpDKpCev3Hx0WR4N8PMjJig_ag0&query=${category}&per_page=12`;
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `Client-ID gRuwSpQy3KVcT_rn9u8SZfYlKQTXxNxZOAVUvcwK_q8}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(JSON.stringify(errorData));
        }

        let data = await response.json();
        if (category !== "all") {
          data = data.results.filter(
            (photo: UnsplashImage) => photo.user.username !== username
          );
        }

        setImages(category === "all" ? data : data);
        setLoading(false);
      } catch (err: any) {
        setError(`Error fetching photos: ${err.message}`);
        setLoading(false);
        console.error("API Error:", err.message);
      }
    };

    fetchUserPhotos();
  }, [category]);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const openModal = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return <div className="text-center py-10">Loading your photos...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (images.length === 0) {
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
          Your Unsplash Photos
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
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image
                src={image.urls.regular}
                alt={image.alt_description || "Your Unsplash Photo"}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                placeholder="blur"
                blurDataURL={image.urls.small}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                <p>Photo by {image.user.name}</p>
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
                src={selectedImage.urls.full}
                alt={selectedImage.alt_description || "Your Unsplash Photo"}
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
                placeholder="blur"
                blurDataURL={selectedImage.urls.small}
              />
              <div className="mt-2 text-center">
                <p className="text-gray-800">
                  Photo by {selectedImage.user.name}
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
