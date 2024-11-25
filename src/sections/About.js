// About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="../assets/photo6.webp" 
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Über diese Seite</h2>
            <p className="text-gray-600 mb-6">
              Diese Seite wurde als Showcase-Projekt erstellt um eine konkrete Vorstellung über Unsere Design-Konzepte zu geben. 
            </p>
            <p className="text-gray-600 mb-6">
              Falls Sie interesse an dieser Website, oder an einer eigens zugeschnittenen Website haben melden Sie sich jederzeit bei TruTec (tru-tec.de).
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
