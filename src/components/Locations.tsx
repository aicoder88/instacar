"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Downtown Montreal",
    address: "1350 RENE-LEVESQUE OUEST, H3G 1T4",
    phone: "(438) 226-3391",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
  },
  {
    id: 2,
    name: "Maisonneuve",
    address: "600 BLVD. DE MAISONNEUVE OUEST, H3A 3J2",
    phone: "(438) 226-3391",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
  },
  {
    id: 3,
    name: "McGill College",
    address: "2001 AVENUE MCGILL COLLEGE, H3A 1G1",
    phone: "(438) 226-3391",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
  },
  {
    id: 4,
    name: "Robert-Bourassa",
    address: "2001 BLVD ROBERT-BOURASSA, H3A 2A6",
    phone: "(438) 226-3391",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
  },
  {
    id: 5,
    name: "René-Lévesque",
    address: "1100 RENÉ-LÉVESQUE BLVD W, H3B 4N4",
    phone: "(438) 226-3391",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
  },
  {
    id: 6,
    name: "Park Avenue",
    address: "3575 PARK AVE, MONTREAL, QC H2X 3P9",
    phone: "(438) 226-3391",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Our Locations</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We provide our premium car detailing services at these convenient
            locations throughout Montreal. We also offer mobile services that
            come directly to your building's parking garage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card p-6 h-full transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-white/20 pb-2">
                  {location.name}
                </h3>

                <div className="flex items-start mb-3">
                  <MapPin className="text-amber-500 mr-3 h-5 w-5 mt-0.5" />
                  <span className="text-gray-300">{location.address}</span>
                </div>

                <div className="flex items-center mb-3">
                  <Phone className="text-amber-500 mr-3 h-5 w-5" />
                  <span className="text-gray-300">{location.phone}</span>
                </div>

                <div className="flex items-center">
                  <Clock className="text-amber-500 mr-3 h-5 w-5" />
                  <span className="text-gray-300">{location.hours}</span>
                </div>

                <a
                  href="#booking"
                  className="primary-button block text-center w-full mt-6"
                >
                  Book at this Location
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
