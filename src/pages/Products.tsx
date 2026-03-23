import React from "react";
import { GlowingCard, GlowingCards } from "@/components/lightswind/glowing-cards";
import { coffeeBlends } from "@/lib/data";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-200 to-brown-400">
            Our Signature Blends
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Discover a world of flavor, with beans sourced from the finest coffee-growing regions around the globe. Each blend is a unique story.
          </p>
        </div>

        <GlowingCards>
          {coffeeBlends.map((blend) => (
            <GlowingCard key={blend.id} className="flex flex-col">
              <div className="flex-grow">
                <img src={blend.imageUrl} alt={blend.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-brown-100">{blend.name}</h3>
                <p className="text-white/60 mt-2">{blend.origin}</p>
                <p className="text-white/80 mt-4 flex-grow">{blend.description}</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-bold text-brown-200">${blend.price.toFixed(2)}</p>
                <button className="bg-brown-700 hover:bg-brown-600 text-white font-bold py-2 px-5 rounded-full transition-colors">
                  Add to Cart
                </button>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </div>
  );
};

export default ProductsPage;
