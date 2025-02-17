// components/ui/ImageSlider.jsx
import React, { useState, useEffect } from 'react';

export const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambio de imagen cada 5 segundos

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar
  }, [images.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Vehicle view ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Indicadores de posición */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
              ${idx === currentIndex 
                ? 'bg-white w-3' 
                : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};