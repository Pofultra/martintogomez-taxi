import React, { useState, useEffect, useRef } from "react";
import { VehicleCard } from "./VehicleCard";

export const VehicleCarousel = ({ vehicles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Manejar el desplazamiento táctil
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Deslizar hacia la izquierda
      setActiveIndex((prev) => (prev === vehicles.length - 1 ? 0 : prev + 1));
    }
    if (touchEnd - touchStart > 50) {
      // Deslizar hacia la derecha
      setActiveIndex((prev) => (prev === 0 ? vehicles.length - 1 : prev - 1));
    }
  };

  // Función para calcular las clases y estilos de cada tarjeta
  const getCardStyles = (index) => {
    const position = index - activeIndex;
    let adjustedPosition = position;

    // Manejar el desbordamiento (wrap-around)
    if (adjustedPosition < -1) adjustedPosition += vehicles.length;
    if (adjustedPosition > 1) adjustedPosition -= vehicles.length;

    // Definir clases y estilos basados en la posición
    const cardClasses = `
      absolute transition-all duration-500 ease-in-out
      ${adjustedPosition === 0 ? "z-10 scale-100 opacity-100" : "scale-85 opacity-60"}
      ${adjustedPosition === -1 ? "-translate-x-[60%]" : ""}
      ${adjustedPosition === 1 ? "translate-x-[60%]" : ""}
    `;
    const cardStyles = {
      transform: `
        perspective(1000px)
        rotateY(${adjustedPosition * 45}deg)
        translateX(${adjustedPosition * 50}%)
        scale(${adjustedPosition === 0 ? 1 : 0.85})
      `,
      zIndex: adjustedPosition === 0 ? 10 : 5,
    };
    return { cardClasses, cardStyles };
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Contenedor del carrusel */}
      <div
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-full flex items-center justify-center"
      >
        {vehicles.map((vehicle, index) => {
          const { cardClasses, cardStyles } = getCardStyles(index);
          return (
            <div key={vehicle.id} className={cardClasses} style={cardStyles}>
              <VehicleCard vehicle={vehicle} isActive={index === activeIndex} />
            </div>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {vehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${activeIndex === index ? "bg-yellow-500 w-6" : "bg-gray-400 hover:bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};