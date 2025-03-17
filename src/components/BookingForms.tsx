import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

type BookingStep = "location" | "service" | "datetime" | "contact" | "review";

interface BookingFormsProps {
  currentStep?: BookingStep;
  onNextStep?: (step: BookingStep) => void;
  onPrevStep?: () => void;
  onComplete?: (formData: BookingFormData) => void;
}

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

const BookingForms: React.FC<BookingFormsProps> = ({
  currentStep = "location",
  onNextStep = () => {},
  onPrevStep = () => {},
  onComplete = () => {},
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    location: "",
    building: "",
    parkingSpot: "",
    servicePackage: "basic",
    date: undefined,
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    const nextSteps: Record<BookingStep, BookingStep> = {
      location: "service",
      service: "datetime",
      datetime: "contact",
      contact: "review",
      review: "review",
    };
    onNextStep(nextSteps[currentStep]);
  };

  const handleSubmit = () => {
    onComplete(formData);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case "location":
        return formData.location && formData.building && formData.parkingSpot;
      case "service":
        return formData.servicePackage;
      case "datetime":
        return formData.date && formData.time;
      case "contact":
        return formData.name && formData.email && formData.phone;
      case "review":
        return true;
      default:
        return false;
    }
  };

  const renderLocationStep = () => (
    <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
      <div className="space-y-2">
        <Label htmlFor="location">Select Your Location</Label>
        <Select
          value={formData.location}
          onValueChange={(value) => handleInputChange("location", value)}
        >
          <SelectTrigger id="location" className="w-full">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="downtown">Downtown Montreal</SelectItem>
            <SelectItem value="plateau">Plateau Mont-Royal</SelectItem>
            <SelectItem value="westmount">Westmount</SelectItem>
            <SelectItem value="ndg">Notre-Dame-de-Grâce</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="building">Building Name/Address</Label>
        <Input
          id="building"
          placeholder="Enter your building name or address"
          value={formData.building}
          onChange={(e) => handleInputChange("building", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="parkingSpot">Parking Spot Number</Label>
        <Input
          id="parkingSpot"
          placeholder="Enter your parking spot number"
          value={formData.parkingSpot}
          onChange={(e) => handleInputChange("parkingSpot", e.target.value)}
        />
      </div>
    </div>
  );

  const renderServiceStep = () => (
    <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
      <div className="space-y-2">
        <Label>Select Service Package</Label>
        <RadioGroup
          value={formData.servicePackage}
          onValueChange={(value) => handleInputChange("servicePackage", value)}
          className="space-y-4"
        >
          <div className="flex items-start space-x-3 p-4 rounded-lg border border-white/20 bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-colors">
            <RadioGroupItem value="exterior" id="exterior" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="exterior" className="font-bold text-lg">
                Exterior Package - $49.99
              </Label>
              <p className="text-sm text-gray-200">
                Exterior wash, tire shine, window cleaning, and wax protection.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-lg border border-white/20 bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-colors">
            <RadioGroupItem value="basic" id="basic" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="basic" className="font-bold text-lg">
                Basic Package - $89.99
              </Label>
              <p className="text-sm text-gray-200">
                Exterior wash plus interior vacuum, dashboard cleaning, and
                floor mat washing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-lg border border-white/20 bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-colors">
            <RadioGroupItem value="super" id="super" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="super" className="font-bold text-lg">
                Super Package - $149.99
              </Label>
              <p className="text-sm text-gray-200">
                Complete interior and exterior detailing with premium wax,
                leather conditioning, and fabric protection.
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderDateTimeStep = () => (
    <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
      <div className="space-y-2">
        <Label>Select Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.date ? (
                format(formData.date, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={formData.date}
              onSelect={(date) => handleInputChange("date", date)}
              initialFocus
              disabled={(date) => {
                // Disable past dates and Sundays
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today || date.getDay() === 0;
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Select Time</Label>
        <Select
          value={formData.time}
          onValueChange={(value) => handleInputChange("time", value)}
        >
          <SelectTrigger id="time" className="w-full">
            <SelectValue placeholder="Select time slot" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="9:00">9:00 AM</SelectItem>
            <SelectItem value="10:00">10:00 AM</SelectItem>
            <SelectItem value="11:00">11:00 AM</SelectItem>
            <SelectItem value="12:00">12:00 PM</SelectItem>
            <SelectItem value="13:00">1:00 PM</SelectItem>
            <SelectItem value="14:00">2:00 PM</SelectItem>
            <SelectItem value="15:00">3:00 PM</SelectItem>
            <SelectItem value="16:00">4:00 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderContactStep = () => (
    <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Special Instructions (Optional)</Label>
        <Textarea
          id="notes"
          placeholder="Any special requests or instructions"
          value={formData.notes}
          onChange={(e) => handleInputChange("notes", e.target.value)}
        />
      </div>
    </div>
  );

  const renderReviewStep = () => {
    const packagePrices = {
      exterior: "$49.99",
      basic: "$89.99",
      super: "$149.99",
    };

    const packageNames = {
      exterior: "Exterior Package",
      basic: "Basic Package",
      super: "Super Package",
    };

    return (
      <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-center mb-4">
          Review Your Booking
        </h3>

        <Card className="p-4 bg-black/20 backdrop-blur-md border border-white/20">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-medium">Service:</span>
              <span className="font-bold">
                {
                  packageNames[
                    formData.servicePackage as keyof typeof packageNames
                  ]
                }
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-medium">Price:</span>
              <span className="font-bold text-orange-500">
                {
                  packagePrices[
                    formData.servicePackage as keyof typeof packagePrices
                  ]
                }
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-medium">Date & Time:</span>
              <span>
                {formData.date ? format(formData.date, "PPP") : ""} at{" "}
                {formData.time}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-medium">Location:</span>
              <span>
                {formData.building}, Spot #{formData.parkingSpot}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-medium">Name:</span>
              <span>{formData.name}</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-medium">Contact:</span>
              <span>
                {formData.email} | {formData.phone}
              </span>
            </div>

            {formData.notes && (
              <div className="pt-2">
                <span className="font-medium">Special Instructions:</span>
                <p className="mt-1 text-sm">{formData.notes}</p>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300 mb-4">
            By clicking "Confirm Booking", you agree to our terms and
            conditions.
          </p>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "location":
        return renderLocationStep();
      case "service":
        return renderServiceStep();
      case "datetime":
        return renderDateTimeStep();
      case "contact":
        return renderContactStep();
      case "review":
        return renderReviewStep();
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
      {renderCurrentStep()}

      <div className="flex justify-between mt-8">
        {currentStep !== "location" ? (
          <Button variant="outline" onClick={onPrevStep}>
            Back
          </Button>
        ) : (
          <div></div> // Empty div to maintain spacing with flex justify-between
        )}

        {currentStep !== "review" ? (
          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Continue
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Confirm Booking
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingForms;
