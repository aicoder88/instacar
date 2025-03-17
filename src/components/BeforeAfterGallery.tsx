import React, { useState } from "react";
import ComparisonSlider from "./ComparisonSlider";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface BeforeAfterGalleryProps {
  title?: string;
  description?: string;
  comparisons?: Array<{
    id: string;
    beforeImage: string;
    afterImage: string;
    alt: string;
    caption?: string;
    carDetails?: string;
    serviceType?: string;
  }>;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({
  title = "Dramatic Transformations",
  description = "Don't just take our word for it. See the jaw-dropping before and after results our elite detailing team delivers. Swipe to reveal the stunning difference professional care makes.",
  comparisons = [
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
    {
      id: "4",
      beforeImage:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      alt: "Classic car restoration",
      caption:
        "This classic beauty had years of neglect. Our specialized restoration process brought back its original luster without damaging the delicate finish.",
      carDetails: "1968 Ford Mustang",
      serviceType: "Custom Restoration",
    },
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    <section className="w-full bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-orange-500">{title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            {description}
          </p>
        </div>

        <AnimatePresence>
          {isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 text-white"
                onClick={toggleFullscreen}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="relative w-[90vw] max-w-6xl">
                <ComparisonSlider
                  beforeImage={comparisons[activeIndex].beforeImage}
                  afterImage={comparisons[activeIndex].afterImage}
                  alt={comparisons[activeIndex].alt}
                />

                <div className="mt-4 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={prevSlide}
                    className="border-orange-500 text-orange-500 hover:bg-orange-950"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={nextSlide}
                    className="border-orange-500 text-orange-500 hover:bg-orange-950"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black p-1 shadow-xl">
            <div
              className="group relative cursor-pointer"
              onClick={toggleFullscreen}
            >
              <ComparisonSlider
                beforeImage={comparisons[activeIndex].beforeImage}
                afterImage={comparisons[activeIndex].afterImage}
                alt={comparisons[activeIndex].alt}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white">
                  View Fullscreen
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="border-orange-500 text-orange-500 hover:bg-orange-950"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="border-orange-500 text-orange-500 hover:bg-orange-950"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-black p-6 shadow-xl">
              <div className="mb-4 inline-block rounded bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
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
                  <div className="mr-3 h-10 w-10 rounded-full bg-orange-500 p-2">
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
                  <div className="mr-3 h-10 w-10 rounded-full bg-orange-500 p-2">
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

              <Button className="mt-6 w-full bg-orange-500 text-white hover:bg-orange-600">
                Book This Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
