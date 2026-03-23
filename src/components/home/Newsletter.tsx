import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/lightswind/input";

const Newsletter: React.FC = () => {
    return (
        <div className="py-20 md:py-32 bg-stone-900/50 border-t border-stone-800/70">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-stone-100 to-stone-400 mb-4">
                    Join the BlackUI Brew Club
                </h2>
                <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
                    Get exclusive offers, brewing tips, and be the first to know about our new blends.
                </p>
                <motion.form 
                    className="flex max-w-md mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="rounded-r-none focus:ring-offset-stone-900 focus:ring-brown-500"
                    />
                    <button 
                        type="submit"
                        className="px-6 py-2 bg-brown-600 text-white font-semibold rounded-r-lg hover:bg-brown-500 transition-colors duration-300 border border-brown-500"
                    >
                        Subscribe
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default Newsletter;
