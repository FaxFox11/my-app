import React, { useState, useEffect } from 'react';
import { Camera, PlayCircle } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolioImages = [
    '../assets/hero.webp',
    '../assets/photo2.webp',
    '../assets/photo3.webp',
    '../assets/photo5.webp'
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Ambient fog/mist effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse" />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content - Text and CTA */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            {/* Floating title effect */}
            <div className="relative">
              <h1 className="text-6xl font-bold text-white opacity-20">
                CAPTURING
              </h1>
              <h1 className="absolute top-0 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                CAPTURING
              </h1>
              <h2 className="mt-2 text-4xl font-bold text-white/90">
                MOMENTS
              </h2>
              <p className="mt-4 text-xl text-white/70">
                CRAFTING STORIES
              </p>
            </div>

            {/* CTA Button */}
            <button className="group relative px-8 py-3 overflow-hidden">
              <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-white group-hover:bg-opacity-70 group-hover:skew-x-12" />
              <span className="relative text-black font-medium">VIEW PORTFOLIO</span>
            </button>
          </div>

          {/* Right content - Camera and floating images */}
          <div className="relative h-[600px]">
            {/* Main camera */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}>
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-lg shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300" />
                <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 text-white/80" />
              </div>
            </div>

            {/* Floating portfolio previews */}
            <div className="absolute top-0 right-0 w-48 space-y-4">
              {portfolioImages.map((img, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    index === activeIndex
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-32 object-cover rounded shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping delay-300" />
    </div>
  );
};

export default Hero;