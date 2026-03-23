import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/lightswind/input";
import { Textarea } from "@/components/lightswind/textarea";
import { Button } from "@/components/lightswind/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
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
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-stone-300 max-w-3xl mx-auto">
                        Have a question, a suggestion, or just want to talk about coffee? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-stone-200">Contact Information</h2>
                        <p className="text-stone-400">
                            Fill out the form and our team will get back to you within 24 hours. Or, reach out to us directly through one of the methods below.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:hello@blackuicoffee.com" className="flex items-center space-x-4 text-stone-300 hover:text-brown-400 transition-colors">
                                <Mail className="w-6 h-6 text-brown-500" />
                                <span>hello@blackuicoffee.com</span>
                            </a>
                            <a href="tel:+1234567890" className="flex items-center space-x-4 text-stone-300 hover:text-brown-400 transition-colors">
                                <Phone className="w-6 h-6 text-brown-500" />
                                <span>+1 (234) 567-890</span>
                            </a>
                            <div className="flex items-center space-x-4 text-stone-300">
                                <MapPin className="w-6 h-6 text-brown-500" />
                                <span>123 Coffee Bean Lane, Brewtown</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800/70 shadow-2xl shadow-stone-950/50">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-2">Full Name</label>
                                <Input type="text" id="name" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-2">Email Address</label>
                                <Input type="email" id="email" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-400 mb-2">Message</label>
                                <Textarea id="message" placeholder="Your message..." rows={5} />
                            </div>
                            <Button type="submit" className="w-full text-lg py-3 bg-gradient-to-r from-brown-600 to-brown-700 hover:from-brown-500 hover:to-brown-600 text-white font-bold border border-brown-500/80 transition-all duration-300">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
