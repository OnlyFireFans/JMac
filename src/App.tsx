import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { ProductGrid } from './components/products/ProductGrid';
import { Features } from './components/features/Features';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Prints</h2>
          <ProductGrid />
        </div>
        <Features />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About Us</h3>
              <p className="text-gray-400">
                We're dedicated to bringing exceptional photographic art into your space with museum-quality prints and frames.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/prints" className="text-gray-400 hover:text-white">Fine Art Prints</a></li>
                <li><a href="/frames" className="text-gray-400 hover:text-white">Frames</a></li>
                <li><a href="/canvas" className="text-gray-400 hover:text-white">Canvas</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="bg-white text-gray-900 px-4 py-2 rounded-r-md hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;