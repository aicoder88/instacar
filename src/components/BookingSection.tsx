'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin, Building, Car, Calendar, Clock } from 'lucide-react'

type BookingStep = 'location' | 'service' | 'datetime' | 'contact' | 'review'

interface BookingFormData {
  location: string
  building: string
  parkingSpot: string
  servicePackage: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  notes: string
}

export default function BookingSection() {
  const [currentStep, setCurrentStep] = useState<BookingStep>('location')
  const [isBookingComplete, setIsBookingComplete] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    location: '',
    building: '',
    parkingSpot: '',
    servicePackage: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const steps = [
    { id: 'location', label: 'Location', number: 1 },
    { id: 'service', label: 'Service', number: 2 },
    { id: 'datetime', label: 'Date & Time', number: 3 },
    { id: 'contact', label: 'Contact', number: 4 },
    { id: 'review', label: 'Review', number: 5 }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, servicePackage: service }))
  }

  const handleNextStep = () => {
    const nextSteps: Record<BookingStep, BookingStep> = {
      location: 'service',
      service: 'datetime',
      datetime: 'contact',
      contact: 'review',
      review: 'review'
    }
    setCurrentStep(nextSteps[currentStep])
  }

  const handlePrevStep = () => {
    const prevSteps: Record<BookingStep, BookingStep> = {
      location: 'location',
      service: 'location',
      datetime: 'service',
      contact: 'datetime',
      review: 'contact'
    }
    setCurrentStep(prevSteps[currentStep])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === 'review') {
      // Submit the form
      setIsBookingComplete(true)
    } else {
      handleNextStep()
    }
  }

  const renderLocationForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
            Area/Neighborhood
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select your area</option>
              <option value="downtown">Downtown Montreal</option>
              <option value="oldmontreal">Old Montreal</option>
              <option value="griffintown">Griffintown</option>
              <option value="westmount">Westmount</option>
              <option value="plateau">Plateau Mont-Royal</option>
              <option value="outremont">Outremont</option>
              <option value="laval">Laval</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="building" className="block text-sm font-medium text-gray-300 mb-1">
            Building Name/Address
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="building"
              name="building"
              value={formData.building}
              onChange={handleInputChange}
              required
              placeholder="Enter your building name or address"
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="parkingSpot" className="block text-sm font-medium text-gray-300 mb-1">
            Parking Spot/Level (Optional)
          </label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="parkingSpot"
              name="parkingSpot"
              value={formData.parkingSpot}
              onChange={handleInputChange}
              placeholder="E.g. P2-45 or Level B1"
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="primary-button w-full"
        >
          Continue <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </form>
  )

  const renderServiceForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">Select a Service Package</h3>

        <div className="grid grid-cols-1 gap-4">
          {[
            {
              id: "exterior",
              name: "Exterior",
              price: "$79",
              description: "Exterior wash, wheels, tires, windows, quick wax",
            },
            {
              id: "basic",
              name: "Basic",
              price: "$129",
              description: "Exterior + interior vacuum, dashboard, console, glass",
              popular: true,
            },
            {
              id: "super",
              name: "Super",
              price: "$199",
              description: "Basic + clay bar, premium wax, leather, carpet shampoo",
            },
          ].map((service) => (
            <div
              key={service.id}
              className={`relative p-4 rounded-lg cursor-pointer transition-all ${formData.servicePackage === service.id ? "bg-gradient-to-r from-amber-500/20 to-fuchsia-500/20 border-2 border-amber-500" : "bg-white/10 border border-white/20 hover:border-white/40"}`}
              onClick={() => handleServiceSelect(service.id)}
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 gradient-bg text-white text-xs font-bold px-2 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                <span className="text-xl font-bold gradient-text">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={handlePrevStep}
          className="secondary-button"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back
        </button>
        <button
          type="submit"
          disabled={!formData.servicePackage}
          className="primary-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </form>
  )

  const renderDateTimeForm = () => {
    // This would normally use a date picker component
    // For simplicity, we're using a basic select
    const availableTimes = [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
    ]

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
              Select Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
              Select Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={handlePrevStep}
            className="secondary-button"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back
          </button>
          <button
            type="submit"
            disabled={!formData.date || !formData.time}
            className="primary-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    )
  }

  const renderContactForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">
            Special Instructions (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            placeholder="Any special requests or information about your vehicle"
            className="w-full px-4