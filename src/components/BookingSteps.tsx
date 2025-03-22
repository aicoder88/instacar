import React from "react";
import { cn } from "../lib/utils";

interface BookingStepsProps {
  currentStep?: number;
  steps?: Array<{
    id: number;
    name: string;
  }>;
}

const BookingSteps = ({
  currentStep = 1,
  steps = [
    { id: 1, name: "Location" },
    { id: 2, name: "Service" },
    { id: 3, name: "Date/Time" },
    { id: 4, name: "Contact" },
    { id: 5, name: "Review" },
  ],
}: BookingStepsProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-lg">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200",
                  currentStep > step.id
                    ? "bg-orange-500 text-white"
                    : currentStep === step.id
                      ? "bg-orange-500 text-white ring-4 ring-orange-300/50"
                      : "bg-gray-200 text-gray-500",
                )}
              >
                {currentStep > step.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium",
                  currentStep >= step.id ? "text-orange-500" : "text-gray-500",
                )}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-1 flex-1 mx-2",
                  currentStep > index + 1 ? "bg-orange-500" : "bg-gray-200",
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
