"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  gallery: string[];
}

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Use fallback image if gallery is empty
  const displayGallery = gallery && gallery.length > 0 ? gallery : ["/images/demo-1.jpg"];

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % displayGallery.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? displayGallery.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900">Project Gallery</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-3">
            {displayGallery.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {displayGallery.length > 4 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => openModal(0)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View all {displayGallery.length} images
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={32} />
            </button>
            
            <img
              src={displayGallery[selectedImage]}
              alt={`Project image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} of {displayGallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 