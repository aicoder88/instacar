"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Downtown Montreal",
    rating: 5,
    text: "I was blown away by the quality of service. They came to my condo's parking garage and transformed my car. The interior looks and smells brand new, and the exterior shine is incredible!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    service: "Super Package",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Westmount",
    rating: 5,
    text: "As a busy professional, I don't have time to take my car to a detailing shop. Insta Car Spa's in-building service is exactly what I needed. Exceptional results and great value!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    service: "Basic Package",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Old Montreal",
    rating: 5,
    text: "I've tried several mobile detailing services, but none compare to Insta Car Spa. Their attention to detail is unmatched. My car hasn't looked this good since I bought it!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    service: "Deluxe Package",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Griffintown",
    rating: 4,
    text: "Very convenient service with professional results. The team was punctual and respectful of my property. Will definitely use again for my monthly maintenance.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    service: "Exterior Package",
  },
  {
    id: 5,
    name: "Olivia Patel",
    location: "Plateau Mont-Royal",
    rating: 5,
    text: "The ceramic coating they applied to my car is amazing! Water beads right off and the shine is incredible. Worth every penny for the protection and appearance.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    service: "Super Package + Ceramic Coating",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.9,
                  display: index === activeIndex ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 text-center"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-500"}`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>

                <h4 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm mb-2">
                  {testimonial.location}
                </p>
                <span className="inline-block gradient-bg text-white text-xs px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? "gradient-bg w-8" : "bg-white/30"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
