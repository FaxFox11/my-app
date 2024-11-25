import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: '#hero' },
    { title: 'Services', href: '#services' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Animated Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Camera 
                className={`h-8 w-8 transform group-hover:scale-110 transition-all duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                strokeWidth={1.5} 
              />
              <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            <span className={`text-xl font-semibold relative overflow-hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 group-hover:text-blue-600' : 'text-white group-hover:text-blue-200'
            }`}>
              Studio Lens
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative group"
                onMouseEnter={() => setActiveItem(item.title)}
                onMouseLeave={() => setActiveItem('')}
              >
                <span className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                } ${activeItem === item.title ? (isScrolled ? 'text-blue-600' : 'text-blue-200') : ''}`}>
                  {item.title}
                </span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  }`} />
                {/* Hover card effect */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 
                  rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  }`} />
              </a>
            ))}
            {/* Animated Book Now Button */}
            <button className="relative px-6 py-2 group">
              <span className="relative z-10 text-white font-medium">
                Book Now
              </span>
              <div className="absolute inset-0 bg-black rounded-full transform 
                group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-r from-blue-600 to-purple-600" />
              </div>
              <div className="absolute inset-0 rounded-full opacity-0 
                group-hover:opacity-70 transition-opacity duration-300 
                bg-blue-500 blur-lg" />
            </button>
          </nav>

          {/* Animated Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button
              className="relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-full h-0.5 transform transition-all duration-300 ease-in-out ${
                  isScrolled ? 'bg-black' : 'bg-white'
                } ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} />
                <span className={`absolute left-0 w-full h-0.5 transition-all duration-200 ease-in-out ${
                  isScrolled ? 'bg-black' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'} top-3`} />
                <span className={`absolute left-0 w-full h-0.5 transform transition-all duration-300 ease-in-out ${
                  isScrolled ? 'bg-black' : 'bg-white'
                } ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Animated Mobile Navigation */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-md
          transform transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <nav className="flex flex-col py-20 h-full">
            {menuItems.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className="px-8 py-3 hover:bg-blue-50 transition-colors duration-300
                  transform hover:translate-x-2 transition-transform duration-300
                  text-gray-800 text-lg"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.title}
              </a>
            ))}
            <button 
              className="mx-8 my-3 bg-gradient-to-r from-blue-600 to-purple-600 
                text-white px-6 py-2 rounded-full transform hover:scale-105 
                transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;