import React from 'react';
import { Coffee } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-brown-200" />
            <span className="text-2xl font-bold text-white">Coffee3D</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>
          <button className="hidden md:block bg-brown-700 hover:bg-brown-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
