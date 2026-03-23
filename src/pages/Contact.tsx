import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-200 to-brown-400">
            Get in Touch
          </h1>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            We're here to help with any questions you have about our blends, your order, or just to chat about coffee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-brown-100 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-brown-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brown-200" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90">Email Us</h3>
                  <a href="mailto:contact@coffee3d.com" className="text-brown-300 hover:text-brown-200 transition-colors">
                    contact@coffee3d.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-brown-900 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brown-200" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90">Call Us</h3>
                  <a href="tel:+1234567890" className="text-brown-300 hover:text-brown-200 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-brown-900 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brown-200" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90">Visit Us</h3>
                  <p className="text-white/70">123 Coffee Lane, Roastville, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-brown-100 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full bg-black/30 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brown-400 focus:border-brown-400 outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full bg-black/30 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brown-400 focus:border-brown-400 outline-none transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full bg-black/30 border border-white/20 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brown-400 focus:border-brown-400 outline-none transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-brown-700 hover:bg-brown-600 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
