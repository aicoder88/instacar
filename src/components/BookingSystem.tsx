import React, { useState } from "react";
import BookingSteps from "./BookingSteps";
import BookingForms from "./BookingForms";
import { motion } from "framer-motion";

type BookingStep = "location" | "service" | "datetime" | "contact" | "review";

interface BookingFormData {
  location: string;
  building: string;
  parkingSpot: string;
  servicePackage: string;
  date: Date | undefined;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

interface BookingSystemProps {
  onBookingComplete?: (formData: BookingFormData) => void;
  initialStep?: BookingStep;
}

const BookingSystem: React.FC<BookingSystemProps> = ({
  onBookingComplete = () => {},
  initialStep = "location",
}) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>(initialStep);
  const [isBookingComplete, setIsBookingComplete] = useState(false);

  const stepToNumber: Record<BookingStep, number> = {
    location: 1,
    service: 2,
    datetime: 3,
    contact: 4,
    review: 5,
  };

  const handleNextStep = (step: BookingStep) => {
    setCurrentStep(step);
  };

  const handlePrevStep = () => {
    const prevSteps: Record<BookingStep, BookingStep> = {
      location: "location",
      service: "location",
      datetime: "service",
      contact: "datetime",
      review: "contact",
    };
    setCurrentStep(prevSteps[currentStep]);
  };

  const handleBookingComplete = (formData: BookingFormData) => {
    onBookingComplete(formData);
    setIsBookingComplete(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto py-12 px-4 bg-gradient-to-br from-black/40 to-purple-950/30 backdrop-blur-xl rounded-xl border border-purple-500/20 shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
        Book Your Car Detailing
      </h2>

      {!isBookingComplete ? (
        <>
          <div className="mb-8">
            <BookingSteps currentStep={stepToNumber[currentStep]} />
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <BookingForms
              currentStep={currentStep}
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
              onComplete={handleBookingComplete}
            />
          </motion.div>
        </>
      ) : (
        <motion.div
          className="text-center py-12 px-6"
          variants={successVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
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
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Booking Confirmed!
          </h3>
          <p className="text-gray-200 mb-6">
            Thank you for booking with Insta Car Spa. We've sent a confirmation
            email with all the details.
          </p>
          <p className="text-gray-300 mb-8">
            Our team will arrive at your location at the scheduled time. Please
            ensure your vehicle is accessible.
          </p>
          <button
            onClick={() => setIsBookingComplete(false)}
            className="bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-90 text-white font-medium py-2 px-6 rounded-lg transition-opacity"
          >
            Book Another Service
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BookingSystem;
