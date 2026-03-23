import React from 'react';
import { GlowingCard, GlowingCards } from '@/components/lightswind/glowing-cards';
import { coffeeBlends } from '@/lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OurBlends = () => {
  const featuredBlends = coffeeBlends.slice(0, 3);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-200 to-brown-400 mb-4">
            Taste Our Craft
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A curated selection of our finest blends, each with a unique story and flavor profile waiting to be discovered.
          </p>
        </div>
        <GlowingCards>
          {featuredBlends.map((blend) => (
            <GlowingCard key={blend.id} className="flex flex-col">
              <div className="flex-grow">
                <img src={blend.imageUrl} alt={blend.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brown-100">{blend.name}</h3>
                <p className="text-white/60 mt-2">{blend.origin}</p>
                <p className="text-white/80 mt-4 flex-grow">{blend.description}</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-bold text-brown-200">${blend.price.toFixed(2)}</p>
                <button className="bg-brown-800 hover:bg-brown-700 text-white font-bold py-2 px-5 rounded-full transition-colors">
                  View Details
                </button>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
        <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 text-lg font-semibold text-brown-200 hover:text-white transition-all duration-300 group">
                <span>Explore All Blends</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBlends;
