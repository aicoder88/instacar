"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

const comparisons = [
  {
    id: "1",
    beforeImage:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    alt: "Sedan exterior detailing transformation",
    caption:
      "This neglected BMW hadn't been properly detailed in over 2 years. Our Ultimate Transformation package restored the deep gloss and protection.",
    carDetails: "2020 BMW 5 Series",
    serviceType: "Ultimate Transformation",
  },
  {
    id: "2",
    beforeImage:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    alt: "SUV interior detailing transformation",
    caption:
      "From stained and neglected to showroom fresh. Our specialized interior extraction process removes even the toughest stains and odors.",
    carDetails: "2019 Audi Q7",
    serviceType: "Complete Refresh",
  },
  {
    id: "3",
    beforeImage:
      "https://images.unsplash.com/photo-1560009320-c01920eef9f8?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    alt: "Sports car detailing transformation",
    caption:
      "This Porsche's paint had severe swirl marks and water spots from improper washing. Our paint correction process restored the mirror finish.",
    carDetails: "2021 Porsche 911",
    serviceType: "Ultimate Transformation",
  },
];

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="gradient-text mb-4">See The Difference</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See the jaw-dropping before and
            after results our elite detailing team delivers. Swipe to reveal the
            stunning difference professional care makes.
          </p>
        </motion.div>

        <AnimatePresence>
          {isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            >
              <button
                className="absolute right-4 top-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
                onClick={toggleFullscreen}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative w-[90vw] max-w-6xl">
                <div className="relative w-full h-[70vh] overflow-hidden rounded-lg">
                  {/* Before Image (Full width) */}
                  <div className="absolute inset-0">
                    <img
                      src={comparisons[activeIndex].beforeImage}
                      alt={`Before: ${comparisons[activeIndex].alt}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* After Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={comparisons[activeIndex].afterImage}
                      alt={`After: ${comparisons[activeIndex].alt}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Slider Control */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                        <ArrowLeft className="h-3 w-3 text-white" />
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    Before
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    After
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={prevSlide}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </button>
                  <button
                    onClick={nextSlide}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all flex items-center"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-lg glass-card p-1"
          >
            <div
              className="group relative cursor-pointer"
              onClick={toggleFullscreen}
            >
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                {/* Before Image (Full width) */}
                <div className="absolute inset-0">
                  <img
                    src={comparisons[activeIndex].beforeImage}
                    alt={`Before: ${comparisons[activeIndex].alt}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* After Image (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={comparisons[activeIndex].afterImage}
                    alt={`After: ${comparisons[activeIndex].alt}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider Control */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                      <ArrowLeft className="h-3 w-3 text-white" />
                      <ArrowRight className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  Before
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  After
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full gradient-bg px-4 py-2 font-semibold text-white">
                  View Fullscreen
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={prevSlide}
                className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all flex items-center"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-6">
              <div className="mb-4 inline-block rounded gradient-bg px-3 py-1 text-sm font-semibold text-white">
                {comparisons[activeIndex].serviceType}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                {comparisons[activeIndex].carDetails}
              </h3>
              <p className="mb-6 text-gray-300">
                {comparisons[activeIndex].caption}
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full gradient-bg p-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Professional Tools
                    </h4>
                    <p className="text-sm text-gray-400">
                      We use only professional-grade products and equipment
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full gradient-bg p-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Time-Efficient</h4>
                    <p className="text-sm text-gray-400">
                      Most services completed in just a few hours
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#booking"
                className="primary-button block text-center w-full mt-6"
              >
                Book This Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
