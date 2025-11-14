import React, { useState, useEffect } from 'react';
import { carouselSlides } from '../data/subscriptions'; // Importamos los datos enriquecidos

interface ImageCarouselProps {
  setActivePage: (page: string) => void;
  setCategoryFilter: (filter: string) => void;
}

export const ImageCarousel = ({ setActivePage, setCategoryFilter }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Lógica para la transición automática
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) { // Solo avanza si no está en hover
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
      }
    }, 7000); // Cambia la imagen cada 7 segundos

    return () => clearInterval(interval);
  }, [isHovered]); // Dependencia de isHovered para pausar/reanudar

  // Función de navegación al hacer clic en el logo
  // CRITICAL FIX: Ahora pasamos el platformName (ej: 'Netflix') en lugar del categoryId (ej: 'netflix')
  // para que coincida con el campo 'platform' de los productos.
  const handleNavigation = (platformName: string) => {
    setCategoryFilter(platformName);
    setActivePage('products');
  };

  const currentSlide = carouselSlides[currentIndex];

  return (
    <div 
      // CLASE MODIFICADA: Se añade -mt-16 para subir el carrusel 4rem (64px) y se ajusta mb-16.
      className="relative w-full max-w-xl h-64 md:w-[974px] md:h-[696px] md:max-w-[974px] mx-auto -mt-16 mb-16 overflow-hidden rounded-3xl shadow-floating transform transition-transform duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {carouselSlides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.url}
          alt={slide.alt}
          // Transición de Revelación Inmersiva: Opacidad + Escala
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out 
            ${index === currentIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'}`}
        />
      ))}
      
      {/* Overlay de Oscurecimiento Base */}
      <div className="absolute inset-0 bg-black/40 z-[5]"></div>

      {/* Logo Overlay (Visible en Hover) */}
      <div 
        className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 
          ${isHovered ? 'opacity-100 backdrop-blur-sm bg-black/30' : 'opacity-0 pointer-events-none'}`}
      >
        {currentSlide && (
          <button
            // USO DE platformName para el filtro
            onClick={() => handleNavigation(currentSlide.platformName)}
            // CLASES MODIFICADAS: Eliminamos bordes y fondos, dejando solo el padding y el efecto de sombra/zoom.
            className="p-6 rounded-full shadow-2xl shadow-primary/30 transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/50 cursor-pointer bg-transparent"
            aria-label={`Ver suscripciones de ${currentSlide.platformName}`}
          >
            <img
              src={currentSlide.logoUrl}
              alt={`${currentSlide.platformName} Logo`}
              // APLICAMOS ZOOM INICIAL (scale-105) y un filtro de sombra para que parezca flotante.
              className="w-16 h-16 object-contain filter drop-shadow-xl transition-transform duration-300 scale-105"
            />
          </button>
        )}
      </div>

      {/* Puntos de Navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 z-20
              ${index === currentIndex ? 'bg-primary scale-125 shadow-lg shadow-primary/50' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
