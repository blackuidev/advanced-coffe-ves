import React from "react";
import { motion } from "framer-motion";
import { productsData, Product } from "@/lib/data";
import { GlowingCard, GlowingCards } from "@/components/lightswind/glowing-cards";
import { Button } from "@/components/lightswind/button";
import { ShoppingCart } from "lucide-react";

const Products: React.FC = () => {
  const beans = productsData.filter((p) => p.category === "Beans");
  const gear = productsData.filter((p) => p.category === "Gear");

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };
  
  const ProductCard = ({ product }: { product: Product }) => (
    <GlowingCard className="flex flex-col overflow-hidden h-full">
        <div className="relative w-full h-64">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute top-4 right-4 bg-brown-500/20 backdrop-blur-sm text-stone-50 px-3 py-1 rounded-full text-sm font-semibold border border-brown-400/50">
                ${product.price.toFixed(2)}
            </span>
        </div>
        <div className="p-6 flex flex-col flex-grow bg-stone-900/50">
            <h3 className="text-2xl font-bold text-stone-50 mb-2 tracking-tight">{product.name}</h3>
            <p className="text-stone-400 text-sm flex-grow mb-6">{product.description}</p>
            <Button className="w-full mt-auto bg-gradient-to-r from-brown-600 to-brown-700 hover:from-brown-500 hover:to-brown-600 text-white font-bold border border-brown-500/80 transition-all duration-300">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
            </Button>
        </div>
    </GlowingCard>
  );

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full bg-stone-950 text-stone-50 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-stone-400">
                Our Curated Collection
            </h1>
            <p className="mt-4 text-lg md:text-xl text-stone-300 max-w-3xl mx-auto">
                From single-origin beans to essential brewing gear, every item is selected for its quality and character.
            </p>
        </div>

        {/* Coffee Beans Section */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-200 mb-8 border-l-4 border-brown-500 pl-4">
                Coffee Beans
            </h2>
            <GlowingCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {beans.map(product => <ProductCard key={product.id} product={product} />)}
            </GlowingCards>
        </div>

        {/* Brewing Gear Section */}
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-200 mb-8 border-l-4 border-brown-500 pl-4">
                Brewing Gear
            </h2>
            <GlowingCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {gear.map(product => <ProductCard key={product.id} product={product} />)}
            </GlowingCards>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
