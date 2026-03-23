import React from "react";
import ThreeDCarousel from "@/components/lightswind/3d-carousel";
import { blendsData } from "@/lib/data";

const OurBlends: React.FC = () => {
  return (
    <div className="w-full bg-stone-950 text-stone-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-stone-400">
                Our Signature Blends
            </h1>
            <p className="mt-4 text-lg md:text-xl text-stone-300 max-w-3xl mx-auto">
                Discover a world of flavor with our expertly crafted coffee blends. Each one tells a unique story, from the intense depths of our dark roasts to the vibrant notes of our exotics.
            </p>
        </div>
        <ThreeDCarousel
          items={blendsData}
          autoRotate={true}
          cardHeight={450}
        />
      </div>
    </div>
  );
};

export default OurBlends;
