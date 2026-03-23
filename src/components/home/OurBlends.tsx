import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/lightswind/3d-carousel";
import { Card, CardContent } from "@/components/lightswind/card";
import { motion } from "framer-motion";
import { coffeeBlends } from "@/lib/db";

const OurBlends = () => {
  return (
    <section id="blends" className="py-24 bg-stone-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Explore Our Signature Blends
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-white/70 mb-16"
        >
          Each of our blends is crafted with passion and precision, sourced from the finest coffee-growing regions around the world. Discover your new favorite.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {coffeeBlends.map((blend, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-stone-900 border-brown-800 overflow-hidden group">
                      <CardContent className="relative flex aspect-square items-center justify-center p-0">
                        <img
                          src={blend.image}
                          alt={blend.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <h3 className="text-2xl font-bold text-white mb-2">{blend.title}</h3>
                          <p className="text-white/80 text-sm">{blend.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white bg-brown-800 hover:bg-brown-700" />
            <CarouselNext className="text-white bg-brown-800 hover:bg-brown-700" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default OurBlends;
