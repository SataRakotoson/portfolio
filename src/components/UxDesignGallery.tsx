'use client'
import Image from 'next/image';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: { src: string; alt: string } | null;
}

const Modal = ({ isOpen, onClose, image }: ModalProps) => {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[90vh] p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative w-full h-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="object-contain max-h-[85vh] w-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

const UxDesignGallery = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: '/images/uiux/1.webp', alt: 'UI/UX Design 1' },
    { src: '/images/uiux/2.webp', alt: 'UI/UX Design 2' },
    { src: '/images/uiux/3.webp', alt: 'UI/UX Design 3' },
    { src: '/images/uiux/4.webp', alt: 'UI/UX Design 4' },
    { src: '/images/uiux/5.webp', alt: 'UI/UX Design 5' },
    { src: '/images/uiux/6.webp', alt: 'UI/UX Design 6' },
    { src: '/images/uiux/7.webp', alt: 'UI/UX Design 7' },
    { src: '/images/uiux/8.webp', alt: 'UI/UX Design 8' }
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => [...prev, index]);
  };

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-12 title">
        UI/UX Design
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div 
              className="relative aspect-[16/9] w-full cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute bg-gray-200 animate-pulse" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-all duration-300 ${
                  loadedImages.includes(index) 
                    ? 'opacity-100 group-hover:scale-105' 
                    : 'opacity-0'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => handleImageLoad(index)}
                priority={index < 4}
                quality={90}
                unoptimized
              />
              <div className="absolute bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              <div className="absolute  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        image={selectedImage}
      />
    </div>
  );
};

export default UxDesignGallery; 