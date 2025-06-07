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

const VisualDesignGallery = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: '/images/visualdesign/1.webp', alt: 'Design visuel 1' },
    { src: '/images/visualdesign/2.webp', alt: 'Design visuel 2' },
    { src: '/images/visualdesign/3.webp', alt: 'Design visuel 3' },
    { src: '/images/visualdesign/4.webp', alt: 'Design visuel 4' },
    { src: '/images/visualdesign/5.webp', alt: 'Design visuel 5' },
    { src: '/images/visualdesign/6.webp', alt: 'Design visuel 6' },
    { src: '/images/visualdesign/7.webp', alt: 'Design visuel 7' },
    { src: '/images/visualdesign/8.webp', alt: 'Design visuel 8' },
    { src: '/images/visualdesign/9.webp', alt: 'Design visuel 9' },
    { src: '/images/visualdesign/10.webp', alt: 'Design visuel 10' },
    { src: '/images/visualdesign/11.webp', alt: 'Design visuel 11' }
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => [...prev, index]);
  };

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-12 title">
        Visual Design
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid">
            <div 
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-all duration-300 ${
                  loadedImages.includes(index) 
                    ? 'opacity-100 hover:scale-105' 
                    : 'opacity-0'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => handleImageLoad(index)}
                priority={index < 4}
                quality={90}
              />
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

export default VisualDesignGallery; 