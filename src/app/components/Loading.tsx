'use client';

import { useEffect, useState } from 'react';

interface LoadingProps {
  onLoadingComplete: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState('Starting...');

  const loadingTexts = [
    'Starting...',
    'Loading portfolio...',
    'Preparing experience...',
    'Almost ready...'
  ];

  useEffect(() => {
    let textIndex = 0;
    
    // Cambiar texto de loading
    const textInterval = setInterval(() => {
      if (textIndex < loadingTexts.length - 1) {
        textIndex++;
        setCurrentText(loadingTexts[textIndex]);
      }
    }, 800);

    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          // Esperar un poco antes de ocultar el loading
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500); // Tiempo para la animación de salida
          }, 300);
          return 100;
        }
        return prevProgress + Math.random() * 12 + 3; // Incremento aleatorio
      });
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center animate-fadeInUp">
        {/* Logo o nombre con efecto shimmer */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-2 relative">
            Rodrigo Vásquez
          </h1>
          <p className="text-gray-600 text-lg font-medium">Software Engineer</p>
        </div>

        {/* Barra de progreso mejorada */}
        <div className="w-80 h-3 bg-gray-200 rounded-full overflow-hidden mx-auto mb-6 shadow-inner">
          <div 
            className="h-full bg-purple-500 transition-all duration-300 ease-out rounded-full relative"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
          </div>
        </div>

        {/* Porcentaje */}
        <div className="text-gray-600 text-lg font-semibold mb-4">
          {Math.min(Math.round(progress), 100)}%
        </div>

        {/* Texto dinámico */}
        <div className="text-gray-500 text-sm font-medium mb-6 h-6">
          {currentText}
        </div>

        {/* Animación de puntos mejorada */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
