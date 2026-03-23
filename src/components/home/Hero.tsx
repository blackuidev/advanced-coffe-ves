import React from 'react';
import CoffeeCanvas from './CoffeeCanvas';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-stone-950 overflow-hidden">
      <CoffeeCanvas />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider"
          style={{ textShadow: '0 0 20px rgba(0,0,0,0.7)' }}
        >
          The Future of Coffee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-white/80"
        >
          An immersive 3D experience that brings the art of coffee brewing to life. Explore, learn, and savor every moment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brown-800 rounded-full overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-brown-500 hover:ring-offset-2 hover:ring-offset-stone-950">
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              Explore Our Blends <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
