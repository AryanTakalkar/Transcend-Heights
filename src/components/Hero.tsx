import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
          alt="Modern construction site"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 flex items-center min-h-screen">
        <div className="text-center sm:text-left animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Building Tomorrow's<br />
            <span className="text-blue-400">Landmarks Today</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Transcend Heights brings innovation and excellence to every construction project, 
            creating spaces that inspire and endure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px]"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}