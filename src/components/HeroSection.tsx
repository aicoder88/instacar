import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Shield, Award, ArrowRight } from "lucide-react";

interface TestimonialBubbleProps {
  text: string;
  author: string;
  position?: string;
  rating?: number;
  image?: string;
}

const TestimonialBubble = ({
  text = "Insta Car Spa transformed my car! It looks brand new again.",
  author = "John Smith",
  position = "Happy Customer",
  rating = 5,
  image,
}: TestimonialBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bg-black/40 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-purple-500/20 max-w-xs text-white hover:border-teal-500/30 transition-all duration-300"
    >
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={
              i < rating ? "text-teal-400 fill-teal-400" : "text-gray-500"
            }
          />
        ))}
      </div>
      <p className="text-sm italic mb-3">"{text}"</p>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-8 h-8 rounded-full object-cover border border-teal-500/30"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div className="ml-2">
          <p className="text-xs font-bold">{author}</p>
          <p className="text-xs text-gray-300">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-teal-500/30 transition-all duration-300 flex items-start gap-3"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-600/20 flex items-center justify-center text-teal-400 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  testimonials?: TestimonialBubbleProps[];
}

const HeroSection = ({
  title = "Montreal's Premier Mobile Car Detailing Experience",
  subtitle = "Why waste your precious time at car washes when our elite team brings the ultimate detailing experience directly to your building's parking garage? Reclaim your day while we transform your vehicle.",
  ctaText = "Book Your Detail",
  secondaryCtaText = "View Packages",
  onCtaClick = () => console.log("Book Now clicked"),
  onSecondaryCtaClick = () => console.log("View Packages clicked"),
  testimonials = [
    {
      text: "My BMW looks better than when I drove it off the lot! These guys are absolute magicians with paint correction.",
      author: "James Wilson",
      position: "BMW M5 Owner",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    },
    {
      text: "I've tried every detailing service in Montreal, and Insta Car Spa is simply in a different league. Worth every penny!",
      author: "Sophie Tremblay",
      position: "Repeat Client",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophie",
    },
    {
      text: "As a busy executive, having them come to my condo's garage saves me hours every month. The results are consistently flawless.",
      author: "Michael Chen",
      position: "Tesla Model S Owner",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      text: "The ceramic coating they applied has kept my car looking showroom-new for 8 months now, even through Montreal's harsh winter!",
      author: "Olivia Sanchez",
      position: "Audi Q7 Owner",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia",
    },
  ],
}: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    "https://images.unsplash.com/photo-1635260409898-6e7b16a03847?w=1920&q=80",
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1920&q=80",
    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1920&q=80",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const features = [
    {
      icon: <Clock size={20} />,
      title: "Time-Saving Convenience",
      description:
        "We come to your building's parking garage, saving you valuable time.",
    },
    {
      icon: <Shield size={20} />,
      title: "Premium Protection",
      description:
        "Advanced ceramic coatings and protective treatments for lasting results.",
    },
    {
      icon: <Award size={20} />,
      title: "Expert Technicians",
      description:
        "Certified professionals with years of experience in luxury vehicle care.",
    },
  ];

  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-black">
      {/* Background image with overlay and animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
          }}
        />
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      {/* Glassmorphic elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-teal-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
              {title}
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 h-auto rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 border-0"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                onClick={onSecondaryCtaClick}
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto rounded-full transition-all duration-300"
              >
                {secondaryCtaText}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </motion.div>

          {/* Right column - Glassmorphic card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-teal-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-teal-500/10 blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"></div>

              <h3 className="text-2xl font-bold text-white mb-6">
                What Our Clients Say
              </h3>

              <div className="space-y-4 relative">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < testimonial.rating!
                              ? "text-teal-400 fill-teal-400"
                              : "text-gray-500"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-200 mb-3">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-8 h-8 rounded-full object-cover border border-teal-500/30"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center text-white font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                      )}
                      <div className="ml-2">
                        <p className="text-xs font-bold text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-center mt-4">
                  <Button
                    variant="link"
                    className="text-teal-400 hover:text-teal-300"
                    onClick={() => (window.location.href = "#testimonials")}
                  >
                    Read More Reviews
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating testimonial bubbles - only show on mobile */}
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        <motion.div
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-[5%]"
        >
          <TestimonialBubble {...testimonials[0]} />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 left-[5%]"
        >
          <TestimonialBubble {...testimonials[1]} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
