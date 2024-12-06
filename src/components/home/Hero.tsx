import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[80vh] bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Transform Your Moments into Masterpieces
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Museum-quality prints that bring your vision to life
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}