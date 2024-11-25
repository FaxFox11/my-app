import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: '../assets/photo9.webp',
      category: 'Wedding'
    },
    {
      id: 2,
      image: '../assets/photo7.webp',
      category: 'Portrait'
    },
    {
      id: 3,
      image: '../assets/photo10.webp',
      category: 'Commercial'
    },
    {
      id: 4,
      image: '../assets/photo11.webp',
      category: 'Wedding'
    },
    {
      id: 5,
      image: '../assets/photo12.webp',
      category: 'Portrait'
    },
    {
      id: 6,
      image: '../assets/photo13.webp',
      category: 'Commercial'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={`Portfolio ${item.id}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;