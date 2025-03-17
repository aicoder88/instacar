"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";

const packages = [
  {
    id: "exterior",
    title: "Exterior",
    price: "$79",
    frequency: "per visit",
    description:
      "Perfect for maintaining your car's appearance with regular cleaning.",
    features: [
      "Exterior hand wash",
      "Wheel cleaning",
      "Tire dressing",
      "Windows cleaned",
      "Quick exterior wax",
    ],
    image:
      "https://images.unsplash.com/photo-1600259828526-77f8617ceec9?w=400&q=80",
  },
  {
    id: "basic",
    title: "Basic",
    price: "$129",
    frequency: "per visit",
    description:
      "Our most popular package for a complete interior and exterior refresh.",
    features: [
      "Everything in Exterior",
      "Interior vacuum",
      "Dashboard & console cleaning",
      "Door jambs cleaned",
      "Interior glass cleaning",
      "Air freshener",
    ],
    popular: true,
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&q=80",
  },
  {
    id: "super",
    title: "Super",
    price: "$199",
    frequency: "per visit",
    description:
      "The ultimate detailing experience for those who want perfection.",
    features: [
      "Everything in Basic",
      "Clay bar treatment",
      "Premium carnauba wax",
      "Leather conditioning",
      "Carpet shampooing",
      "Engine bay cleaning",
      "Headlight restoration",
    ],
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Service Packages</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the perfect detailing package for your vehicle. All services
            include our signature attention to detail and premium products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`relative h-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 ${pkg.popular ? "ring-2 ring-amber-500" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 gradient-bg text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    MOST POPULAR
                  </div>
                )}

                <div className="relative">
                  <AspectRatio ratio={2 / 1} className="h-48">
                    <img
                      src={pkg.image}
                      alt={`${pkg.title} package`}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                </div>

                <div className="glass-card p-6 border-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold gradient-text">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 ml-1">{pkg.frequency}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 h-5 w-5 text-amber-500">
                          <Check className="h-5 w-5" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#booking"
                    className={`block w-full text-center py-3 px-4 rounded-lg transition-all ${pkg.popular ? "primary-button" : "secondary-button"}`}
                  >
                    Book {pkg.title}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
