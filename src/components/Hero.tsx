"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1920&q=80"
          alt="Luxury car detailing"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-indigo-950/70 to-slate-950/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">
              <span className="block text-white">Montreal's Premier</span>
              <span className="gradient-text">In-Building Car Detailing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Professional car detailing that comes to your building's parking
              garage. Save time and enjoy a spotless vehicle without leaving
              home.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#booking"
                className="primary-button flex items-center"
              >
                Book Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#services" className="secondary-button">
                View Packages
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card p-8">
              <AspectRatio ratio={3 / 2} className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80"
                  alt="Luxury car being detailed"
                  className="w-full h-full rounded-lg object-cover"
                />
              </AspectRatio>
              <h3 className="text-2xl font-bold text-white mb-2">
                Premium Detailing
              </h3>
              <p className="text-gray-300 mb-4">
                Our signature service includes a thorough exterior wash,
                interior cleaning, and premium wax application for lasting
                protection.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-500 fill-amber-500"
                    />
                  ))}
                  <span className="ml-2 text-white">5.0 (120+ reviews)</span>
                </div>
                <span className="text-amber-500 font-bold">From $149</span>
              </div>
            </div>

            {/* Floating Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-12 top-1/4 glass-card p-4 max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">
                    "They came to my condo's garage and transformed my car.
                    Absolutely worth every penny!"
                  </p>
                  <p className="text-xs text-amber-500 mt-1">
                    - John D., Montreal
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
