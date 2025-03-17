import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PricingCalculator = () => {
  const [vehicleType, setVehicleType] = useState("sedan");
  const [packageType, setPackageType] = useState("basic");
  const [addOns, setAddOns] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  type VehicleType = "compact" | "sedan" | "suv";
  type PackageType = "basic" | "super" | "deluxe";

  interface PriceMap {
    [key: string]: {
      [key: string]: number;
    };
  }

  const vehiclePrices: PriceMap = {
    compact: {
      basic: 27,
      super: 45,
      deluxe: 200,
    },
    sedan: {
      basic: 35,
      super: 55,
      deluxe: 235,
    },
    suv: {
      basic: 42,
      super: 70,
      deluxe: 280,
    },
  };

  interface AddOnOption {
    id: string;
    name: string;
    price: {
      [key: string]: number;
    };
  }

  const addOnOptions: AddOnOption[] = [
    {
      id: "interior",
      name: "Interior Detailing",
      price: { compact: 30, sedan: 35, suv: 35 },
    },
    {
      id: "ceramic",
      name: "Ceramic Coating (Windshield)",
      price: { compact: 60, sedan: 60, suv: 60 },
    },
    {
      id: "polish",
      name: "Exterior Polish",
      price: { compact: 40, sedan: 50, suv: 60 },
    },
    {
      id: "engine",
      name: "Engine Cleaning",
      price: { compact: 35, sedan: 45, suv: 55 },
    },
  ];

  useEffect(() => {
    calculateTotal();
  }, [vehicleType, packageType, addOns]);

  const calculateTotal = () => {
    // Base price from package
    let price = vehiclePrices[vehicleType][packageType];

    // Add prices for add-ons
    addOns.forEach((addOnId) => {
      const addOn = addOnOptions.find((option) => option.id === addOnId);
      if (addOn) {
        price += addOn.price[vehicleType];
      }
    });

    setTotalPrice(price);
  };

  const handleAddOnChange = (addOnId: string) => {
    if (addOns.includes(addOnId)) {
      setAddOns(addOns.filter((id) => id !== addOnId));
    } else {
      setAddOns([...addOns, addOnId]);
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-black/80 to-fuchsia-900/40 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-500 to-fuchsia-500 bg-clip-text text-transparent">
            Pricing Calculator
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get an instant estimate for your car detailing service based on your
            vehicle type and desired services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-amber-500/30 pb-2">
                Build Your Package
              </h3>

              <div className="mb-6">
                <label className="block text-white mb-2 font-medium">
                  Vehicle Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    className={`py-2 rounded-md transition-all ${vehicleType === "compact" ? "bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white" : "bg-black/30 text-gray-300 hover:bg-black/50"}`}
                    onClick={() => setVehicleType("compact")}
                  >
                    Compact
                  </button>
                  <button
                    className={`py-2 rounded-md transition-all ${vehicleType === "sedan" ? "bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white" : "bg-black/30 text-gray-300 hover:bg-black/50"}`}
                    onClick={() => setVehicleType("sedan")}
                  >
                    Sedan
                  </button>
                  <button
                    className={`py-2 rounded-md transition-all ${vehicleType === "suv" ? "bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white" : "bg-black/30 text-gray-300 hover:bg-black/50"}`}
                    onClick={() => setVehicleType("suv")}
                  >
                    SUV/Van
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white mb-2 font-medium">
                  Package Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    className={`py-2 rounded-md transition-all ${packageType === "basic" ? "bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white" : "bg-black/30 text-gray-300 hover:bg-black/50"}`}
                    onClick={() => setPackageType("basic")}
                  >
                    Basic
                  </button>
                  <button
                    className={`py-2 rounded-md transition-all ${packageType === "super" ? "bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white" : "bg-black/30 text-gray-300 hover:bg-black/50"}`}
                    onClick={() => setPackageType("super")}
                  >
                    Super
                  </button>
                  <button
                    className={`py-2 rounded-md transition-all ${packageType === "deluxe" ? "bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white" : "bg-black/30 text-gray-300 hover:bg-black/50"}`}
                    onClick={() => setPackageType("deluxe")}
                  >
                    Deluxe
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  Add-on Services
                </label>
                <div className="space-y-2">
                  {addOnOptions.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={option.id}
                        checked={addOns.includes(option.id)}
                        onChange={() => handleAddOnChange(option.id)}
                        className="mr-3 h-5 w-5 accent-amber-500"
                      />
                      <label
                        htmlFor={option.id}
                        className="text-gray-300 flex-1"
                      >
                        {option.name}
                      </label>
                      <span className="text-amber-400">
                        ${option.price[vehicleType]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-amber-500/30 pb-2">
                Your Estimate
              </h3>

              <div className="flex-1 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">
                    Base Package (
                    {packageType.charAt(0).toUpperCase() + packageType.slice(1)}
                    ):
                  </span>
                  <span className="text-white font-medium">
                    ${vehiclePrices[vehicleType][packageType]}
                  </span>
                </div>

                {addOns.length > 0 && (
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300 mb-2">Add-ons:</p>
                    {addOns.map((addOnId) => {
                      const addOn = addOnOptions.find(
                        (option) => option.id === addOnId,
                      );
                      return (
                        <div
                          key={addOnId}
                          className="flex justify-between pl-4 mb-1"
                        >
                          <span className="text-gray-400">{addOn.name}</span>
                          <span className="text-white">
                            ${addOn.price[vehicleType]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white font-medium">
                    Total Estimate:
                  </span>
                  <span className="text-2xl font-bold text-amber-400">
                    ${totalPrice}
                  </span>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-fuchsia-500 text-white font-bold rounded-md hover:from-amber-600 hover:to-fuchsia-600 transition-all shadow-lg">
                  Book Now
                </button>

                <p className="text-gray-400 text-sm text-center mt-4">
                  * Prices may vary based on vehicle condition and specific
                  requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
