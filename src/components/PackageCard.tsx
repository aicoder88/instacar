import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  bestFor?: string;
  onSelect?: () => void;
}

const PackageCard = ({
  name = "Basic Package",
  price = "$99",
  features = [
    "Exterior wash",
    "Interior vacuum",
    "Dashboard cleaning",
    "Window cleaning",
  ],
  isPopular = false,
  bestFor = "Regular maintenance",
  onSelect = () => console.log("Package selected"),
}: PackageCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative w-full max-w-[350px] h-[550px] rounded-xl overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 hover:shadow-purple-500/30 group"
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-purple-600 text-white px-4 py-1 rounded-bl-lg font-semibold text-sm">
          Most Popular
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
              {price}
            </span>
            <span className="text-gray-300 mb-1">/service</span>
          </div>
          {bestFor && (
            <div className="mt-2 flex items-center text-sm text-gray-400">
              <Sparkles className="h-3 w-3 mr-1 text-teal-500" />
              <span>Best for: {bestFor}</span>
            </div>
          )}
        </div>

        <div className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="mt-0.5 bg-gradient-to-r from-teal-500/20 to-purple-500/20 p-1 rounded-full">
                  <Check className="h-4 w-4 text-teal-500" />
                </span>
                <span className="text-gray-200">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Button
            onClick={onSelect}
            className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Select Package
          </Button>
        </div>
      </div>

      {/* Enhanced glassmorphic effect elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-teal-500/10 blur-xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-transparent to-indigo-500/5 blur-2xl"></div>
    </motion.div>
  );
};

export default PackageCard;
