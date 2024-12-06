import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="text-2xl font-serif font-bold ml-2">Artistry</Link>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <Link href="/prints">Fine Art Prints</Link>
            <Link href="/frames">Frames</Link>
            <Link href="/canvas">Canvas</Link>
            <Link href="/collections">Collections</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}