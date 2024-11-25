import React, { useState, useEffect } from 'react';
import { Camera, Video, Image, Lightbulb } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, index, imagePath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
        />
      </div>

      {/* Content Container */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon container with floating animation */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
          <Icon 
            className={`w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80 leading-relaxed mb-6">{description}</p>

        {/* Learn More Button */}
        <div className="mt-auto">
          <button className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for events, portraits, and commercial projects with attention to detail and artistic vision.",
      imagePath: "../assets/photo14.webp" // Placeholder for photography background
    },
    {
      icon: Video,
      title: "Videography",
      description: "Cinematic video production from concept to final edit, telling your story through dynamic visual narratives.",
      imagePath: "../assets/photo15.webp" // Placeholder for videography background
    },
    {
      icon: Image,
      title: "Post-Production",
      description: "Expert photo and video editing services to perfect your visual content with professional color grading and retouching.",
      imagePath: "../assets/photo16.webp" // Placeholder for post-production background
    },
    {
      icon: Lightbulb,
      title: "Creative Direction",
      description: "Strategic creative planning and artistic guidance to bring your vision to life with maximum impact.",
      imagePath: "../assets/photo17.webp" // Placeholder for creative direction background
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Transforming your vision into reality with cutting-edge creative services
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 mx-auto mt-8" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;